<template>
    <div>
    <Head>
        <title>Nuxt miaomiao | {{ product.title }}</title>
        <Meta name="description" :content="product.description" />
    </Head>

        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const url = 'https://fakestoreapi.com/products/' + id

    //fetch the product
    const { data: product } = await useFetch(url)

    if(!product.value){
        throw createError({ statusCode: 404,statusMessage: 'Product not found' })
    }
    definePageMeta({
        layout: 'products'
    })
</script>