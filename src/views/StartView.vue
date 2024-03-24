<template>
  <h1>{{ $t('start.header') }}</h1>
  <div class="card card-body">
    <h2>{{ $t('start.subheader') }}</h2>
    <card-component v-for="card in $tm('start.cards')" :key="card.header">
      <template v-slot:header>{{$rt(card.header)}}</template>
      <template v-slot:body>
        <div class="card-body" v-for="paragraph in card.content" :key="paragraph" v-html="$rt(paragraph)"></div>
      </template>
    </card-component>
  </div>
</template>

<script setup lang="ts">
import CardComponent from "@/components/CardComponent.vue";
</script>

<style scoped>

</style>