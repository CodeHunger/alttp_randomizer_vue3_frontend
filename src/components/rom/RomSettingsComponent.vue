<script setup lang="ts">
import {PropType, reactive, ref, toRef} from "vue";
import {RomData} from "@/dto/romData";
import {useI18n} from "vue-i18n";
import {reference} from "@popperjs/core";
import VueMultiselect from "vue-multiselect/src/Multiselect.vue";
import SelectComponent from "@/components/SelectComponent.vue";

const props = defineProps({
  rom: {
    required: true,
    type: Object as PropType<RomData>,
  }
})

const rom = toRef<RomData>(props.rom)
const reduceFlashing = ref(false);

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
  music: true
}

const settings = reactive({
  heartSpeeds: settingsOptionsDefaults.heartSpeeds,
  menuSpeeds: settingsOptionsDefaults.menuSpeeds,
  heartColors: settingsOptionsDefaults.heartColors,
  quickswap: settingsOptionsDefaults.quickswap,
  music: settingsOptionsDefaults.music,
})

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
<!--        <vt-sprite-select-->
<!--          id="sprite-gfx"-->
<!--          :rom="rom"-->
<!--          storage-key="rom.sprite-gfx"-->
<!--          :title="$t('rom.settings.play_as')"-->
<!--          @load-custom-sprite="loadCustomSprite"-->
<!--        ></vt-sprite-select>-->
      </div>
    </div>
<!--    <div v-if="showLoadCustomSprite" class="row mb-3">-->
<!--      <div class="col-md-12">-->
<!--        <vt-sprite-loader-->
<!--          id="sprite-loader"-->
<!--          :rom="rom"-->
<!--          storage-key="rom.custom-sprite-gfx"-->
<!--          @disallow-save-rom="disallowSaveRom"-->
<!--        ></vt-sprite-loader>-->
<!--      </div>-->
<!--    </div>-->
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
<!--        <Toggle :value="musicOn" @input="setMusicOn">{{ $t('rom.settings.music') }}</Toggle>-->
      </div>
      <div v-if="rom.build >= '2021-05-04'" class="col">
<!--        <Toggle :value="msu1Resume" @input="setMSU1Resume">{{ $t('rom.settings.msu1resume') }}</Toggle>-->
      </div>
    </div>
    <div class="row mb-3">
      <div v-if="!rom.tournament || rom.allowQuickSwap" class="col">
<!--        <Toggle :value="quickswap" @input="setQuickswap">{{ $t('rom.settings.quickswap') }}</Toggle>-->
      </div>
      <div v-if="rom.build >= '2021-05-04'" class="col">
<!--        <Toggle-->
<!--          :value="reduceFlashing"-->
<!--          @input="setReduceFlashing"-->
<!--        >{{ $t('rom.settings.reduce_flashing') }}-->
<!--          <sup-->
<!--            v-if="reduceFlashing"-->
<!--          >*</sup></Toggle>-->
      </div>
    </div>
    <div class="row mb-3">
      <div v-if="!rom.special" class="col">
<!--        <Toggle-->
<!--          :value="paletteShuffle"-->
<!--          @input="setPaletteShuffle"-->
<!--        >{{ $t('rom.settings.palette_shuffle') }}</Toggle>-->
      </div>
      <div v-if="!rom.music || rom.build >= '2021-12-21'" class="col">
<!--        <Toggle :value="shuffleSfx" @input="setShuffleSfx">{{ $t('rom.settings.shuffle_sfx') }}</Toggle>-->
      </div>
    </div>
    <div class="row mb-3">
    </div>
    <div
      v-if="reduceFlashing && rom.build >= '2021-05-04'"
      class="logic-warning text-info"
      v-html="'* ' + $t('rom.settings.reduce_flashing_warning')"
    />
  </div>
</template>

<style scoped>

</style>