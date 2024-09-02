<script setup>
import CarbonLogoVue from "../components/icons/CarbonLogo.vue"
import FilterLogoVue from "../components/icons/FilterLogo.vue"
import HumidLogoVue from "../components/icons/HumidLogo.vue"
import PMLogoVue from "../components/icons/PMLogo.vue"
import TempLogoVue from "../components/icons/TempLogo.vue"
import VOCsLogoVue from "../components/icons/VOCsLogo.vue"
import WellBreathLogoWBVue from "../components/icons/WellBreathLogoWB.vue"
import NormalFaceIcon from "../components/icons/NormalFaceIcon.vue";
import { useStore } from "vuex"
import { onMounted, ref} from 'vue'
import axios from "axios";

const store = useStore();
// const hosting = "localhost";
const hosting = "192.168.155.160";
const selectPageWB = ref(1);
const menuPage = ref('IAQ');
const cssBtnWBParam = ref('bg-zinc-400 text-white font-bold lg:w-[300px] lg:text-[18px] lg:h-[55px] sm:text-[14px] sm:w-[200px] sm:h-[22px] rounded-lg');
const cssBtnWBController = ref('bg-zinc-300 text-white font-bold lg:w-[300px] lg:text-[18px] lg:h-[55px] sm:text-[14px] sm:w-[200px] sm:h-[22px] rounded-lg');
const cssControllerChange = ref('bg-[#F3F4F8] sm:w-[350px] sm:h-[180px] m-auto rounded-md mb-2');
const cssPage = ref("bg-[#F3F4F8] lg:w-[95%] lg:h-[360px] sm:w-[350px] sm:h-[180px] m-auto rounded-md mb-2");


const isloadingIsOn = ref(false);

const haddleForceExhaust = async (evt) => {
    const command = {
        system: "zone1",
        command: evt
    }
    const status = await axios.post(`http://${hosting}:8090/api/forces/wb/exhaust`, command);
    if (status.data !== "ok") {
        alert(status.status)
    }
}

// watch(selectPageWB, async () => {

//     if(selectPageWB.value === 2){
//         cssPage.value = "bg-[#F3F4F8] lg:w-[95%] lg:h-[360px] sm:w-[490px] sm:h-[180px] m-auto rounded-md mb-2"
//     }else{
//         cssPage.value = "bg-[#F3F4F8] lg:w-[95%] lg:h-[360px] sm:w-[490px] sm:h-[180px] m-auto rounded-md mb-2"
//     }
// })

const haddleSupplyFans = async (evt) => {
    const command = {
        system: "zone1",
        command: evt
    }

    // console.log(command)
    const status = await axios.post(`http://${hosting}:8090/api/forces/wb/supplyfan`, command);
    // console.log(status.data)
    if (status.data !== "ok") {
        alert(status.status)
    }

}



const haddleSelectPage = (evt) => {
    if (evt === 1) {
        cssPage.value = "bg-[#F3F4F8] lg:w-[95%] lg:h-[360px] sm:w-[490px] sm:h-[180px] m-auto rounded-md mb-2"
        selectPageWB.value = 1;
        menuPage.value = 'IAQ'
        cssBtnWBParam.value = "bg-zinc-400 text-white font-bold lg:w-[300px] lg:text-[18px] lg:h-[55px] sm:text-[14px] sm:w-[200px] sm:h-[22px] rounded-lg";
        cssBtnWBController.value = "bg-zinc-300 text-white font-bold lg:w-[300px] lg:text-[18px] lg:h-[55px] sm:text-[14px] sm:w-[200px] sm:h-[22px] rounded-lg";
        cssControllerChange.value = 'bg-[#F3F4F8] sm:w-[490px] sm:h-[180px] m-auto rounded-md';
    } else {
        cssPage.value = "bg-[#F3F4F8] lg:w-[95%] lg:h-[500px] sm:w-[490px] sm:h-[265px] m-auto rounded-md mb-2"
        selectPageWB.value = 2;
        menuPage.value = 'Control panel'
        cssBtnWBParam.value = "bg-zinc-300 text-white font-bold lg:w-[300px] lg:text-[18px] lg:h-[55px] sm:text-[14px] sm:w-[200px] sm:h-[22px] rounded-lg";
        cssBtnWBController.value = "bg-zinc-400 text-white font-bold lg:w-[300px] lg:text-[18px] lg:h-[55px] sm:text-[14px] sm:w-[200px] sm:h-[22px] rounded-lg";
        cssControllerChange.value = 'bg-[#F3F4F8] sm:w-[490px] sm:h-[270px] m-auto rounded-md'
    }
}


