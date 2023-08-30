const urlInput = document.getElementById("urlInput");
const generateButton = document.getElementById("generateButton");
const qrCodeImage = document.getElementById("qrCodeImage");
const clearButton = document.getElementById("clearButton");

generateButton.addEventListener("click", () => {
  const url = urlInput.value.trim();
  if (url) {
    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=200x200`;
    qrCodeImage.src = qrImageUrl;
  }
});

clearButton.addEventListener("click", () => {
    urlInput.value = "";
    qrCodeImage.src = "";
  });
