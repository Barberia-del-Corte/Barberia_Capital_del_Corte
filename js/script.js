document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  fetch("https://barberia-capital-del-corte.onrender.com/submit-form", { // https://barberia-capital-del-corte.onrender.com url de la api del servdidor del render ==== http://localhost:5000 link del local
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone, email, message })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert("✅ ¡Mensaje enviado con éxito!");
    } else {
      alert("❌ Error: " + data.error);
    }
  })
  .catch(err => {
    alert("✅ ¡Mensaje enviado con éxito!");
    console.error(err);
  });
});

