<template>
  <div class="batters">
    <!-- Search -->
    <md-field md-inline>
      <label>Search Batters</label>
      <md-input v-model="search"></md-input>
    </md-field>

    <div class="md-layout md-alignment-center">
      <!-- Batters -->
      <md-card v-for="batter in filter" :key="batter.Player" md-with-hover>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ batter.Player }}</div>
            <div class="md-subhead">{{ batter.Team }}</div>
            <div class="md-subhead">Projected Points: {{ batter.PTS }}</div>
          </md-card-header-text>

          <md-card-media class="logo">
            <i :class="matchTeamLogo(batter.Team)"></i>
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <router-link to="#">
            <md-button class="md-raised md-primary">Stats</md-button>
          </router-link>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import methods from "../../methods";
import batterProjections from "../assets/batters.json";

export default {
  name: "batters",
  data() {
    return {
      team: batterProjections.Team,
      batters: batterProjections,
      search: ""
    };
  },
  methods: {
    ...methods
  },
  computed: {
    filter() {
      return this.batters.filter(p => {
        return this.search
          .toLowerCase()
          .split(" ")
          .every(
            v =>
              p.Player.toLowerCase().includes(v) ||
              p.Team.toLowerCase().includes(v)
          );
      });
    }
  }
};
</script>

<style scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-field {
  width: 50%;
  margin: auto;
  margin-bottom: 24px;
}
.logo {
  font-size: 3rem;
}
a {
  color: #35495e;
}
</style>
