<template>
<div class="intro mt-3">
    <section id="introduction" class="pt-3">
        <p class="text-center">{{Introduction.title}}</p>
        <div v-for="(intro,keys) in Introduction.content" :key="keys" class="card card-body">
            <p class="card-title text-center">{{intro.title}}</p>
            <p class="card-text position-absolute logo"><i class="fab" :class="intro.fontawesome"></i></p>
            <a href="#" class="btn btn-outline-info rounded-pill mr-5 ml-5">フォローする</a>
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
.logo{
    right:10%;
}
.logo i{
    font-size:50px;
    color:#dfe6e9;
}
</style>
