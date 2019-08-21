<template>
<div id="app">
      <Header :Basic="basic" :PageData="this.select['head'][0]" ref="header" />
        <div id="body">
            <router-view :PageData="this.select[this.display][0]"></router-view>
        </div>
    <Footer :Basic="basic" />
</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import {
    Head,
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
              "head":Head,
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
    }
}
</script>

<style>

</style>
