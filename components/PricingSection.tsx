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
    <Box py={20} bg="white" position="relative">
      {/* Background gradient */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        bgGradient="linear(to-br, blue.50, purple.50)"
        opacity={0.6}
      />

      <Container maxW="4xl" position="relative" zIndex={1}>
        <VStack gap={12} align="center">
          {/* Header */}
          <VStack gap={4} textAlign="center">
            <Text
              fontSize="sm"
              fontWeight="semibold" 
              color="gray.600"
              letterSpacing="wide"
              textTransform="uppercase"
            >
              PRICING
            </Text>
            <Heading
              as="h2"
              size="2xl"
              lineHeight="1.2"
              fontWeight="bold"
              color="gray.900"
              textAlign="center"
            >
              Transparent, Founder-Friendly{' '}
              <Text as="span" color="blue.600">
                Pricing
              </Text>
            </Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl" textAlign="center">
              No confusing tiers. No feature gates. No annual traps. Just $5 per article.
            </Text>
          </VStack>

          {/* Pricing Card */}
          <Box 
            bg="white" 
            borderRadius="2xl" 
            p={10} 
            color="gray.900" 
            shadow="2xl" 
            maxW="lg"
            w="full"
            border="1px solid"
            borderColor="blue.200"
          >
            <VStack gap={8} align="center">
              {/* Price Display */}
              <VStack gap={2} textAlign="center">
                <HStack align="baseline" justify="center">
                  <Text fontSize="6xl" fontWeight="bold" color="blue.600">
                    $5
                  </Text>
                  <Text fontSize="xl" textDecoration="line-through" color="gray.400">
                    $10
                  </Text>
                  <Text fontSize="lg" color="gray.600" fontWeight="medium">
                    /Article
                  </Text>
                </HStack>
              </VStack>

              {/* Features List */}
              <VStack gap={4} align="flex-start" w="full">
                <HStack align="center" w="full">
                  <Circle size="5" bg="green.500">
                    <Check size={12} color="white" />
                  </Circle>
                  <Text fontSize="md" color="gray.700">
                    30 articles/month on autopilot{' '}
                    <Text as="span" color="blue.600" fontWeight="semibold">
                      ($150/month)
                    </Text>
                  </Text>
                </HStack>

                <HStack align="center" w="full">
                  <Circle size="5" bg="green.500">
                    <Check size={12} color="white" />
                  </Circle>
                  <Text fontSize="md" color="gray.700">
                    Auto keyword research
                  </Text>
                </HStack>

                <HStack align="center" w="full">
                  <Circle size="5" bg="green.500">
                    <Check size={12} color="white" />
                  </Circle>
                  <Text fontSize="md" color="gray.700">
                    Brand Kit voice matching
                  </Text>
                </HStack>

                <HStack align="center" w="full">
                  <Circle size="5" bg="green.500">
                    <Check size={12} color="white" />
                  </Circle>
                  <Text fontSize="md" color="gray.700">
                    YouTube video integration
                  </Text>
                </HStack>

                <HStack align="center" w="full">
                  <Circle size="5" bg="green.500">
                    <Check size={12} color="white" />
                  </Circle>
                  <Text fontSize="md" color="gray.700">
                    Unlimited AI rewrites
                  </Text>
                </HStack>

                <HStack align="center" w="full">
                  <Circle size="5" bg="green.500">
                    <Check size={12} color="white" />
                  </Circle>
                  <Text fontSize="md" color="gray.700">
                    Autopilot publishing
                  </Text>
                </HStack>

                <HStack align="center" w="full">
                  <Circle size="5" bg="green.500">
                    <Check size={12} color="white" />
                  </Circle>
                  <Text fontSize="md" color="gray.700">
                    Cancel anytime (no lock-in)
                  </Text>
                </HStack>
              </VStack>

              {/* CTA Button */}
              <Button
                size="lg"
                bg="blue.600"
                color="white"
                _hover={{ bg: "blue.700", transform: "translateY(-2px)" }}
                w="full"
                py={6}
                fontSize="lg"
                fontWeight="semibold"
                borderRadius="xl"
                transition="all 0.2s"
              >
                Start Your Content Autopilot →
              </Button>

              {/* Bottom Text */}
              <VStack gap={1} textAlign="center">
                <Text fontSize="sm" fontWeight="medium" color="gray.900">
                  <Text as="span" color="black">Pay </Text>
                  as you go!
                </Text>
                <Text fontSize="sm" fontWeight="medium" color="orange.600">
                  Limited period offer!
                </Text>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}