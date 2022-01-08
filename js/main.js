// HEADER

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".header__bottom-btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header__bottom--dropdown");
      
      document.querySelectorAll(".header__bottom-btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("dropdown-btn-active");
        }
      });
      
      document.querySelectorAll(".header__bottom--dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-dropdown--list");
        }
      })
      dropdown.classList.toggle("active-dropdown--list");
      btn.classList.toggle("dropdown-btn-active")
    })
  })

  
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header__bottom-list")) {
      document.querySelectorAll(".header__bottom--dropdown").forEach(el => {
          el.classList.remove("active-dropdown--list");
      })
       document.querySelectorAll(".header__bottom-btn").forEach(el => {
          el.classList.remove("dropdown-btn-active");
      });
    }
  })
  })

  document.addEventListener("DOMContentLoaded", function() {
      document.querySelector('#burger').addEventListener('click', function() {
          document.querySelector('#burger-menu').classList.toggle('header__burger-active')

      })
  })

// HERO

    const container = document.querySelector(".hero__container")
    const swiper = new Swiper('#hero__swiper', {
        slidesPerView: 1,
  effect: 'fade',
  loop: true,
  direction: 'vertical',
  speed: 300,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop(5000);
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start(5000);
      });
    }
  },
    })

    

// GALLERY

document.addEventListener("DOMContentLoaded", function() {
    const selector = document.querySelector(".gallery__choices")  
  
    const choices = new Choices(selector, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices header_choices',
       },
    });
    
  });

  
let gallerySlider = new Swiper(".swiper-right--content", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  direction: 'vertical',
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination--right",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-btn--next",
    prevEl: ".swiper-btn--prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
})




// catalog

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__country-btn').forEach(function(tabsLink) {
        tabsLink.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.tab__content').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.toggle('tab-content-active')
        })
    })
})

const catalogCountry = document.querySelectorAll(".catalog__country-btn")

catalogCountry.forEach(function(catalogCountryTab) {
  catalogCountryTab.addEventListener("click", function() {
      let currentCatalogCountry = catalogCountryTab

      catalogCountry.forEach(function(catalogCountryTab) {
        catalogCountryTab.classList.remove('catalog__country-btn-active')
      })

      currentCatalogCountry.classList.add('catalog__country-btn-active')
  })
})

$( function() {
    $( "#accordion" ).accordion({
       icons: false,
       heightStyle: "content",
       collapsible: true,
       active: false
     });
} );



// PAINTER-TAB

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.accordion__painter-name').forEach(function(painterTabs) {
      painterTabs.addEventListener('click', function(eventPainter) {
          const path = eventPainter.currentTarget.dataset.path

          document.querySelectorAll('.italy__left-painter').forEach(function(PainterTabContent) {
              PainterTabContent.classList.remove('italy__left-painter-active')
          })
          document.querySelector(`[data-target="${path}"]`).classList.toggle('italy__left-painter-active')
      })
  })
})

const catalogPainter = document.querySelectorAll(".accordion__painter-name")

catalogPainter.forEach(function(catalogPainterTab) {
catalogPainterTab.addEventListener("click", function() {
    let currentCatalogPainter = catalogPainterTab

    catalogPainter.forEach(function(catalogPainterTab) {
      catalogPainterTab.classList.remove('accordion__painter-name-active')
    })

    currentCatalogPainter.classList.add('accordion__painter-name-active')
})
})



// EVENTS

const eventsContainer = document.querySelector(".events__swiper_container")
    const eventsSwiper = new Swiper('#events__new-swiper', {
        slidesPerView: 3,
        spaceBetween: 40,
        pagination: {
          el: ".swiper-pagination--right",
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-btn--next",
          prevEl: ".swiper-btn--prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30
      },
  
      1200: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },
    })
