import { Card, CardFooter, Image, Text } from '@chakra-ui/react';
import { imageCardProps } from '@/types';  

export default function ImageCard({imageInfo, onClick} : imageCardProps) {
    return (
        <Card bg="#06080d" cursor='pointer' onClick={onClick} maxW='sm' border="1px solid #333030">
            <Image 
                src={imageInfo.image} 
                alt={imageInfo.name}
                borderTopRadius="md"
                width="100%"
                height="200px"
                objectFit="cover"
            />
           
            <CardFooter p="4">
                <Text color="#fff" fontSize='sm'>{imageInfo.name}</Text>
            </CardFooter>
        </Card>
    )
}