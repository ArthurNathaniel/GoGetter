
  // Replace these with your actual emailjs parameters
  const YOUR_EMAILJS_SERVICE_ID = "service_0z7trao";
  const YOUR_EMAILJS_TEMPLATE_ID = "template_9x0ykd4";
  const YOUR_EMAILJS_USER_ID = "ncEfj2XOlmD0JyZew";

  function sendEmail(event) {
    event.preventDefault();

    // Get form data
    const senderName = document.getElementById('sender_name').value;
    const senderAddress = document.getElementById('sender_address').value;
    const senderNumber = document.getElementById('sender_number').value;
    const senderEmail = document.getElementById('sender_email').value;

    const recipientName = document.getElementById('recipient_name').value;
    const recipientAddress = document.getElementById('recipient_address').value;
    const recipientNumber = document.getElementById('recipient_number').value;
    const recipientEmail = document.getElementById('recipient_email').value;

    // Send email using emailjs
    emailjs.send(YOUR_EMAILJS_SERVICE_ID, YOUR_EMAILJS_TEMPLATE_ID, {
      sender_name: senderName,
      sender_address: senderAddress,
      sender_number: senderNumber,
      sender_email: senderEmail,
      recipient_name: recipientName,
      recipient_address: recipientAddress,
      recipient_number: recipientNumber,
      recipient_email: recipientEmail,
    }, YOUR_EMAILJS_USER_ID)
      .then(function(response) {
        console.log('Email sent successfully!', response);
        // Optionally, display a success message or redirect to a thank-you page.
      }, function(error) {
        console.error('Error sending email:', error);
        // Optionally, display an error message or handle the error in some way.
      });
  }

