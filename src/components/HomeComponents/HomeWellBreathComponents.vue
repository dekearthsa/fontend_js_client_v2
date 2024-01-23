<script setup>
import FilterLogoVue from "../icons/FilterLogo.vue";
import WellBreathLogoVue from "../icons/WellBreathLogo.vue";
</script>

<template>
  <div class="">
    <div class="icon ">
      <WellBreathLogoVue class="m-auto"/>
    </div>
    <div class="detail w-[180px] h-[220px] bg-white rounded-lg">
      <div class="title flex m-auto mt-1 pb-1 pt-2 text-center justify-center">
        <div class="text-[#00B0F0] font-bold translate-x-[5px]">WELL BREATH</div>
        <div class="translate-x-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#999999" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <div class="status-c m-auto w-[170px] h-[65px] bg-[#E5F6F7] mt-2 rounded-lg"> 
        <div class="flex">
          <div class="ml-1 mt-1">
            <button class="btn-c rounded-full w-[40px] h-[40px] bg-[#C5F0FF]">
              <div class="rounded-full m-auto  w-[36px] h-[36px] border-2 border-[#00B0F0]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00B0F0" class="w-6 h-6 m-auto translate-y-[3px]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
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
            <div class="border-2 border-[#36A090] w-[50px] text-[10px] font-bold text-center rounded-md text-[#36A090]">
              Normal
            </div>
          </div>
        </div>
      </div>
      <div class="data-c m-auto bg-[#E5F6F7] w-[170px] h-[45px] mt-2 rounded-lg">
        <div class="">
          <div class="text-[10px] font-bold ml-1 mt-1">AQI</div>
        </div>
        <div class="flex justify-center">
          <div class="translate-y-[-5px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#F4B8B7" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CB2A28" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
          </div>
          <div class="text-[#CB2A28] text-[12px] font-bold">
            Unhealthy
          </div>
        </div>
      </div>
      <div class="qta-c m-auto bg-[#E5F6F7] w-[170px] h-[45px] mt-2 rounded-lg">
        <div class="text-[11px] font-bold mt-1 ml-1">Filter</div>
        <div class="flex justify-around">
          <div>
            <FilterLogoVue class="translate-y-[-3px]"/>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#CB2A28" class="w-6 h-6 translate-y-[-2px]">
              <path fill-rule="evenodd" d="M.75 9.75a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v.038c.856.173 1.5.93 1.5 1.837v2.25c0 .907-.644 1.664-1.5 1.838v.037a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-6Zm19.5 0a1.5 1.5 0 0 0-1.5-1.5h-15a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-6Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="text-[#CB2A28] text-[14px] font-bold">
            30%
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