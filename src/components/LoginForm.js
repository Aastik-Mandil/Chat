import React, { useState } from 'react'
import axios from "axios";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { "Project-Id": "a65a4f86-d47d-4e63-8e6e-5843a8dce5c4", "User-Name": username, "User-Secret": password };
        try {
            await axios.get("https://api.chatengine.io/chats", { headers: authObject }).then(() => {
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                window.location.reload();
                setError("");
            });
        } catch (err) {
            setError("Oops, Incorrect credentials");
        }
        setUsername("");
        setPassword("");
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />

                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />

                    <div align="center">
                        <button type="submit" onClick={handleSubmit} className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>

                    {error.length > 0 && <h2 className="error">{error}</h2>}
                </form>
            </div>
        </div>
    )
}

export default LoginForm
