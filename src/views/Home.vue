<template>
  <div class="home">
    <carousel />
    <div class="container py-2 bg-dark text-light">
      <div class="departments">
        <div class="dep">
          <h2 class="title">Domestic sales</h2>
          <div class="contact-txt">Contact</div>
          <div class="email">E-Mail : sales@deminasseal.com</div>
          <div class="tel-fax">TEL / FAX : +44 0208799 7584</div>
        </div>
        <div class="dep">
          <h2 class="title">International sales</h2>
          <div class="contact-txt">Contact</div>
          <div class="email">E-Mail : sales@deminasseal.com</div>
          <div class="tel-fax">TEL / FAX : +44 0208799 7584</div>
        </div>
        <div class="dep">
          <h2 class="title">Technical Department</h2>
          <div class="contact-txt">Contact</div>
          <div class="email">E-Mail : technical@deminasseal.com</div>
          <div class="tel-fax">TEL / FAX : +44 0208799 7584</div>
        </div>
      </div>
    </div>
    <div class="intro container my-2">
      <div class="row">
        <div class="col-md-6 col-12">
          <h2>Welcome to our Company</h2>
          <p>
            We design, manufacture and supply a wide range of essential sealing
            and insulation components to many industries where equipment failure
            is not an option. Products include cut gaskets, packings, sheet
            jointing materials, heat insulation material , expansion joint and
            sight glass , all vital to a modern industrial society.<br />
            We ensure that white goods manufacturers, petrochemical and chemical
            plants, power stations, cement industries , the automotive industry,
            pipeline & boiler manufacturers and other key industries function
            effectively by supplying only the best materials available on the
            market. Our success is due to continually meeting our customers’
            expectations of high performance. The company is committed to
            offering the highest technology, the “best” service and the “best”
            value. This is our corporate quality policy.<br />
            Our commitment to quality has always been directly linked to the
            customers, who have consistently been the driving force behind all
            our strategic planning and achievement. Our objective continues to
            be the identification of the customers’ requirements and the
            satisfactory fulfillment of those requirements within acceptable
            quality standards.<br />
            Customer satisfaction is paramount. We aim for total quality
            performance with each and every order.<br />
            We believe our prices will be generally competitive, but due
            consideration is always given to providing the most suitable
            material for the particular job. Material performance,
            dependability, available alternatives, technical appraisal and
            production capability are all areas considered to when assessing
            costs and providing the best possible price for the customer.
          </p>
        </div>
        <div class="col-md-6 col-12 products-grid-wrapper">
          <div class="products-grid">
            <div class="grid-item">
              <div class="img-wrapper">
                <img src="https://deminasseal.com/images/box1.jpg" alt="box1" />
              </div>
              <div class="prod-title">Braided Packing</div>
            </div>
            <div class="grid-item">
              <div class="img-wrapper">
                <img src="https://deminasseal.com/images/box2.jpg" alt="box1" />
              </div>
              <div class="prod-title">Expansion Joint</div>
            </div>
            <div class="grid-item">
              <div class="img-wrapper">
                <img src="https://deminasseal.com/images/box3.jpg" alt="box1" />
              </div>
              <div class="prod-title">Gasket Heat Exchanger</div>
            </div>
            <div class="grid-item">
              <div class="img-wrapper">
                <img src="https://deminasseal.com/images/box4.jpg" alt="box1" />
              </div>
              <div class="prod-title">Spiral Wound Gasket</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Carousel from "../components/carousel.vue";
import Footer from "../components/footer.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Footer,
  },
};
</script>

<style scoped>
.departments {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding-bottom: 1rem;
}

.departments .dep {
  border-right: 1px solid #fff;
}

.departments .dep h2.title {
  font-size: 1.35rem;
  margin-top: 0.6rem;
}

.departments .dep .contact-txt {
  color: #06a2d3;
  font-weight: bold;
}

.departments .dep:last-child {
  border-right: none;
}

.intro h2 {
  color: #06a2d3;
  font-size: 1.5rem;
  margin-top: 0.6rem;
}

.products-grid-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.products-grid .grid-item {
  width: 240px;
  height: 230px;
  background: #e9e9e9;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.products-grid .grid-item .prod-title {
  color: #06a2d3;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.7rem;
  justify-self: flex-start;
}

@media (max-width: 768px) {
  .departments {
    display: block;
  }

  .departments .dep {
    border-right: none;
    margin-top: 1rem;
  }

  .departments .dep h2.title {
    font-size: 1.15rem;
    margin: 0.1rem 0;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
