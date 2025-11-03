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
  Button,
  List,
  Circle
} from '@chakra-ui/react'
import { Check } from 'lucide-react'

export function PricingSection() {
  return (
    <Box py={20} bg="blue.900" color="white" position="relative">
      {/* Background decorations */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        bgGradient="radial(circle at 20% 80%, blue.600 0%, transparent 50%)"
        opacity={0.3}
      />
      <Box
        position="absolute"
        top="0"
        right="0"
        w="full"
        h="full"
        bgGradient="radial(circle at 80% 20%, purple.600 0%, transparent 50%)"
        opacity={0.3}
      />

      <Container maxW="6xl" position="relative" zIndex={1}>
        <VStack gap={16}>
          {/* Header */}
          <VStack gap={4} textAlign="center">
            <Badge colorScheme="blue" fontSize="sm" px={3} py={1} borderRadius="full">
              PRICING
            </Badge>
            <Heading
              as="h2"
              size="3xl"
              lineHeight="1.1"
              fontWeight="bold"
              color="white"
            >
              Transparent, Founder-Friendly{' '}
              <Text as="span" color="yellow.300">
                Pricing
              </Text>
            </Heading>
            <Text fontSize="xl" color="gray.300" maxW="2xl">
              No confusing tiers. No feature gates. No annual traps. Just $5 per article.
            </Text>
          </VStack>

          {/* Pricing Card */}
          <Stack direction={{ base: "column", lg: "row" }} gap={8} w="full" align="stretch">
            {/* Price Card */}
            <Box bg="white" borderRadius="2xl" p={8} color="gray.900" shadow="2xl" flex={1}>
              <VStack gap={6}>
                <VStack gap={2}>
                  <HStack align="baseline">
                    <Text fontSize="5xl" fontWeight="bold" color="blue.600">
                      $5
                    </Text>
                    <Text fontSize="2xl" textDecoration="line-through" color="gray.400">
                      $10
                    </Text>
                    <Text fontSize="lg" color="gray.600">
                      /Article
                    </Text>
                  </HStack>
                  <Button
                    size="lg"
                    bg="blue.600"
                    color="white"
                    _hover={{ bg: "blue.700" }}
                    w="full"
                    py={6}
                    fontSize="lg"
                    fontWeight="semibold"
                  >
                    Start Your Content Autopilot →
                  </Button>
                </VStack>

                <VStack gap={2} align="flex-start" w="full">
                  <Text fontSize="lg" fontWeight="bold" color="gray.900">
                    <Text as="span" color="black">Pay </Text>
                    as you go!
                  </Text>
                  <Text fontSize="lg" fontWeight="bold" color="gray.900">
                    <Text as="span" color="black">Limited period offer! </Text>
                  </Text>
                </VStack>
              </VStack>
            </Box>

            {/* Features List */}
            <Box bg="rgba(255,255,255,0.1)" borderRadius="2xl" p={8} flex={1} backdropFilter="blur(10px)">
              <VStack gap={6} align="flex-start">
                <VStack gap={4} align="flex-start">
                  <HStack align="center">
                    <Circle size="5" bg="green.500">
                      <Check size={12} color="white" />
                    </Circle>
                    <Text fontSize="lg" color="white">
                      30 articles/month on autopilot{' '}
                      <Text as="span" color="blue.200" fontWeight="semibold">
                        ($150/month)
                      </Text>
                    </Text>
                  </HStack>

                  <HStack align="center">
                    <Circle size="5" bg="green.500">
                      <Check size={12} color="white" />
                    </Circle>
                    <Text fontSize="lg" color="white">
                      Auto keyword research
                    </Text>
                  </HStack>

                  <HStack align="center">
                    <Circle size="5" bg="green.500">
                      <Check size={12} color="white" />
                    </Circle>
                    <Text fontSize="lg" color="white">
                      Brand Kit voice matching
                    </Text>
                  </HStack>

                  <HStack align="center">
                    <Circle size="5" bg="green.500">
                      <Check size={12} color="white" />
                    </Circle>
                    <Text fontSize="lg" color="white">
                      YouTube video integration
                    </Text>
                  </HStack>

                  <HStack align="center">
                    <Circle size="5" bg="green.500">
                      <Check size={12} color="white" />
                    </Circle>
                    <Text fontSize="lg" color="white">
                      Unlimited AI rewrites
                    </Text>
                  </HStack>

                  <HStack align="center">
                    <Circle size="5" bg="green.500">
                      <Check size={12} color="white" />
                    </Circle>
                    <Text fontSize="lg" color="white">
                      Autopilot publishing
                    </Text>
                  </HStack>

                  <HStack align="center">
                    <Circle size="5" bg="green.500">
                      <Check size={12} color="white" />
                    </Circle>
                    <Text fontSize="lg" color="white">
                      Cancel anytime (no lock-in)
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </Box>
          </Stack>
        </VStack>
      </Container>
    </Box>
  )
}