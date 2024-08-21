<script setup>
import {onMounted, ref } from 'vue'
import {useStore} from "vuex"
import HomeWellBreathComponents from "../components/HomeComponents/HomeWellBreathComponents.vue"
import DetailDataWellbreathCompoentVue from "../components/DetailDataWellbreathComponent/DetailDataWellbreathCompoent.vue"
import axios from 'axios'

const store = useStore();
const hosting = "localhost";

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
  </div>
</template>

<style scoped>

</style>