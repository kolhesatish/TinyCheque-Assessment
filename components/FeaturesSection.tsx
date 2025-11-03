'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  VStack,
  Badge,
  Button,
  Link,
  SimpleGrid
} from '@chakra-ui/react'

export function FeaturesSection() {
  return (
    <Box py={20} bg="white">
      <Container maxW="7xl">
        <VStack gap={16}>
          {/* Header */}
          <VStack gap={4} textAlign="center">
            <Badge colorScheme="blue" fontSize="sm" px={3} py={1} borderRadius="full">
              FEATURES
            </Badge>
            <Heading
              as="h1"
              size="3xl"
              lineHeight="1.1"
              fontWeight="bold"
              color="gray.900"
            >
              Powerful Features That{' '}
              <Text as="span" bgGradient="linear(to-r, blue.600, purple.600)" bgClip="text">
                Work For You
              </Text>
            </Heading>
            <Text fontSize="xl" color="gray.600" maxW="2xl">
              Everything you need for content abundance—automated, optimized, and on-brand.
            </Text>
          </VStack>

          {/* Feature 1 */}
          <Container maxW="6xl">
            <Stack direction={{ base: "column", lg: "row" }} gap={12} align="center">
              <VStack gap={6} align="flex-start" flex={1}>
                <Heading as="h2" size="2xl" color="gray.900">
                  Auto Keyword Research
                </Heading>
                <Text fontSize="lg" color="gray.600" lineHeight="1.6">
                  Identifies high-value, low-competition keywords in your niche automatically. You're targeting keywords that actually move the needle not guessing or spending 2 hours in Ahrefs. The system analyzes search volume, competition, and relevance to YOUR business.
                </Text>
                <Box>
                  <Link href="https://app.seoengine.ai/login" target="_blank">
                    <Button
                      bg="blue.600"
                      color="white"
                      _hover={{ bg: "blue.700" }}
                      size="lg"
                    >
                      Start for Free →
                    </Button>
                  </Link>
                </Box>
              </VStack>
              <Box flex={1}>
                <Image
                  src="https://seoengine.ai/images/Automate1.png"
                  alt="Automatically created Content Plan"
                  w="full"
                  h="auto"
                  borderRadius="lg"
                />
              </Box>
            </Stack>
          </Container>

          {/* Feature 2 */}
          <Container maxW="6xl">
            <Stack direction={{ base: "column", lg: "row-reverse" }} gap={12} align="center">
              <VStack gap={6} align="flex-start" flex={1}>
                <Heading as="h2" size="2xl" color="gray.900">
                  Autopilot Publishing
                </Heading>
                <Text fontSize="lg" color="gray.600" lineHeight="1.6">
                  Publishes articles directly to your WordPress (or other CMS) on your schedule. No copy-pasting. No manual uploads. No forgetting to publish. Articles go live exactly when you want them even if you're offline for a week.
                </Text>
                <Box>
                  <Link href="/#examples">
                    <Button
                      variant="outline"
                      borderColor="gray.300"
                      color="gray.700"
                      _hover={{ bg: "gray.50" }}
                      size="lg"
                    >
                      Read Examples
                    </Button>
                  </Link>
                </Box>
              </VStack>
              <Box flex={1}>
                <Image
                  src="https://seoengine.ai/images/create.png"
                  alt="SEO content example"
                  w="full"
                  h="auto"
                  borderRadius="lg"
                />
              </Box>
            </Stack>
          </Container>

          {/* Feature 3 */}
          <Container maxW="6xl">
            <Stack direction={{ base: "column", lg: "row" }} gap={12} align="center">
              <VStack gap={6} align="flex-start" flex={1}>
                <Heading as="h2" size="2xl" color="gray.900">
                  Brand Kit Voice Matching
                </Heading>
                <Text fontSize="lg" color="gray.600" lineHeight="1.6">
                  Learns your writing style, vocabulary, tone, and POV from your examples. Articles sound like YOUR brand, not generic AI. This is the difference between content that builds authority and content that gets ignored. Google rewards authentic brand voice (E-E-A-T).
                </Text>
                <Box>
                  <Link href="https://app.seoengine.ai/login" target="_blank">
                    <Button
                      bg="blue.600"
                      color="white"
                      _hover={{ bg: "blue.700" }}
                      size="lg"
                    >
                      Start for Free →
                    </Button>
                  </Link>
                </Box>
              </VStack>
              <Box flex={1}>
                <Image
                  src="https://seoengine.ai/images/article1.png"
                  alt="Mimic your article style"
                  w="full"
                  h="auto"
                  borderRadius="lg"
                />
              </Box>
            </Stack>
          </Container>
        </VStack>
      </Container>
    </Box>
  )
}