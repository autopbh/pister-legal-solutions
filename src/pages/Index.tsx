import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ExpertiseAreasSection from '@/components/sections/ExpertiseAreasSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import ComplianceNotice from '@/components/sections/ComplianceNotice';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ComplianceNotice />
      <main className="overflow-hidden">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <ExpertiseAreasSection />
        <ProcessSection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
