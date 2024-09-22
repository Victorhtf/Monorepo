import { ReactNode } from "react";

interface BackgroundProps {
  children?: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="fixed min-h-screen w-full flex items-center justify-center bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_60%,#1d4ed8_150%)]">
      {/* Centralizando os children */}
      <div className="text-center w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
