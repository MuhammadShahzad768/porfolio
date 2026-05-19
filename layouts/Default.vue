<template>
  <div>
    <!-- HEADER -->
  <Header/>

    <!-- PAGE CONTENT -->
    <main>
      <slot />
    </main>

    <!-- FOOTER -->
   <Footer/>
  </div>
</template>
<script>
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';
</script>