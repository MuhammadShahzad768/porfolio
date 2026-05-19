<template>
  <section class="projects-section">
    <div class="container">
      <!-- PROJECT GRID -->
      <div class="projects-grid">

        <article
          v-for="(project, index) in projects"
          :key="index"
          class="proj-card "
        >
       
          <div class="proj-card__visual bg-v1">
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              style="width:100%; height:100%; object-fit:cover; opacity:0.85;"
            />
            <div class="proj-card__overlay"></div>
          </div>

          <div class="proj-card__content">

            <div class="proj-card__meta">
              <span
                v-for="(tag, i) in project.tags"
                :key="i"
                class="proj-tag proj-tag--wp"
              >
                {{ tag }}
              </span>

              <span class="proj-year">{{ project.year }}</span>
            </div>

            <h3 class="proj-card__title">{{ project.title }}</h3>

            <p class="proj-card__desc">
              {{ project.desc }}
            </p>

            <div class="proj-card__footer">

              <ul class="tech-pills">
                <li v-for="(tech, i) in project.tech" :key="i">
                  {{ tech }}
                </li>
              </ul>

              <div class="proj-links">
                <a
                  :href="project.link"
                  target="_blank"
                  class="proj-link proj-link--primary"
                >
                  Live ↗
                </a>
              </div>

            </div>

          </div>
        </article>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  filter: {
    type: String,
    default: 'all'
  }
})
/* ALL PROJECT DATA (single place control) */
const projects = [
  {
    "title": "Homex Paints",
    "year": "Present",
    "type" : "WordPress",
    "tags": ["WordPress"],
    "tech": ["WordPress", "Custom Theme", "WooCommerce", "Bootstrap"],
    "link": "https://homexpaints.com/",
    "image": "https://api.microlink.io/?url=https://homexpaints.com&screenshot=true&meta=false&embed=screenshot.url",
    "desc": "A full branded website for a premium paint manufacturer. Features product showcases, custom WordPress theme, and a polished UI."
  },
  {
    "title": "DSPCRM",
    "year": "Present",
    "tags": ["Vue"],
    "tech": ["Vue.js"],
    "link": "https://dspcrm.com/",
    "image": "https://api.microlink.io/?url=https://dspcrm.com&screenshot=true&meta=false&embed=screenshot.url",
    "desc": "A modern CRM-based web application built with Vue.js."
  },
  {
    "title": "axon.ae",
    "year": "2026",
    "tags": ["Shopify"],
    "tech": ["Shopify"],
    "link": "https://www.axon.ae/",
    "image": "https://api.microlink.io/?url=https://www.axon.ae/&screenshot=true&meta=false&embed=screenshot.url",
    "desc": "A premium Shopify e-commerce website."
  },
  {
    "title": "Aqua Aligners",
    "year": "2025",
    "tags": ["WordPress"],
    "tech": ["WordPress", "HTML5", "CSS3", "JavaScript", "ACF"],
    "link": "https://aquaaligners.com/",
    "image": "https://api.microlink.io/?url=https://aquaaligners.com/&screenshot=true&meta=false&embed=screenshot.url",
    "desc": "A modern dental aligners website with custom WordPress development."
  },
  {
    "title": "Biobalanced Organics",
    "year": "2025",
    "tags": ["WordPress"],
    "tech": ["WordPress", "Theme"],
    "link": "https://biobalancedorganics.com/",
    "image": "https://api.microlink.io/?url=https://biobalancedorganics.com/&screenshot=true&meta=false&embed=screenshot.url",
    "desc": "A professional WordPress website for organic products brand."
  },
  {
    "title": "Pearl Food Services",
    "year": "2024",
    "tags": ["WordPress"],
    "tech": ["WordPress", "Custom Theme"],
    "link": "https://pearlfoodservices.com/",
    "image": "https://api.microlink.io/?url=https://pearlfoodservices.com/&screenshot=true&meta=false&embed=screenshot.url",
    "desc": "Corporate food services website with custom WordPress theme."
  },
  {
    "title": "Stay Fresh Today",
    "year": "2024",
    "tags": ["WordPress"],
    "tech": ["WordPress", "Theme", "HTML5", "CSS3"],
    "link": "https://stayfreshtoday.com/",
    "image": "https://api.microlink.io/?url=https://stayfreshtoday.com/&screenshot=true&meta=false&embed=screenshot.url",
    "desc": "Blogging and content-based WordPress website."
  },
  {
    "title": "Akademos Research",
    "year": "2024",
    "tags": ["WordPress"],
    "tech": ["WordPress", "Theme", "HTML5", "CSS3"],
    "link": "https://akademosresearch.com/",
    "image": "https://api.microlink.io/?url=https://akademosresearch.com//&screenshot=true&meta=false&embed=screenshot.url",
    "desc": "Research-based corporate WordPress website."
  },
  {
    "title": "Rest Emulate",
    "year": "2024",
    "tags": ["WordPress"],
    "tech": ["WordPress", "Theme", "HTML5", "CSS3"],
    "link": "https://restemulate.com/",
    "image": "https://api.microlink.io/?url=https://restemulate.com/&screenshot=true&meta=false&embed=screenshot.url",
    "desc": "Corporate WordPress website with custom theme and UI."
  },
  {
    "title": "The Stock Dork",
    "year": "2026",
    "tags": ["Single Page", "WordPress"],
    "tech": ["WordPress", "HTML5", "CSS3", "ACF", "PHP"],
    "link": "https://staging-thestockdork.kinsta.cloud/category/reviews/brokerages/",
    "image": "https://api.microlink.io/?url=https://www.thestockdork.com/tc2000-review//&screenshot=true&meta=false&embed=screenshot.url",
    "desc": "Single page financial comparison landing page built with WordPress."
  },
  {
    "title": "Zing Activ Digital",
    "year": "2025",
    "tags": ["Custom", "Single Page"],
    "tech": ["HTML5", "CSS3"],
    "link": "https://zingactivdigital.com/pages/new-homepage",
    "image": "https://api.microlink.io/?url=https://zingactivdigital.com/pages/new-homepage/&screenshot=true&meta=false&embed=screenshot.url",
    "desc": "Custom single page branded website for digital agency."
  },
]

/* COUNTER */
const counters = reactive({
  projects: 0
})

const statsSection = ref(null)
let started = false

const animateCounter = (end) => {
  let current = 0

  const interval = setInterval(() => {
    if (current < end) {
      current++
      counters.projects = current
    } else {
      clearInterval(interval)
    }
  }, 150)
}
/* ✅ FILTER PROJECTS */
const filteredProjects = computed(() => {
  if (props.filter === 'all') {
    return projects
  }

  return projects.filter(project =>
    project.tags.some(
      tag => tag.toLowerCase() === props.filter.toLowerCase()
    )
  )
})
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true
      animateCounter(projects.length)
    }
  }, { threshold: 0.3 })

  if (statsSection.value) {
    observer.observe(statsSection.value)
  }
})
</script>