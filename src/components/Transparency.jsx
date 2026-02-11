const segments = [
    { label: 'Программы помощи', percent: 55, color: '#7A8B6F', colorClass: 'bg-sage-500' },
    { label: 'Специалисты', percent: 25, color: '#5B7FA5', colorClass: 'bg-warm-blue-500' },
    { label: 'Оборудование', percent: 12, color: '#C4A97D', colorClass: 'bg-sand-400' },
    { label: 'Администрирование', percent: 8, color: '#90aecb', colorClass: 'bg-warm-blue-300' },
]

function DonutChart() {
    const radius = 80
    const circumference = 2 * Math.PI * radius
    let cumulativeOffset = 0

    return (
        <div className="relative w-64 h-64 mx-auto">
            <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90" role="img" aria-label="Диаграмма распределения пожертвований">
                {segments.map((seg, i) => {
                    const dashLength = (seg.percent / 100) * circumference
                    const dashGap = circumference - dashLength
                    const offset = cumulativeOffset
                    cumulativeOffset += dashLength

                    return (
                        <circle
                            key={i}
                            cx="100"
                            cy="100"
                            r={radius}
                            fill="none"
                            stroke={seg.color}
                            strokeWidth="28"
                            strokeDasharray={`${dashLength} ${dashGap}`}
                            strokeDashoffset={-offset}
                            className="transition-all duration-700"
                            strokeLinecap="butt"
                        />
                    )
                })}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-display font-bold text-charcoal">100%</span>
                <span className="text-sm text-charcoal-light">прозрачность</span>
            </div>
        </div>
    )
}

export default function Transparency() {
    return (
        <section id="transparency" className="py-20 sm:py-28 bg-white" aria-labelledby="transparency-title">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-sage-100 text-sage-700 text-sm font-semibold mb-4 tracking-wide">
                        Прозрачность
                    </span>
                    <h2 id="transparency-title" className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-5">
                        Куда идут ваши пожертвования
                    </h2>
                    <p className="text-charcoal-light text-lg leading-relaxed">
                        Мы ценим ваше доверие. Каждый рубль направляется на&nbsp;конкретную помощь,
                        а&nbsp;финансовые отчёты публикуются ежеквартально.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Donut chart */}
                    <div>
                        <DonutChart />

                        {/* Legend */}
                        <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
                            {segments.map((seg, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={`w-4 h-4 rounded-sm ${seg.colorClass} shrink-0`} aria-hidden="true" />
                                    <div>
                                        <span className="text-sm font-medium text-charcoal">{seg.percent}%</span>
                                        <span className="text-sm text-charcoal-light ml-1">{seg.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details cards */}
                    <div className="space-y-4">
                        {segments.map((seg, i) => (
                            <div
                                key={i}
                                className="bg-cream rounded-2xl p-6 border border-sage-100/50 hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-display font-semibold text-lg text-charcoal">{seg.label}</h3>
                                    <span className="text-2xl font-display font-bold text-charcoal">{seg.percent}%</span>
                                </div>
                                {/* Progress bar */}
                                <div className="w-full h-2 bg-sage-100 rounded-full overflow-hidden" role="progressbar" aria-valuenow={seg.percent} aria-valuemin={0} aria-valuemax={100} aria-label={`${seg.label}: ${seg.percent}%`}>
                                    <div
                                        className="h-full rounded-full transition-all duration-700"
                                        style={{ width: `${seg.percent}%`, backgroundColor: seg.color }}
                                    />
                                </div>
                                <p className="mt-3 text-sm text-charcoal-light leading-relaxed">
                                    {i === 0 && 'Оплата занятий, методических материалов, аренды помещений для проведения программ.'}
                                    {i === 1 && 'Зарплаты логопедов, дефектологов, психологов, тренеров и других специалистов.'}
                                    {i === 2 && 'Закупка развивающего оборудования, сенсорных материалов и адаптивных устройств.'}
                                    {i === 3 && 'Бухгалтерия, юридическое сопровождение, поддержка сайта и коммуникации.'}
                                </p>
                            </div>
                        ))}

                        {/* Trust badge */}
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-sage-50 border border-sage-200">
                            <svg className="w-8 h-8 text-sage-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                            </svg>
                            <div>
                                <div className="text-sm font-semibold text-charcoal">Аудированная отчётность</div>
                                <div className="text-xs text-charcoal-light">Ежеквартальные отчёты доступны на сайте Минюста</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
