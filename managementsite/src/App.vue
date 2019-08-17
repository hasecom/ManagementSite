<template>
  <div id="app">
   <Header />
    <div class="mt-4">
        <router-link to="/">ホーム</router-link>
        <router-link to="/activity">活動</router-link>
        <router-link to="/news">ニュース</router-link>
        <router-link to="/profile">Profile</router-link>
        <div id="body"><router-view></router-view></div>
        <div>a</div>
    </div>
   <Footer />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
