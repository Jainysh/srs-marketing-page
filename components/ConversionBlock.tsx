import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import { motion } from "framer-motion";
import { colorPallette } from "@/styles/theme";
import { Company } from "@/lib/AppConstants";

interface ConversionBlockProps {
  text?: string;
  showEnquireButton?: boolean;
}

const ConversionBlock: React.FC<ConversionBlockProps> = ({
  text = "Looking for a reliable long-term wholesale textile supplier?",
  showEnquireButton = false,
}) => {
  return (
    <Box
      sx={{
        bgcolor: "primary.light",
        py: { xs: 6, md: 8 },
        my: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: `linear-gradient(90deg, ${colorPallette.primary.main} 0%, ${colorPallette.primary.light} 50%, ${colorPallette.primary.main} 100%)`,
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                color: "text.primary",
                maxWidth: "800px",
              }}
            >
              {text}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ width: { xs: "100%", sm: "auto" } }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                href={`https://wa.me/91${Company.contact.phone}?text=Hello, I'm interested in your wholesale textile products.`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: "#25D366",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    bgcolor: "#128C7E",
                  },
                }}
              >
                WhatsApp
              </Button>

              <Button
                variant="contained"
                size="large"
                startIcon={<PhoneIcon />}
                href={`tel:${Company.contact.phone}`}
                sx={{
                  px: 4,
                  py: 1.5,
                }}
              >
                Call Now
              </Button>

              {showEnquireButton && (
                <Button
                  variant="outlined"
                  size="large"
                  href="/contact"
                  sx={{
                    borderColor: "primary.main",
                    color: "primary.dark",
                    px: 4,
                    py: 1.5,
                    "&:hover": {
                      borderColor: "primary.dark",
                      bgcolor: "primary.main",
                      color: "white",
                    },
                  }}
                >
                  Enquire
                </Button>
              )}
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ConversionBlock;
