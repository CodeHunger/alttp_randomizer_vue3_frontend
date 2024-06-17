<template>
  <div class="card border-info">
    <div class="card-header">
      <a v-if="anchor" class="anchor" :id="anchor"></a>
      <h3 class="card-title text-white">
        <slot name="header"></slot>
      </h3>
    </div>
    <slot name="body"></slot>
  </div>
</template>

<style scoped>
h3 {
  margin: 0;
  padding: 0;
}

.card-header {
  background-color: v-bind(headerColor);
}
</style>

<script setup>
import {ref, toRefs} from 'vue';

const props = defineProps({
  anchor: String,
  headerColor: {
    type: String,
    default: '#17a2b8',
  }
})
const { anchor, headerColor } = toRefs(props);

</script>