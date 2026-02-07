import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Lora:wght@400;500;700&family=Montserrat:wght@400;500;700&family=Inter:wght@400;500;700&display=swap");

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
      }

      /* Golden accent decorative line */
      .golden-line {
        width: 80px;
        height: 3px;
        background: linear-gradient(90deg, #ffd700 0%, #ffe54d 100%);
        margin: 16px 0;
      }

      /* Fade in animation */
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .fade-in {
        animation: fadeIn 0.8s ease-out;
      }

      /* Smooth transitions */
      a {
        text-decoration: none;
        color: inherit;
        transition: all 0.3s ease;
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: #3b4ba0;
        border-radius: 5px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #2a3670;
      }
    `}
  />
);

export default GlobalStyles;
