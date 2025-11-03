import { Box, Container, Flex, Heading, Text, Button, Grid, Badge, Link } from '@chakra-ui/react'
import { ExternalLink, Calendar, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    title: "Building Responsive Websites in 2025",
    excerpt: "Responsive web design has evolved significantly. Learn about modern approaches to creating truly responsive websites that work on any device.",
    date: "November 3, 2025",
    author: "Alex Johnson",
    category: "Web Development",
    slug: "building-responsive-websites"
  },
  {
    title: "The Future of Web Development",
    excerpt: "Web development is evolving rapidly, with new technologies and approaches emerging constantly. Explore the trends shaping the future of web development.",
    date: "November 2, 2025",
    author: "Jane Smith",
    category: "Technology",
    slug: "future-of-web-development"
  },
  {
    title: "Getting Started with Astro",
    excerpt: "Astro is a modern web framework that helps you build faster websites with less client-side JavaScript. Learn why Astro is gaining popularity among developers.",
    date: "November 1, 2025",
    author: "John Doe",
    category: "Frameworks",
    slug: "getting-started-with-astro"
  }
]

export function BlogSection() {
  return (
    <Box bg="gray.50" py={20}>
      <Container maxW="container.xl">
        <Box textAlign="center" mb={16}>
          <Badge colorScheme="blue" mb={4} px={3} py={1} borderRadius="full">
            Latest Blog Posts
          </Badge>
          <Heading size="2xl" mb={6} color="gray.800">
            Stay Ahead with Our Blog
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
            Get the latest insights on web development, technology trends, and modern frameworks that actually work.
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
                  <Text fontSize="sm" color="gray.500" mb={4}>
                    By {post.author} • {post.date}
                  </Text>
                  <Flex justify="space-between" align="center" pt={4} borderTop="1px" borderColor="gray.100">
                    <Flex align="center" color="gray.500" fontSize="sm">
                      <Calendar size={14} style={{ marginRight: '6px' }} />
                      {post.date}
                    </Flex>
                    <Link href={`https://astro-blogs-tau.vercel.app/blog/${post.slug}`} target="_blank" textDecoration="none">
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
          <Link href="https://astro-blogs-tau.vercel.app/blog" target="_blank" textDecoration="none">
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