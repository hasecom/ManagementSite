<template>
    <div id="footer" class="fixed-bottom row notMargin bg-main-color pt-1">
       <div class="col-3 pointer footer_link list_title" v-for="(val,key) in Basic.FooterMenu" :key="key" @click="ScrollTop()">
            <router-link :to="val.path">
                <span class="d-block font-icon text-center"><i class="fas" :class="val.fontawesome"></i></span>
                <span class="d-block footer-text text-center">{{val.title}}</span>
            </router-link>
        </div>
    </div>
</template>
<script>
export default  {
    props:{
       Basic:{
           type:Object
       }
    },
    methods:{
        ScrollTop(){
            scrollTo(0, 0);
        }
    }
}
</script>
<style  scoped>
.footer_link a{
    color:white;
    text-decoration: none;
}
.font-icon{
    font-size:22px;
}
.footer-text{
    font-size:10px;
}
</style>