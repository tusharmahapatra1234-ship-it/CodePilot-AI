const codeInput = document.getElementById("codeInput");
const responseBox = document.getElementById("responseBox");

const lineCount = document.getElementById("lineCount");
const charCount = document.getElementById("charCount");

const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");

const languageSelect = document.getElementById("languageSelect");

const explainBtn = document.getElementById("explainBtn");
const bugsBtn = document.getElementById("bugsBtn");
const improveBtn = document.getElementById("improveBtn");
const optimizeBtn = document.getElementById("optimizeBtn");
const docsBtn = document.getElementById("docsBtn");
const testsBtn = document.getElementById("testsBtn");
const heroExplainBtn = document.getElementById("heroExplainBtn");
const heroClearBtn = document.getElementById("heroClearBtn");
const themeToggle = document.getElementById("themeToggle");
const downloadBtn = document.getElementById("downloadBtn");
const chatToggleBtn = document.getElementById("chatToggleBtn");
const closeChatBtn = document.getElementById("closeChatBtn");
const chatPanel = document.getElementById("chatPanel");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendChatBtn = document.getElementById("sendChatBtn");
const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");

const serverStatus = document.getElementById("serverStatus");
const statusDot = document.getElementById("statusDot");


// ==========================
// Update Line & Character Count
// ==========================

function updateEditorStats() {

    const text = codeInput.value;

    lineCount.textContent =
        `Lines: ${text === "" ? 0 : text.split("\n").length}`;

    charCount.textContent =
        `Characters: ${text.length}`;
}

codeInput.addEventListener("input", updateEditorStats);


// ==========================
// Clear Button
// ==========================

clearBtn.addEventListener("click", () => {

    codeInput.value = "";

    responseBox.innerHTML = "";

    updateEditorStats();

});


// ==========================
// Copy Button
// ==========================

copyBtn.addEventListener("click", async () => {

    const textToCopy = responseBox.innerText.trim();

    if (textToCopy === "") {
        alert("No response to copy.");
        return;
    }

    try {
        await navigator.clipboard.writeText(textToCopy);
        copyBtn.textContent = "Copied";

        setTimeout(() => {
            copyBtn.textContent = "Copy";
        }, 1200);

    } catch (error) {
        console.error(error);
        alert("Unable to copy response.");
    }

});


heroExplainBtn?.addEventListener("click", () => {
    codeInput.focus();
    runFeature("explain", "⏳ Explaining Code...");
});

heroClearBtn?.addEventListener("click", () => {
    codeInput.value = "";
    responseBox.innerHTML = "";
    updateEditorStats();
});

function toggleTheme() {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    themeToggle.textContent = dark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

themeToggle?.addEventListener("click", toggleTheme);

downloadBtn?.addEventListener("click", () => {
    const text = responseBox.innerText.trim();
    if (!text) {
        alert("No response to download.");
        return;
    }

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "codepilot-response.txt";
    link.click();
    URL.revokeObjectURL(url);
});

function addChatMessage(text, sender = "ai") {
    const div = document.createElement("div");
    div.className = `chat-bubble ${sender}`;
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatToggleBtn?.addEventListener("click", () => {
    chatPanel.hidden = !chatPanel.hidden;
});

closeChatBtn?.addEventListener("click", () => {
    chatPanel.hidden = true;
});

sendChatBtn?.addEventListener("click", () => {
    const message = chatInput.value.trim();
    if (!message) return;
    addChatMessage(message, "user");
    chatInput.value = "";
    addChatMessage(`I can help with: "${message}". Paste code and select a feature to get a deeper review.`, "ai");
});

uploadBtn?.addEventListener("click", () => fileInput.click());

fileInput?.addEventListener("change", (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        codeInput.value = reader.result;
        updateEditorStats();
        responseBox.innerText = `Uploaded ${file.name}. Choose a review action to analyze it.`;
    };
    reader.readAsText(file);
});

// ==========================
// Backend status
// ==========================

function updateServerStatus(isOnline, label) {

    if (statusDot) {
        statusDot.style.backgroundColor = isOnline ? "#2ecc71" : "#e74c3c";
    }

    if (serverStatus) {
        serverStatus.textContent = label;
    }
}

async function checkServerStatus() {

    try {

        const response = await fetch(`${API_BASE_URL}/health`);

        if (response.ok) {
            const data = await response.json();
            updateServerStatus(true, data.status || "Online");
            return;
        }

        updateServerStatus(false, "Offline");

    } catch (error) {
        console.error(error);
        updateServerStatus(false, "Offline");
    }

}


// ==========================
// Common Review Function
// ==========================

async function runFeature(endpoint, loadingText) {

    const code = codeInput.value.trim();

    if (code === "") {
        alert("Please paste some code.");
        return;
    }

    if (languageSelect.value === "") {
        alert("Please select a language.");
        return;
    }

    responseBox.innerHTML = loadingText;

    try {

        const result = await sendReviewRequest(
            endpoint,
            code,
            languageSelect.value
        );

        responseBox.innerText = result.response;

    }

    catch (error) {

        console.error(error);

        responseBox.innerHTML = error.message;

    }

}


// ==========================
// Explain
// ==========================

explainBtn.addEventListener("click", () => {

    runFeature(
        "explain",
        "⏳ Explaining Code..."
    );

});


// ==========================
// Bugs
// ==========================

bugsBtn.addEventListener("click", () => {

    runFeature(
        "bugs",
        "🐞 Finding Bugs..."
    );

});


// ==========================
// Improve
// ==========================

improveBtn.addEventListener("click", () => {

    runFeature(
        "improve",
        "✨ Improving Code..."
    );

});


// ==========================
// Optimize
// ==========================

optimizeBtn.addEventListener("click", () => {

    runFeature(
        "optimize",
        "⚡ Optimizing Code..."
    );

});


// ==========================
// Documentation
// ==========================

docsBtn.addEventListener("click", () => {

    runFeature(
        "generate-docs",
        "📄 Generating Documentation..."
    );

});


// ==========================
// Unit Tests
// ==========================

testsBtn.addEventListener("click", () => {

    runFeature(
        "generate-tests",
        "🧪 Generating Unit Tests..."
    );

});


// ==========================
// Initial Stats
// ==========================

updateEditorStats();
checkServerStatus();