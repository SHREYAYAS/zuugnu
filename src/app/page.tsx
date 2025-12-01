import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Training from '@/components/Training';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Training />
      <Testimonials />
      <CTASection />
    </>
  );
}
