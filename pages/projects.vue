<template>
  <div class="page-hero">
    <div class="container">
      <span class="eyebrow">Portfolio</span>
      <h1 class="page-hero__title">All <em>Projects</em></h1>
      <p class="page-hero__sub">
        A complete collection of client work, personal builds, and experiments — every project tells a story.
      </p>
    </div>
  </div>

  <!-- STATS -->
  <div class="container">
    <div class="stats-row" ref="statsSection">

      <div class="stat">
        <span class="stat__num">{{ counters.projects }}</span>
        <span class="stat__label">Projects Shipped</span>
      </div>

      <div class="stat__sep"></div>

      <div class="stat">
        <span class="stat__num">{{ counters.landing }}</span>
        <span class="stat__label">Landing / Single Pages</span>
      </div>

      <div class="stat__sep"></div>

      <div class="stat">
        <span class="stat__num">{{ counters.years }}+</span>
        <span class="stat__label">Years Active</span>
      </div>

      <div class="stat__sep"></div>

      <div class="stat">
        <span class="stat__num">{{ counters.tech }}+</span>
        <span class="stat__label">Technologies</span>
      </div>

      <div class="stat__sep"></div>

      <div class="stat">
        <span class="stat__num">{{ counters.satisfaction }}%</span>
        <span class="stat__label">Client Satisfaction</span>
      </div>

    </div>
  </div>
   <!-- FILTER TABS -->
     <div class="filters">
      <button :class="{ active: active === 'all' }" class="filter-btn" @click="active = 'all'">All</button>
      <button :class="{ active: active === 'wordpress' }" class="filter-btn" @click="active = 'wordpress'">WordPress</button>
      <button :class="{ active: active === 'shopify' }" class="filter-btn" @click="active = 'shopify'">Shopify</button>
      <button :class="{ active: active === 'vue' }" class="filter-btn" @click="active = 'vue'">Vue.js</button>
      <button :class="{ active: active === 'single' }" class="filter-btn" @click="active = 'single'">Single Page</button>
    </div>
   <section class="projects-section">
      <div class="container">
        <div class="projects-grid" id="projectsGrid">
 <ProjectBoxes :filter="active" />
  </div>
  </div>
  </section>
</template>

<script setup>

definePageMeta({
  layout: 'default'
})
usePortfolioEffects()

import ProjectBoxes from '~/components/ProjectBoxes.vue'
import { ref, reactive, onMounted } from 'vue'

const statsSection = ref(null)
const active = ref('all')
const counters = reactive({
  projects: 0,
  landing: 0,
  years: 0,
  tech: 0,
  satisfaction: 0
})

let started = false

const animate = (key, end, speed = 80) => {
  let current = 0

  const interval = setInterval(() => {
    if (current < end) {
      current++
      counters[key] = current
    } else {
      clearInterval(interval)
    }
  }, speed)
}

const startAllCounters = () => {
  if (started) return
  started = true

  animate('projects', 9, 120)
  animate('landing', 2, 300)
  animate('years', 3, 200)
  animate('tech', 8, 150)
  animate('satisfaction', 100, 20)
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      startAllCounters()
    }
  }, { threshold: 0.3 })

  if (statsSection.value) {
    observer.observe(statsSection.value)
  }
})
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}

.page-hero {
  padding: 60px 0;
  text-align: center;
}

.page-hero__title {
  font-size: 42px;
  font-weight: bold;
}

.page-hero__sub {
  opacity: 0.7;
  margin-top: 10px;
}

.stats-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px 0;
  align-items: center;
}

.stat {
  text-align: center;
  min-width: 150px;
}

.stat__num {
  font-size: 34px;
  font-weight: bold;
  display: block;
}

.stat__label {
  font-size: 14px;
  opacity: 0.7;
}

.stat__sep {
  width: 1px;
  height: 40px;
  background: #ddd;
}
</style>