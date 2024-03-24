<style scoped>
h4 {
  font-weight: bold;
}
</style>

<script setup lang="ts">
import CardComponent from "@/components/CardComponent.vue";
import ContentComponent from "@/components/ContentComponent.vue";

</script>

<template>
  <h1>{{ $t('races.header') }}</h1>
  <div id="options" class="card card-body bg-light">
    <card-component anchor="'races'">
      <template v-slot:header>
        {{ $t('races.cards.races.header') }}
      </template>
      <template v-slot:body>
        <div class="card-body">
          <template v-for="section in $tm('races.cards.races.sections')" :key="section">
            <content-component :content="section" :level="4"></content-component>
          </template>
        </div>
      </template>
    </card-component>
    <card-component anchor="'tournament'">
      <template v-slot:header>
        {{ $t('races.cards.tournament.header') }}
      </template>
      <template v-slot:body>
        <div class="card-body">
          <template v-for="section in $tm('races.cards.tournament.sections')" :key="section">
            <content-component :content="section" :level="4"></content-component>
          </template>
        </div>
      </template>
    </card-component>
    <template v-for="language in $tm('races.cards.foreign_language.languages')" :key="language.header">
      <card-component anchor="language.header">
        <template v-slot:header>
          {{language.header}}
        </template>
        <template v-slot:body>
          <div class="card-body">
            <p v-html="language.description"></p>

            <template v-for="section in language.sections" :key="section">
              <content-component :content="section" :level="4"></content-component>
            </template>
          </div>
        </template>
      </card-component>
    </template>
  </div>
</template>

