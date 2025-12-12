 <section class="diagonal-baroque">
    <div class="content">
      <h2 class="reveal">Baroque, maar dan stil</h2>
      <p class="reveal">
        Klassieke elegantie ontmoet modern minimalisme.  
        Geen ruis. Geen drukte. Alleen vorm, ritme en rust.
      </p>
      <a href="#" class="cta reveal">Ontdek meer</a>
    </div>
  </section>

  <style>

    .diagonal-baroque {
  position: relative;
  background: #f7f5f2;
  padding: 140px 20px;
  clip-path: polygon(0 0, 100% 8%, 100% 100%, 0 92%);
  overflow: hidden;
}

.diagonal-baroque::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    transparent 45%,
    rgba(0,0,0,0.025) 45%,
    rgba(0,0,0,0.025) 55%,
    transparent 55%
  );
  pointer-events: none;
}

.diagonal-baroque .content {
  max-width: 720px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

/* TYPOGRAPHY */

.diagonal-baroque h2 {
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  font-weight: 500;
  margin-bottom: 22px;
  letter-spacing: -0.4px;
}

.diagonal-baroque p {
  font-size: 16px;
  color: #555;
  margin-bottom: 36px;
}

.cta {
  display: inline-block;
  padding: 12px 30px;
  border: 1px solid #1f1f1f;
  text-decoration: none;
  color: #1f1f1f;
  font-size: 14px;
  letter-spacing: 1px;
  transition: background .3s ease, color .3s ease;
}

.cta:hover {
  background: #1f1f1f;
  color: #fff;
}

/* ===============================
   APPLE-STYLE PROGRESSIVE REVEAL
   =============================== */

.js .reveal {
  opacity: 0;
  transform: translateY(32px) scale(0.98);
  filter: blur(6px);
  transition:
    opacity 1.1s ease,
    transform 1.1s cubic-bezier(.22,1,.36,1),
    filter 1.1s ease;
}

.js .reveal.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

/* STAGGER */
.js .reveal:nth-child(1) { transition-delay: 0s; }
.js .reveal:nth-child(2) { transition-delay: .15s; }
.js .reveal:nth-child(3) { transition-delay: .3s; }
.js .reveal:nth-child(4) { transition-delay: .45s; }

/* ACCESSIBILITY */
@media (prefers-reduced-motion: reduce) {
  .js .reveal {
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
  }
}

</style>

<script>
    // Progressive enhancement
document.documentElement.classList.add('js');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});

</script>