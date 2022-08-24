import Vue from 'vue';
import router from './router'
import App from './Views/App.vue'

import '../../../public/css/bootstrap.min.css'
import '../../../public/css/style.css'
//import '../../../public/css/theme.min.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAddressCard, faListAlt,faUser,faFileAlt} from '@fortawesome/free-regular-svg-icons'
import { faSignOutAlt, faThLarge, faFileInvoice, faLock} from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faAddressCard,faListAlt,faSignOutAlt,faUser,faThLarge,faFileAlt,faFileInvoice,faLock)
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


import { VuejsDatatableFactory } from 'vuejs-datatable';


    
Vue.use( VuejsDatatableFactory );

new Vue({
    el: '#app',
    router: router,
    components: { App }
});