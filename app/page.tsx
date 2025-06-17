"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Contraseña:", password);

  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen bg-gray-100">
      <div className="w-53 h-20 rounded-lg bg-neutral-700"></div>
      <form onSubmit={handleSubmit}>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-medium text-gray-700">
              Correo Electrónico
            </span>
          </label>
          <input
            type="email"
            placeholder="tu@ejemplo.com"
            className="input input-bordered input-primary w-full text-lg p-3 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text text-lg font-medium text-gray-700">
              Contraseña
            </span>
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="input input-bordered input-primary w-full text-lg p-3 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="label mt-2">
            <a
              href="#"
              className="label-text-alt link link-hover text-sm text-gray-500"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </label>
        </div>

        <div className="form-control mt-8">
          <Link href={"/panel-de-control"}  className="btn btn-primary btn-lg w-full text-xl py-3 rounded-md shadow-lg transform transition duration-300 hover:scale-105">
            Iniciar Sesión
          </Link>
        </div>
      </form>

      <div className="divider text-gray-500 my-8">O</div>

      <div className="flex flex-col space-y-4">
        <button className="btn btn-outline btn-accent">
          Continuar con Google
        </button>
        <button className="btn btn-outline btn-info">
          Continuar con Facebook
        </button>
      </div>
    </div>
  );
}
