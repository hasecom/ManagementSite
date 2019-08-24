<template>
<div class="pt-5">
    <div class="full_img">
        <img id="preformance_img" :src="require('../'+ Preformance.image)" alt="">
        <div class="preformance_title pl-3">
            <span class="px-3 py-3 shadow-sm">
                {{Preformance.title}}
            </span>
        </div>
    </div>
    <div class="preformanceContent">
        <!-- <div class="childTitle">
            {{PreformanceData.childtitle}}
        </div> -->
        <div class="list-group">
            <div v-for="(val, keys) in Preformance.content" :key="keys" class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{val.title}}</h5>
                    <small class="text-muted">{{val.date}}</small>
                </div>
                <div class="mb-1 preformance_description text-muted">{{val.description}}</div>
            </div>
            <div id="preformancebtnWrap" class="px-2 pt-3 pb-2">
                <button class="btn btn-primary text-center shadow-sm  border rounded-pill px-2">もっとみる</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import preformances from "@/data/preformance/PreformanceData.json";
export default {
    props: {
        SiteData: {
            type: Object
        }
    },
    data(){
        return{
            Preformance:preformances
        }
    }
}
</script>

<style scoped>
#preformance_img {
    width: inherit;
    height: 130px;
    object-fit: cover;
}

.preformance_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    font-size: 12vw;
    width: 100%;
    color: #2d3436;
}

.preformance_title span {
    background: rgba(255, 255, 255, 0.2);
}

.preformanceContent {
    background: white;
}

.preformance_description {
    font-size: 13px;
}

#preformancebtnWrap{
    text-align: center;
}
#preformancebtnWrap button{
    font-size:16px;
}
</style>
