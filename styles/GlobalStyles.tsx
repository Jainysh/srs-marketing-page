import { Global, css } from "@emotion/react";
import { color } from "framer-motion";
import { colorPallette } from "./theme";

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&family=Montserrat:wght@400;500;700&display=swap");

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
        background: linear-gradient(
          90deg,
          ${colorPallette.primary.main} 0%,
          ${colorPallette.primary.light} 100%
        );
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
        background: ${colorPallette.primary.main};
        border-radius: 5px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${colorPallette.primary.dark};
      }
    `}
  />
);

export default GlobalStyles;
