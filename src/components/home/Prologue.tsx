import Wrap from '../layout/Wrap'
import { Trans } from '../../contexts/LanguageContext'

export default function Prologue() {
  return (
    <section className="block prologue" id="prologue">
      <Wrap className="reveal">
        <Trans
          k="pro.eye"
          className="eyebrow"
          style={{ textAlign: 'center', marginBottom: 34, display: 'block' }}
          interactive={false}
        />
        <Trans k="pro.big" className="big" as="p" />
        <Trans k="pro.sig" className="sig" interactive={false} as="p" />
      </Wrap>
    </section>
  )
}
