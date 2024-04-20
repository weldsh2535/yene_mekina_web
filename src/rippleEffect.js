const removeRipples = () => {
  const ripples = document.querySelectorAll(".ripple-form");
  ripples.forEach((ripple) => {
    ripple.remove();
  });
};

const ripple = (e) => {
  let parent = e.target.parentNode;
  const ripple = document.createElement("div");
  ripple.classList.add("ripple-form");
  parent.insertBefore(ripple, e.target);
  setTimeout(() => removeRipples(), 1000);
};

export { ripple };