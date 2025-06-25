'use client';

import { Avatar, Box, Button, Menu, MenuButton, MenuItem, MenuList, Text, Image } from '@chakra-ui/react';
import { useUser } from '@/context/UserContext';
import UserFormModal from './UserFormModal';
import { useState } from 'react';

export default function Navbar() {
  const { user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!user) return null;

  return (
    <Box display="flex" justifyContent="space-between" bg="#9a3eaa" py={2} px={4} position="sticky" top={0} zIndex={10}>
      <Image 
        src="/images/logo.svg" 
        alt="Rick and Morty Logo"
        width="120px"
        objectFit="contain"
        mr={4}
      />
  
      <Box>
        <Menu>
          <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
          >
            <Avatar bg="#6c6ae5" color="#fff" name={user.name} size="sm" />
          </MenuButton>
          <MenuList p="2">
            <MenuItem>
              <Text fontSize="sm" color="gray.500">
                <b>Hi, {user.name}</b>
              </Text>
            </MenuItem>
            <MenuItem onClick={() => setIsModalOpen(true)}>
              <Text fontSize="sm" color="gray.500">
                Edit Profile
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <UserFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isEditMode={true}
      />
    </Box>
  )
}