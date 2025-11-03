'use client'

import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    Stack,
    Image,
    VStack,
    HStack,
    Mark,
    Link
} from '@chakra-ui/react'
import { MoveRight } from 'lucide-react'

export function HeroSection() {
    return (
        <Box 
            py={{ base: 8, md: 12, lg: 20 }}
            px={{ base: 4, md: 6 }}
            bg="white"
            position="relative"
            backgroundImage="url('/Frame.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            minHeight={{ base: "auto", md: "640px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(
        to right,
        rgba(255, 255, 255, 0.75) 0%,
        rgba(255, 255, 255, 0.5) 15%,
        rgba(255, 255, 255, 0.5) 85%,
        rgba(255, 255, 255, 0.75) 100%
      ),
      linear-gradient(
        to top,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0.6) 40%,
        rgba(255, 255, 255, 0.4) 100%
      )`,
            pointerEvents: 'none'
            }}
        >
            <Container maxW="7xl" position="relative" zIndex={1} px={{ base: 4, md: 6 }}>
            <Stack direction={{ base: "column", lg: "row" }} gap={{ base: 6, md: 8, lg: 10 }} align="center">
                <VStack align={{ base: "center", lg: "flex-start" }} flex={1} gap={{ base: 4, md: 6 }}>
                <HStack gap={4} justify={{ base: "center", lg: "flex-start" }} w="full">
                    <Image
          src="https://seoengine.ai/seo.svg"
          alt="seo solang"
          width={{ base: 150, md: 200 }}
          objectFit="contain"
        />
                </HStack>
                 <HStack gap={4} w="full" justify={{ base: "center", lg: "flex-start" }}>
                    <Image
                    className='w-full'
                    src="https://seoengine.ai/mask.svg"
                    alt="solang line"
                    maxW={{ base: "250px", md: "300px", lg: "100px" }}
                    />
                </HStack>

                <Heading
                    as="h1"
                    fontFamily='"Plus Jakarta Sans", "Plus Jakarta Sans Fallback"'
                    fontWeight="500"
                    color="rgb(24, 24, 27)"
                    fontSize={{ base: "32px", md: "48px", lg: "60px" }}
                    lineHeight={{ base: "36px", md: "52px", lg: "66px" }}
                    fontStyle="normal"
                    textAlign={{ base: "center", lg: "left" }}
                >
                    Stop Wrestling{' '}
                    <Box as="span" display={{ base: "block", md: "inline" }}>
                        with Content. Start{' '}
                    </Box>
                    <Mark 
                    color="rgb(2, 62, 138)" 
                    py={1}
                    fontFamily='"Plus Jakarta Sans", "Plus Jakarta Sans Fallback"'
                    fontWeight="700"
                    fontSize={{ base: "32px", md: "48px", lg: "60px" }}
                    lineHeight={{ base: "36px", md: "52px", lg: "66px" }}
                    fontStyle="normal"
                    >
                    Dominating Search
                    </Mark>
                </Heading>

                {/* Subheading */}
                <Text 
                    fontFamily='"Plus Jakarta Sans", "Plus Jakarta Sans Fallback", Inter, "Inter Fallback"'
                    fontWeight="500"
                    color="rgb(82, 82, 91)"
                    fontSize={{ base: "16px", md: "18px" }}
                    lineHeight={{ base: "24px", md: "27px" }}
                    fontStyle="normal"
                    textAlign={{ base: "center", lg: "left" }}
                    px={{ base: 4, lg: 0 }}
                >
                    Get 30 SEO-optimized articles published automatically each month, with your authentic brand voice intact—for less than what you'd pay a freelancer for one post.
                </Text>

                {/* Benefits List */}
                <VStack gap={2} align={{ base: "center", lg: "flex-start" }}>
                    <Text 
                    fontFamily='"Plus Jakarta Sans", "Plus Jakarta Sans Fallback", Inter, "Inter Fallback"'
                    fontWeight="600"
                    color="rgb(2, 62, 138)"
                    fontSize={{ base: "16px", md: "18px" }}
                    lineHeight={{ base: "24px", md: "27px" }}
                    fontStyle="normal"
                    >
                    No writing.
                    </Text>
                    <Text 
                    fontFamily='"Plus Jakarta Sans", "Plus Jakarta Sans Fallback", Inter, "Inter Fallback"'
                    fontWeight="600"
                    color="rgb(2, 62, 138)"
                    fontSize={{ base: "16px", md: "18px" }}
                    lineHeight={{ base: "24px", md: "27px" }}
                    fontStyle="normal"
                    >
                    No editing.
                    </Text>
                    <Text 
                    fontFamily='"Plus Jakarta Sans", "Plus Jakarta Sans Fallback", Inter, "Inter Fallback"'
                    fontWeight="600"
                    color="rgb(2, 62, 138)"
                    fontSize={{ base: "16px", md: "18px" }}
                    lineHeight={{ base: "24px", md: "27px" }}
                    fontStyle="normal"
                    >
                    No Google penalty anxiety.
                    </Text>
                </VStack>

                {/* Trust Badge */}
                <Text 
                    fontFamily='"Plus Jakarta Sans", "Plus Jakarta Sans Fallback", Inter, "Inter Fallback"'
                    fontStyle="italic"
                    fontWeight="400"
                    color="rgb(113, 113, 122)"
                    fontSize={{ base: "14px", md: "16px" }}
                    lineHeight={{ base: "20px", md: "24px" }}
                    textAlign={{ base: "center", lg: "left" }}
                    px={{ base: 4, lg: 0 }}
                >
                    Trusted by 2,000+ founders who reclaimed 120+ hours per month
                </Text>

                {/* CTA Button */}
                <Stack direction="row" w={{ base: "full", lg: "auto" }} justify={{ base: "center", lg: "flex-start" }}>
                    <Link href="https://app.seoengine.ai/login" target="_blank" w={{ base: "full", lg: "auto" }}>
                    <Button
                        size={{ base: "md", md: "lg" }}
                        bg="blue.600"
                        color="white"
                        _hover={{ bg: "blue.700" }}
                        px={{ base: 6, md: 8 }}
                        py={{ base: 4, md: 6 }}
                        fontFamily='"Plus Jakarta Sans", "Plus Jakarta Sans Fallback", Inter, "Inter Fallback"'
                        fontStyle="normal"
                        fontWeight="500"
                        fontSize={{ base: "14px", md: "16px" }}
                        lineHeight={{ base: "20px", md: "24px" }}
                        w={{ base: "full", lg: "auto" }}
                        minW={{ base: "280px", lg: "auto" }}
                    >
                        Start Your Content Autopilot
                        <MoveRight size={20} />
                    </Button>
                    </Link>
                </Stack>
                </VStack>

                {/* Right Video */}
                <Box flex={1} w="full">
                <Box
                    position="relative"
                    w="full"
                    h={{ base: "250px", md: "300px", lg: "400px" }}
                    borderRadius="md"
                    overflow="hidden"
                    bg="black"
                >
                    <iframe
                    src="https://www.youtube.com/embed/hvYNBXZXgLE?si=lCwcYKtc6-sOniGr&autoplay=1&mute=1&loop=1&playlist=hvYNBXZXgLE"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{
                        borderRadius: '6px',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                    />
                </Box>
                </Box>
            </Stack>
            </Container>
        </Box>
    )
}