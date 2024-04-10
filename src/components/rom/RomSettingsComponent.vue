<script setup lang="ts">
import {PropType, reactive, ref, toRef} from "vue";
import {RomData} from "@/dto/romData";
import {useI18n} from "vue-i18n";
import SelectComponent from "@/components/input/SelectComponent.vue";
import LTTPRToggle from "@/components/input/LTTPRToggle.vue";
import LTTPRSpriteSelect from "@/components/input/LTTPRSpriteSelect.vue";

const props = defineProps({
  rom: {
    required: true,
    type: Object as PropType<RomData>,
  }
})

const rom = toRef<RomData>(props.rom)

const { t } = useI18n();

const settingsOptions = {
  heartSpeeds: [
    { value: "off", name: t("rom.settings.heart_speeds.off") },
    {
      value: "double",
      name: t("rom.settings.heart_speeds.double")
    },
    {
      value: "normal",
      name: t("rom.settings.heart_speeds.normal")
    },
    {
      value: "half",
      name: t("rom.settings.heart_speeds.half")
    },
    {
      value: "quarter",
      name: t("rom.settings.heart_speeds.quarter")
    }
  ],
    menuSpeeds: [
    {
      value: "instant",
      name: t("rom.settings.menu_speeds.instant")
    },
    {
      value: "fast",
      name: t("rom.settings.menu_speeds.fast")
    },
    {
      value: "normal",
      name: t("rom.settings.menu_speeds.normal")
    },
    { value: "slow", name: t("rom.settings.menu_speeds.slow") }
  ],
    heartColors: [
    {
      value: "blue",
      name: t("rom.settings.heart_colors.blue")
    },
    {
      value: "green",
      name: t("rom.settings.heart_colors.green")
    },
    {
      value: "red",
      name: t("rom.settings.heart_colors.red")
    },
    {
      value: "yellow",
      name: t("rom.settings.heart_colors.yellow")
    },
    {
      value: "random",
      name: t("rom.settings.heart_colors.random")
    },
  ]
};

const settingsOptionsDefaults = {
  heartSpeeds: {
    value: "half",
      name: t("rom.settings.heart_speeds.half")
  },
  menuSpeeds: {
    value: "normal",
      name: t("rom.settings.menu_speeds.normal")
  },
  heartColors: {
    value: "red",
      name: t("rom.settings.heart_colors.red")
  },
  quickswap: false,
  music: true,
  msu1Resume: true,
  reduceFlashing: false,
  paletteShuffle: false,
  shuffleSfx: false,
}

const settings = reactive({
  heartSpeeds: settingsOptionsDefaults.heartSpeeds,
  menuSpeeds: settingsOptionsDefaults.menuSpeeds,
  heartColors: settingsOptionsDefaults.heartColors,
  quickswap: settingsOptionsDefaults.quickswap,
  music: settingsOptionsDefaults.music,
  msu1Resume: settingsOptionsDefaults.msu1Resume,
  reduceFlashing: settingsOptionsDefaults.reduceFlashing,
  paletteShuffle: settingsOptionsDefaults.paletteShuffle,
  shuffleSfx: settingsOptionsDefaults.shuffleSfx,
})



const musicOn = ref(true);
const msu1Resume = ref(true);
const quickswap = ref(true);
const reduceFlashing = ref(false);
const paletteShuffle = ref(false);
const shuffleSfx = ref(false);

const customLabel = (selection: {value: string, name: string}) => {
  return selection.name;
}
</script>

<template>
  <div>
    <div class="row mb-3">
      <div class="col-md-12">
        <select-component
          :options="settingsOptions.heartSpeeds"
          :value="settings.heartSpeeds"
          :custom-label="customLabel"
          :show-labels="false"
          :placeholder="'Select option'"
          :clearable="false"
        >{{ $t('rom.settings.heart_speed') }}</select-component>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-12">
        <LTTPRSpriteSelect></LTTPRSpriteSelect>
      </div>
    </div>
    <div v-if="!rom.tournament" class="row mb-3">
      <div class="col-md-12">
        <select-component
          :options="settingsOptions.menuSpeeds"
          :value="settings.menuSpeeds"
          :custom-label="customLabel"
          :clearable="false"
        >{{ $t('rom.settings.menu_speed') }}</select-component>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-12">
        <select-component
          :options="settingsOptions.heartColors"
          :value="settings.heartColors"
          :custom-label="customLabel"
          :clearable="false"
        >{{ $t('rom.settings.heart_color') }}</select-component>
      </div>
    </div>

    <div v-if="!rom.music" class="row mb-3">
      <div class="col">
        <LTTPRToggle v-model="musicOn">{{ $t('rom.settings.music') }}</LTTPRToggle>
      </div>
      <div v-if="rom.build >= '2021-05-04'" class="col">
        <LTTPRToggle v-model="msu1Resume">{{ $t('rom.settings.msu1resume') }}</LTTPRToggle>
      </div>
    </div>
    <div class="row mb-3">
      <div v-if="!rom.tournament || rom.allowQuickSwap" class="col">
        <LTTPRToggle v-model="quickswap">{{ $t('rom.settings.quickswap') }}</LTTPRToggle>
      </div>
      <div v-if="rom.build >= '2021-05-04'" class="col">
        <LTTPRToggle
          v-model="reduceFlashing"
        >{{ $t('rom.settings.reduce_flashing') }}
          <sup
            v-if="reduceFlashing"
          >*</sup></LTTPRToggle>
      </div>
    </div>
    <div class="row mb-3">
      <div v-if="!rom.special" class="col">
        <LTTPRToggle
          v-model="paletteShuffle"
        >{{ $t('rom.settings.palette_shuffle') }}</LTTPRToggle>
      </div>
      <div v-if="!rom.music || rom.build >= '2021-12-21'" class="col">
        <LTTPRToggle v-model="shuffleSfx">
          {{ $t('rom.settings.shuffle_sfx') }}
        </LTTPRToggle>
      </div>
      <div
        v-if="reduceFlashing && rom.build >= '2021-05-04'"
        class="logic-warning text-info"
        v-html="'* ' + $t('rom.settings.reduce_flashing_warning')"
      />
    </div>

  </div>
</template>

<style scoped>

</style>