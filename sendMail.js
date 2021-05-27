const btn = document.querySelector("button");
const inputs = document.querySelector("form");
btn.addEventListener("click", () => {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "guillermorincon@gmail.com",
    Password: "Sofy10141",
    To: "xyz@gm.com",
    From: inputs.elements["email"].value,
    subject: "Correo desde mi Portafolio",
    Body:
      inputs.elements["mensaje"].value +
      "<br>" +
      inputs.elements["nombre"].value,
  }).then((msg) => alert("El mensaje ha sido enviado."));
});
