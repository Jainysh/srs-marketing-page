import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/styles/theme";
import GlobalStyles from "@/styles/GlobalStyles";
import Layout from "@/components/Layout";
import Head from "next/head";
import { Company } from "@/lib/AppConstants";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`Wholesale supplier of quality handloom lungis, towels, and sarees. Serving India since ${Company.established} with reliable supply chain and trusted partnerships.`}
        />
        <meta property="og:image" content="/images/logo_square.jpg"></meta>
        <meta property="og:site_name" content={Company.name}></meta>
        <meta
          property="og:title"
          content={`${Company.name} - Trusted Textile Wholesale Supplier`}
        />
        <meta
          property="og:description"
          content={`Wholesale supplier of quality handloom lungis, towels, and sarees. Serving India since ${Company.established} with reliable supply chain and trusted partnerships.`}
        />
        <meta property="og:url" content={Company.website}></meta>
        <meta
          name="keywords"
          content="wholesale textiles, handloom lungi, towels, sarees, textile distributor, India"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
