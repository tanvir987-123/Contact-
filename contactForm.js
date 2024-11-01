document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const fullName = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Prepare the WhatsApp message
    const whatsappMessage = `*New Message from Website*%0A*Full Name:* ${fullName}%0A*Phone:* ${phone}%0A*Subject:* ${subject}%0A*Message:* ${message}`;

    // Your WhatsApp link
    const whatsappUrl = `https://wa.link/5tbxml?text=${encodeURIComponent(whatsappMessage)}`;

    // Open the WhatsApp link in a new tab
    window.open(whatsappUrl, '_blank');
});