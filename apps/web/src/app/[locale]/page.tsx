"use client";

import React from "react";
import Login from "../../components/Auth/Login";
import { Button, Card } from "@repo/ui";

export default function MainPage() {
  const handleClick = (): void => {};

  return (
    <>
      <Button label={"Button"} onClick={() => handleClick()} />
      <Card />
    </>
  );
}
