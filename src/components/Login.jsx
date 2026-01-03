import React, { useState } from "react";
import "./Login.css";
import Button from './Button';

export default function Login({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    if (!email) return setError("Please enter your email.");
    if (!password) return setError("Please enter your password.");
    // Basic client-side validation
    const simpleEmail = /\S+@\S+\.\S+/;
    if (!simpleEmail.test(email)) return setError("Enter a valid email.");

    if (onSubmit) onSubmit({ email, password });
    else console.log("Login submit:", { email, password });
  }

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <h2 className="login-title">Sign in</h2>

        {error && <div className="login-error">{error}</div>}

        <label className="login-label">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            placeholder="you@example.com"
          />
        </label>

        <label className="login-label">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            placeholder="••••••••"
          />
        </label>

        <Button type="submit" variant="primary" className="login-button">
          Log in
        </Button>
      </form>
    </div>
  );
}
