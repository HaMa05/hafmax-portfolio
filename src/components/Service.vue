<template>
  <article id="services" class="flex w-full flex-col items-center mb-10">
    <h3
      class="font-medium text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400"
    >
      Services
    </h3>
    <div class="flex justify-center items-between flex-wrap gap-10 mt-10">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="md:max-w-xs flex flex-col gap-5 border-2 p-5 rounded-xl border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <v-icon
          scale="2"
          :name="service.icon"
          animation="wrench"
          speed="slow"
        />
        <h4 class="text-2xl text-cyan-500">{{ service.serviceName }}</h4>
        <p class="text-normal text-base font-thin">{{ service.desc }}</p>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
  {
    serviceName: 'Development',
    desc: 'I often listening to music or watching movies. Before,I have crazy about technical such as HTML, CSS, Javascript, Nodejs.Therefor, I often design banner, logo or standee for website SEO.',
    icon: 'io-qr-code'
  },
  {
    serviceName: 'Design',
    desc: 'I often listening to music or watching movies. Before,I have crazy about technical such as HTML, CSS, Javascript, Nodejs.Therefor, I often design banner, logo or standee for website SEO.',
    icon: 'io-color-palette'
  },
  {
    serviceName: 'Support',
    desc: 'I often listening to music or watching movies. Before,I have crazy about technical such as HTML, CSS, Javascript, Nodejs.Therefor, I often design banner, logo or standee for website SEO.',
    icon: 'io-help-buoy'
  }
]);
</script>

<style lang="scss" scoped></style>
