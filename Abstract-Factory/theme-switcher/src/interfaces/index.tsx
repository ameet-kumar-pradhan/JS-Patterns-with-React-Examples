export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface ThemeFactory {
  createButton: () => React.ComponentType<ButtonProps>;
  createCard: () => React.ComponentType<CardProps>;
}
