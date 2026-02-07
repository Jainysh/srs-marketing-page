import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Paper,
  Stack,
  Alert,
  Snackbar,
} from "@mui/material";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

interface FormData {
  name: string;
  businessName: string;
  businessType: string;
  location: string;
  phone: string;
  productInterest: string;
  volumeCategory: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    businessName: "",
    businessType: "",
    location: "",
    phone: "",
    productInterest: "",
    volumeCategory: "",
    message: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const businessTypes = ["Retailer", "Wholesaler", "Distributor", "Other"];
  const products = ["Lungi", "Towels", "Sarees", "Multiple Products"];
  const volumeCategories = [
    "Small (100-500 pieces)",
    "Medium (500-2000 pieces)",
    "Large (2000-5000 pieces)",
    "Extra Large (5000+ pieces)",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setOpenSnackbar(true);

    // Reset form
    setFormData({
      name: "",
      businessName: "",
      businessType: "",
      location: "",
      phone: "",
      productInterest: "",
      volumeCategory: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Phone",
      content: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91-XXXXX-XXXXX",
      href: `tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`,
    },
    {
      icon: <WhatsAppIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "WhatsApp",
      content: "Chat with us",
      href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Email",
      content: process.env.NEXT_PUBLIC_EMAIL || "contact@example.com",
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Location",
      content: "Serving across India",
      href: "#",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Contact Us - Wholesale Textile Enquiries | Legacy Textiles
        </title>
        <meta
          name="description"
          content="Get in touch for wholesale textile enquiries. Contact Legacy Textiles for bulk orders of lungis, towels, and sarees."
        />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #2C2C2C 0%, #5A5A5A 100%)",
          color: "white",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: "center" }}
          >
            <Typography variant="h1" sx={{ mb: 3, color: "white" }}>
              Get In Touch
            </Typography>
            <Box
              className="golden-line"
              sx={{
                mx: "auto",
                background: "linear-gradient(90deg, #D4AF37 0%, #F4E5C2 100%)",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                mt: 3,
                maxWidth: "800px",
                mx: "auto",
                fontWeight: 400,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Let's discuss your wholesale textile requirements
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Contact Info Cards */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={3}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MotionPaper
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                elevation={0}
                component="a"
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  info.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                sx={{
                  p: 3,
                  textAlign: "center",
                  border: "1px solid",
                  borderColor: "divider",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  display: "block",
                  "&:hover": {
                    borderColor: "primary.main",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{info.icon}</Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  {info.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {info.content}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Form Section */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            textAlign="center"
            sx={{ mb: 6 }}
          >
            <Typography variant="h2" sx={{ mb: 2 }}>
              Enquiry Form
            </Typography>
            <Box className="golden-line" sx={{ mx: "auto" }} />
            <Typography
              variant="body1"
              sx={{ mt: 3, color: "text.secondary", fontSize: "1.125rem" }}
            >
              Fill out the form below and we'll get back to you within 24 hours
            </Typography>
          </MotionBox>

          <MotionPaper
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    label="Business Name"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    select
                    label="Business Type"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    variant="outlined"
                  >
                    {businessTypes.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    label="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="City, State"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    type="tel"
                    placeholder="+91-XXXXX-XXXXX"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    select
                    label="Product Interest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    variant="outlined"
                  >
                    {products.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    select
                    label="Expected Volume Category"
                    name="volumeCategory"
                    value={formData.volumeCategory}
                    onChange={handleChange}
                    variant="outlined"
                  >
                    {volumeCategories.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Additional Details / Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Tell us more about your requirements..."
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      py: 2,
                      fontSize: "1.125rem",
                    }}
                  >
                    Submit Enquiry
                  </Button>
                </Grid>
              </Grid>
            </form>
          </MotionPaper>
        </Container>
      </Box>

      {/* Additional Contact Methods */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center"
        >
          <Typography variant="h3" sx={{ mb: 3 }}>
            Prefer Direct Contact?
          </Typography>
          <Box className="golden-line" sx={{ mx: "auto" }} />
          <Typography
            variant="body1"
            sx={{ mt: 3, mb: 4, fontSize: "1.125rem" }}
          >
            Reach out to us directly for immediate assistance
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Hello, I'm interested in your wholesale textile products.`}
              target="_blank"
              sx={{
                bgcolor: "#25D366",
                py: 2,
                px: 4,
                "&:hover": {
                  bgcolor: "#128C7E",
                },
              }}
            >
              WhatsApp Us
            </Button>
            <Button
              variant="contained"
              size="large"
              startIcon={<PhoneIcon />}
              href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
              sx={{
                py: 2,
                px: 4,
              }}
            >
              Call Now
            </Button>
          </Stack>
        </MotionBox>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Thank you for your enquiry! We'll get back to you within 24 hours.
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactPage;
