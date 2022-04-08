<template>
  <div class="about">
    <carousel />
    <div class="container content my-3">
      <h1>The DEMINAS LTD</h1>
      <p>
        Is the <strong>international market leader</strong> in the manufacture
        and supply of high quality, high value industrial spare parts products.
        <br />
        Based on sales and geographic reach, The DEMINAS LTD. Has become a
        global supplier of industrial gaskets, packing , expansion joint ,
        insulation materials .....etc.<br />

        DEMINAS global customer service network of owned manufacturing
        facilities, manufacturing licensees and distribution network ensure
        local demand is met quickly, with a combination of the highest product
        quality and customer service.
      </p>
    </div>
    <Footer />
  </div>
</template>
<script>
import carousel from "../components/carousel.vue";
import Footer from "../components/footer.vue";
export default {
  components: { carousel, Footer },
};
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
  color: #44ccf6;
}
</style>