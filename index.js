window.alert('Welcome to Rhea Blossoms!');
const heroText = document.querySelector('.hero-text');
const greeting = document.createElement('p');
greeting.className = 'hero-greeting';
const hour = new Date().getHours();
greeting.textContent =
    hour < 12 ? 'Good morning! Welcome to Rhea Blossoms.' :
    hour < 18 ? 'Good afternoon! Welcome to Rhea Blossoms.' :
    'Good evening! Welcome to Rhea Blossoms.';
heroText?.prepend(greeting);
