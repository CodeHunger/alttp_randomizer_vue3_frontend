<script setup lang="ts">
import {computed, onBeforeMount, PropType, ref, toRef, watch} from "vue";
import {RomData} from "@/dto/romData";
import Toggle from '@vueform/toggle'
import {availableLocales, getCurrentLocale, localesByCode} from "@/composables/getCurrentLocale";
import LTTPToggle from "@/components/input/LTTPRToggle.vue";
// import timeago from 'vue-timeago3'

const currentLocale = getCurrentLocale();


const props = defineProps({
  rom: {
    required: true,
    type: Object as PropType<RomData>,
  }
})

const rom = toRef<RomData>(props.rom)
const permalink = computed(() => {
  return window.location.origin + '/h/' + rom.value.hash
})

const date = rom.value.generated;

</script>

<template>
  <div>
    <div
      v-if="rom.spoiler.meta.spoilers_ongen==true || rom.spoilers=='generate'"
      class="spoiler-warning"
    >{{ $t('rom.info.spoilerwarning') }}</div>
    <div v-if="rom.spoilers=='mystery'" class="mystery" >{{ $t('rom.info.mystery') }}</div>
    <div v-if="rom.logic">{{ $t('rom.info.logic') }}: {{ rom.logic }}</div>
    <div v-if="rom.build">{{ $t('rom.info.build') }}: {{ rom.build }}</div>
    <div v-if="rom.difficulty">
      {{ $t('rom.info.difficulty') }}: {{ rom.difficulty }}
      <span
        v-if="rom.difficultyMode && rom.difficultyMode.toUpperCase() != rom.difficulty.toUpperCase()"
      >({{ rom.difficultyMode }})</span>
    </div>
    <div
      v-if="rom.accessibility"
    >{{ $t('rom.info.accessibility') }}: {{ $t(`randomizer.accessibility.options.${rom.accessibility}`) }}</div>
    <div v-if="rom.variation">{{ $t('rom.info.variation') }}: {{ rom.variation }}</div>
    <div v-if="rom.shuffle">{{ $t('rom.info.shuffle') }}: {{ rom.shuffle }}</div>
    <div
      v-if="rom.mode"
    >{{ $t('rom.info.mode') }}: {{ $t(`randomizer.world_state.options.${rom.mode}`) }}</div>
    <div
      v-if="rom.weapons"
    >{{ $t('rom.info.weapons') }}: {{ $t(`randomizer.weapons.options.${rom.weapons}`) }}</div>
    <div v-if="rom.goal">{{ $t('rom.info.goal') }}: {{ $t(`randomizer.goal.options.${rom.goal}`) }}</div>
    <div v-if="rom.hash">
      {{ $t('rom.info.permalink') }}:
      <router-link :to="'/h/' + rom.hash">{{ permalink }}</router-link>
    </div>
    <div v-if="rom.special">{{ $t('rom.info.special') }}: {{ rom.special }}</div>
    <div v-if="rom.notes">
      {{ $t('rom.info.notes') }}:
      <span v-html="rom.notes"></span>
    </div>
    <div v-if="rom.generated">
      {{ $t('rom.info.generated') }}:
      <template v-for="localeCode in availableLocales" v-bind:key="localeCode">
        <timeago v-if="currentLocale.code === localeCode"
          :datetime="date"
          :locale="localesByCode[localeCode]"
          ></timeago>
      </template>
    </div>
  </div>

</template>

<style scoped>
.spoiler-warning {
  color: red;
  font-weight: bold;
}
.mystery {
  font-weight: bold;
}
</style>