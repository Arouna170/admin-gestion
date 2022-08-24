<template>
<div class="page-content">
    <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0 font-size-18">Ajouter une nouvelle catégorie de service</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <div class="p-5">
                    <form>
                        <div class="form-group">
                            <label style="margin-bottom: 40px;" for="enterpass">Veuillez entrer le nom du service</label>
                            <input style="margin-bottom: 40px;" type="password" class="form-control form-control-user" id="enterpass" placeholder="">
                        </div>
                        <a href="#" class="btn btn-success btn-block waves-effect waves-light">Valider</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'category'
}
</script>