import { Button as NextUIButton } from "@nextui-org/react";
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  return (
    <NextUIButton color="primary" onClick={onClick} variant="ghost">
      {label}
    </NextUIButton>
  );
};

export default Button;
