<template>
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