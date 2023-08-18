"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import ColorSchemeToggle from "@/components/ColorSchemeToggle/ColorSchemeToggle";

export default function Home() {
  return (
    <Box>
      <img
        src="/images/products/product_1.jpg"
        style={{ width: 300, height: 300 }}
      />
    </Box>
  );
}
