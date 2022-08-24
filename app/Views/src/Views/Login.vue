<template>
    <div class="bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex align-items-center min-vh-100">
                        <div class="w-100 d-block bg-white shadow-lg rounded my-5">
                            <div class="row">
                                <div class="col-lg-5 d-none d-lg-block bg-login rounded-left"></div>
                                <div class="col-lg-7">
                                    <div class="p-5">
                                        <h1 class="h5 mb-1">Bienvenue au TLS Studio</h1><br>
                                        <p class="text-muted mb-4">Veuillez entrez le nom d'utilisteur et le mot de passe!</p>
                                        <form class="user">
                                            <div class="form-group">
                                                <input type="email" class="form-control form-control-user" id="exampleInputEmail" placeholder="Utilisateur">
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Mot de Passe">
                                            </div>
                                            <button @click="connecter()" class="btn btn-success btn-block waves-effect waves-light">Connexion</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import router from '../router'

export default {
    name:'Login',
    methods:{
        connecter(){
            router.push('/')
        }
    }
}
</script>