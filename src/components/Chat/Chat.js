
import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { sender: 'user', text: inputMessage }]);
      // Simulate character response (replace with actual logic)
      setTimeout(() => {
        setMessages([...messages, { sender: 'character', text: 'This is a simulated character response.' }]);
      }, 1000);
      setInputMessage('');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Chat with Character</h1>
      <div className="border p-4 rounded mb-4" style={{ height: '400px', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className="font-bold">{message.sender === 'user' ? 'You' : 'Character'}</span>: {message.text}
          </div>
        ))}
      </div>
      <form className="max-w-md mx-auto" onSubmit={sendMessage}>
        <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} className="w-full border rounded py-2 px-3 mb-2" placeholder="Type your message..." />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
      </form>
    </div>
  );
};

export default Chat;

