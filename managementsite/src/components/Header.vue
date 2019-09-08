<template>
    <div id="header" stlye="position:relative;" class="text-center text-white">
        <div  class="full_img">
            <img ref="TopImg" id="top_img" :src="require('../'+PageData.Image.Top)" >
            <div class="site_title">
                <span class="px-3 py-3 shadow-sm">{{Basic.SiteTitle}}</span>
                </div>
        </div>  
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
.site_title{
    position: absolute;
    font-weight: bold;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    font-size:9vw;
    width:100%;
}
.site_title span{
    background:rgba(0,0,0,0.4)
}
</style>