import { spring } from "react-router-transition";

const mapStylesBounce = styles => ({
  opacity: styles.opacity,
  transform: `scale(${styles.scale})`,
  position: styles.foo <= 1 ? "relative" : "absolute",
  left: styles.foo <= 1 ? "" : "0",
  padding: styles.foo <= 1 ? "" : "0 2rem",
  width: "100%",
  height: "100%"
});

const mapStylesFade = styles => ({
  position: styles.foo <= 1 ? "relative" : "absolute",
  width: "100%",
  height: "100%",
  opacity: styles.opacity
});

const mapStylesSlide = styles => ({
  transform: `translateX(${styles.translateX}%)`
});
// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
    foo: 0
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
    foo: 2
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
    foo: 1
  }
};

const fadeTransition = {
  atEnter: { opacity: 0, foo: 0 },
  atLeave: { opacity: 0, foo: 2 },
  atActive: { opacity: 1, foo: 1 }
};

const slideInTranstion = {
  atEnter: { translateX: 100 },
  atLeave: { translateX: -100 },
  atActive: { translateX: 0 }
};

export const animations = {
  mapStylesBounce,
  bounceTransition,
  mapStylesFade,
  fadeTransition,
  slideInTranstion,
  mapStylesSlide
};
