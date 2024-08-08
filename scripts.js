// Scroll Animation
const sections = document.querySelectorAll('section');

const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// WhatsApp Message Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create the WhatsApp URL with a pre-filled message
    const whatsappURL = `https://api.whatsapp.com/send?phone=+6285179932875&text=Hello, my name is ${name}. My email is ${email}. Here's my message: ${message}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
});
