console.log("Portfolio chargé");

const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    if (top < trigger) {
      element.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

const roleText = 'IT Technician • Networking • Systems • Security';
const roleElement = document.getElementById('animated-role');
let i = 0;

function typeRole() {
  if (!roleElement) return;
  if (i < roleText.length) {
    roleElement.textContent += roleText.charAt(i);
    i += 1;
    setTimeout(typeRole, 45);
  }
}

if (roleElement) {
  roleElement.textContent = '';
  typeRole();
}
