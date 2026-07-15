function setResponse(message) {
    const responseBox = document.getElementById("responseBox");
    responseBox.textContent = message;
}

function showLoading() {
    setResponse("⏳ Reviewing your code...");
}

function showError(message) {
    setResponse(`❌ ${message}`);
}

function copyResponse() {
    const responseBox = document.getElementById("responseBox");

    navigator.clipboard.writeText(responseBox.textContent)
        .then(() => {
            alert("Response copied!");
        });
}