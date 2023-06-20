// console.log('JS');   연결 확인 부분

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  // Logic..
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// badge가 어느정도 값 아래로 내려가면 안보이게 함
const badgeEl = document.querySelector('header .badges');

// window.addEventListener('scroll', function() {
//   console.log('scroll!');
// });

// 부하를 줄이기 위하여 
// window.addEventListener('scroll', _.throttle(function() {
//   // console.log('scroll!') ;
//   console.log(window.scrollY);
//   if (window.scrollY > 500) {
//     // 배지 숨기기
//     // badgeEl.style.display = 'none';
//     // gsap.to(요소, 지속시간, 옵션);
//     gsap.to(badgeEl, .6, {
//       opacity: 0,
//       display: 'none'
//     })
//   } else {
//     // 배지 보이기
//     // badgeEl.style.display = 'block';
//     gsap.to(badgeEl, .6, {
//       opacity: 1,
//       display: 'block'
//     })
//   }
// }, 300));  //300은 ms 0.3초
// _.throttle(함수, 시간)

window.addEventListener('scroll', _.throttle(function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {
    // Badge 요소 숨기기!
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  // 페이지 스크롤 위치가 500px이 넘지 않으면.
    // 버튼 보이기!
    gsap.to('#to-top', .2, {
      x: 0
    });

  } else {
    // Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to('#to-top', .2, {
      x: 100
    });
  }
}, 300));
// 상단으로 스크롤 버튼을 클릭하면,

const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


// visual 이 화면에 순차적으로 나타나게 하려고 함
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,  // 0.7, 1.4, 2.1, 2.8 초 뒤에 동작
    opacity: 1
  });
});

// notice의 공지사항의 swiper 동작
// new 자바스크립트 생성자(클래스)
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
}); 

// new Swiper('.swiper-container', {
//   direction: 'vertical', // 수직 슬라이드
//   autoplay: true, // 자동 재생 여부
//   loop: true // 반복 재생 여부
// });

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' 수평은 기본값으로 들어가 있어 따로 넣을 필요 없음
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000    // 5s (ms단위)
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'  
  }
});
// AWARDS 부분 추가
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal' 수평은 기본값으로 들어가 있어 따로 넣을 필요 없음
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});
// new Swiper('.awards .swiper-container', {
//   // direction: 'horizontal', // 수평 슬라이드
//   autoplay: true, // 자동 재생 여부
//   loop: true, // 반복 재생 여부
//   spaceBetween: 30, // 슬라이드 사이 여백
//   slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
//   // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
//   navigation: { // 슬라이드 이전/다음 버튼 사용 여부
//     prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
//     nextEl: '.awards .swiper-next' // 다음 버튼 선택자
//   }
// })



// 스타벅스 프로모션
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion // 특정 함수의 변수 값을 지속적으로 반대 값으로 표형 
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});


// youtobe 애니매에션
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  // gsap.to(selector, 1, {
  gsap.to(
    selector,   // 선택자
    random(1.5, 2.5),  // 애니메이션 동작 시간
    { // 옵션
      // y: 20,
      y: size,
      repeat: -1,   // -1 무한 반복
      yoyo: true,     // 다시 올라 가게 하는 yoyo : 애니메이션이 한번 진행하고 다시 돌아옴
      ease: Power1.easeInOut,  // google (gsap easing) 타이밍 함수 찾아 넣을 수있음
      delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// scrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8  // 뷰포트의 어느 지점에 감시가 되었는지 판단하는 요소
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})


// 올해가 언제인가..??
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  // 2023년 반환


