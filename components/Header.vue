<template>
     <header class="header" id="header">
    <nav class="nav container">
      <NuxtLink to="/"  class="logo">
        <span class="logo__mark">S</span>
        <span class="logo__name">shahzad<em>.dev</em></span>
     </NuxtLink>

      <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span>
      </button>

      <ul class="nav__list" id="navList">
        <li><a href="#about" class="nav__link" data-nav>About</a></li>
        <li><a href="#skills" class="nav__link" data-nav>Skills</a></li>
        <li><NuxtLink to="/projects" class="nav__link">Projects</NuxtLink></li>
        <li><a href="#projects" class="nav__link" data-nav>Work</a></li>
        <li><a href="#services" class="nav__link" data-nav>Services</a></li>
        <li><a href="#journey" class="nav__link" data-nav>Journey</a></li>
        <li><a href="#contact" class="nav__link" data-nav>Contact</a></li>
      </ul>

      <a href="#contact" class="nav__hire">
        <span>Hire me</span>
        <svg viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </nav>
  </header>
</template>