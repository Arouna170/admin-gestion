<template>
<div class="col-sm-4">
    <div>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">N° Facture : TLS-120</h5>
                <div class="mb-3">
                    <span class="card-text mr-3 h6">Client : DADY Ariane</span>
                    <span class="card-text ml-3 h4">Total : 500000 FCFA</span>
                </div>
                
                <button type="button" @click="InvoiceDetail()" class="btn btn-primary">Voir la facture</button>
            </div>
        </div>
    </div> <!-- end card-body-->
</div> <!-- end card-->
</template>

<script>
export default {
    name: 'Invoice',
    methods: {
        InvoiceDetail(){
            this.$router.push('/factures/tls-120')
        }
    }
}
</script>
