import {createStore} from 'vuex'

export default createStore({
    state:{
        // wellBreathBtn: "btn-c rounded-full w-[40px] h-[40px] bg-[#C5F0FF]",
        // wellBreathDiv: "rounded-full m-auto  w-[36px] h-[36px] border-2 border-[#00B0F0]",
        // wellBreathSvg: "#00B0F0",
        wellBreathState: true,
        iaqParamState: 0, 

        // alwayDryBtn: "btn-c rounded-full w-[40px] h-[40px] bg-[#FFF2D5]",
        // alwayDryDiv: "rounded-full m-auto  w-[36px] h-[36px] border-2 border-[#ED7D31]",
        // alwayDrySvg: "#ED7D31",
        alwayDryStte: true,
        alwayDryDryFanState: false,
        alwayDryExhaustFan: false,

        // lightForLifeBtn: "btn-c rounded-full w-[40px] h-[40px] bg-[#FFEBBC]",
        // lightForLifeDiv: "rounded-full m-auto  w-[36px] h-[36px] border-2 border-[#D29500]",
        // lightForLifeSvg: "#D29500",
        lightForLifeState: true,

        selectionHomePage: true,
        pageNow: "",
        mainPageBatteryPercent: 30,
    }
})