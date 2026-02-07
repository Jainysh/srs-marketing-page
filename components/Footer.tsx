import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import { Company } from "@/lib/AppConstants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const products = [
    { label: "Lungi", path: "/products/lungi" },
    { label: "Towels", path: "/products/towels" },
    { label: "Sarees", path: "/products/sarees" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#2C2C2C",
        color: "white",
        pt: 8,
        pb: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "primary.main",
                mb: 2,
              }}
            >
              {Company.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2, color: "rgba(255,255,255,0.7)" }}
            >
              Trusted wholesale textile supplier since {Company.established}.
              Providing quality handloom lungis, towels, and sarees across
              India.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 3 }}>
              <IconButton
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.main",
                  "&:hover": { bgcolor: "secondary.dark" },
                }}
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton
                href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.main",
                  "&:hover": { bgcolor: "secondary.dark" },
                }}
              >
                <PhoneIcon />
              </IconButton>
              <IconButton
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.main",
                  "&:hover": { bgcolor: "secondary.dark" },
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "primary.light",
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.path} passHref legacyBehavior>
                  <Typography
                    component="a"
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      cursor: "pointer",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Products */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "primary.light",
              }}
            >
              Products
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {products.map((product) => (
                <Link
                  key={product.label}
                  href={product.path}
                  passHref
                  legacyBehavior
                >
                  <Typography
                    component="a"
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      cursor: "pointer",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {product.label}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "primary.light",
              }}
            >
              Contact
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.7)", mb: 1 }}
            >
              {process.env.NEXT_PUBLIC_PHONE_NUMBER}
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
              {process.env.NEXT_PUBLIC_EMAIL}
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: "rgba(255,255,255,0.1)" }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
            © {currentYear} {Company.name}. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
            Wholesale Textile Distributor Since {Company.established}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
