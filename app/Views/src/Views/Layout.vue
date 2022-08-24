<template>
    <div>
        <div id="layout-wrapper">
            <HeaderVue />
            <SidebarVue />
        </div>
        <div class="main-content">
            <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        Copyright 2022 ©
                    </div>
                    <div class="col-sm-6">
                        <div class="text-sm-right d-none d-sm-block">
                            TLS Studio Gestion
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import HeaderVue from '../Components/Header.vue';
import SidebarVue from '../Components/Sidebar.vue';

export default {
    name:'Layout',
    components:{ HeaderVue , SidebarVue},
    data: {
        show: true
    }
}
</script>

<style scoped>
    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-to{
        transition: all 2s ease;
    }
    .slide-fade-enter-active {
    transition: all .8s ease;
    }
    .slide-fade-leave-active {
        /*transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
        transition: all .8s ease-in;
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }
</style>