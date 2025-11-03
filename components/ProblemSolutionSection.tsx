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
              fontSize="48px"
              lineHeight="53px"
              fontWeight="500"
              color="rgb(9, 9, 11)"
              fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
            >
              You know content{' '}
              <Text 
                as="span" 
                color="rgb(2, 62, 138)" 
                fontWeight="700"
                fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
              >
                marketing works.
              </Text>
                <Text as="span" display="block" mt={2}>
                You just don't have time to{' '}
                <Text 
                  as="span" 
                  color="rgb(2, 62, 138)" 
                  fontWeight="700"
                  fontSize="48px"
                  lineHeight="53px"
                  fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                >
                  actually do it.
                </Text>
                </Text>
            </Heading>

            <Text 
              fontSize="18px" 
              color="rgb(82, 82, 91)" 
              maxW="4xl" 
              lineHeight="27px"
              fontFamily='"Plus Jakarta Sans", "Plus Jakarta Sans Fallback", Inter, "Inter Fallback"'
              fontWeight="400"
              fontStyle="normal"
            >
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
              display="flex"
              flexDirection="column"
              alignItems="center"
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
                w="100%"
                h="400px"
                mb={4}
                objectFit="contain"
              />
              <VStack gap={3} align="flex-start">
                <Heading 
                  as="h3" 
                  fontSize="20px"
                  lineHeight="30px"
                  fontWeight="600"
                  color="rgb(24, 24, 27)"
                  fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                  fontStyle="normal"
                >
                  Reclaim 120+ Hours Every Month
                </Heading>
                 <Text 
                  color="rgb(82, 82, 91)" 
                  fontSize="18px" 
                  lineHeight="27px"
                  fontFamily='"Plus Jakarta Sans", "Plus Jakarta Sans Fallback", Inter, "Inter Fallback"'
                  fontWeight="400"
                  fontStyle="normal"
                >
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
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Image
                src="https://seoengine.ai/images/Smart.png"
                alt="Smart Automation"
                w="100%"
                h="400px"
                mb={4}
                objectFit="contain"
              />
              <VStack gap={3} align="flex-start">
                <Heading 
                  as="h3" 
                  fontSize="20px"
                  lineHeight="30px"
                  fontWeight="600"
                  color="rgb(24, 24, 27)"
                  fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                  fontStyle="normal"
                >
                  Pay $5/Article, Not $5,000/Month
                </Heading>
                <Text 
                  color="rgb(82, 82, 91)" 
                  fontSize="18px" 
                  lineHeight="27px"
                  fontFamily='"Plus Jakarta Sans", "Plus Jakarta Sans Fallback", Inter, "Inter Fallback"'
                  fontWeight="400"
                  fontStyle="normal"
                >
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
              display="flex"
              flexDirection="column"
              alignItems="center"
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
                w="100%"
                h="400px"
                mb={4}
                objectFit="contain"
              />
              <VStack gap={3} align="flex-start">
                <Heading 
                  as="h3" 
                  fontSize="20px"
                  lineHeight="30px"
                  fontWeight="600"
                  color="rgb(24, 24, 27)"
                  fontFamily="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                  fontStyle="normal"
                >
                  Your Voice, Scaled—Not Generic AI
                </Heading>
                 <Text 
                  color="rgb(82, 82, 91)" 
                  fontSize="18px" 
                  lineHeight="27px"
                  fontFamily='"Plus Jakarta Sans", "Plus Jakarta Sans Fallback", Inter, "Inter Fallback"'
                  fontWeight="400"
                  fontStyle="normal"
                >
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