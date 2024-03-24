<template>
  <img src="../assets/logo-large.png"/>
  <div class="btn-wrapper">
    <div class="btn-cta">
      <router-link to="/start" class="btn btn-primary btn-lg">{{ $t('navigation.start_playing')}}</router-link>
    </div>
    <div class="btn-cta">
      <router-link to="/watch" class="btn btn-outline-secondary btn-lg">{{ $t('navigation.start_watching')}}</router-link>
    </div>
  </div>
  <div class="card card-body" style="font-size: 22px; margin-top: 40px;">
    <p v-html="$t('about.content[0]')"></p>
    <p v-html="$t('about.content[1]')"></p>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
  },
});
</script>

<style scoped>
img {
  width: 100%;
}

.btn-wrapper {
  display: flex;
  justify-content: stretch;
  padding: 0 140px;
}

.btn {
  flex: 1 0 0px;
  width: 100%;
}

.btn-cta, .btn {
  width: 100%;
}

.btn-cta + .btn-cta {
  margin-left: 20px;
}


</style>