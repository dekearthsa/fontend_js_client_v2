<script setup>
import { RouterView } from 'vue-router';
import HeaderBlockComponentsVue from './components/HeaderComponents/HeaderBlockComponents.vue';
import HeaderComponentsVue from "./components/HeaderComponents/HeaderComponents.vue";
</script>

<template>
  <div class="h-[350px] w-[640px] m-0 p-0">
    <HeaderComponentsVue/>
    <HeaderBlockComponentsVue class="rounded-lg translate-y-[-20px]"/>
    <RouterView />
  </div>
  
</template>

<style >
@import  './styles.css';
</style>
