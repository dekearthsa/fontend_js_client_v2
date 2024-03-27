<script setup>
import CarbonLogoVue from "../components/icons/CarbonLogo.vue"
import SpotLogoVue from "../components/icons/SpotLogo.vue"
import FilterLogoVue from "../components/icons/FilterLogo.vue"
import HumidLogoVue from "../components/icons/HumidLogo.vue"
import PMLogoVue from "../components/icons/PMLogo.vue"
import TempLogoVue from "../components/icons/TempLogo.vue"
import VOCsLogoVue from "../components/icons/VOCsLogo.vue"
import WellBreathLogoWBVue from "../components/icons/WellBreathLogoWB.vue"
import NormalFaceIcon from "../components/icons/NormalFaceIcon.vue";
import {useStore} from "vuex"
import {onMounted, ref} from 'vue'

const store = useStore();
const selectPageWB = ref(1);
const menuPage = ref('IAQ');
const cssBtnWBParam = ref('bg-zinc-400 text-white font-bold text-[14px] w-[200px] h-[25px] rounded-lg');
const cssBtnWBController = ref('bg-zinc-300 text-white font-bold text-[14px] w-[200px] h-[25px] rounded-lg');
const cssControllerChange = ref('bg-[#F3F4F8] w-[500px] h-[180px] m-auto rounded-md');
const cssStatusExhaustFan = ref('text-red-600');
const csssStatusSpplyFan = ref('text-red-800 font-bold');

const cssBtnSupplyHigh = ref('bg-[#8A8A8A] w-[80%] text-white rounded-md selection-non-btn');
const cssBtnSupplyLow = ref('bg-[#8A8A8A] w-[80%] text-white rounded-md selection-non-btn');
const cssBtnOff = ref('bg-[#00B0F0] w-[80%] text-white rounded-md selection-non-btn');

const haddleExhaustStatus = ref('off');
const haddleSupplyFan = ref('off');
const btnExhaustFan = ref('On');

const percentBattery = ref(100);

const haddleSelectPage = (evt) => {
    if(evt === 1){
        selectPageWB.value = 1;
        menuPage.value = 'IAQ'
        cssBtnWBParam.value = "bg-zinc-400 text-white font-bold text-[14px] w-[200px] h-[25px] rounded-lg";
        cssBtnWBController.value = "bg-zinc-300 text-white font-bold text-[14px] w-[200px] h-[25px] rounded-lg";
        cssControllerChange.value = 'bg-[#F3F4F8] w-[500px] h-[180px] m-auto rounded-md';
    }else{
        selectPageWB.value = 2;
        menuPage.value = 'Control panel'
        cssBtnWBParam.value = "bg-zinc-300 text-white font-bold text-[14px] w-[200px] h-[25px] rounded-lg";
        cssBtnWBController.value = "bg-zinc-400 text-white font-bold text-[14px] w-[200px] h-[25px] rounded-lg";
        cssControllerChange.value = 'bg-[#F3F4F8] w-[500px] h-[270px] m-auto rounded-md'
    }
}



const haddleSupplyFans = (evt) => {
    if(evt === 'off'){
        csssStatusSpplyFan.value = 'text-red-800 font-bold'
        haddleSupplyFan.value = 'off'
        cssBtnOff.value = 'bg-[#00B0F0] w-[80%] text-white rounded-md selection-non-btn'
        cssBtnSupplyLow.value = 'bg-[#8A8A8A] w-[80%] text-white rounded-md selection-non-btn'
        cssBtnSupplyHigh.value = 'bg-[#8A8A8A] w-[80%] text-white rounded-md selection-non-btn'
    }else if(evt === 'low'){
        csssStatusSpplyFan.value = 'text-[#2A83B5] font-bold'
        haddleSupplyFan.value = 'low speed'
        cssBtnOff.value = 'bg-[#8A8A8A] w-[80%] text-white rounded-md selection-non-btn'
        cssBtnSupplyLow.value = 'bg-[#00B0F0] w-[80%] text-white rounded-md selection-non-btn'
        cssBtnSupplyHigh.value = 'bg-[#8A8A8A] w-[80%] text-white rounded-md selection-non-btn'
    }else if(evt === 'high'){
        csssStatusSpplyFan.value = 'text-[#2A83B5] font-bold'
        haddleSupplyFan.value = 'high speed'
        cssBtnOff.value = 'bg-[#8A8A8A] w-[80%] text-white rounded-md selection-non-btn'
        cssBtnSupplyLow.value = 'bg-[#8A8A8A] w-[80%] text-white rounded-md selection-non-btn'
        cssBtnSupplyHigh.value = 'bg-[#00B0F0] w-[80%] text-white rounded-md selection-non-btn'
    }
}



