<template>
  <div class="table">
    <div class="table-container">
         <md-table v-model="users" md-sort="Player" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">PitcherRankings - MLBTheShow20</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Player" md-sort-by="Player">{{ item.Player }}</md-table-cell>
        <md-table-cell md-label="Team" md-sort-by="Team">{{ item.Team }}</md-table-cell>
        <md-table-cell md-label="Stamina" md-sort-by="STA">{{ item.STA }}</md-table-cell>
        <md-table-cell md-label="H/9" md-sort-by="H_9">{{ item.H_9 }}</md-table-cell>
        <md-table-cell md-label="K/9" md-sort-by="K_9">{{ item.K_9 }}</md-table-cell>
        <md-table-cell md-label="HR/9" md-sort-by="HR_9">{{ item.HR_9 }}</md-table-cell>
        <md-table-cell md-label="PCLT" md-sort-by="PCLT">{{ item.PCLT }}</md-table-cell>
        <md-table-cell md-label="CTRL" md-sort-by="CTRL">{{ item.CTRL }}</md-table-cell>
        <md-table-cell md-label="VEL" md-sort-by="VEL">{{ item.VEL }}</md-table-cell>
        <md-table-cell md-label="BRK" md-sort-by="BRK">{{ item.BRK }}</md-table-cell>
      </md-table-row>
        </md-table>
    </div>
  </div>
</template>

<script>
import Pitchers from '../assets/pitchers.json'

export default {
  name: "Table",
  data: () => ({
      users: Pitchers
    })
};
</script>

<style>
.md-toolbar.md-theme-default.md-transparent .md-title {
    color: #448aff;
}
.table-container {
    margin: 1%;
}
</style>
