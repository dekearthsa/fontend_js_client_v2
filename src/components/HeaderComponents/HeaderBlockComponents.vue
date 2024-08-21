<script setup>
import { useRouter } from 'vue-router';
import {useStore} from "vuex"


const store = useStore();
const router = useRouter();

const haddleRouteHome = () => {
    router.push("/")
}


</script>

<template>
  <div class="block-container mx-auto p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
    <div class="flex justify-end items-center mt-4 mr-5" v-if="!store.state.selectionHomePage">
      <button class="flex sm:translate-y-[-27px] lg:translate-y-[-10px]  items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300" @click="haddleRouteHome">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="sm:w-6 sm:h-6 lg:w-[35px] lg:h-[35px]">
          <path
            d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path
            d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
        <span class="sm:text-lg lg:text-[25px] font-semibold">Home</span>
      </button>
    </div>
  </div>
</template>


<style scoped>
.block-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  background: linear-gradient(135deg, #f3f4f6, #ffffff);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.block-container:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15), 0 8px 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 800px) {
  .block-container {
    width: 90%;
    height: 40px;
  }
}

@media (min-width: 801px) {
  .block-container {
    width: 80%;
    height: auto;
  }
}
</style>
