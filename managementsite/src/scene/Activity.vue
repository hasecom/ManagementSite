<template>
<div class="px-3">
    <div v-for="(val,index) in Activity.Contents" :key="index" class="card bg-dark text-white mt-3 border shadow-lg activity_card">
        <img class="card-img activity_img" :src="require('../'+ val.Image)" :alt="val.Title">
        <div class="card-img-overlay activity_bck">
            <h5 class="card-title row">
                <span class="d-block col-8">{{val.Title}}</span>
                <span class="d-block col-4 text-right"><i class="fas fa-chevron-right"></i></span>
            </h5>
            <p class="card-text text-right pr-4">{{val.Price}}</p>
        </div>
    </div>
</div>
</template>

<script>
import activity from "@/data/activity/Activity.json";
export default {
    props: {
        PageData: {
            type: Object
        }
    },
    data(){
        return{
            Activity:activity
        }
    }
}
</script>

<style scoped>
.activity_img {
    width: 100%;
    height: inherit;
    object-fit: cover;
}
.activity_card{
    width:100%; 
    height:110px;
}

.activity_bck {
    background: rgba(30, 30, 30, 0.4)
}

.activity_bck .card-title {
    font-size: 34px;
}
</style>
