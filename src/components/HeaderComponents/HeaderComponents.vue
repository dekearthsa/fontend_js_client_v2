<script setup>
import {ref, onMounted} from "vue";
const currentDate = ref("n/a");
const currentTiming = ref("n/a");

import { useRouter } from 'vue-router';

const router = useRouter();

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


const timing = () => {
  const date = new Date(); 
  const isHours = date.getHours();
  const isMin = date.getMinutes();
  const isSec = date.getSeconds();

  // currentTiming.value = `${isHours}:${isMin}:${isSec}`;
  currentTiming.value = `${isHours}:${isMin}`;
};

</script>

<template>
  <div class="header-home h-[74px] rounded-b-3xl">
    <div class="flex justify-between">
      <div @click="haddleRouteHome" class="text-white mt-5 ml-5 font-bold">MY ROOM</div>
      <div class="text-white mt-1 mr-5 font-bold">
        <div class="">{{currentDate}}</div>
        <div class="text-end">{{currentTiming}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-home{
  background: #2C82B3;

}
</style>