"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Heart, Sparkles, Star, Video, X } from "lucide-react";

// ==========================================
// 1. YOUR MEDIA JSON DATA (30 ITEMS)
// ==========================================
const mediaData = [
  { id: 1, type: "image", src: "/media/img-1.jpeg" },
  { id: 2, type: "image", src: "/media/img-2.jpeg" },
  { id: 7, type: "image", src: "/media/img-22.jpeg" },
  { id: 12, type: "image", src: "/media/img-12.jpeg" },
  { id: 5, type: "image", src: "/media/img-5.jpeg" },
  { id: 6, type: "image", src: "/media/img-20.jpeg" },
  { id: 8, type: "image", src: "/media/img-8.jpeg" },
  { id: 9, type: "image", src: "/media/img-9.jpeg" },
  { id: 10, type: "image", src: "/media/img-10.jpeg" },
  { id: 3, type: "image", src: "/media/img-3.jpeg" },
  { id: 11, type: "image", src: "/media/img-23.jpeg" },
  { id: 4, type: "image", src: "/media/img-4.jpeg" },
  { id: 22, type: "image", src: "/media/img-28.jpeg" },
  { id: 23, type: "image", src: "/media/img-7.jpeg" },
  { id: 21, type: "image", src: "/media/img-21.jpeg" },
  { id: 24, type: "image", src: "/media/img-24.jpeg" },
  { id: 16, type: "image", src: "/media/img-16.jpeg" },
  { id: 32, type: "image", src: "/media/img-32.jpeg" },
  { id: 43, type: "video", src: "/media/video/video-3.mp4" },
  { id: 13, type: "image", src: "/media/img-13.jpeg" },
  { id: 25, type: "image", src: "/media/img-25.jpeg" },
  { id: 14, type: "image", src: "/media/img-14.jpeg" },
  { id: 15, type: "image", src: "/media/img-15.jpeg" },
  { id: 17, type: "image", src: "/media/img-17.jpeg" },
  { id: 18, type: "image", src: "/media/img-18.jpeg" },
  { id: 20, type: "image", src: "/media/img-6.jpeg" },
  { id: 29, type: "image", src: "/media/img-29.jpeg" },
  { id: 28, type: "image", src: "/media/img-11.jpeg" },
  { id: 27, type: "image", src: "/media/img-27.jpeg" },
  { id: 30, type: "image", src: "/media/img-30.jpeg" },
  { id: 31, type: "image", src: "/media/img-31.jpeg" },
  { id: 34, type: "image", src: "/media/img-34.jpeg" },
  { id: 35, type: "image", src: "/media/img-35.jpeg" },
  { id: 36, type: "image", src: "/media/img-36.jpeg" },
  { id: 37, type: "image", src: "/media/img-37.jpeg" },
  { id: 38, type: "image", src: "/media/img-38.jpeg" },
  { id: 40, type: "image", src: "/media/img-40.jpeg" },
  { id: 41, type: "image", src: "/media/img-41.jpeg" },
  { id: 26, type: "image", src: "/media/img-26.jpeg" },
  { id: 42, type: "video", src: "/media/video/video-2.mp4" },
  { id: 33, type: "image", src: "/media/img-33.jpeg" },
  { id: 44, type: "video", src: "/media/video/video-4.mp4" },
  { id: 45, type: "video", src: "/media/video/video-5.mp4" },
  { id: 46, type: "video", src: "/media/video/video-6.mp4" },
  { id: 47, type: "video", src: "/media/video/video-7.mp4" },
  { id: 48, type: "video", src: "/media/video/video-8.mp4" },
  { id: 49, type: "video", src: "/media/video/video-9.mp4" },
  { id: 50, type: "video", src: "/media/video/video-10.mp4" },
  { id: 51, type: "video", src: "/media/video/video-1.mp4" },
];

const finalImage = "/media/final-smile.png";

// ==========================================
// ANIMATIONS
// ==========================================
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
  }
};

