'use client';

import { useEffect } from 'react';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import UserFormModal from '@/components/UserFormModal';
import { useDisclosure } from '@chakra-ui/react';

export default function Home() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        // Redirect if user exists
        router.push('/information');
      } else {
        // Only show modal if no user data
        onOpen();
      }
    }
  }, [user, isLoading, router, onOpen]);

  if (isLoading) return null;

  return (
    <UserFormModal isOpen={isOpen} onClose={onClose} isEditMode={false} forceSubmission={true}/>
  );
}