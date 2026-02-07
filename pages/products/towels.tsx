import React from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import VerifiedIcon from "@mui/icons-material/Verified";
import CategoryIcon from "@mui/icons-material/Category";
import ConversionBlock from "@/components/ConversionBlock";
import { getProductsByCategory } from "@/lib/contentful";
import { Company } from "@/lib/AppConstants";
import { colorPallette } from "@/styles/theme";

const MotionBox = motion(Box);

const TowelsPage = () => {
  const features = [
    "Premium absorbent quality",
    "Bath towels and hand towels available",
    "Consistent GSM and size standards",
    "Regular bulk stock availability",
    "Multiple packaging options",
    "Hotel and retail grade options",
  ];

  const specifications = [
    {
      icon: <CategoryIcon sx={{ color: "primary.main" }} />,
      title: "Variants",
      description: "Bath, hand, face towels in various sizes",
    },
    {
      icon: <VerifiedIcon sx={{ color: "primary.main" }} />,
      title: "Quality Consistency",
      description: "Uniform GSM and absorption standards",
    },
    {
      icon: <InventoryIcon sx={{ color: "primary.main" }} />,
      title: "Bulk Availability",
      description: "Large volume orders for hotels and retailers",
    },
    {
      icon: <LocalShippingIcon sx={{ color: "primary.main" }} />,
      title: "Regular Supply",
      description: "Consistent delivery schedules maintained",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Wholesale Towel Supplier | Bath & Hand Towels | {Company.name}
        </title>
        <meta
          name="description"
          content="Quality towels in bulk quantities for wholesale. Bath towels, hand towels for hotels and retailers across India."
        />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${colorPallette.primary.light} 0%, ${colorPallette.primary.contrastText} 100%)`,
          py: { xs: 8, md: 12 },
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: "center" }}
          >
            <Typography variant="h1" sx={{ mb: 3 }}>
              Quality Towels
            </Typography>
            <Box className="golden-line" sx={{ mx: "auto" }} />
            <Typography
              variant="h4"
              sx={{
                mt: 3,
                maxWidth: "900px",
                mx: "auto",
                fontWeight: 400,
                color: "text.secondary",
              }}
            >
              We supply high-quality bath and hand towels in bulk quantities to
              hotels, retailers, and wholesalers through our reliable
              distribution network.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Product Image */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <MotionBox
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              height: { xs: 400, md: 500 },
              bgcolor: "grey.200",
              borderRadius: "4px",
              position: "relative",
              overflow: "hidden",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <Typography variant="h4" color="text.secondary">
                Product Image
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                Add your towel product images here
              </Typography>
            </Box>
          </Box>
        </MotionBox>
      </Container>

      {/* Features */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3" sx={{ mb: 3 }}>
                Product Features
              </Typography>
              <Box className="golden-line" />
              <List sx={{ mt: 3 }}>
                {features.map((feature, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CheckCircleIcon sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={feature}
                      primaryTypographyProps={{
                        fontSize: "1.125rem",
                        fontWeight: 500,
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3" sx={{ mb: 3 }}>
                Available Types
              </Typography>
              <Box className="golden-line" />
              <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mt: 3 }}>
                <Chip
                  label="Bath Towels"
                  variant="outlined"
                  sx={{
                    fontSize: "1rem",
                    py: 2.5,
                    borderColor: "primary.main",
                  }}
                />
                <Chip
                  label="Hand Towels"
                  variant="outlined"
                  sx={{
                    fontSize: "1rem",
                    py: 2.5,
                    borderColor: "primary.main",
                  }}
                />
                <Chip
                  label="Face Towels"
                  variant="outlined"
                  sx={{
                    fontSize: "1rem",
                    py: 2.5,
                    borderColor: "primary.main",
                  }}
                />
                <Chip
                  label="Pool Towels"
                  variant="outlined"
                  sx={{
                    fontSize: "1rem",
                    py: 2.5,
                    borderColor: "primary.main",
                  }}
                />
                <Chip
                  label="Beach Towels"
                  variant="outlined"
                  sx={{
                    fontSize: "1rem",
                    py: 2.5,
                    borderColor: "primary.main",
                  }}
                />
              </Stack>
              <Typography
                variant="body1"
                sx={{ mt: 4, fontSize: "1.125rem", color: "text.secondary" }}
              >
                Available in various GSM ratings (300-600 GSM), sizes, and color
                options to match your specific requirements.
              </Typography>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Specifications */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            textAlign="center"
            sx={{ mb: 6 }}
          >
            <Typography variant="h2" sx={{ mb: 2 }}>
              Supply Capabilities
            </Typography>
            <Box className="golden-line" sx={{ mx: "auto" }} />
          </MotionBox>

          <Grid container spacing={4}>
            {specifications.map((spec, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "primary.main",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2, fontSize: 48 }}>{spec.icon}</Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {spec.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {spec.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Market Suitability */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: 350,
                  bgcolor: "grey.200",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                Market Suitability
              </Typography>
              <Box className="golden-line" />
              <Typography
                variant="body1"
                sx={{ mt: 3, fontSize: "1.125rem", lineHeight: 1.8 }}
              >
                Our towels are ideal for various market segments:
              </Typography>
              <List sx={{ mt: 2 }}>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Hotels and hospitality businesses"
                    primaryTypographyProps={{ fontSize: "1.125rem" }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Retail stores and showrooms"
                    primaryTypographyProps={{ fontSize: "1.125rem" }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Spa and wellness centers"
                    primaryTypographyProps={{ fontSize: "1.125rem" }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Wholesale distributors"
                    primaryTypographyProps={{ fontSize: "1.125rem" }}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </MotionBox>
      </Container>

      {/* CTA */}
      <Box
        sx={{ bgcolor: "primary.main", color: "white", py: { xs: 6, md: 8 } }}
      >
        <Container maxWidth="md">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            textAlign="center"
          >
            <Typography variant="h3" sx={{ mb: 2, color: "white" }}>
              For Wholesale Enquiries and Bulk Supply
            </Typography>
            <Typography
              variant="h5"
              sx={{ mb: 4, color: "rgba(255,255,255,0.9)", fontWeight: 400 }}
            >
              Contact us today to discuss your requirements
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <ConversionBlock />
    </>
  );
};

export default TowelsPage;

export async function getStaticProps() {
  const products = await getProductsByCategory("towels");

  return {
    props: {
      products,
    },
    // revalidate: 3600,
  };
}
