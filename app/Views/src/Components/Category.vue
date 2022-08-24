<template>
<div class="col-xl-4">
    <div @click="ServiceByCategory()">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title text-center">Category 1</h4><br>
            </div>
        </div>
    </div> <!-- end card-body-->
</div> <!-- end card-->
</template>

<script>
import router from '../router';

export default {
    name: 'Category',
    methods: {
        ServiceByCategory(){
            this.$router.push('categories/category1')
        }
    }
}
</script>
