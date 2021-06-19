var r = document.querySelector(':root');
localStorage.setItem('mode', 'true');

var darkMode = {
    darkPrimaryColor: '#182742',
    primaryColor: '#233963',
    accentColor: '#FF4081',
    lightPrimary: '#4570bf',
    textColor: '#b0b0b0',
    whiteTextColor: '#b0b0b0',
    backgroundColor: '#5b6d8c'
};

var lightMode = {
    darkPrimaryColor: '#1976D2',
    primaryColor: '#2196F3',
    accentColor: '#FF4081',
    lightPrimary: '#BBDEFB',
    textColor: '#FFFFFF',
    whiteTextColor: '#363636',
    backgroundColor: '#FFFFFF'
};

function lightModeEnable() {
    r.style.setProperty('--dark-primary-color', lightMode.darkPrimaryColor)
    r.style.setProperty('--primary-color', lightMode.primaryColor)
    r.style.setProperty('--accent-color', lightMode.accentColor)
    r.style.setProperty('--light-primary', lightMode.lightPrimary)
    r.style.setProperty('--text-color', lightMode.textColor)
    r.style.setProperty('--white-text-color', lightMode.whiteTextColor)
    r.style.setProperty('--background-color', lightMode.backgroundColor)
}

function darkModeEnable() {
    r.style.setProperty('--dark-primary-color', darkMode.darkPrimaryColor);
    r.style.setProperty('--primary-color', darkMode.primaryColor);
    r.style.setProperty('--accent-color', darkMode.accentColor);
    r.style.setProperty('--light-primary', darkMode.lightPrimary);
    r.style.setProperty('--text-color', darkMode.textColor);
    r.style.setProperty('--white-text-color', darkMode.whiteTextColor);
    r.style.setProperty('--background-color', darkMode.backgroundColor);
}

function lightModeOn() {
    localStorage.setItem('mode', 'true');
    lightModeEnable();
}

function darkModeOn() {
    localStorage.setItem('mode', 'false');
    darkModeEnable();
}

if (localStorage.getItem('mode') == 'true') {
    console.log('light')
    lightModeEnable();
} else {
    darkModeEnable();
    console.log('dark')
}
