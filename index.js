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

// THEME CHANGE ON DROPDOWN SELECT
// const setTheme = (theme) => (document.documentElement.className = theme);

// document.getElementById("theme_select").addEventListener("change", function () {
//   setTheme(this.value);
// });

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

// GET STORED THEME
const storedTheme = localStorage.getItem("theme");

// APPLY THEME WHEN WINDOW LOADS
window.onload = () => {
  if (storedTheme !== null) {
    setTheme(storedTheme);
  }
};
