<template>
    <div>
        <h2>Your Cart</h2>
        <div class="cartSpace">
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Image
                        </th>
                        <th>
                            Decrease
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>
                            Increase
                        </th>
                        <th>
                            Cost
                        </th>
                    </tr>

                </thead>
                <tbody>

                    <cart-item-card
                        v-for="product in products"
                        :key="product.id"
                        :product="product"
                    />
                </tbody>
            </table>
        </div>
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
        overflow-x: auto;
        font-family: sans-serif;
    }
        .table {
            min-width: 700px;
            width: 100%;
            text-align: center;

            th {
                background: #f0f0f0;
            }

        tr {
            background-color: #f8f8f8;
            border: 1px solid #ddd;
        }

        td {
            line-height: 1.2;
            text-align: center;
            padding: 0.2rem;
            max-width: 200px;

            button {
                width: 50px;
                border: none;
                padding: 10px;
                border-radius: 5px;
                margin: 0 5p 50px 5px;
                cursor: pointer;
            }
        }
    }
</style>