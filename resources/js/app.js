import './bootstrap'

import { createApp } from 'vue'
import router from './router'

import App from './components/App.vue'

import Loader from './components/Loader.vue'

// sweetalerts
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// moment
import moment from 'moment'

const app = createApp(App).component('Loader', Loader).use(router).use(VueSweetalert2)

// global filters
app.config.globalProperties.$filters = {
    datetime(date) {
        return moment.utc(date).utcOffset(3).format('DD.MM.YYYY H:mm')
    },
    date(date) {
        return moment.utc(date).utcOffset(3).format('DD.MM.YYYY')
    },
}

app.mount('#app')