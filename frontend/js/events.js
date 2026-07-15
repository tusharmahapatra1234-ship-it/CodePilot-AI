const explainBtn = document.getElementById("explainBtn");
const languageSelect = document.getElementById("languageSelect");
const copyBtn = document.getElementById("copyBtn");

explainBtn.addEventListener("click", async () => {

    const code = codeInput.value.trim();
    const language = languageSelect.value;

    if (code === "") {
        alert("Please enter some code.");
        return;
    }

    if (language === "") {
        alert("Please select a language.");
        return;
    }

    showLoading();

    try {

        const result = await reviewCode(
            code,
            language,
            "Explain"
        );

        setResponse(result.response);

    }

    catch (error) {

        showError("Unable to connect to backend.");

        console.error(error);

    }

});

copyBtn.addEventListener("click", copyResponse);