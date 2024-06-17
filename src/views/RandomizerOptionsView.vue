<script setup lang="ts">

import CardComponent from "@/components/CardComponent.vue";
import SelectComponent from "@/components/input/SelectComponent.vue";
import {ref} from "vue";

const options = ["option1", "option2", "option3"];
const value = ref("option1")

const menuStructure = [
  {
    "name": "Randomizer",
    "version": "123456",
    "author": "Veetorp",
    "tabs": [],
    "presets": [
      "default",
      "beginner",
      "veetorp",
      "crosskeys",
      "quick",
      "nightmare",
      "custom"
    ],
    "sections": [
      {
        "name": "item placement",
        "inputs": ["glitchesRequired", "itemPlacement", "dungeonItemShuffle", "accesibility"]
      },
      {
        "name": "goal",
        "inputs": ["goal", "openTower", "ganonVulnerable"]
      },
      {
        "name": "gameplay",
        "inputs": ["wordState", "entraceShuffle", "bossShuffle", "enemyShuffle", "hints"]
      },
      {
        "name": "difficulty",
        "inputs": ["swords", "itemPool", "itemFunctionality", "enemyDamage", "enemyHealth"]
      }
    ]
  }
]

const randomizer = ref(menuStructure[0]);
const customLabel = (selection: string) => {
  return slection;
}

const randomizerLabel = (randomizer) => {
  return randomizer.name;
}
</script>

<template>
  <card-component header-color="#28a745">
    <template v-slot:header>Randomizer</template>

    <template v-slot:body>
      <div class="card-body">
        <template v-if="menuStructure.length > 1">
          <div class="input-randomizer-wrapper">
            <select-component select-component :options="options"
                              :value="randomizer"
                              :custom-label="randomizerLabel"
                              :show-labels="false"
                              :clearable="false"
            >Select randomizer</select-component>
          </div>
          <p><b>Randomizer details</b></p>
          <ul>
            <li><b>Author:</b> {{randomizer.author}}</li>
            <li><b>Version:</b> {{randomizer.version}}</li>
          </ul>
        </template>

        <div class="card border-info my-1">
          <div class="inputs-wrapper">
            <select-component select-component :options="options"
                              :value="value"
                              :show-labels="false"
                              :clearable="false"
            >Select Preset</select-component>
          </div>


          <div v-for="section in randomizer.sections" :key="section.name">
            <h3>{{ section.name }}</h3>
            <div class="row inputs-wrapper">
              <div class="col-xl-4 col-lg-6 my-1" v-for="input in section.inputs" :key="input"
                :class="{'col-xl-6': section.inputs.length === 2 || section.inputs.length === 4, 'col-xl-4': section.inputs.length !== 2 && section.inputs.length !== 4}"
              >
                <select-component select-component :options="options"
                                  :value="value"
                                  :show-labels="false"
                                  :placeholder="'Select option'"
                                  :clearable="false"
                >{{input}}</select-component>
              </div>
            </div>
          </div>

        </div>
      </div>

    </template>
  </card-component>
</template>

<style scoped>
h3 {
  font-size: 1.125rem;
  margin-top: 0.2rem;
  margin-bottom: 0;
  padding: 0.5rem !important;
  border-bottom: 1px solid #dee2e6 !important;
  font-weight: 700;
}

.inputs-wrapper {
  margin: 1rem;
}

.input-randomizer-wrapper {
  margin-bottom: 1rem;
}
</style>