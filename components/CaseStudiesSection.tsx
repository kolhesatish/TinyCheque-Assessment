'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  VStack,
  HStack,
  Badge,
  Button,
  Link,
  SimpleGrid,
  Circle
} from '@chakra-ui/react'
import { CircleCheckBig } from 'lucide-react'

export function CaseStudiesSection() {
  return (
    <Box py={20} bg="blue.50">
      <Container maxW="7xl">
        <VStack gap={16}>
          {/* Header */}
          <VStack gap={4} textAlign="center">
            <Badge colorScheme="blue" fontSize="sm" px={3} py={1} borderRadius="full">
              CASE STUDIES
            </Badge>
            <Heading
              as="h2"
              size="3xl"
              lineHeight="1.1"
              fontWeight="bold"
              color="gray.900"
            >
              🚀{' '}
              <Text 
                as="span" 
                bg="yellow.200" 
                color="blue.800" 
                px={2} 
                py={1}
                display="inline"
                borderRadius="md"
              >
                Real Customer Growth
              </Text>
              : See What Happens When SEOengine Runs Your Content
            </Heading>
          </VStack>

          {/* Case Studies Grid */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} w="full">
            {/* Case Study 1 */}
            <Box bg="white" borderRadius="2xl" p={8} shadow="lg">
              <VStack gap={6} align="flex-start">
                <Image
                  src="https://seoengine.ai/images/case1.png"
                  alt="Qcall.ai case study"
                  w="full"
                  h="200px"
                  objectFit="cover"
                  borderRadius="lg"
                />
                
                <VStack gap={4} align="flex-start">
                  <Heading as="h2" size="xl" color="gray.900">
                    Case Study 1: Qcall.ai — From Zero to 4,630 Organic Clicks in 4 Months
                  </Heading>

                  <Box>
                    <Heading as="h2" size="md" color="gray.900" mb={2}>
                      The Challenge
                    </Heading>
                    <Text color="gray.700" fontSize="sm" lineHeight="1.6">
                      Qcall.ai, an AI phone agent platform, needed to build organic visibility fast. Like most startups, they had a great product but zero SEO presence. Writing consistent content wasn't an option—their team was deep in product development, not content calendars.
                    </Text>
                  </Box>

                  <Box>
                    <Heading as="h2" size="md" color="gray.900" mb={2}>
                      The Solution
                    </Heading>
                    <Text color="gray.700" fontSize="sm" lineHeight="1.6">
                      They connected SEOengine.ai and let it run on autopilot. No strategy calls, no writer management, no revisions. Just fully automated keyword research, content generation, and publishing.
                    </Text>
                  </Box>

                  <Box>
                    <Heading as="h2" size="md" color="gray.900" mb={2}>
                      The Results
                    </Heading>
                    <VStack gap={2} align="flex-start">
                      {[
                        "4,630 total organic clicks in 4 months",
                        "1.91M impressions from zero",
                        "Average position: 9.4 across hundreds of keywords",
                        "40–60 daily clicks within 90 days",
                        "100% hands-off execution — the team touched nothing"
                      ].map((result, index) => (
                        <HStack key={index} align="center">
                          <CircleCheckBig size={16} color="#023E8A" />
                          <Text fontSize="sm" color="gray.700">
                            {result}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>

                  <Text fontSize="sm" color="blue.700" fontStyle="italic" fontWeight="medium">
                    While Qcall.ai's team built their product, SEOengine built their organic presence. Zero hours. Zero writers. Just steady, autonomous growth.
                  </Text>
                </VStack>
              </VStack>
            </Box>

            {/* Case Study 2 */}
            <Box bg="white" borderRadius="2xl" p={8} shadow="lg">
              <VStack gap={6} align="flex-start">
                <Image
                  src="https://seoengine.ai/images/case2.png"
                  alt="Autoposting.ai case study"
                  w="full"
                  h="200px"
                  objectFit="cover"
                  borderRadius="lg"
                />
                
                <VStack gap={4} align="flex-start">
                  <Heading as="h2" size="xl" color="gray.900">
                    Case Study 2: Autoposting.ai — From 0 to 4,110 Monthly Clicks in 5 Months
                  </Heading>

                  <Box>
                    <Heading as="h2" size="md" color="gray.900" mb={2}>
                      The Challenge
                    </Heading>
                    <Text color="gray.700" fontSize="sm" lineHeight="1.6">
                      Autoposting.ai, a social media automation tool, had no time to write content. Between product updates, customer onboarding, and growth experiments, SEO always got pushed aside.
                    </Text>
                  </Box>

                  <Box>
                    <Heading as="h2" size="md" color="gray.900" mb={2}>
                      The Solution
                    </Heading>
                    <Text color="gray.700" fontSize="sm" lineHeight="1.6">
                      They plugged in SEOengine.ai and let automation take over. No planning, no hiring, no editing. The platform handled everything—keyword research, article creation, and publishing—24/7.
                    </Text>
                  </Box>

                  <Box>
                    <Heading as="h2" size="md" color="gray.900" mb={2}>
                      The Results
                    </Heading>
                    <VStack gap={2} align="flex-start">
                      {[
                        "4,110 organic clicks in 5 months",
                        "1.21M impressions generated",
                        "Average position: 15 and climbing",
                        "50–75 daily clicks by month 5",
                        "Zero manual work or added headcount"
                      ].map((result, index) => (
                        <HStack key={index} align="center">
                          <CircleCheckBig size={16} color="#023E8A" />
                          <Text fontSize="sm" color="gray.700">
                            {result}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </Box>

                  <Text fontSize="sm" color="blue.700" fontStyle="italic" fontWeight="medium">
                    While Autoposting.ai scaled their product, SEOengine scaled their SEO. Five months. Zero effort. Over 4,000 organic clicks that would've cost $2,000+ in ads or a $4,000/month writer.
                  </Text>
                </VStack>
              </VStack>
            </Box>
          </SimpleGrid>

          {/* CTA Section */}
          <Box bg="white" borderRadius="2xl" p={12} textAlign="center" shadow="lg" w="full">
            <VStack gap={6}>
              <Heading as="h2" size="2xl" color="gray.900">
                Ready to See Similar Results for Your Business?
              </Heading>
              <Text fontSize="lg" color="gray.600" maxW="2xl">
                Join thousands of companies already using SEOengine.ai to automate their content creation and drive organic growth.
              </Text>
              <Stack direction="row">
                <Link href="https://app.seoengine.ai/login" target="_blank">
                  <Button
                    size="xl"
                    bg="blue.600"
                    color="white"
                    _hover={{ bg: "blue.700" }}
                    px={12}
                    py={6}
                    fontSize="lg"
                    fontWeight="bold"
                  >
                    Start Your Content Autopilot
                  </Button>
                </Link>
              </Stack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}