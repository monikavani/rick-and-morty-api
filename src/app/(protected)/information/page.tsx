'use client';

import { useState } from 'react';
import { Box, Text, Heading, SimpleGrid, Spinner, useDisclosure } from '@chakra-ui/react';
import { useImages } from '@/hooks/useImages';
import { useSearchParams, useRouter } from 'next/navigation';
import ImageCard  from '@/components/ImageCard';
import type { Image as ImageType } from '@/types';
import Pagination from '@/components/Pagination';
import ImageModal from '@/components/ImageModal';

export default function InformationPage() {
    const searchParams = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1', 10);
    const {loading, error, data} = useImages(page);
    const totalPages = data?.characters?.info.pages || 1;
    const {onClose, onOpen, isOpen} = useDisclosure();
    const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

    const handleImageClick = (imageInfo: ImageType) => {
        setSelectedImage(imageInfo);
        onOpen();
    }

    if(loading) {
        return (
            <Box textAlign="center" mt={8}>
                <Spinner size="xl" />
            </Box>
        )
    }

    if(error) {
        return (
            <Box textAlign="center" mt={8}>
                <Text color="red.500">Error loading characters: {error.message}</Text>
            </Box>
        )
    }
    
    return (
        <Box bg="#1b1c1f" p="4" mb="6">
            <Pagination currentPage={page} totalPages={totalPages}/>

            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={4} pb="4">
                {data?.characters?.results.map((image) => (
                    <ImageCard key={image.id} onClick={() => handleImageClick(image)} imageInfo={image}></ImageCard>
                ))}
            </SimpleGrid>

            <Pagination currentPage={page} totalPages={totalPages}/>
    
            {selectedImage && (
                <ImageModal isOpen={isOpen} onClose={onClose} imageInfo={selectedImage}/>
            )}
        </Box>
    )

}