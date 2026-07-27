/**
 * On-brand linjediagram för PPM – totalt värde över tid.
 * Värdena är avlästa från Mats tidigare diagram (historisk-utveckling) och
 * ska verifieras mot exakta siffror – justera bara DATA nedan vid behov.
 */

type Point = { year: number; value: number } // value i miljoner kr

const DATA: Point[] = [
  { year: 2010, value: 0.68 },
  { year: 2011, value: 0.54 },
  { year: 2012, value: 0.54 },
  { year: 2013, value: 0.64 },
  { year: 2014, value: 0.8 },
  { year: 2015, value: 0.92 },
  { year: 2016, value: 1.2 },
  { year: 2017, value: 1.4 },
  { year: 2018, value: 1.52 },
  { year: 2019, value: 1.95 },
  { year: 2020, value: 2.05 },
  { year: 2021, value: 1.85 },
  { year: 2022, value: 1.92 },
  { year: 2023, value: 1.82 },
  { year: 2024, value: 2.03 },
  { year: 2025, value: 2.45 },
  { year: 2026, value: 2.8 },
]

const W = 660
const H = 360
const PAD_L = 60
const PAD_R = 40
const PAD_T = 40
const PAD_B = 60
const Y_MAX = 3

const plotW = W - PAD_L - PAD_R
const plotH = H - PAD_T - PAD_B

const x = (i: number) => PAD_L + (i * plotW) / (DATA.length - 1)
const y = (v: number) => PAD_T + plotH - (v / Y_MAX) * plotH

export default function ValueChart() {
  const linePath = DATA.map((d, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(d.value).toFixed(1)}`).join(' ')
  const areaPath = `${linePath} L${x(DATA.length - 1).toFixed(1)},${(PAD_T + plotH).toFixed(1)} L${PAD_L},${(PAD_T + plotH).toFixed(1)} Z`
  const gridValues = [0, 1, 2, 3]
  const xTicks = [2010, 2014, 2018, 2022, 2026]

  return (
    <svg className="stat__chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Linjediagram: PPM totalt värde ökar från cirka 0,7 till 2,8 miljoner kronor mellan 2010 och 2026">
      <defs>
        <linearGradient id="vc-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16294d" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#16294d" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="vc-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f2a81d" />
          <stop offset="100%" stopColor="#f7c65a" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={W} height={H} rx="14" fill="#fbfbfd" />

      {/* Chip */}
      <g>
        <rect x={PAD_L} y="14" width="168" height="26" rx="13" fill="#16294d" />
        <circle cx={PAD_L + 17} cy="27" r="5" fill="#f2a81d" />
        <text x={PAD_L + 30} y="31" fill="#ffffff" fontFamily="Poppins, sans-serif" fontSize="11.5" fontWeight="600">
          PPM · totalt värde
        </text>
      </g>

      {/* Rutnät + y-etiketter */}
      <g fontFamily="Inter, sans-serif" fontSize="11" fill="#8a8a97">
        {gridValues.map((v) => (
          <g key={v}>
            <line x1={PAD_L} y1={y(v)} x2={W - PAD_R} y2={y(v)} stroke="#16294d" strokeOpacity={v === 0 ? 0.18 : 0.07} strokeWidth={v === 0 ? 1.5 : 1} />
            <text x={PAD_L - 12} y={y(v) + 4} textAnchor="end">{v === Y_MAX ? `${v} Mkr` : v}</text>
          </g>
        ))}
      </g>

      {/* Area + linje */}
      <path d={areaPath} fill="url(#vc-area)" />
      <path d={linePath} fill="none" stroke="url(#vc-line)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />

      {/* Datapunkter */}
      <g fill="#ffffff" stroke="#f2a81d" strokeWidth="3">
        {DATA.map((d) => (
          <circle key={d.year} cx={x(DATA.indexOf(d))} cy={y(d.value)} r="3.5" />
        ))}
      </g>

      {/* x-etiketter */}
      <g fontFamily="Inter, sans-serif" fontSize="11" fill="#8a8a97" textAnchor="middle">
        {xTicks.map((yr) => {
          const idx = DATA.findIndex((d) => d.year === yr)
          return (
            <text key={yr} x={x(idx)} y={PAD_T + plotH + 24}>{yr}</text>
          )
        })}
      </g>
    </svg>
  )
}
