import { extendTheme } from "@chakra-ui/react";
import { Quicksand } from "next/font/google";

const quick = Quicksand({ weight: ['500'], subsets: ["latin"],preload: true, });

const theme =  extendTheme({
  colors:{
    orange : {
      500 : "#ff7624"
    }
  },
    fonts: {
    heading: quick.style.fontFamily,
    body: quick.style.fontFamily,
  
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '1023px',
    xl: '1215px',
    '2xl': '1536px'
  },
  shadows: {
  
    barShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
  }
})

export default theme