<template>
    <div id="header" stlye="position:relative; height:500px;" class="text-center text-white">
        <div  class="full_img"><img ref="TopImg" id="top_img" :src="require('../'+PageData.Image.Top)" ></div>
        <div class="site_title">{{Basic.SiteTitle}}</div>
    </div>
</template>
<script>
export default {
    props:{
       Basic:{
           type:Object
       },
       PageData: {
            type: Object,
        }
    },
    data() {
        return {
            TopImgHeight:0,
            LoadTopImg:false,
            isMounted:false
        }
    },
    watch:{
    },
    mounted:function(){
        this.isMounted = true;
    },
    methods:{
        
    },
    computed:{

    }
}
</script>
<style scoped>
#top_img{
        width: inherit;
}
</style>