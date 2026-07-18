async function sendReviewRequest(endpoint, code, language) {

    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            code,
            language
        })

    });

    if (!response.ok) {
        throw new Error("Server Error");
    }

    return await response.json();
}