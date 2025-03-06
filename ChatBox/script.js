document.addEventListener("DOMContentLoaded", function () {
    let inputField = document.getElementById("userInput");

    // Lắng nghe sự kiện Enter để gửi tin nhắn
    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Ngăn chặn xuống dòng
            sendMessage();
        }
    });
});

async function sendMessage() {
    let inputField = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");
    let message = inputField.value.trim();

    if (!message) return;

    // Hiển thị tin nhắn của người dùng
    chatBox.innerHTML += `<p class="user-message">${message}</p>`;
    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        let response = await fetch("https://localhost:5001/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: message })
        });

        if (!response.ok) throw new Error("Lỗi khi gọi API!");

        let data = await response.json();

        if (!data || !data.reply) throw new Error("Dữ liệu trả về không hợp lệ!");

        // Hiển thị tin nhắn từ bot
        chatBox.innerHTML += `<p class="bot-message">${data.reply}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {
        console.error("Lỗi:", error);
        chatBox.innerHTML += `<p class="bot-message">Không thể gửi tin nhắn.</p>`;
    }
}
