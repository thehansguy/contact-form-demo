sendEmail = () => {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "testmail.epiclogictech@gmail.com ",
    Password: "aawuhukqhaddyait",
    To: "testmail.epiclogictech@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: `Name: ${document.getElementById("name").value}
    Email: ${document.getElementById("email").value}
    Phone no: ${document.getElementById("phone").value}
    Message: ${document.getElementById("message").value} 
    `,
  }).then(() => alert(`Message sent successfully`));
};
