<template>
<div class="intro_wrap" :style="introMainWrap">
    <introMain ref="introMain" />
    {{PageData}}
</div>
</template>

<script>
import introMain from "@/components/IntroductionMain.vue";
export default {
    props: {
        PageData: {
            type: Object
        }
    },
    data(){
        return{
            Mounted:false
        }
    },
    mounted: function () {
        this.Mounted = true;
    },
    computed: {
        introMainWrap() {
            if(!this.Mounted){
                return {
                    "height":"0px"
                    };
            }
            console.log(this.$refs.introMain.GetMainIntroHeight() + "px")
            return {
                "height":this.$refs.introMain.GetMainIntroHeight() + "px"
                };
        }
    },
    components: {
        introMain
    }
}
</script>

<style scoped>
.intro_wrap {
    color: rgba(236, 240, 241, 1.0);
    position: relative;
    z-index: 0;
}
</style>
