import Wrap from '../layout/Wrap'
import { Trans } from '../../contexts/LanguageContext'

export default function CodeSection() {
  return (
    <section className="block" id="code">
      <Wrap>
        <div className="head reveal">
          <span className="num-tag">00</span>
          <Trans k="code.eye" className="eyebrow" interactive={false} />
        </div>
        <Trans k="code.title" className="sec-title reveal" as="h2" />
        <div className="split" style={{ marginTop: 50 }}>
          <div className="reveal">
            <Trans k="code.lead" className="lead" as="p" />
            <Trans k="code.p1" className="body-copy" as="p" />
            <Trans k="code.p2" className="body-copy" as="p" />
          </div>
          <div className="term reveal">
            <div className="bar">
              <i />
              <i />
              <i />
              <span>principles.md</span>
            </div>
            <div className="body">
              <span className="d"># principles for co-evolution</span>
              {'\n'}
              <span className="k">relation</span>
              {'     : intelligence is distributed & situated\n'}
              <span className="k">interpretation</span>
              {': meaning is enacted, not stored\n'}
              <span className="k">adaptation</span>
              {'   : local rules → global organisation\n'}
              <span className="k">responsibility</span>
              {': cooperation ≠ domination\n'}
              <span className="k">care</span>
              {'         : assistance ≠ dependency\n\n'}
              <span className="c">&gt; &quot;in the presence of a complex pattern</span>
              {'\n'}
              <span className="c">   there is a good chance that a very</span>
              {'\n'}
              <span className="c">   simple process is responsible for it.&quot;</span>
              {'\n'}
              <span className="d">  — Peitgen, Jürgens & Saupe</span>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  )
}
