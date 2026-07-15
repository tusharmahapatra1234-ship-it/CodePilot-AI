async function checkBackendHealth() {

    try {

        const response = await fetch(`${API_BASE_URL}/health`);

        return response.ok;

    } catch {

        return false;

    }

}


async function reviewCode(code, language, action) {

    const response = await fetch(`${API_BASE_URL}/review`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            code,
            language,
            action

        })

    });

    return await response.json();

}