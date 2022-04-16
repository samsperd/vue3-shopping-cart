<template>
  <div class="home">
    <product-description-drawer
      :product="product"
      :active="active.product_drawer"
      v-on:close-product-drawer="closeProductDrawer"
    />

    <div class="product-cards-container">
      <ProductSummaryCard
        v-for="product in items"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import items from '../data/items.js'
import ProductSummaryCard from "@/components/product/ProductSummaryCard.vue";
import ProductDescriptionDrawer from "@/components/product/ProductDescriptionDrawer.vue";

export default {
  name: 'HomeView',
  components: {
    ProductSummaryCard,
    ProductDescriptionDrawer,
  },
  data() {
    return {
      items: items,
      product: null,
      active: {
        product_drawer: false
      }
    }
  },
  methods: {
    viewProduct(product) {
      this.product = product
      this.active.product_drawer = true
    },
    closeProductDrawer() {
      this.active.product_drawer = false
    }
  }
}
</script>

<style lang="scss">
  .product-cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .home {
    padding-bottom: 50px;
  }
</style>