import { useState, useEffect } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { href: '#impact', label: 'О нас' },
        { href: '#programs', label: 'Программы' },
        { href: '#stories', label: 'Истории' },
        { href: '#transparency', label: 'Отчётность' },
    ]

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-cream/95 backdrop-blur-md shadow-md'
                    : 'bg-transparent'
                }`}
            role="banner"
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Главная навигация">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group" aria-label="На главную">
                        <div className="w-10 h-10 rounded-xl bg-sage-500 flex items-center justify-center transition-transform group-hover:scale-105">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" fill="white" opacity="0.5" />
                                <path d="M12 8l1.5 3 3.5.5-2.5 2.5.5 3.5L12 16l-3 1.5.5-3.5L7 11.5l3.5-.5z" fill="white" />
                            </svg>
                        </div>
                        <span className={`font-display font-bold text-xl transition-colors ${scrolled ? 'text-charcoal' : 'text-white'}`}>
                            Преодоление
                        </span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-sage-500 ${scrolled ? 'text-charcoal-light' : 'text-white/90'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#donate"
                            className="inline-flex items-center px-5 py-2.5 rounded-full bg-warm-blue-500 text-white text-sm font-semibold shadow-lg shadow-warm-blue-500/25 hover:bg-warm-blue-600 hover:shadow-warm-blue-500/40 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Помочь
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="md:hidden p-2 rounded-lg"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={scrolled ? '#2D2D2D' : '#fff'} strokeWidth="2">
                            {isOpen ? (
                                <path d="M6 6l12 12M6 18L18 6" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    id="mobile-menu"
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80 pb-4' : 'max-h-0'
                        }`}
                    role="menu"
                >
                    <div className="rounded-2xl bg-white/95 backdrop-blur-lg shadow-xl p-4 space-y-1">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-3 rounded-xl text-charcoal hover:bg-sage-50 transition-colors font-medium"
                                role="menuitem"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#donate"
                            className="block text-center mt-2 px-4 py-3 rounded-xl bg-warm-blue-500 text-white font-semibold hover:bg-warm-blue-600 transition-colors"
                            role="menuitem"
                            onClick={() => setIsOpen(false)}
                        >
                            Помочь
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}
