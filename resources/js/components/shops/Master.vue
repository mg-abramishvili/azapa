<template>
    <div class="d-flex justify-content-between align-items-center w-100 flex-wrap py-4">
        <h1 v-if="$route.params.uid" class="h4 m-0">{{ shop.domain }}</h1>
        <h1 v-else class="h4 m-0">Новый магазин</h1>
        <!-- <button class="btn btn-secondary" type="button">Добавить магазин</button> -->
    </div>

    <div class="alert alert-danger" role="alert">
        Для того, чтобы направить Ваш домен в систему Azapa, необходимо указать NS-сервера: ns1.azapa.ru, ns2.azapa.ru
    </div>
    
    <div class="card border-0 shadow mb-4">
        <div class="card-body">
            <loader v-if="views.loading"></loader>

            <div v-if="!views.loading">
                <div class="row">
                    <div class="col-12 col-lg-4">
                        <div class="mb-4">
                            <label>Домен</label>
                            <input v-if="$route.params.uid" v-model="shop.domain" type="text" class="form-control" placeholder="" disabled>
                            <input v-else v-model="domain" type="text" class="form-control" placeholder="">
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="mb-4">
                            <label>UID</label>
                            <input v-if="$route.params.uid" v-model="shop.uid" type="text" class="form-control" placeholder="" disabled>
                            <input v-else v-model="uid" type="text" class="form-control" placeholder="Будет сгенерирован автоматически" disabled>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="mb-4">
                            <label>Прайс-лист</label>
                            <select v-model="selected.pricelist" class="form-select">
                                <option v-for="pricelist in pricelists" :value="pricelist.id">{{ pricelist.name }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="mb-4">
                            <label>Примечание</label>
                            <input v-model="description" type="text" class="form-control" placeholder="">
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="mb-4">
                            <label>Телефон для сайта</label>
                            <input v-model="tel" type="text" class="form-control" placeholder="">
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class="mb-4">
                            <label>Адрес для сайта</label>
                            <input v-model="address" type="text" class="form-control" placeholder="">
                        </div>
                    </div>

                    <div class="mb-4">
                        <label>Главный заголовок</label>
                        <input v-model="main_title" type="text" class="form-control" placeholder="">
                    </div>

                    <div class="mb-4">
                        <label>Текст страницы "О компании"</label>
                        <ckeditor :editor="editor" v-model="about_text" :config="editorConfig"></ckeditor>
                    </div>

                    <div class="mb-4">
                        <label>Текст страницы "Оплата и доставка"</label>
                        <ckeditor :editor="editor" v-model="payment_delivery_text" :config="editorConfig"></ckeditor>
                    </div>

                    <div class="mb-4">
                        <label>Текст страницы "Контакты"</label>
                        <ckeditor :editor="editor" v-model="contacts_text" :config="editorConfig"></ckeditor>
                    </div>
                </div>

                <button @click="save()" :disabled="!views.saveButton" class="btn btn-secondary mt-2">Сохранить</button>
            </div>
        </div>
    </div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
    data() {
        return {
            shop: {},

            domain: '',
            uid: '',
            tel: '',
            address: '',
            description: '',
            main_title: '',
            about_text: '',
            payment_delivery_text: '',
            contacts_text: '',

            pricelists: [],

            selected: {
                pricelist: '',
            },

            views: {
                loading: true,
                saveButton: true,
            },

            editor: ClassicEditor,
            editorConfig: {
                toolbar: [ 'bold', 'italic', '|', 'bulletedList', 'numberedList', '|', 'insertTable', '|', 'undo', 'redo' ],
            },
        }
    },
    created() {
        this.loadPricelists()

        if(this.$route.params.uid) {
            this.loadShop()
        } else {
            this.views.loading = false
        }
    },
    methods: {
        loadPricelists() {
            axios.get(`/api/pricelists`)
            .then(response => {
                this.pricelists = response.data
            })
        },
        loadShop() {
            axios.get(`/api/shop/${this.$route.params.uid}`)
            .then(response => {
                this.shop = response.data

                this.selected.pricelist = response.data.pricelist_id
                this.tel = response.data.tel
                this.address = response.data.address
                this.description = response.data.description
                this.main_title = response.data.main_title
                this.about_text = response.data.about_text
                this.payment_delivery_text = response.data.payment_delivery_text
                this.contacts_text = response.data.contacts_text

                this.views.loading = false
            })
        },
        save() {
            if(!this.domain) {
                return this.$swal({
                    text: 'Укажите домен',
                    icon: 'error',
                })
            }
            if(!this.selected.pricelist) {
                return this.$swal({
                    text: 'Укажите прайс-лист',
                    icon: 'error',
                })
            }
            if(!this.description) {
                return this.$swal({
                    text: 'Укажите примечание',
                    icon: 'error',
                })
            }
            if(!this.tel) {
                return this.$swal({
                    text: 'Укажите телеофон',
                    icon: 'error',
                })
            }
            if(!this.address) {
                return this.$swal({
                    text: 'Укажите адрес',
                    icon: 'error',
                })
            }
            if(!this.main_title) {
                return this.$swal({
                    text: 'Укажите заголовок',
                    icon: 'error',
                })
            }
            if(!this.about_text) {
                return this.$swal({
                    text: 'Укажите текст о компании',
                    icon: 'error',
                })
            }
            if(!this.payment_delivery_text) {
                return this.$swal({
                    text: 'Укажите текст о доставке и оплате',
                    icon: 'error',
                })
            }
            if(!this.contacts_text) {
                return this.$swal({
                    text: 'Укажите текст с контактами',
                    icon: 'error',
                })
            }

            this.views.saveButton = false

            if(this.$route.params.uid) {
                axios.put(`/api/shop/${this.$route.params.uid}`, {
                    tel: this.tel,
                    pricelist: this.selected.pricelist,
                    address: this.address,
                    description: this.description,
                    main_title: this.main_title,
                    payment_delivery_text: this.payment_delivery_text,
                    about_text: this.about_text,
                    contacts_text: this.contacts_text,
                })
                .then(response => {
                    this.$router.push({name: 'Shops'})
                })
                .catch(error => {
                    this.$swal({
                        text: 'Ошибка',
                        icon: 'error',
                    })
                })
            }

            if(!this.$route.params.uid) {
                axios.post(`/api/shops`, {
                    tel: this.tel,
                    pricelist: this.selected.pricelist,
                    address: this.address,
                    description: this.description,
                    domain: this.domain,
                    main_title: this.main_title,
                    payment_delivery_text: this.payment_delivery_text,
                    about_text: this.about_text,
                    contacts_text: this.contacts_text,
                })
                .then(response => {
                    this.$router.push({name: 'Shops'})
                })
                .catch(error => {
                    // this.$swal({
                    //     text: 'Ошибка',
                    //     icon: 'error',
                    // })
                    this.$router.push({name: 'Shops'})
                })
            }
        }
    },
    components: {
        ckeditor: CKEditor.component,
    }
}
</script>