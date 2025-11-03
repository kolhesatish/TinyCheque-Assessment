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
  Mark,
  Circle
} from '@chakra-ui/react'

export function HowItWorksSection() {
  return (
    <Box py={20} bg="white" position="relative">
      {/* Background Elements */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="200px"
        bg="gradient-to-b"
        bgGradient="linear(to-b, gray.50, transparent)"
        zIndex={0}
      />
      
      <Container maxW="6xl" position="relative" zIndex={1}>
        <VStack gap={16} align="center">
          {/* Header */}
          <VStack gap={4} textAlign="left">
            <Heading
              as="h2"
              size="3xl"
              lineHeight="30px"
              fontWeight="500"
              color="rgb(24, 24, 27)"
              fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
              fontStyle="normal"
              fontSize="48px"
            >
              The Brand-First{' '}
              <Text
                as="span"
                fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                fontStyle="normal"
                fontWeight="700"
                color="rgb(2, 62, 138)"
                fontSize="48px"
                lineHeight="30px"
              >
                Autopilot System
              </Text>
            </Heading>
            <Text 
              fontSize="18px"
              fontFamily='"Plus Jakarta Sans", "Plus Jakarta Sans Fallback", Inter, "Inter Fallback"'
              fontStyle="normal"
              fontWeight="400"
              color="rgb(82, 82, 91)"
              lineHeight="27px"
              maxW="2xl"
            >
              True autopilot. Real quality. Your brand voice. Every single day.
            </Text>
          </VStack>

          {/* Steps */}
          <Stack direction={{ base: "column", lg: "row" }} gap={8} w="full" align="flex-start">
            {/* Step 1 */}
            <VStack align="center" flex={1} border="1px solid" borderColor="#e0e0e1" borderRadius="lg" paddingBottom={6}>
              
                <Image
                  src="https://seoengine.ai/images/Sign1.png"
                  alt="Step 1"
                  w="100%"
                  h="300px"
                />
              <VStack gap={3} p={4} align="center" textAlign="left">
                <Text fontSize="xl" fontWeight="bold" color="gray.900">
                  Teach Us Your Voice (5 minutes)
                </Text>
                <Text fontSize="md" color="gray.600" lineHeight="1.6">
                  Upload 2-3 examples of your existing content or describe your brand voice. Our Brand Kit learns your tone, style, and vocabulary—like training a writer who never takes a vacation.
                </Text>
              </VStack>
            </VStack>

            {/* Step 2 */}
            <VStack align="center" flex={1} border="1px solid" borderColor="#e0e0e1" borderRadius="lg">
                <Image
                  src="https://seoengine.ai/images/scan1.png"
                  alt="Step 2"
                  w="100%"
                  h="300px"
                />
              <VStack gap={3} p={4} align="left" textAlign="left">
                <Text fontSize="xl" fontWeight="bold" color="gray.900">
                  Autopilot Activated
                </Text>
                <Text fontSize="md" color="gray.600" lineHeight="1.6">
                  Every day, SEOengine researches keywords, generates 1,500-2,500 word articles in YOUR voice, integrates YouTube videos, and publishes to your site. 30 articles per month. Zero effort from you.
                </Text>
              </VStack>
            </VStack>

            {/* Step 3 */}
            <VStack align="center" flex={1} border="1px solid" borderColor="#e0e0e1" borderRadius="lg">
                <Image
                  src="https://seoengine.ai/images/watch.png"
                  alt="Step 3"
                  w="100%"
                  h="300px"
                />
              <VStack gap={3} p={4} align="center" textAlign="left">
                <Text fontSize="xl" fontWeight="bold" color="gray.900">
                  Watch Your Rankings Climb
                </Text>
                <Text fontSize="md" color="gray.600" lineHeight="1.6">
                  While you're building features or closing deals, your content library grows. Google sees consistent publishing. Domain authority rises. Organic traffic compounds month over month while you sleep.
                </Text>
              </VStack>
            </VStack>
          </Stack>
        </VStack>
      </Container>
    </Box>
  )
}
