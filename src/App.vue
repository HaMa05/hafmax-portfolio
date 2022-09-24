<template>
  <div class="w-full bg-zinc-800">
    <Header />
    <Introduction />
    <div class="container w-10/12 mx-auto text-white">
      <main>
        <Service />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Introduction from './components/Introduction.vue';
import Service from './components/Service.vue';
import Footer from './components/Footer.vue';
</script>

<style lang="scss" scoped></style>
