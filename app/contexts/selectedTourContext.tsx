"use client"
import { createContext, useContext, ReactNode, useState } from "react";

interface SelectedTourProps {
  selectedTour: any;
  setSelectedTour: (param: any) => void;
}

const SelectedTourContext = createContext<SelectedTourProps | undefined>(undefined);

export const SelectedTourContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTour, setSelectedTour] = useState(null);
  console.log(selectedTour)
  const contextValue: SelectedTourProps = {
    selectedTour,
    setSelectedTour,
  };
  
  return (
    <SelectedTourContext.Provider value={contextValue}>
      {children}
    </SelectedTourContext.Provider>
  );
};

export const useSelectedTourContext = (): SelectedTourProps => {
  const context = useContext(SelectedTourContext);
  if (!context) {
    throw new Error("useSelectedTourContext must be used within SelectedTourContextProvider");
  }
  return context;
};
