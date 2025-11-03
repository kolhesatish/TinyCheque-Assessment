'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Badge,
  List,
  ListItem,
  Separator
} from '@chakra-ui/react'

export function ExamplesSection() {
  return (
    <Box py={20} bg="gray.50">
      <Container maxW="7xl">
        <VStack gap={12} align="center">
          {/* Header */}
          <VStack gap={4} textAlign="center">
            <Badge colorScheme="blue" fontSize="sm" px={3} py={1} borderRadius="full">
              EXAMPLES
            </Badge>
            <Heading
              as="h2"
              size="3xl"
              lineHeight="1.1"
              fontWeight="bold"
              color="gray.900"
            >
              AI-generated content that{' '}
              <Text as="span" bgGradient="linear(to-r, blue.600, purple.600)" bgClip="text">
                humans love to read
              </Text>
            </Heading>
          </VStack>

          {/* Content Grid */}
          <Stack direction={{ base: "column", lg: "row" }} gap={8} w="full" align="flex-start">
            {/* Left Column - Article List */}
            <VStack gap={4} align="stretch" flex={1}>
              {/* Article 1 */}
              <Box
                bg="white"
                p={6}
                borderRadius="lg"
                shadow="md"
                border="2px solid"
                borderColor="blue.200"
              >
                <VStack gap={3} align="flex-start">
                  <Text fontSize="lg" fontWeight="semibold" color="gray.900" lineHeight="1.4">
                    LinkedIn Agency Scaling: Intelligence Framework 97% Miss (2025 Study)
                  </Text>
                  <HStack>
                    <Badge colorScheme="blue" size="sm">
                      Blog
                    </Badge>
                  </HStack>
                </VStack>
              </Box>

              {/* Article 2 */}
              <Box
                bg="white"
                p={6}
                borderRadius="lg"
                shadow="sm"
                _hover={{ shadow: "md" }}
                transition="all 0.2s"
              >
                <VStack gap={3} align="flex-start">
                  <Text fontSize="lg" fontWeight="semibold" color="gray.900" lineHeight="1.4">
                    How to Get High Paying Jobs LinkedIn: The Ultimate 2025 Guide
                  </Text>
                  <HStack>
                    <Badge colorScheme="green" size="sm">
                      Guide
                    </Badge>
                  </HStack>
                </VStack>
              </Box>

              {/* Article 3 */}
              <Box
                bg="white"
                p={6}
                borderRadius="lg"
                shadow="sm"
                _hover={{ shadow: "md" }}
                transition="all 0.2s"
              >
                <VStack gap={3} align="flex-start">
                  <Text fontSize="lg" fontWeight="semibold" color="gray.900" lineHeight="1.4">
                    How to Make Money Fast on LinkedIn: The Platform Where Being Boring Makes You Rich
                  </Text>
                  <HStack>
                    <Badge colorScheme="purple" size="sm">
                      Round Up
                    </Badge>
                  </HStack>
                </VStack>
              </Box>
            </VStack>

            {/* Right Column - Article Preview */}
            <Box flex={2}>
              <Box
                bg="white"
                borderRadius="lg"
                shadow="lg"
                overflow="hidden"
                maxH="600px"
                overflowY="auto"
              >
                <Box p={6}>
                  <VStack gap={4} align="flex-start">
                    <Text fontSize="xl" fontWeight="bold" color="gray.900" lineHeight="1.4">
                      LinkedIn Agency Scaling: Intelligence Framework 97% Miss (2025 Study)
                    </Text>
                    
                    <Text fontSize="sm" color="gray.600">
                      <Text as="span" fontWeight="bold">By Udit Goenka | July 20, 2025 | Reading Time: 12 minutes</Text>
                    </Text>

                    <Separator />

                    <Box>
                      <Text fontSize="sm" fontWeight="bold" color="blue.800" mb={2}>
                        TL;DR:
                      </Text>
                      <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                        A 6-month analysis of 500 LinkedIn agencies reveals that 97% remain trapped in manual processes while the top 3% use AI-powered intelligence systems to scale from 5 clients to 50+ without hiring specialists.
                      </Text>
                    </Box>

                    <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                      These elite agencies charge $15,000-$25,000 monthly by positioning intelligence as their core offering, transforming the traditional service delivery model through systematic competitor analysis and industry-specific automation.
                    </Text>

                    <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                      After spending six months tracking 500 LinkedIn agencies and analyzing 25,000 LinkedIn posts, I discovered something that will fundamentally change how you think about agency scaling.
                    </Text>

                    <Text fontSize="sm" fontWeight="bold" color="blue.800">
                      Table of Contents
                    </Text>
                    
                    <List.Root gap={1} fontSize="sm" color="gray.600" pl={4}>
                      <List.Item>The Scaling Contradiction Destroying Agencies</List.Item>
                      <List.Item>The Intelligence Multiplication Model</List.Item>
                      <List.Item>Phase 1: Systematic Intelligence Foundation</List.Item>
                      <List.Item>Phase 2: Scalable Expertise Delivery</List.Item>
                      <List.Item>Phase 3: Premium Positioning Through Results</List.Item>
                      <List.Item>Four Critical Advantages of Intelligence-First Agencies</List.Item>
                    </List.Root>

                    <Box>
                      <Text fontSize="sm" fontWeight="bold" color="gray.900" mb={2}>
                        The Scaling Contradiction Destroying Agencies
                      </Text>
                      <Text fontSize="sm" color="gray.700" lineHeight="1.6">
                        Here's the brutal truth that 78% of agencies face: to serve more clients, they need to hire more people. But hiring more people reduces profit margins and complicates operations. This is what I call the scaling contradiction.
                      </Text>
                    </Box>

                    <Text fontSize="xs" color="gray.500" fontStyle="italic">
                      ... and the article continues with detailed insights and strategies
                    </Text>
                  </VStack>
                </Box>
              </Box>
            </Box>
          </Stack>
        </VStack>
      </Container>
    </Box>
  )
}