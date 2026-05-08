import { useState } from "react";
import "./ChatBot.css";
import { FiMessageCircle } from "react-icons/fi";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi 👋 Welcome to Raviteja Home Foods!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    let botReply = "Please contact support 😊";

    if (input.toLowerCase().includes("delivery")) {
      botReply = "We deliver across India 🚚";
    } else if (input.toLowerCase().includes("price")) {
      botReply = "Prices start from ₹150";
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Floating Icon */}
      <div className="chat-toggle" onClick={() => setOpen(!open)}>
        <FiMessageCircle />
      </div>

      {/* Chat Window */}
      <div className={`chat-container ${open ? "show" : ""}`}>
        <div className="chat-header">
          <span>Raviteja Support</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={`msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
}

export default ChatBot;