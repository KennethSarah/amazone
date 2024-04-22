<template>
        <navbar/>
        <sub-header/>
        <lang-change/>
        <footers/>
        
        </template>
        
        <script setup>
        
          import { useRouter } from "vue-router";
        
          const router = useRouter();
        import Navbar from "../components/Navbar.vue";
        import Footers from "../components/Footers.vue";
        import LangChange from "../components/LangChange.vue";
        import SubHeader from "../components/SubHeader.vue"
        </script>
        
        <style>
         @import url('https://fonts.cdnfonts.com/css/amazon-ember');
        body {
         
          font-family: "Amazon Ember", Arial, sans-serif;
          
        }
        
        </style>