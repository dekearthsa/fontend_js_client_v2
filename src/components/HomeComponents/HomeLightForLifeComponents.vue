<script setup>
import LightForLifeIconVue from "../icons/LightForLifeLogo.vue";
</script>

<template>
  <div class="">
    <div class="icon ">
      <LightForLifeIconVue class="m-auto"/>
    </div>
    <div class="detail w-[180px] h-[220px] bg-white rounded-lg">
      <div class="title flex m-auto mt-1 pb-1 pt-2 text-center justify-center">
        <div class="text-[#D29500] font-bold translate-x-[5px]">LIGHT FOR LIFE</div>
        <div class="translate-x-[20px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#999999" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <div class="status-c m-auto w-[170px] h-[65px] bg-[#E5F6F7] mt-2 rounded-lg"> 
        <div class="flex">
          <div class="ml-1 mt-1">
            <button class="btn-c rounded-full w-[40px] h-[40px] bg-[#FFEBBC]">
              <div class="rounded-full m-auto  w-[36px] h-[36px] border-2 border-[#D29500]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D29500" class="w-6 h-6 m-auto translate-y-[3px]">
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
        <div class="absolute flex ml-5 mt-4">
          <div class="mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[12px] h-[12px]">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </div>
          <div class="text-[9px]">
            50%
          </div>
        </div>
        <div class="flex">
          <div class="translate-y-[-8px] ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#AA0000" class="w-[60px] h-[60px]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
            </svg>
          </div>
          <div class="text-[8px] mt-3 ml-2 font-bold text-[#CB2A28]">
            Need replace new battery
          </div>
        </div>
        
      </div>
      <div class="qta-c m-auto bg-[#E5F6F7] w-[170px] h-[45px] mt-2 rounded-lg">
        <div class="text-[11px] font-bold mt-1 ml-1">Battery</div>
        <div class="flex justify-around">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
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