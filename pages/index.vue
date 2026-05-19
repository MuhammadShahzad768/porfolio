<template>
  <Banner />
  <About />
  <Skills/>
  <Projects/>
  <Journery/>
  <Services/>
  <Skills/>
  <Resume/>
</template>

<script setup>
import Banner from '~/components/Banner.vue'
import About from '~/components/About.vue'
import Skills from '~/components/Skills.vue';
import Projects from '~/components/Projects.vue';
import Journery from '~/components/Journery.vue';
import Resume from '~/components/Resume.vue';
usePortfolioEffects()
definePageMeta({
  layout: 'default'
})
</script>