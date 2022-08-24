<template>
<div class="page-content">
    <div class="container-fluid">
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box d-flex align-items-center justify-content-between">
                    <h4 class="mb-0 font-size-18">Tous les catégories de services multimédia</h4>
                    <div class="row">
                        <a href="enregistrement-service.html">
                            <div class="menu-title">+Créer une nouvelle catégorie</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- end page title -->
        <div class="row">
            <Category />
            <Category />
            <Category />
            <Category />
        </div>
    </div> <!-- container-fluid -->
</div>
</template>

<script>
import Category from '../Components/Category.vue';

export default {
    name: 'Categories',
    components: {
        Category
    }
}
</script>
