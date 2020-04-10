<template>
  <div class="hello">
    <div class="home-display-flex">
      <div>
   <h3 class="title">Welcome to MLBTheShow20 Companion App. A player reference for when you are away from the game.</h3>
   <div class="btn-actions">
    <!-- <router-link to="/players">
        <md-button class="md-primary md-raised">Batters</md-button>
    </router-link> -->
    <router-link to="/contact-power-hub">
        <md-button class="md-raised md-primary" :md-ripple="false">Contact + Power</md-button>
      </router-link>
     <router-link to="/table">
        <md-button class="md-accent md-raised">Pitcher Table</md-button>
   </router-link>
     <md-button class="md-button md-primary">
       <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Share</a>
        <md-icon>sports_baseball</md-icon>
      </md-button>
   </div>
      </div>
   <img src="../assets/white-phone.png" class="mlb_phone" alt="mlb_phone" />
    </div>

  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      // msg: 'Welcome to Your Vue.js PWA'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@media screen and (max-width: 480px) {
  .twitter-share-button:hover {
    text-decoration: none;
    color: white;
  }
  .mlb_phone {
    display: none;
  }
}
.title {
  color: #ededed;
  margin-top: 2rem;
  max-width: 400px;
  margin-left: 2rem;
}
.home-display-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5rem;
}
.mlb_phone {
  max-width: 40%;
  margin-top: 2%;
}
.btn-actions {
  display: flex;
}
</style>
