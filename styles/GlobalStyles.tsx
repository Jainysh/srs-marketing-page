import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap");

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
        font-family: "Cormorant Garamond", "Georgia", serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
      }

      /* Golden accent decorative line */
      .golden-line {
        width: 80px;
        height: 3px;
        background: linear-gradient(90deg, #d4af37 0%, #f4e5c2 100%);
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
        background: #d4af37;
        border-radius: 5px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #b8941f;
      }
    `}
  />
);

export default GlobalStyles;
