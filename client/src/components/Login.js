import { unwrapResult } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../slices/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setResponseMessage("");

    try {
      const resultAction = await dispatch(loginUser({ username, password }));
      const result = unwrapResult(resultAction); // Unwrap the result to get the server response
      setResponseMessage(result.message || "Registration successful!");
    } catch (err) {
      setResponseMessage(
        err.message.message || "Failed to login. Please try again."
      );
    }
  }

  return (
    <div className="card p-3 mt-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* Display the server response */}
      {responseMessage && (
        <div className="alert alert-info mt-3" role="alert">
          {responseMessage}
        </div>
      )}
    </div>
  );
}
