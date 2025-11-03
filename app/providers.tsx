'use client'

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        body: { value: 'var(--font-plus-jakarta-sans), system-ui, sans-serif' },
        heading: { value: 'var(--font-plus-jakarta-sans), system-ui, sans-serif' },
      },
    },
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>
}