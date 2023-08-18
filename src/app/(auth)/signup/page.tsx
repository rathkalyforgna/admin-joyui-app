import * as React from "react";
import Link from "next/link";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";

export default function SignUp() {
  return (
    <Sheet
      sx={{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Sheet
        sx={{
          // width: 300,
          mx: "auto",
          my: 4,
          py: 5,
          px: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <strong>Sign up for an account.</strong>
          </Typography>
          <Typography level="body-sm">
            Make your app management easy and fun!
          </Typography>
        </div>
        <Box display="flex" alignItems="center" gap={2}>
          <FormControl>
            <FormLabel>First name</FormLabel>
            <Input name="firstName" type="text" placeholder="John" />
          </FormControl>
          <FormControl>
            <FormLabel>Last name</FormLabel>
            <Input name="lastName" type="text" placeholder="Doe" />
          </FormControl>
        </Box>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" placeholder="johndoe@example.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input name="password" type="password" placeholder="password" />
        </FormControl>

        <Button sx={{ mt: 1 }}>Create account</Button>
        <Typography
          endDecorator={<Link href="/login">Log in</Link>}
          fontSize="sm"
          sx={{ alignSelf: "center" }}
        >
          Already have an account?
        </Typography>
      </Sheet>
    </Sheet>
  );
}
