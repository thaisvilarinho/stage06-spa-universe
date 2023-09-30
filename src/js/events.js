import { navLinks, logoLink, homeLink } from "./elements.js";

function activateNavLink(navLink) {
  navLinks.forEach(link => {
    if (link !== navLink) {
      link.classList.remove('active');
    }
  });

  navLink.classList.add('active');
}


function setupNavigation() {
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      activateNavLink(this);
    });
  });
}

function redirectToHome(){
  logoLink.addEventListener('click', function(event) {
    activateNavLink(homeLink); 
  });
}

export {
  setupNavigation,
  redirectToHome
}