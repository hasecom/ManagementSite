<template>
  <div id="app">
   <Header />
    <div class="mt-4">
        <div id="body">
          <router-view></router-view>
        </div>
    </div>{{home}}
   <Footer :Basic="basic"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import  { 
  Basic, 
  Home, 
  News, 
  Activity,
  Profile
  }  from  './js/data'

export default {
  name: 'app',
  data(){
    return{
      basic:Basic[0],
      home:Home,
      news:News,
      activity:Activity,
      profile:Profile
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
