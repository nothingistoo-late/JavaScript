const apiUrl = "https://localhost:5001/api/chat";

async function sendMessage() {
    const messageInput = document.getElementById("message");
    const chatBox = document.getElementById("chat-box");

    if (messageInput.value.trim() === "") return;

    chatBox.innerHTML += `<p><strong>Bạn:</strong> ${messageInput.value}</p>`;

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: messageInput.value })
        });

        const data = await response.json();
        console.log("Dữ liệu API trả về:", data); // Debug ở đây

        if (!data || !data.reply) {
            throw new Error("Dữ liệu trả về không hợp lệ!");
        }

        chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.reply}</p>`;
    } catch (error) {
        console.error("Lỗi:", error);
        chatBox.innerHTML += `<p style="color:red;">Lỗi: ${error.message}</p>`;
    }

    messageInput.value = "";
}
