"use client";

export default function CircleSpinner() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md dark:bg-neutral-900/80">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-gray-300/10 border-t-[#00eaff] animate-spin"></div>

        <div className="absolute inset-0 flex items-center justify-center text-[#00eaff] font-sans text-sm">
          Loading
          <span></span>
        </div>
      </div>

      <style jsx>{`
        @keyframes animateC {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes animate {
          0% {
            transform: rotate(45deg);
          }
          100% {
            transform: rotate(405deg);
          }
        }
      `}</style>
    </div>
  );
}
