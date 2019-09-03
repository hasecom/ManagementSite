<template>
<div>
    <div :id="'Id_' + val.Id" class="card mt-3 mx-3 shadow" v-for="(val,index) in displayNewsFnc(News.Contents,nowpage,displaynews)" :key="index">
        <div class="card-header row notMargin">
            <span class="col-8 px-0">{{val.Title}}</span>
            <span class="text-right col-4 news_date px-0">{{dataFormater(val.Date)}}</span>
        </div>
        <div class="card-body news_content">
            {{val.Content}}
        </div>
    </div>
    <div class="choreography mt-3">
        <div class="d-inline-block border shadow-sm mx-1" v-for="n in howmanyPages(News.Contents,displaynews)" :key="n">
            <button class="btn btn-light" @click="nowpage = n">
                {{n}}
            </button>
        </div>
    </div>
</div>
</template>

<script>
import news from "@/data/news/NewsData.json";
import * as fncs from "@/js/functions.js";
export default {
    props: {
        PageData: {
            type: Object
        }
    },
    data() {
        return {
            News: news,
            nowpage: 1,
            displaynews: 5,
        }
    },
    mounted: function () {
        scrollTo(0, 0);
        if (this.$route.query.Id) {
            this.$scrollTo("#Id_" + Number(this.$route.query.Id));
        }
    },
    methods: {
        dataFormater(date) {
            return fncs.DataFormat(date, 1);
        },
        displayNewsFnc(obj, page, display) {
            return fncs.Pages(obj, page, display);
        },
        howmanyPages(obj, display) {
            return fncs.NowPage(obj, display)
        }
    }
}
</script>

<style scoped>
.news_date {
    font-size: 12px;
}

.choreography {
    text-align: center;
}

.news_content {
    font-size: 15px;
}
</style>
