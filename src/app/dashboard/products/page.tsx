import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import ProductList from "@/views/Products/ProductList";

export default function ProductListPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          my: 1,
          gap: 1,
          flexWrap: "wrap",
          "& > *": {
            minWidth: "clamp(0px, (500px - 100%) * 999, 100%)",
            flexGrow: 1,
          },
        }}
      >
        <Typography level="h1" fontSize="xl4">
          Products
        </Typography>
        <Box sx={{ flex: 999 }} />
        <Box sx={{ display: "flex", gap: 1, "& > *": { flexGrow: 1 } }}>
          <Button
            variant="outlined"
            color="neutral"
            startDecorator={<i data-feather="plus" />}
          >
            New Product
          </Button>
        </Box>
      </Box>
      <ProductList />
    </>
  );
}
