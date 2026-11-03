'use client';

import { stores } from '@/stores';
import { Box, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Routes, TabScreens } from '@/routes';
import { useEffect } from 'react';
import { ButtomHover } from './ButtomHover';
import { useRouter } from 'next/navigation';

interface MenuItem {
  id: string;
  name: TabScreens;
  icon: React.JSX.Element;
}

interface SidebarMenuProps {
  menuItems: MenuItem[];
  activeItem: number;
  onChangeMenu: (value: number) => void;
}

const StyledButton = styled(Button)(({ theme }) => ({
  justifyContent: 'flex-start',
  textTransform: 'none',
  borderRadius: '9999px',
  padding: theme.spacing(1.5, 2),
  color: 'white',
  fontWeight: 500,
  transition: 'background-color 0.3s',
}));

export const SideBarMenu: React.FC<SidebarMenuProps> = ({
  menuItems,
  activeItem,
  onChangeMenu,
}) => {
  const router = useRouter();
  const { isLoggedIn, initAuth, isLoadedCurrentUser, logout } =
    stores.useUserStore();
  const { clear } = stores.useNotificationStore();

  useEffect(() => {
    initAuth();
  }, []);

  return (
    <Box component="div" py={6} px={4}>
      <Stack spacing={2} sx={{ width: '100%' }}>
        {menuItems.map((item, index) => {
          const isActive = activeItem === index;
          const icon = item.icon;
          if (item.name === TabScreens.PROFILE) {
            if (!isLoggedIn && isLoadedCurrentUser) {
              return (
                <ButtomHover
                  id={item.id}
                  onClick={() => {
                    router.push(Routes.SIGN_IN);
                  }}
                  key={`button-item-${item.id}`}
                  text="Connexion/Inscription"
                />
              );
            } else if (isLoggedIn && isLoadedCurrentUser) {
              return (
                <StyledButton
                  key={`nav-item-${item.id}`}
                  fullWidth
                  onClick={() => onChangeMenu(index)}
                  id={item.id}
                  sx={{
                    height: 50,
                    backgroundColor: isActive ? '#fcc55ea0' : 'transparent',
                    '&:hover': {
                      backgroundColor: isActive ? '#fcc55ea0' : '#fcc55e74',
                    },
                  }}
                >
                  <Stack
                    sx={{ width: '100%' }}
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                    spacing={2}
                  >
                    {icon}
                    <h4 style={{ textTransform: 'capitalize' }}>{item.name}</h4>
                  </Stack>
                </StyledButton>
              );
            }
            return null;
          }
          return (
            <StyledButton
              key={`nav-item-${item.id}`}
              fullWidth
              onClick={() => onChangeMenu(index)}
              id={item.id}
              sx={{
                height: 50,
                backgroundColor: isActive ? '#fcc55ea0' : 'transparent',
                '&:hover': {
                  backgroundColor: isActive ? '#fcc55ea0' : '#fcc55e74',
                },
              }}
            >
              <Stack
                sx={{ width: '100%' }}
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                spacing={2}
              >
                {icon}
                <h4 style={{ textTransform: 'capitalize' }}>{item.name}</h4>
              </Stack>
            </StyledButton>
          );
        })}
        {isLoggedIn && isLoadedCurrentUser && (
          <ButtomHover
            onClick={() => {
              clear();
              logout();
              router.refresh();
            }}
            disconnexion={true}
            key={`button-item-deconnexion`}
            text="Deconnexion"
          />
        )}
      </Stack>
    </Box>
  );
};
