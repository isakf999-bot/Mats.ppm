import logotype from '../../assets/logotype.png'
import './Logo.css'

interface LogoProps {
  /** 'dark' = för ljus bakgrund (loggan som den är). 'light' = för mörk bakgrund (renderas vit). */
  variant?: 'dark' | 'light'
}

/**
 * Officiell logga (M-monogram + "FOR THE FUTURE BY MATS · ETABLERAT 2010").
 * På mörk bakgrund görs loggan vit via CSS-filter för läsbarhet.
 */
export default function Logo({ variant = 'dark' }: LogoProps) {
  return (
    <span className={`logo logo--${variant}`}>
      <img
        className="logo__img"
        src={logotype}
        alt="For The Future by Mats – etablerat 2010"
        width={406}
        height={295}
      />
    </span>
  )
}
