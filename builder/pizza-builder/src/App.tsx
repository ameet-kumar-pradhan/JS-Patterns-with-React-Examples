class Pizza {
  ingredients: string[];
  size: string;
  crust: string;
  constructor() {
    this.ingredients = [];
    this.size = "medium";
    this.crust = "regular";
  }

  showDetails() {
    return `Size: ${this.size}, Crust: ${
      this.crust
    }, Ingredients: ${this.ingredients.join(", ")}`;
  }
}

// --- PizzaBuilder class (Builder) ---
class PizzaBuilder {
  pizza: Pizza;
  constructor() {
    this.pizza = new Pizza();
  }

  setSize(size: string) {
    this.pizza.size = size;
    return this; // Returning 'this' enables method chaining
  }

  setCrust(crust: string) {
    this.pizza.crust = crust;
    return this;
  }

  addIngredient(ingredient: string) {
    this.pizza.ingredients.push(ingredient);
    return this;
  }

  build() {
    return this.pizza;
  }
}

// --- React component using the builder ---
const PizzaBuilderDemo = () => {
  const createPizza = () => {
    const pizzaBuilder = new PizzaBuilder();
    const customPizza = pizzaBuilder
      .setSize("large")
      .setCrust("thin")
      .addIngredient("pepperoni")
      .addIngredient("mushrooms")
      .addIngredient("cheese")
      .build();

    return customPizza.showDetails();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Builder Pattern in React</h1>
      <p className="mb-2">Click below to create a custom pizza:</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => alert(createPizza())}
      >
        Create Pizza
      </button>
    </div>
  );
};

export default PizzaBuilderDemo;
