document.getElementById('leaders').addEventListener('input', function () {
  const count = parseInt(this.value);
  const container = document.getElementById('leadersInfo');
  container.innerHTML = '';

  for (let i = 1; i <= count; i++) {
    container.innerHTML += `
      <fieldset>
        <legend>Leader ${i}</legend>
        <label>Nom:
          <input type="text" id="leaderName${i}" required>
        </label>
        <label>Email:
          <input type="email" id="leaderEmail${i}" required>
        </label>
        <label>Téléphone (format international sans +):
          <input type="tel" id="leaderPhone${i}" required>
        </label>
      </fieldset>
    `;
  }
});

document.getElementById('eventForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const clients = document.getElementById('clients').value;
  const leaders = document.getElementById('leaders').value;
  const supports = document.getElementById('supports').value;
  const diet = document.getElementById('diet').value;

  let output = '';
  for (let i = 1; i <= leaders; i++) {
    const name = document.getElementById(`leaderName${i}`).value;
    const email = document.getElementById(`leaderEmail${i}`).value;
    const phone = document.getElementById(`leaderPhone${i}`).value;

    const msg = `Bonjour ${name},%0AVoici les infos de l'événement :%0AClients: ${clients}%0ALeaders: ${leaders}%0ASupports: ${supports}%0ARéstrictions alimentaires: ${encodeURIComponent(diet)}`;

    const whatsapp = `https://wa.me/${phone}?text=${msg}`;
    const mailto = `mailto:${email}?subject=Infos événement&body=${msg}`;

    output += `
      <p><strong>Pour ${name}:</strong><br>
      <a href="${whatsapp}" target="_blank">Envoyer sur WhatsApp</a><br>
      <a href="${mailto}" target="_blank">Envoyer par mail</a></p>
    `;
  }

  document.getElementById('output').innerHTML = output;
});
