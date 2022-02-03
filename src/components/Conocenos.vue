<template>
  <div class="contenedor">
    <b-row class="">
      <b-col cols="12" md="6" class="mb-2 text-center">
        <img
          v-bind:src="require('../assets/idea.png')"
          alt="logo"
          class="inicio"
        />
        <h1 class="mt-1">Quienes somos?</h1>
      </b-col>
      <b-col cols="12" md="5" class="mb-2 ">
        <b-carousel
          :interval="6000"
          controls
          indicators
          
          img-width="95%"
          img-height="480"
          style=""
        >
          <!-- Slides with image only -->
          <b-carousel-slide>
            <template #img>
              <iframe width="550" height="365" src="https://www.youtube.com/embed/bcHjOZQpFY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
               <iframe width="550" height="365" src="https://www.youtube.com/embed/ZAGlxioad5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </template>
          </b-carousel-slide>
        </b-carousel>
        </b-col
      >
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
};
</script>

<style scoped>
.inicio {
  width: 40%;
  height: 65%;
}
@media only screen and (min-width: 993px) and (max-width: 1200px) {
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
}
@media only screen and (max-width: 767px) {
  iframe {
    width: 95%;
  }
  img {
    width: 100%;
  }
}
@media only screen and (max-width: 340px) {
  iframe {
    width: 98%;
  }
  img {
    width: 100%;
  }
}
</style>
