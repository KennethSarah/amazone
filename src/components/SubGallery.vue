<template>
  
        <div class="container text-xs">
              <div class="card">
                  <h3>Creating Business Solutions</h3>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/cc_359_laptop_us_v1._SY304_CB576754001_.jpg" alt="Product Image" class="w-full h-72">
                  
      <button data-tooltip-target="tooltip-animation" type="button" class="text-blue-400 mt-5 bg-transparent">See more software products</button>
      
      <div id="tooltip-animation" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-blue-400 mt-5 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Tooltip content
          <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      
               
              </div>
              <div class="card">
                  <h3>A new way to work</h3>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1622892_3373436_379x304_1X_en_US._SY304_CB597161294_.jpg" alt="Product Image" class="w-full h-72">
                  
      <button data-tooltip-target="tooltip-animation" type="button" class="text-blue-400 mt-5 bg-transparent">Shop personal computers</button>
      
      <div id="tooltip-animation" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-blue-400 mt-5 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Tooltip content
          <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      
               
              </div>
              <div class="card">
                  <h3>Upgrade your office furniture</h3>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/dex/2023/Roar/October/D_CC_Roar_OfficeDepot_1023_1X_Furnitrure_v2._SY304_CB577544739_.jpg" alt="Product Image"  class="w-full h-72">
                  
      <button data-tooltip-target="tooltip-animation" type="button" class="text-blue-400 mt-5 bg-transparent">Animated tooltip</button>
      
      <div id="tooltip-animation" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-blue-400 mt-5 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Tooltip content
          <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      
               
              </div>
              <div class="card">
                  <h3>Product Title</h3>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/XCM_CUTTLE_1622894_3373440_379x304_1X_en_size1_US._SY304_CB597469214_.jpg" alt="Product Image"  class="w-full h-72">
                  
      <button data-tooltip-target="tooltip-animation" type="button" class="text-blue-400 mt-5 bg-transparent">Animated tooltip</button>
      
      <div id="tooltip-animation" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-blue-400 mt-5 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Tooltip content
          <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
      
               
              </div>
      
          </div>
        
      
          </template>
      
      <script setup>
      import { onMounted } from 'vue'
      import { initFlowbite } from 'flowbite'
              
              // initialize components based on data attribute selectors
              onMounted(() => {
                  initFlowbite();
              })
              
      </script>
      
      <style scoped>
        body {
              margin: 0;
              font-family: Arial, sans-serif;
              background-color: #f0f2f5;
          }
      
          h3 {
              font-size: 19px;
              margin-bottom: 10px;
          }
          .container {
              display: flex;
              flex-wrap: nowrap;
      
              padding: 20px;
          }
      
          .card {
              background-color: #fff;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
             
              margin: 10px;
              padding: 20px;
              width: 400px;
            
          }
      
          .card img {
              max-width: 100%;
              width: 100%;
              justify-content: center;
          }
      
          .card h2 {
              margin-top: 5px;
              margin-bottom: 10px;
              font-size: 1.5rem;
          }
      
          .card p {
              color: #555;
          }
          
          
          .card1 {
              background-color: #fff;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              border-radius: 5px;
              margin: 20px auto;
              padding: 30px;
              width: 350px;
              height: 400px;
          }
      
          .card1 h1 {
              margin-top: 5px;
              margin-bottom: 10px;
              font-size: 1.3rem;
          }
      
          .grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 30px;
          }
      
          .grid img {
             
              border-radius: 5px;
          }
      
          .grid img:nth-child(1),
          .grid img:nth-child(2) {
              grid-row: 1;
          }
      
          .grid img:nth-child(3),
          .grid img:nth-child(4) {
              grid-row: 2;
          }
      
          .container1 {
             
              display: flex;
              flex-wrap: nowrap;
      
          }
      </style>