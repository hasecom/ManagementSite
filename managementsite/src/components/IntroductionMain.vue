<template>
<div id="wrapMainIntro">
    <div class="wrap_my_intro">
        <div class="my_intro rounded-circle">
            <img class="myself_intro rounded-circle " :src="require('../'+ Introduction.portrait)" alt="">
        </div>
    </div>
    <div class="intro_backdrop" :style="getHeight">
        <div class="intro_content px-3 py-3">
            <p class="intro_name text-center">{{Introduction.name}}</p>
            <table class="table table-bordered">
                <tr v-for="(val,keys) in Introduction.introTable" :key="keys">
                    <td class="col-5 px-1 intro_table_key">{{val.key}}</td>
                    <td class="col-6 px-1">{{val.value}}</td>
                </tr>
            </table>
            <p class="intro_message">{{Introduction.message}}</p>
            <div class="text-center  py-4">
                <button class="btn btn-primary">相談・依頼はコチラ</button>
            </div>
            <div class="mymessage">
                <p class="text-center intro_message_title pt-2">{{Introduction.mymessageTitle}}</p>
                <p class="intro_message py-2 px-2">{{Introduction.mymessage}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import introduction from "@/data/Introduction/IntroductionData.json";
export default {
    props: {
        SiteDatas: {
            type: Object
        }
    },
    data() {
        return {
            Introduction: introduction,
            Mounted: false
        }
    },
    mounted: function () {
        this.Mounted = true;
    },
    methods: {
        GetMainIntroHeight() {
            var IntroMainAbsolute = $(".intro_backdrop").outerHeight(true) + $(".my_intro").outerHeight(true)
            return IntroMainAbsolute;
        }
    },
    computed: {
        getHeight() {
            if (!this.Mounted) {
                return {
                    "top": "0px",
                    "padding-top": "0px"
                };
            }
            return {
                "top": $(".myself_intro").outerHeight(true) / 2 + "px",
                "padding-top": $(".myself_intro").outerHeight(true) / 2 + "px"
            };
        }
    }
}
</script>

<style scoped>
#introduction {}

#introduction p {
    font-size: 20px;
}

.intro {
    background: white;
    width: 300px;
    margin: 0 auto;
}

.logo {
    right: 10%;
}

.logo i {
    font-size: 50px;
    color: #dfe6e9;
}

.my_intro {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    text-align: center;
    z-index: 4;
}

.wrap_my_intro {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 0 auto;

}

.myself_intro {
    width: inherit;
    height: inherit;
    object-fit: cover;
}

.intro_message {
    font-size: 15px !important;
}

#introbtnWrap {
    text-align: right;
}

#introbtnWrap button {
    font-size: 10px;
}

.intro_backdrop {
    position: absolute;
    width: 100%;
    z-index: 2;
    background: rgba(255, 255, 255, 0.7);
}

.intro_content {
    color: rgba(44, 62, 80, 1.0);
}

.intro_table_key {
    background: rgba(52, 152, 219, 0.7);
    color: rgba(236, 240, 241, 1.0);
    font-weight: bold;
}
.mymessage{
    background:rgba(52, 152, 219, 0.1);
}
.intro_message_title{
    font-weight: bold;
    font-size: 18px;
}
.intro_message_title:before{
    content:'●';
    padding-right: 3px;
}
</style>
