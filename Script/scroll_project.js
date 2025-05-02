function scrollToProjects() {
    // Scroll to 110vh (viewport height) from the top
    window.scrollTo({
        top: window.innerHeight * 1.1, // 110vh (1.1 times the viewport height)
        behavior: 'smooth' // Smooth scroll effect
    });
}

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToAbout() {
    window.scrollTo({
      top: window.innerHeight * 2.2, // 220vh
      behavior: 'smooth' // For smooth scrolling
    });
  }
  
  function scrollToContact() {
    window.scrollTo({
        top: window.innerHeight * 3.3, // 220vh
      behavior: 'smooth'
    });
  }
  