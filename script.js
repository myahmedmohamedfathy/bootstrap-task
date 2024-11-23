function switchTheme(theme) {
    if (theme === 'dark') {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else if (theme === 'light') {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
