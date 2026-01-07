import { createBrowserRouter } from 'react-router-dom'
import AuthorizedLayout from '../../components/layout/authorizedLayout'
import LoginPage from '../../components/login/loginPage'
import DashboardPage from '../../components/dashboard/dashboardPage'
import NotFoundPage from '../../components/layout/notFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthorizedLayout />,
  },
  {
    path: 'dashboard',
    element: <DashboardPage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
