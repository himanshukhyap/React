import React, { useState, useEffect, useRef } from 'react';
import useChat from './useChat';
import { auth } from './FirebaseConfig';
import './Chat.css';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

const Chat = () => {
  const { messages, users, sendMessage, deleteMessage, loading } = useChat(); // Destructure deleteMessage
  const [newMessage, setNewMessage] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const chatWindow = document.querySelector('.chat-window');
    if (chatWindow) {
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      let fileUrl = null;
      let fileName = null;

      if (file) {
        if (file.size > 20 * 1024 * 1024) {
          throw new Error('File size should be less than 5MB.');
        }
        fileUrl = await uploadFile(file);
        fileName = file.name;
      }

      await sendMessage(newMessage, fileUrl, fileName);
      setNewMessage('');
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      setError(error.message);
      console.error('Error sending message:', error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError('File size should be less than 5MB.');
      } else {
        setFile(selectedFile);
        setError(null);
      }
    }
  };

  const uploadFile = async (file) => {
    try {
      const storage = getStorage();
      const fileRef = ref(storage, `files/${file.name}`);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      console.log('Uploaded file URL:', url);
      return url;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Message copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy text:', err);
      });
  };

  const handleDoubleClick = (e, text) => {
    e.preventDefault();
    handleCopy(text);
  };

  const handleDelete = (messageId) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      deleteMessage(messageId);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-window">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`message-bubble ${msg.uid === auth.currentUser.uid ? 'sent' : 'received'}`} 
            onDoubleClick={(e) => handleDoubleClick(e, msg.text)}
          >
            <div className="message-info">
              <span className="message-sender">
                {msg.uid === auth.currentUser.uid ? 'You' : msg.displayName || 'Unknown'}
              </span>
              <span className="message-time">
                {msg.createdAt ? new Date(msg.createdAt.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Sending...'}
              </span>
            </div>
            <div className="message-text">{msg.text}</div>
            {msg.fileUrl && (
              <div className="file-preview">
                <a href={msg.fileUrl} target="_blank" rel="noopener noreferrer" className="file-link">
                  {msg.fileName}
                </a>
              </div>
            )}
            {msg.uid === auth.currentUser.uid && (
              <button onClick={() => handleDelete(msg.id)} className="delete-button">
                🗑️
              </button>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="chat-input-container">
        {error && <div className="error-message">{error}</div>}
        <button type="button" className="attachment-button" onClick={() => fileInputRef.current.click()}>
          📎
        </button>
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input"
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message"
          className="chat-input"
          disabled={loading}
        />
        <button type="submit" className="send-button" disabled={loading || !newMessage.trim() && !file}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Chat;
