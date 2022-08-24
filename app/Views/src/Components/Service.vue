<template>
<div class="col-xl-4">
    <div @click="Formulaire()">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title text-center">Service 1</h4><br>
            </div>
        </div>
    </div> <!-- end card-body-->
</div> <!-- end card-->
</template>

<script>
export default {
    name: 'Service',
    methods: {
        Formulaire(){
            this.$router.push( this.$route.params.category +'/services/service1s/formulaire' )
        }
    }
}
</script>
