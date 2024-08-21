<script setup>
// import router from '@/router'
import axios from 'axios';
import { ref } from 'vue'

const client = ref(null);
const TEMP = ref();
const HUMID = ref();
const CO2 = ref();
const VOC = ref();
const PM2 = ref();
const DEBUG_STATUS = ref("off")
const hosting = ref("localhost");
const STATUS_PUB = ref("");


const sendMessage = async () => {
    // Prepare the payload
    const payload = {
        
        deviceID: "client",
        deviceType: "WB",
        token: "debug-mode",
        data: {
            temp: Number(TEMP.value),
            humid: Number(HUMID.value),
            CO2: Number(CO2.value),
            pressure: 100,
            VOC: Number(VOC.value),
            "PM2.5": Number(PM2.value),
        }
    }

    try {
        const status = await axios.post(`http://${hosting.value}:8090/api/command/pub/wb`, payload);
        console.log(status.status)
        if (status.status === 200) {
            STATUS_PUB.value = "pub success!"
            alert("pub =>", payload)
        } else {
            STATUS_PUB.value = "pub fail!"
            alert(status.status)
        }
    } catch (err) {
        STATUS_PUB.value = "pub fail!"
        alert(err)
    }

}

// '{"deviceID":"wb-sensor", "deviceType":"WB", "token":"g91fu9l7", "data":{"temp":445,"humid":20.3,"CO2":1100, "PM2.5":22, "VOC":22, "pressure":40}}'
const haddleOpenDebugMode = async () => {
    if (DEBUG_STATUS.value === "on") {
        const cmd = {
            debug: false
        }
        try {
            const status = await axios.post(`http://${hosting.value}:8090/api/update/debug/cmd`, cmd)
            if (status.status === 200) {
                alert("close debug mode!")
                DEBUG_STATUS.value = "off"
            } else {
                alert(status.status)
                DEBUG_STATUS.value = "off"
            }
        } catch (err) {
            DEBUG_STATUS.value = "off"
            alert(err + + "when try to off debug mode!")
        }

    } else {
        const cmd = {
            debug: true
        }
        try {
            const status = await axios.post(`http://${hosting.value}:8090/api/update/debug/cmd`, cmd)
            if (status.status === 200) {
                alert("on debug mode!")
                DEBUG_STATUS.value = "on"
            } else {
                alert(status.status)
                DEBUG_STATUS.value = "off"
            }
        } catch (err) {
            alert(err + "when try to on debug mode!")
            DEBUG_STATUS.value = "off"
        }
    }

}


</script>

<template>
    <div class="max-w-lg mx-auto p-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl">
        <div class="flex items-center justify-between mb-10">
            <button @click="haddleOpenDebugMode()"
                class="px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white font-semibold rounded-full shadow-lg hover:from-gray-900 hover:to-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Debug mode
            </button>
            <span class="ml-5 text-gray-700 text-lg font-medium">{{ DEBUG_STATUS }}</span>
        </div>
        <div class="grid gap-8" v-if="DEBUG_STATUS === 'on'">
            <div>
                <label class="block text-base font-semibold text-gray-800">Host</label>
                <input
                    class="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent sm:text-base"
                    placeholder="Enter hostname" v-model="hosting" />
            </div>
            <div>
                <label class="block text-base font-semibold text-gray-800">Temperature</label>
                <input
                    class="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent sm:text-base"
                    placeholder="Enter temperature" v-model="TEMP" />
            </div>
            <div>
                <label class="block text-base font-semibold text-gray-800">Humidity</label>
                <input
                    class="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent sm:text-base"
                    placeholder="Enter humidity" v-model="HUMID" />
            </div>
            <div>
                <label class="block text-base font-semibold text-gray-800">CO2</label>
                <input
                    class="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent sm:text-base"
                    placeholder="Enter CO2 level" v-model="CO2" />
            </div>
            <div>
                <label class="block text-base font-semibold text-gray-800">PM2.5</label>
                <input
                    class="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent sm:text-base"
                    placeholder="Enter CO2 level" v-model="PM2" />
            </div>
            <div>
                <label class="block text-base font-semibold text-gray-800">VOC</label>
                <input
                    class="mt-2 block w-full px-4 py-3 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent sm:text-base"
                    placeholder="Enter CO2 level" v-model="VOC" />
            </div>
        </div>

        <div class="mt-12 flex justify-center">
            <button v-if="DEBUG_STATUS === 'on'"
                class="px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white font-semibold rounded-full shadow-lg hover:from-gray-900 hover:to-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                @click="sendMessage">
                SEND
            </button>
        </div>
        <div class="flex justify-center mt-10" v-if="DEBUG_STATUS === 'on'">
            {{ STATUS_PUB }}
        </div>
    </div>
</template>

<style scoped></style>