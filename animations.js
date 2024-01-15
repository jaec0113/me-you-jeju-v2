// Main Page Animations
gsap.from(".hero-section", {
  duration: 2,
  opacity: 0,
})

gsap.from(".sns-links", {
  duration: 1,
  scale: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.3,
  ease: "elastic",
})

gsap.from(".podcast-links", {
  duration: 1,
  scale: 0.5,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
  ease: "elastic", 
})
