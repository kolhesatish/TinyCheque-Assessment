import { HeroSection } from '../components/HeroSection'
import { ProblemSolutionSection } from '../components/ProblemSolutionSection'
import { HowItWorksSection } from '../components/HowItWorksSection'
import { ExamplesSection } from '../components/ExamplesSection'
import { FeaturesSection } from '../components/FeaturesSection'
import { CaseStudiesSection } from '../components/CaseStudiesSection'
import { ComparisonSection } from '../components/ComparisonSection'
import { PricingSection } from '../components/PricingSection'
import { BlogSection } from '../components/BlogSection'
import { FAQSection } from '../components/FAQSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <ExamplesSection />
      <FeaturesSection />
      <CaseStudiesSection />
      <ComparisonSection />
      <PricingSection />
      <BlogSection />
      <FAQSection />
    </main>
  )
}