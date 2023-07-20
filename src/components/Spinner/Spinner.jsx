// == Import

// == Composant
export default function Spinner() {
  return (
    <div className="flex items-center justify-center space-x-2 mb-4">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-gray-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-amber-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-primary"></div>
    </div>
)
}
