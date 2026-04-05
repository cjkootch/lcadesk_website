"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-7xl font-bold text-red-500/20 mb-4">500</p>
        <h1 className="font-display text-2xl text-text-primary mb-3">Something Went Wrong</h1>
        <p className="text-text-secondary text-sm mb-8 leading-relaxed">
          An unexpected error occurred. Please try again or contact support if the problem persists.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-accent to-teal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:scale-[1.02] transition-all"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
