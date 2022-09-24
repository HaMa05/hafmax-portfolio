<template>
  <footer class="flex flex-col justify-center items-center py-5">
    <button
      class="w-fit rounded-xl px-5 border-2 flex items-center justify-center cursor-pointer mb-5 animate-bounce transition-all duration-500 hover:bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 hover:px-14"
      @click="goToTop"
    >
      <p>Go to top</p>
    </button>
    <p>&copy; Hafmax <span class="text-zinc-600">All Rights Reserved</span></p>
  </footer>
</template>

<script setup>
const goToTop = () => {
  const header = document.getElementById('header');
  window.scrollTo({ top: header, behavior: 'smooth' });
};
</script>

<style lang="scss" scoped></style>
