import React from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ConversionBlock from "@/components/ConversionBlock";
import { getAboutContent } from "@/lib/contentful";

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const AboutPage = () => {
  const values = [
    {
      icon: <PeopleIcon sx={{ fontSize: 48, color: "primary.main" }} />,
      title: "Trade Relationships",
      description:
        "Building long-term partnerships with retailers and wholesalers across India.",
    },
    {
      icon: <AccountBalanceIcon sx={{ fontSize: 48, color: "primary.main" }} />,
      title: "Market Knowledge",
      description:
        "Deep understanding of textile markets and customer needs developed over decades.",
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 48, color: "primary.main" }} />,
      title: "Business Ethics",
      description:
        "Transparent dealings and commitment to quality in every transaction.",
    },
    {
      icon: <StorefrontIcon sx={{ fontSize: 48, color: "primary.main" }} />,
      title: "Volume Handling",
      description:
        "Equipped to handle bulk orders with efficient logistics and inventory management.",
    },
    {
      icon: <AutorenewIcon sx={{ fontSize: 48, color: "primary.main" }} />,
      title: "Consistency",
      description:
        "Reliable quality and timely delivery that you can count on.",
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 48, color: "primary.main" }} />,
      title: "Growth Journey",
      description:
        "Continuous expansion of our network and capabilities to serve you better.",
    },
  ];

  const timeline = [
    {
      year: "1978",
      title: "Foundation",
      description:
        "Established our textile wholesale business with a vision for quality and reliability.",
    },
    {
      year: "1990s",
      title: "Network Expansion",
      description:
        "Built strong sourcing networks across handloom clusters in India.",
    },
    {
      year: "2000s",
      title: "Infrastructure Growth",
      description:
        "Developed robust supply chain and storage facilities for larger volumes.",
    },
    {
      year: "2020s",
      title: "Modern Operations",
      description:
        "Integrated technology while maintaining the personal touch of traditional trade.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          About Us - Legacy Textiles | 45+ Years of Wholesale Excellence
        </title>
        <meta
          name="description"
          content="Established in 1978, Legacy Textiles is a trusted handloom and textile wholesale business with decades of experience in the Indian textile trade."
        />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #2C2C2C 0%, #5A5A5A 100%)",
          color: "white",
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url(/images/textile-pattern.png)",
            backgroundSize: "cover",
            opacity: 0.1,
          },
        }}
      >
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
          >
            <Typography variant="h1" sx={{ mb: 3, color: "white" }}>
              About Legacy Textiles
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
                maxWidth: "900px",
                mx: "auto",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              A Legacy of Trust Since 1978
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Main Story */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h2" sx={{ mb: 3 }}>
                Our Story
              </Typography>
              <Box className="golden-line" />
              <Typography
                variant="body1"
                sx={{ mt: 3, mb: 2, fontSize: "1.125rem", lineHeight: 1.8 }}
              >
                Established in 1978, we are a legacy handloom and textile
                wholesale business with decades of experience in the Indian
                textile trade. Over the years, we have built a strong sourcing
                network, reliable supply systems, and long-term relationships
                with retailers and wholesalers across multiple markets.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 2, fontSize: "1.125rem", lineHeight: 1.8 }}
              >
                Our journey began with a simple commitment: to provide quality
                textiles with unwavering reliability. This principle has guided
                us through four decades of business, helping us grow from a
                small operation to a trusted name in wholesale textile
                distribution.
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.125rem", lineHeight: 1.8 }}
              >
                Today, we continue to honor that commitment while adapting to
                modern business needs, ensuring our partners receive the same
                dedication to quality and service that has defined us since the
                beginning.
              </Typography>
            </MotionBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  height: 500,
                  bgcolor: "grey.200",
                  borderRadius: "4px",
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
                      "linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(139,115,85,0.2) 100%)",
                  },
                }}
              >
                {/* Placeholder for about image */}
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Timeline */}
      <Box sx={{ bgcolor: "background.paper", py: { xs: 8, md: 12 } }}>
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
              Our Growth Journey
            </Typography>
            <Box className="golden-line" sx={{ mx: "auto" }} />
          </MotionBox>

          <Grid container spacing={4}>
            {timeline.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <MotionPaper
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    border: "1px solid",
                    borderColor: "divider",
                    borderTop: "4px solid",
                    borderTopColor: "primary.main",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderTopColor: "primary.dark",
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 32px rgba(212,175,55,0.2)",
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: "primary.main",
                      mb: 2,
                      fontWeight: 700,
                    }}
                  >
                    {item.year}
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
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
            What Defines Us
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
            Core principles that have guided us for over four decades
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
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
                    <Box sx={{ mb: 2 }}>{value.icon}</Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Conversion Block */}
      <ConversionBlock showEnquireButton />
    </>
  );
};

export default AboutPage;

export async function getStaticProps() {
  const aboutContent = await getAboutContent();

  return {
    props: {
      aboutContent: aboutContent || null,
    },
    revalidate: 3600,
  };
}
