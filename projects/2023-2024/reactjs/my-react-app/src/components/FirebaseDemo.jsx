import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function FirebaseDemo() {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("password");
  async function createUser() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials.user.email, userCredentials.user.uid);
  }

  return (
    <div>
      <h1>Firebase Demo</h1>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          name="email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          name="password"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={createUser}>Create user</button>
    </div>
  );
}
