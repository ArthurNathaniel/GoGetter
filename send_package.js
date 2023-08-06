
  (function () {
    emailjs.init("ncEfj2XOlmD0JyZew");
  })();

  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    sendMail();
  });

  function sendMail() {
    var params = {
      sender_name: document.getElementById('sender_name').value,
      sender_address: document.getElementById('sender_address').value,
      sender_number: document.getElementById('sender_number').value,
      sender_email: document.getElementById('sender_email').value,
      recipient_name: document.getElementById('recipient_name').value,
      recipient_address: document.getElementById('recipient_address').value,
      recipient_number: document.getElementById('recipient_number').value,
      recipient_email: document.getElementById('recipient_email').value,
    };

    const serviceID = "service_0z7trao";
    const templateID = "template_9x0ykd4";

    emailjs.send(serviceID, templateID, params)
      .then(function (response) {
        console.log('Email sent successfully:', response);
        alert('Your message has been sent! We will get back to you soon.');
      }, function (error) {
        console.error('Email failed to send:', error);
        alert('Sorry, there was an error sending your message. Please try again later.');
      });
  }