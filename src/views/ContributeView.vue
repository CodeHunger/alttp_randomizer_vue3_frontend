<template>
  <h1>{{ $t('contribute.header') }}</h1>
  <div class="card card-body">
    <h3 v-html="$t('contribute.subheader')"></h3>
    <template v-for="(card, key) in $tm('contribute.cards')" :key="key">
      <card-component v-if="key !== 'live'">
        <template v-slot:header>{{$rt(card.header)}}</template>
        <template v-slot:body>
          <div class="card-body">
            <p v-for="paragraph in card.content" :key="paragraph" v-html="$rt(paragraph)"></p>
          </div>
        </template>
      </card-component>
    </template>

  </div>
</template>

<script setup lang="ts">
import CardComponent from "@/components/CardComponent.vue";
</script>