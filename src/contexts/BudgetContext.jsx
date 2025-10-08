import { createContext, useState } from "react";

// 1) Creazione del context
export const BudgetContext = createContext();

// 2) Definizione del provider
export function BudgetProvider({ children }) {
  // Stato per la modalità budget (true/false)
  const [budgetMode, setBudgetMode] = useState(false);

  // Valori resi disponibili ai componenti figli
  const value = { budgetMode, setBudgetMode };

  // 3) Restituzione del provider con i valori condivisi
  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
}
