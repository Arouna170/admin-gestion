<template>
<div class="page-content">
    <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0 font-size-18">Tous les factures d'aujourd'hui</h4>
                    <div class="row"><a href="enregistrement-service.html">
                            <div class="menu-title">+Créer</div>
                        </a></div>
                </div>
            </div>
        </div>
        <!-- end page title -->
        <div class="row">
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
        </div>
    </div> <!-- container-fluid -->
</div>
</template>

<script>
import Invoice from '../Components/Invoice.vue';

export default {
    name: 'Services',
    components: {
        Invoice
    }
}
</script>
