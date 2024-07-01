import gsap from "gsap";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");
  const pageContent = document.getElementById("page-content"); // Add this line

  if (bannerOne && bannerTwo && bannerThree && bannerFour && pageContent) {
    const tl = gsap.timeline();

    // Hide page content at the beginning
    tl.set(pageContent, { autoAlpha: 0 });

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      autoAlpha: 0,
      yPercent: 100,
    })
      .to([bannerOne, bannerTwo, bannerThree, bannerFour], {
        autoAlpha: 1,
        yPercent: 0,
        stagger: 0.1,
      })
      .to([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: -100,
        stagger: 0.1,
      })
      // Show page content after animation
      .to(pageContent, { autoAlpha: 1, duration: 0.5 });
  }
};

export const animatePageOut = (href, router) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");
  const pageContent = document.getElementById("page-content"); // Add this line

  if (bannerOne && bannerTwo && bannerThree && bannerFour && pageContent) {
    const tl = gsap.timeline();

    // Hide page content immediately
    tl.set(pageContent, { autoAlpha: 0 });

    tl.delay(0.1);
    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      autoAlpha: 0,
      yPercent: 100,
    })
      .to([bannerOne, bannerTwo, bannerThree, bannerFour], {
        autoAlpha: 1,
        yPercent: 0,
        stagger: 0.3,
      })
      .to([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: 100,
        stagger: 0.3,
        onComplete: () => {
          router.push(href);
        },
      });
  }
};