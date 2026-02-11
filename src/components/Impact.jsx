import { useState, useEffect, useRef } from 'react'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true
                    const start = performance.now()
                    const numericTarget = parseInt(target)

                    const animate = (now) => {
                        const elapsed = now - start
                        const progress = Math.min(elapsed / duration, 1)
                        const eased = 1 - Math.pow(1 - progress, 3)
                        setCount(Math.round(eased * numericTarget))
                        if (progress < 1) requestAnimationFrame(animate)
                    }
                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.3 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target, duration])

    return (
        <span ref={ref} className="tabular-nums">
            {count}{suffix}
        </span>
    )
}

const steps = [
    {
        num: '01',
        title: 'Знакомство',
        desc: 'Семья обращается в фонд. Мы проводим бесплатную консультацию и оценку потребностей ребёнка.',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" opacity="0.2" />
                <path d="M24 14c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 14c-4 0-12 2-12 6v2h24v-2c0-4-8-6-12-6z" fill="currentColor" opacity="0.7" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Диагностика',
        desc: 'Команда специалистов составляет индивидуальный план развития на основе комплексной оценки.',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" opacity="0.2" />
                <path d="M20 18h8v-2h-8v2zm0 4h8v-2h-8v2zm0 4h5v-2h-5v2zm-4 6h16V14H16v18zm2-16h12v14H18V16z" fill="currentColor" opacity="0.7" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Занятия',
        desc: 'Ребёнок посещает индивидуальные и групповые занятия с логопедами, дефектологами и психологами.',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" opacity="0.2" />
                <path d="M24 14l-10 8h4v10h12V22h4l-10-8zm-4 16v-8h8v8h-8z" fill="currentColor" opacity="0.7" />
            </svg>
        ),
    },
    {
        num: '04',
        title: 'Результат',
        desc: 'Маленькие победы каждый день — новые навыки, дружба, уверенность в себе и радость от достижений.',
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" opacity="0.2" />
                <path d="M24 14l2.5 5 5.5.8-4 3.9.9 5.3-4.9-2.6L19.1 29l.9-5.3-4-3.9 5.5-.8L24 14z" fill="currentColor" opacity="0.7" />
            </svg>
        ),
    },
]

const stats = [
    { value: '150', suffix: '+', label: 'детей получили помощь', color: 'text-sage-600' },
    { value: '12', suffix: '+', label: 'лет работы фонда', color: 'text-warm-blue-600' },
    { value: '5', suffix: '', label: 'специалистов в команде', color: 'text-sand-600' },
    { value: '300', suffix: '+', label: 'семей поддержаны', color: 'text-sage-600' },
    { value: '92', suffix: '%', label: 'родителей видят прогресс', color: 'text-warm-blue-600' },
    { value: '8', suffix: '', label: 'направлений помощи', color: 'text-sand-600' },
]

export default function Impact() {
    return (
        <section id="impact" className="py-20 sm:py-28 bg-cream" aria-labelledby="impact-title">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-sm font-semibold mb-4 tracking-wide">
                        Наше влияние
                    </span>
                    <h2 id="impact-title" className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-5">
                        Как мы работаем
                    </h2>
                    <p className="text-charcoal-light text-lg leading-relaxed">
                        Каждый ребёнок уникален, поэтому путь к&nbsp;развитию начинается с&nbsp;индивидуального подхода
                        и&nbsp;завершается реальными результатами.
                    </p>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-sage-100/50"
                        >
                            <div className={`text-3xl sm:text-4xl font-display font-bold mb-1 ${stat.color}`}>
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-sm text-charcoal-light">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Process steps */}
                <div className="relative">
                    {/* Connecting line (desktop) */}
                    <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-sage-200 via-warm-blue-200 to-sand-200" aria-hidden="true" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="relative group">
                                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full border border-sage-100/50">
                                    {/* Step number */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="text-sage-500 group-hover:text-warm-blue-500 transition-colors">
                                            {step.icon}
                                        </div>
                                        <span className="text-5xl font-display font-bold text-sage-100 group-hover:text-warm-blue-100 transition-colors">
                                            {step.num}
                                        </span>
                                    </div>
                                    <h3 className="font-display font-bold text-xl text-charcoal mb-3">{step.title}</h3>
                                    <p className="text-charcoal-light leading-relaxed text-sm">{step.desc}</p>
                                </div>

                                {/* Arrow between cards (mobile) */}
                                {i < steps.length - 1 && (
                                    <div className="flex justify-center py-4 lg:hidden" aria-hidden="true">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9d3c1" strokeWidth="2">
                                            <path d="M12 5v14M7 14l5 5 5-5" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