onMounted(() => {
    store.state.selectionHomePage = false
    store.state.pageNow = "WELL BREATHED"
})

// const haddlePercentBattery = () => {
//     if(percentBattery.value >= 100){

//     }
// }

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
    <div class="flex">
        <div class="w-[200px] h-[315px] ml-8">
            <div>
                <WellBreathLogoWBVue class="m-auto absolute translate-y-[-70px] translate-x-[55px]"/>
            </div>
            <div class="card-c rounded-lg h-[315px]">
                <div class="title-c text-center mt-3">
                    <div class="text-[#00B0F0] setbold  text-[14px] translate-y-[25px]">WELL BREATHED</div>
                </div>
                <div class="status-c bg-[#F3F4F8] rounded-lg w-[180px] h-[85px] mt-10 m-auto">
                    <div class="flex">
                        <div class="ml-4 mt-3">
                            <button @click="haddleBtnOnOff" >
                                <!-- <div :class="store.state.wellBreathDiv">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    :stroke="store.state.wellBreathSvg" class="w-6 h-6 m-auto translate-y-[3px]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                                    </svg>
                                </div> -->
                                <img v-if="store.state.wellBreathState" src="@/assets/btn_on_wb.png" width="38" height="38"/>
                                <img v-if="!store.state.wellBreathState" src="@/assets/btn_off.png" width="38" height="38"/>
                            </button>
                            <div class="text-[13px] translate-x-[-3px] setbold">
                                ON/OFF
                            </div>
                        </div>
                        <div class="ml-6 mt-3">
                            <div class="setbold text-[#545454] text-[14px]">
                                Status
                            </div>
                            <div
                                class="border-2 border-[#36A090] w-[56px] text-[14px] setbold text-center rounded-md text-[#36A090]">
                                Normal
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aqi-c bg-[#F3F4F8] rounded-lg w-[180px] h-[65px] mt-2 m-auto">
                    <div class="">
                        <div class="text-[14px] setbold ml-1 mt-1 text-[#545454]">AQI</div>
                    </div>
                    <div @click="haddleDebugIAQ">

                        <div v-if="store.state.iaqParamState === 2" class="flex justify-center">
                          <div class="translate-x-[-30px]  mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#B8FAA0" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00C412" class="w-9 h-9">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                            </svg>
                            
                          </div>
                          <div class="translate-y-[5px] translate-x-[8px] text-[#00C412] text-[13px] font-bold">
                            Good
                          </div>
                        </div>
              
                        <div v-if="store.state.iaqParamState === 1" class="flex justify-center">
                          <div class="translate-x-[-13px]  mr-2">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="#F4B8B7" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CB2A28" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                            </svg> -->
                            <NormalFaceIcon/>
                          </div>
                          <div class="translate-y-[5px] translate-x-[8px] text-[#CDC100] text-[13px] font-bold">
                            Moderated
                          </div>
                        </div>
              
                        <div  v-if="store.state.iaqParamState === 0" class="flex justify-center">
                          <div class=" translate-x-[-15px]  mr-2">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="#F4B8B7" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CB2A28" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                            </svg> -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#F4B8B7" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CB2A28" class="w-9 h-9">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                            </svg>
                          </div>
                          <div class="translate-y-[5px] translate-x-[8px] text-[#CB2A28] text-[13px] font-bold">
                            Unhealthy
                          </div>
                        </div>
                      </div>
                </div>
                <div class="battery-c bg-[#F3F4F8] rounded-lg w-[180px] h-[67px] mt-2 m-auto">
                    <div class="text-[14px] text-[#545454] font-bold mt-1 ml-1">Filter</div>
                    <div class="flex justify-around">
                        <div>
                            <FilterLogoVue class="translate-y-[-3px] translate-x-[8px]" />
                        </div>
                        <div class="flex translate-x-[8px]">
                            <div>
                                <img v-if="percentBattery > 60" class="translate-y-[10px]" src="@/assets/bat_max.png" width="35" height="35"/>
                                <img v-if="percentBattery <= 60 && percentBattery > 50" class="translate-y-[10px]" src="@/assets/bat_max_low.png" width="35" height="35"/>
                                <img v-if="percentBattery <= 50 && percentBattery > 30" class="translate-y-[10px]" src="@/assets/bat_low.png" width="35" height="35"/>
                                <img v-if="percentBattery <= 30 && percentBattery >= 0" class="translate-y-[10px]" src="@/assets/bat_empty.png" width="35" height="35"/>
                            </div>
                            <div class="text-[#008E29] ml-2 translate-y-[8px] text-[14px] font-bold">
                                100%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="detail-c w-[510px] h-[315px] rounded-lg ml-5 mt-3">
                <div class="h-[10px]"></div>
                <div :class="cssControllerChange">
                    <div class="flex justify-between title-detail text-[#2A83B5] setbold ml-2 text-[14px] translate-y-[13px]">
                        <div>{{menuPage}}</div>
                        <div class="mr-3">{{selectPageWB}}/2</div>
                    </div>

                    <div class="mt-[30px]" v-if="menuPage === 'Control panel'">
                        <div class="set-manual-con mt-5">
                            <div class="border-[1px] border-zinc-400 rounded-md h-[210px] w-[150px]">
                                <div class="text-center translate-y-[5px]">Exhaust Fan</div>
                                <div class="translate-y-[24px]">
                                    <img class="m-auto" src="../assets/ex_fan.png" width="110" height="110"/>
                                </div>
                                <div class="mt-[35px]">
                                    <div class="mt-3 text-center flex justify-center">
                                        <div class="w-[45%]">
                                            <div>
                                                <div class="flex border-2 border-[#66B6AB] pl-3 pr-3 pt-1 pb-1 text-[#66B6AB] rounded-md">
                                                    <div class="mr-1"><SpotLogoVue/></div>
                                                    <div class="translate-y-[2px] font-bold text-[10px]">ON</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="border-[1px] border-zinc-400 rounded-md">
                                <div class="text-center translate-y-[5px]">Supply Fan</div>
                                <div class="grid grid-cols-2">
                                    <div>
                                        <img class="mt-4 ml-4 translate-y-3" src="../assets/sp_fan.png" width="110" height="110"/>
                                    </div>
                                    <div class="mt-3">
                                        <!-- <div class="mt-3 flex justify-around">
                                            <div class="text-green-700">Status</div>
                                            <div :class="csssStatusSpplyFan">{{haddleSupplyFan}}</div>
                                        </div> -->
                                        <div class="mt-5 text-center">
                                            <button :class="cssBtnSupplyLow" @click="haddleSupplyFans('low')">Low speed</button>
                                        </div>
                                        <div class="mt-5 -translate-y-[-8px] text-center">
                                            <button :class="cssBtnSupplyHigh"  @click="haddleSupplyFans('high')">High speed</button>
                                        </div>
                                        <div class="mt-[2.6rem] text-center flex justify-center">
                                            <div class="w-[45%]">
                                                <div>
                                                    <div class="flex border-2 border-[#66B6AB] pl-3 pr-3 pt-1 pb-1 text-[#66B6AB] rounded-md">
                                                        <div class="mr-1"><SpotLogoVue/></div>
                                                        <div class="translate-y-[2px] font-bold text-[10px]">ON</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-[14px]" v-if="menuPage === 'IAQ'">
                        <div class="grid grid-cols-3 ml-3 mt-6">
                            <div>
                                <div class="">Temperature</div>
                                <div class="flex">
                                    <div>
                                        <TempLogoVue/>
                                    </div>
                                    <div class="text-[14px] translate-y-[10px] ml-1">
                                        <span class="font-bold ">25.0</span>
                                        <span style='font-size:15px;'>&#8451;</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="">PM2.5</div>
                                <div class="flex">
                                    <span><PMLogoVue/></span>
                                    <span class="font-bold text-[14px] translate-y-[10px] ml-1">115.0</span>
                                    <span class="text-[14px] translate-y-[10px] ml-2">µg/m3</span>
                                </div>
                            </div>
                            <div>
                                <div class="">CO2</div>
                                <div class="flex">
                                    <span><CarbonLogoVue/></span>
                                    <span class="font-bold text-[14px] translate-y-[10px] ml-1">115</span>
                                    <span class="text-[14px] translate-y-[10px] ml-2">ppm</span>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 ml-3 mt-3">
                            <div>
                                <div class="">VOCs</div>
                                <div class="flex">
                                    <span><VOCsLogoVue/></span>
                                    <span class="font-bold text-[14px] translate-y-[10px] ml-1">90</span>
                                    <span class="text-[14px] translate-y-[10px]">ppm</span>
                                </div>
                            </div>
                            <div>
                                <div class="">Humidity</div>
                                <div class="flex translate-y-[5px]" >
                                    <span class="translate-y-[-10px]"><HumidLogoVue/></span>
                                    <span class="font-bold text-[14px] translate-y-[5px]">70%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>  <!-- IAQ -->

                
                <div class="w-[500px] h-[85px] bg-[#F3F4F8] mt-1 m-auto rounded-md" v-if="menuPage === 'IAQ'">
                    <div class="title-detail setbold text-[#2A83B5] ml-2 text-[14px]">System</div>
                    <div class="flex justify-around text-[14px] mt-3">
                        <div class="translate-y-[-8px] translate-x-[-20px]">
                            <div>Mode</div>
                            
                            <div class="flex border-[2px] border-[#699BF7] pl-8 pr-3 pt-1 pb-1 rounded-md">
                                
                                <div class="absolute translate-x-[-30px] translate-y-[-3px]">
                                    <img src="@/assets/Night_mode.png" width="35" height="35" />
                                </div>
                                <div class=" text-[#699BF7] font-bold text-[13px]">Night Mode</div>
                            </div>
                            
                        </div>
                        <div class="translate-y-[-8px] translate-x-[-31px]">
                            <div>Supply Fan</div>
                            <div class="flex">
                                <div class="mr-2">
                                    <svg fill="#000000" width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.48154C7.29535 3.48154 3.48148 7.29541 3.48148 12.0001C3.48148 16.7047 7.29535 20.5186 12 20.5186C16.7046 20.5186 20.5185 16.7047 20.5185 12.0001C20.5185 7.29541 16.7046 3.48154 12 3.48154ZM2 12.0001C2 6.47721 6.47715 2.00006 12 2.00006C17.5228 2.00006 22 6.47721 22 12.0001C22 17.5229 17.5228 22.0001 12 22.0001C6.47715 22.0001 2 17.5229 2 12.0001Z"/>
                                        <path d="M12 11.3C11.8616 11.3 11.7262 11.3411 11.6111 11.418C11.496 11.4949 11.4063 11.6042 11.3533 11.7321C11.3003 11.86 11.2864 12.0008 11.3134 12.1366C11.3405 12.2724 11.4071 12.3971 11.505 12.495C11.6029 12.5929 11.7277 12.6596 11.8634 12.6866C11.9992 12.7136 12.14 12.6997 12.2679 12.6467C12.3958 12.5937 12.5051 12.504 12.582 12.3889C12.6589 12.2738 12.7 12.1385 12.7 12C12.7 11.8144 12.6262 11.6363 12.495 11.505C12.3637 11.3738 12.1857 11.3 12 11.3ZM12.35 5.00002C15.5 5.00002 15.57 7.49902 13.911 8.32502C13.6028 8.50778 13.3403 8.75856 13.1438 9.05822C12.9473 9.35787 12.8218 9.69847 12.777 10.054C13.1117 10.1929 13.4073 10.4116 13.638 10.691C16.2 9.29102 19 9.84401 19 12.35C19 15.5 16.494 15.57 15.675 13.911C15.4869 13.6029 15.232 13.341 14.9291 13.1448C14.6262 12.9485 14.283 12.8228 13.925 12.777C13.7844 13.1108 13.566 13.406 13.288 13.638C14.688 16.221 14.128 19 11.622 19C8.5 19 8.423 16.494 10.082 15.668C10.3852 15.4828 10.644 15.2332 10.84 14.9368C11.036 14.6404 11.1644 14.3046 11.216 13.953C10.8729 13.8188 10.5711 13.5967 10.341 13.309C7.758 14.695 5 14.149 5 11.65C5 8.50002 7.478 8.42302 8.304 10.082C8.48945 10.3888 8.74199 10.6496 9.04265 10.8448C9.34332 11.0399 9.68431 11.1645 10.04 11.209C10.1748 10.8721 10.3971 10.5772 10.684 10.355C9.291 7.80001 9.844 5.00002 12.336 5.00002H12.35Z"/>
                                    </svg>
                                </div>
                                <div>
                                    <div class="flex border-2 border-[#66B6AB] pl-3 pr-3 pt-1 pb-1 text-[#66B6AB] rounded-md">
                                        <div class="mr-1"><SpotLogoVue/></div>
                                        <div class="translate-y-[2px] font-bold text-[10px]">ON</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="translate-y-[-8px] translate-x-[-31px]">
                            <div>Exhaust Fan</div>
                            <div class="flex">
                                <div class="mr-2">
                                    <svg fill="#000000" width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.48154C7.29535 3.48154 3.48148 7.29541 3.48148 12.0001C3.48148 16.7047 7.29535 20.5186 12 20.5186C16.7046 20.5186 20.5185 16.7047 20.5185 12.0001C20.5185 7.29541 16.7046 3.48154 12 3.48154ZM2 12.0001C2 6.47721 6.47715 2.00006 12 2.00006C17.5228 2.00006 22 6.47721 22 12.0001C22 17.5229 17.5228 22.0001 12 22.0001C6.47715 22.0001 2 17.5229 2 12.0001Z"/>
                                        <path d="M12 11.3C11.8616 11.3 11.7262 11.3411 11.6111 11.418C11.496 11.4949 11.4063 11.6042 11.3533 11.7321C11.3003 11.86 11.2864 12.0008 11.3134 12.1366C11.3405 12.2724 11.4071 12.3971 11.505 12.495C11.6029 12.5929 11.7277 12.6596 11.8634 12.6866C11.9992 12.7136 12.14 12.6997 12.2679 12.6467C12.3958 12.5937 12.5051 12.504 12.582 12.3889C12.6589 12.2738 12.7 12.1385 12.7 12C12.7 11.8144 12.6262 11.6363 12.495 11.505C12.3637 11.3738 12.1857 11.3 12 11.3ZM12.35 5.00002C15.5 5.00002 15.57 7.49902 13.911 8.32502C13.6028 8.50778 13.3403 8.75856 13.1438 9.05822C12.9473 9.35787 12.8218 9.69847 12.777 10.054C13.1117 10.1929 13.4073 10.4116 13.638 10.691C16.2 9.29102 19 9.84401 19 12.35C19 15.5 16.494 15.57 15.675 13.911C15.4869 13.6029 15.232 13.341 14.9291 13.1448C14.6262 12.9485 14.283 12.8228 13.925 12.777C13.7844 13.1108 13.566 13.406 13.288 13.638C14.688 16.221 14.128 19 11.622 19C8.5 19 8.423 16.494 10.082 15.668C10.3852 15.4828 10.644 15.2332 10.84 14.9368C11.036 14.6404 11.1644 14.3046 11.216 13.953C10.8729 13.8188 10.5711 13.5967 10.341 13.309C7.758 14.695 5 14.149 5 11.65C5 8.50002 7.478 8.42302 8.304 10.082C8.48945 10.3888 8.74199 10.6496 9.04265 10.8448C9.34332 11.0399 9.68431 11.1645 10.04 11.209C10.1748 10.8721 10.3971 10.5772 10.684 10.355C9.291 7.80001 9.844 5.00002 12.336 5.00002H12.35Z"/>
                                    </svg>
                                </div>
                                <div>
                                    <div class="flex border-2 border-[#66B6AB] pl-3 pr-3 pt-1 pb-1 text-[#66B6AB] rounded-md">
                                        <div class="mr-1"><SpotLogoVue/></div>
                                        <div class="translate-y-[2px] font-bold text-[10px]">ON</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> <!-- System -->
                <div class="flex justify-center mt-2 translate-y-[-3px]">
                    <div class="mr-1">
                        <button :class="cssBtnWBParam" @click="haddleSelectPage(1)">IAQ</button>
                    </div>
                    <div class="ml-1">
                        <button :class="cssBtnWBController" @click="haddleSelectPage(2)">Control panel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-c{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.detail-c{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}


.selection-speed-fan{
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

.selection-non-btn{
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
}

.set-manual-con{
    display: grid;
    grid-template-columns: 1fr 2fr;
}
</style>