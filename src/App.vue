<template>
  <div id="app">
    <md-toolbar md-elevation="1">
      <router-link to="/" style="flex: 1">
        <h3 class="md-title">theshow-companion</h3>
      </router-link>
      <!-- <router-link to="/players">
        <md-button class="md-primary">Batters</md-button>
      </router-link> -->
      <router-link to="/contact-power-hub">
        <md-button class="md-raised md-primary" :md-ripple="false">Contact + Power</md-button>
      </router-link>
    </md-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  margin: 0;
}
.md-button.md-theme-default.md-raised:not([disabled]).md-primary {
  margin-left: 1rem;
}
.md-toolbar.md-theme-default .md-title, .md-toolbar.md-theme-default .md-display-1, .md-toolbar.md-theme-default .md-display-2 {
    color: var(--md-theme-default-text-primary-on-background-variant, #448aff);
}
/* main {
  margin-top: 40px;
} */
</style>
