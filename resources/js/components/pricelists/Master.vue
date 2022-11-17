<template>
    <div class="d-flex justify-content-between align-items-center w-100 flex-wrap py-4">
        <h1 v-if="$route.params.id" class="h4 m-0">{{ pricelist.name }}</h1>
        <h1 v-else class="h4 m-0">Новый прайс-лист</h1>
    </div>

    <loader v-if="views.loading"></loader>

    <div v-if="!views.loading" class="card border-0 shadow mb-4">
        <div class="card-body">
            <div class="mb-4">
                <label>Название</label>
                <input v-model="name" type="text" class="form-control" placeholder="">
            </div>
            <div class="mb-3">
                <label class="form-label">Файл прайс-листа (XLS)</label>
                <input @change="uploadFile" ref="file" class="form-control" type="file" id="formFile">
            </div>

            <button @click="save()" :disabled="!views.saveButton" class="btn btn-secondary mt-2">Загрузить</button>
        </div>
    </div>

    <div v-if="!views.loading && pricelist.products && pricelist.products.length" class="card border-0 shadow mb-4">
        <div class="card-body">
            <div class="pricelist">
                <table class="table table-centered table-nowrap mb-0 rounded">
                    <thead class="thead-light">
                        <tr>
                            <th class="border-0 rounded-start" style="width: 5%">Производитель</th>
                            <th class="border-0" style="width: 5%">Артикул</th>
                            <th class="border-0" style="width: 80%">Наименование</th>
                            <th class="border-0" style="width: 5%">Цена</th>
                            <th class="border-0 rounded-end" style="width: 5%">Ост</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in pricelist.products">
                            <td>{{ product.manufacturer }}</td>
                            <td>{{ product.artnumber }}</td>
                            <td>{{ product.name }}</td>
                            <td>{{ product.price }}</td>
                            <td>{{ product.balance }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pricelist: {},

            name: '',
            file: '',

            views: {
                loading: true,
                saveButton: true,
            }
        }
    },
    created() {
        if(this.$route.params.id) {
            this.loadPricelist()
        } else {
            this.views.loading = false
        }
    },
    methods: {
        loadPricelist() {
            axios.get(`/api/pricelist/${this.$route.params.id}`)
            .then(response => {
                this.pricelist = response.data

                this.name = response.data.name

                this.views.loading = false
            })
        },
        uploadFile() {
            this.file = this.$refs.file.files[0]
        },
        save() {
            if(!this.name) {
                return this.$swal({
                    text: 'Укажите название',
                    icon: 'error',
                })
            }
            if(!this.file) {
                return this.$swal({
                    text: 'Загрузите файл',
                    icon: 'error',
                })
            }

            this.views.saveButton = false

            const formData = new FormData()
            formData.append('file', this.file)
            formData.append('name', this.name)
            const headers = { 'Content-Type': 'multipart/form-data' }

            if(this.$route.params.id) {
                axios.put(`/api/pricelist/${this.$route.params.id}`, formData, { headers })
                .then(response => {
                    this.$router.push({name: 'Pricelists'})
                })
                .catch(error => {
                    this.$swal({
                        text: 'Ошибка',
                        icon: 'error',
                    })
                })
            }

            if(!this.$route.params.id) {
                axios.post(`/api/pricelists`, formData, { headers })
                .then(response => {
                    this.$router.push({name: 'Pricelists'})
                })
                .catch(error => {
                    this.$swal({
                        text: 'Ошибка',
                        icon: 'error',
                    })
                })
            }
        }
    },
}
</script>