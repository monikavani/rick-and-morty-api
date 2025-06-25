import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Image,
    Text,
    Stack,
    Box,
    List,
    ListItem,
  } from '@chakra-ui/react';
  import  { ImageModalProps } from '@/types';
  
  export default function ImageModal({ isOpen, onClose, imageInfo }: ImageModalProps) {
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader px="4" py="2">{imageInfo.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody p="4">
            <Stack p="0" direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Box flex={1}>
                <Image
                  src={imageInfo.image}
                  alt={imageInfo.name}
                  borderRadius="md"
                  width="100%"
                  maxHeight="180px"
                  objectFit="cover"
                />
              </Box>
              <Box flex={1}>
                <List spacing={2}>
                  <ListItem>
                    <Text>Status: <b>{imageInfo.status}</b></Text>
                  </ListItem>
                  <ListItem>
                    <Text>Species: <b>{imageInfo.species}</b></Text>
                  </ListItem>
                  <ListItem>
                    <Text>Gender: <b>{imageInfo.gender}</b></Text>
                  </ListItem>
                  <ListItem>
                    <Text>Created: <b>{new Date(imageInfo.created).toDateString()}</b></Text>
                  </ListItem>
                </List>
              </Box>
            </Stack>
          </ModalBody>
          {/* <ModalFooter px="4" pb="2" pt="0">
            <Text fontSize="sm" color="gray.500">
              ID: {imageInfo.id}
            </Text>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    )
  }