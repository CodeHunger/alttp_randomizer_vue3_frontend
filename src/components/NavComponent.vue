<script setup>

import {useI18n} from "vue-i18n";

const { locale } = useI18n();

const flagIcon = {
  "en": "fi-us",
  "fr": "fi-fr",
  "de": "fi-de",
  "es": "fi-es",
}

</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <router-link to="/" class="navbar-brand">
        <img src="../assets/logo.png" title="ALttP VT Randomizer" alt="ALttP Randomizer logo">
      </router-link>
      <button class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar"
              aria-controls="navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item'"><router-link class="nav-link" to="/start">{{ $t("navigation.start_playing") }}</router-link></li>
          <li class="nav-item'"><router-link class="nav-link" to="/watch">{{ $t('navigation.start_watching') }}</router-link></li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle"
               data-bs-toggle="dropdown"
               role="button"
               aria-haspopup="true"
               aria-expanded="false"
            >
              {{ $t('navigation.generate') }}
              <span class="caret"></span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="/randomizer">{{ $t('navigation.randomizer') }}</a>
              <router-link class="dropdown-item" to="/daily">{{ $t('navigation.daily') }}</router-link>
              <a class="dropdown-item" href="/customizer">{{ $t('navigation.customizer') }}</a>
            </div>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="https://patreon.com/alttpr" target="_blank" rel="noopener noreferrer"><img src="../assets/patreon-small.png" />{{ $t('navigation.patreon_support')}}</a></li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <span class="fi" :class="[flagIcon[$i18n.locale]]"></span>
              {{ $t('navigation.language') }}
              <span class="caret"></span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" @click.prevent="$i18n.locale = 'en'" href="#"><span class="fi fi-us"></span> English</a>
              <a class="dropdown-item" @click.prevent="$i18n.locale = 'fr'" href="#"><span class="fi fi-fr"></span> Français</a>
              <a class="dropdown-item" @click.prevent="$i18n.locale = 'de'" href="#"><span class="fi fi-de"></span> Deutsch</a>
              <a class="dropdown-item" @click.prevent="$i18n.locale = 'es'" href="#"><span class="fi fi-es"></span> Español</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ $t('navigation.help')}}<span class="caret"></span></a>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/resources">{{ $t('navigation.resources') }}</router-link>
              <router-link class="dropdown-item" to="/options">{{ $t('navigation.options') }}</router-link>
              <a class="dropdown-item" href="/races">{{ $t('navigation.races') }}</a>
              <a class="dropdown-item" href="/updates">{{ $t('navigation.updates') }}</a>
              <a class="dropdown-item" href="/sprite_preview">{{ $t('navigation.sprite_preview') }}</a>
              <a class="dropdown-item" href="/contribute">{{ $t('navigation.contribute') }}</a>
              <a class="dropdown-item" href="https://discord.gg/alttprandomizer" target="_blank" rel="noopener noreferrer">{{ $t('navigation.discord') }}</a>
              <a class="dropdown-item" href="https://github.com/sporchia/alttp_vt_randomizer/issues/new" target="_blank" rel="noopener noreferrer">{{ $t('navigation.report_issue') }}</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
nav {
  padding: 0.1rem 2rem;
}

li {
  text-align: left;
}

.navbar-brand {
  padding: 0;
}

.navbar {
  background-color: #f8f9fa !important;
}
</style>