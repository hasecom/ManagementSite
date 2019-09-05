<template>
<div>
    <div class="row notMargin" ref="activity_card">
        <div v-for="(val,keys) in DisplayContent" :key="keys" class="col-6 activity_card mb-1" data-toggle="modal" data-target="#ActivityModal">
            <div class="card"><modal :modalData="val"/>
                <img class="activity_img" :src="require('../'+val.Image)" :style="img_height" alt="">
                <div class="main_card">
                    <div class="activity_title text-left px-1">{{val.Title}}</div>
                    <p class="card-text text-right px-1"><small>{{val.Price}}</small></p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import activity from "@/data/activity/Activity.json";
import modal from "@/components/ActivityModal.vue";
export default {
    props: {
        PageData: {
            type: Object
        }
    },
    components: {
        modal
    },
    data() {
        return {
            Activity: activity,
            DisplayContent: activity.Contents,
            ImgHeight: 0
        }
    },
    mounted: function () {
        this.ImgHeight = this.$refs.activity_card.clientWidth / 2;

    },
    computed: {
        img_height() {
            return "height:" + this.ImgHeight + 'px';
        }
    }

}
</script>

<style scoped>
.activity_img {
    width: 100%;
    height: 100px;
    object-fit: cover;
}

.activity_card {
    width: 100%;
    padding-left: 3px;

    padding-right: 3px;
}

.activity_title {
    font-size: 15px;
    height: 30px;

}

.activity_bck {
    background: rgba(30, 30, 30, 0.4)
}

.main_card {
    height: 60px;
}

.activity_bck .card-title {
    font-size: 24px;
}
</style>
