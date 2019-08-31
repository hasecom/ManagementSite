<template>
<div class="page_footer">
    <div class="page_footer_wrap">
        <div class="page_footer_main mt-5 text-white pt-5">
            <div class="page_footer_content px-4" :style="pageFooterContent">
                <div v-for="(val,keys) in PagesFooterData.MenuName" :key="keys" class="pb-2">
                    <span  @click="transition(val.path)">{{val.title}}</span>
                </div>
                <div class="footer_btn_wrap">
                    <div v-for="(val,keys) in PagesFooterData.MenuSub" :key="keys">
                        <button class="btn btn-info d-block my-3" @click="transition(val.path)">
                            <span>{{val.title}}</span>
                            <i class="fas pl-2 pr-1" :class="val.fontawesome"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        PagesFooterData: {
            type: Object
        }
    },
    methods: {
        transition(url) {
            scrollTo(0, 0);
            if (location.pathname == url) return;
            this.$router.push({
                path: url
            });

        }
    },
    computed: {
        pageFooterContent() {
            return "width:" + window.innerWidth + "px";
        }
    }

}
</script>

<style scoped>
.page_footer {
    overflow: hidden;
}

.page_footer_wrap {
    position: relative;
    overflow: hidden;
    text-align: center;
    width: 150%;
    height: 600px;
    padding-bottom: 300px;
    margin: 0 auto;

}

.page_footer_main {
    position: absolute;
    top: 0;
    right: 0;
    left: -30%;
    bottom: 0;
    margin: 0 auto;
    text-align: center;
    min-height: 300px;
    background: rgba(53, 59, 72, 1.0);
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
}

.page_footer_content {
    padding-top: 30px;
    margin: 0 auto;
}

.footer_btn_wrap button {
    margin: 0 auto;
}
</style>
