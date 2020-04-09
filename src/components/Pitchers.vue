<template>
  <div class="pitchers">
    <!-- Search -->
    <md-field md-inline>
      <label>Search Pitchers</label>
      <md-input v-model="search"></md-input>
    </md-field>
    <div class="md-layout md-alignment-center">
      <!-- Pitchers -->
      <md-card v-for="pitcher in filter" :key="pitcher.Player" md-with-hover>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ pitcher.Player }}</div>
            <div class="md-subhead">{{ pitcher.Team }}</div>
            <div class="md-subhead">Projected Points: {{ pitcher.PTS }}</div>
          </md-card-header-text>

          <md-card-media class="logo">
            <i :class="matchTeamLogo(pitcher.Team)"></i>
          </md-card-media>
        </md-card-header>

        <md-card-actions>
          <md-button class="md-raised md-primary">View</md-button>
          <router-link to="/optimizer">
            <md-button class="md-raised">Track</md-button>
          </router-link>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import methods from "../../methods";
import pitcherProjections from "../assets/pitchers.json";

export default {
  name: "pitchers",
  data() {
    return {
      team: pitcherProjections.Team,
      pitchers: pitcherProjections,
      search: ""
    };
  },
  methods: {
    ...methods
  },
  computed: {
    filter() {
      return this.pitchers.filter(p => {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
