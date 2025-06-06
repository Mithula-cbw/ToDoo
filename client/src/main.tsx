import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { ThemeProvider } from './contexts/themeProvider'
import { DateProvider } from './contexts/dateProvider';
import { TaskProvider } from "@/contexts/taskProvider"; 
import { Toaster } from "@/components/ui/toaster"
import { UserProvider } from '@/contexts/userProvider';
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <DateProvider>
          <UserProvider>
            <TaskProvider>
              <AppRoutes />
              <Toaster />
            </TaskProvider> 
          </UserProvider>
        </DateProvider>             
      </ThemeProvider>      
    </BrowserRouter>
  </StrictMode>,
)
