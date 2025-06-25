'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, FormControl, 
  FormLabel, Input, VStack, useToast } from '@chakra-ui/react';
import { useUser } from '@/context/UserContext';

type UserFormModalProp = {
  isOpen: boolean
  onClose: () => void
  isEditMode?: boolean
  forceSubmission?: boolean
}

export default function UserFormModal({isOpen, onClose, isEditMode = false, forceSubmission = false}: UserFormModalProp) {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: ''
  });
  const toast = useToast();

  useEffect(() => {
    if (isOpen) { 
      if (isEditMode && user) {
        setFormData({
          name: user.name || '',
          jobTitle: user.jobTitle || ''
        });
      } else {
        setFormData({ name: '', jobTitle: '' });
      }
    }
  }, [isOpen, isEditMode, user]) // Added isOpen to dependencies

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser(formData);
    toast({
      title: isEditMode ? 'Profile updated' : 'Welcome!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    onClose();

    // redirect logic
    if (!isEditMode) {
        router.push('/information');
        router.refresh(); // client state updates
      }
  }

  return (
    <Modal isOpen={isOpen} onClose={forceSubmission ? () => {} : onClose} closeOnOverlayClick={!forceSubmission}  closeOnEsc={!forceSubmission}>
      <ModalOverlay />
      <ModalContent>

        <ModalHeader>
          {isEditMode ? 'Edit Profile' : 'Welcome!'}
        </ModalHeader>

         {!forceSubmission && <ModalCloseButton />}

        <ModalBody pb={6}>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Job Title</FormLabel>
                <Input
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                />
              </FormControl>
              <Button type="submit"  bg='#6c6ae5' color="#fff"  _hover={{ bg: '#6c6ae5' }} width="full">
                {isEditMode ? 'Update' : 'Continue'}
              </Button>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}