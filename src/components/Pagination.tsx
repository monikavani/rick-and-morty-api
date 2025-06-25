'use client';

import { HStack, Button, Text } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';

type PaginationProps = {
  currentPage: number,
  totalPages: number
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  }

  if (totalPages <= 1) return null;

  return (
    <HStack spacing={8} justify="center" mb={4} p={2}>
      <Button size='xs'
        bg='#6c6ae5'
        _hover={{ bg: '#6c6ae5' }}
        color="#fff"
        onClick={() => changePage(currentPage - 1)}
        isDisabled={currentPage === 1}
      >
        Previous
      </Button>

      <Text fontSize="sm" color="#fff">
        Page {currentPage} of {totalPages}
      </Text>

      <Button size='xs'
        bg='#6c6ae5'
        _hover={{ bg: '#6c6ae5' }}
        color="#fff"
        onClick={() => changePage(currentPage + 1)}
        isDisabled={currentPage === totalPages}
      >
        Next
      </Button>
    </HStack>
  )
}