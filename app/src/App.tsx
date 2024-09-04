import { useEffect, useState } from 'react';
import './App.css';
import JobList from './job-list/JobList';
import { Job } from './model/Job';
import { JobProvider } from './job-list/JobProvider';
import JobDetail from './JobDetail';
import Paginator from './Paginator';
import { useDebounce } from 'use-debounce';


interface AppProps {
  provider: JobProvider
}

function App({ provider }: AppProps) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [active, setActive] = useState<Job>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [debouncePage] = useDebounce(currentPage, 200);
  const [maxPage, setMaxPage] = useState<number>(0);

  useEffect(() => {
    provider.find(debouncePage).then(incomming => {
      setJobs(incomming);
      setActive(incomming[0]);
      setMaxPage(provider.getMaxPage());
    });
  }, [debouncePage]);


  const onPrevious = () => {
    if (currentPage <= 1) return;
    setCurrentPage((page) => page - 1);

  };
  const onNext = () => {
    if (currentPage >= maxPage) return;
    setCurrentPage((page) => page + 1);

  };

  return (
    <div className='flex flex-col h-screen justify-center w-full'>
      <div className='flex gap-4 overflow-hidden'>
        <JobList items={jobs} className=' w-3/12 p-2 overflow-auto' onJobSelectedCallback={(selected) => { setActive(selected); }} />
        {active && (
          <JobDetail job={active} />
        )}
      </div>
      <Paginator current={currentPage} max={maxPage} onNext={onNext} onPrevious={onPrevious} />

    </div>
  );
}

export default App;
