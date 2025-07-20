import React from "react";

export default function MuskanSite() {
  return (
    <div className="bg-pink-50 min-h-screen text-gray-800 font-sans">
      {/* Header */}
      <header className="text-center py-10 bg-pink-100 shadow-md">
        <h1 className="text-4xl font-bold text-pink-700">For Muskan 💖</h1>
        <p className="mt-2 text-lg">A little corner of the internet just for you</p>
      </header>

      {/* About Muskan */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">About Muskan</h2>
        <p className="text-lg leading-relaxed">
          Muskan, your name means smile — and that’s exactly what you bring into my life. This space is a humble tribute to the laughter, kindness, and magic you add to every moment.
        </p>
      </section>

      {/* Memories Section */}
      <section className="p-8 bg-white max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Our Memories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Replace src with your actual image URLs later */}
          <img src="https://via.placeholder.com/300x200" alt="Memory 1" className="rounded-xl shadow" />
          <img src="https://via.placeholder.com/300x200" alt="Memory 2" className="rounded-xl shadow" />
        </div>
      </section>

      {/* Love Notes */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">Love Notes</h2>
        <p className="text-lg italic">
          “In you, I’ve found my heart’s melody, and in your smile, my peace.”
        </p>
        {/* Add your poems, letters, or notes here later */}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-600">
        Made with ❤️ by Somendra Tiwari
      </footer>
    </div>
  );
}
