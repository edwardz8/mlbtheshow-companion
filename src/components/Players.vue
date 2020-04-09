<template>
  <div class="players">
    <!-- Tab -->
    <md-tabs class="md-primary" md-alignment="centered">
      <md-tab
        @click="current = 'Batters'"
        id="tab-home"
        md-label="Batters"
      ></md-tab>
      <md-tab
        @click="current = 'Pitchers'"
        id="tab-favorites"
        md-label="Pitchers"
      ></md-tab>
    </md-tabs>

    <div class="cards">
      <component :is="current"></component>
    </div>
  </div>
</template>

<script>
import Batters from "@/components/Batters.vue";
import Pitchers from "@/components/Pitchers.vue";

export default {
  name: "players",
  data() {
    return {
      current: "Batters",
      search: ""
    };
  },
  components: {
    Batters,
    Pitchers
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.md-tabs {
  margin-bottom: 24px;
}
a {
  color: #35495e;
}
</style>
