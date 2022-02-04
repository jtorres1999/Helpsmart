<template>
    <b-row class="mt-4">
      <b-col cols="12" md="12" class="mb-2 ">
        <b-carousel
          :interval="6000"
          controls
          indicators
          
          img-width="100%"
          img-height="500"
          style=""
        >
          <!-- Slides with image only -->
          <b-carousel-slide>
            <template #img>
              <iframe width="100%" height="500" src="https://www.youtube.com/embed/bcHjOZQpFY4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
               <iframe width="100%" height="500" src="https://www.youtube.com/embed/ZAGlxioad5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </template>
          </b-carousel-slide>
        </b-carousel>
        </b-col
      >
    </b-row>
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
.card{
  width: 100%;
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
