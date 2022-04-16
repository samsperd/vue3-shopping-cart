<template>
    <div class="cartSpace">
        <h1>Your Cart</h1>
        
        <cart-item-card
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
        <cart-summary-payment-card/>
    </div>
</template>

<script>
import CartItemCard from "@/components/cart/CartItemCard.vue"
import CartSummaryPaymentCard from "@/components/cart/CartSummaryPaymentCard.vue"

export default {
    name: 'Cart',
    components: {
        CartItemCard,
        CartSummaryPaymentCard
    },
    computed: {
        products() {
            return this.$store.getters.cartItems
        }
    }
}
</script>

<style lang="scss">
    .cartSpace {
        padding-bottom: 50px;
    }
</style>