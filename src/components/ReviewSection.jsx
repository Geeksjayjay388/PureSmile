import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowUpRight, Quote, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';


function StarRating({ count, total }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            className={`w-6 h-6 ${i <= Math.floor(count) ? "text-[#01CE91]" : i - 0.5 <= count ? "text-[#01CE91]" : "text-gray-200"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            {i - 0.5 <= count && i > Math.floor(count) ? (
              <>
                <defs>
                  <linearGradient id={`half-${i}`}>
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="#e5e7eb" />
                  </linearGradient>
                </defs>
                <path
                  fill={`url(#half-${i})`}
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </>
            ) : (
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            )}
          </svg>
        ))}
      </div>
      <span className="text-[#01CE91] font-bold text-base">{total}</span>
    </div>
  );
}

function ReviewCard({ rating, ratingDisplay, text, author, avatar, time, quoteVisible, likes, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes || 0);

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-white rounded-[32px] border border-gray-100 p-10 flex flex-col gap-6 relative min-h-[300px] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] hover:border-[#01CE91]/20 cursor-pointer group ${index % 2 === 0 ? 'hover:-rotate-1' : 'hover:rotate-1'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? `translateY(-8px) ${index % 2 === 0 ? 'rotate(-1.5deg)' : 'rotate(1.5deg)'}` : 'translateY(0) rotate(0deg)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Top Row: Rating and Like Button */}
      <div className="flex items-center justify-between">
        <StarRating count={rating} total={ratingDisplay} />

        {/* Like Button - appears on hover */}
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'} ${isLiked ? 'bg-[#01CE91]/10 text-[#01CE91]' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
        >
          <ThumbsUp size={18} className={`transition-transform duration-300 ${isLiked ? 'fill-[#01CE91] scale-110' : ''}`} />
          <span className="text-sm font-bold">{likeCount}</span>
        </button>
      </div>

      <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed flex-1 font-medium italic">"{text}"</p>

      {/* Author Info - Shown on hover */}
      <div className={`flex items-center justify-between mt-auto pt-6 border-t border-gray-100 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 ring-4 ring-[#01CE91]/10 ring-offset-2">
            {avatar ? (
              <img
                src={avatar}
                alt={author}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#01CE91] to-[#00B87D] flex items-center justify-center text-white font-bold text-lg">
                {author.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <p className="font-bold text-gray-800 text-sm md:text-base">{author}</p>
            <p className="text-gray-400 text-xs font-medium">{time}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <motion.button whileHover={{ scale: 1.1 }} className="p-3 rounded-full bg-gray-50 hover:bg-[#01CE91] hover:text-white text-gray-400 transition-all duration-300 shadow-sm">
            <MessageCircle size={20} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="p-3 rounded-full bg-gray-50 hover:bg-[#01CE91] hover:text-white text-gray-400 transition-all duration-300 shadow-sm">
            <Share2 size={20} />
          </motion.button>
        </div>
      </div>

      {/* Quote Icon - Enhanced */}
      {quoteVisible && (
        <div className="absolute top-6 right-8 text-[#01CE91]/10 group-hover:text-[#01CE91]/20 transition-all duration-300 group-hover:scale-125 group-hover:-rotate-12">
          <Quote size={56} fill="currentColor" />
        </div>
      )}

      {/* Decorative gradient blob on hover */}
      <div className={`absolute -top-16 -right-16 w-48 h-48 bg-[#01CE91]/10 rounded-full blur-[60px] transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </motion.div>
  );
}

function StatsCard({ number, label, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#F5F5F5] rounded-[32px] p-10 flex flex-col items-center justify-center text-center hover:bg-[#01CE91] hover:text-white transition-all duration-500 group cursor-pointer shadow-sm hover:shadow-2xl hover:scale-[1.02]"
    >
      <div className="w-16 h-16 rounded-[24px] bg-white group-hover:bg-white/20 flex items-center justify-center mb-6 transition-all duration-500 shadow-sm group-hover:rotate-6">
        <Icon size={32} className="text-[#01CE91] group-hover:text-white transition-colors duration-300" />
      </div>
      <p className="text-2xl md:text-4xl font-black text-[#1A1A1A] group-hover:text-white mb-2 transition-colors duration-300 tracking-tight">{number}</p>
      <p className="text-xs md:text-base font-bold text-gray-500 group-hover:text-white/90 transition-colors duration-300 uppercase tracking-widest">{label}</p>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const reviews = [
    {
      rating: 4.5,
      ratingDisplay: "4.9",
      text: "The clinic feels modern and welcoming. The doctor explained everything clearly, and the treatment was completely painless and professional.",
      author: "Olivia Carter",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
      time: "1 day ago",
      quoteVisible: true,
      likes: 24,
      category: "general"
    },
    {
      rating: 5,
      ratingDisplay: "5.0",
      text: "I finally found a dental clinic that values aesthetics, comfort, and technology. My smile has never looked this good.",
      author: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
      time: "3 days ago",
      quoteVisible: false,
      likes: 18,
      category: "cosmetic"
    },
    {
      rating: 4,
      ratingDisplay: "4.0",
      text: "From consultation to final result, everything felt smooth and well-organized. You really feel the experience and attention to detail.",
      author: "Sarah Williams",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
      time: "1 week ago",
      quoteVisible: false,
      likes: 12,
      category: "general"
    },
    {
      rating: 5,
      ratingDisplay: "5.0",
      text: "The doctors are calm, confident, and very modern in their approach. I felt safe and informed during every step.",
      author: "James Rodriguez",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
      time: "2 weeks ago",
      quoteVisible: false,
      likes: 31,
      category: "implants"
    },
    {
      rating: 4,
      ratingDisplay: "4.0",
      text: "Amazing service and beautiful results. The clinic atmosphere is stylish, and the team genuinely cares about patient comfort.",
      author: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
      time: "3 weeks ago",
      quoteVisible: false,
      likes: 8,
      category: "general"
    },
    {
      rating: 5,
      ratingDisplay: "5.0",
      text: "I appreciated the transparency, digital diagnostics, and personalized treatment plan. Definitely a premium dental experience.",
      author: "David Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
      time: "1 month ago",
      quoteVisible: false,
      likes: 45,
      category: "orthodontics"
    }
  ];

  const filteredReviews = activeFilter === 'all'
    ? reviews
    : reviews.filter(r => r.category === activeFilter);

  return (
    <section className="bg-white">
      <div className="px-6 md:px-8 py-24 max-w-[1700px] mx-auto">
        {/* Header Section */}
        <div className="mb-20 lg:mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#01CE91] text-sm font-semibold tracking-widest uppercase mb-6 inline-block">
                Testimonials
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-[3.8rem] font-medium text-[#1A1A1A] leading-[1.1] max-w-4xl tracking-tight">
                <span className="italic font-light">Patient </span>
                <span className="italic font-light"><span className="font-bold">Experiences</span> that reflect</span>
                <br />
                <span className="font-light">Trust, Quality and Results</span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-gray-500 text-base md:text-lg lg:text-xl max-w-md leading-relaxed"
            >
              Hear directly from our patients about their journeys, results, and why they trust our clinic for modern, comfortable, and high-quality dental care.
            </motion.p>
          </div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {['all', 'general', 'cosmetic', 'implants', 'orthodontics'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 capitalize ${activeFilter === filter
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <StatsCard number="2.5K+" label="Happy Patients" icon={Star} delay={0.1} />
          <StatsCard number="4.9" label="Average Rating" icon={Star} delay={0.2} />
          <StatsCard number="15+" label="Years Experience" icon={Star} delay={0.3} />
          <StatsCard number="98%" label="Success Rate" icon={Star} delay={0.4} />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((review, index) => (
              <ReviewCard key={review.author} {...review} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Load More / Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-20 gap-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 border-2 border-gray-200 rounded-full px-8 py-4 text-base font-bold text-gray-700 hover:border-[#01CE91] hover:text-[#01CE91] transition-all duration-300 active:scale-95"
          >
            Write a Review
            <div className="w-10 h-10 rounded-full bg-gray-800 group-hover:bg-[#01CE91] flex items-center justify-center transition-colors duration-300">
              <ArrowUpRight size={20} className="text-white" />
            </div>
          </motion.button>

          <div className="flex items-center gap-8">
            <span className="text-gray-400 text-base font-medium">Showing {filteredReviews.length} of {reviews.length} reviews</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 bg-[#1A1A1A] text-white rounded-full px-8 py-4 text-base font-bold hover:bg-[#2A2A2A] transition-all duration-300 hover:shadow-xl hover:shadow-[#01CE91]/20 active:scale-95"
            >
              Explore more
              <div className="w-10 h-10 rounded-full bg-[#01CE91] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ArrowUpRight size={20} className="text-white" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}