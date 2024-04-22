<template>
        <Navbar/>
        <SubHeader/>
        <carousel/>
        <Movie/>
        <Card/>
        <SubCard/>
        <SubGallery/>
        
        <Signup/>
        <Footers/>
        </template>
        
        <script setup>
        import SubHeader  from "../components/SubHeader.vue";
        import Carousel from '../components/Carousel.vue';
        import Card from '../components/Card.vue';
        import SubCard from "../components/SubCard.vue";
        import Navbar from "../components/Navbar.vue";
        import Gallery from "../components/Gallery.vue";
        import SubGallery from "../components/SubGallery.vue";
        import Footers from "../components/Footers.vue";
        import Signup from "../components/Signup.vue";
        import Movie from "../components/Movie.vue";
        </script>
        
        <style>
            @import url('https://fonts.cdnfonts.com/css/amazon-ember');
        body {
          background-color: rgba(227, 230, 230, 1);
          font-family: "Amazon Ember", Arial, sans-serif;
          
        }
        
        </style>