// const textarea=document.querySelector('textarea')
// const lineNumbers=document.querySelector('.line-numbers')

// textarea.addEventListener('keyup',event=>{
//     const numberOfLines=event.target.value.split('\\n').length

//     lineNumbers.innerHTML=Array(numberOfLines)
//     .fill('<span></span>')
//     .join('')
// })
// textarea.addEventListener('keydown',event=>{
//     if(event.key==='Tab'){
//         const start=textarea.selectionStart
//         const end=textarea.selectionEnd

//         textarea.value.substring(0,start)+'\\t'+textarea.value.substring(end)

//         event.preventDefault()
//     }
// })
// console.log('textarea','textarea')

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
