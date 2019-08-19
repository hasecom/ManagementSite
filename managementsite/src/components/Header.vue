<template>
    <div id="header" class="fixed-top text-center h2 pt-2 pb-2 bg-main-color text-white">
        {{Basic.SiteTitle}}

    </div>
</template>
<script>
export default {
    props:{
       Basic:{
           type:Object
       }
    }
    
}
</script>
<style lang="sass" scoped>

</style>