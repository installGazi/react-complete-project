import useMyUploads from "../../myUploads/hooks/useMyUploads";

const MyUploads = ({ refreshTrigger }) => {
  const { uploads, loading, deletingId, handleDelete } = useMyUploads(refreshTrigger);

  if (loading) return <p className="text-center mt-10">লোড হচ্ছে...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-6">আমার আপলোড করা মিডিয়া</h1>
      
      {uploads.length === 0 ? (
        <p className="text-gray-500 text-center">কোনো আপলোড নেই।</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {uploads.map((item) => (
            <div key={item._id} className="border rounded-lg p-4 shadow relative">
              {item.fileType === "image" ? (
                <img src={item.url} alt="upload" className="w-full h-48 object-cover rounded" />
              ) : (
                <video src={item.url} controls className="w-full h-48 object-cover rounded" />
              )}
              <p className="mt-2 text-gray-700">
                <strong>বিবরণ:</strong> {item.description || "কোনো বিবরণ নেই"}
              </p>
              <p className="text-xs text-gray-400">
                আপলোড: {new Date(item.uploadedAt).toLocaleString()}
              </p>
              <div className="flex justify-between items-center mt-2">
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 text-sm"
                >
                  মূল ফাইল দেখুন
                </a>
                <button
                  onClick={() => handleDelete(item._id)}
                  disabled={deletingId === item._id}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                >
                  {deletingId === item._id ? "মুছছি..." : "ডিলিট"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyUploads;