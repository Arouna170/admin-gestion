<template>
<div class="page-content">
    <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0 font-size-18">{{$route.params.service}}</h4>
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
                            <label style="margin-bottom: 30px;" for="enterpass">Quantité</label>
                            <input style="margin-bottom: 30px;" type="number" class="form-control form-control-user" id="enterpass" placeholder="Entrer le Nom">
                            <label style="margin-bottom: 30px;" for="enterpass">Prix</label>
                            <input style="margin-bottom: 40px;" type="number" class="form-control form-control-user" id="enterpass" placeholder="Entrer le prix">
                            <a href="#" class="btn btn-success btn-block waves-effect waves-light">Valider</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Service'
}
</script>
