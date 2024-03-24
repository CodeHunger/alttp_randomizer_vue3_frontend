<template>
  <div class="card-body">
    <a class="anchor" id="glitches_required"></a>
    <h3 class="card-title p-2 border-bottom">{{ $t(i18nKey + '.header') }}</h3>
    <div class="card-body">
      <template v-for="section in $tm(i18nKey + '.sections')" :key="section.header">
        <h4>{{ $rt(section.header) }}</h4>
        <p v-for="content in section.content" :key="content">
          {{ content}}
        </p>
      </template>

<!--      <p v-for="content in $tm(i18nKey + '.content')" :key="content" v-html="$rt(content)"></p>-->
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { toRefs, defineProps } from 'vue';

const props = defineProps({
  i18nKey: { type: String, required: true},
})
const { i18nKey } = toRefs(props);

</script>