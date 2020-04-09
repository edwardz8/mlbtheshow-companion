<template>
  <div class="con_power_hub_container">
      <div class="con_power_hub_flex">
        <p>Available Teams: Atlanta Braves, Los Angeles Dodgers, Oakland Athletics, Toronto Blue Jays, New York Yankees, and Boston Redsox</p>
       <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">NL West</div>
          <div class="md-subhead">Click logo to search batters</div>
        </md-card-header>
        <md-card-content class="card-content">
            <router-link to="/batter-rankings">
          <i class="bb-LAD LAD logo"></i>
            </router-link>
          <i class="bb-ARI ARI logo logo-ari"></i>
          <i class="bb-COL COL logo logo-col"></i>
          <i class="bb-SF SF logo logo-sf"></i>
          <i class="bb-SD SD logo logo-sd"></i>
        </md-card-content>
      </md-ripple>
    </md-card>
    <!-- NL EAST  -->
      <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">NL East</div>
          <div class="md-subhead">Click logo to search batters</div>
        </md-card-header>

        <md-card-content class="card-content">
            <router-link to="/batter-rankings-braves">
          <i class="bb-ATL ATL logo logo-atl"></i>
            </router-link>
          <i class="bb-PHI PHI logo logo-phi"></i>
          <i class="bb-WAS WAS logo logo-was"></i>
          <i class="bb-NYM NYM logo logo-nym"></i>
          <i class="bb-MIA MIA logo logo-mia"></i>
        </md-card-content>
      </md-ripple>
    </md-card>
    <!-- NL CENTRAL -->
      <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">NL Central</div>
          <div class="md-subhead">Click logo to search batters</div>
        </md-card-header>
        <md-card-content class="card-content">
            <router-link to="/batter-rankings">
          <i class="bb-PIT PIT logo logo-pit"></i>
            </router-link>
          <i class="bb-STL STL logo logo-stl"></i>
          <i class="bb-CIN CIN logo logo-cin"></i>
          <i class="bb-CHC CHC logo logo-chc"></i>
          <i class="bb-MIL MIL logo logo-mil"></i>
        </md-card-content>
      </md-ripple>
    </md-card>
    <!-- AL EAST -->
      <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">AL East</div>
          <div class="md-subhead">Click logo to search batters</div>
        </md-card-header>
        <md-card-content class="card-content">
            <router-link to="/batter-rankings-redsox">
          <i class="bb-BOS BOS logo logo-bos"></i>
            </router-link>
             <router-link to="/batter-rankings-yankees">
          <i class="bb-NYY NYY logo logo-nyy"></i>
             </router-link>
          <i class="bb-TB TB logo logo-tb"></i>
          <i class="bb-BAL BAL logo logo-bal"></i>
          <router-link to="/batter-rankings-bluejays">
          <i class="bb-TOR TOR logo logo-tor"></i>
          </router-link>
        </md-card-content>
      </md-ripple>
    </md-card>
    <!-- AL CENTRAL -->
      <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">AL Central</div>
          <div class="md-subhead">Click logo to search batters</div>
        </md-card-header>
        <md-card-content class="card-content">
            <router-link to="/batter-rankings">
          <i class="bb-DET DET logo logo-det"></i>
            </router-link>
          <i class="bb-CLE CLE logo logo-cle"></i>
          <i class="bb-KC KC logo logo-kc"></i>
          <i class="bb-MIN MIN logo logo-min"></i>
          <i class="bb-CWS CWS logo logo-cws"></i>
        </md-card-content>
      </md-ripple>
    </md-card>
    <!-- AL WEST -->
      <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">AL West</div>
          <div class="md-subhead">Click logo to search batters</div>
        </md-card-header>
        <md-card-content class="card-content">
           <router-link to="/batter-rankings-athletics">
          <i class="bb-OAK OAK logo logo-oak"></i>
           </router-link>
          <i class="bb-TEX TEX logo logo-tex"></i>
          <i class="bb-SEA SEA logo logo-sea"></i>
            <router-link to="/batter-rankings">
          <i class="bb-LAA LAA logo logo-laa"></i>
            </router-link>
          <i class="bb-HOU HOU logo logo-hou"></i>
        </md-card-content>
      </md-ripple>
    </md-card>
      </div>
  </div>
</template>

<script>
export default {
  name: "ConPowerHub",
  data() {
    return {
      // msg: 'Welcome to Your Vue.js PWA'
    };
  }
};
</script>

<style scoped>
.con_power_hub_container {
    margin: 2%;
}
 .md-card {
    margin: 20px;
    display: inline-block;
    vertical-align: top;
  }
.logo {
    font-size: 3rem;
    margin-right: 3rem;
    text-decoration: none;
}
.card-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.con_power_hub_flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.logo-atl, .logo-cin, .logo-bos, .logo-laa, .logo-cle {
    color: red;
}
.logo-stl {
    color: #c41e3a;
}
.logo-sf, .logo-bal {
    color: orange;
}
.logo-det {
    color: #f26722;
}
.logo-sd {
    color: tan;
}
.logo-mia {
    color: #0077c8;
}
.logo-chc {
    color: #1459fa;
}
.logo-min {
    color: #cfac7a;
}
.logo-was {
    color: rgb(252, 77, 77);
}
.logo-phi, .logo-tb {
    color: lightblue;
}
.logo-oak {
    color: #efb21e;
}
.logo-pit {
    color: #fdb827;
}
.logo-tor {
    color: #4586d4;
}
.logo-kc {
    color: royalblue;
}
.logo-ari {
    color: #a71930;
}
.logo-col {
    color: #c4ced4;
}
.logo-nym {
    color: #ff5910;
}
.logo-tex {
    color: #f84453;
}
</style>