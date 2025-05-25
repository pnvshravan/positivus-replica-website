import './index.css'
import { Suspense } from 'react'
import { routes } from './components/routes/routes';
import { useRoutes } from 'react-router-dom';
const App=()=> {

  const routing = useRoutes(routes);
  return (
    <>
     <Suspense fallback={
        <h1>
          Loading...
        </h1>
      }>{routing}
     </Suspense>
    </>
  )
}

export default App
