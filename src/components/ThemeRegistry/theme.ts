import { Inter } from "next/font/google";
import { extendTheme } from "@mui/joy/styles";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const theme = extendTheme({
  fontFamily: {
    body: inter.style.fontFamily,
  },
});

export default theme;
