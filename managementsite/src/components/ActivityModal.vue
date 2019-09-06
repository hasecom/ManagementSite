<template>
<div>
    <!-- Modal -->
    <div class="modal fade" id="ActivityModal" data-target="#ActivityModal" tabindex="-1" role="dialog" aria-labelledby="ActivityModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="ActivityModalLabel">{{modalData.Title}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ul class="list-group list-group-flush" style="max-width: 600px;">
                        <li class="list-group-item">{{modalData.Price}}</li>
                        <li class="list-group-item">{{modalData.Description}}</li>
                    </ul>
                    {{modalData.Details}}
                    <div class="card bg-light mb-3">
                        <div class="card-header">Primaryヘッダ</div>
                        <div class="card-body">
                            <p class="card-text">カードのタイトルに基づいてカードの内容の大部分を占める簡単なサンプルテキスト。</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
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
    }
}
</script>

<style scoped>

</style>
