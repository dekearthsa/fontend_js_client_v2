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
  // const isSec = date.getSeconds();


  if(SET_INT.includes(isMin)){
    setMin = `0${isMin}`
  }else{
    setMin = isMin
  }
  // currentTiming.value = `${isHours}:${isMin}:${isSec}`;
  currentTiming.value = `${isHours}:${setMin}`;
};

</script>

<template>
  <div class="header-home h-[74px] rounded-b-3xl">
    <div class="flex justify-between">
      <div  class="text-white mt-3 ml-5 font-bold text-[24px] flex">
        <div @click="haddleRouteHome">MY ROOM</div>
        <div class="border-l-[3px] ml-3 border-white" v-if="store.state.pageNow!== ''"></div>
        <div class="ml-3" v-if="store.state.pageNow!== ''">{{ store.state.pageNow }}</div>
        <div class=" text-[15px] ml-5 mt-2"><button @click="haddleLogging" class="bg-sky-400 w-[100px] rounded-md logging-btn">Logging</button></div>
      </div>
      <div></div>
      <div class="text-white mt-1 mr-5 font-bold text-[16px]">
        <div class="">{{currentDate}}</div>
        <div class="text-end ">{{currentTiming}}</div>
      </div>
    </div>
  </div>
</template>

 

<style scoped>
.header-home{
  background: #2C82B3;
}

.logging-btn{
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>