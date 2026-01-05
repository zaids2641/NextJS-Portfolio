'use client'

export default function Spinner1() {

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-neutral-900/80 gap-4">
      
      {/* Trailing Arc Spinner */}
      <div className="w-16 h-16 border-4 border-green-200 border-t-green-700 rounded-full animate-spin-trail"></div>

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