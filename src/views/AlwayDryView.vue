<script setup>
import AlwayDryLogoADVue from "@/components/icons/AlwayDryLogoAD.vue"
import { useRouter } from 'vue-router';
import {useStore} from "vuex"
import {onMounted, ref, computed} from 'vue'
import axios from "axios";

const router = useRouter();
const store = useStore();

const stopTime = ref("StandBy")
const isloadingIsOn = ref(false);
const millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}


onMounted(() => {
  setInterval(() => {
    const date = new Date();
    const ms = date.getTime();
    stopTime.value = store.state.dataAD.stopTime - ms <= 0?'StandBy':millisToMinutesAndSeconds(store.state.dataAD.stopTime - ms)
  }, 2000);
})



const percentBattery = ref(100);

onMounted(() => {
    store.state.selectionHomePage = false
    store.state.pageNow = "ALWAYS DRY"
});



const haddleExhaustFan = async (evt) => {
    const command = {
        system: "zone1",
        command: evt
    }
    const status = await axios.post("http://localhost:8090/api/forces/ad/exhaust", command);
    if(status.data !== "ok"){
        alert(status.status)
    }
}

const haddleDryFan = async (evt) => {
    console.log(evt)
    const command = {
        system: "zone1",
        command: evt
    }
    const status = await axios.post("http://localhost:8090/api/forces/ad/dryfan", command);
    if(status.data !== "ok"){
        alert(status.status)
    }
}   

// const haddleBtnOnOff = () => {
//     if(store.state.alwayDryStte){
//       store.state.alwayDryStte = false;
//     }else{
//       store.state.alwayDryStte = true;
//     }
//   }


  const haddleOnOff = async (command) => {
    isloadingIsOn.value = true
    console.log(command)
    if(command){
        const warp = {
            system: 'zone1',
            command: false
        }
        const status = await axios.post(`http://localhost:8090/api/update/ad/onOff`, warp);
        if(status.data === 'ok'){
            setTimeout(() => {
                isloadingIsOn.value = false
            }, 1500);
        }else{
            console.log("err => ",status.data)
            setTimeout(() => {
                isloadingIsOn.value = false
            }, 1500);
        }
    }else{
        const warp = {
            system: 'zone1',
            command: true
        }
        const status = await axios.post(`http://localhost:8090/api/update/ad/onOff`, warp);
        if(status.data === 'ok'){
            setTimeout(() => {
                isloadingIsOn.value = false
            }, 1500);
        }else{
            console.log("err => ",status.data)
            setTimeout(() => {
                isloadingIsOn.value = false
            }, 1500);
        }

    }
}


</script>

