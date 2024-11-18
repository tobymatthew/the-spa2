import { AboutSectionComponent } from "@/components/about-section";
import { BasicBookNowSectionComponent } from "@/components/basic-book-now-section";
import { FooterComponent } from "@/components/footer";
import { HeaderComponent } from "@/components/header";
import { IndoorPoolComponent } from "@/components/indoor-pool";
import Review from "@/components/review";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <div>
    <HeaderComponent/>
    <AboutSectionComponent/>
    <IndoorPoolComponent/>
    {/* <Review/> */}
    <TestimonialsSection/>
    <BasicBookNowSectionComponent/>
    <FooterComponent/>
    </div>
  );
}
