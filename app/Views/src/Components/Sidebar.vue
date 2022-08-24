<template>
<div class="vertical-menu">
    <div data-simplebar class="h-100">
        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title">Menu</li>
                <li>
                    <router-link to="/accueil" class="waves-effect"><font-awesome-icon icon="far fa-list-alt" class="mr-2"/><span>Accueil</span></router-link>
                </li><br>
                <li>
                    <router-link to="/clients" class="waves-effect"><font-awesome-icon icon="far fa-address-card" class="mr-2"/><span>Clients</span></router-link>
                </li><br>

                <li>
                    <router-link to="/categories" class="waves-effect"><font-awesome-icon icon="fas fa-th-large" class="mr-2"/><span>Catégories de services</span></router-link>
                </li><br>
                <li>
                    <router-link to="/services" class="waves-effect"><font-awesome-icon icon="fas fa-th-large" class="mr-2"/><span>Services</span></router-link>
                </li><br>
                <li>
                    <router-link to="/factures" class="waves-effect"><font-awesome-icon icon="fas fa-file-invoice" class="mr-2"/><span>Factures</span><span class="ml-2 badge badge-danger">4</span></router-link>
                </li><br>
                <li>
                    <router-link to="/depenses" class="waves-effect"><font-awesome-icon icon="far fa-file-alt" class="mr-2"/><span>Dépenses</span></router-link>
                </li><br>
                <li>
                    <router-link to="/roles" class="waves-effect"><font-awesome-icon icon="fas fa-lock" class="mr-2"/><span>Roles</span></router-link>
                </li><br>
                <li>
                    <router-link to="/utilisateurs" class="waves-effect"><font-awesome-icon icon="far fa-user" class="mr-2"/><span>Utilisateurs</span></router-link>
                </li><br>
            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>
</template>

<script>
export default {}
</script>

<style>
#sidebar-menu ul li a {
    color: #264268 !important;
}

.router-link-active {
    background-color: #919ED7;
}

.waves-effect svg{
    font-size: 1rem;
}

.router-link-active span, .router-link-active svg{
    font-size: 1rem;
    font-weight: 800;
    color: #384A7C;
}
</style>
