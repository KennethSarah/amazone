<template>

        <Carousel :autoplay="2000" :wrap-around="true" class="sticky" >
        
          <Slide v-for="slide in 1" :key="slide" class="z-0">
      
            <div class="carousel__item z-0">
              <img src="/public/Hero/slide-1.jpg" alt="">
            </div>
            
          </Slide>
          <Slide v-for="slide in 1" :key="slide">
            <div class="carousel__item z-0">
              <img src="/public/Hero/slide-2.jpg" alt="">
            </div>
          </Slide>
          <Slide v-for="slide in 1" :key="slide">
            <div class="carousel__item z-0">
              <img src="/public/Hero/slide-3.jpg" alt="">
            </div>
          </Slide>
          <Slide v-for="slide in 1" :key="slide">
            <div class="carousel__item z-0">
              <img src="/public/Hero/slide-4.jpg" alt="">
            </div>
          </Slide>
          <Slide v-for="slide in 1" :key="slide">
            <div class="carousel__item z-0">
              <img src="/public/Hero/slide-5.jpg" alt="">
            </div>
          </Slide>
          <Slide v-for="slide in 1" :key="slide">
            <div class="carousel__item z-0">
              <img src="/public/Hero/slide-6.jpg" alt="">
            </div>
          </Slide>
      
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
        <gallery/>
      </template>
      
      <script>
      import { defineComponent } from 'vue'
      import { Carousel, Pagination, Slide } from 'vue3-carousel'
      import Gallery from './Gallery.vue'
      import 'vue3-carousel/dist/carousel.css'
      
      
      export default defineComponent({
        name: 'Autoplay',
        components: {
          Carousel,
          Gallery,
          Slide,
          Pagination
          
        },
      })
      </script>
      