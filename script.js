// var karambit = document.getElementById('karambit1');

// console.log("test");

// window.addEventListener('scroll', parallax);

// function parallax() {
//     var value = window.scrollY;
//     karambit.style.bottom = value + 'px';
//     karambit.style.transform = 'rotate(' + value/10 + 'deg)';
//     console.log(value);
// }
// let nav = document.querySelector('.hidden-nav');

// window.addEventListener('scroll', stickyNav);

// function stickyNav() {
//     nav.classList.toggle("sticky", window.scrollY > 100);

//     // if (window.scrollY > 100) {
//         let value = window.scrollY;
//         nav.style.opacity = value / 300;
//     // }
// }

gsap.to(".hero .karambit", {
    scrollTrigger: {
        scrub: 1
    },
    rotation: 60
});

gsap.to(".hero", {
    scrollTrigger: {
        scrub: 1
    },
    scale: 1.05, y: 300
});
