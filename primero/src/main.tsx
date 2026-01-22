import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'

import List from './components/List.tsx'
import HolaReact from './components/HolaReact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HolaReact />
    <List />
  </StrictMode>,
)
