<style scoped>
h4 {
  font-weight: bold;
}
</style>

<script setup lang="ts">
import CardComponent from "@/components/CardComponent.vue";
import ContentComponent from "@/components/ContentComponent.vue";
import OptionsItemPoolView from "@/views/Options/OptionsItemPool.vue";
import OptionsItemPoolCard from "@/views/Options/OptionsItemPoolCard.vue";

const cards = [
  {
    anchor: 'placement',
    header: 'randomizer.placement.title',
    sections: [
      'options.cards.glitches_required',
      'options.cards.item_placement',
      'options.cards.accessibility',
      'options.cards.dungeon_items',
      'options.cards.accessibility',
    ],
  },
  {
    anchor: 'goal',
    header: 'randomizer.goal.title',
    sections: [
      'options.cards.goal',
      'options.cards.tower_open',
      'options.cards.ganon_open',
    ],
  },
  {
    anchor: 'gameplay',
    header: 'randomizer.gameplay.title',
    sections: [
      'options.cards.world_state',
      'options.cards.entrance_shuffle',
      'options.cards.bosses',
      'options.cards.enemy_shuffle',
      'options.cards.hints',
    ],
  },
  {
    anchor: 'difficulty',
    header: 'randomizer.difficulty.title',
    sections: [
      'options.cards.weapons',
      'item_pool',
      'item_functionality',
      'options.cards.enemy_damage',
      'options.cards.enemy_health',
    ],
  },
  {
    anchor: 'post_generation',
    header: 'options.cards.post_generation.header',
    sections: [
      'options.cards.post_generation.cards.heart_speed',
      'options.cards.post_generation.cards.play_as',
      'options.cards.post_generation.cards.menu_speed',
      'options.cards.post_generation.cards.heart_color',
      'options.cards.post_generation.cards.music',
      'options.cards.post_generation.cards.msu1resume',
      'options.cards.post_generation.cards.shuffle_sfx',
      'options.cards.post_generation.cards.quickswap',
      'options.cards.post_generation.cards.palette_shuffle',
      'options.cards.post_generation.cards.reduce_flashing',
    ],
  },
]


</script>

<template>
  <h1>{{ $t('options.header') }}</h1>
  <div id="options" class="card card-body bg-light">
    <h2>{{ $t('options.subheader') }}</h2>

    <template v-for="card in cards" :key="card.anchor">
      <card-component :anchor="card.anchor">
        <template v-slot:header>
          {{ $t(card.header) }}
        </template>
        <template v-slot:body>
          <div class="card-body">
            <template v-for="section in card.sections" :key="section">
              <content-component v-if="section.includes('.')" :content="$tm(section)"></content-component>
              <options-item-pool-view v-else-if="section === 'item_pool'"></options-item-pool-view>
              <options-item-pool-view v-else-if="section === 'item_functionality'"></options-item-pool-view>
              <h3 v-else>Unknown - {{section}}</h3>
            </template>
          </div>
        </template>
      </card-component>
    </template>
    <card-component :anchor="'item_pool'">
      <template v-slot:header>
        {{ $t('options.cards.item_pool') }}
      </template>
      <template v-slot:body>
        <options-item-pool-card></options-item-pool-card>
      </template>
    </card-component>
  </div>
</template>

