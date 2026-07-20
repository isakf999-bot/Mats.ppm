import logotype from '../../assets/logotype.png'
import logotypeMark from '../../assets/logotype-mark.png'
import './Logo.css'

interface LogoProps {
  /** 'dark' = för ljus bakgrund (loggan som den är). 'light' = för mörk bakgrund (renderas vit/guld). */
  variant?: 'dark' | 'light'
  /** true = visa endast M-monogrammet (utan textdelen). */
  markOnly?: boolean
}

/**
 * Officiell logga (M-monogram + "FOR THE FUTURE BY MATS · ETABLERAT 2010").
 * markOnly visar bara monogrammet så det kan renderas större.
 * På mörk bakgrund görs loggan guld via CSS-filter för läsbarhet.
 */
export default function Logo({ variant = 'dark', markOnly = false }: LogoProps) {
  return (
    <span className={`logo logo--${variant} ${markOnly ? 'logo--mark' : ''}`}>
      <img
        className="logo__img"
        src={markOnly ? logotypeMark : logotype}
        alt="For The Future by Mats – etablerat 2010"
        width={markOnly ? 213 : 406}
        height={markOnly ? 205 : 295}
      />
    </span>
  )
}
