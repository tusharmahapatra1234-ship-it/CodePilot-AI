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