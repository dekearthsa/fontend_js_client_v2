<script setup>
import CarbonLogoVue from "../components/icons/CarbonLogo.vue"
import FanLogoVue from "../components/icons/FanLogo.vue"
import FilterLogoVue from "../components/icons/FilterLogo.vue"
import HumidLogoVue from "../components/icons/HumidLogo.vue"
import PMLogoVue from "../components/icons/PMLogo.vue"
import TempLogoVue from "../components/icons/TempLogo.vue"
import VOCsLogoVue from "../components/icons/VOCsLogo.vue"
import WellBreathLogoVue from "../components/icons/WellBreathLogo.vue"
import SpotLogoVue from "../components/icons/SpotLogo.vue"

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
                <WellBreathLogoVue class="m-auto absolute translate-y-[-75px] translate-x-[45px]" />
            </div>

            <div class="card-c rounded-lg h-[215px]">
                <div class="title-c text-center">
                    <div class="text-[#ED7D31] font-bold">ALWAY DRY</div>
                </div>
                <div class="status-c m-auto w-[170px] h-[65px] bg-[#E5F6F7] mt-2 rounded-lg">
                    <div class="flex">
                        <div class="ml-1 mt-1">
                            <button class="btn-c rounded-full w-[40px] h-[40px] bg-[#FFF2D5]">
                                <div class="rounded-full m-auto  w-[36px] h-[36px] border-2 border-[#ED7D31]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="#ED7D31" class="w-6 h-6 m-auto translate-y-[3px]">
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
                <div class="data-c m-auto bg-[#E5F6F7] w-[170px] h-[45px] mt-2 rounded-lg">
                    <div class="set-timing font-bold flex justify-around">
                        <div class="mt-1 text-[#36A090]">
                            <div class="translate-x-[3px]">15</div>
                            <div class="translate-y-[-5px] text-[10px]">Mins</div>
                        </div>
                        <div class="text-[10px] mt-3 translate-y-[4px]">
                            Time Remaining
                        </div>
                    </div>
                </div>
                <div class="qta-c m-auto bg-[#E5F6F7] w-[170px] h-[45px] mt-2 rounded-lg">
                    <div class="text-[11px] font-bold mt-1 ml-1">Sensor</div>
                    <div class="flex justify-around">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd"
                                    d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                    clip-rule="evenodd" />
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
            <div class="detail-c w-[374px] h-[215px] rounded-lg ml-5">
                <div class="h-[10px]"></div>
                <div class="bg-[#E5F6F7] w-[361px] h-[75px] m-auto rounded-md">
                    <div class="text-[#2A83B5] text-[14px] font-bold ml-2">Mode</div>
                    <div class="flex justify-evenly">
                        <div>
                            <div class="flex">
                                <div>
                                    <button class="btn-c rounded-full w-[40px] h-[40px] bg-[#C5F0FF]">
                                        <div class="rounded-full m-auto  w-[36px] h-[36px] border-2 border-[#00B0F0]">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="#00B0F0" class="w-6 h-6 m-auto translate-y-[3px]">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <div class="text-[10px] text-[#36A090] pl-2 pr-2 ml-3 rounded-md border-[2px] border-[#36A090] translate-y-[10px]">Normal</div>
                                </div>
                            </div>
                        </div>
                        <div class="border-l-2 border-blue-300 translate-y-[-20px]"></div>
                        <div class="translate-y-[-15px]">
                            <div class="text-[14px]">Humidity</div>
                            <div class="flex translate-x-[-10px]">
                                <div class="translate-y-[-4px]">
                                    <HumidLogoVue/>
                                </div>
                                <div class="text-[25px]">
                                    60%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[361px] h-[105px] bg-[#E5F6F7] mt-3 m-auto rounded-md">
                    <div class="text-[#2A83B5] text-[14px] font-bold ml-2">System</div>
                    <div class="grid grid-cols-3 mt-2 ml-2">
                        <div>
                            <div class="text-[12px]">circulation Fan</div>
                            <div class="flex mt-1">
                                <div class="mr-1 mt-1">
                                    <FanLogoVue/>
                                </div>
                                <div class="flex border-2 border-[#66B6AB] pl-3 pr-3 text-[#66B6AB] rounded-md">
                                    <div class="translate-y-[1px] mr-1"><SpotLogoVue/></div>
                                    <div class="translate-y-[2px] font-bold text-[10px]">ON</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="text-[12px]">circulation Fan</div>
                            <div class="flex mt-1">
                                <div class="mr-1 mt-1">
                                    <FanLogoVue/>
                                </div>
                                <div class="flex border-2 border-[#66B6AB] pl-3 pr-3 text-[#66B6AB] rounded-md">
                                    <div class="translate-y-[1px] mr-1"><SpotLogoVue/></div>
                                    <div class="translate-y-[2px] font-bold text-[10px]">ON</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="text-[12px]">Sensor</div>
                            <div class="flex mt-1">
                                <div class="mr-1 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                                        <path fill-rule="evenodd" d="M5.636 4.575a.75.75 0 0 1 0 1.061 9 9 0 0 0 0 12.728.75.75 0 1 1-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 0 1 1.06 0Zm12.728 0a.75.75 0 0 1 1.06 0c4.101 4.1 4.101 10.75 0 14.85a.75.75 0 1 1-1.06-1.061 9 9 0 0 0 0-12.728.75.75 0 0 1 0-1.06ZM7.757 6.697a.75.75 0 0 1 0 1.06 6 6 0 0 0 0 8.486.75.75 0 0 1-1.06 1.06 7.5 7.5 0 0 1 0-10.606.75.75 0 0 1 1.06 0Zm8.486 0a.75.75 0 0 1 1.06 0 7.5 7.5 0 0 1 0 10.606.75.75 0 0 1-1.06-1.06 6 6 0 0 0 0-8.486.75.75 0 0 1 0-1.06ZM9.879 8.818a.75.75 0 0 1 0 1.06 3 3 0 0 0 0 4.243.75.75 0 1 1-1.061 1.061 4.5 4.5 0 0 1 0-6.364.75.75 0 0 1 1.06 0Zm4.242 0a.75.75 0 0 1 1.061 0 4.5 4.5 0 0 1 0 6.364.75.75 0 0 1-1.06-1.06 3 3 0 0 0 0-4.243.75.75 0 0 1 0-1.061ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="flex border-2 border-[#66B6AB] pl-3 pr-3 text-[#66B6AB] rounded-md">
                                    <div class="translate-y-[1px] mr-1"><SpotLogoVue/></div>
                                    <div class="translate-y-[2px] font-bold text-[10px]">ON</div>
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
                        <path
                            d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path
                            d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>
                </span>
                <span>HOME</span>
            </div>
        </button>
    </div>
</template>

<style scoped>
.card-c {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.detail-c {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}</style>