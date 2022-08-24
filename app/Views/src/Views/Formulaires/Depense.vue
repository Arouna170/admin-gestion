<template>
    <div class="page-content">
        <div class="container-fluid">
            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-flex align-items-center justify-content-between">
                        <h4 class="mb-0 font-size-18">Dépenses</h4>   
                    </div>
                </div>
            </div>     
            <!-- end page title -->
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Enregistrement d'une dépense</h4><br>
                            <p class="card-subtitle mb-4">Veuillez entrer les informations du client dans les champs respectifs...</p><br>
                            <form class="needs-validation" novalidate>
                                <div class="form-row">
                                    <div class="col-md-4 mb-3">
                                        <label for="validationCustom01">Date</label>
                                        <input type="text" class="form-control" id="validationCustom01" placeholder="Date" value="" required>
                                    </div><br>
                                    <div class="col-md-4 mb-3">
                                        <label for="validationCustom02">Bénéficiaire</label>
                                        <input type="text" class="form-control" id="validationCustom02" placeholder="Bénéficiaire" value="" required>
                                    </div><br>
                                    <div class="col-md-4 mb-3">
                                        <label for="validationCustom02">Montant</label>
                                        <input type="text" class="form-control" id="validationCustom02" placeholder="Montant" value="" required>
                                    </div><br>
                                </div>
                                <div class="form-row">
                                    <div class="col-lg-12 mb-3">
                                        <label for="validationCustom03">Dépense</label>
                                        <input type="text" class="form-control" id="validationCustom03" placeholder="Entrer le motif de la dépense" required>
                                    </div><br>
                                </div>
                                <button class="btn btn-primary waves-effect waves-light" type="submit">Valider</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Depense',
}
</script>