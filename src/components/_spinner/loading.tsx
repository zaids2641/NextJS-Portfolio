'use client'

export default function Loader() {

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-neutral-900/80 gap-4">
      
      {/* Trailing Arc Spinner */}
      <div className="w-16 h-16 border-4 border-green-200 border-t-green-700 rounded-full animate-spin-trail"></div>
      
      {/* Gradient Text */}
      <h1 className="text-2xl font-bold bg-gradient-to-r from-green-200 via-green-500 to-green-900 bg-clip-text text-transparent animate-gradient-x">
        Searching...
      </h1>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 2.5s ease infinite;
        }

        @keyframes spin-trail {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-trail {
          border-top-color: #16640a; /* Green */
          border-right-color: rgba(22, 100, 10, 0.2);
          border-bottom-color: rgba(22, 100, 10, 0.2);
          border-left-color: rgba(22, 100, 10, 0.2);
          animation: spin-trail 1.2s linear infinite;
        }
      `}</style>
    </div>
  )
}



// 'use client'

// import { useLoadingStore } from "@/utils/useLoadingStore"


// export default function Loader() {
//   const { loading } = useLoadingStore()

//   if (!loading) return null

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-neutral-900/80">
//       <div className="flex items-center justify-center">
//         <div className="h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//       </div>
//       <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-green-500 to-green-900 animate-sweep">
//         Searching...
//       </h1>

//       <style jsx>{`
//         @keyframes sweep {
//           0% {
//             background-position: 0% 50%;
//           }
//           100% {
//             background-position: 200% 50%;
//           }
//         }
//         .animate-sweep {
//           background-size: 200% 200%;
//           animation: sweep 2.5s linear infinite;
//         }
//       `}</style>
//     </div>
//   )
// }
