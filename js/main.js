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

const simpleBar = new SimpleBar(document.querySelector(".header__bottom--dropdown-wrapper"), {
  autoHide: false,
  scrollbarMaxSize: 80,
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#burger-menu').classList.toggle('header__burger-active')
    })
})


// HERO

const heroSwiper = new Swiper('#hero__swiper', {
  slidesPerView: 1,
  speed: 300,
  a11y: {
      containerRoleDescriptionMessage: String,
      enabled: Boolean,
      paginationBulletMessage: String,
      prevSlideMessage: String,
      itemRoleDescriptionMessage: String,
      lastSlideMessage: String,
      nextSlideMessage: String,
      slideRole: String,
    },
});


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
  spaceBetween: 40,
  slidesPerGroup: 3,
  navigation: {
    nextEl: ".swiper-btn--next",
    prevEl: ".swiper-btn--prev"
  },
  pagination: {
    type: "fraction",
    el: ".swiper-pagination--right",
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
      spaceBetween: 30
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
const eventsSlider = new Swiper('.events__swiper', {
slidesPerView: 3,
spaceBetween: 40,
navigation: {
  nextEl: ".events-swiper-btn--next",
  prevEl: ".events-swiper-btn--prev"
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
    spaceBetween: 30
  }
},
})

// projects

const partnersSlider = new Swiper('.partners__swiper-container', {
  slidesPerView: 3,
  spaceBetween: 40,
  slidesPerGroup: 3,
  navigation: {
    nextEl: ".partners__next-btn",
    prevEl: ".partners__prev-btn"
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
      spaceBetween: 30
    }
  },
})

// contacts

let tel = document.querySelector("#contacts__input-tel")

var im = new Inputmask("+7 (999) 999-99-99")

im.mask(tel);
new window.JustValidate("#contacts__form", {

    rules: {
      name: {
        required: true,
        minLenght: 2,
        maxLenght: 20
      },

      tel: {
        required: true,
        function: (name, value) => {
          const ph = tel.inputmask.unmaskedvalue();
          return Number(ph) && ph.length ===  10;
        }
    },
    },

   messages: {
         name: "Как вас зовут?",
         tel: {
           required: "Укажите ваш телефон",
           function: "Не достаточно количество символов"
         }
       }
  });



  // map

  ymaps.ready(init);
  function init(){
      var myMap = new ymaps.Map("map", {
          center: [55.76, 37.64],
          zoom: 11
      });

      var PlaceMark = new ymaps.Placemark([55.70, 37.51], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'js/metka.svg',
          iconImageSize:  [20, 60],
          iconImageOffset:  [-3, -42]
    });

    myMap.geoObjects.add(PlaceMark);
  }