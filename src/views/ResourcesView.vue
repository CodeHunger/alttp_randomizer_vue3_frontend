<template>
  <h1>{{ $t('resources.header') }}</h1>
  <div class="card card-body">
    <card-component v-for="card in $tm('resources.cards')" :key="card.header">
      <template v-slot:header>{{$rt(card.header)}}</template>
      <template v-slot:body>
        <div class="card-body" v-for="paragraph in card.content" :key="paragraph" v-html="$rt(paragraph)"></div>

        <div class="card-body" v-for="section in card.sections" :key="section">
          <h4>{{$rt(section.header)}}</h4>
          <div v-for="content in section.content" :key="content" v-html="$rt(content)"></div>
        </div>
      </template>
    </card-component>
  </div>
</template>

<style scoped>
h4 {
  font-weight: bold;
}
</style>
<script setup lang="ts">
import CardComponent from "@/components/CardComponent.vue";
</script>