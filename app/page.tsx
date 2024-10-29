import { AboutSectionComponent } from "@/components/about-section";
import { FooterComponent } from "@/components/footer";
import { HeaderComponent } from "@/components/header";
import { IndoorPoolComponent } from "@/components/indoor-pool";

export default function Home() {
  return (
    <div>
    <HeaderComponent/>
    <AboutSectionComponent/>
    <IndoorPoolComponent/>
    <FooterComponent/>
    </div>
  );
}
