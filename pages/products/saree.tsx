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

const MotionBox = motion(Box);

const SareesPage = () => {
  const features = [
    "Curated saree collections",
    "Traditional and contemporary designs",
    "Consistent quality standards",
    "Wholesale bulk availability",
    "Sourced from authentic handloom clusters",
    "Multiple fabric and design options",
  ];

  const specifications = [
    {
      icon: <CategoryIcon sx={{ color: "primary.main" }} />,
      title: "Variants",
      description: "Cotton, silk, and blended sarees",
    },
    {
      icon: <VerifiedIcon sx={{ color: "primary.main" }} />,
      title: "Quality Sourcing",
      description: "Curated from trusted weaving centers",
    },
    {
      icon: <InventoryIcon sx={{ color: "primary.main" }} />,
      title: "Bulk Distribution",
      description: "Large volume handling capabilities",
    },
    {
      icon: <LocalShippingIcon sx={{ color: "primary.main" }} />,
      title: "Regular Supply",
      description: "Consistent availability maintained",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Wholesale Saree Supplier | Handloom Sarees | Legacy Textiles
        </title>
        <meta
          name="description"
          content="Wholesale sourcing and bulk distribution of quality sarees. Trusted partner for retailers and wholesalers across India."
        />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #F4E5C2 0%, #FFFFFF 100%)",
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
              Elegant Sarees
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
              Wholesale sourcing + bulk distribution partner for quality sarees
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                maxWidth: "700px",
                mx: "auto",
                fontWeight: 400,
                color: "text.secondary",
                fontStyle: "italic",
              }}
            >
              Not a producer — but your trusted curator, supplier, and
              distributor
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
                Add your saree product images here
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
                Our Offering
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
                Saree Collections
              </Typography>
              <Box className="golden-line" />
              <Stack direction="row" flexWrap="wrap" gap={1.5} sx={{ mt: 3 }}>
                <Chip
                  label="Cotton Sarees"
                  variant="outlined"
                  sx={{
                    fontSize: "1rem",
                    py: 2.5,
                    borderColor: "primary.main",
                  }}
                />
                <Chip
                  label="Silk Sarees"
                  variant="outlined"
                  sx={{
                    fontSize: "1rem",
                    py: 2.5,
                    borderColor: "primary.main",
                  }}
                />
                <Chip
                  label="Handloom Sarees"
                  variant="outlined"
                  sx={{
                    fontSize: "1rem",
                    py: 2.5,
                    borderColor: "primary.main",
                  }}
                />
                <Chip
                  label="Daily Wear"
                  variant="outlined"
                  sx={{
                    fontSize: "1rem",
                    py: 2.5,
                    borderColor: "primary.main",
                  }}
                />
                <Chip
                  label="Party Wear"
                  variant="outlined"
                  sx={{
                    fontSize: "1rem",
                    py: 2.5,
                    borderColor: "primary.main",
                  }}
                />
                <Chip
                  label="Traditional"
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
                Carefully curated collections sourced from renowned weaving
                centers across India to meet diverse market demands.
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
              Distribution Capabilities
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

      {/* Our Role */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ mb: 3 }}>
                Our Distribution Model
              </Typography>
              <Box className="golden-line" />
              <Typography
                variant="body1"
                sx={{ mt: 3, fontSize: "1.125rem", lineHeight: 1.8 }}
              >
                As your wholesale saree partner, we focus on:
              </Typography>
              <List sx={{ mt: 2 }}>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Sourcing quality sarees from authentic handloom centers"
                    primaryTypographyProps={{ fontSize: "1.125rem" }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Curating collections that match market trends"
                    primaryTypographyProps={{ fontSize: "1.125rem" }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Maintaining consistent quality standards"
                    primaryTypographyProps={{ fontSize: "1.125rem" }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Ensuring timely bulk supply to your business"
                    primaryTypographyProps={{ fontSize: "1.125rem" }}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: 400,
                  bgcolor: "grey.200",
                  borderRadius: "4px",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              />
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
              Contact us today to discuss your saree requirements
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <ConversionBlock />
    </>
  );
};

export default SareesPage;

export async function getStaticProps() {
  const products = await getProductsByCategory("sarees");

  return {
    props: {
      products,
    },
    revalidate: 3600,
  };
}
