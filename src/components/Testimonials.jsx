import { useState } from 'react'

const testimonials = [
    {
        name: 'Елена Морозова',
        role: 'мама Артёма, 8 лет',
        avatar: 'ЕМ',
        avatarBg: 'bg-sage-200 text-sage-700',
        quote:
            'Когда Артёму поставили диагноз в три года, мне казалось, что мир рухнул. В "Преодоление" мы пришли, когда ему было пять — он почти не говорил и боялся других детей. Сейчас ему восемь, и каждое утро он сам собирает рюкзак и бежит на занятия. Недавно он впервые сказал полное предложение: "Мама, я хочу рисовать". Я плакала весь день — от счастья.',
        highlight: 'впервые сказал полное предложение',
        program: 'Мир вокруг',
    },
    {
        name: 'Дмитрий Соколов',
        role: 'волонтёр фонда, 3 года',
        avatar: 'ДС',
        avatarBg: 'bg-warm-blue-200 text-warm-blue-700',
        quote:
            'Я пришёл волонтёром на один день — и остался на три года. Каждую субботу мы с ребятами ходим в парк, готовим простые блюда, играем в настольные игры. Помню, как Маша, которая раньше пряталась за маму, сама подошла ко мне и сказала: "Дима, а мы сегодня будем печь печенье?" Эти моменты невозможно забыть.',
        highlight: 'сама подошла и заговорила',
        program: 'Волонтёрство',
    },
    {
        name: 'Ирина Волкова',
        role: 'мама Сони, 15 лет',
        avatar: 'ИВ',
        avatarBg: 'bg-sand-200 text-sand-700',
        quote:
            'Соня занимается в фонде с семи лет. Раньше для нашей семьи поход в магазин был стрессом — Соня терялась, паниковала. Благодаря программе "Свой путь" она научилась делать покупки, считать деньги, готовить завтрак. В прошлом месяце она сама заказала пиццу по телефону. Мелочь? Для нас — огромная победа.',
        highlight: 'сама заказала пиццу по телефону',
        program: 'Свой путь',
    },
    {
        name: 'Ольга Петрова',
        role: 'мама Кости, 6 лет',
        avatar: 'ОП',
        avatarBg: 'bg-sage-200 text-sage-700',
        quote:
            'Костя начал заниматься в программе "Первые шаги" в четыре года. Тогда он не мог самостоятельно есть ложкой и не реагировал на своё имя. За два года работы с логопедом и дефектологом он стал понимать простые просьбы, играть рядом с другими детьми, сам одеваться. Нам предстоит ещё долгий путь, но мы больше не одни.',
        highlight: 'стал играть рядом с другими детьми',
        program: 'Первые шаги',
    },
]

export default function Testimonials() {
    const [active, setActive] = useState(0)

    return (
        <section id="stories" className="py-20 sm:py-28 bg-cream" aria-labelledby="stories-title">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-sand-100 text-sand-700 text-sm font-semibold mb-4 tracking-wide">
                        Истории
                    </span>
                    <h2 id="stories-title" className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-5">
                        Маленькие победы —{' '}
                        <span className="text-sage-600">большие перемены</span>
                    </h2>
                    <p className="text-charcoal-light text-lg leading-relaxed">
                        За каждой цифрой — живые истории детей и&nbsp;их семей. Истории преодоления, роста и&nbsp;надежды.
                    </p>
                </div>

                {/* Desktop layout: Featured card + side list */}
                <div className="hidden lg:grid grid-cols-5 gap-8">
                    {/* Featured testimonial */}
                    <div className="col-span-3 bg-white rounded-3xl p-10 shadow-sm border border-sage-100/50">
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold ${testimonials[active].avatarBg}`}>
                                {testimonials[active].avatar}
                            </div>
                            <div>
                                <div className="font-display font-bold text-xl text-charcoal">
                                    {testimonials[active].name}
                                </div>
                                <div className="text-charcoal-light text-sm">{testimonials[active].role}</div>
                            </div>
                            <span className="ml-auto px-3 py-1 rounded-full bg-sage-50 text-sage-600 text-xs font-semibold">
                                {testimonials[active].program}
                            </span>
                        </div>

                        <blockquote className="relative">
                            <svg className="absolute -top-2 -left-2 w-10 h-10 text-sage-100" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
                            </svg>
                            <p className="text-charcoal text-lg leading-relaxed pl-8 mb-4">
                                {testimonials[active].quote}
                            </p>
                            <div className="pl-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-blue-50 text-warm-blue-700 text-sm font-medium">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {testimonials[active].highlight}
                            </div>
                        </blockquote>
                    </div>

                    {/* Side list */}
                    <div className="col-span-2 space-y-3">
                        {testimonials.map((t, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border ${active === i
                                        ? 'bg-white shadow-md border-sage-200 scale-[1.02]'
                                        : 'bg-white/50 border-transparent hover:bg-white hover:shadow-sm'
                                    }`}
                                aria-pressed={active === i}
                                aria-label={`Читать историю ${t.name}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold ${t.avatarBg}`}>
                                        {t.avatar}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-display font-semibold text-charcoal truncate">{t.name}</div>
                                        <div className="text-sm text-charcoal-light truncate">{t.role}</div>
                                    </div>
                                </div>
                                {active === i && (
                                    <p className="mt-3 text-sm text-charcoal-light line-clamp-2 leading-relaxed">
                                        {t.quote.substring(0, 100)}...
                                    </p>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile layout: Cards */}
                <div className="lg:hidden space-y-6">
                    {testimonials.map((t, i) => (
                        <article
                            key={i}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-sage-100/50"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold ${t.avatarBg}`}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="font-display font-semibold text-charcoal">{t.name}</div>
                                    <div className="text-sm text-charcoal-light">{t.role}</div>
                                </div>
                            </div>
                            <blockquote>
                                <p className="text-charcoal leading-relaxed text-sm mb-3">{t.quote}</p>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warm-blue-50 text-warm-blue-700 text-xs font-medium">
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    {t.highlight}
                                </div>
                            </blockquote>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
