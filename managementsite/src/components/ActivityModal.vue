<template>
<div>
    <div class="modal fade" id="ActivityModal" data-target="#ActivityModal" tabindex="-1" role="dialog" aria-labelledby="ActivityModalLabel" @click.self="closeModal()">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
            <div class="modal-content" @touchmove="TouchActivityModal" >
                <div class="modal-header">
                    <div class="modal-title" id="ActivityModalLabel">{{modalData.Title}}</div>
                    <button type="button" @click="closeModal()">
                        <span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ul class="list-group list-group-flush border mb-3" style="max-width: 600px;">
                        <li class="list-group-item"> 価格:<br>{{modalData.Price}}</li>
                        <li class="list-group-item"> 期間:<br>{{modalData.Period}}</li>
                        <li class="list-group-item">概要:<br>{{modalData.Description}}</li>
                    </ul>
                    <div v-for="(val,keys) in modalData.Details" :key="keys" class="card bg-light mb-3">
                        <div class="card-header">{{val.Title}}</div>
                        <div class="card-body">
                            <p class="card-text">カードのタイトルに基づいてカードの内容の大部分を占める簡単なサンプルテキスト。</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="closeModal()">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        modalData: {
            type: Object
        }
    },
    mounted: function () {
        $('#ActivityModal').on('hide.bs.modal', function () {
            $("#modal_backdrop").addClass("d-none");
        })
    },
    methods: {
        closeModal() {
            $(window).off('.noScroll');
            $("#ActivityModal").modal("hide");
        },
        TouchActivityModal(e) {
            var val = $(".modal-body")[0];
            var val2 = $("#modal_backdrop");
            if (e.target == val || e.target == val2) {
                e.stopPropagation()
            } else if (e.target.parentNode == val) {
                e.stopPropagation()
            } else if (e.target.parentNode.parentNode == val) {
                e.stopPropagation()
            } else if (e.target.parentNode.parentNode.parentNode == val) {
                e.stopPropagation()
            } else {
                e.preventDefault();
            }
        }
    },
    computed: {}
}
</script>

<style scoped>
#ActivityModal {
    height: 85%;
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%);
}
</style>
