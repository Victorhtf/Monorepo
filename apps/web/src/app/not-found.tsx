import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-background-color">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-dark-primary-color">404</h1>

        <p className="text-2xl font-semibold mb-6 text-text-color">
          Pagina nao enconrada
        </p>

        <Link href="/">
          <button className="inline-flex items-center px-4 py-2 border border-border-color text-sm font-medium rounded-md text-text-color bg-background-color hover:bg-hover-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-color transition duration-150 ease-in-out">
            Voltar
          </button>
        </Link>
      </div>
    </div>
  );
}
