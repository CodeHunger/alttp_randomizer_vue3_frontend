<template>
  <h1>{{ $t(contentKey + '.header') }}</h1>

  <div class="card card-body">
    <h2 v-if="$te(contentKey + '.subheader')">{{ $t(contentKey + '.subheader') }}</h2>
    <p class="card-body" v-for="content in $tm(contentKey + '.content')" :key="content" v-html="$rt(content)"></p>
    <card-component v-for="card in $tm(contentKey + '.cards')" :key="card.header">
      <template v-slot:header>{{card.header}}</template>
      <template v-slot:body>
        <div class="card-body" v-for="paragraph in card.content" :key="paragraph" v-html="$rt(paragraph)"></div>

        <div class="card-body" v-for="section in card.sections" :key="section">
          <h4>{{section.header}}</h4>
          <div v-for="content in section.content" :key="content" v-html="content"></div>
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
import { toRefs, defineProps } from 'vue';

const props = defineProps({contentKey: String})
const { contentKey } = toRefs(props);
</script>