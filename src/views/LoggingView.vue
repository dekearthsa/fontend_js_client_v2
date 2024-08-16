<template>
    <div>
        <div class="m-auto text-center mb-5 flex justify-center">
            <div class="mr-2">Wellbreath</div>
            <button class="ml-2" @click="funcReloadLogging()">
                <img src="@/assets/refresh.png" width="30" height="30"/>
            </button>
            <!-- <button v-if="fullLog !== ''" class="ml-2" @click="funcFetchLogging">
                <img src="@/assets/refresh.png" width="30" height="30"/>
            </button> -->
        </div>
        <div v-if="fullLog !== ''">
            <div class="">
                <div>
                    <div>
                        <button style="font-size: 20px; margin-bottom: 10px; display:flex; justify-content: end;" @click="haddleCloseLog">X</button>
                    </div>
                    <table>
                        <tr>
                            <th>DeviceID</th>
                            <th>Temp</th>
                            <th>Humid</th>
                            <th>CO2</th>
                            <th>PM2.5</th>
                            <th>Create Time</th>
                        </tr>
                        <tr v-for="(el, idx) in loggingList[selectIdx]" :key="idx">
                            <td>{{el.deviceID }}</td>
                            <td>{{el.temp }}</td>
                            <td>{{el.humid }}</td>
                            <td>{{el.CO2 }}</td>
                            <td>{{el["PM2.5"] }}</td>
                            <td>{{el.createDate}}</td>
                        </tr>
                    </table>
                    <div >
                        <button @click="haddleNextPage(d)" class="ch-c" v-for="d in totalPage" :key="d">{{d}}</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!isloading && fullLog === ''" >
            <div class="flex justify-around" v-if="errorDesc === ''">
                <div class="c-card" @click="funcHaddlePush('device1')">
                    <div class="mb-4">device 1</div>
                    <div>
                        <div class="grid grid-cols-2">
                            <label>DeviceID</label>
                            <span>{{ datalogging.deviceNum1[0].deviceID }}</span>
                        </div>
                        <div class="grid grid-cols-2">
                            <label>Temp</label>
                            <span>{{ datalogging.deviceNum1[0].temp }}</span>
                        </div>
                        <div class="grid grid-cols-2">
                            <label>Humid</label>
                            <span>{{ datalogging.deviceNum1[0].humid }}</span>
                        </div>
                        <div class="grid grid-cols-2">
                            <label>CO2</label>
                            <span>{{ datalogging.deviceNum1[0].CO2 }}</span>
                        </div>
                        <div class="grid grid-cols-2">
                            <label>PM2.5</label>
                            <span>{{ datalogging.deviceNum1[0]["PM2.5"] }}</span>
                        </div>
                        <div class="grid grid-cols-2">
                            <label>Create Date</label>
                            <span>{{ datalogging.deviceNum1[0].createDate }}</span>
                        </div>
                    </div>
                </div>
                <div class="c-card" @click="funcHaddlePush('device2')">
                    <div class="mb-4">device 2</div>
                    <div>
                        <div class="grid grid-cols-2">
                            <label>DeviceID</label>
                            <span>{{ datalogging.deviceNum2[0].deviceID }}</span>
                        </div>
                        <div class="grid grid-cols-2">
                            <label>Temp</label>
                            <span>{{ datalogging.deviceNum2[0].temp }}</span>
                        </div>
                        <div class="grid grid-cols-2">
                            <label>Humid</label>
                            <span>{{ datalogging.deviceNum2[0].humid }}</span>
                        </div>
                        <div class="grid grid-cols-2">
                            <label>CO2</label>
                            <span>{{ datalogging.deviceNum2[0].CO2 }}</span>
                        </div>
                        <div class="grid grid-cols-2">
                            <label>PM2.5</label>
                            <span>{{ datalogging.deviceNum2[0]["PM2.5"] }}</span>
                        </div>
                        <div class="grid grid-cols-2">
                            <label>Create Date</label>
                            <span>{{ datalogging.deviceNum2[0].createDate }}</span>
                        </div>
                    </div>
                </div>
                <div class="c-card" @click="funcHaddlePush('device3')">
                    <div class="mb-4">device 3</div>
                    <div>
                        <div class="grid grid-cols-2">
                            <label>DeviceID</label>
                            <span>{{ datalogging.deviceNum3[0].deviceID }}</span>
                        </div>
                        <div class="grid grid-cols-2">
                            <label>Temp</label>
                            <span>{{ datalogging.deviceNum3[0].temp }}</span>
                        </div>
                        <div class="grid grid-cols-2">
                            <label>Humid</label>
                            <span>{{ datalogging.deviceNum3[0].humid }}</span>
                        </div>
                        <div class="grid grid-cols-2">
                            <label>CO2</label>
                            <span>{{ datalogging.deviceNum3[0].CO2 }}</span>
                        </div>
                        <div class="grid grid-cols-2">
                            <label>PM2.5</label>
                            <span>{{ datalogging.deviceNum3[0]["PM2.5"] }}</span>
                        </div>
                        <div class="grid grid-cols-2">
                            <label>Create Date</label>
                            <span>{{ datalogging.deviceNum3[0].createDate }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="errorDesc !== ''">
                <h3>{{ errorDesc }}</h3>
            </div>
        </div>
        <div v-if="isloading">
            loading...
        </div>

    </div>
</template>

<script setup>
// import router from '@/router'
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'
import {useStore} from "vuex"
const store = useStore();

const errorDesc = ref("")
const fullLog = ref("")
const totalPage = ref(0);
const loggingList = ref([])
// const isSetDevice = ref("")
const selectIdx = ref(0)
const datalogging = ref({
    deviceNum1: [
        {
            deviceID: "",
            temp: "",
            humid: "",
            CO2: "",
            ["PM2.5"]: ""
        }
    ],
    deviceNum2: [
        {
            deviceID: "",
            temp: "",
            humid: "",
            CO2: "",
            ["PM2.5"]: ""
        }
    ],
    deviceNum3: [
        {
            deviceID: "",
            temp: "",
            humid: "",
            CO2: "",
            ["PM2.5"]: ""
        }
    ]
})
const isloading = ref(false)

const haddleCloseLog =  () => {
    fullLog.value = ""
    loggingList.value = []
}

const haddleNextPage = async (page) => {
    selectIdx.value = page
}

const funcReloadLogging = async () => {
    loggingList.value = []
    await funcFetchLogging();
    await funcHaddlePush(fullLog.value);
}

const funcFetchLogging = async (evt) => {
    try {
        isloading.value = true
        const loggingData = await axios.get(`http://${store.state.setHostingServerMachine}:8088/api/get/logging/wb`)
        // console.log("loggingData => ",loggingData.data)
        datalogging.value = loggingData.data
        isloading.value = false
    } catch (err) {
        errorDesc.value = err.message
        isloading.value = false
    }

}

const funcHaddlePush = (evt) => {
    fullLog.value = evt
    totalPage.value = 0
    if (evt === "device1") {
        let counting = 0
        let nestArray = []
        for (let i = 0; i < datalogging.value.deviceNum1.length; i++) {
            counting ++
            if (counting < 15) {
                // console.log("count 1 => ", counting)
                nestArray.push(datalogging.value.deviceNum1[i])
                if(counting === datalogging.value.deviceNum1.length){
                    // console.log("count 2 => ", counting)
                    loggingList.value.push(nestArray)
                    totalPage.value += 1 
                    nestArray = []
                    counting = 0
                }
            } else {
                // console.log("count 3 => ", counting)
                nestArray.push(datalogging.value.deviceNum1[i])
                loggingList.value.push(nestArray)
                totalPage.value += 1 
                nestArray = []
                counting = 0
            }
        }
    } else if (evt === "device2") {
        let counting = 0
        let nestArray = []
        for (let i = 0; i < datalogging.value.deviceNum2.length; i++) {
            counting ++
            if (counting < 15) {
                // console.log("count 1 => ", counting)
                nestArray.push(datalogging.value.deviceNum2[i])
                if(counting === datalogging.value.deviceNum2.length){
                    // console.log("count 2 => ", counting)
                    loggingList.value.push(nestArray)
                    totalPage.value += 1 
                    nestArray = []
                    counting = 0
                }
            } else {
                // console.log("count 3 => ", counting)
                nestArray.push(datalogging.value.deviceNum2[i])
                loggingList.value.push(nestArray)
                totalPage.value += 1 
                nestArray = []
                counting = 0
            }
        }
    } else if (evt === "device3") {
        let counting = 0
        let nestArray = []
        for (let i = 0; i < datalogging.value.deviceNum3.length; i++) {
            counting ++
            if (counting < 15) {
                // console.log("count 1 => ", counting)
                nestArray.push(datalogging.value.deviceNum3[i])
                if(counting === datalogging.value.deviceNum3.length){
                    // console.log("count 2 => ", counting)
                    loggingList.value.push(nestArray)
                    totalPage.value += 1 
                    nestArray = []
                    counting = 0
                }
            } else {
                // console.log("count 3 => ", counting)
                nestArray.push(datalogging.value.deviceNum3[i])
                loggingList.value.push(nestArray)
                totalPage.value += 1 
                nestArray = []
                counting = 0
            }
        }
    }
}

onMounted(async () => {
    await funcFetchLogging("")
})

</script>

<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }
.c-card {
    padding: 15px;
    width: 250px;
    border-radius: 4px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    
}

.ch-c{
    margin-left: 10px;
}
</style>