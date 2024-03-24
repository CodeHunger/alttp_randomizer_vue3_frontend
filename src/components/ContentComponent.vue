<template>
  <div>
    <a class="anchor" id="glitches_required"></a>
    <template v-if="content.header">
      <h2 v-if="currentLevel === 2" class="card-title p-2">{{ content.header }}</h2>
      <h3 v-if="currentLevel === 3" class="card-title p-2 border-bottom">{{ content.header }}</h3>
      <h4 v-if="currentLevel === 4" class="card-title p-2">{{ content.header }}</h4>
      <h5 v-if="currentLevel === 5" class="card-title p-2">{{ content.header }}</h5>
    </template>

    <template v-if="content.subheader">
      <p v-for="subheader in content.subheader" :key="subheader" v-html="subheader"></p>
    </template>

    <div :class="{'card-body': currentLevel === 3 | currentLevel === 5}">
      <template v-if="content.cards">
        <ContentComponent v-for="card in content.cards" :key="card" :content="card" :level="currentLevel + 1">
        </ContentComponent>
      </template>

      <template v-if="content.sections">
        <ContentComponent v-for="section in content.sections" :key="section" :content="section" :level="currentLevel + 1">
        </ContentComponent>
      </template>

      <template v-if="content.content">
        <template v-for="contentObject of content.content" :key="contentObject">
          <p v-if="typeof contentObject === 'string'" :key="contentObject" v-html="contentObject"></p>
          <ContentComponent v-else :content="contentObject" :level="currentLevel + 1"></ContentComponent>
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped>
h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}

h4 {
  font-weight: 700;
  font-size: 1.35rem;
}

h5 {
  font-size: .9rem;
  margin-left: 0.7rem;
  margin-bottom: -1rem;
}

h3 + p {
  margin-top: 1rem;
}

.bg-info {
  background-color: #17a2b8 !important;
}

p {
  margin-left: 1.25rem;
  margin-bottom: 0.5rem;
}

ul {
  padding-left: 1rem;
}
</style>

<script setup lang="ts">
import {toRefs, defineProps, PropType, ref} from 'vue';
import {max, min} from "@popperjs/core/lib/utils/math";

type Content = {
  header?: string;
  subheader?: string[];
  cards?: {[key: string]: Content[]} | Content[];
  sections?: {[key: string]: Content[]} | Content[];
  content?: (string | Content)[];
}

const props = defineProps({
  anchor: String,
  content: {
    type: Object as PropType<Content>,
    required: true,
  },
  level: Number
})
const { anchor, content, level } = toRefs(props);

const currentLevel = min(level?.value || 3, 5);



</script>