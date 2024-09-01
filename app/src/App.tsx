import { useEffect, useState } from 'react'
import './App.css'
import JobList from './job-list/JobList'
import { Job } from './model/Job'
import { JobProvider } from './job-list/JobProvider'


interface AppProps {
  provider: JobProvider
}

function App({ provider }: AppProps) {
  const [jobs, setJobs] = useState<Job[]>([])
  const [active, setActive] = useState<Job>()

  useEffect(() => {
    provider.find().then(incomming => {
      setJobs(incomming)
      setActive(incomming[0])
    })
  }, [])

  return (
    <div className='flex gap-4 h-screen overflow-hidden'>
      <JobList items={jobs} className='p-2 overflow-auto' />
      {active && (
        <div data-testid="job-detail" className='border-red-500 border-2 m-2 w-9/12'>
          <h1 className='title'>{active.title}</h1>
          <span className='salary'>{active.salary}</span>
          <span className='description'>{active.description}</span>
          <span className='city'>{active.city}</span>
          <span className='publicationDate'>{active.publicationDate}</span>
          <span className='postalCode'>{active.postalCode}</span>
          <span className='sector'>{active.sector}</span>
          <span className='company'>{active.company}</span>
        </div>
      )}
    </div>
  )
}

export default App
