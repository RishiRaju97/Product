<template>
    <div class="template-wrapper">
        <div class="product">
            <div class="product-image">
                <img :src='selectedProduct.thumbnail'>
            </div>
            <div class="product-details">
                <p>Brand: {{ selectedProduct.brand }}</p>
                <p>Description: {{ selectedProduct.description }}</p>
                <p>Price: {{ selectedProduct.price }}</p>
            </div>
        </div>

        <button @click="router.push({name: 'product'})">Go Back</button>
    </div>
</template>

<script>
export default {
    name: 'productDetails'
}
</script>

<script setup>
import { computed } from 'vue';
import { productsStore } from '@/stores/products.js'
import { useRoute, useRouter } from 'vue-router';

const store = productsStore();
const router = useRouter()
const route = useRoute();

const selectedProduct = computed(() => {
    return store.products.find((item) => item.id === Number(route.params.id))
})
</script>

<style scoped>
.product {
    display: flex;
    margin-top: 50px;
}

.product-image {
    margin-right: 20px;
}

.template-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}

button {
    cursor: pointer;
    height: 3rem;
    width: 10rem;
    border: none;
    border-radius: 50px;
    background-color: teal;
    color: whitesmoke;
}

button:hover {
    background-color: black;
    transition: 0.5s;
}
</style>