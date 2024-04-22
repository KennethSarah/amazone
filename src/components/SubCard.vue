<!-- Gallery.vue -->
<template>
        <div class="gallery">
          <div class="slider">
            <div class="slides" ref="slides">
              <h1 class="text-black header">Best Sellers in Books for You</h1>
              <div v-for="(image, index) in images" :key="index" class="slide flex flex-nowrap gap-7 ">
                <img src="https://m.media-amazon.com/images/I/414vz-WNrUL._AC_SY200_.jpg" :alt="image.alt" class=" ">
                <img src="https://m.media-amazon.com/images/I/71LkhJev11L._AC_SY200_.jpg" :alt="image.alt" class=" ">
                <img src="https://m.media-amazon.com/images/I/61Z5k8t+j1L._AC_SY200_.jpg" :alt="image.alt" class=" ">
                <img src="https://m.media-amazon.com/images/I/61Z5k8t+j1L._AC_SY200_.jpg" :alt="image.alt" class=" ">
                <img src="https://m.media-amazon.com/images/I/41grWA3f9-L._AC_SY200_.jpg" :alt="image.alt" class=" ">
                <img src="https://m.media-amazon.com/images/I/61M2130f5EL._AC_SY200_.jpg" :alt="image.alt" class=" ">
                <img src="https://m.media-amazon.com/images/I/71Xmkj9WoNL._AC_SY200_.jpg" :alt="image.alt" class=" ">
                <img src="https://m.media-amazon.com/images/I/610K8zRHVqL._AC_SY200_.jpg" :alt="image.alt" class=" ">
                <img src="https://m.media-amazon.com/images/I/610K8zRHVqL._AC_SY200_.jpg" :alt="image.alt" class=" ">
                <img src="https://m.media-amazon.com/images/I/51NBNxbDUZL._AC_SY200_.jpg" :alt="image.alt" class=" ">
              </div>
            </div>
            <button @click="prevSlide" class="prev">&#10094;</button>
            <button @click="nextSlide" class="next">&#10095;</button>
          </div>
        </div>
      </template>
      
      <script>
      export default {
        data() {
          return {
            images: [
              { src: '/public/features/f1.jpg', alt: 'Image 1' },
              { src: '/public/features/f2.jpg', alt: 'Image 2' },
              { src: '/public/features/f3.jpg', alt: 'Image 3' },
              { src: '/public/features/f3.jpg', alt: 'Image 3' },
              { src: '/public/features/f3.jpg', alt: 'Image 3' },
              { src: '/public/features/f3.jpg', alt: 'Image 3' },
              { src: '/public/features/f3.jpg', alt: 'Image 3' },
              { src: '/public/features/f3.jpg', alt: 'Image 3' },
              { src: '/public/features/f3.jpg', alt: 'Image 3' },
              // Add more images as needed
            ],
            currentSlide: 0,
          };
        },
        methods: {
          nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.images.length;
            this.updateSlide();
          },
          prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
            this.updateSlide();
          },
          updateSlide() {
            const slides = this.$refs.slides;
            slides.style.transform = `translateX(-${this.currentSlide * 100}%)`;
          },
        },
      };
      </script>
      
      <style scoped>
      @import url('https://fonts.cdnfonts.com/css/amazon-ember');
      * {
          font-family: 'Amazon Ember', sans-serif;
      }
      .gallery {
        margin-top: 1%;
        margin-bottom: 1%;
        width: 100%;
        padding: 10px;
        background-color: white;
        overflow: hidden;
      }
      
      .header {
        position: absolute;
        margin-bottom: 10px;
       padding: 10px;
        bottom: 190px;
        font-family: inherit;
        font-size: 21px;
      
      }
      
      .slider {
        display: flex;
        position: relative;
      }
      
      .slides {
        display: flex;
        transition: transform 0.5s;
      }
      
      .slide {
        flex: 0 0 100%;
        margin-top: 40px;
      }
      
      button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(255, 255, 255, 0.5);
        border: none;
        color: black;
        font-size: 25px;
        cursor: pointer;
        padding: 20px;
      }
      
      .prev {
        left: 0;
      }
      
      .next {
        right: 0;
      }
      </style>
      