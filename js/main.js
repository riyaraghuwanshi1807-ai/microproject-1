// ===== NAVBAR TOGGLE =====
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}

// ===== DONOR REGISTRATION FORM =====
function submitDonation(e) {
  e.preventDefault();
  const form = document.getElementById('donateForm');
  const successMsg = document.getElementById('successMsg');
  form.style.display = 'none';
  successMsg.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== CONTACT FORM =====
function submitContact(e) {
  e.preventDefault();
  const form = e.target;
  const successMsg = document.getElementById('contactSuccess');
  form.style.display = 'none';
  successMsg.style.display = 'block';
}

// ===== EMERGENCY FORM =====
function submitEmergency(e) {
  e.preventDefault();
  const form = e.target;
  const successMsg = document.getElementById('emergencySuccess');
  form.style.display = 'none';
  successMsg.style.display = 'block';
}

// ===== SEARCH DONORS =====
const mockDonors = [
  { name: 'Amit Sharma', blood: 'O+', city: 'Delhi', phone: '+91 98765 11111', lastDonated: '3 months ago' },
  { name: 'Priya Verma', blood: 'A+', city: 'Mumbai', phone: '+91 98765 22222', lastDonated: '4 months ago' },
  { name: 'Rahul Singh', blood: 'B+', city: 'Bangalore', phone: '+91 98765 33333', lastDonated: '2 months ago' },
  { name: 'Sneha Patel', blood: 'O-', city: 'Delhi', phone: '+91 98765 44444', lastDonated: '5 months ago' },
  { name: 'Vikram Nair', blood: 'AB+', city: 'Chennai', phone: '+91 98765 55555', lastDonated: '6 months ago' },
  { name: 'Ananya Gupta', blood: 'A-', city: 'Hyderabad', phone: '+91 98765 66666', lastDonated: '3 months ago' },
  { name: 'Rohan Mehta', blood: 'B-', city: 'Delhi', phone: '+91 98765 77777', lastDonated: '4 months ago' },
  { name: 'Kavya Reddy', blood: 'AB-', city: 'Pune', phone: '+91 98765 88888', lastDonated: '2 months ago' },
];

function searchDonors() {
  const bloodGroup = document.getElementById('searchBlood').value;
  const city = document.getElementById('searchCity').value.trim().toLowerCase();
  const resultsDiv = document.getElementById('searchResults');

  if (!bloodGroup && !city) {
    resultsDiv.innerHTML = '<p style="color:red; text-align:center;">Please enter blood group or city to search.</p>';
    return;
  }

  const filtered = mockDonors.filter(donor => {
    const matchBlood = bloodGroup ? donor.blood === bloodGroup : true;
    const matchCity = city ? donor.city.toLowerCase().includes(city) : true;
    return matchBlood && matchCity;
  });

  if (filtered.length === 0) {
    resultsDiv.innerHTML = `
      <div style="text-align:center; padding:2rem; background:#fff; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.1);">
        <i class="fa-solid fa-circle-xmark" style="font-size:3rem; color:#e63946; display:block; margin-bottom:1rem;"></i>
        <h3>No donors found</h3>
        <p style="color:#6c757d;">Try a different blood group or city.</p>
      </div>`;
    return;
  }

  resultsDiv.innerHTML = `<h3 style="margin-bottom:1rem; color:#1a1a2e;">${filtered.length} Donor(s) Found</h3>` +
    filtered.map(donor => `
      <div class="donor-card">
        <div class="donor-blood">${donor.blood}</div>
        <div class="donor-info">
          <h3>${donor.name}</h3>
          <p><i class="fa-solid fa-location-dot"></i> ${donor.city}</p>
          <p><i class="fa-solid fa-clock"></i> Last donated: ${donor.lastDonated}</p>
        </div>
        <a href="tel:${donor.phone}" class="btn-primary">
          <i class="fa-solid fa-phone"></i> Contact
        </a>
      </div>
    `).join('');
}

// ===== SCROLL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  const animatedEls = document.querySelectorAll('.stat-card, .blood-card, .step, .value-card, .team-card, .testimonial-card');
  animatedEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});
