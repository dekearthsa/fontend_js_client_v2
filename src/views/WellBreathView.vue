<script setup>
import CarbonLogoVue from "../components/icons/CarbonLogo.vue"
import FanLogoVue from "../components/icons/FanLogo.vue"
import FilterLogoVue from "../components/icons/FilterLogo.vue"
import HumidLogoVue from "../components/icons/HumidLogo.vue"
import PMLogoVue from "../components/icons/PMLogo.vue"
import TempLogoVue from "../components/icons/TempLogo.vue"
import VOCsLogoVue from "../components/icons/VOCsLogo.vue"
import WellBreathLogoVue from "../components/icons/WellBreathLogo.vue"

import { useRouter } from 'vue-router';

const router = useRouter();

const haddleRouteHome = () => {
    router.push("/")
}


</script>

<template>
    <div class="flex">
        <div class="w-[180px] h-[200px] ml-8">
            <div>
                <WellBreathLogoVue class="m-auto absolute translate-y-[-75px] translate-x-[45px]"/>
            </div>

            <div class="card-c rounded-lg h-[215px]">
                <div class="title-c text-center">
                    <div class="text-[#00B0F0] font-bold">WELL BREATH</div>
                </div>
                <div class="status-c bg-[#E5F6F7] rounded-lg w-[170px] h-[65px] mt-2 m-auto">
                    <div class="flex">
                        <div class="ml-1 mt-1">
                            <button class="btn-c rounded-full w-[40px] h-[40px] bg-[#C5F0FF]">
                                <div class="rounded-full m-auto  w-[36px] h-[36px] border-2 border-[#00B0F0]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="#00B0F0" class="w-6 h-6 m-auto translate-y-[3px]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                                    </svg>
                                </div>
                            </button>
                            <div class="text-[10px] font-bold">
                                ON/OFF
                            </div>
                        </div>
                        <div class="ml-4 mt-1">
                            <div class="font-bold text-[12px]">
                                Status
                            </div>
                            <div
                                class="border-2 border-[#36A090] w-[50px] text-[10px] font-bold text-center rounded-md text-[#36A090]">
                                Normal
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aqi-c bg-[#E5F6F7] rounded-lg w-[170px] h-[45px] mt-2 m-auto">
                    <div class="">
                        <div class="text-[10px] font-bold ml-1 mt-1">AQI</div>
                    </div>
                    <div class="flex justify-center">
                        <div class="translate-y-[-5px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#F4B8B7" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#CB2A28" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                            </svg>
                        </div>
                        <div class="text-[#CB2A28] text-[12px] font-bold">
                            Unhealthy
                        </div>
                    </div>
                </div>
                <div class="battery-c bg-[#E5F6F7] rounded-lg w-[170px] h-[47px] mt-2 m-auto">
                    <div class="text-[11px] font-bold mt-1 ml-1">Filter</div>
                    <div class="flex justify-around">
                        <div>
                            <FilterLogoVue class="translate-y-[-3px]" />
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
            <div class="detail-c w-[374px] h-[215px] rounded-lg ml-5">
                <div class="h-[10px]"></div>
                <div class="bg-[#E5F6F7] w-[361px] h-[140px] m-auto rounded-md">
                    <div class="title-detail text-[#2A83B5] font-bold ml-2 text-[14px]">IAQ</div>
                    <div class="text-[14px]">
                        <div class="grid grid-cols-3 ml-3">
                            <div>
                                <div class="font-bold">Temperature</div>
                                <div class="flex">
                                    <div>
                                        <TempLogoVue/>
                                    </div>
                                    <div>
                                        <span class="font-bold">25.0</span>
                                        <span style='font-size:15px;'>&#8451;</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">PM2.5</div>
                                <div class="flex">
                                    <span><PMLogoVue/></span>
                                    <span class="font-bold">115.0</span>
                                    <span>µg/m3</span>
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">CO2</div>
                                <div class="flex">
                                    <span><CarbonLogoVue/></span>
                                    <span class="font-bold">115</span>
                                    <span>ppm</span>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 ml-3">
                            <div>
                                <div class="font-bold">VOCs</div>
                                <div class="flex">
                                    <span><VOCsLogoVue/></span>
                                    <span class="font-bold">90</span>
                                    <span>ppm</span>
                                </div>
                            </div>
                            <div>
                                <div class="font-bold">Humidity</div>
                                <div class="flex">
                                    <span><HumidLogoVue/></span>
                                    <span class="font-bold">70%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div class="w-[361px] h-[55px] bg-[#E5F6F7] mt-1 m-auto rounded-md">
                    <div class="title-detail text-[#2A83B5] font-bold ml-2 text-[14px]">System</div>
                    <div class="flex justify-around text-[14px]">
                        <div class="translate-y-[5px]">
                            <button class="btn-c rounded-full w-[20px] h-[20px] bg-[#C5F0FF]">
                                <div class="rounded-full m-auto  w-[20px] h-[20px] border-2 border-[#00B0F0]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="#00B0F0" class="w-3 h-3 m-auto translate-y-[3px]">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div class="translate-y-[-10px]">
                            <div>Mode</div>
                            <div class="border-[2px] border-[#699BF7] pl-1 pr-1 rounded-md text-[#699BF7] font-bold text-[10px]">Night Mode</div>
                        </div>
                        <div class="translate-y-[-10px]">
                            <div>Supply Fan</div>
                            <div class="flex">
                                <div class="mr-2">
                                    <FanLogoVue/>
                                </div>
                                <div>
                                    ON
                                </div>
                            </div>
                        </div>
                        <div class="translate-y-[-10px]">
                            <div>Exhaust Fan</div>
                            <div class="flex">
                                <div class="mr-2">
                                    <FanLogoVue/>
                                </div>
                                <div>
                                    ON
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center m-auto mt-2">
        <button class="text-[#2A83B5]" @click="haddleRouteHome">
            <div class="flex">
                <span class="mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>
                </span>
                <span>HOME</span>
            </div>
        </button>
    </div>
</template>

<style scoped>
.card-c{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.detail-c{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>