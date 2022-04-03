import React, { createContext, useState } from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface GradientContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPrevMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as GradientContextProps);

export const GradientProvider = ({ children }: GradientProviderProps) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'red',
    secondary: 'blue',
  });

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colors: ImageColors) => {
    setColors(colors);
  };

  const setPrevMainColors = (colors: ImageColors) => {
    setPrevColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{ colors, prevColors, setMainColors, setPrevMainColors }}>
      {children}
    </GradientContext.Provider>
  );
};

interface GradientProviderProps {
  children: JSX.Element | JSX.Element[];
}
