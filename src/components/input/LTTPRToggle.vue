<script setup lang="ts">
import Toggle from "@vueform/toggle";

const model = defineModel({type: Boolean, required: true});
</script>

<template>
  <Toggle v-model="model" class="alttpr-toggle">
    <template v-slot:label="{ checked, classList }">
      <span :class="classList.label">{{ checked ? 'Yes' : 'No' }}</span>
    </template>
  </Toggle>
  <p>
    <slot></slot>
  </p>
</template>

<style scoped>
.alttpr-toggle {
  --toggle-height: 27px;
  --toggle-width: 62px;

  --toggle-text-on: #ffffff;
  --toggle-text-off: #ffffff;

  --toggle-bg-on: blue;
  --toggle-bg-off: rgb(191, 203, 217);
  --toggle-border-on: blue;
  --toggle-border-off: rgb(191, 203, 217);
  --toggle-border: 0.25rem;
  --toggle-ring-width: 2px;
  border-radius: 100px;
  margin-bottom: 0.25rem;

  &::selection{
    background: red;
  }

  &::-moz-selection{
    background: red;
  }
}

span {
  font-weight: bold;
}
</style>