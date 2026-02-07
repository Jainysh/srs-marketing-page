import React from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Link from "next/link";
import ConversionBlock from "@/components/ConversionBlock";
import { Company } from "@/lib/AppConstants";
// import { getHomeContent } from "@/lib/contentful";

const MotionBox = motion(Box);
const MotionCard = motion(Card);

const HomePage = () => {
  const legacyFeatures = [
    {
      icon: <CheckCircleIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "45+ years in textile trade",
      description: "Established expertise since 1978",
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Reliable supply chain",
      description: "Delivery across India",
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Trusted wholesale relationships",
      description: "Long-term partnership approach",
    },
  ];

  const categories = [
    {
      title: "Lungi",
      image: "/images/lungi-preview.jpg",
      description: "Premium handloom lungis in various designs and patterns",
      path: "/products/lungi",
    },
    {
      title: "Towels",
      image: "/images/towel-preview.jpg",
      description: "High-quality bath and hand towels in bulk",
      path: "/products/towels",
    },
    {
      title: "Sarees",
      image: "/images/saree-preview.jpg",
      description: "Elegant sarees for wholesale distribution",
      path: "/products/sarees",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Legacy Textiles - Trusted Wholesale Textile Supplier Since
          {Company.established}
        </title>
        <meta
          name="description"
          content={`Wholesale supplier of quality handloom lungis, towels, and sarees. Serving India since ${Company.established} with reliable supply chain and trusted partnerships.`}
        />
        <meta
          name="keywords"
          content="wholesale textiles, handloom lungi, towels, sarees, textile distributor, India"
        />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          minHeight: { xs: "70vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #FFFFFF 0%, #F4E5C2 100%)",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            backgroundImage: "url(/images/hero-pattern.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    mb: 3,
                    background:
                      "linear-gradient(135deg, #2C2C2C 0%, #D4AF37 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Trusted Textile Wholesale Partner
                </Typography>
                <Box className="golden-line" />
                <Typography
                  variant="h4"
                  sx={{
                    mb: 4,
                    color: "text.secondary",
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  Supplying quality textiles for over four decades since{" "}
                  {Company.established}
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    href="#products"
                    sx={{ px: 5, py: 2 }}
                  >
                    Explore Products
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                    target="_blank"
                    sx={{ px: 5, py: 2 }}
                  >
                    Enquire on WhatsApp
                  </Button>
                </Stack>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Legacy Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          textAlign="center"
          sx={{ mb: 8 }}
        >
          <Typography variant="h2" sx={{ mb: 2 }}>
            Our Legacy
          </Typography>
          <Box className="golden-line" sx={{ mx: "auto" }} />
          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              maxWidth: "700px",
              mx: "auto",
              mt: 3,
            }}
          >
            Four decades of excellence in textile wholesale distribution
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {legacyFeatures.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                elevation={0}
                sx={{
                  height: "100%",
                  border: "1px solid",
                  borderColor: "divider",
                  "&:hover": {
                    borderColor: "primary.main",
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: "center" }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Divider />

      {/* Product Discovery Section */}
      <Box
        id="products"
        sx={{ bgcolor: "background.paper", py: { xs: 8, md: 12 } }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            textAlign="center"
            sx={{ mb: 8 }}
          >
            <Typography variant="h2" sx={{ mb: 2 }}>
              Our Products
            </Typography>
            <Box className="golden-line" sx={{ mx: "auto" }} />
            <Typography
              variant="h5"
              sx={{
                color: "text.secondary",
                maxWidth: "700px",
                mx: "auto",
                mt: 3,
              }}
            >
              Quality textiles for wholesale distribution
            </Typography>
          </MotionBox>

          <Grid container spacing={4}>
            {categories.map((category, index) => (
              <Grid item xs={12} md={4} key={index}>
                <MotionCard
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  elevation={0}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      height: 280,
                      bgcolor: "grey.200",
                      position: "relative",
                      overflow: "hidden",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)",
                      },
                    }}
                  >
                    {/* Placeholder for product image */}
                  </CardMedia>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h4" sx={{ mb: 2 }}>
                      {category.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {category.description}
                    </Typography>
                    <Link href={category.path} passHref legacyBehavior>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          py: 1.5,
                          borderColor: "primary.main",
                          color: "primary.main",
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "white",
                          },
                        }}
                      >
                        View Range
                      </Button>
                    </Link>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Conversion Block */}
      <ConversionBlock />
    </>
  );
};

export default HomePage;

// Static generation
export async function getStaticProps() {
  // const homeContent = await getHomeContent();

  return {
    props: {
      // homeContent: homeContent || null,
    },
    // revalidate: 3600, // Revalidate every hour
  };
}
