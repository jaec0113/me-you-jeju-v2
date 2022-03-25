// Main Page Animations
gsap.from(".hero", {
  duration: 2,
  opacity: 0,
})

gsap.from(".sns-link", {
  duration: 1,
  scale: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.3,
  ease: "elastic",
})

gsap.from(".button-link", {
  duration: 1,
  scale: 0.5,
  opacity: 0,
  delay: 0.25,
  stagger: 0.2,
  ease: "elastic", 
})
