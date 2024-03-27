<script setup lang="ts">
import GameComponent from "@/components/rom/RomComponent.vue";
import { getRom } from "@/composables/getRom";

const props = defineProps({
  hash: {
    required: true,
    type: String,
  }
})

const {loading, rom, status} = getRom(props.hash);

</script>

<template>
  <game-component v-if="!loading && rom" :rom="rom"></game-component>
</template>

<style scoped>

</style>