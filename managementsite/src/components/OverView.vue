<template>
    <div class="text-center pt-5 px-4">
        <span class="overviewTitle d-block pb-4 overviewText">{{OverViewData.title}}</span>
        <span class="overviewContent overviewText">{{OverViewData.content}}</span>
        <div class="pt-4">
            <button class="btn-primary text-center shadow-sm  btn rounded-pill px-5">
                依頼・相談はこちら
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        OverViewData:{
            type:Object
        },        
        SiteDatas: {
            type: Object
        }
    }
}
</script>
<style scoped>
@charset "utf-8";
@import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c');

 
.overviewText {
  font-family:"M PLUS 1p";
}
.overviewContent{
    font-size:18px;
    color:#2d3436;
}
.overviewTitle{
    font-size:24px;
}
.overviewfigure{
    justify-content: center;
    align-items: center;
}
.arrow{
    font-size:30px;
    color:#2d3436;
}
.user-icon{
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform : translate(-50%,-50%);
  transform : translate(-50%,-50%);
  text-align: center;
  font-size:30px;
}

</style>