
interface ChipProps {
  value: string
  color: string //bg-blue-500
}
const Chip = ({ value, color }: ChipProps) => {
  return <div className={`relative grid select-none items-center whitespace-nowrap rounded-lg ${color} py-1.5 px-3 font-sans text-xs font-bold uppercase text-white`}>
    <span className="type">{value}</span>
  </div>
}

export default Chip
