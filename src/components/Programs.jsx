const programs = [
    {
        title: 'Первые шаги',
        age: '0–6 лет',
        description:
            'Программа ранней помощи для малышей и их семей. Индивидуальные занятия с дефектологом и логопедом, сенсорная интеграция, развитие моторики и коммуникативных навыков.',
        details: [
            'Индивидуальные занятия 3 раза в неделю',
            'Консультации для родителей',
            'Сенсорная комната и адаптивное оборудование',
            'Группы раннего развития',
        ],
        image: '/images/program-first-steps.jpg',
        imageAlt: 'Ребёнок в игровой комнате с развивающими игрушками',
        color: 'sage',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
                <circle cx="20" cy="12" r="6" fill="currentColor" opacity="0.3" />
                <path d="M20 20c-6 0-10 3-10 6v4h20v-4c0-3-4-6-10-6z" fill="currentColor" opacity="0.5" />
                <circle cx="20" cy="12" r="4" fill="currentColor" />
            </svg>
        ),
    },
    {
        title: 'Мир вокруг',
        age: '7–14 лет',
        description:
            'Программа социализации и развития жизненных навыков. Групповые занятия, творческие мастерские, спортивные секции и подготовка к школьному обучению.',
        details: [
            'Творческие мастерские и арт-терапия',
            'Адаптивная физкультура и спорт',
            'Навыки самообслуживания',
            'Подготовка к инклюзивному обучению',
        ],
        image: '/images/program-world-around.jpg',
        imageAlt: 'Дети рисуют вместе за столом в светлой комнате',
        color: 'warm-blue',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
                <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2" opacity="0.2" />
                <circle cx="14" cy="16" r="3" fill="currentColor" opacity="0.5" />
                <circle cx="26" cy="16" r="3" fill="currentColor" opacity="0.5" />
                <path d="M14 24c0 0 3 4 6 4s6-4 6-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
        ),
    },
    {
        title: 'Свой путь',
        age: '15–18 лет',
        description:
            'Программа подготовки к самостоятельной жизни. Профориентация, трудовые мастерские, обучение бытовым навыкам и сопровождаемое проживание.',
        details: [
            'Профориентация и стажировки',
            'Кулинарная и столярная мастерские',
            'Навыки финансовой грамотности',
            'Программа сопровождаемого проживания',
        ],
        image: '/images/program-own-path.jpg',
        imageAlt: 'Подросток работает в мастерской с наставником',
        color: 'sand',
        icon: (
            <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10" aria-hidden="true">
                <path d="M20 6l-14 10h6v14h16V16h6L20 6z" fill="currentColor" opacity="0.2" />
                <path d="M20 10l-10 7h4v10h12V17h4L20 10z" fill="currentColor" opacity="0.6" />
                <rect x="17" y="22" width="6" height="5" rx="1" fill="currentColor" />
            </svg>
        ),
    },
]

const colorMap = {
    sage: {
        badge: 'bg-sage-100 text-sage-700',
        icon: 'text-sage-500',
        border: 'group-hover:border-sage-300',
        gradient: 'from-sage-500 to-sage-600',
        bullet: 'bg-sage-400',
    },
    'warm-blue': {
        badge: 'bg-warm-blue-100 text-warm-blue-700',
        icon: 'text-warm-blue-500',
        border: 'group-hover:border-warm-blue-300',
        gradient: 'from-warm-blue-500 to-warm-blue-600',
        bullet: 'bg-warm-blue-400',
    },
    sand: {
        badge: 'bg-sand-100 text-sand-700',
        icon: 'text-sand-600',
        border: 'group-hover:border-sand-300',
        gradient: 'from-sand-500 to-sand-600',
        bullet: 'bg-sand-400',
    },
}

export default function Programs() {
    return (
        <section id="programs" className="py-20 sm:py-28 bg-white" aria-labelledby="programs-title">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-warm-blue-100 text-warm-blue-700 text-sm font-semibold mb-4 tracking-wide">
                        Наши программы
                    </span>
                    <h2 id="programs-title" className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-5">
                        Три ступени развития
                    </h2>
                    <p className="text-charcoal-light text-lg leading-relaxed">
                        Наши программы охватывают все этапы взросления — от&nbsp;раннего детства
                        до&nbsp;подготовки к&nbsp;самостоятельной жизни.
                    </p>
                </div>

                {/* Program cards */}
                <div className="space-y-8 lg:space-y-12">
                    {programs.map((program, i) => {
                        const colors = colorMap[program.color]
                        const isReversed = i % 2 === 1

                        return (
                            <article
                                key={i}
                                className={`group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl bg-cream p-6 sm:p-8 lg:p-10 border border-transparent ${colors.border} transition-all duration-300`}
                            >
                                {/* Image */}
                                <div className={`relative overflow-hidden rounded-2xl ${isReversed ? 'lg:order-2' : ''}`}>
                                    <img
                                        src={program.image}
                                        alt={program.imageAlt}
                                        className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${colors.gradient} shadow-lg`}>
                                        {program.age}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={isReversed ? 'lg:order-1' : ''}>
                                    <div className={`inline-block mb-4 ${colors.icon}`}>
                                        {program.icon}
                                    </div>
                                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-charcoal mb-2">
                                        {program.title}
                                    </h3>
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${colors.badge}`}>
                                        {program.age}
                                    </span>
                                    <p className="text-charcoal-light leading-relaxed mb-6">
                                        {program.description}
                                    </p>
                                    <ul className="space-y-3" role="list">
                                        {program.details.map((detail, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <span className={`mt-2 w-2 h-2 rounded-full ${colors.bullet} shrink-0`} aria-hidden="true" />
                                                <span className="text-charcoal-light text-sm">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