export default function EternalLoveStory() {
  const [selectedMedia, setSelectedMedia] = useState<{ id: number, type: string, src: string } | null>(null);

  return (
    // Changed background to a soft, romantic gradient and updated text to a deep mauve/plum
    <main className="min-h-screen bg-gradient-to-br from-[#FFF0F5] via-[#FFE4E1] to-[#FDF5E6] text-[#5D3A50] selection:bg-[#FFB6C1] selection:text-white font-sans overflow-x-hidden relative">

      {/* --- BACKGROUND ANIMATED BLOBS (Softer, dreamier colors) --- */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FFC0CB] rounded-full mix-blend-multiply filter blur-[120px] opacity-50"></motion.div>
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }} transition={{ duration: 25, repeat: Infinity }} className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#E6E6FA] rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></motion.div>
        <motion.div animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }} transition={{ duration: 22, repeat: Infinity }} className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-[#FFE4E1] rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></motion.div>
        <motion.div animate={{ scale: [1, 1.3, 1], y: [0, -50, 0] }} transition={{ duration: 18, repeat: Infinity }} className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] bg-[#FFF0F5] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></motion.div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 text-center">
        {/* Added glassmorphism and a soft pink glow shadow */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 p-10 md:p-16 rounded-[3rem] backdrop-blur-2xl bg-white/40 border border-white/70 shadow-[0_20px_60px_-15px_rgba(255,182,193,0.5)] max-w-4xl w-full">
          <motion.div variants={floatAnimation} initial="animate" animate="animate">
            <span className="flex justify-center text-xl gap-1"><Heart className="text-[#D67B88] mb-6 drop-shadow-[0_4px_10px_rgba(214,123,136,0.4)]" fill="#FFB6C1" size={24} /><span className=""></span></span>
          </motion.div>

          {/* Gradient text for the name makes it pop beautifully */}
          <h1 className="text-6xl md:text-9xl font-serif mb-6 tracking-tight drop-shadow-sm bg-gradient-to-r from-[#9E576B] via-[#C07C88] to-[#9E576B] text-transparent bg-clip-text">
            Sukanya
          </h1>

          <div className="flex items-center justify-center gap-3 md:gap-6 mb-4 md:mb-8">
            <div className="h-[2px] w-12 md:w-20 bg-gradient-to-r from-transparent to-[#D67B88] rounded-full"></div>
            <p className="text-sm md:text-lg uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#A26769] font-medium text-center">
              My First & Last Love
            </p>
            <div className="h-[2px] w-12 md:w-20 bg-gradient-to-l from-transparent to-[#D67B88] rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* 2. THE CONFESSION TEXT */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-4xl mx-auto text-center relative z-10 backdrop-blur-xl bg-white/50 p-10 md:p-20 rounded-[2.5rem] border border-white/80 shadow-[0_15px_40px_rgba(255,182,193,0.3)] ring-1 ring-white/50">
          <p className="text-xl md:text-4xl font-serif leading-relaxed text-[#754C5E] mb-4 md:mb-8">
            "You were always more than enough for me. In fact, you were one of the most beautiful parts of my life. Maybe I failed in many ways, maybe life had different plans for us, but one thing I’ll never deny is that I loved you truly—with all my heart, in the purest way I knew how."
          </p>
        </motion.div>
      </section>

      {/* 3. INTERACTIVE JSON GRID GALLERY */}
      <section className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/60 backdrop-blur-md text-[#A26769] mb-6 text-xs md:text-sm tracking-widest uppercase font-bold border border-white shadow-sm">
            <Compass size={18} className="text-[#D67B88]" />
            <span>Our Incomplete Story</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-[#884A5E] drop-shadow-sm mb-4">A Love I'll Always Remember</h2>
          <p className="text-sm md:text-md text-[#C07C88] uppercase tracking-widest font-semibold bg-white/40 px-4 py-1 rounded-full">Click to enlarge</p>
        </div>

        {/* Masonry Grid with gorgeous hover effects */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {mediaData.map((item, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedMedia(item)}
              className="break-inside-avoid relative rounded-3xl overflow-hidden group shadow-lg shadow-[#FFB6C1]/20 border-[4px] border-white/80 cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D67B88]/40"
            >
              {item.type === "image" ? (
                <img src={item.src} title={item.src} alt={`Memory ${item.src}`} className="w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              ) : (
                <div className="relative">
                  <video src={item.src} title={item.src} muted loop playsInline className="w-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none" />
                  <div className="absolute top-3 right-3 bg-white/30 backdrop-blur-md rounded-full p-2 border border-white/50">
                    <Video size={14} className="text-white drop-shadow-md" />
                  </div>
                </div>
              )}
              {/* Soft pink gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#D67B88]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. RADHA KRISHNA & VRINDAVAN TEXT */}
      <section className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFE4E1]/40 to-transparent -z-10"></div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div variants={floatAnimation} initial="animate" animate="animate">
            <Star className="text-[#FFD700] mb-10 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" fill="#FFF9C4" size={48} />
          </motion.div>

          <div className="space-y-8 md:space-y-12 max-w-4xl">
            <p className="text-xl md:text-3xl font-light text-[#754C5E] leading-relaxed">
              And maybe what makes our story even more special to me is that we were together in Vrindavan — the very land where the purest form of love was once felt through Krishna and Radha. They say Vrindavan isn’t just a place; it’s an emotion, a witness to love so deep that even centuries later people still travel there to feel its presence.
            </p>

            <p className="text-xl md:text-3xl font-light text-[#754C5E] leading-relaxed">
              In the stories, Krishna may have left Vrindavan, but his soul was always connected to Radha. Their paths separated, yet their love became eternal because some connections are beyond physical presence—they live forever in the heart.
            </p>

            <p className="text-xl md:text-3xl font-light text-[#754C5E] leading-relaxed">
              Sometimes I think maybe that’s why life took us there together... so our love could leave a memory in a place that already holds countless eternal love stories. And no matter what happens in life, I’ll always feel lucky that I got to love you in a place where love itself became immortal.
            </p>

            <p className="text-xl md:text-3xl font-light text-[#754C5E] leading-relaxed">
              Maybe our story feels incomplete today, but so did theirs—and yet the world still remembers them as the purest form of love. Not every love story gets a perfect ending, and maybe ours wasn’t meant to be complete right now. But incomplete love doesn’t mean it was any less real. Even the world remembers the love of Radha and Krishna—a love that was never fully united in the way people expected, yet it became eternal because it was pure.
            </p>
          </div>

          {/* Golden / Rose-gold glowing quote box */}
          <div className="mt-20 bg-white/60 backdrop-blur-2xl p-10 md:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(214,123,136,0.15)] border border-white ring-1 ring-[#FFD700]/20 max-w-4xl relative transform transition-transform duration-500 hover:scale-[1.02]">
            <span className="absolute -top-10 md:-top-14 left-1/2 transform -translate-x-1/2 text-7xl md:text-9xl text-[#F2C94C] font-serif opacity-40 drop-shadow-md">"</span>
            <p className="text-2xl md:text-5xl font-serif text-[#B76E79] italic leading-relaxed drop-shadow-sm">
              Jo tumhara hai, woh tumse kabhi door nahi jayega. Aur jo door chala gaya, shayad usse jaana tha taaki pyaar ka asli matlab samajh aaye.
            </p>
            <div className="w-16 h-[2px] bg-[#D67B88]/30 mx-auto my-8 rounded-full"></div>
            <p className="text-lg md:text-2xl font-light text-[#A26769]">
              And if love is truly written for us, maybe someday the universe will bring us back to each other—just like every road in Vrindavan somehow leads back to Krishna.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 5. THE MEANING OF PREM & THE PROMISE TO WAIT */}
      <section className="py-20 md:py-32 px-4 md:px-6 max-w-4xl mx-auto text-center relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="text-xl md:text-3xl text-[#754C5E] leading-relaxed mb-8 md:mb-12 backdrop-blur-xl bg-white/40 p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-xl shadow-[#FFB6C1]/10">
            There’s a beautiful thought in Krishna’s teachings: true love is not possession. <b className="text-[#9E576B] font-serif text-2xl md:text-4xl">Prem</b> means wanting someone’s happiness, even if it means letting them go. Loving someone truly means setting them free, and if that love is real from both sides, the universe has its own way of bringing two souls back together.
          </p>

          <p className="text-xl md:text-3xl text-[#754C5E] leading-relaxed mb-16 md:mb-24 backdrop-blur-xl bg-white/40 p-8 md:p-12 rounded-[2.5rem] border border-white/60 shadow-xl shadow-[#FFB6C1]/10">
            I don’t know what life has planned for us, but I do know this—no one can ever replace you, your smile, your laugh, and the way you made my world feel lighter.
          </p>

          <div className="relative inline-block mt-8">
            <Sparkles className="absolute -top-8 md:-top-12 -left-6 md:-left-12 text-[#D67B88] opacity-70 animate-pulse" size={40} />
            <Sparkles className="absolute -bottom-8 md:-bottom-12 -right-6 md:-right-12 text-[#FFB6C1] opacity-70 animate-pulse" size={40} />
            <p className="text-3xl md:text-6xl font-serif text-[#9E576B] italic leading-tight p-6 md:p-10 drop-shadow-md">
              "And somewhere in my heart, I’ll always wait... not with anger, not with expectations, but with love. If destiny ever decides to write our story again, I’ll still be here."
            </p>
          </div>
        </motion.div>
      </section>

      {/* 6. FINAL IMAGE FRAME (Polaroid style) */}
      <section className="py-16 px-6 flex justify-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative p-4 md:p-6 bg-white rounded-lg shadow-[0_20px_50px_rgba(214,123,136,0.3)] transform rotate-[-3deg] max-w-sm md:max-w-md border border-gray-100 hover:rotate-0 transition-transform duration-500">
          <img src={finalImage} alt="Final Memory" className="w-full h-auto rounded-sm object-cover" />
          <div className="mt-6 text-center pb-4">
            <p className="font-serif italic text-[#884A5E] text-2xl">My favorite smile.</p>
          </div>
          {/* Cute Washi Tape effect */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-white/50 backdrop-blur-md rotate-[4deg] shadow-sm opacity-90 border border-white/40"></div>
        </motion.div>
      </section>

      {/* 7. SWEET ENDING FOOTER */}
      <footer className="py-20 md:py-32 bg-gradient-to-t from-[#FFE4E1] to-transparent text-center px-4 md:px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto bg-white/60 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-white shadow-[0_20px_60px_rgba(255,182,193,0.4)]">
          <motion.div variants={floatAnimation} initial="animate" animate="animate">
            <Heart className="mx-auto text-[#D67B88] mb-8" fill="#FFB6C1" size={40} />
          </motion.div>
          <p className="text-2xl md:text-4xl text-[#884A5E] font-serif italic mb-8 md:mb-10 leading-relaxed">
            Until then, take care of your beautiful smile—because it will always be my favorite thing in this world.
          </p>
          <div className="w-16 md:w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D67B88] to-transparent mx-auto mb-8 rounded-full"></div>
          <div className="text-sm md:text-base uppercase tracking-[0.4em] md:tracking-[0.6em] text-[#A26769] font-bold">
            Forever Yours
          </div>
        </motion.div>
      </footer>

      {/* ==========================================
          LIGHTBOX / ZOOM OVERLAY MODAL 
          ========================================== */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedMedia(null);
            }}
            // Changed overlay to have a deep warm tint rather than harsh black
            className="fixed inset-0 z-[100] bg-[#4A3042]/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-6 right-6 p-3 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors z-[101] backdrop-blur-md"
            >
              <X size={28} />
            </button>

            {/* Media Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            >
              {selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.src}
                  alt="Zoomed Memory"
                  className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)] border-4 border-white/20"
                />
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)] bg-black border-4 border-white/20"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}