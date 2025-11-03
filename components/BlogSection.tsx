import { Box, Container, Flex, Heading, Text, Button, Grid, Badge, Link } from '@chakra-ui/react'
import { ExternalLink, Calendar, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    title: "5 Quick SEO Tips That Work in 2024",
    excerpt: "Simple and effective SEO strategies you can implement today to boost your website rankings.",
    date: "Nov 3, 2025",
    category: "SEO Tips",
    slug: "quick-seo-tips"
  },
  {
    title: "How to Write Content That Converts",
    excerpt: "Learn the secrets of writing content that not only attracts readers but also converts them into customers.",
    date: "Nov 2, 2025",
    category: "Content Marketing",
    slug: "content-that-converts"
  },
  {
    title: "The Complete Beginner Guide to SEO",
    excerpt: "Everything you need to know to start optimizing your website for search engines and drive more organic traffic.",
    date: "Nov 1, 2025",
    category: "SEO Guide",
    slug: "seo-beginner-guide"
  }
]

export function BlogSection() {
  return (
    <Box bg="gray.50" py={20}>
      <Container maxW="container.xl">
        <Box textAlign="center" mb={16}>
          <Badge colorScheme="blue" mb={4} px={3} py={1} borderRadius="full">
            Latest Insights
          </Badge>
          <Heading size="2xl" mb={6} color="gray.800">
            Stay Ahead with Our Blog
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
            Get the latest insights on SEO, content marketing, and digital growth strategies that actually work.
          </Text>
        </Box>

        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8} mb={12}>
          {blogPosts.map((post, index) => (
            <Box key={index} bg="white" shadow="md" borderRadius="xl" _hover={{ shadow: "lg", transform: "translateY(-4px)" }} transition="all 0.3s">
              <Box p={6}>
                <Flex direction="column" h="100%">
                  <Badge colorScheme="blue" alignSelf="flex-start" mb={3} size="sm">
                    {post.category}
                  </Badge>
                  <Heading size="md" mb={3} color="gray.800" lineHeight="1.4">
                    {post.title}
                  </Heading>
                  <Text color="gray.600" mb={4} flex="1">
                    {post.excerpt}
                  </Text>
                  <Flex justify="space-between" align="center" pt={4} borderTop="1px" borderColor="gray.100">
                    <Flex align="center" color="gray.500" fontSize="sm">
                      <Calendar size={14} style={{ marginRight: '6px' }} />
                      {post.date}
                    </Flex>
                    <Link href={`http://localhost:3004/blog/${post.slug}`} target="_blank" textDecoration="none">
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        colorScheme="blue"
                      >
                        <Flex align="center" gap={2}>
                          Read More
                          <ArrowRight size={14} />
                        </Flex>
                      </Button>
                    </Link>
                  </Flex>
                </Flex>
              </Box>
            </Box>
          ))}
        </Grid>

        <Flex justify="center">
          <Link href="http://localhost:3002/blog" target="_blank" textDecoration="none">
            <Button 
              size="lg" 
              colorScheme="blue"
            >
              <Flex align="center" gap={2}>
                View All Blog Posts
                <ExternalLink size={18} />
              </Flex>
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}