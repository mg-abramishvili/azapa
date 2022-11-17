<template>
    <div class="d-flex justify-content-between align-items-center w-100 flex-wrap py-4">
        <h1 class="h4 m-0">Прайс-листы</h1>
        <router-link :to="{name: 'PricelistMaster' }" class="btn btn-secondary">Добавить прайс-лист</router-link>
    </div>

    <div class="card border-0 shadow mb-4">
        <div class="card-body">
            <loader v-if="views.loading"></loader>

            <div v-if="!views.loading" class="table-responsive">
                <table class="table table-centered table-nowrap mb-0 rounded">
                    <thead class="thead-light">
                        <tr>
                        <th class="border-0 rounded-start">#</th>
                        <th class="border-0">Название</th>
                        <th class="border-0 rounded-end"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(pricelist, index) in pricelists">
                            <td class="align-middle">
                                {{ index + 1 }}
                            </td>
                            <td class="align-middle">
                                <strong>{{ pricelist.name }}</strong>
                            </td>
                            <td class="align-middle text-end">
                                <router-link :to="{name: 'PricelistMaster', params: {id: pricelist.id} }" class="btn btn-outline-info">Детали</router-link>
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
            pricelists: [],

            views: {
                loading: true,
            }
        }
    },
    created() {
        this.loadPricelists()
    },
    methods: {
        loadPricelists() {
            axios.get('/api/pricelists')
            .then(response => {
                this.pricelists = response.data

                this.views.loading = false
            })
        },
    },
}
</script>