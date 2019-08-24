<template>
    <div class="top-news mt-3 rounded shadow-sm border">
        <div class="text-center topnews_titles py-3">{{News.Titles}}</div>
        <section class="row notMargin py-1"  @click="transition(val.Id)" v-for="(val,keys) in topnewsFormater(News.Contents)" :key="keys">
                <span class="topnews_date col-6">{{dataFormater(val.Date)}}</span>
                <span class="topnews_title col-6 text-left">{{val.Title}}</span>
        </section>
        <div id="topnewsbtnWrap" class="px-2">
        <button class="btn-primary text-center shadow-sm  btn rounded-pill px-1">もっとみる</button>
        </div>
        <div style="height:200px;"></div>
    </div>
</template>
<script>
import news from "@/data/news/NewsData.json";
import * as fncs from "@/js/functions.js"; 

export default {
    props:{
       SiteDatas: {
            type: Object,
        }
    },
    data(){
        return{
            News:news, 
        }
    },
    methods:{
        dataFormater(date){
            return fncs.DataFormat(date,1);
        },
        topnewsFormater(val){
            var size = val.slice(0,5);
            return size;
        },
        transition(id){
            this.$router.push({path:this.SiteDatas.news,query:id != null ? {Id:id} : null});
        }
    },
    computed:{

    }
}
</script>
<style scoped>
.top-news{
    background:white;
    width:300px;
    margin:0 auto;
}
.topnews_titles{
    font-size:20px;
    color:#2d3436;
}
.topnews_date{
    font-size:13px;
    color:blue;
}
.topnews_title{
    font-size:13px;
    color:#2d3436;
}
#topnewsbtnWrap{
    text-align: right;
}
#topnewsbtnWrap button{
    font-size:10px;
}
</style>