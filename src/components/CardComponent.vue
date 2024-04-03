<template>
  <div class="card border-info mt-4">
    <div class="card-header bg-info">
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

.bg-info {
  background-color: #17a2b8 !important;
}
</style>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  anchor: String
})
const { anchor } = toRefs(props);

</script>