<script setup lang="ts">

import {computed, PropType, ref, toRef, watch} from "vue";
import {Tab, Tabs} from "vue3-tabs-component";
import SelectComponent from "@/components/input/SelectComponent.vue";
import {useI18n} from "vue-i18n";
import {SpoilerDataSanitized} from "@/dto/spoilerDataSanitized";

const show = ref(true)

const { t } = useI18n();

const itemLabel = (itemName: string) => {
  return t('item.' + itemName)
}

const currentLocation = ref();
const currentItem = ref();

const spoilerWithoutLocationData = [
  "Bosses",
  "playthrough",
  "meta",
  "Shops"
];

const props = defineProps({
  spoiler: {
    required: true,
    type: Object as PropType<SpoilerDataSanitized>,
  }
})

const spoilers = toRef<SpoilerDataSanitized>(props.spoiler)

const regions = computed(() => {
  let computed:string[] = [];

  Object.keys(spoilers.value.regions).forEach((key: string) => {
    if (!spoilerWithoutLocationData.includes(key)) {
      const currentLocationsSanitized = Object.keys(spoilers.value.regions[key]).map((locationString: string) => locationString.replace(':1', ''));
      computed = [
        ...computed,
        ...currentLocationsSanitized
      ];
    }
  });
  return computed.sort();
});

const items = computed(() => {
  let computed:string[] = [];

  Object.keys(spoilers.value.regions).forEach((key: string) => {
    if (!spoilerWithoutLocationData.includes(key)) {
      const currentItemsSanitized = Object.values(spoilers.value.regions[key]);
      computed = [
        ...computed,
        ...currentItemsSanitized
      ];
    } else if (key === 'Shops') {
      Object.keys(spoilers.value[key]).forEach((shopId: string) => {
        for(let i = 0; i < 3; i++) {
          if (spoilers.value[key][shopId]['item_' + i]) {
            computed.push(spoilers.value[key][shopId]['item_' + i].item);
          }
        }
      });
    }
  });


  return [...new Set(computed.map((item) => item.replace(':1', '')))].sort(); // make values unique and translate values
})

watch(currentLocation, (newValue, oldValue) => {
  console.log(`currentLocation changed from ${oldValue} to ${newValue}`);
});

const searchResults = computed(() => {
  console.log(currentLocation.value, currentItem.value);
  const templates: {[key: string]: string} = {};



  for (const [regionName, regionData] of Object.entries(spoilers.value.regions)) {
    let amount = 0;

    for (const [location, item] of Object.entries(regionData)) {
      if (item === currentItem.value + ":1") {
        amount++;
      }
    }

    if (currentLocation.value && Object.keys(regionData).filter((location) => location.includes(currentLocation.value)).length) {
      amount++;
    }

    if (amount) {
      const numberBubble = document.createElement('span');
      numberBubble.className = 'counter';
      numberBubble.innerHTML = " " + amount
      templates[regionName] = numberBubble.outerHTML;
    } else {
      templates[regionName] = '';
    }
  }

  if (!currentItem.value) {
    templates['playthrough'] = '';
  } else {
    const regExp = new RegExp(currentItem.value, "gi");
   let playthoughCount = 0;

    console.log('1221212', spoilers.value.playthrough)

    Object.values(spoilers.value.playthrough).forEach((step) => {
      Object.values(step).forEach((subStep) => {
        Object.values(subStep).forEach((item) => {
          if (String(item).split(':')[0] === currentItem.value) {
            playthoughCount++;
          }
        });
      });
    })

    if (playthoughCount) {
      const numberBubble = document.createElement('span');
      numberBubble.className = 'counter';
      numberBubble.innerHTML = " " + playthoughCount
      templates['playthrough'] = numberBubble.outerHTML;
    } else {
      templates['playthrough'] = '';
    }
  }

  return templates;
})
</script>

