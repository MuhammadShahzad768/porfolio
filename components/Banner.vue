<template>
    <section class="hero" id="hero">
      <div class="container">
        <div class="hero__inner">

          <div class="hero__left">
            <div class="hero__status">
              <span class="pulse-dot"></span>
              <span>Available for new projects</span>
            </div>

            <h1 class="hero__heading">
              <span class="hero__hi">Hello, I'm</span>
              <span class="hero__name" id="heroName">Shahzad</span>
              <span class="hero__role">
                <span class="hero__role-inner" id="roleText">Web Developer</span>
              </span>
            </h1>

            <p class="hero__desc">
              I design and build high-performance websites and web apps —
              blending clean engineering with striking, user-first interfaces.
            </p>

            <div class="hero__actions">
              <a href="#projects" class="btn btn-primary">
                View work
                <svg viewBox="0 0 20 20" fill="none"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </a>
              <a href="#contact" class="btn btn-outline">Get in touch</a>
            </div>

            <div class="hero__counters">
              <div class="counter">
                <span class="counter__num"><span data-count="3">0</span>+</span>
                <span class="counter__label">Years experience</span>
              </div>
              <div class="counter__sep"></div>
              <div class="counter">
                <span class="counter__num"><span data-count="9">0</span>+</span>
                <span class="counter__label">Projects shipped</span>
              </div>
              <div class="counter__sep"></div>
              <div class="counter">
                <span class="counter__num"><span data-count="8">0</span>+</span>
                <span class="counter__label">Technologies</span>
              </div>
            </div>
          </div>

          <div class="hero__right">
            <div class="code-card">
              <div class="code-card__header">
                <div class="dots">
                  <span class="dot dot--red"></span>
                  <span class="dot dot--yellow"></span>
                  <span class="dot dot--green"></span>
                </div>
                <span class="code-card__file">portfolio.js</span>
              </div>
              <pre class="code-card__body"><code><span class="kw">const</span> <span class="fn">developer</span> = {
  <span class="prop">name</span>:    <span class="str">"Shahzad"</span>,
  <span class="prop">role</span>:    <span class="str">"Web Developer"</span>,
  <span class="prop">stack</span>: [
    <span class="str">"WordPress"</span>, <span class="str">"Vue.js"</span>,
    <span class="str">"JavaScript"</span>, <span class="str">"Tailwind"</span>
  ],
  <span class="prop">status</span>: <span class="str">"open to work ✦"</span>,
  <span class="fn">build</span>:  () =&gt; <span class="str">"magic 🪄"</span>
};</code></pre>
            </div>

            <div class="hero__chips">
              <span class="chip">HTML</span>
              <span class="chip">CSS</span>
              <span class="chip">JavaScript</span>
              <span class="chip">WordPress</span>
              <span class="chip">Tailwind</span>
              <span class="chip">Vue.js</span>
              <span class="chip">Shopify</span>
            </div>
          </div>

        </div>
      </div>

      <!-- Scrolling ticker -->
      <div class="ticker" aria-hidden="true">
        <div class="ticker__track">
          <span>HTML</span><span aria-hidden="true">✦</span>
          <span>CSS</span><span aria-hidden="true">✦</span>
          <span>JavaScript</span><span aria-hidden="true">✦</span>
          <span>WordPress</span><span aria-hidden="true">✦</span>
          <span>Tailwind CSS</span><span aria-hidden="true">✦</span>
          <span>Vue.js</span><span aria-hidden="true">✦</span>
          <span>Shopify</span><span aria-hidden="true">✦</span>
          <span>Figma</span><span aria-hidden="true">✦</span>
          <span>HTML</span><span aria-hidden="true">✦</span>
          <span>CSS</span><span aria-hidden="true">✦</span>
          <span>JavaScript</span><span aria-hidden="true">✦</span>
          <span>WordPress</span><span aria-hidden="true">✦</span>
          <span>Tailwind CSS</span><span aria-hidden="true">✦</span>
          <span>Vue.js</span><span aria-hidden="true">✦</span>
          <span>Shopify</span><span aria-hidden="true">✦</span>
          <span>Figma</span><span aria-hidden="true">✦</span>
        </div>
      </div>
    </section>
</template>