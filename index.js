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

// SET THEME BY GIVING ROOT CLASS NAME
let setTheme = (theme) => (document.documentElement.className = theme);

// ASSIGN DROP DOWN TO A VARIABLE
const themeDropDown = document.getElementById("theme_select");

// SET THEME ON SELECT OF DROPDOWN OPTION
themeDropDown.addEventListener("change", function () {
  setTheme(this.value);

  // STORE SELECTED THEME ON LOCAL STORAGE
  localStorage.setItem("theme", themeDropDown.value);
});

// GET STORED THEME & APPLY WHEN NEW PAGE LOADS
const storedTheme = localStorage.getItem("theme");
window.onload = setTheme(storedTheme);

// FUNCTION TO REPLACE FAVICON LINK IN HTML HEAD
function changeFavicon(src) {
  var newLink = document.createElement("link");
  var oldLink = document.getElementById("favicon");
  newLink.id = "favicon";
  newLink.rel = "shortcut icon";
  newLink.href = src;
  // DELETE OLD FAVICON IN HEAD
  if (oldLink) {
    document.head.removeChild(oldLink);
  }
  // ADD NEW FAVICON TO HEAD
  document.head.appendChild(newLink);

  // KEEP SAME FAVICON EVEN ON A DIFFERENT PAGE
  localStorage.setItem("icon", newLink.href);
}

// CHANGE FAVICON WITH SELECTED THEME
themeDropDown.onchange = () => {
  // CHANGE FAVICON LINK SRC DEPENDING ON THEME SELECTED
  if (themeDropDown.value === "dark") {
    changeFavicon(
      "https://dodov.dev/media/site/7c35252aa6-1640615600/favicon-dark-plus.png"
    );
  } else if (themeDropDown.value === "light") {
    changeFavicon(
      "https://dodov.dev/media/site/9c26eb7f74-1614418428/favicon-light-plus.png"
    );
  } else if (themeDropDown.value === "monokai") {
    changeFavicon(
      "https://dodov.dev/media/site/d0298ef0fd-1614418428/favicon-monokai.png"
    );
  } else if (themeDropDown.value === "g-dark") {
    changeFavicon(
      "https://dodov.dev/media/site/f2f7858efb-1640615600/favicon-github-dark.png"
    );
  } else if (themeDropDown.value === "g-light") {
    changeFavicon(
      "https://dodov.dev/media/site/381999d79e-1640615600/favicon-github-light.png"
    );
  } else if (themeDropDown.value === "solarized") {
    changeFavicon(
      "https://dodov.dev/media/site/b038a44974-1640615600/favicon-solarized-light.png"
    );
  }
};

// GET STORED FAVICON & APPLY WHEN NEW PAGE LOADS
const storedIcon = localStorage.getItem("icon");
window.onload = changeFavicon(storedIcon);
