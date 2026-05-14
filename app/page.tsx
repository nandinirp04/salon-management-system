import Customer_Navbar from "@/components/customer/home/customer_navbar";
import Hero from "@/components/customer/home/HeroSection";
import Services from "@/components/customer/home/servicesection"
import Offer from "@/components/customer/home/offersection"
import TEstimonials from "@/components/customer/home/testimonialssection"
import CTA from "@/components/customer/home/CTAsection"
import Footer from "@/components/customer/home/footer"

export default function Home() {
  return (
    <>
      <Customer_Navbar />
      <Hero />
      <Services />
      <Offer/>
      <TEstimonials/>
      <CTA/>
      <Footer/>
    </>
  );
}