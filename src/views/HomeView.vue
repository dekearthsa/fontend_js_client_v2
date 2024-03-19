<script setup>
import {onMounted} from "vue";
import {useStore} from "vuex"
import HomeWellBreathComponents from "../components/HomeComponents/HomeWellBreathComponents.vue"
import HomeAlwayDryComponents from "../components/HomeComponents/HomeAlwayDryComponents.vue"
import HomeLightForLifeComponents from "../components/HomeComponents/HomeLightForLifeComponents.vue"
 

const store = useStore();

onMounted(() => {
  store.state.selectionHomePage = true
  store.state.pageNow = ""
});

</script>

<template>
  <div class="flex justify-around translate-y-[-70px]">
    <HomeWellBreathComponents/>
    <HomeAlwayDryComponents/>
    <HomeLightForLifeComponents/>
  </div>
</template>

<style scoped>

</style>