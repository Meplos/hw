import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'


const provider = {
  find: async () => [
    {
      id: "1",
      jobtitle: "FullStack Dev",
      company: "Hello work",
      contractType: ["CDI"],
      salary: "42 000€",
      city: "Bordeaux",

    },
    {
      id: "2",
      jobtitle: "Nurse",
      company: "CHU - Bordeaux",
      contractType: ["Stage"],
      salary: "28 000€",
      city: "Mérignac"
    },
    {
      id: "3",
      jobtitle: "FullStack Dev",
      company: "Hello work",
      contractType: ["CDI"],
      salary: "42 000€",
      city: "Bordeaux",

    },
    {
      id: "4",
      jobtitle: "Nurse",
      company: "CHU - Bordeaux",
      contractType: ["Stage"],
      salary: "28 000€",
      city: "Mérignac"
    },
    {
      id: "5",
      jobtitle: "FullStack Dev",
      company: "Hello work",
      contractType: ["CDI"],
      salary: "42 000€",
      city: "Bordeaux",

    },
    {
      id: "6",
      jobtitle: "Nurse",
      company: "CHU - Bordeaux",
      contractType: ["Stage"],
      salary: "28 000€",
      city: "Mérignac"
    },
  ]
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App provider={provider} />
  </StrictMode>,
)
