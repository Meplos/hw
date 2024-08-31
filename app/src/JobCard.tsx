import { Job } from "./model/Job"
import Chip from "./Chip"

interface JobCardProps {
  job: Job,
  className?: string,
  onClick: () => void
}



const JobCard = ({ job, className, onClick }: JobCardProps) => {
  return <div key={job.id} className={`flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 ${className}`} onClick={onClick}>
    <h3 className="title text-lg font-bold text-gray-800 dark:text-white">
      {job.jobtitle}
    </h3>
    <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
      <span className="company">{job.company}</span> - <span className="city">{job.city}</span>
    </p>
    <div className="contract-types flex gap-2">
      {job.contractType && job.contractType.map((type, index) => (
        <Chip key={index} value={type} color="bg-blue-500" />
      ))
      }
    </div>
    <p className="mt-2 text-gray-500 dark:text-neutral-400">
      {job.salary}
    </p>
  </div>
}


export default JobCard
