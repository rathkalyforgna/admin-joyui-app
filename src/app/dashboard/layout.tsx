"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100dvh" }}>
      <Header />
      <Sidebar />
      <Box
        component="main"
        className="MainContent"
        sx={(theme) => ({
          px: {
            xs: 2,
            md: 6,
          },
          pt: {
            xs: `calc(${theme.spacing(2)} + var(--Header-height))`,
            sm: `calc(${theme.spacing(2)} + var(--Header-height))`,
            md: 3,
          },
          pb: {
            xs: 2,
            sm: 2,
            md: 3,
          },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100dvh",
          gap: 1,
        })}
      >
        <Breadcrumb />
        {children}
      </Box>
    </Box>
  );
}