<template>
    <div class="flex">
        <div class="w-[200px] h-[315px] ml-8">
            <div>
                <AlwayDryLogoADVue class="m-auto absolute translate-y-[-75px] translate-x-[55px]" />
            </div>
            <div class="card-c rounded-lg h-[315px]">
                <div class="title-c text-center">
                    <div class="text-[#ED7D31] text-[14px] font-bold translate-y-[25px]">ALWAY DRY</div>
                </div>
                <div class="status-c m-auto w-[180px] h-[85px] bg-[#F3F4F8] mt-10 rounded-lg">
                    <div class="flex">
                        <div class="ml-4 mt-3">
                            <button @click="haddleOnOff(store.state.dataAD.isOn)" >
                                <img v-if="store.state.dataAD.isOn"  src="@/assets/btn_on_ad.png" width="38" height="38"/>
                                <img v-if="!store.state.dataAD.isOn" src="@/assets/btn_off.png" width="38" height="38"/>
                            </button>
                            <div class="text-[13px] font-bold translate-x-[-3px]">
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
                <div class="data-c m-auto bg-[#F3F4F8] w-[180px] h-[65px] mt-2 rounded-lg">
                    <div class="set-timing font-bold flex justify-around">
                        <div class="mt-3 text-[#36A090]">
                            <!-- <div class="text-[14px] translate-x-[2px]">15:00</div>
                            <div class="translate-y-[-5px] translate-x-[7px] text-[13px]">Mins</div> -->
                            <div v-if="stopTime !== 'StandBy'" class="translate-x-[3px]">{{stopTime}}</div>
                            <div v-if="stopTime !== 'StandBy'" class="translate-y-[-5px] translate-x-[7px] text-[14px]">Mins</div>
                            <div v-if="stopTime === 'StandBy'" class="mt-2 text-[14px]">StandBy</div>
                        </div>
                        <div class="text-[11px] mt-2 translate-y-[4px] translate-x-[8px] flex">
                            <div class="mt-2">
                                <img height="20" width="20" src="@/assets/TimeRe.png"/>
                            </div>
                            <div class="ml-3">
                                <div>Time</div>
                                <div>Remaining</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="qta-c m-auto bg-[#F3F4F8] w-[180px] h-[65px] mt-2 rounded-lg">
                    <div class="text-[14px] font-bold mt-1 ml-1">Sensor</div>
                    <div class="flex justify-around mt-2">
                        <div class="translate-y-[-3px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                                <path fill-rule="evenodd"
                                    d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="flex translate-x-[8px]">
                            <div>
                                <img v-if="percentBattery > 60" class="translate-y-[5px]" src="@/assets/bat_max.png" width="33" height="33"/>
                                <img v-if="percentBattery <= 60 && percentBattery > 50" class="translate-y-[10px]" src="@/assets/bat_max_low.png" width="33" height="33"/>
                                <img v-if="percentBattery <= 50 && percentBattery > 30" class="translate-y-[10px]" src="@/assets/bat_low.png" width="33" height="33"/>
                                <img v-if="percentBattery <= 30 && percentBattery >= 0" class="translate-y-[10px]" src="@/assets/bat_empty.png" width="33" height="33"/>
                            </div>
                            <div class="text-[#008E29] ml-2 translate-y-[3px] text-[14px] font-bold">
                                100%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="detail-c w-[510px] h-[315px] rounded-lg ml-5">
                <div class="h-[10px]"></div>
                <div class="bg-[#F3F4F8] w-[500px] h-[295px] m-auto rounded-md">
                    <div class="translate-y-[13px] ml-2 CustomFont font-bold text-[14px] text-[#2A83B5]">Control panel</div>
                    <div class="grid grid-cols-3">  
                        <div class="mt-[30px] ml-2 border-[1px] border-zinc-500 rounded-lg h-[230px]">
                            <div class="text-center mt-3 font-bold text-[14px]">
                                <div>Exhaust Fan</div>
                            </div>
                            <div class="flex justify-center mt-4">
                                <img src="@/assets/ex_fan.png" width="130" height="130"/>
                            </div>
                            <div>
                                <div class="mt-2">
                                    <div>
                                        <button 
                                            v-if="!store.state.dataAD.arrayDeviceActive.includes('Exhaust Fan')" 
                                            class="flex justify-center m-auto border-2 border-[#777777] pl-3 pr-3 pt-1 pb-1 text-[#777777] rounded-md" 
                                            @click="haddleExhaustFan('exhaust_on')"
                                            >
                                            <div class="mr-1" >
                                                <img  src="@/assets/spot_off.png" height="15" width="15" />
                                            </div>
                                            <div class="font-bold text-[10px]">OFF</div>
                                        </button>
                                        <button  
                                            v-if="store.state.dataAD.arrayDeviceActive.includes('Exhaust Fan')" 
                                            class="flex justify-center m-auto border-2 border-[#36A090] pl-3 pr-3 pt-1 pb-1 text-[#36A090] rounded-md" 
                                            @click="haddleExhaustFan('exhaust_off')"
                                            >
                                            <div class="mr-1" >
                                                <img src="@/assets/spot_on.png" height="15" width="15"/>
                                            </div>
                                            <div class="font-bold text-[10px]">ON</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-[30px] ml-2 mr-2 border-[1px] border-zinc-500 rounded-lg h-[230px]">
                            <div class="text-center mt-3 font-bold text-[14px]">
                                <div>Dry Fan</div>
                                <div class="flex justify-center mt-4">
                                    <img src="@/assets/sp_fan.png" width="125" height="125"/>
                                </div>
                                <div>
                                    <div class="mt-3">
                                        <div>
                                            <button 
                                                v-if="!store.state.dataAD.arrayDeviceActive.includes('Dry Fan')" 
                                                class="flex justify-center m-auto border-2 border-[#777777] pl-3 pr-3 pt-1 pb-1 text-[#777777] rounded-md" 
                                                @click="haddleDryFan('dryFan_on')"
                                            >
                                                <div class="mr-1" >
                                                    <img  src="@/assets/spot_off.png" height="15" width="15" />
                                                </div>
                                                <div class="font-bold text-[10px]">OFF</div>
                                            </button>
                                            <button  
                                                v-if="store.state.dataAD.arrayDeviceActive.includes('Dry Fan')" 
                                                class="flex justify-center m-auto border-2 border-[#36A090] pl-3 pr-3 pt-1 pb-1 text-[#36A090] rounded-md" 
                                                @click="haddleDryFan('dryFan_off')"
                                            >
                                                <div class="mr-1" >
                                                    <img src="@/assets/spot_on.png" height="15" width="15"/>
                                                </div>
                                                <div class="font-bold text-[10px]">ON</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-[30px] mr-2 border-[1px] border-zinc-500 rounded-lg h-[230px]">
                            <div class="text-center mt-3 font-bold text-[14px]">
                                <div>SENSOR</div>
                                <div class="flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[130] h-[130px]">
                                        <path fill-rule="evenodd" d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <div class="mt-5 translate-y-[3px]">
                                        <div>
                                            <button class="flex justify-center m-auto border-2 border-[#36A090] pl-3 pr-3 pt-1 pb-1 text-[#36A090] rounded-md" >
                                                <div class="mr-1" >
                                                    <img src="@/assets/spot_on.png" height="15" width="15"/>
                                                </div>
                                                <div class="font-bold text-[10px]">ON</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="bg-[#F3F4F8] w-[500px] h-[100px] m-auto rounded-md">
                    <div class="text-[#2A83B5] text-[14px] font-bold ml-2">Manual mode</div>
                    <div class="flex justify-evenly mt-3">
                        <div>
                            <div class="flex">
                                <div>
                                    <button @click="haddleForceExaust">
                                        <img v-if="store.state.alwayDryExhaustFan" src="@/assets/btn_on_ad.png" width="38" height="38"/>
                                        <img v-if="!store.state.alwayDryExhaustFan" src="@/assets/btn_off.png" width="38" height="38"/>
                                    </button>
                                </div>
                                <div>
                                    <div class="text-[14px] text-[#36A090] pl-2 pr-2 ml-3 rounded-md border-[2px] border-[#36A090] translate-y-[6px]">Exhaust fan</div>
                                </div>
                            </div>
                        </div>
                        <div class="border-l-2 border-blue-300 h-[70px] translate-y-[-20px]"></div>
                        <div class="flex">
                            <div>
                                <button @click="haddleForceDryFan">
                                    <img v-if="store.state.alwayDryDryFanState" src="@/assets/btn_on_ad.png" width="38" height="38"/>
                                    <img v-if="!store.state.alwayDryDryFanState" src="@/assets/btn_off.png" width="38" height="38"/>
                                </button>
                            </div>
                            <div>
                                <div class="text-[14px] text-[#36A090] pl-2 pr-2 ml-3 rounded-md border-[2px] border-[#36A090] translate-y-[6px]">Dry fan</div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="w-[500px] h-[185px] bg-[#F3F4F8] mt-3 m-auto rounded-md">
                    <div class="text-[#2A83B5] text-[14px] font-bold ml-2">System</div>
                    <div class="grid grid-cols-3 mt-10 ml-2">
                        <div>
                            <div class="text-[14px] ml-5">Exhaust fan</div>
                            <div class="flex mt-1 ml-5">
                                <div class="mr-2">
                                    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.48154C7.29535 3.48154 3.48148 7.29541 3.48148 12.0001C3.48148 16.7047 7.29535 20.5186 12 20.5186C16.7046 20.5186 20.5185 16.7047 20.5185 12.0001C20.5185 7.29541 16.7046 3.48154 12 3.48154ZM2 12.0001C2 6.47721 6.47715 2.00006 12 2.00006C17.5228 2.00006 22 6.47721 22 12.0001C22 17.5229 17.5228 22.0001 12 22.0001C6.47715 22.0001 2 17.5229 2 12.0001Z"/>
                                        <path d="M12 11.3C11.8616 11.3 11.7262 11.3411 11.6111 11.418C11.496 11.4949 11.4063 11.6042 11.3533 11.7321C11.3003 11.86 11.2864 12.0008 11.3134 12.1366C11.3405 12.2724 11.4071 12.3971 11.505 12.495C11.6029 12.5929 11.7277 12.6596 11.8634 12.6866C11.9992 12.7136 12.14 12.6997 12.2679 12.6467C12.3958 12.5937 12.5051 12.504 12.582 12.3889C12.6589 12.2738 12.7 12.1385 12.7 12C12.7 11.8144 12.6262 11.6363 12.495 11.505C12.3637 11.3738 12.1857 11.3 12 11.3ZM12.35 5.00002C15.5 5.00002 15.57 7.49902 13.911 8.32502C13.6028 8.50778 13.3403 8.75856 13.1438 9.05822C12.9473 9.35787 12.8218 9.69847 12.777 10.054C13.1117 10.1929 13.4073 10.4116 13.638 10.691C16.2 9.29102 19 9.84401 19 12.35C19 15.5 16.494 15.57 15.675 13.911C15.4869 13.6029 15.232 13.341 14.9291 13.1448C14.6262 12.9485 14.283 12.8228 13.925 12.777C13.7844 13.1108 13.566 13.406 13.288 13.638C14.688 16.221 14.128 19 11.622 19C8.5 19 8.423 16.494 10.082 15.668C10.3852 15.4828 10.644 15.2332 10.84 14.9368C11.036 14.6404 11.1644 14.3046 11.216 13.953C10.8729 13.8188 10.5711 13.5967 10.341 13.309C7.758 14.695 5 14.149 5 11.65C5 8.50002 7.478 8.42302 8.304 10.082C8.48945 10.3888 8.74199 10.6496 9.04265 10.8448C9.34332 11.0399 9.68431 11.1645 10.04 11.209C10.1748 10.8721 10.3971 10.5772 10.684 10.355C9.291 7.80001 9.844 5.00002 12.336 5.00002H12.35Z"/>
                                    </svg>
                                </div>
                                <div  v-if="store.state.cssBtnADExhaustFan === 'OFF'" class="flex border-2 border-[#777777] pl-3 pr-3 pt-1 pb-1 text-[#777777] rounded-md">
                                    <div class="mr-1">
                                        <img src="@/assets/spot_off.png" height="20" width="20" />
                                    </div>
                                    <div class="translate-y-[2px] font-bold text-[10px]">{{store.state.cssBtnADExhaustFan}}</div>
                                </div>
                                <div  v-if="store.state.cssBtnADExhaustFan === 'ON'" class="flex border-2 border-[#66B6AB] pl-3 pr-3 pt-1 pb-1 text-[#66B6AB] rounded-md">
                                    <div class="mr-1">
                                        <img src="@/assets/spot_on.png" height="20" width="20"/>
                                    </div>
                                    <div class="translate-y-[2px] font-bold text-[10px]">{{store.state.cssBtnADExhaustFan}}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="text-[14px]  ml-5">Dry Fan</div>
                            <div class="flex mt-1  ml-5">
                                <div class="mr-2">
                                    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.48154C7.29535 3.48154 3.48148 7.29541 3.48148 12.0001C3.48148 16.7047 7.29535 20.5186 12 20.5186C16.7046 20.5186 20.5185 16.7047 20.5185 12.0001C20.5185 7.29541 16.7046 3.48154 12 3.48154ZM2 12.0001C2 6.47721 6.47715 2.00006 12 2.00006C17.5228 2.00006 22 6.47721 22 12.0001C22 17.5229 17.5228 22.0001 12 22.0001C6.47715 22.0001 2 17.5229 2 12.0001Z"/>
                                        <path d="M12 11.3C11.8616 11.3 11.7262 11.3411 11.6111 11.418C11.496 11.4949 11.4063 11.6042 11.3533 11.7321C11.3003 11.86 11.2864 12.0008 11.3134 12.1366C11.3405 12.2724 11.4071 12.3971 11.505 12.495C11.6029 12.5929 11.7277 12.6596 11.8634 12.6866C11.9992 12.7136 12.14 12.6997 12.2679 12.6467C12.3958 12.5937 12.5051 12.504 12.582 12.3889C12.6589 12.2738 12.7 12.1385 12.7 12C12.7 11.8144 12.6262 11.6363 12.495 11.505C12.3637 11.3738 12.1857 11.3 12 11.3ZM12.35 5.00002C15.5 5.00002 15.57 7.49902 13.911 8.32502C13.6028 8.50778 13.3403 8.75856 13.1438 9.05822C12.9473 9.35787 12.8218 9.69847 12.777 10.054C13.1117 10.1929 13.4073 10.4116 13.638 10.691C16.2 9.29102 19 9.84401 19 12.35C19 15.5 16.494 15.57 15.675 13.911C15.4869 13.6029 15.232 13.341 14.9291 13.1448C14.6262 12.9485 14.283 12.8228 13.925 12.777C13.7844 13.1108 13.566 13.406 13.288 13.638C14.688 16.221 14.128 19 11.622 19C8.5 19 8.423 16.494 10.082 15.668C10.3852 15.4828 10.644 15.2332 10.84 14.9368C11.036 14.6404 11.1644 14.3046 11.216 13.953C10.8729 13.8188 10.5711 13.5967 10.341 13.309C7.758 14.695 5 14.149 5 11.65C5 8.50002 7.478 8.42302 8.304 10.082C8.48945 10.3888 8.74199 10.6496 9.04265 10.8448C9.34332 11.0399 9.68431 11.1645 10.04 11.209C10.1748 10.8721 10.3971 10.5772 10.684 10.355C9.291 7.80001 9.844 5.00002 12.336 5.00002H12.35Z"/>
                                    </svg>
                                </div>
                                <div  v-if="store.state.cssBtnADDryFan === 'OFF'" class="flex border-2 border-[#777777] pl-3 pr-3 pt-1 pb-1 text-[#777777] rounded-md">
                                    <div class="mr-1">
                                        <img src="@/assets/spot_off.png" height="20" width="20" />
                                    </div>
                                    <div class="translate-y-[2px] font-bold text-[10px]">{{store.state.cssBtnADDryFan}}</div>
                                </div>
                                <div  v-if="store.state.cssBtnADDryFan === 'ON'" class="flex border-2 border-[#66B6AB] pl-3 pr-3 pt-1 pb-1 text-[#66B6AB] rounded-md">
                                    <div class="mr-1">
                                        <img src="@/assets/spot_on.png" height="20" width="20"/>
                                    </div>
                                    <div class="translate-y-[2px] font-bold text-[10px]">{{store.state.cssBtnADDryFan}}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="text-[14px]  ml-5">Sensor</div>
                            <div class="flex mt-1  ml-5">
                                <div class="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
                                        <path fill-rule="evenodd" d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="flex border-2 border-[#66B6AB]  pl-3 pr-3 pt-1 pb-1 text-[#66B6AB] rounded-md">
                                    <div class="mr-1">
                                        <img src="@/assets/spot_on.png" height="20" width="20"/>
                                    </div>
                                    <div class="translate-y-[2px] font-bold text-[10px]">ON</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
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