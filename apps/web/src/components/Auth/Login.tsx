"use client"; // Adicione isso no topo do arquivo

import React, { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { Input, Button, Card, Spacer } from "@nextui-org/react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("Login bem-sucedido!");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center w-full bg-gradient-to-r">
      <Card
        style={{
          maxWidth: "400px",
          padding: "2rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          backgroundColor: "#ffffff88",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#4f46e5",
          }}
        >
          Login
        </h2>

        <form onSubmit={handleLogin}>
          <Input
            fullWidth
            label="Email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // clearable
            color="primary"
            size="lg"
            required
          />
          <Spacer y={1} />
          <Input
            fullWidth
            label="Senha"
            placeholder="Digite sua senha"
            type={isVisible ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // clearable
            color="primary"
            size="lg"
            endContent={
              <Button onClick={toggleVisibility}>
                {isVisible ? <IoEyeOff /> : <IoEye />}
              </Button>
            }
            required
          />
          <Spacer y={1} />
          <Button type="submit" color="primary" disabled={loading} fullWidth>
            {loading ? "Carregando..." : "Login"}
          </Button>
        </form>
        {error && (
          <>
            <Spacer y={1} />
            <p style={{ color: "red" }}>{error}</p>
          </>
        )}
      </Card>
    </div>
  );
};

export default Login;
