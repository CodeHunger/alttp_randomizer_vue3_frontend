<template>
  <h1>{{ $t('watch.header') }}</h1>
  <div class="card card-body">
    <p>With so much going on, there’s always a someone to watch! Below are some live streams of people randomizing it up!</p>

    <p><sup>*</sup>If you’d like your stream to show up here, be sure to stream under the game <strong>The Legend of Zelda: A Link to the Past</strong> and add the <strong>Randomizer</strong> tag to your stream tags.</p>

    <div class="streams">
      <div v-for="stream in streams.streams" :key="stream.name" class="stream">
        <a href="https://www.twitch.tv/jkoper" target="_blank" rel="noopener noreferrer">
          <picture>
            <source media="(max-width: 800px)" :srcset="stream.imgs['128']">
            <source media="(max-width: 1000px)" :srcset="stream.imgs['256']">
            <img :src="stream.imgs['512']" alt="Wormhole">
          </picture>
          <div class="info">
            <span class="name">{{stream.name}}</span>
            {{stream.title}}
          </div>
        </a>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

const streams = {
  "streams": [
    {
      "href": "https://www.twitch.tv/jkoper",
      "title": "Link to the Past Randomizer Crosskeys Ladder Race. Seventy-second stream of the year I guess?",
      "lang": "en",
      "imgs": {
        "64": "https://static-cdn.jtvnw.net/previews-ttv/live_user_jkoper-64x36.jpg",
        "128": "https://static-cdn.jtvnw.net/previews-ttv/live_user_jkoper-128x64.jpg",
        "256": "https://static-cdn.jtvnw.net/previews-ttv/live_user_jkoper-256x128.jpg",
        "512": "https://static-cdn.jtvnw.net/previews-ttv/live_user_jkoper-512x256.jpg"
      },
      "name": "jkoper"
    },
    {
      "href": "https://www.twitch.tv/kromb4787",
      "title": "Ladder: Crosskeys - Start: 11 Uhr - Sprite: Kromb - MSU: Vanilla",
      "lang": "de",
      "imgs": {
        "64": "https://static-cdn.jtvnw.net/previews-ttv/live_user_kromb4787-64x36.jpg",
        "128": "https://static-cdn.jtvnw.net/previews-ttv/live_user_kromb4787-128x64.jpg",
        "256": "https://static-cdn.jtvnw.net/previews-ttv/live_user_kromb4787-256x128.jpg",
        "512": "https://static-cdn.jtvnw.net/previews-ttv/live_user_kromb4787-512x256.jpg"
      },
      "name": "kromb4787"
    },
    {
      "href": "https://www.twitch.tv/Osora90",
      "title": "[AlttPR] Ladder Crosskeys Action. Mal ein bissel Zelda wieder. Morgen 18 Uhr CoOp Game mit Krawalltofu wieder!",
      "lang": "de",
      "imgs": {
        "64": "https://static-cdn.jtvnw.net/previews-ttv/live_user_osora90-64x36.jpg",
        "128": "https://static-cdn.jtvnw.net/previews-ttv/live_user_osora90-128x64.jpg",
        "256": "https://static-cdn.jtvnw.net/previews-ttv/live_user_osora90-256x128.jpg",
        "512": "https://static-cdn.jtvnw.net/previews-ttv/live_user_osora90-512x256.jpg"
      },
      "name": "Osora90"
    },
    {
      "href": "https://www.twitch.tv/MaddieTheMagicalGirl",
      "title": "Surprise (Link to the Past Randomizer #28) || !discord !socials",
      "lang": "en",
      "imgs": {
        "64": "https://static-cdn.jtvnw.net/previews-ttv/live_user_maddiethemagicalgirl-64x36.jpg",
        "128": "https://static-cdn.jtvnw.net/previews-ttv/live_user_maddiethemagicalgirl-128x64.jpg",
        "256": "https://static-cdn.jtvnw.net/previews-ttv/live_user_maddiethemagicalgirl-256x128.jpg",
        "512": "https://static-cdn.jtvnw.net/previews-ttv/live_user_maddiethemagicalgirl-512x256.jpg"
      },
      "name": "MaddieTheMagicalGirl"
    },
    {
      "href": "https://www.twitch.tv/Retro_Link89",
      "title": "[Ladder] Mal wieder ne Runde Crosskeys :) | !msu !discord !howto !multi",
      "lang": "de",
      "imgs": {
        "64": "https://static-cdn.jtvnw.net/previews-ttv/live_user_retro_link89-64x36.jpg",
        "128": "https://static-cdn.jtvnw.net/previews-ttv/live_user_retro_link89-128x64.jpg",
        "256": "https://static-cdn.jtvnw.net/previews-ttv/live_user_retro_link89-256x128.jpg",
        "512": "https://static-cdn.jtvnw.net/previews-ttv/live_user_retro_link89-512x256.jpg"
      },
      "name": "Retro_Link89"
    },
    {
      "href": "https://www.twitch.tv/crackerito88",
      "title": "ALTTPR LADDER // Crosskeys",
      "lang": "de",
      "imgs": {
        "64": "https://static-cdn.jtvnw.net/previews-ttv/live_user_crackerito88-64x36.jpg",
        "128": "https://static-cdn.jtvnw.net/previews-ttv/live_user_crackerito88-128x64.jpg",
        "256": "https://static-cdn.jtvnw.net/previews-ttv/live_user_crackerito88-256x128.jpg",
        "512": "https://static-cdn.jtvnw.net/previews-ttv/live_user_crackerito88-512x256.jpg"
      },
      "name": "crackerito88"
    },
    {
      "href": "https://www.twitch.tv/CubeSoldier",
      "title": "crosskeys ladder race am morgen vertreibt kummer und sorgen (oder so)",
      "lang": "de",
      "imgs": {
        "64": "https://static-cdn.jtvnw.net/previews-ttv/live_user_cubesoldier-64x36.jpg",
        "128": "https://static-cdn.jtvnw.net/previews-ttv/live_user_cubesoldier-128x64.jpg",
        "256": "https://static-cdn.jtvnw.net/previews-ttv/live_user_cubesoldier-256x128.jpg",
        "512": "https://static-cdn.jtvnw.net/previews-ttv/live_user_cubesoldier-512x256.jpg"
      },
      "name": "CubeSoldier"
    }
  ],
  "dev_streams": []
}
</script>

<style scoped>
.stream, .streams {
  display: flex;
  width: 100%;
  border: 1px solid #d3d3d3;
  padding: 1em;
  margin: 1em 0;
  border-radius: 3px;
  flex-direction: column;

  a {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: #636b6f;
  }
}

.info {
  font-size: 1em;
  flex: 1 1 auto;
}

.name {
  display: block;
  font-weight: 700;
  font-size: 3em;
}

picture {
  padding-right: 10px;
}
</style>