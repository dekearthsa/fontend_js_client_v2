<script setup>
// import WellBreathLogoVue from "../components/icons/WellBreathLogo.vue"
import LightLogoVue from "../components/icons/LightLogo.vue"
import BatteryLowLogoVue from "../components/icons/BatteryLowLogo.vue"
import SpotLogoVue from "../components/icons/SpotLogo.vue"
import {useStore} from "vuex"
import { useRouter } from 'vue-router';
import {onMounted} from 'vue'
import LightForLifeLogoVue from "@/components/icons/LightForLifeLogo.vue"

const store = useStore();
const router = useRouter();

// const haddleRouteHome = () => {
//     router.push("/")
// }

onMounted(() => {
    store.state.selectionHomePage = false
    store.state.pageNow = "LIGHT FOR LIFE"
});

const haddleBtnOnOff = () => {
    if(store.state.lightForLifeState){
      store.state.lightForLifeBtn = "btn-c rounded-full w-[40px] h-[40px] bg-[#DFDFDF]";
      store.state.lightForLifeDiv = "rounded-full m-auto  w-[36px] h-[36px] border-2 bg-[#BDBDBD]";
      store.state.lightForLifeSvg = "#FFFFFF";
      store.state.lightForLifeState = false;
    }else{
      store.state.lightForLifeBtn = "btn-c rounded-full w-[40px] h-[40px] bg-[#FFF2D5]";
      store.state.lightForLifeDiv = "rounded-full m-auto  w-[36px] h-[36px] border-2 border-[#ED7D31]";
      store.state.lightForLifeSvg = "#ED7D31";
      store.state.lightForLifeState = true;
    }
  }



</script>

<template>
    <div class="flex">
        <div class="w-[200px] h-[315px] ml-8">
            <div>
                <LightForLifeLogoVue class="m-auto absolute translate-y-[-75px] translate-x-[55px]" />
            </div>

            <div class="card-c rounded-lg h-[315px]">
                <div class="title-c text-center">
                    <div class="text-[#D29500]  font-bold translate-y-[25px]">LIGHT FOR LIFE</div>
                </div>
                <div class="status-c bg-[#F3F4F8] rounded-lg w-[180px] h-[85px] mt-10 m-auto">
                    <div class="flex">
                        <div class="ml-4 mt-3">
                            <button @click="haddleBtnOnOff" :class="store.state.lightForLifeBtn">
                                <div :class="store.state.lightForLifeDiv">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" :stroke="store.state.lightForLifeSvg" class="w-6 h-6 m-auto translate-y-[3px]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                                  </svg>
                                </div>
                              </button>
                            <div class="text-[13px] font-bold">
                                ON/OFF
                            </div>
                        </div>
                        <div class="ml-4 mt-1">
                            <div class="font-bold text-[14px]">
                                Status
                            </div>
                            <div
                                class="border-2 border-[#36A090] w-[56px] text-[14px] font-bold text-center rounded-md text-[#36A090]">
                                Normal
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aqi-c bg-[#F3F4F8] rounded-lg w-[180px] h-[65px] mt-2 m-auto">
                    <div class="absolute flex ml-5 mt-6">
                        <div class="mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-[12px] h-[12px]">
                                <path
                                    d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                        </div>
                        <div class="text-[10px]">
                            50%
                        </div>
                    </div>
                    <div class="flex">
                        <div class=" ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#AA0000" class="w-[60px] h-[60px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
                            </svg>
                        </div>
                        <div class="text-[10px] mt-5 ml-2 font-bold text-[#CB2A28]">
                            Need replace new battery
                        </div>
                    </div>
                </div>
                <div class="battery-c bg-[#F3F4F8] rounded-lg w-[180px] h-[67px] mt-2 m-auto">
                    <div class="text-[14px] font-bold mt-1 ml-1">Battery</div>
                    <div class="flex justify-around mt-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#CB2A28"
                                class="w-6 h-6 translate-y-[-2px]">
                                <path fill-rule="evenodd"
                                    d="M.75 9.75a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v.038c.856.173 1.5.93 1.5 1.837v2.25c0 .907-.644 1.664-1.5 1.838v.037a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-6Zm19.5 0a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-6Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="text-[#CB2A28] text-[14px] font-bold">
                            30%
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="detail-c w-[510px] h-[315px] rounded-lg ml-5">
                <div class="h-[10px]"></div>
                <div class="w-[500px] h-[300px] bg-[#F3F4F8] rounded-md m-auto">
                    <div class="text-[#2A83B5] text-[18px] font-bold ml-1">System</div>
                    <div class="grid grid-cols-2 mt-3">
                        <div class="">
                            <div class="text-[14px] ml-2 mt-5">Light Bedroom 1</div>
                            <div class="flex mt-3">
                                <div class="mr-2">
                                    <LightLogoVue/>
                                </div>
                                <div class="translate-y-[10px] mr-3">
                                    <BatteryLowLogoVue/>
                                </div>
                                <div class="text-red-700 font-bold text-[13px] translate-y-[10px]">
                                    30% Charge!
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="text-[14px] ml-2 mt-5">Light Bedroom 2</div>
                            <div class="flex mt-3">
                                <div class="mr-2">
                                    <LightLogoVue/>
                                </div>
                                <div class="translate-y-[10px] mr-3">
                                    <BatteryLowLogoVue/>
                                </div>
                                <div class="text-red-700 font-bold text-[13px] translate-y-[10px]">
                                    30% Charge!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-3 mt-10">
                        <div>
                            <div class="text-[14px] ml-2 mt-5">Light Bathroom</div>
                            <div class="flex mt-3">
                                <div class="mr-2">
                                    <LightLogoVue/>
                                </div>
                                <div class="translate-y-[5px] mr-3">
                                    <div class="flex border-2 h-[25px] border-[#66B6AB] pl-2 pr-2  text-[#66B6AB] rounded-md">
                                        <div class="translate-y-[2px] mr-1"><SpotLogoVue/></div>
                                        <div class="translate-y-[3px] font-bold text-[10px]">ON</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="text-[14px] ml-2 mt-5">Sensor</div>
                            <div class="flex mt-3">
                                <div class="mr-3 translate-y-[5px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                        <path fill-rule="evenodd" d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="translate-y-[5px] mr-3">
                                    <div class="flex">
                                        <div class="translate-y-[2px] mr-3"><BatteryLowLogoVue/></div>
                                        <div class="font-bold text-[13px] text-red-700 ">30%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="text-[14px] ml-2 mt-5">Sensor</div>
                            <div class="flex mt-3">
                                <div class="mr-2 translate-y-[5px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                        <path fill-rule="evenodd" d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="translate-y-[3px] mr-3">
                                    <div class="flex border-2 h-[25px] border-[#66B6AB] pl-2 pr-2  text-[#66B6AB] rounded-md">
                                        <div class="translate-y-[2px] mr-1"><SpotLogoVue/></div>
                                        <div class="translate-y-[3px] font-bold text-[10px]">ON</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="text-center m-auto mt-4">
        <button class="text-[#2A83B5]" @click="haddleRouteHome">
            <div class="flex">
                <span class="mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path
                            d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path
                            d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>
                </span>
                <span>HOME</span>
            </div>
        </button>
    </div> -->
</template>

<style scoped>
.card-c {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.detail-c {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}</style>