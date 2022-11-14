<template>
    <div class="d-flex justify-content-between align-items-center w-100 flex-wrap py-4">
        <h1 class="h4 m-0">Магазины</h1>
        <button class="btn btn-secondary" type="button">Добавить магазин</button>
    </div>

    <div class="card border-0 shadow mb-4">
        <div class="card-body">
            <loader v-if="views.loading"></loader>

            <div v-if="!views.loading" class="table-responsive">
                <table class="table table-centered table-nowrap mb-0 rounded">
                    <thead class="thead-light">
                        <tr>
                        <th class="border-0 rounded-start">#</th>
                        <th class="border-0">Домен</th>
                        <th class="border-0">Примечание</th>
                        <th class="border-0">Подключенные прайсы</th>
                        <th class="border-0 rounded-end"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(shop, index) in shops">
                            <td class="align-middle">
                                {{ index + 1 }}
                            </td>
                            <td class="align-middle">
                                <strong>{{ shop.domain }}</strong>
                            </td>
                            <td class="align-middle">
                                {{ shop.description }}
                            </td>
                            <td class="align-middle">
                                <template v-if="shop.prices">
                                    {{ shop.prices }}
                                </template>
                            </td>
                            <td class="align-middle">
                                <button class="btn btn-outline-info" type="button">Детали</button>
                            </td>
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
            shops: [],

            views: {
                loading: true,
            }
        }
    },
    created() {
        this.loadShops()
    },
    methods: {
        loadShops() {
            axios.get('/api/shops')
            .then(response => {
                this.shops = response.data

                this.views.loading = false
            })
        },
    },
}
</script>