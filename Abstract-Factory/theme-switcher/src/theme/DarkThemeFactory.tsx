import React from "react";
import { ThemeFactory, ButtonProps, CardProps } from "../interfaces";

const DarkButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    style={{
      backgroundColor: "#333",
      color: "#fff",
      border: "1px solid #555",
      padding: "10px 20px",
    }}
    onClick={onClick}
  >
    {label}
  </button>
);

const DarkCard: React.FC<CardProps> = ({ title, content }) => (
  <div
    style={{
      backgroundColor: "#333",
      color: "#fff",
      border: "1px solid #555",
      padding: "20px",
    }}
  >
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export class DarkThemeFactory implements ThemeFactory {
  createButton() {
    return DarkButton;
  }

  createCard() {
    return DarkCard;
  }
}