onMounted(() => {
    store.state.selectionHomePage = false
    store.state.pageNow = "WELL BREATHED"
})


// const haddleBtnOnOff = () => {
//     if(store.state.wellBreathState){
//         store.state.dataWB.isOn = false
//     }else{
//         store.state.dataWB.isOn = true
//     }
//   }
const haddleOnMode = async (data) => {
    // console.log(data)
    isloadingIsOn.value = true
    try {
        if (data === true) {
            const command = {
                selection: "isOn",
                system: "zone1",
                command: false
            }
            const status = await axios.post(`http://${hosting}:8090/api/update/wb/onOff`, command);
            if (status === "ok") {
                setTimeout(() => {
                    isloadingIsOn.value = false
                }, 1500);

            } else {
                setTimeout(() => {
                    isloadingIsOn.value = false
                    // isErrorLoading.value = true
                }, 1500);

            }

        } else if (data === false) {
            const command = {
                selection: "isOn",
                system: "zone1",
                command: true
            }
            const status = await axios.post(`http://${hosting}:8090/api/update/wb/onOff`, command);
            if (status === "ok") {
                setTimeout(() => {
                    isloadingIsOn.value = false
                }, 1500)
            } else {
                setTimeout(() => {
                    isloadingIsOn.value = false
                    isErrorLoading.value = true
                }, 1500)
            }
        }
    } catch (err) {
        console.log(err);
    }
}
</script>

