<template>
    <tr>
              <td>
                  {{ product.name }}
              </td>
              <td>
                  <img :src="product.imgUrl" height="100" width="100" alt="">
              </td>
              <td>
                  <button @click="removeFromCart()" class="remove">-</button>
              </td>
              <td>
                  {{ product.quantity }}
              </td>
              <td>
                <button @click="addToCart()" class="add">+</button>
              </td>
              <td>
                  {{ item_cost.toFixed(2) }}
              </td>
    </tr>
</template>

<script>
export default {
    name: 'CardItemCard',
    props: ['product'],
    computed: {
        item_cost() {
            return this.product.price * this.product.quantity
        }
    },
    methods: {
        addToCart() {
            this.$store.commit('addToCart', this.product)
        },
        removeFromCart() {
            this.$store.commit('removeFromCart', this.product)
        }

    }
}
</script>

<style lang="scss">
    .cart-item-card {
        width: 90%;
        margin: 5%;
        background-color: white;
        box-shadow: 0 0 4px gray;
        border-radius: 5px;
        padding: 10px;
        text-align: left;

        .header {
            display: flex;
            justify-content: space-around;
        }
    }
</style>