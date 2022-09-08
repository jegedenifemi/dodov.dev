let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
  setTheme('dark');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

function setTheme(theme) {
    if (theme == 'dark') {
      document.getElementById('switcher-id').href = './themes/dark.css';
    } else if (theme == 'light') {
      document.getElementById('switcher-id').href = './themes/light.css';
    } else if (theme == 'monokai') {
        document.getElementById('switcher-id').href = './themes/monokai.css';
    } else if (theme == 'gitdark') {
      document.getElementById('switcher-id').href = './themes/gitdark.css';
    } else if (theme == 'gitlight') {
      document.getElementById('switcher-id').href = './themes/gitlight.css';
    } else if (theme == 'solarized') {
        document.getElementById('switcher-id').href = './themes/solarized.css';

    }
  }
