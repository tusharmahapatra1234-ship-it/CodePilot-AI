async function sendReviewRequest(endpoint, code, language) {

    try {

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

        const responseText = await response.text();

        let payload = null;

        try {
            payload = responseText ? JSON.parse(responseText) : null;
        } catch (error) {
            payload = null;
        }

        if (!response.ok) {
            const message = payload?.detail || payload?.message || payload?.error || "Server Error";
            throw new Error(message);
        }

        return payload || {};

    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }

        throw new Error("Unable to reach the server.");
    }
}