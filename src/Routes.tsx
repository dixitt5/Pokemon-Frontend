import { Navigate, createBrowserRouter } from 'react-router-dom'
import App from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Details from './components/Details'
import Layout from './pages/layout/Layout'
import Search from './components/Search'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/pokemons'/>
  },
  {
    path: '/pokemons',
    element: <Layout/>,
    children: [
      {
        path: '',
        element: <App/>
      },
      {
        path: ':id',
        element: <Details/>
      }, {
        path: 'search',
        element: <Search/>
      }
    ]
  },

  {
    path: '*',
    element: <ErrorPage/>
  }
])

export default router
