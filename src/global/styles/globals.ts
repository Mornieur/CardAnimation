import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`

* {
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;

}

html{
  width: 100vw;
  overflow-x: hidden;
}

html, body {
  height: 100vh;
}

body {
  width:100%;

  scrollbar-width: thin;
  

}

h2 {
    color: var(--blue-dark);
    font-size: clamp(1.5rem, 8vw, 3.5rem);
}


  scroll-behavior: smooth;
  overflow-x: hidden;
  


:root {

  // White Colors

  --black: #000;
  --white: #fff;
  --white-50: #F4F4F4;
  --white-100: #f8f8f8;

  // Grey Colors 
  
  
  --grey-100: #dddddd;
  --grey-400: #8a8a8a;
  --grey-450: #868686;
  --grey-470: #7C7C7C;
  --grey-480: #7D7D7D;
  --grey-500: #797979;
  --grey-800: #4b4b4b;
  --grey-850: #373737;
  --grey-900: #2d2d2d;

  --grey-boxShadow: #c2c2c2;
  --grey-p: #6e6d6d;

  // Yellow Colors

  --yellow-500: #ffd706;
  --yellow-600: #FFD010;



  // Blue Colors

  --blue-50: #c8e1ff;

  --blue-300: #00a7ff;

  --blue-light: #65a1d3;

  --blue-dark: #2a4999;

  --blueTwo-light: #b3dcff;

  --vereda-blue: #1E439B;

  

  --name-blue: #1f9aff;

  --blue-background: #f6faff;

  --blue-card: #f6faff;


  // Pink Colors

  --pink-300: #F9778D;

  // Font weight

  --regular: 400;
  --medium: 500;
  --semiBold: 600;

// Font size - Mobile

 --smallMob-font: 0.85rem;
 --averageMob-font: 1rem;
 --largeMob-font: 1.5rem;

// Font size - Desktop

 --smallDesk-font: 0.85rem;
 --averageDesk-font: 1rem;
 --highDesk-font: 1.3rem;
 --largeDesk-font: 2rem;
 --extraBigDesk-font: 3.5rem;
}
`;
