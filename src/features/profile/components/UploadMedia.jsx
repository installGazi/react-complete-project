import useUploadMedia from "../../uploadMedia/hooks/useUploadMedia";

const UploadMedia = ({ onUploadSuccess }) => {
  const {
    file,
    description,
    preview,
    uploading,
    uploadedUrl,
    handleFileChange,
    handleUpload,
    setDescription,
  } = useUploadMedia(onUploadSuccess);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-2xl">
      <h2 className="text-xl font-bold mb-4">মিডিয়া + বিবরণ আপলোড</h2>

      <input 
        type="file" 
        onChange={handleFileChange} 
        accept="image/*,video/*" 
        className="mb-3" 
      />

      <textarea
        placeholder="বিবরণ লিখুন (description)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded mb-3"
        rows="3"
      />

      {preview && (
        <div className="mb-3">
          {file?.type.startsWith("image") ? (
            <img src={preview} alt="preview" className="w-full rounded" />
          ) : (
            <video src={preview} controls className="w-full rounded" />
          )}
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        {uploading ? "আপলোড হচ্ছে..." : "আপলোড করুন"}
      </button>

      {uploadedUrl && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          <p className="text-sm break-all">URL: {uploadedUrl}</p>
          <a 
            href={uploadedUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 text-sm"
          >
            প্রিভিউ দেখো
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadMedia;