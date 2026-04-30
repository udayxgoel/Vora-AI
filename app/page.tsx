"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data: session } = authClient.useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (session) {
    return (
      <div>
        <h1>Welcome, {session.user.name}!</h1>
        <p>Email: {session.user.email}</p>
      </div>
    );
  }

  const onSubmit = async () => {
    authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: (data: any) => {
          console.log("User created successfully", data);
        },
        onError: (error: any) => {
          console.error("Error creating user", error);
        },
      },
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button onClick={onSubmit}>Create user</Button>
    </div>
  );
}
