<template>
  <div class="card">
      <div class="card-image-box">
          <img class="card-image" :src="product.imgUrl" alt="Item Image" srcset="">
      </div>
      
      <h3>{{ product.name }}
            <sup class="badge" v-if="cartQuantity(product)">
                {{ cartQuantity(product) }}
            </sup>

      </h3>

      <h5 class="price">Price: ${{ product.price.toFixed(2) }}</h5>
      <p class="description"> Description: {{ description }} </p>
      <p class="text-muted">{{ product.category }}</p>
      <button @click="$emit('view-product', product)" class="view-product-button">View Product</button>
  </div>
</template>

<script>
export default {
    name: 'ProductSummaryCard',
    props: ['product'],
    computed: {
        description() {
            return this.product.description.substring(0, 150)
        }
    },
    methods: {
        cartQuantity(product) {
            return this.$store.getters.productQuantity(product)
        }
    }
}
</script>

<style lang="scss">
    .card {
        width: 80%;
        margin: 10%;
        padding: 10px;
        border-radius: 5px;
        background-color: white;
        box-shadow: 0 0 5px gray;

        .card-image-box {
            justify-content: center;

            .card-image {
                width: 100px;
                height: 110px;
            }
        }

        h5.price {
            color: gray;
        }
        p.description {
            font-size: 0.85rem;
        }
        p.text-muted {
            color: gray;
        }
    }
    button.view-product-button {
        padding: 10px;
        background-color: rgb(92, 209, 108);
        border: none;
        color: white;
        font-weight: bold;
        font-size: 1.15rem;
        border-radius: 5px;
        cursor: pointer;
    }

    @media (min-width: 500px) {
        .card {
            width: 350px;
            margin: 10px;
        }
    }
</style>