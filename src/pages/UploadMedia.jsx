// UploadMedia Page - Modern, Stylish, Responsive
import { Link } from "react-router-dom";
import useUploadMedia from "../features/uploadMedia/hooks/useUploadMedia";

const UploadMedia = () => {
  const {
    file,
    description,
    preview,
    uploading,
    uploadedUrl,
    handleFileChange,
    handleUpload,
    setDescription,
  } = useUploadMedia();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/60 overflow-hidden">
          
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-8 text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Upload Media</h2>
            <p className="text-blue-100 text-sm mt-1">Share your images and videos</p>
          </div>

          {/* Content */}
          <div className="px-8 py-8 space-y-6">

            {/* File Input - Styled */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select File
              </label>
              <label className="cursor-pointer group block">
                <div className="border-2 border-dashed border-blue-200 hover:border-blue-400 rounded-2xl p-6 text-center transition-all duration-200 bg-blue-50/30 hover:bg-blue-50/60">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-700">
                    {file ? file.name : "Click to select a file"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Images (JPG, PNG) or Videos (MP4)
                  </p>
                </div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*,video/*"
                  hidden
                />
              </label>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                placeholder="Write a description about your file..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                rows="4"
              />
            </div>

            {/* Preview */}
            {preview && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Preview
                </label>
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  {file?.type.startsWith("image") ? (
                    <img src={preview} alt="preview" className="w-full max-h-72 object-cover" />
                  ) : (
                    <video src={preview} controls className="w-full max-h-72" />
                  )}
                </div>
              </div>
            )}

            {/* Upload Button */}
            <button
              onClick={handleUpload}
              disabled={uploading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {uploading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                  Uploading...
                </span>
              ) : (
                "Upload Now"
              )}
            </button>

            {/* Upload Success Message with My Files Link */}
            {uploadedUrl && (
              <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mt-0.5 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="white" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-green-800">Upload Successful!</p>
                    <p className="text-xs text-green-700 mt-1">
                      Your file has been uploaded. Click the button below to view it in My Files.
                    </p>
                    <p className="text-xs text-green-600 break-all mt-2 font-mono bg-white/50 px-2 py-1 rounded">
                      {uploadedUrl}
                    </p>

                    {/* My Files Button */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link
                        to="/myuploads"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                        </svg>
                        Go to My Files
                      </Link>
                      <a
                        href={uploadedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white border-2 border-green-300 text-green-700 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-green-50 hover:border-green-400 transition-all duration-200"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        View Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} Gazi Saiful. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default UploadMedia;