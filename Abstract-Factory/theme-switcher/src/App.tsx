// App.tsx
import React from "react";
import { ThemeProvider, useTheme } from "./theme/ThemeContext";

const AppContent: React.FC = () => {
  const themeFactory = useTheme();

  const Button = themeFactory.createButton();
  const Card = themeFactory.createCard();
  return (
    <div>
      <Card
        title="Abstract Factory Pattern"
        content="This is a themed card component."
      />
      <Button label="Click Me" onClick={() => alert("Button Clicked!")} />
    </div>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
