export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            aria-label="Главный экран"
        >
            {/* Background image */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero-bg.jpg"
                    alt=""
                    role="presentation"
                    className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-sage-900/70 via-sage-800/50 to-charcoal/80" />
            </div>

            {/* Floating shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-sage-400/10 blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-10 w-80 h-80 rounded-full bg-warm-blue-400/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-sand-300/8 blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" />
                    <span className="text-white/90 text-sm font-medium">Благотворительный фонд</span>
                </div>

                <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 tracking-tight">
                    Каждый ребёнок
                    <br />
                    <span className="bg-gradient-to-r from-sage-300 via-sand-300 to-warm-blue-300 bg-clip-text text-transparent">
                        способен на большее
                    </span>
                </h1>

                <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Мы помогаем детям с&nbsp;особенностями интеллектуального развития раскрыть свой потенциал,
                    обрести уверенность и&nbsp;найти своё место в&nbsp;обществе.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#donate"
                        className="group inline-flex items-center px-8 py-4 rounded-full bg-warm-blue-500 text-white font-semibold text-lg shadow-xl shadow-warm-blue-500/30 hover:bg-warm-blue-600 hover:shadow-warm-blue-500/50 transition-all duration-300 hover:-translate-y-1"
                    >
                        Поддержать фонд
                        <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href="#programs"
                        className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                    >
                        Узнать больше
                    </a>
                </div>

                {/* Stats strip */}
                <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto">
                    {[
                        { value: '12+', label: 'лет работы' },
                        { value: '150+', label: 'детей получили помощь' },
                        { value: '5', label: 'специалистов' },
                        { value: '300+', label: 'семей поддержаны' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-white/60">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce" aria-hidden="true">
                <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5">
                    <path d="M10 3v14M5 13l5 5 5-5" />
                </svg>
            </div>

            <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
        </section>
    )
}
