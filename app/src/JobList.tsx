import { useState } from "react"
import { Job } from "./model/Job"
import JobCard from "./JobCard"



interface JobListProps {
  items: Job[]
  onJobSelectedCallback?: (job: Job) => void,
  className?: string
}
const JobList = ({ className, items, onJobSelectedCallback }: JobListProps) => {

  const [selectedId, setSelectedId] = useState<string>()


  const onJobSelected = (job: Job) => {
    setSelectedId(job.id)
    onJobSelectedCallback?.(job)
  }

  return <div className={`job-list flex flex-col gap-2 ${className ? className : ''}`}>
    {items.length <= 0 &&
      <div className="error p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
        <span className="font-medium">Aucun job n'est disponible actuelement.</span>
      </div>
    }
    {items && items.map((job: Job) => (<JobCard job={job} key={job.id} className={`job-item cursor-pointer ${selectedId === job.id ? 'selected border-4' : ''}`} onClick={() => { onJobSelected(job) }} />
    ))}
  </div>
}


export default JobList
