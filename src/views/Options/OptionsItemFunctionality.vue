<template>
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
        {{$t('options.cards.difficulty.comparison.potion_magic') }}<span v-tooltip="$t('options.cards.difficulty.comparison.tooltip.potion_magic')"><img class="icon" src="../../assets/question-mark.svg" alt="tooltip"></span></td>
      <td>100%</td>
      <td>50%</td>
      <td>25%</td>
    </tr><tr class="table-secondary">
      <td>
        {{$t('options.cards.difficulty.comparison.potion_health') }}<span v-tooltip="$t('options.cards.difficulty.comparison.tooltip.potion_health')"><img class="icon" src="../../assets/question-mark.svg" alt="tooltip"></span>
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