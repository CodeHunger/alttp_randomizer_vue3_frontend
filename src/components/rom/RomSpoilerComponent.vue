<script setup lang="ts">

import {PropType, ref, toRef} from "vue";
import {Tab, Tabs} from "vue3-tabs-component";
import SelectComponent from "@/components/input/SelectComponent.vue";
import {RomData} from "@/dto/romData";

const show = ref(true)

const locations = [
  "piet",
  "piet2",
  "henk",
]

const items = [
  "sword",
  "stick",
  "frying pan",
]

const customLabel = (key: string) => {
  return key;
}

const currentLocation = ref();
const itemFilter = ref();

const props = defineProps({
  spoiler: {
    required: true,
    type: Object as PropType<RomData['spoiler']>,
  }
})

const spoilers = toRef<RomData['spoiler']>(props.spoiler)

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
            :options="locations"
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
        <tab v-for="(section, key) in spoilers" v-bind:key="key" :name="key">
          <table class="table table-striped table-sm" v-if="key==='Shops'">
          </table>
          <table class="table table-striped table-sm" v-else-if="key==='Playthrough'">
          </table>
          <table class="table table-striped table-sm" v-else>
            <thead>
              <tr>
                <th class="w-50">Location</th>
                <th class="w-50">Item</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(rowValue, rowKey) in section" v-bind:key="rowKey" class="spoil-item-location">
                <td>{{String(rowKey).split(':')[0]}}</td> <!---->
                <td class="item">{{ $t('item.' + String(rowValue).split(":")[0])}}</td>
              </tr>
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