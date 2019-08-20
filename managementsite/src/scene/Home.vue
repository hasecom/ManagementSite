<template>
<div>
    <img class="full_img" :src="require('../'+PageData.Image.home)">

    <br>
</div> 
</template>

<script>
export default {
    props: {
        PageData: {
            type: Object,
        }
    },
    data() {
        return {
            bb:"/home",
            cc:"assets/home.jpg"
        }
    },
    mounted: function () {
        
    }
}
</script>
