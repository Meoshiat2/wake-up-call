const messageText = document.getElementById("messageText");
const messageTag = document.getElementById("messageTag");
const newMessageBtn = document.getElementById("newMessageBtn");

let messages = [];

async function loadMessages() {
  const response = await fetch("/api/messages");
  messages = await response.json();
  showRandomMessage();
}

function showRandomMessage() {
  if (!messages.length) return;

  const randomIndex = Math.floor(Math.random() * messages.length);
  const selected = messages[randomIndex];

  messageTag.textContent = selected.title;
  messageText.textContent = selected.message;
}

newMessageBtn.addEventListener("click", showRandomMessage);

loadMessages();
