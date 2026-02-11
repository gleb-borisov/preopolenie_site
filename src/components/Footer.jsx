export default function Footer() {
    return (
        <footer className="bg-charcoal text-white" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-sage-500 flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" fill="white" opacity="0.5" />
                                    <path d="M12 8l1.5 3 3.5.5-2.5 2.5.5 3.5L12 16l-3 1.5.5-3.5L7 11.5l3.5-.5z" fill="white" />
                                </svg>
                            </div>
                            <span className="font-display font-bold text-xl">Преодоление</span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Благотворительный фонд помощи детям с&nbsp;особенностями интеллектуального развития.
                            Работаем с&nbsp;2014&nbsp;года.
                        </p>
                        {/* Social links */}
                        <div className="flex gap-3">
                            {['VK', 'TG', 'OK'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all duration-200 text-xs font-bold"
                                    aria-label={`Мы в ${social}`}
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <nav aria-label="Навигация по сайту">
                        <h3 className="font-display font-semibold text-sm text-white mb-4 uppercase tracking-wider">Навигация</h3>
                        <ul className="space-y-3">
                            {[
                                { href: '#impact', label: 'О фонде' },
                                { href: '#programs', label: 'Программы' },
                                { href: '#stories', label: 'Истории' },
                                { href: '#transparency', label: 'Отчётность' },
                                { href: '#donate', label: 'Помочь' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-white/60 hover:text-white text-sm transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contact */}
                    <div>
                        <h3 className="font-display font-semibold text-sm text-white mb-4 uppercase tracking-wider">Контакты</h3>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li className="flex items-start gap-2">
                                <svg className="w-4 h-4 mt-0.5 shrink-0 text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>г. Нижний Новгород, ул. Примерная, д. 42</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-4 h-4 mt-0.5 shrink-0 text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <a href="tel:+78312234567" className="hover:text-white transition-colors">+7 (831) 223-45-67</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <svg className="w-4 h-4 mt-0.5 shrink-0 text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:info@preodolenie.org" className="hover:text-white transition-colors">info@preodolenie.org</a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-display font-semibold text-sm text-white mb-4 uppercase tracking-wider">Документы</h3>
                        <ul className="space-y-3 text-sm text-white/60">
                            <li><a href="#" className="hover:text-white transition-colors">Устав фонда</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Годовой отчёт 2025</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Реквизиты</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/40">
                        © 2014–2026 Благотворительный фонд «Преодоление». Все права защищены.
                    </p>
                    <p className="text-xs text-white/40">
                        ИНН 7700000000 · ОГРН 1140000000000
                    </p>
                </div>
            </div>
        </footer>
    )
}
