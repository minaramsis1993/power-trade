<template>
  <div class="single-product">
    <div class="container" v-if="selectedProduct">
      <div class="row my-4">
        <div class="col-lg-4 col-12">
          <div class="img-wrapper">
            <img
              :src="selectedProduct.image"
              :alt="`Product-${selectedProduct.id}`"
            />
          </div>
        </div>
        <div class="col-lg-8 col-12">
          <h1 class="title">{{ selectedProduct.name }}</h1>
          <div class="price">Price: {{ selectedProduct.price }} EGP</div>
          <p class="description">
            {{ selectedProduct.longDescription }}
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import { products } from "../data/mock";

export default {
  components: { Footer },
  data() {
    return {
      selectedProduct: null,
    };
  },
  created() {
    this.selectedProduct = products.find(
      (prod) => prod.id == this.$route.params.id
    );
  },
};
</script>

<style scoped>
.img-wrapper img {
  width: 100%;
}
</style>