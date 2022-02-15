sendEmail = () => {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "test.epiclogictech@gmail.com ",
    Password: "P@ssword.google.123",
    To: "test.epiclogictech@gmail.com",
    From: document.getElementById("email").value,
    Subject: document.getElementById("New Contact Form Enquiry"),
    Body: `Name: ${document.getElementById("name").value}
    Email: ${document.getElementById("email").value}
    Phone no: ${document.getElementById("phone").value}
    Message: ${document.getElementById("message").value} 
    `,
  }).then(() => alert(`Message sent successfully`));
};
