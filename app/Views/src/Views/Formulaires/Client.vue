<template>
    <div class="page-content">
        <div class="container-fluid">
            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-flex align-items-center justify-content-between">
                        <h4 class="mb-0 font-size-18">Clients</h4>   
                    </div>
                </div>
            </div>     
            <!-- end page title -->
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Enregistrement du Client</h4><br>
                            <p class="card-subtitle mb-4">Veuillez entrer les informations du client dans les champs respectifs...</p><br>
                            <form class="needs-validation" novalidate>
                                <div class="form-row">
                                    <div class="col-md-4 mb-3">
                                        <label for="validationCustom01">Nom</label>
                                        <input type="text" class="form-control" id="validationCustom01" placeholder="Nom" value="" required>
                                    </div><br>
                                    <div class="col-md-4 mb-3">
                                        <label for="validationCustom02">Prénoms</label>
                                        <input type="text" class="form-control" id="validationCustom02" placeholder="Prénoms" value="" required>
                                    </div><br>
                                    <div class="col-md-4 mb-3">
                                        <label for="validationCustomUsername">Email</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="inputGroupPrepend">@</span>
                                            </div>
                                            <input type="text" class="form-control" id="validationCustomUsername" placeholder="Email" aria-describedby="inputGroupPrepend" required>
                                        </div>
                                    </div><br>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6 mb-3">
                                        <label for="validationCustom03">Adresse</label>
                                        <input type="text" class="form-control" id="validationCustom03" placeholder="Adresse" required>
                                    </div><br>
                                    <div class="col-md-6 mb-3">
                                        <label for="validationCustom04">Contact</label>
                                        <input type="text" class="form-control" id="validationCustom04" placeholder="Contact" required>
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
    name:'Client'
}
</script>