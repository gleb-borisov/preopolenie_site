import { useState } from 'react'

const presetAmounts = [500, 1000, 2500, 5000]

export default function DonationForm() {
    const [amount, setAmount] = useState(1000)
    const [customAmount, setCustomAmount] = useState('')
    const [isMonthly, setIsMonthly] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const activeAmount = customAmount ? parseInt(customAmount) || 0 : amount

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
    }

    return (
        <section id="donate" className="py-20 sm:py-28 bg-gradient-to-br from-sage-800 via-sage-900 to-charcoal" aria-labelledby="donate-title">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left side — Motivation */}
                    <div className="text-white">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sage-200 text-sm font-semibold mb-6 tracking-wide border border-white/10">
                            Ваш вклад
                        </span>
                        <h2 id="donate-title" className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
                            Подарите ребёнку{' '}
                            <span className="bg-gradient-to-r from-sage-300 to-sand-300 bg-clip-text text-transparent">
                                шанс на будущее
                            </span>
                        </h2>
                        <p className="text-sage-200 text-lg leading-relaxed mb-8">
                            Ваше пожертвование — это не&nbsp;просто деньги. Это занятие с&nbsp;логопедом, новая развивающая игрушка,
                            час работы психолога. Это реальные изменения в&nbsp;жизни ребёнка.
                        </p>

                        {/* Impact examples */}
                        <div className="space-y-4">
                            {[
                                { amount: '500 ₽', impact: '— одно индивидуальное занятие с дефектологом' },
                                { amount: '1 000 ₽', impact: '— набор материалов для сенсорной терапии' },
                                { amount: '2 500 ₽', impact: '— неделя групповых занятий для одного ребёнка' },
                                { amount: '5 000 ₽', impact: '— полный месяц комплексной программы' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-sage-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-sage-100">
                                        <span className="font-semibold text-white">{item.amount}</span>{' '}
                                        <span className="text-sage-300">{item.impact}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side — Form */}
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/20">
                        {submitted ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sage-100 flex items-center justify-center">
                                    <svg className="w-10 h-10 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-display font-bold text-2xl text-charcoal mb-2">Спасибо за вашу поддержку!</h3>
                                <p className="text-charcoal-light">Вы помогаете детям делать важные шаги вперёд.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate>
                                <h3 className="font-display font-bold text-xl text-charcoal mb-6">Сделать пожертвование</h3>

                                {/* Recurring toggle */}
                                <div className="flex items-center p-1 bg-sage-50 rounded-xl mb-6" role="radiogroup" aria-label="Тип пожертвования">
                                    <button
                                        type="button"
                                        role="radio"
                                        aria-checked={!isMonthly}
                                        onClick={() => setIsMonthly(false)}
                                        className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${!isMonthly
                                                ? 'bg-white text-charcoal shadow-sm'
                                                : 'text-charcoal-light hover:text-charcoal'
                                            }`}
                                    >
                                        Разово
                                    </button>
                                    <button
                                        type="button"
                                        role="radio"
                                        aria-checked={isMonthly}
                                        onClick={() => setIsMonthly(true)}
                                        className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${isMonthly
                                                ? 'bg-white text-charcoal shadow-sm'
                                                : 'text-charcoal-light hover:text-charcoal'
                                            }`}
                                    >
                                        Ежемесячно
                                    </button>
                                </div>

                                {/* Amount buttons */}
                                <fieldset className="mb-6">
                                    <legend className="text-sm font-medium text-charcoal mb-3">Сумма пожертвования</legend>
                                    <div className="grid grid-cols-2 gap-3 mb-3">
                                        {presetAmounts.map((a) => (
                                            <button
                                                key={a}
                                                type="button"
                                                onClick={() => { setAmount(a); setCustomAmount('') }}
                                                className={`py-3 rounded-xl text-sm font-semibold transition-all duration-200 border-2 ${amount === a && !customAmount
                                                        ? 'border-warm-blue-500 bg-warm-blue-50 text-warm-blue-700'
                                                        : 'border-sage-100 bg-white text-charcoal hover:border-sage-300'
                                                    }`}
                                                aria-pressed={amount === a && !customAmount}
                                            >
                                                {a.toLocaleString('ru-RU')} ₽
                                            </button>
                                        ))}
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="number"
                                            placeholder="Другая сумма"
                                            value={customAmount}
                                            onChange={(e) => setCustomAmount(e.target.value)}
                                            className="w-full py-3 px-4 rounded-xl border-2 border-sage-100 bg-white text-charcoal placeholder:text-charcoal-light/50 focus:border-warm-blue-500 focus:ring-2 focus:ring-warm-blue-500/20 outline-none transition-all text-sm"
                                            aria-label="Произвольная сумма в рублях"
                                            min="1"
                                        />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-light text-sm">₽</span>
                                    </div>
                                </fieldset>

                                {/* Name + Email */}
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <label htmlFor="donor-name" className="block text-sm font-medium text-charcoal mb-1.5">Ваше имя</label>
                                        <input
                                            id="donor-name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className="w-full py-3 px-4 rounded-xl border-2 border-sage-100 bg-white text-charcoal focus:border-warm-blue-500 focus:ring-2 focus:ring-warm-blue-500/20 outline-none transition-all text-sm"
                                            placeholder="Иван Иванов"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="donor-email" className="block text-sm font-medium text-charcoal mb-1.5">Email</label>
                                        <input
                                            id="donor-email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full py-3 px-4 rounded-xl border-2 border-sage-100 bg-white text-charcoal focus:border-warm-blue-500 focus:ring-2 focus:ring-warm-blue-500/20 outline-none transition-all text-sm"
                                            placeholder="ivan@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="donor-message" className="block text-sm font-medium text-charcoal mb-1.5">
                                            Сообщение <span className="text-charcoal-light/50 font-normal">(необязательно)</span>
                                        </label>
                                        <textarea
                                            id="donor-message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            rows={2}
                                            className="w-full py-3 px-4 rounded-xl border-2 border-sage-100 bg-white text-charcoal focus:border-warm-blue-500 focus:ring-2 focus:ring-warm-blue-500/20 outline-none transition-all text-sm resize-none"
                                            placeholder="Ваше пожелание или комментарий"
                                        />
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-warm-blue-500 text-white font-semibold text-lg shadow-lg shadow-warm-blue-500/25 hover:bg-warm-blue-600 hover:shadow-warm-blue-500/40 transition-all duration-200 hover:-translate-y-0.5 focus:ring-2 focus:ring-warm-blue-500/50 focus:ring-offset-2 outline-none"
                                >
                                    {isMonthly ? 'Подписаться' : 'Пожертвовать'}{' '}
                                    {activeAmount > 0 && `${activeAmount.toLocaleString('ru-RU')} ₽`}
                                    {isMonthly && activeAmount > 0 && ' / мес'}
                                </button>

                                <p className="mt-4 text-xs text-center text-charcoal-light/60">
                                    Нажимая кнопку, вы соглашаетесь с{' '}
                                    <a href="#" className="underline hover:text-charcoal-light">политикой обработки данных</a>
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
