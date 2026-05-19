import { onMounted, onUnmounted } from 'vue'

export const usePortfolioEffects = () => {
  let scrollHandler = null
  let roleInterval = null

  onMounted(() => {
    const $ = (sel, ctx = document) => ctx.querySelector(sel)
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)]

    /* ================= YEAR ================= */
    const yearEl = $('#year')

    if (yearEl) {
      yearEl.textContent = new Date().getFullYear()
    }

    /* ================= HEADER SCROLL ================= */
    const header = $('#header')
    const sections = $$('section[id]')
    const navLinks = $$('[data-nav]')

    function setActiveNav() {
      const y = window.scrollY + 120

      sections.forEach((sec) => {
        if (
          y >= sec.offsetTop &&
          y < sec.offsetTop + sec.offsetHeight
        ) {
          navLinks.forEach((a) => {
            a.classList.toggle(
              'active',
              a.getAttribute('href') === `#${sec.id}`
            )
          })
        }
      })
    }

    scrollHandler = () => {
      if (header) {
        header.classList.toggle(
          'scrolled',
          window.scrollY > 40
        )
      }

      setActiveNav()
    }

    window.addEventListener('scroll', scrollHandler, {
      passive: true
    })

    scrollHandler()

    /* ================= MOBILE NAV ================= */
    const hamburger = $('#hamburger')
    const navList = $('#navList')

    if (hamburger && navList) {
      hamburger.addEventListener('click', () => {
        const open = navList.classList.toggle('open')

        hamburger.classList.toggle('active', open)

        hamburger.setAttribute(
          'aria-expanded',
          open
        )
      })

      $$('a', navList).forEach((a) => {
        a.addEventListener('click', () => {
          navList.classList.remove('open')
          hamburger.classList.remove('active')

          hamburger.setAttribute(
            'aria-expanded',
            'false'
          )
        })
      })
    }

    /* ================= ROLE ROTATOR ================= */
    const roleEl = $('#roleText')

    const roles = [
      'Web Developer',
      'Frontend Engineer',
      'UI Builder',
      'WordPress Expert'
    ]

    let roleIdx = 0

    if (roleEl) {
      roleEl.style.transition =
        'opacity 0.3s, transform 0.3s'

      roleInterval = setInterval(() => {
        roleEl.style.opacity = '0'
        roleEl.style.transform =
          'translateY(8px)'

        setTimeout(() => {
          roleIdx =
            (roleIdx + 1) % roles.length

          roleEl.textContent =
            roles[roleIdx]

          roleEl.style.opacity = '1'
          roleEl.style.transform =
            'translateY(0)'
        }, 300)
      }, 3200)
    }

    /* ================= COUNTER ================= */
    function animateCounter(el) {
      const target = +el.dataset.count
      const duration = 1800
      const start = performance.now()

      function update(now) {
        const progress = Math.min(
          (now - start) / duration,
          1
        )

        const eased =
          1 - Math.pow(1 - progress, 3)

        el.textContent = Math.round(
          eased * target
        )

        if (progress < 1) {
          requestAnimationFrame(update)
        } else {
          el.textContent = target
        }
      }

      requestAnimationFrame(update)
    }

    const counterObserver =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return

            const counter =
              entry.target.querySelector(
                '[data-count]'
              )

            if (
              counter &&
              !counter.dataset.done
            ) {
              counter.dataset.done = '1'
              animateCounter(counter)
            }

            counterObserver.unobserve(
              entry.target
            )
          })
        },
        {
          threshold: 0.5
        }
      )

    $$('.counter').forEach((counter) => {
      counterObserver.observe(counter)
    })

    /* ================= REVEAL ANIMATION ================= */
    const revealObserver =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return

            entry.target.classList.add(
              'visible'
            )

            revealObserver.unobserve(
              entry.target
            )
          })
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -50px 0px'
        }
      )

    $$(
      '.reveal, .skill-card, .project, .about-pill'
    ).forEach((el) => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal')
      }

      revealObserver.observe(el)
    })

    /* ================= HERO NAME ================= */
    const heroName = $('#heroName')

    if (heroName) {
      heroName.style.transition =
        'letter-spacing 0.4s cubic-bezier(0.34,1.56,0.64,1)'

      heroName.addEventListener(
        'mouseenter',
        () => {
          heroName.style.letterSpacing =
            '-0.01em'
        }
      )

      heroName.addEventListener(
        'mouseleave',
        () => {
          heroName.style.letterSpacing =
            '-0.03em'
        }
      )
    }

    /* ================= CUSTOM CURSOR ================= */
    const cursor = $('#cursor')
    const dot =
      cursor?.querySelector('.cursor__dot')
    const ring =
      cursor?.querySelector('.cursor__ring')

    let mx = -999
    let my = -999
    let rx = -999
    let ry = -999

    if (
      cursor &&
      window.matchMedia('(pointer:fine)')
        .matches
    ) {
      document.addEventListener(
        'mousemove',
        (e) => {
          mx = e.clientX
          my = e.clientY
        }
      )

      const lerp = (a, b, t) =>
        a + (b - a) * t

      const animateRing = () => {
        rx = lerp(
          rx === -999 ? mx : rx,
          mx,
          0.12
        )

        ry = lerp(
          ry === -999 ? my : ry,
          my,
          0.12
        )

        if (dot) {
          dot.style.transform =
            `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`
        }

        if (ring) {
          ring.style.transform =
            `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`
        }

        requestAnimationFrame(animateRing)
      }

      animateRing()

      const hoverEls =
        'a, button, .skill-card, .project, .chip'

      document.addEventListener(
        'mouseover',
        (e) => {
          if (
            e.target.closest(hoverEls)
          ) {
            document.body.classList.add(
              'cursor-hover'
            )
          }
        }
      )

      document.addEventListener(
        'mouseout',
        (e) => {
          if (
            e.target.closest(hoverEls)
          ) {
            document.body.classList.remove(
              'cursor-hover'
            )
          }
        }
      )
    }
  })

  onUnmounted(() => {
    if (scrollHandler) {
      window.removeEventListener(
        'scroll',
        scrollHandler
      )
    }

    if (roleInterval) {
      clearInterval(roleInterval)
    }
  })
}