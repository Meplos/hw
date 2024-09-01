import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { JobProviderImpl } from './job-list/JobProvider.ts'
import './index.css'


const provider = new JobProviderImpl()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App provider={provider} />
  </StrictMode>,
)
