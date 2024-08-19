<script setup>
import {onMounted, ref } from 'vue'
import {useStore} from "vuex"
import HomeWellBreathComponents from "../components/HomeComponents/HomeWellBreathComponents.vue"
import DetailDataWellbreathCompoentVue from "../components/DetailDataWellbreathComponent/DetailDataWellbreathCompoent.vue"
// import HomeAlwayDryComponents from "../components/HomeComponents/HomeAlwayDryComponents.vue"
// import HomeLightForLifeComponents from "../components/HomeComponents/HomeLightForLifeComponents.vue"
import axios from 'axios'

const store = useStore();
const hosting = "192.168.1.42";

const fetchLoopFunction =  () => {

  const command = {
    'system': 'zone1'
  }

  setInterval(async () => {
    try{
      const onSetDataWB = await axios.post(`http://${hosting}:8088/api/send/wb`,command);
      // console.log(onSetDataWB)
      store.state.dataWB.temp = onSetDataWB.data.data.temperature?onSetDataWB.data.data.temperature:"n/a"
      store.state.dataWB.pressure = onSetDataWB.data.data.pressure?parseInt(onSetDataWB.data.data.pressure):"n/a"
      store.state.dataWB.co2 = onSetDataWB.data.data.co2?onSetDataWB.data.data.co2:"n/a"
      store.state.dataWB.pm25 = onSetDataWB.data.data.pm25?onSetDataWB.data.data.pm25:"n/a"
      store.state.dataWB.voc = onSetDataWB.data.data.voc?onSetDataWB.data.data.voc:"n/a"
      store.state.dataWB.isOn = onSetDataWB.data.data.isOn?onSetDataWB.data.data.isOn:false
      store.state.dataWB.isAuto = onSetDataWB.data.data.isAuto?onSetDataWB.data.data.isAuto:false
      store.state.dataWB.iaq = onSetDataWB.data.data.iaq?onSetDataWB.data.data.iaq:"n/a"
      store.state.dataWB.humid = onSetDataWB.data.data.humid?onSetDataWB.data.data.humid:"n/a"
      store.state.dataWB.arrayDeviceOn = onSetDataWB.data.data.arrayDeviceOn?onSetDataWB.data.data.arrayDeviceOn:["n/a"]
    }catch(err){
        store.state.dataWB.temp = "n/a"
        store.state.dataWB.pressure = "n/a"
        store.state.dataWB.co2 = "n/a"
        store.state.dataWB.pm25 = "n/a"
        store.state.dataWB.voc = "n/a"
        store.state.dataWB.isOn = false
        store.state.dataWB.isAuto = false
        store.state.dataWB.iaq = "n/a"
        store.state.dataWB.humid ="n/a"
        store.state.dataWB.arrayDeviceOn = ["n/a"]
    }

    // try{
    //   const onSetDataAD = await axios.post(`http://${hosting}:8088/api/send/ad`, command);
    //   // console.log(onSetDataAD.data)
    //   store.state.dataAD.system = onSetDataAD.data.data.system?onSetDataAD.data.data.system:"n/a"
    //   store.state.dataAD.subSystem = onSetDataAD.data.data.subSystem?onSetDataAD.data.data.subSystem:"n/a"
    //   store.state.dataAD.alwaydry_1_start = onSetDataAD.data.data.alwaydry_1_start?onSetDataAD.data.data.alwaydry_1_start:"n/a"
    //   store.state.dataAD.alwaydry_1_active = onSetDataAD.data.data.alwaydry_1_active?onSetDataAD.data.data.alwaydry_1_active:"n/a"
    //   store.state.dataAD.alwaydry_2_start = onSetDataAD.data.data.alwaydry_2_start?onSetDataAD.data.data.alwaydry_2_start:"n/a"
    //   store.state.dataAD.alwaydry_2active = onSetDataAD.data.data.alwaydry_2active?onSetDataAD.data.data.alwaydry_2active:"n/a"
    //   store.state.dataAD.lightActive = onSetDataAD.data.data.lightActive?onSetDataAD.data.data.lightActive:"n/a"
    //   store.state.dataAD.arrayDeviceActive = onSetDataAD.data.data.arrayDeviceActive?onSetDataAD.data.data.arrayDeviceActive:["n/a"]
    //   store.state.dataAD.stopTime = onSetDataAD.data.data.StopTime?onSetDataAD.data.data.StopTime:0
    //   store.state.dataAD.endSystem = onSetDataAD.data.data.endSystem?onSetDataAD.data.data.endSystem:true
    //   store.state.dataAD.isAuto = onSetDataAD.data.data.isAuto?onSetDataAD.data.data.isAuto:false
    //   store.state.dataAD.isOn = onSetDataAD.data.data.isOn?onSetDataAD.data.data.isOn:false
    // }catch(err){
    //   store.state.dataAD.system = "n/a"
    //   store.state.dataAD.subSystem = "n/a"
    //   store.state.dataAD.alwaydry_1_start ="n/a"
    //   store.state.dataAD.alwaydry_1_active ="n/a"
    //   store.state.dataAD.alwaydry_2_start = "n/a"
    //   store.state.dataAD.alwaydry_2active = "n/a"
    //   store.state.dataAD.lightActive = "n/a"
    //   store.state.dataAD.arrayDeviceActive = ["n/a"]
    //   store.state.dataAD.stopTime = 'n/a'
    //   store.state.dataAD.endSystem = true
    //   store.state.dataAD.isAuto = false
    //   store.state.dataAD.isOn = false
    // }

    // try{
    //   const onSetDataLFL = await axios.post(`http://${hosting}:8088/api/send/battery`, command);
    //   // console.log(onSetDataLFL.data)
    //   store.state.dataLFL.lowBattery = onSetDataLFL.data.lowBattery
    //   store.state.dataLFL.arrayBattery = onSetDataLFL.data.batteryData[0]?onSetDataLFL.data.batteryData:["n/a"]
    //   store.state.dataLFL.isLightOn = onSetDataLFL.data.status?onSetDataLFL.data.status:false
    // }catch(err){
    //   store.state.dataLFL.arrayBattery = []
    //   store.state.dataLFL.isLightOn = false
    // }
  }, 1500);

}

onMounted(() => {
  store.state.selectionHomePage = true
  store.state.pageNow = ""
  fetchLoopFunction();
});

</script>

<template>
  <div class="flex justify-around translate-y-[-70px]">
    <HomeWellBreathComponents/>
    <DetailDataWellbreathCompoentVue/>
    <!-- <HomeAlwayDryComponents/>
    <HomeLightForLifeComponents/> -->
  </div>
</template>

<style scoped>

</style>