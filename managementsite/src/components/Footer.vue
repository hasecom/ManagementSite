<template>
    <div id="footer" class="bg-info border fixed-bottom row">
       <div  class="col-3" v-for="(link,name) in Basic.FooterMenu" :key="name">
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
<style lang="sass" scoped>

</style>