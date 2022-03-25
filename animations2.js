// Link Page Animations

gsap.from(".hero", {
  duration: 2,
  opacity: 0,
})
gsap.from(".glass", {
  duration: 3,
  opacity: 0,
  y: 100, 
  scale: 0.75,
  stagger: 0.2,
  ease: "elastic",
})


// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".glass",
//     start: "top top",
//     scrub: true,
//   }
// });

// tl.from(".glass", { opacity: 0, duration: 1 })