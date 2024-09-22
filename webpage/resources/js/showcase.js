const carousel = document.querySelector(".carousel");

const leftArrow = document.querySelector("#left_arrow");
const rightArrow = document.querySelector("#right_arrow");

let currentIndex = 0;
let prevIndex;
const images = document.querySelectorAll(".carousel_image");

const totalImages = Object.keys(images).length;

const imageWidth = images[1].getBoundingClientRect().x;

rightArrow.addEventListener("click", () => {
    carousel.classList.add("sliding-transition");
  
    prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % totalImages;
  
    carousel.style.transform = `translateX(-${imageWidth}px)`;
    backgroundImage.src = images[currentIndex].src.slice(0, -3) + "1000";
  
    setTimeout(() => {
      carousel.appendChild(images[prevIndex]);
      carousel.classList.remove("sliding-transition");
      carousel.style.transform = "";
    }, 500);
});

leftArrow.addEventListener("click", () => {
    prevIndex = currentIndex;
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;

    // Move Carousel to the left by one image, and insert the image at currentIndex at the beginning of carousel's DOM
    carousel.style.transform = `translateX(-${imageWidth}px)`;
    carousel.insertBefore(images[currentIndex], carousel.firstChild);

    // Now, let's start the transition effect, from -520 px to 0 px.
    setTimeout(() => {
      carousel.style.transform = "";
      carousel.classList.add("sliding-transition");

      // Changing the background Image
      backgroundImage.src = images[currentIndex].src.slice(0, -3) + "1000";
    }, 10);

    setTimeout(() => {
      // By removing the transition class, we ensure that the transition only occurs when we want it to and that we have full control over the carousel's movement.
      carousel.classList.remove("sliding-transition");
    }, 490);
});   
