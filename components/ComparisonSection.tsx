'use client'

import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  VStack,
  Badge,
  Button,
  Link,
  List
} from '@chakra-ui/react'

export function ComparisonSection() {
  return (
    <Box py={20} bg="gray.900">
      <Container maxW="7xl">
        <VStack gap={12}>
          {/* Header */}
          <VStack gap={4} textAlign="center">
            <Badge colorScheme="blue" fontSize="sm" px={3} py={1} borderRadius="full">
              COMPARISON
            </Badge>
            <Heading
              as="h1"
              size="3xl"
              lineHeight="1.1"
              fontWeight="bold"
              color="white"
            >
              Feeling stuck with{' '}
              <Text as="span" bgGradient="linear(to-r, blue.400, purple.400)" bgClip="text">
                content?
              </Text>
            </Heading>
            <Text fontSize="xl" color="gray.300" maxW="3xl">
              If producing consistent, ranking-ready blog content feels impossible while you build your business—this shows what life looks like before and after SEOengine.
            </Text>
          </VStack>

          {/* Comparison Grid */}
          <Stack direction={{ base: "column", lg: "row" }} gap={8} w="full">
            {/* Before Column */}
            <Box bg="gray.800" borderRadius="2xl" p={8} flex={1}>
              <VStack gap={6} align="flex-start">
                <VStack gap={2} align="flex-start">
                  <Badge colorScheme="red" fontSize="sm" px={3} py={1} borderRadius="full">
                    Before
                  </Badge>
                </VStack>
                <Heading as="h2" size="xl" color="white" lineHeight="1.3">
                  This is what most founders, marketers, and micro-agencies experience every month.
                </Heading>
                <List.Root gap={4} color="gray.300">
                  <List.Item>
                    <Text as="span" color="blue.300" fontWeight="700">4–8 hours per article.</Text>
                    {' '}You spend entire Sundays drafting content while your product roadmap collects dust.
                  </List.Item>
                  <List.Item>
                    <Text as="span" color="blue.300" fontWeight="700">Inconsistent publishing.</Text>
                    {' '}A few posts here and there—enough to feel guilty, not enough to rank.
                  </List.Item>
                  <List.Item>
                    <Text as="span" color="blue.300" fontWeight="700">Broken brand voice.</Text>
                    {' '}Freelancers or cheap AI produce work that doesn't sound like you.
                  </List.Item>
                  <List.Item>
                    <Text as="span" color="blue.300" fontWeight="700">High cost for marginal results.</Text>
                    {' '}$100–$300 per article from freelancers, with unpredictable outcomes.
                  </List.Item>
                  <List.Item>
                    <Text as="span" color="blue.300" fontWeight="700">Google anxiety.</Text>
                    {' '}Every update makes you ask: did AI ruin my domain?
                  </List.Item>
                  <List.Item>
                    <Text as="span" color="blue.300" fontWeight="700">Opportunity cost.</Text>
                    {' '}Traffic that could convert into users goes to competitors who publish consistently.
                  </List.Item>
                </List.Root>
              </VStack>
            </Box>

            {/* After Column */}
            <Box bg="blue.900" borderRadius="2xl" p={8} flex={1} position="relative">
              <VStack gap={6} align="flex-start">
                <VStack gap={2} align="flex-start">
                  <Badge colorScheme="green" fontSize="sm" px={3} py={1} borderRadius="full">
                    After
                  </Badge>
                </VStack>
                <Heading as="h2" size="xl" color="white" lineHeight="1.3">
                  With SEOengine, you stop managing content and start capitalizing on it.
                </Heading>
                <List.Root gap={4} color="gray.200">
                  <List.Item>
                    <Text as="span" color="white" fontWeight="700">30 SEO-optimized articles published every month.</Text>
                    {' '}Daily, reliable publishing that builds domain authority.
                  </List.Item>
                  <List.Item>
                    <Text as="span" color="white" fontWeight="700">Reclaim 120+ hours monthly.</Text>
                    {' '}Spend time on product, sales, or life—not editing articles.
                  </List.Item>
                  <List.Item>
                    <Text as="span" color="white" fontWeight="700">$5/article.</Text>
                    {' '}Enterprise-level results at freelancer-busting prices—no subscriptions that lock you in.
                  </List.Item>
                  <List.Item>
                    <Text as="span" color="white" fontWeight="700">Brand-true content.</Text>
                    {' '}Voice-matched articles that read like you wrote them (or your best writer did).
                  </List.Item>
                  <List.Item>
                    <Text as="span" color="white" fontWeight="700">E-E-A-T aligned, low-risk publishing.</Text>
                    {' '}Quality-first approach reduces Google penalty anxiety.
                  </List.Item>
                  <List.Item>
                    <Text as="span" color="white" fontWeight="700">Traffic that compounds.</Text>
                    {' '}More content → more organic keywords → more demo requests and signups.
                  </List.Item>
                </List.Root>

                <Stack direction="row" pt={4}>
                  <Link href="https://app.seoengine.ai/login" target="_blank">
                    <Button
                      bg="white"
                      color="blue.900"
                      _hover={{ bg: "gray.100" }}
                      size="lg"
                      fontWeight="bold"
                      px={8}
                    >
                      Try it Now
                    </Button>
                  </Link>
                </Stack>
              </VStack>
            </Box>
          </Stack>
        </VStack>
      </Container>
    </Box>
  )
}