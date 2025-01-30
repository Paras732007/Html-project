// GSAP Animations
gsap.from(".title", { duration: 1, opacity: 0, y: -20, delay: 0.5 });
gsap.from(".subtitle", { duration: 1, opacity: 0, y: -20, delay: 1 });
gsap.from(".hero-image", { duration: 1, opacity: 0, scale: 0.8, delay: 1.5 });

// ScrollTrigger for Features
gsap.utils.toArray(".feature").forEach((feature, index) => {
    gsap.from(feature, {
        opacity: 0,
        y: 20,
        duration: 1,
        scrollTrigger: {
            trigger: feature,
            start: "top 80%",
        },
        delay: index * 0.2
    });
});
