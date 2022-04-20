<template>
  <div class="cmp-wrapper container">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      fade
      background="#ababab"
      img-width="1024"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        img-width="1024"
        img-height="300"
        img-src="https://deminasseal.com/images/6.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        img-width="1024"
        img-height="300"
        img-src="https://deminasseal.com/images/4.jpg"
      >
      </b-carousel-slide>

      <b-carousel-slide
        img-width="1024"
        img-height="300"
        img-src="https://deminasseal.com/images/3.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      console.log(slide);
      this.sliding = true;
    },
    onSlideEnd(slide) {
      console.log(slide);
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
.container {
  padding-left: 0;
  padding-right: 0;
}
</style>