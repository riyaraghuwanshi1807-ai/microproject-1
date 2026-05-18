// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('open');
}

// ===== AOS (Animate On Scroll) =====
function initAOS() {
  const elements = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-aos-delay') || 0;
        setTimeout(() => {
          entry.target.classList.add('aos-animate');
        }, parseInt(delay));
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  elements.forEach(el => observer.observe(el));
}

// ===== COUNT-UP ANIMATION =====
function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M+';
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K+';
  return num + '+';
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2000;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = formatNumber(current);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = formatNumber(target);
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('.count-up');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = true;
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ===== RIPPLE EFFECT =====
function initRipple() {
  document.querySelectorAll('.ripple').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position: absolute; border-radius: 50%;
        background: rgba(255,255,255,0.35);
        width: ${size}px; height: ${size}px;
        left: ${e.clientX - rect.left - size/2}px;
        top: ${e.clientY - rect.top - size/2}px;
        transform: scale(0); animation: rippleAnim 0.6s linear;
        pointer-events: none;
      `;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
  // Add ripple keyframe
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = '@keyframes rippleAnim { to { transform: scale(2.5); opacity: 0; } }';
    document.head.appendChild(style);
  }
}

// ===== DONOR REGISTRATION FORM =====
function submitDonation(e) {
  e.preventDefault();
  document.getElementById('donateForm').style.display = 'none';
  document.getElementById('successMsg').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== CONTACT FORM =====
function submitContact(e) {
  e.preventDefault();
  e.target.style.display = 'none';
  document.getElementById('contactSuccess').style.display = 'block';
}

// ===== EMERGENCY FORM =====
function submitEmergency(e) {
  e.preventDefault();
  e.target.style.display = 'none';
  document.getElementById('emergencySuccess').style.display = 'block';
}

// ===== DONOR SEARCH =====
const mockDonors = [
  { name: 'Amit Sharma',   blood: 'O+',  city: 'Delhi',     phone: '+91 98765 11111', lastDonated: '3 months ago' },
  { name: 'Priya Verma',   blood: 'A+',  city: 'Mumbai',    phone: '+91 98765 22222', lastDonated: '4 months ago' },
  { name: 'Rahul Singh',   blood: 'B+',  city: 'Bangalore', phone: '+91 98765 33333', lastDonated: '2 months ago' },
  { name: 'Sneha Patel',   blood: 'O-',  city: 'Delhi',     phone: '+91 98765 44444', lastDonated: '5 months ago' },
  { name: 'Vikram Nair',   blood: 'AB+', city: 'Chennai',   phone: '+91 98765 55555', lastDonated: '6 months ago' },
  { name: 'Ananya Gupta',  blood: 'A-',  city: 'Hyderabad', phone: '+91 98765 66666', lastDonated: '3 months ago' },
  { name: 'Rohan Mehta',   blood: 'B-',  city: 'Delhi',     phone: '+91 98765 77777', lastDonated: '4 months ago' },
  { name: 'Kavya Reddy',   blood: 'AB-', city: 'Pune',      phone: '+91 98765 88888', lastDonated: '2 months ago' },
];

function searchDonors() {
  const bloodGroup = document.getElementById('searchBlood').value;
  const city = document.getElementById('searchCity').value.trim().toLowerCase();
  const resultsDiv = document.getElementById('searchResults');
  if (!bloodGroup && !city) {
    resultsDiv.innerHTML = '<p style="color:var(--red);text-align:center;padding:1rem;">Please select a blood group or enter a city.</p>';
    return;
  }
  const filtered = mockDonors.filter(d => {
    const matchBlood = bloodGroup ? d.blood === bloodGroup : true;
    const matchCity  = city ? d.city.toLowerCase().includes(city) : true;
    return matchBlood && matchCity;
  });
  if (!filtered.length) {
    resultsDiv.innerHTML = `<div style="text-align:center;padding:2rem;background:white;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
      <i class="fa-solid fa-circle-xmark" style="font-size:3rem;color:var(--red);display:block;margin-bottom:1rem;"></i>
      <h3 style="color:#1a1a2e;">No donors found</h3>
      <p style="color:#6c757d;">Try a different blood group or city.</p></div>`;
    return;
  }
  resultsDiv.innerHTML = `<h3 style="margin-bottom:1rem;color:#1a1a2e;font-weight:700;">${filtered.length} Donor(s) Found</h3>` +
    filtered.map(d => `
      <div class="donor-card">
        <div class="donor-blood">${d.blood}</div>
        <div class="donor-info">
          <h3>${d.name}</h3>
          <p><i class="fa-solid fa-location-dot"></i> ${d.city}</p>
          <p><i class="fa-solid fa-clock"></i> Last donated: ${d.lastDonated}</p>
        </div>
        <a href="tel:${d.phone}" class="btn-primary ripple">
          <i class="fa-solid fa-phone"></i> Contact
        </a>
      </div>`).join('');
  initRipple();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initCounters();
  initRipple();
});
