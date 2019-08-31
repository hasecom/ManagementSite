<template>
<div class="intro mt-3 border shadow-sm">
    <section id="introduction" class="pt-3">
        <p class="text-center intro_title">{{Introduction.title}}</p>
        <div class="wrap_my_intro mb-3">
            <div class="my_intro rounded-circle">
                <img class="myself_intro rounded-circle " :src="require('../'+ Introduction.portrait)" alt="">
            </div>
        </div>
        <div class="intro_content px-3 py-3">
            <p class="intro_name text-center">{{Introduction.name}}</p>
            <p class="intro_message">{{Introduction.message}}</p>
            <div id="introbtnWrap" class="px-2">
                <button class="btn btn-primary text-center shadow-sm  border rounded-pill px-2">もっとみる</button>
            </div>
        </div>
    </section>
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
            Introduction: introduction
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
    background: red;
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
#introbtnWrap{
    text-align: right;
}
#introbtnWrap button{
    font-size:10px;
}
</style>
