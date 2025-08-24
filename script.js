function openTool(tool) {
  document.getElementById("toolWindow").style.display = "block";
  const toolContent = document.getElementById("toolContent");

  switch(tool) {
    case "fileConverter":
      toolContent.innerHTML = `<h2>📂 File Converter</h2>
        <input type="file">
        <p>Feature coming soon...</p>`;
      break;

    case "photoEnhancer":
      toolContent.innerHTML = `<h2>🖼 Photo Enhancer</h2>
        <input type="file" accept="image/*">
        <p>Enhance photo quality automatically. (Demo placeholder)</p>`;
      break;

    case "summarizer":
      toolContent.innerHTML = `<h2>📝 Text Summarizer</h2>
        <textarea placeholder="Paste text here"></textarea><br>
        <button>Summarize</button>`;
      break;

    case "writer":
      toolContent.innerHTML = `<h2>✍ AI Writer</h2>
        <textarea placeholder="Enter topic here"></textarea><br>
        <button>Generate</button>`;
      break;

    case "grammar":
      toolContent.innerHTML = `<h2>📖 Grammar Checker</h2>
        <textarea placeholder="Paste text here"></textarea><br>
        <button>Check</button>`;
      break;

    case "translator":
      toolContent.innerHTML = `<h2>🌍 Translator</h2>
        <textarea placeholder="Enter text"></textarea><br>
        <select><option>English</option><option>Filipino</option></select>
        <button>Translate</button>`;
      break;

    case "password":
      toolContent.innerHTML = `<h2>🔒 Password Generator</h2>
        <button onclick="generatePassword()">Generate Password</button>
        <p id="passwordResult"></p>`;
      break;

    case "converter":
      toolContent.innerHTML = `<h2>📏 Unit & Currency Converter</h2>
        <input type="number" placeholder="Enter value"><br>
        <button>Convert</button>`;
      break;

    case "qrcode":
      toolContent.innerHTML = `<h2>🔗 QR Code Generator</h2>
        <input type="text" placeholder="Enter text or link"><br>
        <button>Generate QR</button>`;
      break;

    case "meme":
      toolContent.innerHTML = `<h2>😂 Meme Caption Generator</h2>
        <input type="file" accept="image/*"><br>
        <input type="text" placeholder="Enter caption"><br>
        <button>Generate Meme</button>`;
      break;
  }
}

function closeTool() {
  document.getElementById("toolWindow").style.display = "none";
}

// Example: password generator
function generatePassword() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < 12; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("passwordResult").innerText = password;
}
