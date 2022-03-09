<template>
  <b-container fluid class="m-0 p-0 text-center">
    <the-header />
    <b-container class="mt-2">
      <nuxt />
    </b-container>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import TheHeader from "~/components/TheHeader.vue";

export default Vue.extend({
  components: { TheHeader },
  name: "default-layout",
});
</script>

<style>
@import url("https://v1.fontapi.ir/css/Vazir");

html {
  font-size: 1rem;
}

@include media-breakpoint-up(sm) {
  html {
    font-size: 1.2rem;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 1.4rem;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 1.6rem;
  }
}

* {
  font-family: "Vazir";
}
</style>