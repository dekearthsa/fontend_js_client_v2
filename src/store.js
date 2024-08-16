import { createStore } from 'vuex'

export default createStore({
    state: {
        setHostingServerMachine: '192.168.110.160',

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

        dataWB: {
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
            arrayDeviceOn: []
        },
        dataAD: {
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
            isOn: false,
        },
        dataLFL: {
            onloadData: true,
            isLightOn: false,
            lowBattery: {
                Battery: 77,
                DeviceId: "lfl-2",
                DeviceName: "-",
                DeviceType: "LFL",
                Subsystem: "LFL_LIGHT_BEDROOM",
                System: "zone1",
                TimeStamp: 1711601383356
            },
            arrayBattery: [{
                system: "zone1",
                subSystem: "LFL_LIGHT_BEDROOM",
                deviceId: "lfl-1",
                deviceType: "LFL",
                battery: 100,
                timeStamp: 1711601378465,
                isRunning: true
            },
            {
                system: "zone1",
                subSystem: "LFL_LIGHT_BEDROOM",
                deviceId: "lfl-2",
                deviceType: "LFL",
                battery: 77,
                timeStamp: 1711601383356,
                isRunning: true
            },
            {
                system: "zone1",
                subSystem: "LFL_LIGHT_BEDROOM",
                deviceId: "lfl-3",
                deviceType: "LFL",
                battery: 100,
                timeStamp: 1711601386897,
                isRunning: true
            }
            ],
        }
    }
})