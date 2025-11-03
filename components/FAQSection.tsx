'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Badge,
  Accordion
} from '@chakra-ui/react'

export function FAQSection() {
  const faqs = [
    {
      question: "Is this spam? Will Google penalize my site?",
      answer: "This is the #1 fear—and it's valid. Google penalizes LOW-QUALITY content created solely to manipulate rankings. SEOengine's Brand Kit ensures every article authentically represents YOUR expertise and brand voice, meeting Google's E-E-A-T standards. Result? Zero Google penalties reported across 2,000+ users in 18 months."
    },
    {
      question: "Will this hurt my domain reputation?",
      answer: "Your domain is your asset. Domain reputation comes from content quality and publishing consistency—both of which SEOengine improves. Sites publishing 20-30 quality articles monthly see domain rating increases of 15-25 points within 6-9 months. You're building authority, not risking it."
    },
    {
      question: "Isn't this too complex to set up?",
      answer: "Setup takes 5 minutes: (1) Connect your site, (2) Upload 2-3 writing examples or describe your voice, (3) Activate autopilot. That's it. No training videos. No onboarding calls. First article publishes within 24 hours."
    },
    {
      question: "What if the content isn't good enough?",
      answer: "Three safety nets: (1) Brand Kit training ensures articles match YOUR voice, not generic AI, (2) Unlimited rewrites—regenerate any section instantly, (3) 30-day quality guarantee—if you're not satisfied with article quality in the first month, full refund, no questions asked."
    },
    {
      question: "Why not just use [Competitor]?",
      answer: "SEOengine costs $5/article ($150 for 30 articles/month) vs. competitors at $14-279/month. We offer true autopilot (not manual workflows), advanced Brand Kit voice matching, and a 5-minute learning curve vs. 5-10 hours. No annual lock-in—pay as you go."
    },
    {
      question: "What's the ROI? How do I know this will work?",
      answer: "Investment: $150/month vs. Alternative: $3,000-9,000/month (freelancers). Time saved: 120-180 hours/month. Typical results: 200-400% organic traffic increase by month 6. Average payback period: 6-8 weeks. Most users see measurable traffic increases within 30-45 days."
    }
  ]

  return (
    <Box py={20} bg="gray.50">
      <Container maxW="4xl">
        <VStack gap={12}>
          {/* Header */}
          <VStack gap={4} textAlign="center">
            <Badge colorScheme="blue" fontSize="sm" px={3} py={1} borderRadius="full">
              FAQ
            </Badge>
            <Heading
              as="h1"
              size="3xl"
              lineHeight="1.1"
              fontWeight="bold"
              color="gray.900"
            >
              Questions?{' '}
              <Text as="span" bgGradient="linear(to-r, blue.600, purple.600)" bgClip="text">
                We've Got You Covered
              </Text>
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              Real answers to the questions founders actually ask about automated content and Google penalties.
            </Text>
          </VStack>

          {/* FAQ Accordion */}
          <Box w="full">
            <Accordion.Root multiple>
              {faqs.map((faq, index) => (
                <Accordion.Item key={index} value={index.toString()}>
                  <Accordion.ItemTrigger>
                    <Text fontSize="lg" fontWeight="semibold" color="gray.900" textAlign="left">
                      {faq.question}
                    </Text>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Text color="gray.700" lineHeight="1.6">
                      {faq.answer}
                    </Text>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}