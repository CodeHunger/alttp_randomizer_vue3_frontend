<script setup lang="ts">
import VueMultiselect from "vue-multiselect/src/Multiselect.vue";
import "./sprites.scss"
import {getSprites} from "@/composables/getSpriteData";
const model = defineModel({type: Object});



const { sprites } = getSprites()
const spriteOptions = sprites;

</script>
<template>
  <div class="flex-input">
    <div class="input-group" role="group">
      <div class="input-group-prepend">
        <span class="input-group-text">
          {{ $t("rom.settings.play_as")}}
        </span>
      </div>
      <vue-multiselect
        class="form-control"
        v-model="model"
        :options="spriteOptions"
        :show-labels="false"
        :allow-empty="false"
      >
        <template #singleLabel="{ option }">
          <div class="option__desc">
            <div
              class="float-left"
              :class="'icon-custom-' + option.name.replace(/[ \)\(\.\']/g, '')"
            ></div>
            <div class="option__title sprite-name">{{ option.name }}</div>
          </div>
        </template>
        <template #option="{ option }">
          <div class="option__desc">
            <div
              class="float-left"
              :class="'icon-custom-' + option.name.replace(/[ \)\(\.\']/g, '')"
            ></div>
            <span class="option__title sprite-name">{{ option.name }}</span>
          </div>
        </template>
      </vue-multiselect>
    </div>
  </div>
</template>

<style scoped>
@import "./sprites.scss"

.flex-input {
  display: flex;
  flex-direction: row;
}
.icon {
  vertical-align: -0.9em;
}
.has-tooltip {
  cursor: help;
}
.cursor-pointer {
  cursor: pointer;
}

.sprite-name {
  margin-left: 2rem;
  font-size: 1.1rem;
  padding-top: 0.2rem;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.6;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.form-control {
  padding: 0;
  border-width: 0;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.6;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

.input-group-prepend {
  display: flex;
}
.float-left {
  float: left!important;
}
</style>