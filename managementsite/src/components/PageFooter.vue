<template>
<div class="page_footer">
    <div class="page_footer_wrap">
        <div class="page_footer_main mt-5 ">
            ll
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.page_footer{
    overflow: hidden;
}
.page_footer_wrap {
    position: relative;
    overflow: hidden;
    text-align: center;
    width: 150%;
    height: 300px;
    margin: 0 auto;

}

.page_footer_main {
    position: absolute;
    top: 0;
    right:0;
    left: -30%;
    bottom: 0;
    margin:0 auto;
    text-align: center;
    min-height: 300px;
    background: rgba(53, 59, 72, 1.0);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;

}
</style>
