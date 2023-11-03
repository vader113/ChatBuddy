document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generate-button");
    const messageInput = document.getElementById("message");
    const outputDiv = document.getElementById("output");

    generateButton.addEventListener("click", async () => {
        const message = messageInput.value;

        if (!message) {
            alert("Please enter a message.");
            return;
        }

        // Replace the API endpoint with your actual endpoint
        const apiUrl = "https://vaderd-nk.hf.space/--replicas/vm66b/chat";
        const requestBody = {
            message: message,
            temperature: 0.5,  // Adjust as needed
            max_tokens: 64,    // Adjust as needed
        };

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                const data = await response.json();
                outputDiv.textContent = data.data;
            } else {
                alert("Failed to fetch data from the API.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    });
});

