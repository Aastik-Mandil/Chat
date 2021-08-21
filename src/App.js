import React from 'react';
import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (username == null || password == null) {
    return (
      <LoginForm />
    );
  }
  return (
    <ChatEngine height="100vh" projectID="a65a4f86-d47d-4e63-8e6e-5843a8dce5c4" userName={username} userSecret={password} renderChatFeed={(chatAppProps) => (<ChatFeed {...chatAppProps} />)}
    />
  );
}

export default App;
