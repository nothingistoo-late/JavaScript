function toggleChat() {
    const chatContainer = document.getElementById("chatContainer");
    chatContainer.style.display = chatContainer.style.display === "none" || chatContainer.style.display === "" ? "flex" : "none";
}

document.addEventListener("DOMContentLoaded", function () {
    let inputField = document.getElementById("userInput");
    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });
});

async function sendMessage() {
    let inputField = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");
    let typingIndicator = document.getElementById("typingIndicator");
    let message = inputField.value.trim();

    if (!message) return;

    // Hiển thị tin nhắn người dùng
    chatBox.innerHTML += `<p class="message user-message">${message}</p>`;
    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Hiển thị typing indicator
    document.getElementById("typingIndicator").style.display = "block";

    try {
        // Đợi 500ms trước khi gửi request
        await new Promise(resolve => setTimeout(resolve, 500));

        let response = await fetch("https://localhost:5001/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: message })
        });

        if (!response.ok) throw new Error("Lỗi khi gọi API!");

        let data = await response.json();
        if (!data || !data.reply) throw new Error("Dữ liệu trả về không hợp lệ!");

        // Thêm tin nhắn từ bot
        chatBox.innerHTML += `<p class="message bot-message">${data.reply}</p>`;
    } catch (error) {
        console.error("Lỗi:", error);
        chatBox.innerHTML += `<p class="message bot-message">Không thể gửi tin nhắn.</p>`;
    } finally {
        // Ẩn typing indicator sau khi nhận tin nhắn
        typingIndicator.style.display = "none";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
