<template>
    <div class="products-list">
        <div class="product" v-for="product in store.products" :key="product.id" @click="goToProductPage(product.id)">
            <img :src="product.thumbnail">
            <h2>Brand: {{ product.brand }}</h2>
            <p>Description: {{ product.description }}</p>
            <p>Price: {{ product.price }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'productView'
}
</script>

<script setup>
import { onMounted } from 'vue';
import { productsStore } from '@/stores/products.js'
import { useRouter } from 'vue-router';

const store = productsStore()
const router = useRouter();

const goToProductPage = (id) => {
    router.push({ name: 'productDetails', params: { id } })
}

onMounted(async () => {
    await store.fetchProductFromDB()

})

</script>

<style>
.products-list {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.product {
    cursor: pointer;
    flex-basis: 20%;
    margin: 8px;
    padding: 10px;
    box-shadow: 0 0 14px 1px #e6e6e6;
}

.product img {
    width: 70%;
}
</style>

