<template>
  <div class="contact-us-page">
    <carousel />
    <div class="container content my-3">
      <div class="row">
        <div class="col-md-6 col-12">
          <div class="item">
            <div class="title mb-1">Domestic sales contact</div>
            <div class="email">E-Mail : sales@deminasseal.com</div>
            <div class="tel-fax">TEL / FAX : +44 0208799 7584</div>
          </div>
          <div class="item my-2">
            <div class="title mb-1">International sales contact</div>
            <div class="email">E-Mail : sales@deminasseal.com</div>
            <div class="tel-fax">TEL / FAX : +44 0208799 7584</div>
          </div>
          <div class="item my-2">
            <div class="title mb-1">Technical Department</div>
            <div class="email">E-Mail : technical@deminasseal.com</div>
            <div class="tel-fax">TEL / FAX : +44 0208799 7584</div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <img
            src="https://deminasseal.com/images/contact.jpg"
            alt="Contact us"
          />
        </div>
      </div>
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

.item .title {
  color: #44ccf6;
  font-size: 1.3rem;
  font-weight: bold;
}

img {
  border: 2rem solid;
  width: 100%;
}
</style>