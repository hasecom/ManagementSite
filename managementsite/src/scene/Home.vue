<template>
<div>
    <div class="row notMargin">
        <div class="col-4" v-for="(val ,keys) in PageData.Content" :key="keys">
            <i class="fas text-center d-block pt-2 h3" :class="val.fontawesome"></i>
            <div class="font-weight-bold text-center list_title">{{val.title}}</div>
            <article class="description text-muted pt-2 pb-3 text-center">{{val.description}}</article>
        </div>
    </div>
    <div class="text-center">
        <button class="btn-primary text-center shadow-sm  btn rounded-pill px-5">
            {{PageData.Button.Work}}
        </button>
    </div>
    <TopNews :SiteDatas="this.SiteData"/>

</div> 
</template>
<script>
import TopNews from "@/components/TopNews.vue"; 
export default {
    props: {
        PageData: {
            type: Object,
        },
        SiteData: {
            type: Object
        }
    },
    data() {
        return {
        }
    },
    components:{
        TopNews
    },
    mounted: function () {
        
    }
}
</script>
