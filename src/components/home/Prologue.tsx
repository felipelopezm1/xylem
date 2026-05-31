import Wrap from '../layout/Wrap'
import { Trans } from '../../contexts/LanguageContext'

export default function Prologue() {
  return (
    <section className="block prologue">
      <Wrap className="reveal">
        <p className="eyebrow" style={{ textAlign: 'center', marginBottom: 34 }}>
          <Trans k="pro.eye" />
        </p>
        <p className="big cursor-invert-target">
          <Trans k="pro.big" />
        </p>
        <p className="sig cursor-invert-target">
          <Trans k="pro.sig" />
        </p>
      </Wrap>
    </section>
  )
}
