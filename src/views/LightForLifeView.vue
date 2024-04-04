<script setup>

import {useStore} from "vuex"
import { useRouter } from 'vue-router';
import {onMounted, ref } from 'vue'
import LightForLifeLogoVue from "@/components/icons/LightForLifeLogo.vue"
import axios from "axios";

const store = useStore();
const router = useRouter();
const isloadingIsOn = ref(false);

onMounted(() => {
    store.state.selectionHomePage = false
    store.state.pageNow = "LIGHT FOR LIFE"
});


  const haddleOnOff = async (command) => {
    isloadingIsOn.value = true
    if(command){
        const warp = {
            system: "zone1",
            command:false
        }
        await axios.post(`http://localhost:8090/api/update/lfl/onOff`, warp);
        setTimeout(() => {
            isloadingIsOn.value = false
        }, 1500);
    }else{
        const warp = {
            system: "zone1",
            command:true
        }
        await axios.post(`http://localhost:8090/api/update/lfl/onOff`, warp);
        setTimeout(() => {
            isloadingIsOn.value = false
        }, 1500);
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
                    <div class="text-[#D29500] text-[14px]  font-bold translate-y-[25px]">LIGHT FOR LIFE</div>
                </div>
                <div class="status-c bg-[#F3F4F8] rounded-lg w-[180px] h-[85px] mt-10 m-auto">
                    <div class="flex">
                        <div class="ml-4 mt-3">
                            <button @click="haddleOnOff(store.state.dataLFL.isLightOn)">
                                <img v-if="store.state.dataLFL.isLightOn" src="@/assets/btn_on_lfl.png" width="38" height="38"/>
                                <img v-if="!store.state.dataLFL.isLightOn" src="@/assets/btn_off.png" width="38" height="38"/>
                            </button>
                            <div class="text-[13px] font-bold">
                                ON/OFF
                            </div>
                        </div>
                        <div class="ml-5 mt-5">
                            <div class="font-bold text-[12px]">
                                Status
                            </div>
                            <div
                                class="border-2 border-[#36A090] w-[56px] text-[12px] font-bold text-center rounded-md text-[#36A090]">
                                Normal
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aqi-c bg-[#F3F4F8] rounded-lg w-[180px] h-[65px] mt-2 m-auto">
                    <div class="absolute flex ml-5 mt-6">
                        <div class="mr-1">
                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-[12px] h-[12px] translate-y-[2px]">
                                <path
                                    d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                        </div>
                        <div class="text-[10px] font-bold">
                            {{store.state.dataLFL.lowBattery.Battery}}%
                        </div>
                    </div>
                    <div class="flex">
                        <div class=" ml-3">
                            <svg v-if="store.state.dataLFL.lowBattery.Battery <= 50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#AA0000" class="w-[60px] h-[60px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
                            </svg>
                            <svg v-if="store.state.dataLFL.lowBattery.Battery <= 79 && store.state.dataLFL.lowBattery.Battery > 50 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#D29500" class="w-[60px] h-[60px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
                            </svg>
                            <svg v-if="store.state.dataLFL.lowBattery.Battery > 79" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#36A090" class="w-[60px] h-[60px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
                            </svg>
                        </div>
                        <div class="text-[10px] translate-x-[10px] mt-5 ml-2 font-bold">
                            <div v-if="store.state.dataLFL.lowBattery.Battery <= 50" class="text-[#CB2A28]">
                                <div>Need replace</div>
                                <div>new battery</div>
                            </div>
                            <div v-if="store.state.dataLFL.lowBattery.Battery <= 79 && store.state.dataLFL.lowBattery.Battery > 50" class="text-[#D29500]">
                                <div>Your battery</div>
                                <div>health is Fair</div>
                            </div>
                            <div v-if="store.state.dataLFL.lowBattery.Battery > 79" class="text-[#36A090]">
                                <div>Your battery</div>
                                <div>health is Good</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="detail-c w-[510px] h-[315px] rounded-lg ml-5">
                <div class="h-[10px]"></div>
                <div class="w-[500px] h-[300px] bg-[#F3F4F8] rounded-md m-auto">
                    <div class="text-[#2A83B5] text-[14px] font-bold ml-1">System</div>
                    <div >
                        <div class="grid grid-cols-2 mt-3" >
                            <div v-for="(item, idx) in store.state.dataLFL.arrayBattery" :key="idx"  class="">
                                <div class="text-[14px] ml-2 mt-5" v-if="item.subSystem === 'LFL_LIGHT_BEDROOM'">Light Bedroom {{idx + 1}}</div>
                                <div class="flex mt-3" v-if="item.subSystem === 'LFL_LIGHT_BEDROOM'">
                                    <div class="mr-2">
                                        <!-- <LightLogoVue/> -->
                                        <img v-if="item.isRunning" src="@/assets/lfl_on_light.png" width="40" height="40"/>
                                        <img v-if="!item.isRunning" src="@/assets/lfl_off_light.png" width="40" height="40"/>
                                    </div>
                                    <div class="translate-y-[10px] mr-3">
                                        <!-- <BatteryLowLogoVue/> -->
                                        <img v-if="item.battery > 60"  src="@/assets/bat_max.png" width="40" height="40"/>
                                        <img v-if="item.battery <= 60 && item.battery > 50"  src="@/assets/bat_max_low.png" width="40" height="40"/>
                                        <img v-if="item.battery <= 50 && item.battery > 30"  src="@/assets/bat_low.png" width="40" height="40"/>
                                        <img v-if="item.battery <= 30 && item.battery >= 0"  src="@/assets/bat_empty.png" width="40" height="40"/>
                                    </div>
                                    <div class="font-bold text-[13px] translate-y-[10px]">
                                        <div class="flex">
                                            <div class="text-[#36A090]" v-if="item.battery > 60">{{item.battery}}%</div>
                                            <div class="text-[#00B050]" v-if="item.battery <= 60 && item.battery > 50">{{item.battery}}%</div>
                                            <div class="text-[#FFFA7D]" v-if="item.battery <= 50 && item.battery > 30">{{item.battery}}%</div>
                                            <div class="text-[#FF0000]" v-if="item.battery <= 30 && item.battery >= 0">{{item.battery}}%</div>
                                            <div class="text-red-700" v-if="item.battery <= 30">Charge!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 mt-3" >
                            <div v-for="(item, idx) in store.state.dataLFL.arrayBattery" :key="idx"  class="">
                                <div class="text-[14px] ml-2 mt-5" v-if="item.subSystem === 'LFL_LIGHT_BATHROOM'">Light Bedroom {{idx + 1}}</div>
                                <div class="flex mt-3" v-if="item.subSystem === 'LFL_LIGHT_BATHROOM'">
                                    <div class="mr-2">
                                        <!-- <LightLogoVue/> -->
                                        <img v-if="item.isRunning" src="@/assets/lfl_on_light.png" width="40" height="40"/>
                                        <img v-if="!item.isRunning" src="@/assets/lfl_off_light.png" width="40" height="40"/>
                                    </div>
                                    <div class="translate-y-[10px] mr-3">
                                        <!-- <BatteryLowLogoVue/> -->
                                        <img v-if="item.battery > 60"  src="@/assets/bat_max.png" width="40" height="40"/>
                                        <img v-if="item.battery <= 60 && item.battery > 50"  src="@/assets/bat_max_low.png" width="40" height="40"/>
                                        <img v-if="item.battery <= 50 && item.battery > 30"  src="@/assets/bat_low.png" width="40" height="40"/>
                                        <img v-if="item.battery <= 30 && item.battery >= 0"  src="@/assets/bat_empty.png" width="40" height="40"/>
                                    </div>
                                    <div class="font-bold text-[13px] translate-y-[10px]">
                                        <div class="flex">
                                            <div class="text-[#36A090]" v-if="item.battery > 60">{{item.battery}}%</div>
                                            <div class="text-[#00B050]" v-if="item.battery <= 60 && item.battery > 50">{{item.battery}}%</div>
                                            <div class="text-[#FFFA7D]" v-if="item.battery <= 50 && item.battery > 30">{{item.battery}}%</div>
                                            <div class="text-[#FF0000]" v-if="item.battery <= 30 && item.battery >= 0">{{item.battery}}%</div>
                                            <div class="text-red-700" v-if="item.battery <= 30">Charge!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-c {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.detail-c {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}</style>