<template>
    <div class="flex m-auto justify-center ">
        <div class="set-c ml-8">
            <div>
                <WellBreathLogoWBVue class="m-auto absolute sm:translate-y-[-70px] sm:translate-x-[55px]  lg:translate-y-[-120px] lg:translate-x-[110px]" />
            </div>
            <div class="card-c rounded-lg sm:h-[315px]">
                <div class="title-c text-center mt-3">
                    <div 
                        class="set-t lg:text-[25px] text-[#00B0F0] font-bold sm:translate-x-[5px] sm:translate-y-[25px] lg:translate-y-[35px]"
                    >
                    WELL BREATHED
                </div>
                </div>
                <div class="status-c bg-[#F3F4F8] rounded-lg lg:w-[350px] lg:h-[130px] sm:w-[180px] sm:h-[85px] lg:mt-[60px] sm:mt-10 m-auto">
                    <div class="flex justify-around">
                        <div class="ml-4 mt-3">
                            <button @click="haddleOnMode(store.state.dataWB.isOn)">
                                <img class="sm:w-[38px] sm:h-[38px] lg:w-[60px] lg:h-[60px]" v-if="store.state.dataWB.isOn" src="@/assets/btn_on_wb.png" />
                                <img class="sm:w-[38px] sm:h-[38px] lg:w-[60px] lg:h-[60px]" v-if="!store.state.dataWB.isOn" src="@/assets/btn_off.png" />
                            </button>
                            <div class="lg:text-[20px] sm:text-[13px] sm:translate-x-[-3px] setbold">
                                ON/OFF
                            </div>
                        </div>
                        <div class="sm:ml-3 sm:mt-5">
                            <div class="setbold text-[#545454] sm:text-[12px]  lg:text-[24px]">
                                Status
                            </div>
                            <div
                                class="border-2 border-[#36A090] lg:w-[80px] lg:text-[18px] sm:w-[56px] sm:text-[12px] setbold text-center rounded-md text-[#36A090]">
                                Normal
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aqi-c bg-[#F3F4F8] rounded-lg lg:w-[350px] lg:h-[130px] sm:w-[180px] sm:h-[65px] mt-2 m-auto">
                    <div class="">
                        <div class="sm:text-[14px] lg:text-[20px] lg:ml-3 lg:pt-2 setbold sm:ml-1 sm:mt-1 text-[#545454]">IAQ</div>
                    </div>
                    <div>

                        <div v-if="store.state.dataWB.iaq === 'Good'" class="flex lg:justify-around sm:justify-center">
                            <div class="lg:translate-x-[3px] sm:translate-x-[-20px]  sm:mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#B8FAA0" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="#00C412" class="sm:w-9 sm:h-9 lg:w-[60px] lg:h-[60px]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                </svg>

                            </div>
                            <div class="sm:translate-y-[5px] sm:translate-x-[20px] lg:text-[25px]  sm:text-[13px] font-bold text-[#00C412]">
                                {{ store.state.dataWB.iaq }}
                            </div>
                        </div>

                        <div v-if="store.state.dataWB.iaq === 'Moderated'" class="flex justify-center">
                            <div class="translate-x-[-13px]  mr-2">
                                <NormalFaceIcon />
                            </div>
                            <div class="sm:translate-y-[5px] sm:translate-x-[20px] lg:text-[25px]  sm:text-[13px] font-bold text-[#CDC100]">
                                {{ store.state.dataWB.iaq }}
                            </div>
                        </div>

                        <div v-if="store.state.dataWB.iaq === 'Unhealthy'" class="flex justify-center">
                            <div  class="lg:translate-x-[3px] sm:translate-x-[-20px]  sm:mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#F4B8B7" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="#CB2A28" class="w-9 h-9">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                                </svg>
                            </div>
                            <div class="sm:translate-y-[5px] sm:translate-x-[20px] lg:text-[25px]  sm:text-[13px] font-bold text-[#CB2A28]">
                                {{ store.state.dataWB.iaq }}
                            </div>
                        </div>
                    </div>
                </div>
                <div 
                class="battery-c bg-[#F3F4F8] rounded-lg  lg:w-[350px] lg:h-[130px] sm:w-[180px] sm:h-[67px] mt-2 m-auto">
                    <div class="lg:text-[20px] lg:ml-3 lg:pt-3 sm:text-[14px] text-[#545454] font-bold sm:mt-1 sm:ml-1">Filter</div>
                    <div class="flex justify-around">
                        <div>
                            <FilterLogoVue class="  sm:translate-x-[15px] sm:translate-y-[1px] lg:translate-y-[-10px]" />
                        </div>
                        <div class="flex translate-x-[12px]">
                            <div>
                                <img v-if="store.state.dataWB.pressure > 60" class="set-img sm:translate-y-[10px]"
                                    src="@/assets/bat_max.png"  />
                                <img v-if="store.state.dataWB.pressure <= 60 && store.state.dataWB.pressure > 50"
                                    class="set-img sm:translate-y-[10px]" src="@/assets/bat_max_low.png"  />
                                <img v-if="store.state.dataWB.pressure <= 50 && store.state.dataWB.pressure > 30"
                                    class="set-img sm:translate-y-[10px]" src="@/assets/bat_low.png"  />
                                <img v-if="store.state.dataWB.pressure <= 30 && store.state.dataWB.pressure >= 0"
                                    class="set-img sm:translate-y-[10px]" src="@/assets/bat_empty.png"  />
                            </div>
                            <div class="text-[#008E29] lg:text-[20px] sm:ml-2 sm:translate-y-[8px] sm:text-[14px] font-bold">
                               100%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="detail-c rounded-lg ml-5 mt-3">
                <div class="h-[10px]"></div>
                <div 
                    :class="cssPage">
                    <div class="title-detail text-[#2A83B5] setbold lg:text-[23px] lg:ml-5 lg:translate-y-[13px] sm:ml-2 sm:text-[14px] sm:translate-y-[13px]">
                        <div>{{ menuPage }}</div>
                    </div>

                    <div class="mt-[30px]" v-if="menuPage === 'Control panel'">
                        <div class="set-manual-con mt-5">
                            <!-- maintaince -->
                            <div 
                            class="border-[1px] border-zinc-400 rounded-md lg:h-[400px] lg:ml-6 lg:w-[280px] sm:h-[210px] sm:w-[150px]">
                                <div class="text-center sm:translate-y-[5px] lg:mb-4 lg:text-[20px] lg:font-bold lg:translate-y-[20px]">Exhaust Fan</div>
                                <div class="translate-y-[24px]">
                                    <img class="m-auto sm:w-[110px] sm:h-[110px] lg:w-[200px] lg:h-[200px]" src="../assets/ex_fan.png"  />
                                </div>
                                <div class="mt-[35px]">
                                    <div class="mt-3 text-center flex justify-center">
                                        <div class="w-[45%]">
                                            <div>
                                                <button v-if="!store.state.dataWB.arrayDeviceOn.includes('Exhaust fan')"
                                                    class="flex lg:translate-x-[15px] border-2 border-[#777777] pl-3 pr-3 pt-1 pb-1 text-[#777777] rounded-md"
                                                    @click="haddleForceExhaust('Exhaust fan')">
                                                    <div class="mr-1">
                                                        <img class="lg:h-[20px] lg:w-[20px] sm:h-[15px] sm:w-[15px] lg:translate-y-[3px]" src="@/assets/spot_off.png"  />
                                                    </div>
                                                    <div class="font-bold sm:text-[10px] lg:text-[18px]">
                                                        OFF
                                                    </div> 
                                                </button>
                                                <button c v-if="store.state.dataWB.arrayDeviceOn.includes('Exhaust fan')"
                                                    class="flex border-2 border-[#36A090] lg:w-[100px] text-[#36A090] lg:h-[40px]  sm:pl-3 sm:pr-3 sm:pt-1 sm:pb-1  rounded-md"
                                                    @click="haddleForceExhaust('Exhaust fan off')">
                                                    <div class="mr-1">
                                                        <img class="lg:h-[20px] lg:ml-[10px] lg:w-[20px] sm:h-[15px] sm:w-[15px] lg:translate-y-[3px]" src="@/assets/spot_on.png" />
                                                    </div>
                                                    <div class="font-bold lg:text-[18px] sm:text-[10px]"
                                                        v-if="store.state.dataWB.arrayDeviceOn.includes('Exhaust fan')">
                                                        ON
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="border-[1px] lg:w-[610px] border-zinc-400 rounded-md">
                                <div class="text-center sm:translate-y-[5px] lg:text-[20px] lg:font-bold lg:translate-y-[20px]">Supply Fan</div>
                                <div class="grid grid-cols-2 lg:mt-5">
                                    <div>
                                        <img 
                                        class="sm:mt-4 sm:ml-4 sm:translate-y-3 sm:w-[110px] sm:h-[110px] lg:w-[200px] lg:h-[200px]"  
                                        src="../assets/sp_fan.png" 
                                        />
                                    </div>
                                    <div class="sm:mt-3">
                                        <div class="mt-5 text-center">
                                            <button v-if="!store.state.dataWB.arrayDeviceOn.includes('Supply low')"
                                                class="bg-[#8A8A8A] w-[70%] lg:text-[20px] lg:h-[60px] text-white rounded-md selection-non-btn"
                                                @click="haddleSupplyFans('Supply low')">Low speed</button>
                                            <button v-if="store.state.dataWB.arrayDeviceOn.includes('Supply low')"
                                                class="bg-[#00B0F0] w-[70%] lg:text-[20px] lg:h-[60px]  text-white rounded-md selection-non-btn">
                                                Low speed</button>
                                        </div>
                                        <div class="mt-5 -translate-y-[-8px] text-center">
                                            <button v-if="!store.state.dataWB.arrayDeviceOn.includes('Supply high')"
                                                class="bg-[#8A8A8A] w-[70%] lg:text-[20px] lg:h-[60px] text-white rounded-md selection-non-btn"
                                                @click="haddleSupplyFans('Supply high')">High speed</button>
                                            <button v-if="store.state.dataWB.arrayDeviceOn.includes('Supply high')"
                                                class="bg-[#00B0F0] w-[70%] lg:text-[20px] lg:h-[60px] text-white rounded-md selection-non-btn">High
                                                speed</button>
                                        </div>
                                        <div class="mt-[2.6rem] text-center flex justify-center">
                                            <div class="w-[45%]">
                                                <div
                                                    v-if="!store.state.dataWB.arrayDeviceOn.includes('Supply low') && !store.state.dataWB.arrayDeviceOn.includes('Supply high')">
                                                    <button
                                                        class="flex border-2 border-[#777777] lg:w-[100px] lg:h-[40px]  sm:pl-3 sm:pr-3 sm:pt-1 sm:pb-1 text-[#777777] rounded-md">
                                                        <div class="mr-1">
                                                            <img class="lg:h-[20px] lg:w-[20px] lg:ml-1 sm:h-[15px] sm:w-[15px] lg:translate-y-[3px]" src="@/assets/spot_off.png"  />
                                                        </div>
                                                        <div class="font-bold lg:text-[18px] sm:text-[10px]">OFF</div>
                                                    </button>
                                                </div>
                                                <div v-if="store.state.dataWB.arrayDeviceOn.includes('Supply low')">
                                                    <button
                                                    class="flex border-2 border-[#36A090] lg:w-[100px] text-[#36A090] lg:h-[40px]  sm:pl-3 sm:pr-3 sm:pt-1 sm:pb-1  rounded-md">
                                                        <div class="mr-1">
                                                            <img  class="lg:h-[20px] lg:w-[20px] lg:ml-[10px] sm:h-[15px] sm:w-[15px] lg:translate-y-[3px]" src="@/assets/spot_on.png"  />
                                                        </div>
                                                        <div  class="font-bold lg:text-[18px] sm:text-[10px]"
                                                            @click="haddleSupplyFans('Supply fan off')">ON</div>
                                                    </button>
                                                </div>
                                                <div v-if="store.state.dataWB.arrayDeviceOn.includes('Supply high')">
                                                    <button
                                                        class="flex border-2 border-[#36A090] lg:w-[100px]  text-[#36A090] lg:h-[40px]  sm:pl-3 sm:pr-3 sm:pt-1 sm:pb-1  rounded-md">
                                                        <div class="mr-1">
                                                            <img  class="lg:h-[20px] lg:ml-[10px] lg:w-[20px] sm:h-[15px] sm:w-[15px] lg:translate-y-[3px]" src="@/assets/spot_on.png"/>
                                                        </div>
                                                        <div  class="font-bold lg:text-[18px] sm:text-[10px]"
                                                            @click="haddleSupplyFans('Supply fan off')">ON</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="text-[14px]" v-if="menuPage === 'IAQ'">
                        <div class="grid grid-cols-3 sm:ml-3 sm:mt-6 lg:mt-10">
                            <div>
                                <div class="lg:text-[20px] lg:font-bold lg:ml-3">Temperature</div>
                                <div class="flex">
                                    <div>
                                        <TempLogoVue />
                                    </div>
                                    <div class="lg:text-[23px] lg:mt-2 sm:text-[14px] sm:translate-y-[10px] sm:ml-1">
                                        <span class="font-bold ">{{ store.state.dataWB.temp }}</span>
                                        <span class="sm:ml-1 sm:text-[15px] lg:text-[20px]" >&#8451;</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="lg:text-[20px] lg:font-bold lg:ml-3">PM2.5</div>
                                <div class="flex">
                                    <span>
                                        <PMLogoVue />
                                    </span>
                                    <span
                                        class="lg:text-[23px] lg:font-bold lg:mt-2 sm:text-[14px] sm:translate-y-[10px] sm:ml-1">{{ store.state.dataWB.pm25 }}</span>
                                    <span class="sm:ml-1 sm:text-[15px]  lg:mt-5 lg:ml-2 lg:text-[20px]">µg/m3</span>
                                </div>
                            </div>
                            <div>
                                <div class="lg:text-[20px] lg:font-bold lg:ml-3">CO2</div>
                                <div class="flex">
                                    <span>
                                        <CarbonLogoVue />
                                    </span>
                                    <span
                                        class="lg:text-[23px] lg:font-bold lg:mt-2 sm:text-[14px] sm:translate-y-[10px] sm:ml-1">{{ store.state.dataWB.co2 }}</span>
                                    <span class="sm:ml-1 sm:text-[15px]  lg:mt-5 lg:ml-2 lg:text-[20px]">ppm</span>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 sm:ml-3 sm:mt-3 lg:mt-[60px]">
                            <div>
                                <div class="lg:text-[20px] lg:font-bold lg:ml-3">VOCs</div>
                                <div class="flex">
                                    <span>
                                        <VOCsLogoVue />
                                    </span>
                                    <span
                                        class="lg:text-[23px] lg:ml-5 lg:font-bold lg:mt-2 sm:text-[14px] sm:translate-y-[10px] sm:ml-1">{{ store.state.dataWB.voc }}</span>
                                    <span class="sm:ml-1 sm:text-[15px]  lg:mt-5 lg:ml-2 lg:text-[20px]">ppm</span>
                                </div>
                            </div>
                            <div>
                                <div class="lg:text-[20px] lg:font-bold lg:ml-3">Humidity</div>
                                <div class="flex translate-y-[5px]">
                                    <span class="translate-y-[-10px]">
                                        <HumidLogoVue />
                                    </span>
                                    <span
                                        class="lg:text-[23px] lg:font-bold lg:translate-x-[-10px] lg:translate-y-[3px] lg:mt-2 sm:text-[14px] sm:translate-y-[10px] sm:ml-1">{{ store.state.dataWB.humid }}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div> <!-- IAQ -->

                <div class="lg:w-[95%] lg:h-[140px] sm:w-[490px] sm:h-[80px] bg-[#F3F4F8] mt-2 m-auto rounded-md" v-if="menuPage === 'IAQ'">
                    <div class="title-detail setbold text-[#2A83B5] sm:ml-2 lg:ml-5 lg:text-[20px] sm:text-[14px]">System</div>
                    <div class="flex justify-around sm:text-[14px] sm:mt-3 lg:mt-5">
                        <div class="translate-y-[-8px] translate-x-[-20px]">
                            <div class="lg:text-[18px] lg:font-bold text-zinc-600">Mode</div>
                            <div v-if="store.state.dataWB.arrayDeviceOn.includes('Exhaust fan') && store.state.dataWB.arrayDeviceOn.includes('Supply low')"
                                class="flex border-[2px] border-[#699BF7] pl-3 pr-3 rounded-md">
                                <div class=" text-[#699BF7] font-bold text-[13px]">Fresh Mode</div>
                            </div>
                            <div v-if="store.state.dataWB.arrayDeviceOn.includes('Exhaust fan') && store.state.dataWB.arrayDeviceOn.includes('Supply high')"
                                class="flex border-[2px] border-[#36A090] pl-3 pr-3 rounded-md">
                                <div class=" text-[#36A090] font-bold text-[13px]">Flush Mode</div>
                            </div>
                            <div v-if="store.state.dataWB.arrayDeviceOn.length < 2"
                                class="flex border-[2px] border-[#777777] pl-3 pr-3 rounded-md">
                                <div class=" text-[#777777] font-bold sm:text-[13px] lg:text-[20px]">Stand by</div>
                            </div>
                        </div>
                        <div class="translate-y-[-8px] translate-x-[-20px]">
                            <div class="lg:text-[18px] lg:font-bold text-zinc-600">Supply Fan</div>
                            <div class="flex">
                                <div class="mr-2">
                                    <svg fill="#000000" width="25" height="25" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M12 3.48154C7.29535 3.48154 3.48148 7.29541 3.48148 12.0001C3.48148 16.7047 7.29535 20.5186 12 20.5186C16.7046 20.5186 20.5185 16.7047 20.5185 12.0001C20.5185 7.29541 16.7046 3.48154 12 3.48154ZM2 12.0001C2 6.47721 6.47715 2.00006 12 2.00006C17.5228 2.00006 22 6.47721 22 12.0001C22 17.5229 17.5228 22.0001 12 22.0001C6.47715 22.0001 2 17.5229 2 12.0001Z" />
                                        <path
                                            d="M12 11.3C11.8616 11.3 11.7262 11.3411 11.6111 11.418C11.496 11.4949 11.4063 11.6042 11.3533 11.7321C11.3003 11.86 11.2864 12.0008 11.3134 12.1366C11.3405 12.2724 11.4071 12.3971 11.505 12.495C11.6029 12.5929 11.7277 12.6596 11.8634 12.6866C11.9992 12.7136 12.14 12.6997 12.2679 12.6467C12.3958 12.5937 12.5051 12.504 12.582 12.3889C12.6589 12.2738 12.7 12.1385 12.7 12C12.7 11.8144 12.6262 11.6363 12.495 11.505C12.3637 11.3738 12.1857 11.3 12 11.3ZM12.35 5.00002C15.5 5.00002 15.57 7.49902 13.911 8.32502C13.6028 8.50778 13.3403 8.75856 13.1438 9.05822C12.9473 9.35787 12.8218 9.69847 12.777 10.054C13.1117 10.1929 13.4073 10.4116 13.638 10.691C16.2 9.29102 19 9.84401 19 12.35C19 15.5 16.494 15.57 15.675 13.911C15.4869 13.6029 15.232 13.341 14.9291 13.1448C14.6262 12.9485 14.283 12.8228 13.925 12.777C13.7844 13.1108 13.566 13.406 13.288 13.638C14.688 16.221 14.128 19 11.622 19C8.5 19 8.423 16.494 10.082 15.668C10.3852 15.4828 10.644 15.2332 10.84 14.9368C11.036 14.6404 11.1644 14.3046 11.216 13.953C10.8729 13.8188 10.5711 13.5967 10.341 13.309C7.758 14.695 5 14.149 5 11.65C5 8.50002 7.478 8.42302 8.304 10.082C8.48945 10.3888 8.74199 10.6496 9.04265 10.8448C9.34332 11.0399 9.68431 11.1645 10.04 11.209C10.1748 10.8721 10.3971 10.5772 10.684 10.355C9.291 7.80001 9.844 5.00002 12.336 5.00002H12.35Z" />
                                    </svg>
                                </div>
                                <div>

                                    <div v-if="!store.state.dataWB.arrayDeviceOn.includes('Supply low') && !store.state.dataWB.arrayDeviceOn.includes('Supply high')"
                                        class="flex border-2 border-[#777777] sm:pl-2 sm:pr-2 lg:pl-4 lg:pr-4  text-[#777777] rounded-md">
                                        <div class="mr-1 lg:translate-y-[2px] ">
                                            <img src="@/assets/spot_off.png" height="20" width="20" />
                                        </div>
                                        <div class="sm:translate-y-[2px]  font-bold sm:text-[10px] lg:translate-y-[-1px]  lg:text-[18px]">OFF</div>
                                    </div>
                                    <div v-if="store.state.dataWB.arrayDeviceOn.includes('Supply low') || store.state.dataWB.arrayDeviceOn.includes('Supply high')"
                                        class="flex border-2 border-[#66B6AB] sm:pl-2 sm:pr-2 lg:pl-4 lg:pr-4  text-[#66B6AB] rounded-md">
                                        <div class="mr-1 lg:translate-y-[2px]">
                                            <img src="@/assets/spot_on.png" height="20" width="20" />
                                        </div>
                                        <div class="sm:translate-y-[2px] font-bold sm:text-[10px] lg:translate-y-[-1px]  lg:text-[18px]">ON</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="translate-y-[-8px] translate-x-[-31px]">
                            <div class="lg:text-[18px] lg:font-bold text-zinc-600">Exhaust Fan</div>
                            <div class="flex">
                                <div class="mr-2">
                                    <svg fill="#000000" width="25" height="25" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M12 3.48154C7.29535 3.48154 3.48148 7.29541 3.48148 12.0001C3.48148 16.7047 7.29535 20.5186 12 20.5186C16.7046 20.5186 20.5185 16.7047 20.5185 12.0001C20.5185 7.29541 16.7046 3.48154 12 3.48154ZM2 12.0001C2 6.47721 6.47715 2.00006 12 2.00006C17.5228 2.00006 22 6.47721 22 12.0001C22 17.5229 17.5228 22.0001 12 22.0001C6.47715 22.0001 2 17.5229 2 12.0001Z" />
                                        <path
                                            d="M12 11.3C11.8616 11.3 11.7262 11.3411 11.6111 11.418C11.496 11.4949 11.4063 11.6042 11.3533 11.7321C11.3003 11.86 11.2864 12.0008 11.3134 12.1366C11.3405 12.2724 11.4071 12.3971 11.505 12.495C11.6029 12.5929 11.7277 12.6596 11.8634 12.6866C11.9992 12.7136 12.14 12.6997 12.2679 12.6467C12.3958 12.5937 12.5051 12.504 12.582 12.3889C12.6589 12.2738 12.7 12.1385 12.7 12C12.7 11.8144 12.6262 11.6363 12.495 11.505C12.3637 11.3738 12.1857 11.3 12 11.3ZM12.35 5.00002C15.5 5.00002 15.57 7.49902 13.911 8.32502C13.6028 8.50778 13.3403 8.75856 13.1438 9.05822C12.9473 9.35787 12.8218 9.69847 12.777 10.054C13.1117 10.1929 13.4073 10.4116 13.638 10.691C16.2 9.29102 19 9.84401 19 12.35C19 15.5 16.494 15.57 15.675 13.911C15.4869 13.6029 15.232 13.341 14.9291 13.1448C14.6262 12.9485 14.283 12.8228 13.925 12.777C13.7844 13.1108 13.566 13.406 13.288 13.638C14.688 16.221 14.128 19 11.622 19C8.5 19 8.423 16.494 10.082 15.668C10.3852 15.4828 10.644 15.2332 10.84 14.9368C11.036 14.6404 11.1644 14.3046 11.216 13.953C10.8729 13.8188 10.5711 13.5967 10.341 13.309C7.758 14.695 5 14.149 5 11.65C5 8.50002 7.478 8.42302 8.304 10.082C8.48945 10.3888 8.74199 10.6496 9.04265 10.8448C9.34332 11.0399 9.68431 11.1645 10.04 11.209C10.1748 10.8721 10.3971 10.5772 10.684 10.355C9.291 7.80001 9.844 5.00002 12.336 5.00002H12.35Z" />
                                    </svg>
                                </div>
                                <div>
                                    <div v-if="!store.state.dataWB.arrayDeviceOn.includes('Exhaust fan')"
                                        class="flex border-2 border-[#777777] sm:pl-2 sm:pr-2 lg:pl-4 lg:pr-4  text-[#777777] rounded-md">
                                        <div class="mr-1 lg:translate-y-[2px]">
                                            <img src="@/assets/spot_off.png" height="20" width="20" />
                                        </div>
                                        <div class="sm:translate-y-[2px] lg:translate-y-[-1px]  font-bold sm:text-[10px] lg:text-[18px]">OFF</div>
                                    </div>
                                    <div v-if="store.state.dataWB.arrayDeviceOn.includes('Exhaust fan')"
                                        class="flex border-2 border-[#66B6AB] sm:pl-2 sm:pr-2 lg:pl-4 lg:pr-4  text-[#66B6AB] rounded-md">
                                        <div class="mr-1 lg:translate-y-[2px]">
                                            <img src="@/assets/spot_on.png" height="20" width="20" />
                                        </div>
                                        <div class="sm:translate-y-[2px] lg:translate-y-[-1px] font-bold sm:text-[10px] lg:text-[18px]">ON</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <!-- System -->
                <div class="flex justify-center lg:mt-5 sm:mt-2  sm:translate-y-[-3px]">
                    <div class="mr-1">
                        <button :class="cssBtnWBParam" @click="haddleSelectPage(1)">Data Page 1/2</button>
                    </div>
                    <div class="ml-1">
                        <button :class="cssBtnWBController" @click="haddleSelectPage(2)">Control panel Page 2/2</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

@media only screen and (max-width: 800px) {
    .detail-c{
        width: 510px;
        height: 315px;
    }
    .set-c{
        width: 200px;
        height: 315px;
    }
    .card-c {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .set-img{
        width: 20px;
        height: 20px;
    }
}


@media only screen and (min-width: 801px) {
    .detail-c{
        height: 615px;
    }
    .set-c{
        width: 400px;
        height: 515px; 
    }
    .card-c {
        height: 615px; 
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .set-img{
        width: 70px;
        height: 44px;
        transform: translateY(5px);
      }
      .set-pressure{
        font-size: 25px;
        margin-left: 15px;
        transform: translateY(9px);
      }
}



.detail-c {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}


.selection-speed-fan {
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
}

.selection-non-btn {
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
}

.set-manual-con {
    display: grid;
    grid-template-columns: 1fr 2fr;
}
</style>