
  (function () {
    emailjs.init("ncEfj2XOlmD0JyZew");
  })();

  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    sendMail();
  });

  function sendMail() {
    // Get the button element
    var submitButton = document.getElementById('submit-button');

    // Save the original button text
    var originalButtonText = submitButton.innerText;

    // Update the button text to "Please Wait"
    submitButton.innerText = 'Please Wait...';

    // Disable the button to prevent multiple clicks during email sending
    submitButton.disabled = true;

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
        // Custom success message for delivery service
        alert('Your delivery request has been sent! We will get back to you soon with the details.');

        // Restore the original button text and enable the button
        submitButton.innerText = originalButtonText;
        submitButton.disabled = false;
      }, function (error) {
        console.error('Email failed to send:', error);
        // Custom error message for delivery service
        alert('Oops! There was an issue sending your delivery request. Please try again later.');

        // Restore the original button text and enable the button
        submitButton.innerText = originalButtonText;
        submitButton.disabled = false;
      });
  }

