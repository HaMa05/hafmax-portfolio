<template>
  <article id="introduction">
    <div class="h-16 bg-zinc-800"></div>
    <div class="bg-white flex flex-col justify-center items-center py-8 gap-5">
      <p class="text-4xl">Hi There, I'm</p>
      <p class="text-8xl font-bold">BUI VAN HA</p>
      <p class="text-5xl">Frontend Developer - Designer</p>
    </div>
    <div
      class="container w-10/12 mx-auto bg-white/5 px-14 py-10 my-16 text-white"
    >
      <div class="flex flex-col md:flex-row justify-between items-start gap-4">
        <div class="md:w-5/12">
          <div class="border-4 border-dashed p-2">
            <img :src="Person" alt="Picture of me" :srcset="Person" />
          </div>
        </div>
        <div
          class="md:w-7/12 flex flex-col justify-between tracking-widers gap-3"
        >
          <h2 class="text-3xl tracking-widest mb-4 underline">
            Frontend Developer & Designer
            <v-icon
              name="io-sparkles-sharp"
              class="text-white"
              animation="wrench"
              speed="slow"
              scale="2"
              fill="yellow"
            />
          </h2>
          <h3 class="tracking-wider">I am a frontend developer from Vietnam</h3>
          <p class="font-thin">
            I was born in Bac Giang province, I had 2 years experience in web
            technical. <br />
            In free time, I often listening to music or watching movies. Before,
            I have crazy about technical such as HTML, CSS, Javascript, Nodejs.
            Therefor, I often design banner, logo or standee for website SEO.
          </p>
          <div class="flex gap-4">
            <a href="https://www.facebook.com/hafmaxx/" target="_blank">
              <v-icon name="io-logo-facebook" animation="float" />
            </a>
            <a href="https://github.com/HaMa05" target="_blank">
              <v-icon name="io-logo-github" animation="float" />
            </a>
            <a href="https://twitter.com/Hamadevv" target="_blank">
              <v-icon name="io-logo-twitter" animation="float" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import Person from '../assets/images/person.jpg';
</script>

<style lang="scss" scoped></style>
