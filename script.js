// -------------- MAIN --------------


//Header
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});


//Hero (auto scroll)
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("heroSlider");
  let autoScroll = true;
  let scrollAmount = slider.clientWidth;
  let scrollTimer;
  let isAutoScrolling = false;

  function startAutoScroll() {
    scrollTimer = setInterval(() => {
      if (!autoScroll) return;

      isAutoScrolling = true; // Žymime, kad tai auto scroll
      let maxScrollLeft = slider.scrollWidth - slider.clientWidth;

      if (Math.abs(slider.scrollLeft - maxScrollLeft) < 5) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }

      // Atlaisviname žymę po 800ms (užtenka, kad scroll įvykis būtų priskirtas auto scroll)
      setTimeout(() => {
        isAutoScrolling = false;
      }, 800);

    }, 3000);
  }

  function stopAutoScroll() {
    autoScroll = false;
    clearInterval(scrollTimer);
  }

  slider.addEventListener("scroll", () => {
    // Sustabdom tik tada, kai vartotojas juda, o ne kai juda auto scroll
    if (!isAutoScrolling) {
      stopAutoScroll();
    }
  }, { passive: true });

  startAutoScroll();
});


// -------------- Index --------------

// How (fade)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.step').forEach(el => observer.observe(el));


