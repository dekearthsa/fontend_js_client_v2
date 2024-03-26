<script setup>
  import FilterLogoVue from "../icons/FilterLogo.vue";
  import WellBreathLogoVue from "../icons/WellBreathLogo.vue";
  import NormalFaceIcon from "../icons/NormalFaceIcon.vue";
  import { useRouter } from 'vue-router';
  import {useStore} from "vuex" 
  import {ref} from "vue"



  const router = useRouter();
  const store = useStore();
  

  const haddleWellBreath = () => {
    router.push("/wellbreath");
  }

  const percentBattery = ref(100);


const haddleBtnOnOff = () => {
    if(store.state.wellBreathState){
      store.state.wellBreathBtn = "btn-c rounded-full w-[40px] h-[40px] bg-[#DFDFDF]";
      store.state.wellBreathDiv = "rounded-full m-auto  w-[36px] h-[36px] border-2 bg-[#BDBDBD]";
      store.state.wellBreathSvg = "#FFFFFF";
      store.state.wellBreathState = false;
    }else{
      store.state.wellBreathBtn = "btn-c rounded-full w-[40px] h-[40px] bg-[#C5F0FF]";
      store.state.wellBreathDiv = "rounded-full m-auto  w-[36px] h-[36px] border-2 border-[#00B0F0]";
      store.state.wellBreathSvg = "#00B0F0";
      store.state.wellBreathState = true;
    }
  }

  const haddleDebugIAQ = () => {
    if(store.state.iaqParamState === 0){
      store.state.iaqParamState = 1;
    }else if(store.state.iaqParamState === 1){
      store.state.iaqParamState = 2;
    }else if(store.state.iaqParamState === 2){
      store.state.iaqParamState = 0;
    }
  }

</script>

<template>
  <div class="">
    <div class="icon ">
      <WellBreathLogoVue class="m-auto"/>
    </div>
    <div class="detail w-[240px] h-[290px] bg-white rounded-lg translate-y-[-10px]">
      <div class="title flex m-auto mt-1 pb-1 pt-2 text-center justify-center" @click="haddleWellBreath">
        <div class="text-[#00B0F0] font-bold translate-x-[5px]">WELL BREATHED</div>
        <div class="translate-x-[10px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#999999" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <div class="status-c m-auto  w-[200px] h-[85px] bg-[#F3F4F8] mt-2 rounded-lg"> 
        <div class="flex">
          <div class="ml-5 mt-3">
            <button @click="haddleBtnOnOff" :class="store.state.wellBreathBtn">
              <div :class="store.state.wellBreathDiv">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" :stroke="store.state.wellBreathSvg" class="w-6 h-6 m-auto translate-y-[3px]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                </svg>
              </div>
            </button>
            <div class="text-[14px] font-bold">
              ON/OFF
            </div>
          </div>
          <div class="ml-8 mt-3">
            <div class="font-bold text-[14px]">
              Status
            </div>
            <div class="border-2 border-[#36A090] w-[70px] text-[14px] font-bold text-center rounded-md text-[#36A090]">
              Normal
            </div>
          </div>
        </div>
      </div>
      <div class="data-c m-auto bg-[#F3F4F8] w-[200px] h-[65px] mt-2 rounded-lg">
        <div class="">
          <div class="text-[14px] font-bold ml-1 mt-1">AQI</div>
        </div>
        <div @click="haddleDebugIAQ">

          <div v-if="store.state.iaqParamState === 2" class="flex justify-center">
            <div class="translate-x-[-30px] mr-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#B8FAA0" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00C412" class="w-9 h-9">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
              </svg>
            </div>
            <div class="translate-y-[6px] translate-x-[8px] text-[#00C412] text-[15px] font-bold">
              Good
            </div>
          </div>
          <div v-if="store.state.iaqParamState === 1" class="flex justify-center">
            <div class="translate-x-[-8px] mr-5">
              <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="#F4B8B7" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CB2A28" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
              </svg> -->
              <NormalFaceIcon/>
            </div>
            <div class="translate-y-[5px] translate-x-[15px] text-[#CDC100] text-[15px] font-bold">
              Moderated
            </div>
          </div>

          <div  v-if="store.state.iaqParamState === 0" class="flex justify-center">
            <div class="translate-x-[-15px] mr-2">
              <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="#F4B8B7" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CB2A28" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
              </svg> -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="#F4B8B7" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CB2A28" class="w-9 h-9">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
            </div>
            <div class="translate-y-[5px] translate-x-[20px] text-[#CB2A28] text-[15px] font-bold">
              Unhealthy
            </div>
          </div>
        </div>
      </div>
      <div class="qta-c m-auto bg-[#F3F4F8] w-[200px] h-[65px] mt-2 rounded-lg">
        <div class="text-[14px] font-bold mt-1 ml-1">Filter</div>
        <div class="flex justify-around selection mt-2">
          <div>
            <FilterLogoVue  class="translate-y-[-10px] translate-x-[8px]"/>
          </div>
          <div class="flex translate-x-[8px]">
            <div>
                <img v-if="percentBattery > 60" class="translate-y-[3px]" src="@/assets/bat_max.png" width="35" height="35"/>
                <img v-if="percentBattery <= 60 && percentBattery > 50" class="translate-y-[3px]" src="@/assets/bat_max_low.png" width="35" height="35"/>
                <img v-if="percentBattery <= 50 && percentBattery > 30" class="translate-y-[3px]" src="@/assets/bat_low.png" width="35" height="35"/>
                <img v-if="percentBattery <= 30 && percentBattery >= 0" class="translate-y-[3px]" src="@/assets/bat_empty.png" width="35" height="35"/>
            </div>
            <div class="text-[#008E29] ml-2 translate-y-[-1px] text-[14px] font-bold">
                100%
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-c{
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
}

.detail{
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
</style>