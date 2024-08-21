<script setup>
import {ref, onMounted} from "vue";
const currentDate = ref("n/a");
const currentTiming = ref("n/a");

import { useRouter } from 'vue-router';
import {useStore} from "vuex"

const router = useRouter();
const store = useStore();
const haddleRouteHome = () => {
    router.push("/")
}

onMounted(() => {
  setInterval(() => {
    setDate();
    timing();
  },1000)
})

const setDate = () => {
  const date = new Date();
  
  const isYear = date.getFullYear();
  const isMonth = date.getMonth() + 1;
  let setMonth = "";
  const isDate = date.getDate();
  const isDay = date.getDay();
  let setDay = "";

  if(isMonth === 1){
    setMonth = "Jan"
  }else if(isMonth === 2){
    setMonth = "Feb"
  }else if(isMonth === 3){
    setMonth = "Mar"
  }else if(isMonth === 4){
    setMonth = "Apr"
  }else if(isMonth === 5){
    setMonth = "May"
  }else if(isMonth === 6){
    setMonth = "June"
  }else if(isMonth === 7){
    setMonth = "July"
  }else if(isMonth === 8){
    setMonth = "Aug"
  }else if(isMonth === 9){
    setMonth = "Sept"
  }else if(isMonth === 10){
    setMonth = "Oct"
  }else if(isMonth === 11){
    setMonth = "Nov"
  }else if(isMonth === 12){
    setMonth = "Dec"
  }

  if(isDay === 1){
    setDay = "Sun"
  }else if(isDay === 2){
    setDay = "Mon"
  }else if(isDay === 3){
    setDay = "Tue"
  }else if(isDay === 4){
    setDay = "Wed"
  }else if(isDay === 5){
    setDay = "Thu"
  }else if(isDay === 6){
    setDay = "Fri"
  }else if(isDay === 7){
    setDay = "Sat"
  }

  currentDate.value =  `${setDay} ${isDate} ${setMonth} ${isYear}`;

};

const haddleLogging = () => {
  console.log("push")
  router.push("/logging")
}

const timing = () => {
  const date = new Date(); 
  const SET_INT = [1,2,3,4,5,6,7,8,9]
  const isHours = date.getHours();
  const isMin = date.getMinutes();
  let setMin;

  if(SET_INT.includes(isMin)){
    setMin = `0${isMin}`
  }else{
    setMin = isMin
  }
  currentTiming.value = `${isHours}:${setMin}`;
};

</script>

<template>
  <div class="header-home rounded-b-3xl shadow-md">
    <div class="flex justify-between items-center lg:px-10 lg:py-6">
      <div class="text-white font-bold text-2xl flex items-center lg:space-x-4">
        <div @click="haddleRouteHome" class="set-title cursor-pointer hover:text-gray-200 transition-colors duration-300">MY ROOM</div>
        <div v-if="store.state.pageNow !== ''" class="flex items-center lg:space-x-4">
          <div class="border-l-2 lg:h-6 border-white"></div>
          <div class="sm:text-[15px] sm:ml-4 sm:mt-[11px] lg:text-[23px] lg:mt-[1px]">{{ store.state.pageNow }}</div>
        </div>
      </div>
      <div class="set-timing text-white font-bold flex items-center lg:space-x-8">
        <button @click="haddleLogging" class="debug-cm z-10 hover:from-blue-400 hover:to-teal-300  hover:scale-105">Demo send command</button>
        <div class="set-timing-s text-right">
          <div>{{ currentDate }}</div>
          <div>{{ currentTiming }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


 
<style scoped>

@media only screen and (max-width: 800px){
  .set-title{
    margin-left: 45px;
    margin-top: 12px;
    font-size: 16px;
  }
  .set-timing{
    margin-right: 40px;
  }

  .set-timing-s{
    margin-top:10px ;
    font-size: 14px;
  }
  .debug-cm{
    height: 35px;
    margin-right: 20px;
  }
  button{
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
    --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: #2dd4bf var(--tw-gradient-to-position);
    height: 40px;
    z-index: 10px;
    padding-left: 1rem /* 16px */;
    padding-right: 1rem /* 16px */;
    padding-top: 0.5rem /* 8px */;
    padding-bottom: 0.5rem /* 8px */;
    border-radius: 0.375rem /* 6px */;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
  }
  .header-home {
    height: 80px;
    background: linear-gradient(135deg, #3b82f6, #2c82b3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .logging-btn {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .logging-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
}

@media only screen and (min-width: 801px){
  
  button{
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
    --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: #2dd4bf var(--tw-gradient-to-position);
    height: 55px;
    padding-left: 1rem /* 16px */;
    padding-right: 1rem /* 16px */;
    padding-top: 0.5rem /* 8px */;
    padding-bottom: 0.5rem /* 8px */;
    border-radius: 5.375rem /* 6px */;
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    font-size: 0.875rem /* 14px */;
    line-height: 1.25rem /* 20px */;
  }
  
  .header-home {
    height: 140px;
    background: linear-gradient(135deg, #3b82f6, #2c82b3);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .logging-btn {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .logging-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
}

</style>
