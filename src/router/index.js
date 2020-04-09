import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Batters from '@/components/Batters'
import Pitchers from '@/components/Pitchers'
import Players from '@/components/Players'
import Optimizer from '@/components/Optimizer'
import Table from '@/components/Table'
import BatterRankings from '@/components/BatterRankings'
import BatterRankingsBraves from '@/components/BatterRankingsBraves'
import BatterRankingsRedSox from '@/components/BatterRankingsRedSox'
import BatterRankingsAthletics from '@/components/BatterRankingsAthletics'
import BatterRankingsYankees from '@/components/BatterRankingsYankees'
import BatterRankingsBlueJays from '@/components/BatterRankingsBlueJays'
import ConPowerHub from '@/components/ConPowerHub'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/players',
      name: 'Players',
      component: Players
    },
    {
      path: '/batters',
      name: 'Batters',
      component: Batters
    },
    {
      path: '/pitchers',
      name: 'Pitchers',
      component: Pitchers
    },
    {
      path: '/optimizer',
      name: 'Optimizer',
      component: Optimizer
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/batter-rankings',
      name: 'BatterRankings',
      component: BatterRankings
    },
    {
      path: '/batter-rankings-braves',
      name: 'BatterRankingsBraves',
      component: BatterRankingsBraves
    },
    {
      path: '/batter-rankings-redsox',
      name: 'BatterRankingsRedSox',
      component: BatterRankingsRedSox
    },
    {
      path: '/batter-rankings-athletics',
      name: 'BatterRankingsAthletics',
      component: BatterRankingsAthletics
    },
    {
      path: '/batter-rankings-yankees',
      name: 'BatterRankingsYankees',
      component: BatterRankingsYankees
    },
    {
      path: '/batter-rankings-bluejays',
      name: 'BatterRankingsBlueJays',
      component: BatterRankingsBlueJays
    },
    {
      path: '/contact-power-hub',
      name: 'ConPowerHub',
      component: ConPowerHub
    },
  ]
})
