<template>
        <div class="flex justify-start my-10 mx-24 flex-col">
                <div class="flex gap-4 flex-col">
                        <h2 class="font-bold text-xl">Language Settings</h2>
                        <p>Select the language you prefer for browsing, shopping, and communications.</p>
                        <div>
                                <p><i class="bi bi-record-circle-fill circle"></i> English - EN</p>
                                <hr class="h-px mt-2  ml-5 border-0 dark:bg-gray-700 w-1/4">
                               <ul class="mt-5 flex gap-2 flex-col">
                                <li><i class="bi bi-circle white"></i> español - ES - Traducción</li>
                                <li><i class="bi bi-circle white"></i> العربية - AR - الترجمة</li>
                                <li><i class="bi bi-circle white"></i> Deutsch - DE - Übersetzung</li>
                                <li><i class="bi bi-circle white"></i> עברית - HE - תרגום</li>
                                <li><i class="bi bi-circle white"></i> 한국어 - KO - 번역</li>
                                <li><i class="bi bi-circle white"></i> português - PT - Tradução</li>
                                <li><i class="bi bi-circle white"></i> 中文 (简体) - ZH - 翻译</li>
                                <li><i class="bi bi-circle white"></i> 中文 (繁體) - ZH - 翻譯</li>
                               </ul>
                        </div>
                </div>
                <hr class="h-px mt-5  ml-1 border-0 dark:bg-gray-700 her">
                <div class="flex flex-col gap-4 mt-7 mb-7">
                        <h1 class="text-xl font-bold">Currency Settings</h1>
                        <p>Select the currency you want to shop with</p>
                        
<button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" class="text-black shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dropdown w-1/4" type="button">$ - USD - US Dollar (Default)
        <svg class="w-2.5 h-2.5 ms-16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<!-- Dropdown menu -->
<div id="dropdownSearch" class="z-10 hidden bg-white rounded-lg shadow w-1/3 dark:bg-gray-700">
    <div class="p-3">
      <label for="input-group-search" class="sr-only"></label>
      <div class="relative">
        <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">

        </div>
        <input type="text" id="input-group-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="">
      </div>
    </div>
    <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
      <li>
        <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-11" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
          <label for="checkbox-item-11" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Bonnie Green</label>
        </div>
      </li>
      <li>
        <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <input checked id="checkbox-item-12" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="checkbox-item-12" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Jese Leos</label>
          </div>
      </li>
      <li>
        <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-13" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
          <label for="checkbox-item-13" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Michael Gough</label>
        </div>
      </li>
      <li>
        <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-14" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
          <label for="checkbox-item-14" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Robert Wall</label>
        </div>
      </li>
      <li>
        <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-15" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
          <label for="checkbox-item-15" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Joseph Mcfall</label>
        </div>
      </li>
      <li>
        <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-16" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
          <label for="checkbox-item-16" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Leslie Livingston</label>
        </div>
      </li>
            <li>
        <div class="flex items-center ps-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-17" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
          <label for="checkbox-item-17" class="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Roberta Casas</label>
        </div>
      </li>
    </ul>
    <a href="#" class="flex items-center p-3 hidden text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
      <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
        <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Z"/>
      </svg>
      Delete user
  </a>
</div>

                </div>
                <hr class="h-px mt-5  ml-1 border-0 dark:bg-gray-700 her">
                <div class="my-8 flex  gap-8">
                        <button class="cancel">Cancel</button>
                        <button class="change">Save Changes</button>
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
.cancel {
        box-shadow: 2px 3px 8px 5px rgba(234, 240, 240, 0.473);
        padding: 6px;
        border: 1px solid rgb(174, 173, 173);
        border-radius: 14%;
}

.change {
        padding: 7px;
        border: 1px solid rgb(174, 173, 173);
        border-radius: 14%;
        box-shadow: 2px 3px 8px 5px rgba(238, 244, 244, 0.473); 
        background-color: rgba(255, 201, 65, 1) ;
}

body {
        background-color: #ffffff !important;
}
.circle, .white{
color: rgb(176, 193, 120);
}
ul li:hover i{
       background-color: rgb(176, 193, 120);
       border-radius: 100%;
}


hr {
        background-color: rgba(195, 199, 199, 1);
}

.her {
        
        width: 90%;
}

.dropdown {
        background-color: #f0f2f2;
        border: 1px solid rgb(80, 78, 78);
}
</style>