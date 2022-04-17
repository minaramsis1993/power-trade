<template>
  <div class="products-page-wrapper">
    <div class="container">
      <div class="row my-3">
        <div class="col-lg-7 col-12">
          <router-link
            class="card my-3"
            v-for="product in products"
            :key="product.id"
            :to="`/products/${product.id}`"
          >
            <div class="card-body product">
              <div class="img-wrapper">
                <img :src="product.image" :alt="`product-${product.id}`" />
              </div>
              <div class="content">
                <h2 class="title">{{ product.name }}</h2>
                <div class="price">Price: {{ product.price }} EGP</div>
                <div class="short-desc">{{ product.shortDescription }}</div>
              </div>
            </div>
          </router-link>
          <button
            v-if="!noMoreProducts"
            class="see-more-btn"
            type="button"
            :disabled="loading"
            @click="seemoreClickHandler"
          >
            <span class="text">See more</span>
            <img
              width="25"
              v-if="loading"
              :src="svgs.loading"
              :alt="'loading'"
            />
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { products } from "../data/mock";
import Footer from "../components/footer.vue";

export default {
  components: { Footer },
  data() {
    return {
      products: [],
      loading: false,
      lengthEachTime: 3,
      counter: 0,
      noMoreProducts: false,
      svgs: {
        loading: require("@/assets/loading.svg"),
      },
    };
  },
  created() {
    this.products = products.slice(0, this.lengthEachTime);
    this.counter = this.lengthEachTime;

    if (this.products.length === 0) {
      this.noMoreProducts = true;
    }
  },
  methods: {
    seemoreClickHandler() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        const oldProductsLength = this.products.length;
        const newSlice = products.slice(
          this.counter,
          this.counter + this.lengthEachTime
        );
        this.products = [...this.products, ...newSlice];
        const newProductsLength = this.products.length;
        this.counter = newProductsLength;

        if (oldProductsLength === newProductsLength) {
          this.noMoreProducts = true;
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
.card {
  color: #000;
  text-decoration: none;
}

.product {
  display: flex;
  gap: 1rem;
}

.product .img-wrapper img {
  width: 10rem;
}

.product .title {
  font-size: 1.6rem;
}

button.see-more-btn {
  width: 100%;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: #fff;
  background-color: #7d935c;
}

button.see-more-btn:disabled {
  background-color: #6d7e52;
  cursor: not-allowed;
}
</style>