<template>
  <div class="spoiler col-md-12">
    <div class="spoiler-toggle" @click="show = !show">
      <img v-if="!show" src="../../assets/plus.svg" />
      <img v-if="show" src="../../assets/minus.svg" />
      Spoiler!
    </div>
    <div v-if="show" class="spoiler-tabed">
      <div class="row filters">
        <div class="col">
          <select-component
            v-model="currentLocation"
            :options="regions"
            :show-labels="false"
            :placeholder="'Select location'"
            :clearable="true"
          >Select location</select-component>
        </div>
        <div class="col">
          <select-component
            v-model="currentItem"
            :options="items"
            :show-labels="false"
            :placeholder="'Search for item'"
            :clearable="true"
            :custom-label="itemLabel"
          >Search for item</select-component>
        </div>
      </div>
      <tabs>
        <template ref="test">
          <span>32</span>
        </template>
        <tab :name="'Bosses'">
          <table class="table table-striped table-sm">
            <thead>
            <tr>
              <th class="w-50">Location</th>
              <th class="w-50">Boss</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="(bossName, location) in spoilers.bosses" v-bind:key="location" class="spoil-item-location">
              <td>{{String(location).split(':')[0]}}</td> <!---->
              <td class="item">{{ $t('item.' + String(bossName).split(":")[0])}}</td>
            </tr>
            </tbody>
          </table>
        </tab>
        <tab v-for="(data, regionName) in spoilers.regions"
             v-bind:key="regionName"
             :name="regionName"
             :suffix="searchResults[regionName]"
        >
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th class="w-50">Location {{ data[currentLocation] ? "1" : 0 }}</th>
                <th class="w-50">Item</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(rowValue, rowKey) in data" v-bind:key="rowKey"
                  class="spoil-item-location"
                  :class="{match: currentItem === String(rowValue).split(':')[0] || currentLocation === String(rowKey).split(':')[0]}"
              >
                <td>{{String(rowKey).split(':')[0]}}</td> <!---->
                <td class="item">{{ $t('item.' + String(rowValue).split(":")[0])}}</td>
              </tr>
            </tbody>
          </table>
        </tab>
        <tab :name="'Shops'">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th class="w-20">Location</th>
                <th class="w-20">Type</th>
                <th class="w-20">Item 1</th>
                <th class="w-20">Item 2</th>
                <th class="w-20">Item 3</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="shop in spoilers.shops" v-bind:key="shop.location" class="spoil-item-location">
                <td>{{shop.location}}</td> <!---->
                <td>{{shop.type}}</td>
                <td class="item" v-if="shop.item_0">{{ $t('item.' + String(shop.item_0.item).split(":")[0])}}</td>
                <td class="item" v-if="shop.item_1">{{ $t('item.' + String(shop.item_1.item).split(":")[0])}}</td>
                <td class="item" v-if="shop.item_2">{{ $t('item.' + String(shop.item_2.item).split(":")[0])}}</td>
              </tr>
            </tbody>
          </table>
        </tab>
        <tab :name="'Playthrough'"
             :suffix="searchResults['playthrough']"
        >
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th class="w-20">{{ $t('Sphere') }}</th>
                <th class="w-20">{{ $t('Region') }}</th>
                <th class="w-20">{{ $t('Location') }}</th>
                <th class="w-20">{{ $t('Item') }}</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(sphere, index) in spoilers.playthrough" v-bind:key="index">
                <template v-if="!isNaN(index)">
                  <template  v-for="(data, region) in sphere"  v-bind:key="region">
                    <template v-for="(item, key) in data"  v-bind:key="key">
                      <tr :class="{match: currentItem === String(item).split(':')[0]}">
                        <td>{{index}}</td>
                        <td>{{region}}</td>
                        <td>{{String(key).split(':')[0]}}</td>
                        <td>{{t('item.' + String(item).split(':')[0])}}</td>
                      </tr>
                    </template>
                  </template>
                </template>
              </template>
            </tbody>
          </table>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<style scoped>
.spoiler {
  border: 1px solid #808080;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 0 15px;
}
.spoiler-toggle {
  color: #808080;
  cursor: default;
  font-size: 10px;
  font-weight: bold;
  padding: 5px;
}

:deep .tabs-component-tabs {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

:deep li {
  display: list-item;
  text-align: -webkit-match-parent;
}

:deep a {
  cursor: pointer;
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}

:deep a.is-active {
  color: #fff;
  background-color: #007bff;
}

table {
  margin-top: 1rem;
}

.filters {
  margin-bottom: 1rem;
}

:deep .counter {
  display: inline-block;
  padding: 0.25em 0.6em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  border-radius: 10rem;

  color: #fff;
  background-color: #6c757d;

  position: relative;
  top: -2px;
  left: 5px;
}

.match td {
  background-color: #17a2b8 !important;
}
</style>