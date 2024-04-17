<script setup lang="ts">

import {computed, PropType, ref, toRef} from "vue";
import {Tab, Tabs} from "vue3-tabs-component";
import SelectComponent from "@/components/input/SelectComponent.vue";
import {RomData} from "@/dto/romData";
import {useI18n} from "vue-i18n";
import {SpoilerDataSanitized} from "@/dto/spoilerDataSanitized";

const show = ref(true)

const customLabel = (key: string) => {
  return key;
}

const { t } = useI18n();

const currentLocation = ref();
const itemFilter = ref();

const tabsOrder = [
  "Bosses",
  "Special",
  "Equipped",
  "Dark World",
  "Ice Palace",
  "Dark Palace",
  "Light World",
  "Misery Mire",
  "Skull Woods",
  "Turtle Rock",
  "Castle Tower",
  "Ganons Tower",
  "Swamp Palace",
  "Thieves Town",
  "Desert Palace",
  "Hyrule Castle",
  "Tower Of Hera",
  "Death Mountain",
  "Eastern Palace",
  "Shops",
  "playthrough",
  "meta",
];

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

// const spoilersSorted = computed(() => {
//   const computed:{name: string, value: unknown}[] = [];
//
//   Object.keys(spoilers.value).forEach((key: string) => {
//     computed.push({
//       name: key,
//       value: spoilers.value[key],
//     })
//   });
//
//   return computed.sort((a, b) => {
//     return tabsOrder.indexOf(a.name) < tabsOrder.indexOf(b.name) ? -1 : 1;
//   })
// });

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

  return [...new Set(computed.map((item) => t('item.' + item.replace(':1', ''))))].sort(); // make values unique and translate values
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
            :options="regions"
            :value="currentLocation"
            :custom-label="customLabel"
            :show-labels="false"
            :placeholder="'Select location'"
            :clearable="true"
          >Select location</select-component>
        </div>
        <div class="col">
          <select-component
            :options="items"
            :value="itemFilter"
            :custom-label="customLabel"
            :show-labels="false"
            :placeholder="'Search for item'"
            :clearable="true"
          >Search for item</select-component>
        </div>
      </div>
      <tabs>
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
        <tab v-for="(data, regionName) in spoilers.regions" v-bind:key="regionName" :name="regionName">
          <table class="table table-striped table-sm">
            <thead>
            <tr>
              <th class="w-50">Location</th>
              <th class="w-50">Item</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(rowValue, rowKey) in data" v-bind:key="rowKey" class="spoil-item-location">
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
        <tab :name="'Playthrough'">
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
                    <template v-for="(location, key) in data"  v-bind:key="key">
                      <tr>
                        <td>{{index}}</td>
                        <td>{{region}}</td>
                        <td>{{String(key).split(':')[0]}}</td>
                        <td>{{String(location).split(':')[0]}}</td>
                      </tr>
                    </template>
                  </template>
                </template>
              </template>

            </tbody>
          </table>
        </tab>

<!--        <tab v-for="item in spoilersSorted" v-bind:key="item.name" :name="item.name">-->
<!--          <table class="table table-striped table-sm" v-if="item.name==='Shops'">-->
<!--          </table>-->
<!--          <table class="table table-striped table-sm" v-else-if="item.name==='Playthrough'">-->
<!--          </table>-->
<!--          <table class="table table-striped table-sm" v-else-if="item.name==='meta'">-->
<!--            <thead>-->
<!--            <tr>-->
<!--              <th class="w-50">{{ $t('Setting') }}</th>-->
<!--              <th class="w-50">{{ $t('Value') }}</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr v-for="(rowValue, rowKey) in item.value" v-bind:key="rowKey" class="spoil-item-location">-->
<!--              <td>{{String(rowKey).split(':')[0]}}</td> &lt;!&ndash;&ndash;&gt;-->
<!--              <td class="item">{{ String(rowValue).split(":")[0] }}</td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--          </table>-->
<!--          <table class="table table-striped table-sm" v-else>-->
<!--            <thead>-->
<!--              <tr>-->
<!--                <th class="w-50">Location</th>-->
<!--                <th class="w-50">Item</th>-->
<!--              </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--              <tr v-for="(rowValue, rowKey) in item.value" v-bind:key="rowKey" class="spoil-item-location">-->
<!--                <td>{{String(rowKey).split(':')[0]}}</td> &lt;!&ndash;&ndash;&gt;-->
<!--                <td class="item">{{ $t('item.' + String(rowValue).split(":")[0])}}</td>-->
<!--              </tr>-->
<!--            </tbody>-->
<!--          </table>-->

<!--        </tab>-->
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
.spoiler-text {
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



</style>