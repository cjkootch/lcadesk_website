export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 pt-32">
      <div className="h-12 w-64 bg-gray-200 rounded-xl animate-pulse mb-4" />
      <div className="h-6 w-96 bg-gray-100 rounded-lg animate-pulse mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-gray-100 rounded-2xl h-48 animate-pulse" />
        ))}
      </div>
    </div>
  );
}
