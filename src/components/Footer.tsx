import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as="footer" py={4} textAlign="center" bg="#06080d" position="fixed" bottom="0" width="100%">
      <Text fontSize="sm" color="gray.500">
        Leonardo.ai - Test Version 1.0.0
      </Text>
    </Box>
  )
}