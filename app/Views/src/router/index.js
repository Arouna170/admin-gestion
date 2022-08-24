import Vue from 'vue';
import VueRouter from 'vue-router';
    
Vue.use(VueRouter);

import Login from '../Views/Login.vue';
import Layout from '../Views/Layout.vue'
import Services from '../Views/Services.vue'
import Categories from '../Views/Categories.vue'
import Dashboard from '../Views/Dashboard.vue'
import Invoices from '../Views/Invoices.vue'
import Invoice from '../Views/Formulaires/InvoiceDetail.vue'
import Depense from '../Views/Formulaires/Depense.vue'
import Clients from '../Views/Clients.vue'
import Depenses from '../Views/depenses.vue'
import Utilisateurs from '../Views/utilisateurs.vue'
import Client from '../Views/Formulaires/Client.vue'
import FormulaireService from '../Views/Formulaires/Service.vue'
import Roles from '../Views/Roles.vue'

const routes = [
    {
        path:'*',
    },
    { path: '/login', name:'Login', component: Login },
    {
        path: '/', 
        name:'Layout', 
        component: Layout,
        children:[
            { path: '', redirect: '/accueil'},
            {
                path: '/accueil',
                name: 'Dashboard',
                component: Dashboard,
            },
            {
                path: 'clients',
                name: 'Clients',
                component: Clients,
            },
            {
                path: 'clients/ajouter',
                name: 'Client',
                component: Client,
            },
            {
                path: 'depenses/ajouter',
                name: 'DepenseFormulaire',
                component: Depense,
            },
            {
                path: 'depenses',
                name: 'Depenses',
                component: Depenses
            },
            {
                path: 'utilisateurs',
                name: 'Utilisateurs',
                component: Utilisateurs
            },
            {
                path: 'factures',
                name: 'Factures',
                component: Invoices
            },
            {
                path: 'factures/:invoice',
                name: 'Factures',
                component: Invoice
            },
            {
                path: 'services',
                name: 'Services',
                component: Services
            },
            {
                path: 'roles',
                name: 'Roles',
                component: Roles
            },
            {
                path: 'categories',
                name: 'Categories',
                component: Categories
            },
            {
                path: 'categories/:category',
                name: 'Category',
                component: Services
            },
            {
                path: 'categories/:category/services/:service/formulaire',
                name: 'Service_formulaire',
                component: FormulaireService
            },
        ]
    },
    
  ]

const router = new VueRouter({
    mode: 'history',
    routes 
  })

export default router
  