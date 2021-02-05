import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
import OurTeam from "sections/our-team";
import SubscribeUs from "sections/subscribe-us";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Dami Hami"
          description="DamiHami damihami Dami Hami dami hami magazin online "
        />
        <Banner />
        <Services />
        {/* <Testimonials /> */}
        <OurTeam />
        {/* <OtherServices /> */}
        {/* <MagazineCard /> */}
        {/* <WhyUs /> */}
        <SubscribeUs />
      </Layout>
    </ThemeProvider>
  );
}
