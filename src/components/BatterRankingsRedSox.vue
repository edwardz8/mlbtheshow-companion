<template>
  <div class="batter-rankings">
   <div class="batter-rankings-flex">
       <div class="batter-rankings-card" v-for="batter in batters" :key="batter.Player">
           <div class="card-heading">
           <h2 class="card-heading">{{batter.Player}}</h2>
            <i :class="matchTeamLogo(batter.Team)" class="logo"></i>
           </div>
           <div class="card-inner-flex">
               <div class="card-flex-left">
                   <p class="LHP">LHP</p>
                   <div class="contact_power_flex_left">
                        <div class="contact">
                            <p class="CON">CON</p>
                            <p class="num">{{batter.CON_LHP}}</p>
                        </div>
                        <div class="power">
                            <p class="POW">POW</p>
                            <p class="num">{{batter.POW_LHP}}</p>
                        </div>
                   </div>
               </div>
               <div class="card-flex-right">
                   <p class="RHP">RHP</p>
                   <div class="contact_power_flex_right">
                        <div class="contact">
                            <p class="CON">CON</p>
                            <p class="num">{{batter.CON_RHP}}</p>
                        </div>
                        <div class="power">
                            <p class="POW">POW</p>
                            <p class="num">{{batter.POW_RHP}}</p>
                        </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
  </div>
</template>

<script>
import Batters from '../assets/BOS_contact_power.json'
import methods from "../../methods";

export default {
  name: "BatterRankingsBraves",
  data: () => ({
      batters: Batters
    }),
    methods: {
        ...methods
    }
};
</script>

<style scoped>
.logo {
    font-size: 3rem;
    text-align: center;
}
.md-toolbar.md-theme-default.md-transparent .md-title {
    color: #448aff;
}
.batter-rankings {
    margin: 1%;
}
.batter-rankings-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.batter-rankings-card {
    margin: 1%;
    color: #FFF;
    padding: 2%;
    min-width: 300px;
    background-color: #bd3039;
    border-radius: 3px;
}
.card-heading {
    margin-top: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.card-inner-flex {
    display: flex;
    justify-content: space-between;
}
.card-flex-left, .card-flex-right {
    display: flex;
    flex-direction: column;
    text-align: center;
}
.contact_power_flex_left, .contact_power_flex_right {
    display: flex;
    padding-left: 10px;
    background-color: dimgray;
    border-radius: 3px;
    padding-right: 10px;
}
.contact {
    padding-right: 20px;
}
.power {
    padding-left: 20px;
}
.LHP {
    margin-bottom: 0;
    font-size: large;
    font-weight: bold;
}
.RHP {
    margin-bottom: 0;
    font-size: large;
    font-weight: bold;
}
.CON, .POW, .num {
    font-weight: bold;
}
.num {
    font-size: large;
}
</style>
