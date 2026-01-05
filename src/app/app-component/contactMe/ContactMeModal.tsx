"use client";
import { useEffect, useState } from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        // Automatically close modal after 1.5s
        setTimeout(() => {
          setStatus(""); // clear message
          onClose();
        }, 1500);
      } else {
        setStatus(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm w-full h-full"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg rounded-xl bg-white dark:bg-[var(--dark)] p-6 shadow-xl transition-colors">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer transition-colors"
        >
          ✕
        </button>

        <h2 className="mb-6 text-2xl fw-800 font-ubuntu-condensed text-black dark:text-white transition-colors">
          Send us a message
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            placeholder="Your name"
            required
            className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-[var(--dark)] text-black dark:text-white px-4 py-3 font-inter capitalize transition-colors"
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            required
            className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-[var(--dark)] text-black dark:text-white px-4 py-3 font-inter transition-colors"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            required
            className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-[var(--dark)] text-black dark:text-white px-4 py-3 font-inter transition-colors"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-md bg-[var(--accent-teal)] py-3 font-semibold text-white hover:opacity-90 cursor-pointer font-inter transition-colors"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="text-sm text-green-600">{status}</p>}
        </form>
      </div>
    </div>
  );
}
