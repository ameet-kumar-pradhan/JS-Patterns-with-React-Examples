import { ButtonProps, CardProps, ThemeFactory } from "../interfaces";

const LightButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    style={{
      backgroundColor: "#ffffff",
      color: "#000",
      border: "1px solid #ccc",
      padding: "10px 20px",
    }}
    onClick={onClick}
  >
    {label}
  </button>
);
const LightCard: React.FC<CardProps> = ({ title, content }) => (
  <div
    style={{
      backgroundColor: "#ffffff",
      color: "#000",
      border: "1px solid #ccc",
      padding: "20px",
    }}
  >
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export class LightThemeFactory implements ThemeFactory {
  createButton() {
    return LightButton;
  }

  createCard() {
    return LightCard;
  }
}
