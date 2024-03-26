<script setup>
import { useRouter } from 'vue-router';
import {useStore} from "vuex"
// import AlwayDryLogoVue from '../icons/AlwayDryLogo.vue';
import {ref} from "vue"


const router = useRouter();
const store = useStore();
const percentBattery = ref(100);

const haddleRouteAlwayDry = () => {
  router.push("/alwaydry")
}

const haddleBtnOnOff = () => {
    if(store.state.alwayDryStte){
      store.state.alwayDryBtn = "btn-c rounded-full w-[40px] h-[40px] bg-[#DFDFDF]";
      store.state.alwayDryDiv = "rounded-full m-auto  w-[36px] h-[36px] border-2 bg-[#BDBDBD]";
      store.state.alwayDrySvg = "#FFFFFF";
      store.state.alwayDryStte = false;
    }else{
      store.state.alwayDryBtn = "btn-c rounded-full w-[40px] h-[40px] bg-[#FFF2D5]";
      store.state.alwayDryDiv = "rounded-full m-auto  w-[36px] h-[36px] border-2 border-[#ED7D31]";
      store.state.alwayDrySvg = "#ED7D31";
      store.state.alwayDryStte = true;
    }
  }

</script>

<template>
  <div class="">
    <div class="icon ">
      <!-- <AlwayDryLogoVue class="m-auto"/> -->
      <img src="@/assets/ADlogo.png" class="m-auto w-[40%] h-[90px] translate-y-[6px]"/>
    </div>
    <div class="detail w-[240px] h-[290px] bg-white rounded-lg">
      <div class="title flex m-auto mt-1 pb-1 pt-2 text-center justify-center" @click="haddleRouteAlwayDry">
        <div class="text-[#ED7D31] font-bold translate-x-[5px]">ALWAYS DRY</div>
        <div class="translate-x-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#999999" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <div class="status-c m-auto w-[200px] h-[85px] bg-[#F3F4F8] mt-2 rounded-lg"> 
        <div class="flex">
          <div class="ml-5 mt-3">
            <button @click="haddleBtnOnOff" :class="store.state.alwayDryBtn">
              <div :class="store.state.alwayDryDiv">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" :stroke="store.state.alwayDrySvg" class="w-6 h-6 m-auto translate-y-[3px]">
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
        <div class="set-timing font-bold flex justify-around">
          <div class="mt-3 text-[#36A090]">
            <div class="translate-x-[3px] text-[16px]">15</div>
            <div class="translate-y-[-5px] text-[14px]">Mins</div>
          </div>
          <div class="text-[12px] mt-3 translate-y-[2px] translate-x-[-5px]">
            <div>Time</div>
            <div>Remaining</div>
          </div>
        </div>
      </div>
      <div class="qta-c m-auto bg-[#F3F4F8] w-[200px] h-[65px] mt-2 rounded-lg">
        <div class="text-[14px] font-bold mt-3 ml-1">Sensor</div>
        <div class="flex justify-around mt-2  ">
          <div class="translate-y-[-5px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
              <path fill-rule="evenodd" d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="flex translate-x-[8px] ">
            <div>
                <img v-if="percentBattery > 60" class="" src="@/assets/bat_max.png" width="35" height="35"/>
                <img v-if="percentBattery <= 60 && percentBattery > 50" class="translate-y-[3px]" src="@/assets/bat_max_low.png" width="35" height="35"/>
                <img v-if="percentBattery <= 50 && percentBattery > 30" class="translate-y-[3px]" src="@/assets/bat_low.png" width="35" height="35"/>
                <img v-if="percentBattery <= 30 && percentBattery >= 0" class="translate-y-[3px]" src="@/assets/bat_empty.png" width="35" height="35"/>
            </div>
            <div class="text-[#008E29] ml-2 translate-y-[-3px] text-[14px] font-bold">
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