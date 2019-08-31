<template>
<div id="app">
      <Header :Basic="basic" :PageData="this.select['head'][0]" ref="header" />
        <div id="body">
            <router-view :PageData="this.select[this.display][0]" :SiteData="this.site"></router-view>
            <PageFooter :PagesFooterData="this.pagesFooter" />
        </div>
    <Footer :Basic="basic" />
</div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import PageFooter from '@/components/PageFooter.vue'
import {
    Head,
    Basic,
    Home,
    News,
    Activity,
    Profile,
    Site,
    PagesFooter
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
            TopPadding:0,
            site:Site[0],
            pagesFooter:PagesFooter,
        }
    },
    components: {
        Header,
        Footer,
        PageFooter
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
