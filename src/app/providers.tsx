'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apolloClient';
import { UserProvider } from '@/context/UserContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <UserProvider>
          {children}
        </UserProvider>
      </ApolloProvider>
    </ChakraProvider>
  )
}