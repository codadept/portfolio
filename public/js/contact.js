var contactForm = document.querySelector(".email-form form");
var statusMessage = document.querySelector("#status");

contactForm.addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    let firstName = document.querySelector("#first-name").value;
    let lastName = document.querySelector("#last-name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    contactForm.reset();
    
    sendEmail(firstName,lastName,email,message);

}

function sendEmail(firstName, lastName, email, message){
    Email.send({
        Host: "smtp.gmail.com",
        Username: "itspratikmajumdar@gmail.com",
        Password: gmailPass,
        To: "info.pratikmajumdar@gmail.com",
        From: "itspratikmajumdar@gmail.com",
        Subject: `IMP: ${firstName} sent you an email from Codadept`,
        Body: `Name: ${firstName+" "+lastName} <br/> Email: ${email} <br/> Message: ${message}`
    }).then((message)=>{
        statusMessage.classList.add("success");
        setTimeout(()=>{
            statusMessage.style.display = "none";
        },4500);
    }).catch((error)=>{
        statusMessage.textContent = "Error, sorry cannot send the mail. Please try again!";
        statusMessage.classList.add("error");
        setTimeout(()=>{
            statusMessage.style.display = "none";
        },4500);
    })
}