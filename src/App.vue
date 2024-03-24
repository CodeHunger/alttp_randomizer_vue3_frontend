<template>
  <nav-component />
  <div class="container">
    <router-view/>
  </div>

</template>

<style scoped>
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 70px;
}
</style>

<script setup lang="ts">
import NavComponent from "@/components/NavComponent.vue";
import watchLanguage from "@/composables/watchLanguage";
import setupLanguage from "@/composables/setupLanguage";

setupLanguage();
watchLanguage();

</script>