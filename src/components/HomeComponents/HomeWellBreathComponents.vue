<script setup>
  import FilterLogoVue from "../icons/FilterLogo.vue";
  import WellBreathLogoVue from "../icons/WellBreathLogo.vue";
  import NormalFaceIcon from "../icons/NormalFaceIcon.vue";
  import { useRouter } from 'vue-router';
  import {useStore} from "vuex" 
  import {ref} from "vue"
  import axios from "axios";


  const router = useRouter();
  const store = useStore();
  const isloadingIsOn = ref(false);

  const haddleWellBreath = () => {
    router.push("/wellbreath");
  }

  // const hosting = "localhost";
  const hosting = "192.168.155.160";


  const haddleOnMode = async (data) => {
    // console.log(data)
    isloadingIsOn.value = true
    try{
        if(data === true){
            const command = {
                selection: "isOn",
                system: "zone1",
                command: false
            }
            const status = await axios.post(`http://${hosting}:8090/api/update/wb/onOff`, command);
            if(status === "ok"){
                setTimeout(() => {
                    isloadingIsOn.value = false
                }, 1500);
                
            }else{
                setTimeout(() => {
                    isloadingIsOn.value = false
                    // isErrorLoading.value = true
                }, 1500);
                
            }

        }else if(data === false){
            const command = {
                selection: "isOn",
                system: "zone1",
                command: true
            }
            const status = await axios.post(`http://${hosting}:8090/api/update/wb/onOff`, command);
            if(status === "ok"){
                setTimeout(() => {
                    isloadingIsOn.value = false
                }, 1500)
            }else{
                setTimeout(() => {
                    isloadingIsOn.value = false
                    // isErrorLoading.value = true
                }, 1500)
            }
        }
    }catch(err){
        console.log(err);
    }
}


</script>

