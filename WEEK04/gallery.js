id="a6d0di"
const images = document.querySelectorAll(".gallery img");
const viewer = document.querySelector(".viewer");
const viewerImage = viewer.querySelector("img");
const closeButton = document.querySelector(".close-viewer");

images.forEach((image) => {

  image.addEventListener("click", () => {

    viewerImage.src = image.src;

    viewer.showModal();
  });

});

closeButton.addEventListener("click", () => {
  viewer.close();
});
