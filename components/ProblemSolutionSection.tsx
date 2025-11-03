'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  VStack,
  Mark,
  SimpleGrid
} from '@chakra-ui/react'

export function ProblemSolutionSection() {
  return (
    <Box py={20} bg="white">
      <Container maxW="7xl">
        <VStack gap={12} align="center" textAlign="center">
          {/* Heading */}
          <VStack gap={4}>
            <Heading
              as="h2"
              size="3xl"
              lineHeight="1.1"
              fontWeight="bold"
              color="gray.900"
            >
              You know content{' '}
              <Mark bg="yellow.200" color="blue.800" px={2} py={1}>
                marketing works.
              </Mark>
              <Text as="span" display="block" mt={2}>
                You just don't have time to{' '}
                <Text as="span" color="blue.800" fontWeight="bold">
                  actually do it.
                </Text>
              </Text>
            </Heading>

            <Text fontSize="xl" color="gray.600" maxW="4xl" lineHeight="1.6">
              Every successful founder faces the same brutal choice: Spend hours writing, pay hundreds to freelancers, use cheap AI and watch rankings tank, or publish inconsistently and let competitors win.
            </Text>
          </VStack>

          {/* Benefits Grid */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
            {/* Benefit 1 */}
            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              shadow="lg"
              textAlign="left"
              position="relative"
              transform="translateY(10px) scale(0.95)"
              transition="all 0.3s"
              _hover={{ transform: "translateY(0) scale(1)" }}
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                w="full"
                h="4px"
                bg="gradient-to-r"
                bgGradient="linear(to-r, blue.500, purple.500)"
                borderTopRadius="xl"
              />
              <Image
                src="https://seoengine.ai/images/Data.png"
                alt="Data-Driven Insights"
                w="60px"
                h="60px"
                mb={4}
              />
              <VStack gap={3} align="flex-start">
                <Heading as="h3" size="lg" color="gray.900">
                  Reclaim 120+ Hours Every Month
                </Heading>
                <Text color="gray.600" fontSize="md" lineHeight="1.6">
                  Never write another word (unless you want to). The average article takes{' '}
                  <Text as="span" color="blue.800" fontWeight="800">
                    4-6 hours
                  </Text>
                  . At 30 articles per month, that's 120-180 hours back to focus on revenue-generating activities.
                </Text>
              </VStack>
            </Box>

            {/* Benefit 2 */}
            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              shadow="lg"
              textAlign="left"
              transform="translateY(10px) scale(0.95)"
              transition="all 0.3s"
              _hover={{ transform: "translateY(0) scale(1)" }}
            >
              <Image
                src="https://seoengine.ai/images/Smart.png"
                alt="Smart Automation"
                w="60px"
                h="60px"
                mb={4}
              />
              <VStack gap={3} align="flex-start">
                <Heading as="h3" size="lg" color="gray.900">
                  Pay $5/Article, Not $5,000/Month
                </Heading>
                <Text color="gray.600" fontSize="md" lineHeight="1.6">
                  Traditional content strategies cost{' '}
                  <Text as="span" color="blue.800" fontWeight="800">
                    $3,000-8,000/month.
                  </Text>{' '}
                  Premium AI tools charge $79-279/month. SEOengine costs $150/month for 30 articles. That's{' '}
                  <Text as="span" color="blue.800" fontWeight="800">
                    $5
                  </Text>
                  {' '}per article enterprise results, freelancer pricing.
                </Text>
              </VStack>
            </Box>

            {/* Benefit 3 */}
            <Box
              bg="white"
              p={8}
              borderRadius="xl"
              shadow="lg"
              textAlign="left"
              position="relative"
              transform="translateY(2px) scale(0.95)"
              transition="all 0.3s"
              _hover={{ transform: "translateY(0) scale(1)" }}
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                w="full"
                h="4px"
                bg="gradient-to-r"
                bgGradient="linear(to-r, green.500, teal.500)"
                borderTopRadius="xl"
              />
              <Image
                src="https://seoengine.ai/images/Seamless.png"
                alt="Seamless Integration"
                w="60px"
                h="60px"
                mb={4}
              />
              <VStack gap={3} align="flex-start">
                <Heading as="h3" size="lg" color="gray.900">
                  Your Voice, Scaled—Not Generic AI
                </Heading>
                <Text color="gray.600" fontSize="md" lineHeight="1.6">
                  Our Brand Kit learns YOUR vocabulary, tone, and style. Whether you're snarky, academic, or technical, your articles sound like you wrote them, not ChatGPT.
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}