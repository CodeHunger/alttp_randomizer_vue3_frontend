<style scoped>
h4 {
  font-weight: bold;
}
</style>

<script setup lang="ts">
import CardComponent from "@/components/CardComponent.vue";
import ContentComponent from "@/components/ContentComponent.vue";

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
              <template v-else-if="section === 'item_pool'">
                <h3>{{$t('options.cards.difficulty.item_pool')}}</h3>
                <table class="table table-sm">
                  <thead><tr>
                    <th class="w-50"></th>
                    <th>{{$t('randomizer.difficulty.options.normal') }}</th>
                    <th>{{$t('randomizer.difficulty.options.hard') }}</th>
                    <th>{{$t('randomizer.difficulty.options.expert') }}</th>
                  </tr></thead>
                  <tbody><tr class="table-primary">
                    <td>{{$t('options.cards.difficulty.comparison.maximum_health') }}</td>
                    <td>20</td>
                    <td>14</td>
                    <td>8</td>
                  </tr><tr class="table-secondary">
                    <td>{{$t('options.cards.difficulty.comparison.heart_containers') }}</td>
                    <td>11</td>
                    <td>7</td>
                    <td>3</td>
                  </tr><tr class="table-primary">
                    <td>{{$t('options.cards.difficulty.comparison.heart_pieces') }}</td>
                    <td>24</td>
                    <td>16</td>
                    <td>8</td>
                  </tr><tr class="table-secondary">
                    <td>{{$t('options.cards.difficulty.comparison.maximum_mail') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.mail_3') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.mail_1') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.mail_1') }}</td>
                  </tr><tr class="table-primary">
                    <td>{{$t('options.cards.difficulty.comparison.maximum_sword') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.sword_4') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.sword_3') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.sword_2') }}</td>
                  </tr><tr class="table-secondary">
                    <td>{{$t('options.cards.difficulty.comparison.maximum_shield') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.shield_3') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.shield_2') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.shield_1') }}</td>
                  </tr><tr class="table-primary">
                    <td>{{$t('options.cards.difficulty.comparison.number_silvers') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.silver') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.normal') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.normal') }}</td>
                  </tr><tr class="table-secondary">
                    <td>{{$t('options.cards.difficulty.comparison.number_silvers_swordless') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.silver') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.silver') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.silver') }}</td>
                  </tr><tr class="table-primary">
                    <td>{{$t('options.cards.difficulty.comparison.capacity_upgrade') }}</td>
                    <td>7</td>
                    <td>0</td>
                    <td>0</td>
                  </tr></tbody>
                </table>
              </template>
              <template v-else-if="section === 'item_functionality'">
                <h3>{{$t('options.cards.difficulty.item_functionality')}}</h3>
                <table class="table table-sm">
                  <thead><tr>
                    <th class="w-50"></th>
                    <th>{{$t('randomizer.difficulty.options.normal') }}</th>
                    <th>{{$t('randomizer.difficulty.options.hard') }}</th>
                    <th>{{$t('randomizer.difficulty.options.expert') }}</th>
                  </tr></thead>
                  <tbody><tr class="table-primary">
                    <td>
                      {{$t('options.cards.difficulty.comparison.potion_magic') }}<span v-tooltip="$t('options.cards.difficulty.comparison.tooltip.potion_magic')"><img class="icon" src="../assets/question-mark.svg" alt="tooltip"></span></td>
                    <td>100%</td>
                    <td>50%</td>
                    <td>25%</td>
                  </tr><tr class="table-secondary">
                    <td>
                      {{$t('options.cards.difficulty.comparison.potion_health') }}<span v-tooltip="$t('options.cards.difficulty.comparison.tooltip.potion_health')"><img class="icon" src="../assets/question-mark.svg" alt="tooltip"></span>
                    </td>
                    <td>20</td>
                    <td>7</td>
                    <td>4</td>
                  </tr><tr class="table-primary">
                    <td>{{$t('options.cards.difficulty.comparison.bug_net_fairy') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.yes') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.no') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.no') }}</td>
                  </tr><tr class="table-secondary">
                    <td>{{$t('options.cards.difficulty.comparison.powder_bubble') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.fairy') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.heart') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.heart') }}</td>
                  </tr><tr class="table-primary">
                    <td>{{$t('options.cards.difficulty.comparison.cape_consumption') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.normal') }}</td>
                    <td>2x</td>
                    <td>2x</td>
                  </tr><tr class="table-secondary">
                    <td>{{$t('options.cards.difficulty.comparison.byrna_invincible') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.yes') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.no') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.no') }}</td>
                  </tr><tr class="table-primary">
                    <td>{{$t('options.cards.difficulty.comparison.stun_boomerang') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.yes') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.no') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.no') }}</td>
                  </tr><tr class="table-secondary">
                    <td>{{$t('options.cards.difficulty.comparison.stun_hookshot') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.yes') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.yes') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.no') }}</td>
                  </tr><tr class="table-primary">
                    <td>{{$t('options.cards.difficulty.comparison.tooltip.silvers') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.no') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.yes') }}</td>
                    <td>{{$t('options.cards.difficulty.comparison.yes') }}</td>
                  </tr></tbody>
                </table>
              </template>
              <h3 v-else>Unknown - {{section}}</h3>
            </template>

          </div>
        </template>
      </card-component>
    </template>
  </div>
</template>

