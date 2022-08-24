<template>
    <header id="page-topbar">
        <div class="navbar-header">
                <!-- LOGO -->
            <div class="navbar-brand-box d-flex align-items-left">
                <a href="index.html" class="logo">
                    <span>
                        <img src="image/tls-logo.png" alt="" height="50">
                    </span>
                </a>
            </div>
            <div class="d-flex align-items-center">
                <div class="dropdown d-inline-block ml-2">
                    <button type="button" class="btn header-item waves-effect waves-light" id="page-header-user-dropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <a href=""><img class="rounded-circle header-profile-user" src="image/img-avatar1.png" alt="Header Avatar"></a>
                        <span class="d-none d-sm-inline-block ml-1">Nom d'utilsateur</span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="page-header-user-dropdown">
                        <div class="d-flex align-items-center">
                            <font-awesome-icon icon="fas fa-sign-out-alt" /><span @click="Deconnecter()" class="dropdown-item cursor" href="#">Déconnexion</span>
                        </div>
                        
                    </div>
                </div>      
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name:'Header',
    methods: {
        Deconnecter(){
            this.$router.push('/login')      }
    }
}
</script>
<style>
.cursor{
    cursor: pointer;
}
</style>