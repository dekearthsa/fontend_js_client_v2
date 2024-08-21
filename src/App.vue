<script setup>
import { RouterView } from 'vue-router';
import HeaderBlockComponentsVue from './components/HeaderComponents/HeaderBlockComponents.vue';
import HeaderComponentsVue from "./components/HeaderComponents/HeaderComponents.vue";
</script>

<template>
  <div class=" m-0 p-0">
    <div class="">
      <div class="set-main-page">
        <HeaderComponentsVue/>
        <HeaderBlockComponentsVue class="rounded-lg translate-y-[-20px]"/>
        <RouterView />
      </div>
    </div>
  </div>
  
</template>

<style >
@import  './styles.css';

@media only screen and (max-width: 800px) {
  .set-main-page  {
    margin: auto;
    width: 800px;
    height: 480px;
  }
}

@media only screen and (min-width: 801px) {
  .set-main-page  {
    margin: auto;
    width: 95%;
  }
  
}



.set-shadow{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
