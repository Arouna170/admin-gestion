<template>
<div class="page-content">
    <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0 font-size-18">TLS Studio -- Accueil</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->
        <div class="row">
            <div class="col-md-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="mb-4">
                            <h5 class="card-title mb-0">Solde</h5>
                        </div>
                        <div class="row d-flex align-items-center mb-4">
                            <div class="col-8">
                                <h2 class="d-flex align-items-center mb-0">
                                    1 000 000
                                </h2>
                            </div>
                        </div>

                        <div class="progress shadow-sm" style="height: 7px;">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 94%;"></div>
                        </div>
                    </div>
                </div>
            </div> <!-- end col-->
            <div class="col-md-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="mb-4">
                            <h5 class="card-title mb-0">Solde impayés</h5>
                        </div>
                        <div class="row d-flex align-items-center mb-4">
                            <div class="col-8">
                                <h2 class="d-flex align-items-center mb-0">
                                    439 050
                                </h2>
                            </div>
                        </div>

                        <div class="progress shadow-sm" style="height: 7px;">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 45%;"></div>
                        </div>
                    </div>
                </div>
            </div> <!-- end col-->

            <div class="col-md-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="mb-4">
                            <h5 class="card-title mb-0">Dépenses</h5>
                        </div>
                        <div class="row d-flex align-items-center mb-4">
                            <div class="col-8">
                                <h2 class="d-flex align-items-center mb-0">
                                    87950
                                </h2>
                            </div>
                        </div>
                        <div class="progress shadow-sm" style="height: 7px;">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 15%;"></div>
                        </div>
                    </div>
                </div>
            </div> <!-- end col-->

            <div class="col-md-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="mb-4">
                            <h5 class="card-title mb-0">Caisse</h5>
                        </div>
                        <div class="row d-flex align-items-center mb-4">
                            <div class="col-8">
                                <h2 class="d-flex align-items-center mb-0">
                                    517000
                                </h2>
                            </div>
                        </div>
                        <div class="progress shadow-sm" style="height: 7px;">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 65%;"></div>
                        </div>
                    </div>
                </div>
            </div> <!-- end col-->
        </div>
        <!-- end row-->
        <div class="row">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h4 class="card-title">Facture Impayées</h4>
                        <button type="button" @click="Invoices()" class="btn btn-link">Voir plus</button>
                    </div>
                        
                        <div class="table-responsive">
                            <table class="table table-centered table-striped table-nowrap">
                                <thead>
                                    <tr>
                                        <th>Clients</th>
                                        <th>Contacts</th>
                                        <th>Email</th>
                                        <th>Adresse</th>
                                        <th>Create Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="table-user">
                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Bryan J. Luellen</a>
                                        </td>
                                        <td>
                                            937-330-1634
                                        </td>
                                        <td>
                                            pauljfrnd@jourrapide.com
                                        </td>
                                        <td>
                                            New York
                                        </td>
                                        <td>
                                            07/07/2018
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="table-user">
                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Bryan J. Luellen</a>
                                        </td>
                                        <td>
                                            215-302-3376
                                        </td>
                                        <td>
                                            bryuellen@dayrep.com
                                        </td>
                                        <td>
                                            New York
                                        </td>
                                        <td>
                                            09/12/2018
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="table-user">
                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Kathryn S. Collier</a>
                                        </td>
                                        <td>
                                            828-216-2190
                                        </td>
                                        <td>
                                            collier@jourrapide.com
                                        </td>
                                        <td>
                                            Canada
                                        </td>
                                        <td>
                                            06/30/2018
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="table-user">
                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Timothy Kauper</a>
                                        </td>
                                        <td>
                                            (216) 75 612 706
                                        </td>
                                        <td>
                                            thykauper@rhyta.com
                                        </td>
                                        <td>
                                            Denmark
                                        </td>
                                        <td>
                                            09/08/2018
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div> <!-- end card-body-->
                </div> <!-- end card-->
            </div> <!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Dépenses</h4>
                        <div class="table-responsive">
                            <table class="table table-borderless table-hover table-centered table-nowrap mb-0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">11000</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">22/07/2022</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">Abonnement canal+</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">Helen Warren</h5>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">11000</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">22/07/2022</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">Abonnement canal+</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">Helen Warren</h5>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">11000</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">22/07/2022</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">Abonnement canal+</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">Helen Warren</h5>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">11000</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">22/07/2022</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">Abonnement canal+</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">Helen Warren</h5>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">11000</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">22/07/2022</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">Abonnement canal+</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">Helen Warren</h5>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">11000</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">22/07/2022</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">Abonnement canal+</h5>
                                            </a>
                                        </td>
                                        <td>
                                            <a href="">
                                                <h5 class="font-size-15 mb-1 font-weight-normal">Helen Warren</h5>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Dashboard',
    methods: {
        Invoices() {
            this.$router.push('/factures')
        }
    }
}
</script>
