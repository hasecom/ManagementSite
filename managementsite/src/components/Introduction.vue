<template>
    <div>
        <section>
            {{Introduction.title}}
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

</style>