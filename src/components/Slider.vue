<template>
  <div class="saritasa-thumb-slider">
    <carousel ref="mainCarousel" :perPage="1" :paginationEnabled="false">
      <slide v-for="(slide, index) in slides" :key="index">
        <h2>{{ slide.title}} - {{index}}</h2>
        <img style="max-width: 100%" :src="slide.image">
      </slide>
    </carousel>
    <carousel class="thumb-carousel" :style="thumbCarouselStyle" ref="thumbCarousel" :perPage="slides.length">
      <slide v-for="(slide, index) in slides" :key="index">
        <img @click="goToPage(index)" :style="thumbStyle" :src="slide.image">
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Slider',
  components: {
    Carousel,
    Slide
  },
  data () {
    let slides = [
      {title: 'Title 1', image: require('../assets/slider/slide1.jpg')},
      {title: 'Title 2', image: require('../assets/slider/slide2.jpg')},
      {title: 'Title 3', image: require('../assets/slider/slide3.jpg')},
      {title: 'Title 4', image: require('../assets/slider/slide4.jpg')}
    ]
    return {
      slides: slides,
      thumbCarouselStyle: {
        maxWidth: slides.length * 120 + 'px',
        margin: 'auto'
      },
      thumbStyle: {
        maxWidth: '100px',
        margin: '10px 10px',
        cursor: 'pointer'
      }
    }
  },
  methods: {
    goToPage (direction) {
      this.$refs.mainCarousel.goToPage(direction)
    }
  },
  mounted () {
    console.log(this)
    console.log(this.$refs.mainCarousel)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.thumb-carousel img {
  transition: all linear 0.2s;
}
.thumb-carousel img:hover {
  opacity: 0.8;
  transform: scale(1.1);
}
</style>
