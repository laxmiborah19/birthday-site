
const content = document.getElementById("content");
const music = document.getElementById("bgMusic");

function playMusic() {
  music.play();
}

function showSection(section) {
  if (section === "beginning") {
    content.innerHTML = `
      <h2>✨ Our Beginning</h2>
      <p>
        From simple talks…<br>
        to quiet smiles…<br>
        to hands that stayed.<br>
        That’s where us began 🤍
      </p>`;
  }

  if (section === "love") {
    content.innerHTML = `
      <h2>🤍 Why I Love You</h2>
      <p>
        Because you make my days softer.<br>
        Because your presence feels like home.<br>
        Because loving you feels natural.
      </p>`;
  }

  if (section === "photo") {
    content.innerHTML = `
      <h2>📸 Our Photo</h2>
      <img src="photo.jpg" alt="Our Photo">
      <p>One moment, forever 🤍</p>`;
  }

  if (section === "final") {
    content.innerHTML = `
      <h2>🌙 Final Message</h2>
      <p>
        No matter where life takes us,<br>
        this place will always hold us.<br><br>
        Happy Birthday 🤍
      </p>`;
  }
}