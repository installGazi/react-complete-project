// UserCard Component - Modern, Colorful, Professional
const UserCard = ({ user, onBlock, onDelete }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      
      {/* Colored top bar based on status */}
      <div className={`h-1.5 w-full ${
        user.isBlocked 
          ? "bg-gradient-to-r from-rose-400 via-red-500 to-orange-500" 
          : "bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500"
      }`}></div>

      <div className="p-5">
        {/* User Info */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="flex-shrink-0 relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
              <span className="text-white text-xl font-bold">
                {user.name?.charAt(0).toUpperCase() || "U"}
              </span>
            </div>
            {/* Status dot */}
            <span className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-white ${
              user.isBlocked ? "bg-red-500" : "bg-green-500"
            }`}></span>
          </div>

          {/* Name & Email */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-gray-800 truncate">
              {user.name || "Unknown User"}
            </h3>
            <p className="text-xs text-gray-500 truncate mt-0.5">
              {user.email}
            </p>
          </div>
        </div>

        {/* Info Pills */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
            <p className="text-[10px] uppercase tracking-wide text-gray-400 font-semibold">Status</p>
            <p className={`text-sm font-bold ${
              user.isBlocked ? "text-red-600" : "text-green-600"
            }`}>
              {user.isBlocked ? "Blocked" : "Active"}
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
            <p className="text-[10px] uppercase tracking-wide text-gray-400 font-semibold">Role</p>
            <p className={`text-sm font-bold ${
              user.role === "admin" ? "text-purple-600" : "text-blue-600"
            }`}>
              {user.role === "admin" ? "Admin" : "User"}
            </p>
          </div>
        </div>

        {/* Warnings Badge */}
        {user.warnings > 0 && (
          <div className="mt-3 flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-amber-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <span className="text-xs font-bold text-amber-700">
              {user.warnings} {user.warnings === 1 ? "Warning" : "Warnings"}
            </span>
          </div>
        )}

        {/* Action Buttons - Gradient */}
        <div className="flex gap-2 mt-5 pt-4 border-t border-gray-100">
          {!user.isBlocked && (
            <button
              onClick={() => onBlock(user._id)}
              className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-sm font-semibold py-2.5 rounded-xl shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 flex items-center justify-center gap-1.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
              Block
            </button>
          )}

          <button
            onClick={() => onDelete(user._id)}
            className="flex-1 bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white text-sm font-semibold py-2.5 rounded-xl shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 flex items-center justify-center gap-1.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;