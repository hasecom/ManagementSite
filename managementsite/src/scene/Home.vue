<template>
<div>
    <div class="row">
        <div class="col-4 border" v-for="(val ,keys) in PageData.Content" :key="keys">
            <i class="fas text-center d-block pt-2 pb-2" :class="val.fontawesome"></i>
            <p class="font-weight-bold text-center">{{val.title}}</p>
            <article class="description text-muted">{{val.description}}</article>
        </div>
    </div>
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

        }
    },
    mounted: function () {
        
    }
}
</script>
