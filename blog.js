// get images to be zoomed on click
let clickZoom1 = document.getElementById("img1");
let clickZoom2 = document.getElementById("img2");

// get div containing zoomed image
let mod1 = document.getElementById("modal1");
let mod2 = document.getElementById("modal2");

// show zoomed image on click of image
clickZoom1.onclick = () => {
  mod1.style.display = "flex";

  //   close zoomed image when outside the image is clicked
  window.onclick = (event) => {
    if (event.target === mod1) {
      mod1.style.display = "none";
      mod1.style.cursor = "zoom-out";
    }
  };
};

// show zoomed image on click of image
clickZoom2.onclick = () => {
  mod2.style.display = "flex";

  //   close zoomed image when outside the image is clicked
  window.onclick = (event) => {
    if (event.target === mod2) {
      mod2.style.display = "none";
      mod2.style.cursor = "zoom-out";
    }
  };
};
