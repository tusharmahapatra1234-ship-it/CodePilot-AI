// ===============================
// DOM Elements
// ===============================

const codeInput = document.getElementById("codeInput");
const lineCount = document.getElementById("lineCount");
const charCount = document.getElementById("charCount");
const clearBtn = document.getElementById("clearBtn");

const statusText = document.getElementById("serverStatus");
const statusDot = document.getElementById("statusDot");


// ===============================
// Editor Statistics
// ===============================

function updateEditorStats() {

    const text = codeInput.value;

    const lines = text === "" ? 0 : text.split("\n").length;

    lineCount.textContent = `Lines: ${lines}`;
    charCount.textContent = `Characters: ${text.length}`;
}


// ===============================
// Clear Button
// ===============================

clearBtn.addEventListener("click", () => {

    codeInput.value = "";

    updateEditorStats();

});


// ===============================
// Update Editor Stats While Typing
// ===============================

codeInput.addEventListener("input", updateEditorStats);


// ===============================
// Backend Status
// ===============================

async function updateServerStatus() {

    if (!statusText || !statusDot) return;

    try {

        const online = await checkBackendHealth();

        if (online) {

            statusText.textContent = "Online";
            statusDot.style.background = "#22C55E";

        } else {

            statusText.textContent = "Offline";
            statusDot.style.background = "#EF4444";

        }

    } catch (error) {

        statusText.textContent = "Offline";
        statusDot.style.background = "#EF4444";

        console.error("Backend Error:", error);

    }

}


// ===============================
// App Initialization
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    updateEditorStats();

    updateServerStatus();

});