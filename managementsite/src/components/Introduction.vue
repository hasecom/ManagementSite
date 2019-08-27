<template>
    <div>
        <section id="introduction" class="pt-3">
            <p class="text-center">{{Introduction.title}}</p>
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
#introduction{

}
#introduction p {
    font-size:20px;
}
</style>