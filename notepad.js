function saveText() {
  const text = document.getElementById("textArea").value;
  const blob = new Blob([text], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "bloknot.txt";
  a.click();
}

function loadText() {
  const file = document.getElementById("fileInput").files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("textArea").value = e.target.result;
  };
  reader.readAsText(file);
}
