<script setup>
import CarbonLogoVue from "../icons/CarbonLogo.vue"
import HumidLogoVue from "../icons/HumidLogo.vue"
import PMLogoVue from "../icons/PMLogo.vue"
import TempLogoVue from "../icons/TempLogo.vue"
import VOCsLogoVue from "../icons/VOCsLogo.vue"

import {useStore} from "vuex"
const store = useStore();
</script>


<template>
    <div class="text-[18px] mt-[95px] translate-x-[-40px] onset-border w-[450px] pr-8 h-[290px] rounded-lg">
        <div class="grid grid-cols-3 ml-3 mt-6">
            <div class="">
                <div class="">Temperature</div>
                <div class="flex">
                    <div>
                        <TempLogoVue/>
                    </div>
                    <div class="text-[14px] translate-y-[10px] ml-1">
                        <span class="font-bold ">{{store.state.dataWB.temp}}</span>
                        <span class="ml-1" style='font-size:15px;'>&#8451;</span>
                    </div>
                </div>
            </div>
            <div class="ml-7">
                <div class="">PM2.5</div>
                <div class="flex">
                    <span><PMLogoVue/></span>
                    <span class="font-bold text-[14px] translate-y-[10px] ml-3">{{store.state.dataWB.pm25}}</span>
                    <span class="text-[14px] translate-y-[10px] ml-1 ">µg/m3</span>
                </div>
            </div>
            <div class="ml-10">
                <div class="">CO2</div>
                <div class="flex">
                    <span><CarbonLogoVue/></span>
                    <span class="font-bold text-[14px] translate-y-[10px] ml-1">{{store.state.dataWB.co2}}</span>
                    <span class="text-[14px] translate-y-[10px] ml-2">ppm</span>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-3 ml-3 mt-[50px]">
            <div>
                <div class="">VOCs</div>
                <div class="flex">
                    <span><VOCsLogoVue/></span>
                    <span class="font-bold text-[14px] translate-y-[10px] ml-3">{{store.state.dataWB.voc}}</span>
                    <span class="text-[14px] translate-y-[10px] ml-1">ppm</span>
                </div>
            </div>
            <div class="ml-7">
                <div class="">Humidity</div>
                <div class="flex translate-y-[5px]" >
                    <span class="translate-y-[-10px]"><HumidLogoVue/></span>
                    <span class="font-bold text-[14px] translate-y-[5px]">{{store.state.dataWB.humid}}%</span>
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

.onset-border{
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}
</style>