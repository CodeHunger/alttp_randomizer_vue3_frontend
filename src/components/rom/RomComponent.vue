<script setup lang="ts">

import {PropType, toRef} from "vue";
import {RomData} from "@/dto/romData";
import RomInfoComponent from "@/components/rom/RomInfoComponent.vue";
import RomSettingsComponent from "@/components/rom/RomSettingsComponent.vue";
import RomSpoilerComponent from "@/components/rom/RomSpoilerComponent.vue";

const props = defineProps({
  rom: {
    required: true,
    type: Object as PropType<RomData>,
  }
})
const rom = toRef<RomData>(props.rom)
const disableSaveRomButton = false;
const disallowSaveRom = false;
const saveSpoiler = () => {
  console.log('save rom');
}

const saveRom = () => {
  console.log('save rom');
}
</script>

<template>
  <div id="seed-generate">
    <div
      v-if="rom.spoiler.meta.build === '2019-10-31'"
      class="alert alert-danger"
      style="font-family:'Cabin',sans-serif"
      role="alert"
    >
      <strong>BE ADVISED:</strong> this festive has effects, which may potentially trigger seizures for people with photosensitive epilepsy.
    </div>

    <div id="seed-details" class="card border-success">
      <div class="card-header bg-success card-heading-btn" :class="{'bg-info': rom.spoiler.meta.tournament}">
        <h3
          class="card-title text-white float-left"
        >{{ rom.spoiler.meta.name || $t('randomizer.details.title') }}</h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md mb-3">
            <rom-info-component :rom="rom"></rom-info-component>
          </div>
          <div class="col-md mb-3">
            <div class="row">
              <div class="col-md-6 mb-3">
                <div class="btn-group btn-flex" role="group">
                  <button
                    class="btn btn-light border-secondary text-center"
                    @click="saveSpoiler"
                  >{{ $t('randomizer.details.save_spoiler') }}</button>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="btn-group btn-flex" role="group">
                  <button
                    class="btn btn-success text-center"
                    :disabled="disableSaveRomButton"
                    @click="saveRom"
                  >{{ $t('randomizer.details.save_rom') }}</button>
                </div>
              </div>
            </div>
            <div class="row">
              <rom-settings-component :rom="rom"></rom-settings-component>
<!--              <vt-rom-settings-->
<!--                class="col-12"-->
<!--                :rom="rom"-->
<!--                @disallow-save-rom="disallowSaveRom"-->
<!--              ></vt-rom-settings>-->
            </div>
          </div>
        </div>
        <rom-spoiler-component :spoiler="rom.spoiler"></rom-spoiler-component>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-info {
  background-color: #17a2b8 !important;
}

.btn-group {
  display: flex;
}
</style>