<script>
export default {
  name: 'alttpr-table',
  inheritAttrs: false,
  customOptions: {},
}
</script>

<template>
  <table class="alttpr-table">
    <slot></slot>
  </table>
</template>

<style>
.alttpr-table {
  margin-top: 1rem;
  width: 100%;
  margin-bottom: 1rem;
  vertical-align: top;
  caption-side: bottom;
  border-color: rgb(222, 226, 230);
  border-collapse: collapse;

  tr {
    border: 1px solid rgba(0,0,0,0.1);
  }

  thead {
    vertical-align: bottom;
  }

  tbody {
    vertical-align: inherit;
  }

  thead, tbody, th, td {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }

  tbody tr:nth-of-type(odd) > * {
    background: rgba(0, 0, 0, 0.05);
  }

  th, td {
    padding: 0.25rem 0.25rem;
  }

  /* one item */
  th:first-child:nth-last-child(1) {
    /* -or- th:only-child { */
    width: 100% !important;
  }

  /* two items */
  th:first-child:nth-last-child(2),
  th:first-child:nth-last-child(2) ~ th {
    width: 50% !important;
  }

  /* three items */
  th:first-child:nth-last-child(3),
  th:first-child:nth-last-child(3) ~ th {
    width: 33.3333% !important;
  }

  /* four items */
  th:first-child:nth-last-child(4),
  th:first-child:nth-last-child(4) ~ th {
    width: 25% !important;
  }

  /* five items */
  th:first-child:nth-last-child(5),
  th:first-child:nth-last-child(5) ~ th {
    width: 20% !important;
  }

  .match td {
    background-color: #17a2b8 !important;
  }
}
</style>