import { Job } from "./model/Job"
import Parser from "html-react-parser"
interface JobDetailProps {
  job: Job,
  className?: string
}
const JobDetail = ({ job }: JobDetailProps) => {
  const openMaps = () => {
    const params = new URLSearchParams({
      api: "1",
      query: job.coordinates
    })
    window.open(`https://www.google.com/maps/search/?${params.toString()}`)
  }

  return <div data-testid="job-detail" className='flex text-white flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70'>
    <h1 className='title dark:text-white font-extrabold text-5xl m-2'>{job.title}</h1>
    <h3 className='company font-extrabold text-xl m-1'>{job.company}</h3>
    <span className='salary font-bold'>{job.salary}</span>
    <div className="border-2 border-zinc-400 mb-5 mt-2"></div>
    <span className='description p-4'>{Parser(job.description)}</span>
    <div className="location flex gap-2">
      À <span className='city'>{job.city}</span>
      <span className='postalCode'>{job.postalCode}</span>
      <a className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-1.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-pointer" onClick={openMaps}>Localiser</a>
    </div>
    <span className='publicationDate'>Publiée le : {Intl.DateTimeFormat().format(new Date(job.publicationDate))}</span>
    <p>Secteur: <span className='sector'>{job.sector}</span></p>

    <a className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer" href={"http://localhost:3000/redirect?url=" + encodeURI(job.link)}>Postuler</a>
  </div>
}

export default JobDetail
