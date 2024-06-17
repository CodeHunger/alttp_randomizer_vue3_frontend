<script setup lang="ts">
import GameComponent from "@/components/rom/RomComponent.vue";
import { getRom } from "@/composables/getRom";
import PageView from "@/views/PageView.vue";

const {loading, rom} = getRom('daily');

</script>

<template>
  <PageView content-key="daily"></PageView>
  <br>
  <game-component v-if="!loading && rom" :rom="rom"></game-component>
</template>

<style scoped>

PageView {
  margin-bottom: 1rem;
}
</style>