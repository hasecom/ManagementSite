<template>
<div class="pt-5">
    <div class="full_img">
        <img id="preformance_img" :src="require('../'+ PreformanceData.image)" alt="">
        <div class="preformance_title pl-3">
            <span class="px-3 py-3 shadow-sm">
                {{PreformanceData.title}}
            </span>
        </div>
    </div>
    <div class="preformanceContent">
            .kk
    </div>
</div>
</template>

<script>
export default {
    props: {
        PreformanceData: {
            type: Object,
        },
        SiteData: {
            type: Object
        }
    },
}
</script>

<style scoped>
#preformance_img {
    width: inherit;
    height:130px;
    object-fit: cover;
}

.preformance_title {
    position: absolute;
    font-weight: bold;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    font-size: 12vw;
    width: 100%;
    color: #2d3436;
}
.preformance_title span{
    background: rgba(255, 255, 255, 0.3);
}
.preformanceContent{
    background:white;
}
</style>
