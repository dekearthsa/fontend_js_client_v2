<script setup>
    import CarbonLogoVue from "../icons/CarbonLogo.vue"
    import HumidLogoVue from "../icons/HumidLogo.vue"
    import PMLogoVue from "../icons/PMLogo.vue"
    import TempLogoVue from "../icons/TempLogo.vue"
    import VOCsLogoVue from "../icons/VOCsLogo.vue"

    import { useStore } from "vuex"
    const store = useStore();
</script>


<template>
    <div class="detail-c bg-gradient-to-r  from-gray-100 to-gray-50 rounded-2xl shadow-xl">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div class="flex flex-col items-start">
                <div class="set-title">Temperature</div>
                <div class="set-g flex items-center space-x-3 mt-3">
                    <TempLogoVue class="w-10 h-10 text-blue-500" />
                    <div class="flex items-baseline">
                        <span class="set-info text-blue-600">{{ store.state.dataWB.temp }}</span>
                        <span class="set-sys">&#8451;</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-start">
                <div class="set-title">PM2.5</div>
                <div class="set-g flex items-center space-x-3 mt-3">
                    <PMLogoVue class="w-10 h-10 text-red-500" />
                    <div class="flex items-baseline">
                        <span class="set-info text-red-600">{{ store.state.dataWB.pm25 }}</span>
                        <span class="set-sys">µg/m³</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-start">
                <div class="set-title">CO2</div>
                <div class="set-g flex items-center space-x-3 mt-3">
                    <CarbonLogoVue class="w-10 h-10 text-green-500" />
                    <div class="flex items-baseline">
                        <span class="set-info text-green-600">{{ store.state.dataWB.co2 }}</span>
                        <span class="set-sys">ppm</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
            <div class="flex flex-col items-start">
                <div class="set-title">VOCs</div>
                <div class="set-g flex items-center space-x-3 mt-3">
                    <VOCsLogoVue class="w-10 h-10 text-yellow-500" />
                    <div class="flex items-baseline">
                        <span class="set-info text-yellow-600">{{ store.state.dataWB.voc }}</span>
                        <span class="set-sys">ppm</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-start">
                <div class="set-title">Humidity</div>
                <div class="set-g flex items-center space-x-3 mt-3">
                    <HumidLogoVue class="w-10 h-10 text-indigo-500" />
                    <div class="flex items-baseline">
                        <span class="set-info text-indigo-600">{{ store.state.dataWB.humid }}</span>
                        <span class="set-sys">%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

@media only screen and (max-width: 800px){
    .detail-c {
        margin-top: 90px;
        height: 295px;
        padding: 2rem;
        background: linear-gradient(135deg, #e0e7ff, #fef3c7);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    }
     
    .set-title {
        font-size: 18px;
        font-weight: 700;
        color: #1f2937;
    
    }
    
    .set-info {
        font-size: 18px;
        font-weight: 700;
        color: #1f2937;
    }
    
    .set-sys {
        font-size: 18px;
        font-weight: 500;
        color: #6b7280;
        margin-left: 0.5rem;
    }
    
     
    .set-g:hover .set-info {
        color: #374151;
    }
    
    
}


@media only screen and (min-width: 801px) {
    .detail-c { 
        padding: 2rem;
        transform: translateY(110px);

        padding: 3rem;  
        height: 590px;
    }

    .set-title {
        font-size: 1.5rem;
    }

    .set-info {
        font-size: 3rem;
    }

    .set-sys {
        font-size: 1.5rem;
    }

    .detail-c {
        background: linear-gradient(135deg, #e0e7ff, #fef3c7);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    }
     
    .set-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: #1f2937;
    
    }
    
    .set-info {
        font-size: 2.5rem;
        font-weight: 700;
        color: #1f2937;
    }
    
    .set-sys {
        font-size: 1.25rem;
        font-weight: 500;
        color: #6b7280;
        margin-left: 0.5rem;
    }
    
     
    .set-g:hover .set-info {
        color: #374151;
    }
    
    
}
</style>