<script setup lang="ts">

import {ref} from "vue";
import VueMultiselect from "vue-multiselect/src/Multiselect.vue";

const props = defineProps({
  noRace: {
    type: Boolean,
    default: false
  },
  options: {
    default: () => []
  },
  placeholder: {
    type: String,
    default: "Select option"
  },
  clearable: {
    type: Boolean,
    default: true
  },
  customLabel: {
    type: String,
    default: () => { return 'henkie'}
  },
  value: {
    type: Object,
    default: null
  },
})

const noRace = ref(props.noRace)
const options = ref(props.options)
const placeholder = ref(props.placeholder)
const clearable = ref(props.clearable)
const customLabel = ref(props.customLabel)
const value = ref(props.value)


const emit = defineEmits(['onSelect', 'onClear'])

function onSelect(selection: unknown) {
  emit('onSelect', selection);
}

function onClear() {
  emit('onClear');
}
</script>


<template>
  <div class="flex-input">
    <div class="input-group" role="group">
      <div v-if="$slots.default" class="input-group-prepend">
        <span class="input-group-text">
          <slot></slot>
          <sup v-if="noRace">
            <strong>*</strong>
          </sup>
        </span>
      </div>
      <vue-multiselect
        class="form-control"
        v-model="value"
        :options="options"
        :show-labels="false"
        :allow-empty="false"
        :custom-label="customLabel"
        :placeholder="placeholder"
        @select="onSelect"
      ></vue-multiselect>
      <div v-if="clearable" class="input-group-append">
        <span class="input-group-text cursor-pointer" @click="onClear">
          <img class="icon" src="../../assets/x.svg" alt="clear" />
        </span>
      </div>
    </div>
    <span v-if="$slots['tooltip']" v-tooltip="$slots['tooltip'][0].text">
      <img class="icon" src="/i/svg/question-mark.svg" alt="tooltip" />
    </span>
  </div>
</template>

<style scoped>
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

.input-group-prepend, .input-group-append {
  display: flex;
}
</style>