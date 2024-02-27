<script setup>
import { RouterView } from 'vue-router';
import HeaderBlockComponentsVue from './components/HeaderComponents/HeaderBlockComponents.vue';
import HeaderComponentsVue from "./components/HeaderComponents/HeaderComponents.vue";
</script>

<template>
  <div class=" m-0 p-0">
    <div class="">
      <div class="h-[480px] w-[800px] m-auto ">
        <HeaderComponentsVue/>
        <HeaderBlockComponentsVue class="rounded-lg translate-y-[-20px]"/>
        <RouterView />
      </div>
    </div>
  </div>
  
</template>

<style >
@import  './styles.css';

.set-shadow{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
