<template>
    <div id="footer" class="border fixed-bottom row notMargin bg-main-color">
       <div class="col-3 pointer footer_link" v-for="(link,name) in Basic.FooterMenu" :key="name">
            <router-link :to="link">{{name}}</router-link>
        </div>
    </div>
</template>
<script>
export default  {
    props:{
       Basic:{
           type:Object
       }
    }
}
</script>
<style  scoped>
.footer_link a{
    color:white;
    text-decoration: none;
}
</style>