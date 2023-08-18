import * as React from "react";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ColorSchemeToggle from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { usePathname } from "next/navigation";
import { capitalize } from "lodash";

export default function Breadcrumb() {
  const pathname = usePathname();

  const linkPath = pathname.split("/");
  linkPath.shift();

  const paths = linkPath.map((path, i) => {
    return { breadcrumb: path, href: "/" + linkPath.slice(0, i + 1).join("/") };
  });

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Breadcrumbs
        size="sm"
        aria-label="breadcrumbs"
        separator={<i data-feather="chevron-right" />}
        sx={{
          "--Breadcrumbs-gap": "1rem",
          "--Icon-fontSize": "16px",
          fontWeight: "lg",
          color: "neutral.400",
          px: 0,
        }}
      >
        <Link
          underline="none"
          color="neutral"
          fontSize="inherit"
          href="#some-link"
          aria-label="Home"
        >
          <i data-feather="home" />
        </Link>
        {paths.map((path, i) => {
          if (i < paths.length - 1) {
            return (
              <Link
                key={path.href}
                underline="hover"
                color="neutral"
                fontSize="inherit"
                href={path.href}
              >
                {capitalize(path.breadcrumb)}
              </Link>
            );
          }
          return (
            <Typography
              key={path.href}
              fontSize="inherit"
              variant="plain"
              color="primary"
            >
              {capitalize(path.breadcrumb)}
            </Typography>
          );
        })}
      </Breadcrumbs>
      <ColorSchemeToggle
        sx={{ ml: "auto", display: { xs: "none", md: "inline-flex" } }}
      />
    </Box>
  );
}
