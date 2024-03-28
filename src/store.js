import {createStore} from 'vuex'

export default createStore({
    state:{
        cssBtnSpplyFanStatus: 'OFF',
        haddleBtnExhaustStatus: 'OFF',
        wellBreathState: true,
        iaqParamState: 0, 


        cssBtnADExhaustFan: 'OFF',
        cssBtnADDryFan: 'OFF',
        alwayDryStte: true,
        alwayDryDryFanState: false,
        alwayDryExhaustFan: false,


        lightForLifeState: true,

        selectionHomePage: true,
        pageNow: "",
        mainPageBatteryPercent: 30,

        dataWB:{
            onloadData: true,
            temp: "n/a",
            pressure: "n/a",
            co2: "n/a",
            pm25: "n/a",
            voc: "n/a",
            isOn: false,
            isAuto: false,
            iaq: "n/a",
            humid: "n/a",
            arrayDeviceOn: ["n/a"]
        },
        dataAD:{
            onloadData: true,
            system: "n/a",
            subSystem: "n/a",
            alwaydry_1_start: "n/a",
            alwaydry_1_active: "n/a",
            alwaydry_2_start: "n/a",
            alwaydry_2active: "n/a",
            lightActive: "n/a",
            arrayDeviceActive: ["n/a"],
            stopTime: "n/a",
            endSystem: true,
            isAuto: false,
            isOn: false,
        },
        dataLFL:{
            onloadData: true,
            isLightOn: false,
            arrayBattery: []
        }
    }
})