<template>
  <div class="set-c">
    <div class="icon m-auto text-center">
      <WellBreathLogoVue class="m-auto"/>
    </div>
    <div class="detail w-[240px] h-[290px] bg-white rounded-lg translate-y-[-10px]">
      <div class="title flex m-auto mt-1 pb-1 pt-2 text-center justify-center" @click="haddleWellBreath">
        <div class="set-t text-[#00B0F0] font-bold translate-x-[5px]">WELL BREATHED</div>
        <div class="set-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="#999999" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <div class="status-c m-auto  w-[200px] h-[85px] bg-[#F3F4F8] mt-2 rounded-lg"> 
        <div class="set-c-on-off flex">
          <div class="ml-5 mt-3">
            <button @click="haddleOnMode(store.state.dataWB.isOn)">
              <div class="translate-x-[3px]" >
                <img class="set-on-off-img" v-if="store.state.dataWB.isOn" src="@/assets/btn_on_wb.png" />
                <img class="set-on-off-img" v-if="!store.state.dataWB.isOn" src="@/assets/btn_off.png" />
              </div>
            </button>
            <div class="set-on-off  font-bold">
              ON/OFF
            </div>
          </div>
          <div class="set-on-off-status ml-8 mt-3">
            <div class="font-bold ">
              Status
            </div>
            <div class="set-name-s border-2 border-[#36A090] font-bold text-center rounded-md text-[#36A090]">
              Normal
            </div>
          </div>
        </div>
      </div>
      <div class="data-c m-auto bg-[#F3F4F8] w-[200px] h-[65px] mt-2 rounded-lg">
        <div class="">
          <div class="set-aqi text-[14px] font-bold ml-1 mt-1">AQI</div>
        </div>
        <div >  
          <div v-if="store.state.dataWB.iaq === 'Good'" class="flex justify-center">
            <div class="translate-x-[-30px] mr-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#B8FAA0" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00C412" class="lg:translate-x-[-24px] lg:w-[70px] lg:h-[70px] sm:w-9 sm:h-9">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
              </svg>
            </div>
            <div class="set-aqi-status translate-y-[6px] translate-x-[20px] text-[#00C412] text-[15px] font-bold">
              Good
            </div>
          </div>
          <div v-if="store.state.dataWB.iaq === 'Moderated'" class="flex justify-center">
            <div class="translate-x-[-8px] mr-5">
              <NormalFaceIcon/>
            </div>
            <div class="set-aqi-status translate-y-[5px] translate-x-[20px] text-[#CDC100] text-[15px] font-bold">
              Moderated
            </div>
          </div>

          <div   v-if="store.state.dataWB.iaq === 'Unhealthy'" class="flex justify-center">
            <div class="translate-x-[-15px] mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#F4B8B7" viewBox="0 0 24 24" stroke-width="1.5" stroke="#CB2A28" class="lg:translate-x-[-24px] lg:w-[70px] lg:h-[70px] sm:w-9 sm:h-9">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
            </div>
            <div class="set-aqi-status translate-y-[5px] translate-x-[25px] text-[#CB2A28] text-[15px] font-bold">
              Unhealthy
            </div>
          </div>
        </div>
      </div>
      <div class="qta-c m-auto bg-[#F3F4F8] w-[200px] h-[65px] mt-2 rounded-lg">
        <div class="set-title-f text-[14px] font-bold mt-1 ml-1">Filter</div>
        <div class="flex justify-around selection mt-2">
          <div>
            <FilterLogoVue  class="translate-y-[-10px] translate-x-[10px]"/>
          </div>
          <div class="flex translate-x-[10px]">
            <div>
                <img class="set-img" v-if="store.state.dataWB.pressure > 60" src="@/assets/bat_max.png" />
                <img class="set-img" v-if="store.state.dataWB.pressure <= 60 && store.state.dataWB.pressure > 50"  src="@/assets/bat_max_low.png" />
                <img class="set-img" v-if="store.state.dataWB.pressure <= 50 && store.state.dataWB.pressure > 30"  src="@/assets/bat_low.png" />
                <img class="set-img" v-if="store.state.dataWB.pressure <= 30 && store.state.dataWB.pressure >= 0"  src="@/assets/bat_empty.png" />
            </div>
            <div class="set-pressure text-[#008E29] font-bold ">
              <div class="">
                100% 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 800px) {
  .detail {
    width: 240px;
    height: 290px;
  }
  .status-c{
    width: 200px;
    height: 85px;
  }
  .data-c{
    width: 200px;
    height: 65px;
  }
  .qta-c{
    width: 200px;
    height: 65px;
  }
  .set-btn{
    transform: translateX(5px);
  }
  .set-on-off{
    font-size: 14px;
    transform: translateX(-5px);
  }
  .set-on-off-img{
    width: 38px;
    height: 38px;
  }
  .set-on-off-status{
    font-size: 14px;
  }
  .set-name-s{
    width: 70px;
  }
  .set-aqi{
    font-size: 14px;
  }
  .set-img{
    width: 20px;
    height: 20px;
    transform: translateY(-3px);
  }
  .set-pressure{
    transform: translateY(-3px);
  }
}

@media only screen and (min-width: 801px) {
  .set-c{
    transform: translateY(-60px)
  } 
  .detail {
    width: 400px;
    height: 590px;
  }
  .status-c{
    padding-top: 10px;
    width: 350px;
    height: 140px;
  }
  .data-c{
    width: 350px;
    height: 140px;
  }
  .qta-c{
    width: 350px;
    height: 140px;
  }

  .set-t{
    font-size: 30px;
  }

  .set-btn{
    transform: translateY(13px);
    margin-left: 15px;
  }

  .set-on-off{
    font-size: 20px;
    margin-top: 5px;
    transform: translateX(-5px);
  }
  .set-on-off-img{
    width: 50px;
    height: 50px;
  }
  .set-c-on-off{
    margin-left: 30px;
    color: rgb(99, 99, 99);
  }
  .set-on-off-status{
    margin-top: 15px;
    margin-left: 70px;
    font-size: 20px;
  }
  .set-name-s{
    margin-top:10px;
    width: 90px;
  }
  .set-aqi{
    padding-top: 10px;
    margin-left: 10px;
    font-size: 20px;
    color: rgb(99, 99, 99);
  }
  .set-title-f{
    padding-top: 10px;
    margin-left: 10px;
    font-size: 20px;
    color: rgb(99, 99, 99);
  }
  .set-aqi-status{
    margin-top: 10px;
    font-size: 25px;
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


.btn-c{
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
}

.detail{
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
</style>