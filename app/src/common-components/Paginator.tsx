
interface PaginatorProps {
  current: number
  max: number
  onNext: () => void
  onPrevious: () => void
}
const Paginator = ({ current, max, onNext, onPrevious }: PaginatorProps) => {

  return <div className='paginator p-2 flex align-items-baseline justify-center gap-2'>
    <button type="button" onClick={onPrevious} className="previous text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" transform="scale (-1, 1)" transform-origin="center">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
      <span className="sr-only">Previous Button</span>
    </button>
    <span className='text-white content-center'>{current}/{max}</span>
    <button type="button" onClick={onNext} className="next text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
      </svg>
      <span className="sr-only">Next Button</span>
    </button>
  </div>;
};

export default Paginator;
