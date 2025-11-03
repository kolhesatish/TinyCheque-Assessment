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
          <VStack gap={4} textAlign="center">
            <Heading
              as="h2"
              size="3xl"
              lineHeight="1.1"
              fontWeight="bold"
              color="gray.900"
            >
              The Brand-First{' '}
              <Mark bg="yellow.200" color="blue.800" px={2} py={1}>
                Autopilot System
              </Mark>
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              True autopilot. Real quality. Your brand voice. Every single day.
            </Text>
          </VStack>

          {/* Steps */}
          <VStack gap={12} w="full">
            {/* Step 1 */}
            <HStack gap={8} align="flex-start" w="full">
              <VStack gap={4} align="center" minW="120px">
                <Circle size="80px" bg="blue.100" border="3px solid" borderColor="blue.500">
                  <Image
                    src="https://seoengine.ai/images/Sign1.png"
                    alt="Step 1"
                    w="40px"
                    h="40px"
                  />
                </Circle>
              </VStack>
              <VStack gap={3} align="flex-start" flex={1}>
                <Text fontSize="xl" fontWeight="bold" color="gray.900">
                  Teach Us Your Voice (5 minutes)
                </Text>
                <Text fontSize="md" color="gray.600" lineHeight="1.6">
                  Upload 2-3 examples of your existing content or describe your brand voice. Our Brand Kit learns your tone, style, and vocabulary—like training a writer who never takes a vacation.
                </Text>
              </VStack>
            </HStack>

            {/* Step 2 */}
            <HStack gap={8} align="flex-start" w="full">
              <VStack gap={4} align="center" minW="120px">
                <Circle size="80px" bg="green.100" border="3px solid" borderColor="green.500">
                  <Image
                    src="https://seoengine.ai/images/scan1.png"
                    alt="Step 2"
                    w="40px"
                    h="40px"
                  />
                </Circle>
              </VStack>
              <VStack gap={3} align="flex-start" flex={1}>
                <Text fontSize="xl" fontWeight="bold" color="gray.900">
                  Autopilot Activated
                </Text>
                <Text fontSize="md" color="gray.600" lineHeight="1.6">
                  Every day, SEOengine researches keywords, generates 1,500-2,500 word articles in YOUR voice, integrates YouTube videos, and publishes to your site. 30 articles per month. Zero effort from you.
                </Text>
              </VStack>
            </HStack>

            {/* Step 3 */}
            <HStack gap={8} align="flex-start" w="full">
              <VStack gap={4} align="center" minW="120px">
                <Circle size="80px" bg="purple.100" border="3px solid" borderColor="purple.500">
                  <Image
                    src="https://seoengine.ai/images/watch.png"
                    alt="Step 3"
                    w="40px"
                    h="40px"
                  />
                </Circle>
              </VStack>
              <VStack gap={3} align="flex-start" flex={1}>
                <Text fontSize="xl" fontWeight="bold" color="gray.900">
                  Watch Your Rankings Climb
                </Text>
                <Text fontSize="md" color="gray.600" lineHeight="1.6">
                  While you're building features or closing deals, your content library grows. Google sees consistent publishing. Domain authority rises. Organic traffic compounds month over month while you sleep.
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}