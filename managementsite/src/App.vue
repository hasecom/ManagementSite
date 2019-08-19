<template>
<div id="app">
      <Header :Basic="basic" ref="header" />
    <div class="mt-4" :style="body">
        <div id="body">
            <router-view :PageData="this.select[this.display][0]"></router-view>
        </div>
    </div>
    <Footer :Basic="basic" />
</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import {
    Basic,
    Home,
    News,
    Activity,
    Profile,
    Site
} from './js/data'

export default {
    name: 'app',
    data() {
        return {
            basic: Basic[0],
            display:"",
            select:{
              "home":Home,
              "news":News,
              "activity":Activity,
              "profile":Profile
              },
            TopPadding:0
        }
    },
    components: {
        Header,
        Footer
    },
    watch:{
      '$route'(){
        this.LoadDisplayPath();
      }
    },
    created: function () {
        this.LoadDisplayPath();
    },
    mounted:function(){
      this.TopPadding = this.$refs.header.$vnode.elm.clientHeight;
      console.log(this.TopPadding)
    },
    methods: {
        LoadDisplayPath() {
            let _this = this;
            Object.keys(Site[0]).forEach(function (key) {
                if (_this.$route.path == Site[0][key]) {
                    _this.display = key;
                }
            });
        }
    },
    computed:{
      body:function(){
        return "padding-top:" + this.TopPadding + "px"
      }
    }
}
</script>

<style>

</style>
