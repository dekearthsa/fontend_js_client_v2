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
            temp: "30",
            pressure: "100",
            co2: "200",
            pm25: "20",
            voc: "10",
            isOn: true,
            isAuto: false,
            iaq: "Good",
            humid: "55",
            arrayDeviceOn: ["Exhaust fan", "Supply low"]
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
            arrayDeviceActive: [],
            stopTime: "n/a",
            endSystem: true,
            isAuto: false,
            isOn: true,
        },
        dataLFL:{
            onloadData: true,
            isLightOn: false,
            lowBattery: 0,
            arrayBattery: [],
        }
    }
})