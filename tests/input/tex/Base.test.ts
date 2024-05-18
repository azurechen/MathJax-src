import { beforeEach, describe, it } from '@jest/globals';
import { toXmlMatch } from '../../src/xmlMatch';
import { setupTex, tex2mml } from '../../src/setupTex';

beforeEach(() => setupTex(["base"]));

describe('Base', () => {
  it('Identifier', () => toXmlMatch(tex2mml("x"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x\" display=\"block\">\n  <mi data-latex=\"x\">x</mi>\n</math>"
  ));
  it('Identifier Font', () => toXmlMatch(tex2mml("\\mathbf{x}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mathbf{x}\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\mathbf{x}\">\n    <mi mathvariant=\"bold\" data-latex=\"x\">x</mi>\n  </mrow>\n</math>"
  ));
  it('Two Identifiers', () => toXmlMatch(tex2mml("xy"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"xy\" display=\"block\">\n  <mi data-latex=\"x\">x</mi>\n  <mi data-latex=\"y\">y</mi>\n</math>"
  ));
  it('Prime', () => toXmlMatch(tex2mml("x'"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x'\" display=\"block\">\n  <msup data-latex=\"x'\">\n    <mi data-latex=\"x\">x</mi>\n    <mo data-mjx-alternate=\"1\" data-latex=\"'\">&#x2032;</mo>\n  </msup>\n</math>"
  ));
  it('PrimeSup', () => toXmlMatch(tex2mml("x^{'}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x^{'}\" display=\"block\">\n  <msup data-latex=\"x^{'}\">\n    <mi data-latex=\"x\">x</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n      <msup>\n        <mi></mi>\n        <mo data-mjx-alternate=\"1\" data-latex=\"'\">&#x2032;</mo>\n      </msup>\n    </mrow>\n  </msup>\n</math>"
  ));
  it('Double Prime', () => toXmlMatch(tex2mml("x''"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x''\" display=\"block\">\n  <msup data-latex=\"x''\">\n    <mi data-latex=\"x\">x</mi>\n    <mo data-mjx-alternate=\"1\" data-latex=\"'\">&#x2033;</mo>\n  </msup>\n</math>"
  ));
  it('PrePrime', () => toXmlMatch(tex2mml("'x"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"'x\" display=\"block\">\n  <msup>\n    <mi></mi>\n    <mo data-mjx-alternate=\"1\" data-latex=\"'\">&#x2032;</mo>\n  </msup>\n  <mi data-latex=\"x\">x</mi>\n</math>"
  ));
  it('Prime with subscript', () => toXmlMatch(tex2mml("x^'_{3}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x^'_{3}\" display=\"block\">\n  <merror data-mjx-error=\"Missing open brace for superscript\">\n    <mtext>Missing open brace for superscript</mtext>\n  </merror>\n</math>"
  ));
  it('Prime on Sub', () => toXmlMatch(tex2mml("x^{'_{a}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x^{'_{a}}\" display=\"block\">\n  <msup data-latex=\"x^{'_{a}}\">\n    <mi data-latex=\"x\">x</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{undefined^'_{a}}\">\n      <msubsup data-latex=\"undefined^'_{a}\">\n        <mi></mi>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{a}\">\n          <mi data-latex=\"a\">a</mi>\n        </mrow>\n        <mo data-mjx-alternate=\"1\" data-latex=\"'\">&#x2032;</mo>\n      </msubsup>\n    </mrow>\n  </msup>\n</math>"
  ));
  it('Prime on Sup', () => toXmlMatch(tex2mml("x^{a^{'}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x^{a^{'}}\" display=\"block\">\n  <msup data-latex=\"x^{a^{'}}\">\n    <mi data-latex=\"x\">x</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{a^{}}\">\n      <msup data-latex=\"a^{}\">\n        <mi data-latex=\"a\">a</mi>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n          <msup>\n            <mi></mi>\n            <mo data-mjx-alternate=\"1\" data-latex=\"'\">&#x2032;</mo>\n          </msup>\n        </mrow>\n      </msup>\n    </mrow>\n  </msup>\n</math>"
  ));
  it('Sup on Prime', () => toXmlMatch(tex2mml("x^{'^{a}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x^{'^{a}}\" display=\"block\">\n  <msup data-latex=\"x^{'^{a}}\">\n    <mi data-latex=\"x\">x</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{undefined^{}}\">\n      <msup data-latex=\"undefined^{}\">\n        <mi></mi>\n        <mrow data-latex=\"{}\">\n          <mo data-mjx-alternate=\"1\" data-mjx-pseudoscript=\"true\" data-latex=\"'\">&#x2032;</mo>\n          <mrow data-mjx-texclass=\"ORD\">\n            <mi data-latex=\"a\">a</mi>\n          </mrow>\n        </mrow>\n      </msup>\n    </mrow>\n  </msup>\n</math>"
  ));
  it('Prime on Prime', () => toXmlMatch(tex2mml("x^{'^{'}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x^{'^{'}}\" display=\"block\">\n  <msup data-latex=\"x^{'^{'}}\">\n    <mi data-latex=\"x\">x</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{undefined^{}}\">\n      <msup data-latex=\"undefined^{}\">\n        <mi></mi>\n        <mrow data-latex=\"{}\">\n          <mo data-mjx-alternate=\"1\" data-mjx-pseudoscript=\"true\" data-latex=\"'\">&#x2032;</mo>\n          <mrow data-mjx-texclass=\"ORD\">\n            <msup>\n              <mi></mi>\n              <mo data-mjx-alternate=\"1\" data-latex=\"'\">&#x2032;</mo>\n            </msup>\n          </mrow>\n        </mrow>\n      </msup>\n    </mrow>\n  </msup>\n</math>"
  ));
  it('Over', () => toXmlMatch(tex2mml("1 \\over 2"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"1 \\over 2\" display=\"block\">\n  <mfrac data-latex-item=\"\\over\" data-latex=\"1 \\over 2\">\n    <mn data-latex=\"1\">1</mn>\n    <mn data-latex=\"2\">2</mn>\n  </mfrac>\n</math>"
  ));
  it('Above', () => toXmlMatch(tex2mml("a \\above 1pt b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a \\above 1pt b\" display=\"block\">\n  <mfrac linethickness=\"1pt\" data-latex-item=\"\\above\" data-latex=\"a \\above 1pt b\">\n    <mi data-latex=\"a\">a</mi>\n    <mi data-latex=\"b\">b</mi>\n  </mfrac>\n</math>"
  ));
  it('Style', () => toXmlMatch(tex2mml("\\scriptscriptstyle a"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\scriptscriptstyle a\" display=\"block\">\n  <mstyle displaystyle=\"false\" scriptlevel=\"2\" data-latex=\"\\scriptscriptstyle a\">\n    <mi data-latex=\"a\">a</mi>\n  </mstyle>\n</math>"
  ));
  it('Named Function', () => toXmlMatch(tex2mml("\\sin x"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sin x\" display=\"block\">\n  <mi data-latex=\"\\sin\">sin</mi>\n  <mo data-mjx-texclass=\"NONE\">&#x2061;</mo>\n  <mi data-latex=\"x\">x</mi>\n</math>"
  ));
  it('Named Function Arg', () => toXmlMatch(tex2mml("\\sin(x)"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sin(x)\" display=\"block\">\n  <mi data-latex=\"\\sin\">sin</mi>\n  <mo data-mjx-texclass=\"NONE\">&#x2061;</mo>\n  <mo data-latex=\"(\" stretchy=\"false\">(</mo>\n  <mi data-latex=\"x\">x</mi>\n  <mo data-latex=\")\" stretchy=\"false\">)</mo>\n</math>"
  ));
  it('Fn Pos Space', () => toXmlMatch(tex2mml("\\sin\\quad x"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sin\\quad x\" display=\"block\">\n  <mi data-latex=\"\\sin\">sin</mi>\n  <mstyle scriptlevel=\"0\" data-latex=\"\\quad\">\n    <mspace width=\"1em\"></mspace>\n  </mstyle>\n  <mi data-latex=\"x\">x</mi>\n</math>"
  ));
  it('Fn Neg Space', () => toXmlMatch(tex2mml("\\sin\\! x"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sin\\! x\" display=\"block\">\n  <mi data-latex=\"\\sin\">sin</mi>\n  <mstyle scriptlevel=\"0\" data-latex=\"\\!\">\n    <mspace width=\"-0.167em\"></mspace>\n  </mstyle>\n  <mi data-latex=\"x\">x</mi>\n</math>"
  ));
  it('Fn Stretchy', () => toXmlMatch(tex2mml("\\sin \\left(\\right)"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sin \\left(\\right)\" display=\"block\">\n  <mi data-latex=\"\\sin\">sin</mi>\n  <mo data-mjx-texclass=\"NONE\">&#x2061;</mo>\n  <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left(\\right)\" data-latex=\"\\left(\\right)\">\n    <mo data-mjx-texclass=\"OPEN\" data-latex-item=\"\\left(\" data-latex=\"\\left(\">(</mo>\n    <mo data-mjx-texclass=\"CLOSE\" data-latex-item=\"\\right)\" data-latex=\"\\right)\">)</mo>\n  </mrow>\n</math>"
  ));
  it('Fn Operator', () => toXmlMatch(tex2mml("\\sin +"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sin +\" display=\"block\">\n  <mi data-latex=\"\\sin\">sin</mi>\n  <mo data-latex=\"+\">+</mo>\n</math>"
  ));
  it('Square Root', () => toXmlMatch(tex2mml("\\sqrt{x}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sqrt{x}\" display=\"block\">\n  <msqrt data-latex=\"\\sqrt{x}\">\n    <mi data-latex=\"x\">x</mi>\n  </msqrt>\n</math>"
  ));
  it('Nth Root', () => toXmlMatch(tex2mml("\\sqrt[n]{x}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sqrt[n]{x}\" display=\"block\">\n  <mroot data-latex=\"\\sqrt[n]{x}\">\n    <mi data-latex=\"x\">x</mi>\n    <mi data-latex=\"n\">n</mi>\n  </mroot>\n</math>"
  ));
  it('Explicit Root', () => toXmlMatch(tex2mml("\\root 4 \\of x"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\root 4 \\of x\" display=\"block\">\n  <mroot data-latex=\"\\root 4 \\of x\">\n    <mi data-latex=\"x\">x</mi>\n    <mn data-latex=\"4\">4</mn>\n  </mroot>\n</math>"
  ));
  it('Tweaked Root', () => toXmlMatch(tex2mml("\\sqrt[\\leftroot{-2}\\uproot{2}\\beta]{k}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sqrt[\\leftroot{-2}\\uproot{2}\\beta]{k}\" display=\"block\">\n  <mroot data-latex=\"\\sqrt[\\leftroot{-2}\\uproot{2}\\beta]{k}\">\n    <mi data-latex=\"k\">k</mi>\n    <mpadded width=\"-0.13333333333333333em\" voffset=\"+0.13333333333333333em\" height=\"+0.13333333333333333em\">\n      <mi data-latex=\"\\leftroot{-2}\\uproot{2}\\beta\">&#x3B2;</mi>\n    </mpadded>\n  </mroot>\n</math>"
  ));
  it('Negation Simple', () => toXmlMatch(tex2mml("a \\not= b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a \\not= b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"=\">&#x2260;</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Negation Complex', () => toXmlMatch(tex2mml("a \\not= b \\not\\rightarrow c \\not\\leq d"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a \\not= b \\not\\rightarrow c \\not\\leq d\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"=\">&#x2260;</mo>\n  <mi data-latex=\"b\">b</mi>\n  <mo data-latex=\"\\rightarrow\">&#x219B;</mo>\n  <mi data-latex=\"c\">c</mi>\n  <mo data-latex=\"\\leq\">&#x2270;</mo>\n  <mi data-latex=\"d\">d</mi>\n</math>"
  ));
  it('Negation Explicit', () => toXmlMatch(tex2mml(" \\not\\longrightarrow"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\" \\not\\longrightarrow\" display=\"block\">\n  <mo data-latex=\" \\not\\longrightarrow\">&#x27F6;&#x338;</mo>\n</math>"
  ));
  it('Negation Large', () => toXmlMatch(tex2mml(" \\not3"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\" \\not3\" display=\"block\">\n  <mrow data-mjx-texclass=\"REL\">\n    <mpadded width=\"0\">\n      <mtext>&#x29F8;</mtext>\n    </mpadded>\n  </mrow>\n  <mn data-latex=\"3\">3</mn>\n</math>"
  ));
  it('Negation Left Paren', () => toXmlMatch(tex2mml("\\not\\left(\\right."),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\not\\left(\\right.\" display=\"block\">\n  <mrow data-mjx-texclass=\"REL\">\n    <mpadded width=\"0\">\n      <mtext>&#x29F8;</mtext>\n    </mpadded>\n  </mrow>\n  <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left(\\right.\" data-latex=\"\\left(\\right.\">\n    <mo data-mjx-texclass=\"OPEN\" data-latex-item=\"\\left(\" data-latex=\"\\left(\">(</mo>\n    <mo data-mjx-texclass=\"CLOSE\" fence=\"true\" stretchy=\"true\" symmetric=\"true\" data-latex-item=\"\\right.\" data-latex=\"\\right.\"></mo>\n  </mrow>\n</math>"
  ));
  it('Greek', () => toXmlMatch(tex2mml("\\alpha"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\alpha\" display=\"block\">\n  <mi data-latex=\"\\alpha\">&#x3B1;</mi>\n</math>"
  ));
  it('Large Set', () => toXmlMatch(tex2mml("\\bigcup"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\bigcup\" display=\"block\">\n  <mo data-latex=\"\\bigcup\">&#x22C3;</mo>\n</math>"
  ));
  it('MathChar0 Operator', () => toXmlMatch(tex2mml("\\Rightarrow"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\Rightarrow\" display=\"block\">\n  <mo stretchy=\"false\" data-latex=\"\\Rightarrow\">&#x21D2;</mo>\n</math>"
  ));
  it('MathChar7 Single', () => toXmlMatch(tex2mml("\\Upsilon"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\Upsilon\" display=\"block\">\n  <mi mathvariant=\"normal\" data-latex=\"\\Upsilon\">&#x3A5;</mi>\n</math>"
  ));
  it('MathChar7 Single Font', () => toXmlMatch(tex2mml("\\mathbf{\\Upsilon}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mathbf{\\Upsilon}\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\mathbf{\\Upsilon}\">\n    <mi mathvariant=\"bold\" data-latex=\"\\Upsilon\">&#x3A5;</mi>\n  </mrow>\n</math>"
  ));
  it('MathChar7 Operator', () => toXmlMatch(tex2mml("\\And"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\And\" display=\"block\">\n  <mi mathvariant=\"normal\" data-latex=\"\\And\">&amp;</mi>\n</math>"
  ));
  it('MathChar7 Multi', () => toXmlMatch(tex2mml("\\Lambda \\& \\Gamma \\Rightarrow \\Omega\\And\\Upsilon"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\Lambda \\&amp; \\Gamma \\Rightarrow \\Omega\\And\\Upsilon\" display=\"block\">\n  <mi mathvariant=\"normal\" data-latex=\"\\Lambda\">&#x39B;</mi>\n  <mi mathvariant=\"normal\" data-latex=\"\\&amp;\">&amp;</mi>\n  <mi mathvariant=\"normal\" data-latex=\"\\Gamma\">&#x393;</mi>\n  <mo stretchy=\"false\" data-latex=\"\\Rightarrow\">&#x21D2;</mo>\n  <mi mathvariant=\"normal\" data-latex=\"\\Omega\">&#x3A9;</mi>\n  <mi mathvariant=\"normal\" data-latex=\"\\And\">&amp;</mi>\n  <mi mathvariant=\"normal\" data-latex=\"\\Upsilon\">&#x3A5;</mi>\n</math>"
  ));
  it('Tilde', () => toXmlMatch(tex2mml("~"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"~\" display=\"block\">\n  <mtext data-latex=\"~\">&#xA0;</mtext>\n</math>"
  ));
  it('Tilde2', () => toXmlMatch(tex2mml("a~b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a~b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mtext data-latex=\"~\">&#xA0;</mtext>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Empty base', () => toXmlMatch(tex2mml("^2"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"^2\" display=\"block\">\n  <msup data-latex=\"^2 \">\n    <mi></mi>\n    <mn data-latex=\"2\">2</mn>\n  </msup>\n</math>"
  ));
  it('Empty base2', () => toXmlMatch(tex2mml("{}^2"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"{}^2\" display=\"block\">\n  <msup data-latex=\"{}^2 \">\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\"></mrow>\n    <mn data-latex=\"2\">2</mn>\n  </msup>\n</math>"
  ));
  it('Square', () => toXmlMatch(tex2mml("x^2"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x^2\" display=\"block\">\n  <msup data-latex=\"x^2 \">\n    <mi data-latex=\"x\">x</mi>\n    <mn data-latex=\"2\">2</mn>\n  </msup>\n</math>"
  ));
  it('Cube', () => toXmlMatch(tex2mml("x^3"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x^3\" display=\"block\">\n  <msup data-latex=\"x^3 \">\n    <mi data-latex=\"x\">x</mi>\n    <mn data-latex=\"3\">3</mn>\n  </msup>\n</math>"
  ));
  it('Large Operator', () => toXmlMatch(tex2mml("\\sum^2_1"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sum^2_1\" display=\"block\">\n  <munderover data-latex=\"\\sum^2 _1 \">\n    <mo data-latex=\"\\sum\">&#x2211;</mo>\n    <mn data-latex=\"1\">1</mn>\n    <mn data-latex=\"2\">2</mn>\n  </munderover>\n</math>"
  ));
  it('Move Superscript', () => toXmlMatch(tex2mml("\\left( \\sum_1^n \\right)^{2}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\left( \\sum_1^n \\right)^{2}\" display=\"block\">\n  <msup data-latex=\"\\left( \\sum_1 ^n \\right)^{2}\">\n    <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left( \\sum_1 ^n \\right)\" data-latex=\"\\left( \\sum_1 ^n \\right)\">\n      <mo data-mjx-texclass=\"OPEN\" data-latex-item=\"\\left(\" data-latex=\"\\left(\">(</mo>\n      <munderover data-latex=\"\\sum_1^n\">\n        <mo data-latex=\"\\sum\">&#x2211;</mo>\n        <mn data-latex=\"1\">1</mn>\n        <mi data-latex=\"n\">n</mi>\n      </munderover>\n      <mo data-mjx-texclass=\"CLOSE\" data-latex-item=\"\\right)\" data-latex=\"\\right)\">)</mo>\n    </mrow>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{2}\">\n      <mn data-latex=\"2\">2</mn>\n    </mrow>\n  </msup>\n</math>"
  ));
  it('Empty Base Index', () => toXmlMatch(tex2mml("_3"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"_3\" display=\"block\">\n  <msub data-latex=\"_3 \">\n    <mi></mi>\n    <mn data-latex=\"3\">3</mn>\n  </msub>\n</math>"
  ));
  it('Empty Base Index2', () => toXmlMatch(tex2mml("{}_3"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"{}_3\" display=\"block\">\n  <msub data-latex=\"{}_3 \">\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\"></mrow>\n    <mn data-latex=\"3\">3</mn>\n  </msub>\n</math>"
  ));
  it('Index', () => toXmlMatch(tex2mml("x_3"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x_3\" display=\"block\">\n  <msub data-latex=\"x_3 \">\n    <mi data-latex=\"x\">x</mi>\n    <mn data-latex=\"3\">3</mn>\n  </msub>\n</math>"
  ));
  it('SubSup', () => toXmlMatch(tex2mml("x^a_3"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x^a_3\" display=\"block\">\n  <msubsup data-latex=\"x^a_3 \">\n    <mi data-latex=\"x\">x</mi>\n    <mn data-latex=\"3\">3</mn>\n    <mi data-latex=\"a\">a</mi>\n  </msubsup>\n</math>"
  ));
  it('Positive Spacing', () => toXmlMatch(tex2mml("a\\quad b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\quad b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mstyle scriptlevel=\"0\" data-latex=\"\\quad\">\n    <mspace width=\"1em\"></mspace>\n  </mstyle>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Negative Spacing', () => toXmlMatch(tex2mml("a\\!\\!b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\!\\!b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mstyle scriptlevel=\"0\" data-latex=\"\\!\">\n    <mspace width=\"-0.167em\"></mspace>\n  </mstyle>\n  <mstyle scriptlevel=\"0\" data-latex=\"\\!\">\n    <mspace width=\"-0.167em\"></mspace>\n  </mstyle>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Limit', () => toXmlMatch(tex2mml("\\lim"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\lim\" display=\"block\">\n  <mo data-mjx-texclass=\"OP\" movablelimits=\"true\" data-latex=\"\\lim\">lim</mo>\n</math>"
  ));
  it('Frac', () => toXmlMatch(tex2mml("\\frac{a}{b}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\frac{a}{b}\" display=\"block\">\n  <mfrac data-latex=\"\\frac{a}{b}\">\n    <mi data-latex=\"a\">a</mi>\n    <mi data-latex=\"b\">b</mi>\n  </mfrac>\n</math>"
  ));
  it('Raise', () => toXmlMatch(tex2mml("\\raise 1em {x}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\raise 1em {x}\" display=\"block\">\n  <mpadded height=\"+1em\" depth=\"-1em\" voffset=\"+1em\" data-latex=\"\\raise 1em {x}\">\n    <mrow data-mjx-texclass=\"ORD\">\n      <mi data-latex=\"x\">x</mi>\n    </mrow>\n  </mpadded>\n</math>"
  ));
  it('Lower', () => toXmlMatch(tex2mml("\\lower 1em {x}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\lower 1em {x}\" display=\"block\">\n  <mpadded height=\"-1em\" depth=\"+1em\" voffset=\"-1em\" data-latex=\"\\lower 1em {x}\">\n    <mrow data-mjx-texclass=\"ORD\">\n      <mi data-latex=\"x\">x</mi>\n    </mrow>\n  </mpadded>\n</math>"
  ));
  it('Operator Dots', () => toXmlMatch(tex2mml("+\\dots+"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"+\\dots+\" display=\"block\">\n  <mo data-latex=\"+\">+</mo>\n  <mo>&#x22EF;</mo>\n  <mo data-latex=\"+\">+</mo>\n</math>"
  ));
  it('Operatorname', () => toXmlMatch(tex2mml("a\\operatorname{xyz}b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\operatorname{xyz}b\" display=\"block\">\n  <merror data-mjx-error=\"Undefined control sequence \\operatorname\">\n    <mtext>Undefined control sequence \\operatorname</mtext>\n  </merror>\n</math>"
  ));
  it('Mathop', () => toXmlMatch(tex2mml("\\mathop{\\rm a} b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mathop{\\rm a} b\" display=\"block\">\n  <mi data-mjx-texclass=\"OP\" mathvariant=\"normal\" data-latex=\"\\mathop{\\rm a}\">a</mi>\n  <mo data-mjx-texclass=\"NONE\">&#x2061;</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Mathop Super', () => toXmlMatch(tex2mml("\\mathop{\\rm a}^b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mathop{\\rm a}^b\" display=\"block\">\n  <mover data-latex=\"\\mathop{\\rm a}^b\">\n    <mi data-mjx-texclass=\"OP\" mathvariant=\"normal\" data-latex=\"\\mathop{\\rm a}\">a</mi>\n    <mi data-latex=\"b\">b</mi>\n  </mover>\n</math>"
  ));
  it('Mathop Sub', () => toXmlMatch(tex2mml("\\mathop{\\rm a}_b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mathop{\\rm a}_b\" display=\"block\">\n  <munder data-latex=\"\\mathop{\\rm a}_b\">\n    <mi data-mjx-texclass=\"OP\" mathvariant=\"normal\" data-latex=\"\\mathop{\\rm a}\">a</mi>\n    <mi data-latex=\"b\">b</mi>\n  </munder>\n</math>"
  ));
  it('Mathop Sub Super', () => toXmlMatch(tex2mml("\\mathop{\\rm a}_b^c"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mathop{\\rm a}_b^c\" display=\"block\">\n  <munderover data-latex=\"\\mathop{\\rm a}_b^c\">\n    <mi data-mjx-texclass=\"OP\" mathvariant=\"normal\" data-latex=\"\\mathop{\\rm a}\">a</mi>\n    <mi data-latex=\"b\">b</mi>\n    <mi data-latex=\"c\">c</mi>\n  </munderover>\n</math>"
  ));
  it('Mathop Cal', () => toXmlMatch(tex2mml("\\mathop{\\cal a}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mathop{\\cal a}\" display=\"block\">\n  <mrow data-mjx-texclass=\"OP\" data-latex=\"\\mathop{\\cal a}\">\n    <mi data-mjx-variant=\"-tex-calligraphic\" mathvariant=\"script\" data-latex=\"\\cal a\">a</mi>\n  </mrow>\n</math>"
  ));
  it('Mathrel', () => toXmlMatch(tex2mml("\\mathrel{R}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mathrel{R}\" display=\"block\">\n  <mrow data-mjx-texclass=\"REL\" data-latex=\"\\mathrel{R}\">\n    <mi data-latex=\"R\">R</mi>\n  </mrow>\n</math>"
  ));
  it('Vector', () => toXmlMatch(tex2mml("\\vec{a}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\vec{a}\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\vec{a}\">\n    <mover>\n      <mi data-latex=\"a\">a</mi>\n      <mo stretchy=\"false\">&#x2192;</mo>\n    </mover>\n  </mrow>\n</math>"
  ));
  it('Vector Multi', () => toXmlMatch(tex2mml("\\vec{\\vec{a}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\vec{\\vec{a}}\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\vec{\\vec{a}}\">\n    <mover>\n      <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\vec{a}\">\n        <mover>\n          <mi data-latex=\"a\">a</mi>\n          <mo stretchy=\"false\">&#x2192;</mo>\n        </mover>\n      </mrow>\n      <mo stretchy=\"false\">&#x2192;</mo>\n    </mover>\n  </mrow>\n</math>"
  ));
  it('Vector Font', () => toXmlMatch(tex2mml("\\mathrm{\\vec{a}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mathrm{\\vec{a}}\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\mathrm{\\vec{a}}\">\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\vec{a}\">\n      <mover>\n        <mi mathvariant=\"normal\" data-latex=\"a\">a</mi>\n        <mo stretchy=\"false\">&#x2192;</mo>\n      </mover>\n    </mrow>\n  </mrow>\n</math>"
  ));
  it('Overset', () => toXmlMatch(tex2mml("\\overset{a}{b}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\overset{a}{b}\" display=\"block\">\n  <mover data-latex=\"\\overset{a}{b}\">\n    <mi data-latex=\"b\">b</mi>\n    <mi data-latex=\"a\">a</mi>\n  </mover>\n</math>"
  ));
  it('Underset', () => toXmlMatch(tex2mml("\\underset{a}{b}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\underset{a}{b}\" display=\"block\">\n  <munder data-latex=\"\\underset{a}{b}\">\n    <mi data-latex=\"b\">b</mi>\n    <mi data-latex=\"a\">a</mi>\n  </munder>\n</math>"
  ));
  it('Strut', () => toXmlMatch(tex2mml("\\strut{x}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\strut{x}\" display=\"block\">\n  <mpadded height=\"8.6pt\" depth=\"3pt\" width=\"0\" data-latex=\"\\strut\">\n    <mrow></mrow>\n  </mpadded>\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"{x}\">\n    <mi data-latex=\"x\">x</mi>\n  </mrow>\n</math>"
  ));
  it('Fbox', () => toXmlMatch(tex2mml("\\fbox{x}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\fbox{x}\" display=\"block\">\n  <menclose notation=\"box\" data-latex=\"\\fbox{x}\">\n    <mtext>x</mtext>\n  </menclose>\n</math>"
  ));
  it('Hbox', () => toXmlMatch(tex2mml("\\hbox{x}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\hbox{x}\" display=\"block\">\n  <mstyle displaystyle=\"false\" scriptlevel=\"0\" data-latex=\"\\hbox{x}\">\n    <mtext>x</mtext>\n  </mstyle>\n</math>"
  ));
  it('Phantom', () => toXmlMatch(tex2mml("x\\phantom{y}z"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x\\phantom{y}z\" display=\"block\">\n  <mi data-latex=\"x\">x</mi>\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\phantom{y}\">\n    <mphantom>\n      <mi data-latex=\"y\">y</mi>\n    </mphantom>\n  </mrow>\n  <mi data-latex=\"z\">z</mi>\n</math>"
  ));
  it('Vertical Phantom', () => toXmlMatch(tex2mml("x\\vphantom{y}z"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x\\vphantom{y}z\" display=\"block\">\n  <mi data-latex=\"x\">x</mi>\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\vphantom{y}\">\n    <mpadded width=\"0\">\n      <mphantom>\n        <mi data-latex=\"y\">y</mi>\n      </mphantom>\n    </mpadded>\n  </mrow>\n  <mi data-latex=\"z\">z</mi>\n</math>"
  ));
  it('Horizontal Phantom', () => toXmlMatch(tex2mml("x\\hphantom{y}z"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x\\hphantom{y}z\" display=\"block\">\n  <mi data-latex=\"x\">x</mi>\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\hphantom{y}\">\n    <mpadded height=\"0\" depth=\"0\">\n      <mphantom>\n        <mi data-latex=\"y\">y</mi>\n      </mphantom>\n    </mpadded>\n  </mrow>\n  <mi data-latex=\"z\">z</mi>\n</math>"
  ));
  it('Smash', () => toXmlMatch(tex2mml("\\smash{x}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\smash{x}\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\smash{x}\">\n    <mpadded height=\"0\" depth=\"0\">\n      <mi data-latex=\"x\">x</mi>\n    </mpadded>\n  </mrow>\n</math>"
  ));
  it('Smash Bottom', () => toXmlMatch(tex2mml("\\smash[b]{x}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\smash[b]{x}\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\smash[b]{x}\">\n    <mpadded depth=\"0\">\n      <mi data-latex=\"x\">x</mi>\n    </mpadded>\n  </mrow>\n</math>"
  ));
  it('Smash Top', () => toXmlMatch(tex2mml("\\smash[t]{x}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\smash[t]{x}\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\smash[t]{x}\">\n    <mpadded height=\"0\">\n      <mi data-latex=\"x\">x</mi>\n    </mpadded>\n  </mrow>\n</math>"
  ));
  it('Llap', () => toXmlMatch(tex2mml("\\llap{x}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\llap{x}\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\llap{x}\">\n    <mpadded width=\"0\" lspace=\"-1width\">\n      <mi data-latex=\"x\">x</mi>\n    </mpadded>\n  </mrow>\n</math>"
  ));
  it('Rlap', () => toXmlMatch(tex2mml("\\rlap{x}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\rlap{x}\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\rlap{x}\">\n    <mpadded width=\"0\">\n      <mi data-latex=\"x\">x</mi>\n    </mpadded>\n  </mrow>\n</math>"
  ));
  it('Rlap 2', () => toXmlMatch(tex2mml("a\\mathrel{\\rlap{\\,/}{=}}b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\mathrel{\\rlap{\\,/}{=}}b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mrow data-mjx-texclass=\"REL\" data-latex=\"\\mathrel{\\rlap{\\,/}{=}}\">\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\rlap{\\,/}\">\n      <mpadded width=\"0\">\n        <mstyle scriptlevel=\"0\" data-latex=\"\\,\">\n          <mspace width=\"0.167em\"></mspace>\n        </mstyle>\n        <mrow data-mjx-texclass=\"ORD\">\n          <mo data-latex=\"/\">/</mo>\n        </mrow>\n      </mpadded>\n    </mrow>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{=}\">\n      <mo data-latex=\"=\">=</mo>\n    </mrow>\n  </mrow>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Llap 2', () => toXmlMatch(tex2mml("a\\mathrel{{=}\\llap{/\\,}}b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\mathrel{{=}\\llap{/\\,}}b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mrow data-mjx-texclass=\"REL\" data-latex=\"\\mathrel{{=}\\llap{/\\,}}\">\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{=}\">\n      <mo data-latex=\"=\">=</mo>\n    </mrow>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\llap{/\\,}\">\n      <mpadded width=\"0\" lspace=\"-1width\">\n        <mrow data-mjx-texclass=\"ORD\">\n          <mo data-latex=\"/\">/</mo>\n        </mrow>\n        <mstyle scriptlevel=\"0\" data-latex=\"\\,\">\n          <mspace width=\"0.167em\"></mspace>\n        </mstyle>\n      </mpadded>\n    </mrow>\n  </mrow>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Raise In Line', () => toXmlMatch(tex2mml("x\\raise{2pt}{y}z"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x\\raise{2pt}{y}z\" display=\"block\">\n  <mi data-latex=\"x\">x</mi>\n  <mpadded height=\"+2pt\" depth=\"-2pt\" voffset=\"+2pt\" data-latex=\"{}\">\n    <mrow data-mjx-texclass=\"ORD\">\n      <mi data-latex=\"y\">y</mi>\n    </mrow>\n  </mpadded>\n  <mi data-latex=\"z\">z</mi>\n</math>"
  ));
  it('Lower 2', () => toXmlMatch(tex2mml("x\\lower{2pt}{y}z"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x\\lower{2pt}{y}z\" display=\"block\">\n  <mi data-latex=\"x\">x</mi>\n  <mpadded height=\"-2pt\" depth=\"+2pt\" voffset=\"-2pt\" data-latex=\"{}\">\n    <mrow data-mjx-texclass=\"ORD\">\n      <mi data-latex=\"y\">y</mi>\n    </mrow>\n  </mpadded>\n  <mi data-latex=\"z\">z</mi>\n</math>"
  ));
  it('Raise Negative', () => toXmlMatch(tex2mml("x\\raise{-2pt}{y}z"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x\\raise{-2pt}{y}z\" display=\"block\">\n  <mi data-latex=\"x\">x</mi>\n  <mpadded height=\"-2pt\" depth=\"+2pt\" voffset=\"-2pt\" data-latex=\"{}\">\n    <mrow data-mjx-texclass=\"ORD\">\n      <mi data-latex=\"y\">y</mi>\n    </mrow>\n  </mpadded>\n  <mi data-latex=\"z\">z</mi>\n</math>"
  ));
  it('Lower Negative', () => toXmlMatch(tex2mml("x\\lower{-2pt}{y}z"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x\\lower{-2pt}{y}z\" display=\"block\">\n  <mi data-latex=\"x\">x</mi>\n  <mpadded height=\"+2pt\" depth=\"-2pt\" voffset=\"+2pt\" data-latex=\"{}\">\n    <mrow data-mjx-texclass=\"ORD\">\n      <mi data-latex=\"y\">y</mi>\n    </mrow>\n  </mpadded>\n  <mi data-latex=\"z\">z</mi>\n</math>"
  ));
  it.skip('Move Left', () => toXmlMatch(tex2mml("x\\moveleft{2pt}{y}z"),
    ""
  ));
  it.skip('Move Right', () => toXmlMatch(tex2mml("x\\moveright{2pt}{y}z"),
    ""
  ));
  it.skip('Move Left Negative', () => toXmlMatch(tex2mml("x\\moveleft{-2pt}{y}z"),
    ""
  ));
  it.skip('Move Right Negative', () => toXmlMatch(tex2mml("x\\moveright{-2pt}{y}z"),
    ""
  ));
  it('Rule 2D', () => toXmlMatch(tex2mml("\\rule{2cm}{1cm}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\rule{2cm}{1cm}\" display=\"block\">\n  <mspace width=\"2cm\" height=\"1cm\" mathbackground=\"black\" data-latex=\"\\rule{2cm}{1cm}\"></mspace>\n</math>"
  ));
  it('Rule 3D', () => toXmlMatch(tex2mml("\\Rule{2cm}{2cm}{1cm}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\Rule{2cm}{2cm}{1cm}\" display=\"block\">\n  <mspace width=\"2cm\" height=\"2cm\" depth=\"1cm\" mathbackground=\"black\" data-latex=\"\\Rule{2cm}{2cm}{1cm}\"></mspace>\n</math>"
  ));
  it('Space 3D', () => toXmlMatch(tex2mml("\\Space{2cm}{2cm}{1cm}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\Space{2cm}{2cm}{1cm}\" display=\"block\">\n  <mspace width=\"2cm\" height=\"2cm\" depth=\"1cm\" data-latex=\"\\Space{2cm}{2cm}{1cm}\"></mspace>\n</math>"
  ));
  it('BuildRel', () => toXmlMatch(tex2mml("\\buildrel{a}\\over b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\buildrel{a}\\over b\" display=\"block\">\n  <mrow data-mjx-texclass=\"REL\" data-latex=\"\\buildrel{a}\\over b\">\n    <mover>\n      <mi data-latex=\"b\">b</mi>\n      <mrow data-mjx-texclass=\"ORD\" data-latex=\"{a}\">\n        <mi data-latex=\"a\">a</mi>\n      </mrow>\n    </mover>\n  </mrow>\n</math>"
  ));
  it('BuildRel Expression', () => toXmlMatch(tex2mml("x\\buildrel{a}\\over b y"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x\\buildrel{a}\\over b y\" display=\"block\">\n  <mi data-latex=\"x\">x</mi>\n  <mrow data-mjx-texclass=\"REL\" data-latex=\"\\buildrel{a}\\over b\">\n    <mover>\n      <mi data-latex=\"b\">b</mi>\n      <mrow data-mjx-texclass=\"ORD\" data-latex=\"{a}\">\n        <mi data-latex=\"a\">a</mi>\n      </mrow>\n    </mover>\n  </mrow>\n  <mi data-latex=\"y\">y</mi>\n</math>"
  ));
  it('Linebreak', () => toXmlMatch(tex2mml("a\\\\b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\\\b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mspace linebreak=\"newline\" data-latex=\"\\\\\"></mspace>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Custom Linebreak', () => toXmlMatch(tex2mml("a\\\\[2ex]b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\\\[2ex]b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mspace linebreak=\"newline\" data-lineleading=\"2ex\" data-latex=\"\\\\[2ex]\"></mspace>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Custom Linebreak European', () => toXmlMatch(tex2mml("a\\\\[1,5cm]b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\\\[1,5cm]b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mspace linebreak=\"newline\" data-lineleading=\"1.5cm\" data-latex=\"\\\\[1,5cm]\"></mspace>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Cr Linebreak', () => toXmlMatch(tex2mml("\\array{a\\cr b}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\array{a\\cr b}\" display=\"block\">\n  <mtable rowspacing=\"4pt\" columnspacing=\"1em\" data-frame-styles=\"\" framespacing=\".2em .125em\" data-latex=\"\\array{a\\cr b}\">\n    <mtr data-latex-item=\"{\" data-latex=\"{\">\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n    </mtr>\n    <mtr data-latex-item=\"{\" data-latex=\"{\">\n      <mtd>\n        <mi data-latex=\"b\">b</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Array Custom Linebreak', () => toXmlMatch(tex2mml("\\array{a\\\\[1cm] b}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\array{a\\\\[1cm] b}\" display=\"block\">\n  <mtable rowspacing=\"3.235em 0.4em\" columnspacing=\"1em\" data-frame-styles=\"\" framespacing=\".2em .125em\" data-latex=\"\\array{a\\\\[1cm] b}\">\n    <mtr data-latex-item=\"{\" data-latex=\"{\">\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n    </mtr>\n    <mtr data-latex-item=\"{\" data-latex=\"{\">\n      <mtd>\n        <mi data-latex=\"b\">b</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('spaces', () => toXmlMatch(tex2mml("A\\,B\\!C"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"A\\,B\\!C\" display=\"block\">\n  <mi data-latex=\"A\">A</mi>\n  <mstyle scriptlevel=\"0\" data-latex=\"\\,\">\n    <mspace width=\"0.167em\"></mspace>\n  </mstyle>\n  <mi data-latex=\"B\">B</mi>\n  <mstyle scriptlevel=\"0\" data-latex=\"\\!\">\n    <mspace width=\"-0.167em\"></mspace>\n  </mstyle>\n  <mi data-latex=\"C\">C</mi>\n</math>"
  ));
  it('Hfill', () => toXmlMatch(tex2mml("\\begin{array}{c}a\\hfill b\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{c}a\\hfill b\\end{array}\" display=\"block\">\n  <mtable columnspacing=\"1em\" rowspacing=\"4pt\" data-frame-styles=\"\" framespacing=\".5em .125em\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{c}a\\hfill b\\end{array}\">\n    <mtr data-latex-item=\"{c}\" data-latex=\"{c}\">\n      <mtd>\n        <mi data-latex=\"\\hfill\">a</mi>\n        <mi data-latex=\"b\">b</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
})

describe('Digits', () => {
  it('Integer', () => toXmlMatch(tex2mml("2"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"2\" display=\"block\">\n  <mn data-latex=\"2\">2</mn>\n</math>"
  ));
  it('Number', () => toXmlMatch(tex2mml("3.14"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"3.14\" display=\"block\">\n  <mn data-latex=\"3.14\">3.14</mn>\n</math>"
  ));
  it('Decimal', () => toXmlMatch(tex2mml(".14"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\".14\" display=\"block\">\n  <mn data-latex=\".14\">.14</mn>\n</math>"
  ));
  it('Thousands', () => toXmlMatch(tex2mml("1{,}000.10"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"1{,}000.10\" display=\"block\">\n  <mn data-latex=\"1{,}000.10\">1,000.10</mn>\n</math>"
  ));
  it('Wrong Thousands', () => toXmlMatch(tex2mml("1{,}0000.10"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"1{,}0000.10\" display=\"block\">\n  <mn data-latex=\"{,}000\">1,000</mn>\n  <mn data-latex=\".10\">0.10</mn>\n</math>"
  ));
  it('Decimal Point', () => toXmlMatch(tex2mml("."),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\".\" display=\"block\">\n  <mo data-latex=\".\">.</mo>\n</math>"
  ));
  it('Integer Font', () => toXmlMatch(tex2mml("\\mathbf{2}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mathbf{2}\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\mathbf{2}\">\n    <mn mathvariant=\"bold\" data-latex=\"2\">2</mn>\n  </mrow>\n</math>"
  ));
})

describe('DigitsEuropean', () => {
  beforeEach(() => setupTex(["base"], {digits: '^(?:[0-9]+(?:\\{\\.\\}[0-9]{3})*(?:,[0-9]*)?|,[0-9]+)'}));
  it('Integer European', () => toXmlMatch(tex2mml("2"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"2\" display=\"block\">\n  <mn data-latex=\"2\">2</mn>\n</math>"
  ));
  it('Number European', () => toXmlMatch(tex2mml("3,14"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"3,14\" display=\"block\">\n  <mn data-latex=\"3,14\">3,14</mn>\n</math>"
  ));
  it('Thousands European', () => toXmlMatch(tex2mml("1{.}000,10"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"1{.}000,10\" display=\"block\">\n  <mn data-latex=\"1{.}000,10\">1.000,10</mn>\n</math>"
  ));
  it('Wrong Thousands European', () => toXmlMatch(tex2mml("1{.}0000,10"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"1{.}0000,10\" display=\"block\">\n  <mn data-latex=\"{.}000\">1.000</mn>\n  <mn data-latex=\",10\">0,10</mn>\n</math>"
  ));
  it('Decimal European', () => toXmlMatch(tex2mml(",14"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\",14\" display=\"block\">\n  <mn data-latex=\",14\">,14</mn>\n</math>"
  ));
  it('Decimal Point European', () => toXmlMatch(tex2mml(","),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\",\" display=\"block\">\n  <mo data-latex=\",\">,</mo>\n</math>"
  ));
});

describe('Error', () => {
  it('Ampersand-error', () => toXmlMatch(tex2mml("&"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"&amp;\" display=\"block\">\n  <merror data-mjx-error=\"Misplaced &amp;\">\n    <mtext>Misplaced &amp;</mtext>\n  </merror>\n</math>"
  ));
  it('Argument-error', () => toXmlMatch(tex2mml("\\frac{b}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\frac{b}\" display=\"block\">\n  <merror data-mjx-error=\"Missing argument for \\frac\">\n    <mtext>Missing argument for \\frac</mtext>\n  </merror>\n</math>"
  ));
  it('Undefined-CS', () => toXmlMatch(tex2mml("\\nonsense"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\nonsense\" display=\"block\">\n  <merror data-mjx-error=\"Undefined control sequence \\nonsense\">\n    <mtext>Undefined control sequence \\nonsense</mtext>\n  </merror>\n</math>"
  ));
  it('Undefined-Env', () => toXmlMatch(tex2mml("\\begin{nonsense} a \\end{nonsense}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{nonsense} a \\end{nonsense}\" display=\"block\">\n  <merror data-mjx-error=\"Unknown environment 'nonsense'\">\n    <mtext>Unknown environment 'nonsense'</mtext>\n  </merror>\n</math>"
  ));
  it('Double-super-error', () => toXmlMatch(tex2mml("x^2^3"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x^2^3\" display=\"block\">\n  <merror data-mjx-error=\"Double exponent: use braces to clarify\">\n    <mtext>Double exponent: use braces to clarify</mtext>\n  </merror>\n</math>"
  ));
  it('Double-over-error', () => toXmlMatch(tex2mml("\\sum^2^3"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sum^2^3\" display=\"block\">\n  <merror data-mjx-error=\"Double exponent: use braces to clarify\">\n    <mtext>Double exponent: use braces to clarify</mtext>\n  </merror>\n</math>"
  ));
  it('Limits Error', () => toXmlMatch(tex2mml("+\\limits^2"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"+\\limits^2\" display=\"block\">\n  <merror data-mjx-error=\"\\limits is allowed only on operators\">\n    <mtext>\\limits is allowed only on operators</mtext>\n  </merror>\n</math>"
  ));
  it('Double sub error', () => toXmlMatch(tex2mml("x_2_3"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x_2_3\" display=\"block\">\n  <merror data-mjx-error=\"Double subscripts: use braces to clarify\">\n    <mtext>Double subscripts: use braces to clarify</mtext>\n  </merror>\n</math>"
  ));
  it('Double under error', () => toXmlMatch(tex2mml("\\sum_2_3"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sum_2_3\" display=\"block\">\n  <merror data-mjx-error=\"Double subscripts: use braces to clarify\">\n    <mtext>Double subscripts: use braces to clarify</mtext>\n  </merror>\n</math>"
  ));
  it('Brace Superscript Error', () => toXmlMatch(tex2mml("x'^'"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x'^'\" display=\"block\">\n  <merror data-mjx-error=\"Missing open brace for superscript\">\n    <mtext>Missing open brace for superscript</mtext>\n  </merror>\n</math>"
  ));
  it('Double Prime Error', () => toXmlMatch(tex2mml("x^\\prime'"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x^\\prime'\" display=\"block\">\n  <merror data-mjx-error=\"Prime causes double exponent: use braces to clarify\">\n    <mtext>Prime causes double exponent: use braces to clarify</mtext>\n  </merror>\n</math>"
  ));
  it('Hash Error', () => toXmlMatch(tex2mml("#"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"#\" display=\"block\">\n  <merror data-mjx-error=\"You can't use 'macro parameter character #' in math mode\">\n    <mtext>You can't use 'macro parameter character #' in math mode</mtext>\n  </merror>\n</math>"
  ));
  it('Missing Right', () => toXmlMatch(tex2mml("\\left(\\middle|"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\left(\\middle|\" display=\"block\">\n  <merror data-mjx-error=\"Extra \\left or missing \\right\">\n    <mtext>Extra \\left or missing \\right</mtext>\n  </merror>\n</math>"
  ));
  it('Orphan Middle', () => toXmlMatch(tex2mml("\\middle|"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\middle|\" display=\"block\">\n  <merror data-mjx-error=\"Extra \\middle\">\n    <mtext>Extra \\middle</mtext>\n  </merror>\n</math>"
  ));
  it('Middle with Right', () => toXmlMatch(tex2mml("\\middle|\\right)"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\middle|\\right)\" display=\"block\">\n  <merror data-mjx-error=\"Extra \\middle\">\n    <mtext>Extra \\middle</mtext>\n  </merror>\n</math>"
  ));
  it('Misplaced Move Root', () => toXmlMatch(tex2mml("\\uproot{2}\\sqrt[3]{a}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\uproot{2}\\sqrt[3]{a}\" display=\"block\">\n  <merror data-mjx-error=\"\\uproot can appear only within a root\">\n    <mtext>\\uproot can appear only within a root</mtext>\n  </merror>\n</math>"
  ));
  it('Multiple Move Root', () => toXmlMatch(tex2mml("\\sqrt[\\uproot{-2}\\uproot{2}\\beta]{k}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sqrt[\\uproot{-2}\\uproot{2}\\beta]{k}\" display=\"block\">\n  <merror data-mjx-error=\"Multiple use of \\uproot\">\n    <mtext>Multiple use of \\uproot</mtext>\n  </merror>\n</math>"
  ));
  it('Incorrect Move Root', () => toXmlMatch(tex2mml("\\sqrt[\\uproot-2.5\\beta]{k}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sqrt[\\uproot-2.5\\beta]{k}\" display=\"block\">\n  <merror data-mjx-error=\"The argument to \\uproot must be an integer\">\n    <mtext>The argument to \\uproot must be an integer</mtext>\n  </merror>\n</math>"
  ));
  it('Double Over', () => toXmlMatch(tex2mml("1 \\over 2 \\over 3"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"1 \\over 2 \\over 3\" display=\"block\">\n  <merror data-mjx-error=\"Ambiguous use of \\over\">\n    <mtext>Ambiguous use of \\over</mtext>\n  </merror>\n</math>"
  ));
  it('Token Illegal Type', () => toXmlMatch(tex2mml("\\mmlToken{mk}[]{}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mmlToken{mk}[]{}\" display=\"block\">\n  <merror data-mjx-error=\"mk is not a token element\">\n    <mtext>mk is not a token element</mtext>\n  </merror>\n</math>"
  ));
  it('Token Wrong Type', () => toXmlMatch(tex2mml("\\mmlToken{mrow}[]{}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mmlToken{mrow}[]{}\" display=\"block\">\n  <merror data-mjx-error=\"mrow is not a token element\">\n    <mtext>mrow is not a token element</mtext>\n  </merror>\n</math>"
  ));
  it('Token Invalid Attribute', () => toXmlMatch(tex2mml("\\mmlToken{mi}[m1=true]{}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mmlToken{mi}[m1=true]{}\" display=\"block\">\n  <merror data-mjx-error=\"Invalid MathML attribute: m1=true\">\n    <mtext>Invalid MathML attribute: m1=true</mtext>\n  </merror>\n</math>"
  ));
  it('Token Unknown Attribute', () => toXmlMatch(tex2mml("\\mmlToken{mo}[nothing=\"something\"]{}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mmlToken{mo}[nothing=&quot;something&quot;]{}\" display=\"block\">\n  <merror data-mjx-error=\"nothing is not a recognized attribute for mo\">\n    <mtext>nothing is not a recognized attribute for mo</mtext>\n  </merror>\n</math>"
  ));
  it('Token Wrong Attribute', () => toXmlMatch(tex2mml("\\mmlToken{mi}[movablelimit=true]{}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mmlToken{mi}[movablelimit=true]{}\" display=\"block\">\n  <merror data-mjx-error=\"movablelimit is not a recognized attribute for mi\">\n    <mtext>movablelimit is not a recognized attribute for mi</mtext>\n  </merror>\n</math>"
  ));
  it('MissingBeginExtraEnd', () => toXmlMatch(tex2mml("\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\end{array}\" display=\"block\">\n  <merror data-mjx-error=\"Missing \\begin{array} or extra \\end{array}\">\n    <mtext>Missing \\begin{array} or extra \\end{array}</mtext>\n  </merror>\n</math>"
  ));
  it('ExtraCloseMissingOpen', () => toXmlMatch(tex2mml("x}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x}\" display=\"block\">\n  <merror data-mjx-error=\"Extra close brace or missing open brace\">\n    <mtext>Extra close brace or missing open brace</mtext>\n  </merror>\n</math>"
  ));
  it('MissingLeftExtraRight', () => toXmlMatch(tex2mml("x\\right\\}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x\\right\\}\" display=\"block\">\n  <merror data-mjx-error=\"Missing \\left or extra \\right\">\n    <mtext>Missing \\left or extra \\right</mtext>\n  </merror>\n</math>"
  ));
  it('ExtraOpenMissingClose', () => toXmlMatch(tex2mml("{x"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"{x\" display=\"block\">\n  <merror data-mjx-error=\"Extra open brace or missing close brace\">\n    <mtext>Extra open brace or missing close brace</mtext>\n  </merror>\n</math>"
  ));
  it('MissingScript Sub', () => toXmlMatch(tex2mml("x_"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x_\" display=\"block\">\n  <merror data-mjx-error=\"Missing superscript or subscript argument\">\n    <mtext>Missing superscript or subscript argument</mtext>\n  </merror>\n</math>"
  ));
  it('MissingScript Sup', () => toXmlMatch(tex2mml("x^"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x^\" display=\"block\">\n  <merror data-mjx-error=\"Missing superscript or subscript argument\">\n    <mtext>Missing superscript or subscript argument</mtext>\n  </merror>\n</math>"
  ));
  it('MissingOpenForSup', () => toXmlMatch(tex2mml("x^^"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x^^\" display=\"block\">\n  <merror data-mjx-error=\"Missing open brace for superscript\">\n    <mtext>Missing open brace for superscript</mtext>\n  </merror>\n</math>"
  ));
  it('MissingOpenForSub', () => toXmlMatch(tex2mml("x__"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x__\" display=\"block\">\n  <merror data-mjx-error=\"Missing open brace for subscript\">\n    <mtext>Missing open brace for subscript</mtext>\n  </merror>\n</math>"
  ));
  it('ExtraLeftMissingRight', () => toXmlMatch(tex2mml("\\left\\{x"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\left\\{x\" display=\"block\">\n  <merror data-mjx-error=\"Extra \\left or missing \\right\">\n    <mtext>Extra \\left or missing \\right</mtext>\n  </merror>\n</math>"
  ));
  it('Misplaced Cr', () => toXmlMatch(tex2mml("a\\cr b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\cr b\" display=\"block\">\n  <merror data-mjx-error=\"Misplaced \\cr\">\n    <mtext>Misplaced \\cr</mtext>\n  </merror>\n</math>"
  ));
  it('Dimension Error', () => toXmlMatch(tex2mml("a\\\\[abc] b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\\\[abc] b\" display=\"block\">\n  <merror data-mjx-error=\"Bracket argument to \\\\ must be a dimension\">\n    <mtext>Bracket argument to \\\\ must be a dimension</mtext>\n  </merror>\n</math>"
  ));
  it('MissingArgFor', () => toXmlMatch(tex2mml("\\sqrt"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sqrt\" display=\"block\">\n  <merror data-mjx-error=\"Missing argument for \\sqrt\">\n    <mtext>Missing argument for \\sqrt</mtext>\n  </merror>\n</math>"
  ));
  it('ExtraCloseMissingOpen 2', () => toXmlMatch(tex2mml("\\sqrt}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sqrt}\" display=\"block\">\n  <merror data-mjx-error=\"Extra close brace or missing open brace\">\n    <mtext>Extra close brace or missing open brace</mtext>\n  </merror>\n</math>"
  ));
  it('MissingCloseBrace', () => toXmlMatch(tex2mml("\\sqrt{"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sqrt{\" display=\"block\">\n  <merror data-mjx-error=\"Missing close brace\">\n    <mtext>Missing close brace</mtext>\n  </merror>\n</math>"
  ));
  it('ExtraCloseLooking1', () => toXmlMatch(tex2mml("\\sqrt[3}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sqrt[3}\" display=\"block\">\n  <merror data-mjx-error=\"Extra close brace while looking for ']'\">\n    <mtext>Extra close brace while looking for ']'</mtext>\n  </merror>\n</math>"
  ));
  it('MissingCloseBracket', () => toXmlMatch(tex2mml("\\sqrt[3{x}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sqrt[3{x}\" display=\"block\">\n  <merror data-mjx-error=\"Could not find closing ']' for argument to \\sqrt\">\n    <mtext>Could not find closing ']' for argument to \\sqrt</mtext>\n  </merror>\n</math>"
  ));
  it('MissingOrUnrecognizedDelim1', () => toXmlMatch(tex2mml("\\left\\alpha b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\left\\alpha b\" display=\"block\">\n  <merror data-mjx-error=\"Missing or unrecognized delimiter for \\left\">\n    <mtext>Missing or unrecognized delimiter for \\left</mtext>\n  </merror>\n</math>"
  ));
  it('MissingOrUnrecognizedDelim2', () => toXmlMatch(tex2mml("\\left( b\\right"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\left( b\\right\" display=\"block\">\n  <merror data-mjx-error=\"Missing or unrecognized delimiter for \\right\">\n    <mtext>Missing or unrecognized delimiter for \\right</mtext>\n  </merror>\n</math>"
  ));
  it('MissingDimOrUnits', () => toXmlMatch(tex2mml("\\rule{}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\rule{}\" display=\"block\">\n  <merror data-mjx-error=\"Missing dimension or its units for \\rule\">\n    <mtext>Missing dimension or its units for \\rule</mtext>\n  </merror>\n</math>"
  ));
  it('TokenNotFoundForCommand', () => toXmlMatch(tex2mml("\\root {3] \\of 5"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\root {3] \\of 5\" display=\"block\">\n  <merror data-mjx-error=\"Could not find \\of for \\root\">\n    <mtext>Could not find \\of for \\root</mtext>\n  </merror>\n</math>"
  ));
  it('ExtraCloseLooking2', () => toXmlMatch(tex2mml("\\root [3} \\of 5 "),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\root [3} \\of 5 \" display=\"block\">\n  <merror data-mjx-error=\"Extra close brace while looking for \\of\">\n    <mtext>Extra close brace while looking for \\of</mtext>\n  </merror>\n</math>"
  ));
  it('ErroneousNestingEq', () => toXmlMatch(tex2mml("\\begin{equation}\\begin{eqnarray}\\end{eqnarray}\\end{equation}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{equation}\\begin{eqnarray}\\end{eqnarray}\\end{equation}\" display=\"block\">\n  <merror data-mjx-error=\"Erroneous nesting of equation structures\">\n    <mtext>Erroneous nesting of equation structures</mtext>\n  </merror>\n</math>"
  ));
  it('ExtraAlignTab', () => toXmlMatch(tex2mml("\\cases{b & l & k}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\cases{b &amp; l &amp; k}\" display=\"block\">\n  <merror data-mjx-error=\"Extra alignment tab in \\cases text\">\n    <mtext>Extra alignment tab in \\cases text</mtext>\n  </merror>\n</math>"
  ));
  it('Misplaced hline', () => toXmlMatch(tex2mml("\\hline"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\hline\" display=\"block\">\n  <merror data-mjx-error=\"Misplaced \\hline\">\n    <mtext>Misplaced \\hline</mtext>\n  </merror>\n</math>"
  ));
  it('UnsupportedHFill', () => toXmlMatch(tex2mml("a\\hfill b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\hfill b\" display=\"block\">\n  <merror data-mjx-error=\"Unsupported use of \\hfill\">\n    <mtext>Unsupported use of \\hfill</mtext>\n  </merror>\n</math>"
  ));
  it('InvalidEnv', () => toXmlMatch(tex2mml("\\begin{\\ff}kk\\end{\\ff}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{\\ff}kk\\end{\\ff}\" display=\"block\">\n  <merror data-mjx-error=\"Invalid environment name '\\ff'\">\n    <mtext>Invalid environment name '\\ff'</mtext>\n  </merror>\n</math>"
  ));
  it('EnvBadEnd', () => toXmlMatch(tex2mml("\\begin{equation}a\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{equation}a\\end{array}\" display=\"block\">\n  <merror data-mjx-error=\"\\begin{equation} ended with \\end{array}\">\n    <mtext>\\begin{equation} ended with \\end{array}</mtext>\n  </merror>\n</math>"
  ));
  it('EnvMissingEnd Array', () => toXmlMatch(tex2mml("\\begin{array}a"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}a\" display=\"block\">\n  <merror data-mjx-error=\"Illegal pream-token (a)\">\n    <mtext>Illegal pream-token (a)</mtext>\n  </merror>\n</math>"
  ));
  it('MissingBoxFor', () => toXmlMatch(tex2mml("\\raise{2pt}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\raise{2pt}\" display=\"block\">\n  <merror data-mjx-error=\"Missing box for \\raise\">\n    <mtext>Missing box for \\raise</mtext>\n  </merror>\n</math>"
  ));
  it('MissingCloseBrace2', () => toXmlMatch(tex2mml("\\begin{array}{c"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{c\" display=\"block\">\n  <merror data-mjx-error=\"Missing close brace\">\n    <mtext>Missing close brace</mtext>\n  </merror>\n</math>"
  ));
  it('EnvMissingEnd Equation', () => toXmlMatch(tex2mml("\\begin{equation}a"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{equation}a\" display=\"block\">\n  <merror data-mjx-error=\"Missing \\end{equation}\">\n    <mtext>Missing \\end{equation}</mtext>\n  </merror>\n</math>"
  ));
});

describe('Fenced', () => {
  it('Fenced', () => toXmlMatch(tex2mml("\\left(\\frac{a}{\\left[bc\\right]}\\right)"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\left(\\frac{a}{\\left[bc\\right]}\\right)\" display=\"block\">\n  <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left(\\frac{a}{\\left[bc\\right]}\\right)\" data-latex=\"\\left(\\frac{a}{\\left[bc\\right]}\\right)\">\n    <mo data-mjx-texclass=\"OPEN\" data-latex-item=\"\\left(\" data-latex=\"\\left(\">(</mo>\n    <mfrac data-latex=\"\\frac{a}{\\left[bc\\right]}\">\n      <mi data-latex=\"a\">a</mi>\n      <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left[bc\\right]\" data-latex=\"\\left[bc\\right]\">\n        <mo data-mjx-texclass=\"OPEN\" data-latex-item=\"\\left[\" data-latex=\"\\left[\">[</mo>\n        <mi data-latex=\"b\">b</mi>\n        <mi data-latex=\"c\">c</mi>\n        <mo data-mjx-texclass=\"CLOSE\" data-latex-item=\"\\right]\" data-latex=\"\\right]\">]</mo>\n      </mrow>\n    </mfrac>\n    <mo data-mjx-texclass=\"CLOSE\" data-latex-item=\"\\right)\" data-latex=\"\\right)\">)</mo>\n  </mrow>\n</math>"
  ));
  it('Fenced2', () => toXmlMatch(tex2mml("\\{\\frac{a}{\\uparrow bc\\downarrow}\\}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\{\\frac{a}{\\uparrow bc\\downarrow}\\}\" display=\"block\">\n  <mo fence=\"false\" stretchy=\"false\" data-latex=\"\\{\">{</mo>\n  <mfrac data-latex=\"\\frac{a}{\\uparrow bc\\downarrow}\">\n    <mi data-latex=\"a\">a</mi>\n    <mrow data-latex=\"\\uparrow bc\\downarrow\">\n      <mo stretchy=\"false\" data-latex=\"\\uparrow\">&#x2191;</mo>\n      <mi data-latex=\"b\">b</mi>\n      <mi data-latex=\"c\">c</mi>\n      <mo stretchy=\"false\" data-latex=\"\\downarrow\">&#x2193;</mo>\n    </mrow>\n  </mfrac>\n  <mo fence=\"false\" stretchy=\"false\" data-latex=\"\\}\">}</mo>\n</math>"
  ));
  it('Fenced3', () => toXmlMatch(tex2mml("\\left\\{\\left\\vert \\left[ \\left\\| A \\right.\\right| \\right]\\right\\}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\left\\{\\left\\vert \\left[ \\left\\| A \\right.\\right| \\right]\\right\\}\" display=\"block\">\n  <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left\\{\\left\\vert \\left[ \\left\\| A \\right.\\right| \\right]\\right\\}\" data-latex=\"\\left\\{\\left\\vert \\left[ \\left\\| A \\right.\\right| \\right]\\right\\}\">\n    <mo data-mjx-texclass=\"OPEN\" data-latex-item=\"\\left\\{\" data-latex=\"\\left\\{\">{</mo>\n    <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left\\vert \\left[ \\left\\| A \\right.\\right| \\right]\" data-latex=\"\\left\\vert \\left[ \\left\\| A \\right.\\right| \\right]\">\n      <mo data-mjx-texclass=\"OPEN\" data-latex-item=\"\\left\\vert \" data-latex=\"\\left\\vert \">|</mo>\n      <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left[ \\left\\| A \\right.\\right|\" data-latex=\"\\left[ \\left\\| A \\right.\\right|\">\n        <mo data-mjx-texclass=\"OPEN\" data-latex-item=\"\\left[\" data-latex=\"\\left[\">[</mo>\n        <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left\\| A \\right.\" data-latex=\"\\left\\| A \\right.\">\n          <mo data-mjx-texclass=\"OPEN\" symmetric=\"true\" data-latex-item=\"\\left\\|\" data-latex=\"\\left\\|\">&#x2016;</mo>\n          <mi data-latex=\"A\">A</mi>\n          <mo data-mjx-texclass=\"CLOSE\" fence=\"true\" stretchy=\"true\" symmetric=\"true\" data-latex-item=\"\\right.\" data-latex=\"\\right.\"></mo>\n        </mrow>\n        <mo data-mjx-texclass=\"CLOSE\" data-latex-item=\"\\right|\" data-latex=\"\\right|\">|</mo>\n      </mrow>\n      <mo data-mjx-texclass=\"CLOSE\" data-latex-item=\"\\right]\" data-latex=\"\\right]\">]</mo>\n    </mrow>\n    <mo data-mjx-texclass=\"CLOSE\" data-latex-item=\"\\right\\}\" data-latex=\"\\right\\}\">}</mo>\n  </mrow>\n</math>"
  ));
  it('Middle', () => toXmlMatch(tex2mml("\\left(a\\middle|b\\right)"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\left(a\\middle|b\\right)\" display=\"block\">\n  <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left(a\\middle|b\\right)\" data-latex=\"\\left(a\\middle|b\\right)\">\n    <mo data-mjx-texclass=\"OPEN\" data-latex-item=\"\\left(\" data-latex=\"\\left(\">(</mo>\n    <mi data-latex=\"a\">a</mi>\n    <mrow data-mjx-texclass=\"CLOSE\"></mrow>\n    <mo data-latex-item=\"\\middle|\" data-latex=\"\\middle|\">|</mo>\n    <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\middle|\"></mrow>\n    <mi data-latex=\"b\">b</mi>\n    <mo data-mjx-texclass=\"CLOSE\" data-latex-item=\"\\right)\" data-latex=\"\\right)\">)</mo>\n  </mrow>\n</math>"
  ));
  it('Fenced Nostretch 1', () => toXmlMatch(tex2mml("(\\frac{a}{[bc]})"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"(\\frac{a}{[bc]})\" display=\"block\">\n  <mo data-latex=\"(\" stretchy=\"false\">(</mo>\n  <mfrac data-latex=\"\\frac{a}{[bc]}\">\n    <mi data-latex=\"a\">a</mi>\n    <mrow data-latex=\"[bc]\">\n      <mo data-latex=\"[\" stretchy=\"false\">[</mo>\n      <mi data-latex=\"b\">b</mi>\n      <mi data-latex=\"c\">c</mi>\n      <mo data-latex=\"]\" stretchy=\"false\">]</mo>\n    </mrow>\n  </mfrac>\n  <mo data-latex=\")\" stretchy=\"false\">)</mo>\n</math>"
  ));
  it('Fenced Noleft', () => toXmlMatch(tex2mml("\\left. ab \\right)"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\left. ab \\right)\" display=\"block\">\n  <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left. ab \\right)\" data-latex=\"\\left. ab \\right)\">\n    <mo data-mjx-texclass=\"OPEN\" fence=\"true\" stretchy=\"true\" symmetric=\"true\" data-latex-item=\"\\left.\" data-latex=\"\\left.\"></mo>\n    <mi data-latex=\"a\">a</mi>\n    <mi data-latex=\"b\">b</mi>\n    <mo data-mjx-texclass=\"CLOSE\" data-latex-item=\"\\right)\" data-latex=\"\\right)\">)</mo>\n  </mrow>\n</math>"
  ));
  it('Fenced Noright', () => toXmlMatch(tex2mml("\\left( ab \\right."),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\left( ab \\right.\" display=\"block\">\n  <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left( ab \\right.\" data-latex=\"\\left( ab \\right.\">\n    <mo data-mjx-texclass=\"OPEN\" data-latex-item=\"\\left(\" data-latex=\"\\left(\">(</mo>\n    <mi data-latex=\"a\">a</mi>\n    <mi data-latex=\"b\">b</mi>\n    <mo data-mjx-texclass=\"CLOSE\" fence=\"true\" stretchy=\"true\" symmetric=\"true\" data-latex-item=\"\\right.\" data-latex=\"\\right.\"></mo>\n  </mrow>\n</math>"
  ));
  it('Fenced Arrows 5', () => toXmlMatch(tex2mml("\\left\\{\\frac{a}{\\left\\uparrow bc\\right\\downarrow}\\right\\}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\left\\{\\frac{a}{\\left\\uparrow bc\\right\\downarrow}\\right\\}\" display=\"block\">\n  <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left\\{\\frac{a}{\\left\\uparrow bc\\right\\downarrow}\\right\\}\" data-latex=\"\\left\\{\\frac{a}{\\left\\uparrow bc\\right\\downarrow}\\right\\}\">\n    <mo data-mjx-texclass=\"OPEN\" data-latex-item=\"\\left\\{\" data-latex=\"\\left\\{\">{</mo>\n    <mfrac data-latex=\"\\frac{a}{\\left\\uparrow bc\\right\\downarrow}\">\n      <mi data-latex=\"a\">a</mi>\n      <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left\\uparrow bc\\right\\downarrow\" data-latex=\"\\left\\uparrow bc\\right\\downarrow\">\n        <mo data-mjx-texclass=\"OPEN\" fence=\"true\" symmetric=\"true\" data-latex-item=\"\\left\\uparrow \" data-latex=\"\\left\\uparrow \">&#x2191;</mo>\n        <mi data-latex=\"b\">b</mi>\n        <mi data-latex=\"c\">c</mi>\n        <mo data-mjx-texclass=\"CLOSE\" fence=\"true\" symmetric=\"true\" data-latex-item=\"\\right\\downarrow\" data-latex=\"\\right\\downarrow\">&#x2193;</mo>\n      </mrow>\n    </mfrac>\n    <mo data-mjx-texclass=\"CLOSE\" data-latex-item=\"\\right\\}\" data-latex=\"\\right\\}\">}</mo>\n  </mrow>\n</math>"
  ));
  it('Fenced Arrows 1', () => toXmlMatch(tex2mml("\\left\\uparrow \\frac{a}{b} \\right\\downarrow"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\left\\uparrow \\frac{a}{b} \\right\\downarrow\" display=\"block\">\n  <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left\\uparrow \\frac{a}{b} \\right\\downarrow\" data-latex=\"\\left\\uparrow \\frac{a}{b} \\right\\downarrow\">\n    <mo data-mjx-texclass=\"OPEN\" fence=\"true\" symmetric=\"true\" data-latex-item=\"\\left\\uparrow \" data-latex=\"\\left\\uparrow \">&#x2191;</mo>\n    <mfrac data-latex=\"\\frac{a}{b}\">\n      <mi data-latex=\"a\">a</mi>\n      <mi data-latex=\"b\">b</mi>\n    </mfrac>\n    <mo data-mjx-texclass=\"CLOSE\" fence=\"true\" symmetric=\"true\" data-latex-item=\"\\right\\downarrow\" data-latex=\"\\right\\downarrow\">&#x2193;</mo>\n  </mrow>\n</math>"
  ));
  it('Fenced Arrows 2', () => toXmlMatch(tex2mml("\\uparrow \\frac{a}{b} \\downarrow"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\uparrow \\frac{a}{b} \\downarrow\" display=\"block\">\n  <mo stretchy=\"false\" data-latex=\"\\uparrow\">&#x2191;</mo>\n  <mfrac data-latex=\"\\frac{a}{b}\">\n    <mi data-latex=\"a\">a</mi>\n    <mi data-latex=\"b\">b</mi>\n  </mfrac>\n  <mo stretchy=\"false\" data-latex=\"\\downarrow\">&#x2193;</mo>\n</math>"
  ));
  it('Fenced Arrows 3', () => toXmlMatch(tex2mml("\\left\\uparrow \\frac{a}{b}\\middle\\downarrow c \\right\\uparrow"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\left\\uparrow \\frac{a}{b}\\middle\\downarrow c \\right\\uparrow\" display=\"block\">\n  <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left\\uparrow \\frac{a}{b}\\middle\\downarrow c \\right\\uparrow\" data-latex=\"\\left\\uparrow \\frac{a}{b}\\middle\\downarrow c \\right\\uparrow\">\n    <mo data-mjx-texclass=\"OPEN\" fence=\"true\" symmetric=\"true\" data-latex-item=\"\\left\\uparrow \" data-latex=\"\\left\\uparrow \">&#x2191;</mo>\n    <mfrac data-latex=\"\\frac{a}{b}\">\n      <mi data-latex=\"a\">a</mi>\n      <mi data-latex=\"b\">b</mi>\n    </mfrac>\n    <mrow data-mjx-texclass=\"CLOSE\"></mrow>\n    <mo data-latex-item=\"\\middle\\downarrow \" data-latex=\"\\middle\\downarrow \">&#x2193;</mo>\n    <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\middle\\downarrow\"></mrow>\n    <mi data-latex=\"c\">c</mi>\n    <mo data-mjx-texclass=\"CLOSE\" fence=\"true\" symmetric=\"true\" data-latex-item=\"\\right\\uparrow\" data-latex=\"\\right\\uparrow\">&#x2191;</mo>\n  </mrow>\n</math>"
  ));
});

describe('Mathchoice', () => {
  it('Modulo', () => toXmlMatch(tex2mml("a\\mod b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\mod b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mspace width=\"1em\" linebreak=\"nobreak\" data-latex=\"\\kern18mu\"></mspace>\n  <mi data-latex=\"\\mmlToken{mi}{mod}\">mod</mi>\n  <mstyle scriptlevel=\"0\" data-latex=\"\\,\">\n    <mspace width=\"0.167em\"></mspace>\n  </mstyle>\n  <mstyle scriptlevel=\"0\" data-latex=\"\\,\">\n    <mspace width=\"0.167em\"></mspace>\n  </mstyle>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Modulo Sub0', () => toXmlMatch(tex2mml("X_{a\\mod b}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{a\\mod b}\" display=\"block\">\n  <msub data-latex=\"\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}\">\n      <mi data-latex=\"a\">a</mi>\n      <mspace width=\"0.667em\" linebreak=\"nobreak\" data-latex=\"\\kern12mu\"></mspace>\n      <mi data-latex=\"\\mmlToken{mi}{mod}\">mod</mi>\n      <mstyle scriptlevel=\"0\" data-latex=\"\\,\">\n        <mspace width=\"0.167em\"></mspace>\n      </mstyle>\n      <mstyle scriptlevel=\"0\" data-latex=\"\\,\">\n        <mspace width=\"0.167em\"></mspace>\n      </mstyle>\n      <mi data-latex=\"b\">b</mi>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Modulo Sub1', () => toXmlMatch(tex2mml("X_{1_{a\\mod b}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{1_{a\\mod b}}\" display=\"block\">\n  <msub data-latex=\"\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{1_{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}}\">\n      <msub data-latex=\"1_{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}\">\n        <mn data-latex=\"1\">1</mn>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}\">\n          <mi data-latex=\"a\">a</mi>\n          <mspace width=\"0.667em\" linebreak=\"nobreak\" data-latex=\"\\kern12mu\"></mspace>\n          <mi data-latex=\"\\mmlToken{mi}{mod}\">mod</mi>\n          <mstyle scriptlevel=\"0\" data-latex=\"\\,\">\n            <mspace width=\"0.167em\"></mspace>\n          </mstyle>\n          <mstyle scriptlevel=\"0\" data-latex=\"\\,\">\n            <mspace width=\"0.167em\"></mspace>\n          </mstyle>\n          <mi data-latex=\"b\">b</mi>\n        </mrow>\n      </msub>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Modulo Sub2', () => toXmlMatch(tex2mml("X_{1_{2_{a\\mod b}}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{1_{2_{a\\mod b}}}\" display=\"block\">\n  <msub data-latex=\"\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}}}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{1_{2_{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}}}\">\n      <msub data-latex=\"1_{2_{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}}\">\n        <mn data-latex=\"1\">1</mn>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{2_{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}}\">\n          <msub data-latex=\"2_{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}\">\n            <mn data-latex=\"2\">2</mn>\n            <mrow data-mjx-texclass=\"ORD\" data-latex=\"{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}\">\n              <mi data-latex=\"a\">a</mi>\n              <mspace width=\"0.667em\" linebreak=\"nobreak\" data-latex=\"\\kern12mu\"></mspace>\n              <mi data-latex=\"\\mmlToken{mi}{mod}\">mod</mi>\n              <mstyle scriptlevel=\"0\" data-latex=\"\\,\">\n                <mspace width=\"0.167em\"></mspace>\n              </mstyle>\n              <mstyle scriptlevel=\"0\" data-latex=\"\\,\">\n                <mspace width=\"0.167em\"></mspace>\n              </mstyle>\n              <mi data-latex=\"b\">b</mi>\n            </mrow>\n          </msub>\n        </mrow>\n      </msub>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Modulo Sub3', () => toXmlMatch(tex2mml("X_{1_{2_{3_{a\\mod b}}}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{1_{2_{3_{a\\mod b}}}}\" display=\"block\">\n  <msub data-latex=\"\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}}}}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{1_{2_{3_{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}}}}\">\n      <msub data-latex=\"1_{2_{3_{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}}}\">\n        <mn data-latex=\"1\">1</mn>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{2_{3_{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}}}\">\n          <msub data-latex=\"2_{3_{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}}\">\n            <mn data-latex=\"2\">2</mn>\n            <mrow data-mjx-texclass=\"ORD\" data-latex=\"{3_{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}}\">\n              <msub data-latex=\"3_{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}\">\n                <mn data-latex=\"3\">3</mn>\n                <mrow data-mjx-texclass=\"ORD\" data-latex=\"{a\\mathchoice{\\kern18mu}{\\kern12mu}{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,b}\">\n                  <mi data-latex=\"a\">a</mi>\n                  <mspace width=\"0.667em\" linebreak=\"nobreak\" data-latex=\"\\kern12mu\"></mspace>\n                  <mi data-latex=\"\\mmlToken{mi}{mod}\">mod</mi>\n                  <mstyle scriptlevel=\"0\" data-latex=\"\\,\">\n                    <mspace width=\"0.167em\"></mspace>\n                  </mstyle>\n                  <mstyle scriptlevel=\"0\" data-latex=\"\\,\">\n                    <mspace width=\"0.167em\"></mspace>\n                  </mstyle>\n                  <mi data-latex=\"b\">b</mi>\n                </mrow>\n              </msub>\n            </mrow>\n          </msub>\n        </mrow>\n      </msub>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Choose', () => toXmlMatch(tex2mml("n \\choose k"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"n \\choose k\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\choose\" data-latex=\"n \\choose k\">\n    <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\biggl (\">\n      <mo minsize=\"2.047em\" maxsize=\"2.047em\">(</mo>\n    </mrow>\n    <mfrac linethickness=\"0\">\n      <mi data-latex=\"n\">n</mi>\n      <mi data-latex=\"k\">k</mi>\n    </mfrac>\n    <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\biggr )\">\n      <mo minsize=\"2.047em\" maxsize=\"2.047em\">)</mo>\n    </mrow>\n  </mrow>\n</math>"
  ));
  it('Choose Sub0', () => toXmlMatch(tex2mml("X_{n \\choose k}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{n \\choose k}\" display=\"block\">\n  <msub data-latex=\"X_{n \\choose k}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n      <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\choose\">\n        <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\bigl (\">\n          <mo minsize=\"1.2em\" maxsize=\"1.2em\">(</mo>\n        </mrow>\n        <mfrac linethickness=\"0\">\n          <mi data-latex=\"n\">n</mi>\n          <mi data-latex=\"k\">k</mi>\n        </mfrac>\n        <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\bigr )\">\n          <mo minsize=\"1.2em\" maxsize=\"1.2em\">)</mo>\n        </mrow>\n      </mrow>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Choose Sub1', () => toXmlMatch(tex2mml("X_{1_{n \\choose k}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{1_{n \\choose k}}\" display=\"block\">\n  <msub data-latex=\"X_{1_{n \\choose k}}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{1_{}}\">\n      <msub data-latex=\"1_{}\">\n        <mn data-latex=\"1\">1</mn>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n          <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\choose\">\n            <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\bigl (\">\n              <mo minsize=\"1.2em\" maxsize=\"1.2em\">(</mo>\n            </mrow>\n            <mfrac linethickness=\"0\">\n              <mi data-latex=\"n\">n</mi>\n              <mi data-latex=\"k\">k</mi>\n            </mfrac>\n            <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\bigr )\">\n              <mo minsize=\"1.2em\" maxsize=\"1.2em\">)</mo>\n            </mrow>\n          </mrow>\n        </mrow>\n      </msub>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Choose Sub2', () => toXmlMatch(tex2mml("X_{1_{2_{n \\choose k}}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{1_{2_{n \\choose k}}}\" display=\"block\">\n  <msub data-latex=\"X_{1_{2_{n \\choose k}}}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{1_{2_{}}}\">\n      <msub data-latex=\"1_{2_{}}\">\n        <mn data-latex=\"1\">1</mn>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{2_{}}\">\n          <msub data-latex=\"2_{}\">\n            <mn data-latex=\"2\">2</mn>\n            <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n              <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\choose\">\n                <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\bigl (\">\n                  <mo minsize=\"1.2em\" maxsize=\"1.2em\">(</mo>\n                </mrow>\n                <mfrac linethickness=\"0\">\n                  <mi data-latex=\"n\">n</mi>\n                  <mi data-latex=\"k\">k</mi>\n                </mfrac>\n                <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\bigr )\">\n                  <mo minsize=\"1.2em\" maxsize=\"1.2em\">)</mo>\n                </mrow>\n              </mrow>\n            </mrow>\n          </msub>\n        </mrow>\n      </msub>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Choose Sub3', () => toXmlMatch(tex2mml("X_{1_{2_{3_{n \\choose k}}}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{1_{2_{3_{n \\choose k}}}}\" display=\"block\">\n  <msub data-latex=\"X_{1_{2_{3_{n \\choose k}}}}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{1_{2_{3_{}}}}\">\n      <msub data-latex=\"1_{2_{3_{}}}\">\n        <mn data-latex=\"1\">1</mn>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{2_{3_{}}}\">\n          <msub data-latex=\"2_{3_{}}\">\n            <mn data-latex=\"2\">2</mn>\n            <mrow data-mjx-texclass=\"ORD\" data-latex=\"{3_{}}\">\n              <msub data-latex=\"3_{}\">\n                <mn data-latex=\"3\">3</mn>\n                <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n                  <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\choose\">\n                    <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\bigl (\">\n                      <mo minsize=\"1.2em\" maxsize=\"1.2em\">(</mo>\n                    </mrow>\n                    <mfrac linethickness=\"0\">\n                      <mi data-latex=\"n\">n</mi>\n                      <mi data-latex=\"k\">k</mi>\n                    </mfrac>\n                    <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\bigr )\">\n                      <mo minsize=\"1.2em\" maxsize=\"1.2em\">)</mo>\n                    </mrow>\n                  </mrow>\n                </mrow>\n              </msub>\n            </mrow>\n          </msub>\n        </mrow>\n      </msub>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Over With Delims', () => toXmlMatch(tex2mml("1 \\overwithdelims [ ] 2"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"1 \\overwithdelims [ ] 2\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\overwithdelims\" data-latex=\"1 \\overwithdelims [ ] 2\">\n    <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\biggl [\">\n      <mo minsize=\"2.047em\" maxsize=\"2.047em\">[</mo>\n    </mrow>\n    <mfrac>\n      <mn data-latex=\"1\">1</mn>\n      <mn data-latex=\"2\">2</mn>\n    </mfrac>\n    <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\biggr ]\">\n      <mo minsize=\"2.047em\" maxsize=\"2.047em\">]</mo>\n    </mrow>\n  </mrow>\n</math>"
  ));
  it('Over With Delims Sub0', () => toXmlMatch(tex2mml("X_{1 \\overwithdelims [ ] 2}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{1 \\overwithdelims [ ] 2}\" display=\"block\">\n  <msub data-latex=\"X_{1 \\overwithdelims [ ] 2}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n      <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\overwithdelims\">\n        <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\bigl [\">\n          <mo minsize=\"1.2em\" maxsize=\"1.2em\">[</mo>\n        </mrow>\n        <mfrac>\n          <mn data-latex=\"1\">1</mn>\n          <mn data-latex=\"2\">2</mn>\n        </mfrac>\n        <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\bigr ]\">\n          <mo minsize=\"1.2em\" maxsize=\"1.2em\">]</mo>\n        </mrow>\n      </mrow>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Over With Delims Sub1', () => toXmlMatch(tex2mml("X_{1_{1 \\overwithdelims [ ] 2}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{1_{1 \\overwithdelims [ ] 2}}\" display=\"block\">\n  <msub data-latex=\"X_{1_{1 \\overwithdelims [ ] 2}}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{1_{}}\">\n      <msub data-latex=\"1_{}\">\n        <mn data-latex=\"1\">1</mn>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n          <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\overwithdelims\">\n            <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\bigl [\">\n              <mo minsize=\"1.2em\" maxsize=\"1.2em\">[</mo>\n            </mrow>\n            <mfrac>\n              <mn data-latex=\"1\">1</mn>\n              <mn data-latex=\"2\">2</mn>\n            </mfrac>\n            <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\bigr ]\">\n              <mo minsize=\"1.2em\" maxsize=\"1.2em\">]</mo>\n            </mrow>\n          </mrow>\n        </mrow>\n      </msub>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Over With Delims Sub2', () => toXmlMatch(tex2mml("X_{1_{2_{1 \\overwithdelims [ ] 2}}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{1_{2_{1 \\overwithdelims [ ] 2}}}\" display=\"block\">\n  <msub data-latex=\"X_{1_{2_{1 \\overwithdelims [ ] 2}}}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{1_{2_{}}}\">\n      <msub data-latex=\"1_{2_{}}\">\n        <mn data-latex=\"1\">1</mn>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{2_{}}\">\n          <msub data-latex=\"2_{}\">\n            <mn data-latex=\"2\">2</mn>\n            <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n              <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\overwithdelims\">\n                <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\bigl [\">\n                  <mo minsize=\"1.2em\" maxsize=\"1.2em\">[</mo>\n                </mrow>\n                <mfrac>\n                  <mn data-latex=\"1\">1</mn>\n                  <mn data-latex=\"2\">2</mn>\n                </mfrac>\n                <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\bigr ]\">\n                  <mo minsize=\"1.2em\" maxsize=\"1.2em\">]</mo>\n                </mrow>\n              </mrow>\n            </mrow>\n          </msub>\n        </mrow>\n      </msub>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Over With Delims Sub3', () => toXmlMatch(tex2mml("X_{1_{2_{3_{1 \\overwithdelims [ ] 2}}}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{1_{2_{3_{1 \\overwithdelims [ ] 2}}}}\" display=\"block\">\n  <msub data-latex=\"X_{1_{2_{3_{1 \\overwithdelims [ ] 2}}}}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{1_{2_{3_{}}}}\">\n      <msub data-latex=\"1_{2_{3_{}}}\">\n        <mn data-latex=\"1\">1</mn>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{2_{3_{}}}\">\n          <msub data-latex=\"2_{3_{}}\">\n            <mn data-latex=\"2\">2</mn>\n            <mrow data-mjx-texclass=\"ORD\" data-latex=\"{3_{}}\">\n              <msub data-latex=\"3_{}\">\n                <mn data-latex=\"3\">3</mn>\n                <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n                  <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\overwithdelims\">\n                    <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\bigl [\">\n                      <mo minsize=\"1.2em\" maxsize=\"1.2em\">[</mo>\n                    </mrow>\n                    <mfrac>\n                      <mn data-latex=\"1\">1</mn>\n                      <mn data-latex=\"2\">2</mn>\n                    </mfrac>\n                    <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\bigr ]\">\n                      <mo minsize=\"1.2em\" maxsize=\"1.2em\">]</mo>\n                    </mrow>\n                  </mrow>\n                </mrow>\n              </msub>\n            </mrow>\n          </msub>\n        </mrow>\n      </msub>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Above With Delims', () => toXmlMatch(tex2mml("a \\abovewithdelims [ ] 1pt b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a \\abovewithdelims [ ] 1pt b\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\abovewithdelims\" data-latex=\"a \\abovewithdelims [ ] 1pt b\">\n    <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\biggl [\">\n      <mo minsize=\"2.047em\" maxsize=\"2.047em\">[</mo>\n    </mrow>\n    <mfrac linethickness=\"1pt\">\n      <mi data-latex=\"a\">a</mi>\n      <mi data-latex=\"b\">b</mi>\n    </mfrac>\n    <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\biggr ]\">\n      <mo minsize=\"2.047em\" maxsize=\"2.047em\">]</mo>\n    </mrow>\n  </mrow>\n</math>"
  ));
  it('Above With Delims Sub0', () => toXmlMatch(tex2mml("X_{a \\abovewithdelims [ ] 1pt b}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{a \\abovewithdelims [ ] 1pt b}\" display=\"block\">\n  <msub data-latex=\"X_{a \\abovewithdelims [ ] 1pt b}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n      <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\abovewithdelims\">\n        <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\bigl [\">\n          <mo minsize=\"1.2em\" maxsize=\"1.2em\">[</mo>\n        </mrow>\n        <mfrac linethickness=\"1pt\">\n          <mi data-latex=\"a\">a</mi>\n          <mi data-latex=\"b\">b</mi>\n        </mfrac>\n        <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\bigr ]\">\n          <mo minsize=\"1.2em\" maxsize=\"1.2em\">]</mo>\n        </mrow>\n      </mrow>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Above With Delims Sub1', () => toXmlMatch(tex2mml("X_{1_{a \\abovewithdelims [ ] 1pt b}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{1_{a \\abovewithdelims [ ] 1pt b}}\" display=\"block\">\n  <msub data-latex=\"X_{1_{a \\abovewithdelims [ ] 1pt b}}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{1_{}}\">\n      <msub data-latex=\"1_{}\">\n        <mn data-latex=\"1\">1</mn>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n          <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\abovewithdelims\">\n            <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\bigl [\">\n              <mo minsize=\"1.2em\" maxsize=\"1.2em\">[</mo>\n            </mrow>\n            <mfrac linethickness=\"1pt\">\n              <mi data-latex=\"a\">a</mi>\n              <mi data-latex=\"b\">b</mi>\n            </mfrac>\n            <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\bigr ]\">\n              <mo minsize=\"1.2em\" maxsize=\"1.2em\">]</mo>\n            </mrow>\n          </mrow>\n        </mrow>\n      </msub>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Above With Delims Sub2', () => toXmlMatch(tex2mml("X_{1_{2_{a \\abovewithdelims [ ] 1pt b}}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{1_{2_{a \\abovewithdelims [ ] 1pt b}}}\" display=\"block\">\n  <msub data-latex=\"X_{1_{2_{a \\abovewithdelims [ ] 1pt b}}}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{1_{2_{}}}\">\n      <msub data-latex=\"1_{2_{}}\">\n        <mn data-latex=\"1\">1</mn>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{2_{}}\">\n          <msub data-latex=\"2_{}\">\n            <mn data-latex=\"2\">2</mn>\n            <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n              <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\abovewithdelims\">\n                <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\bigl [\">\n                  <mo minsize=\"1.2em\" maxsize=\"1.2em\">[</mo>\n                </mrow>\n                <mfrac linethickness=\"1pt\">\n                  <mi data-latex=\"a\">a</mi>\n                  <mi data-latex=\"b\">b</mi>\n                </mfrac>\n                <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\bigr ]\">\n                  <mo minsize=\"1.2em\" maxsize=\"1.2em\">]</mo>\n                </mrow>\n              </mrow>\n            </mrow>\n          </msub>\n        </mrow>\n      </msub>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Above With Delims Sub3', () => toXmlMatch(tex2mml("X_{1_{2_{3_{a \\abovewithdelims [ ] 1pt b}}}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{1_{2_{3_{a \\abovewithdelims [ ] 1pt b}}}}\" display=\"block\">\n  <msub data-latex=\"X_{1_{2_{3_{a \\abovewithdelims [ ] 1pt b}}}}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{1_{2_{3_{}}}}\">\n      <msub data-latex=\"1_{2_{3_{}}}\">\n        <mn data-latex=\"1\">1</mn>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{2_{3_{}}}\">\n          <msub data-latex=\"2_{3_{}}\">\n            <mn data-latex=\"2\">2</mn>\n            <mrow data-mjx-texclass=\"ORD\" data-latex=\"{3_{}}\">\n              <msub data-latex=\"3_{}\">\n                <mn data-latex=\"3\">3</mn>\n                <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n                  <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\abovewithdelims\">\n                    <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\bigl [\">\n                      <mo minsize=\"1.2em\" maxsize=\"1.2em\">[</mo>\n                    </mrow>\n                    <mfrac linethickness=\"1pt\">\n                      <mi data-latex=\"a\">a</mi>\n                      <mi data-latex=\"b\">b</mi>\n                    </mfrac>\n                    <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\bigr ]\">\n                      <mo minsize=\"1.2em\" maxsize=\"1.2em\">]</mo>\n                    </mrow>\n                  </mrow>\n                </mrow>\n              </msub>\n            </mrow>\n          </msub>\n        </mrow>\n      </msub>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Probability', () => toXmlMatch(tex2mml("P(E) = {n \\choose k} p^k (1-p)^{ n-k}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"P(E) = {n \\choose k} p^k (1-p)^{ n-k}\" display=\"block\">\n  <mi data-latex=\"P\">P</mi>\n  <mo data-latex=\"(\" stretchy=\"false\">(</mo>\n  <mi data-latex=\"E\">E</mi>\n  <mo data-latex=\")\" stretchy=\"false\">)</mo>\n  <mo data-latex=\"=\">=</mo>\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n    <mrow data-mjx-texclass=\"ORD\" data-latex-item=\"\\choose\">\n      <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\biggl (\">\n        <mo minsize=\"2.047em\" maxsize=\"2.047em\">(</mo>\n      </mrow>\n      <mfrac linethickness=\"0\">\n        <mi data-latex=\"n\">n</mi>\n        <mi data-latex=\"k\">k</mi>\n      </mfrac>\n      <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\biggr )\">\n        <mo minsize=\"2.047em\" maxsize=\"2.047em\">)</mo>\n      </mrow>\n    </mrow>\n  </mrow>\n  <msup data-latex=\"p^k\">\n    <mi data-latex=\"p\">p</mi>\n    <mi data-latex=\"k\">k</mi>\n  </msup>\n  <mo data-latex=\"(\" stretchy=\"false\">(</mo>\n  <mn data-latex=\"1\">1</mn>\n  <mo data-latex=\"-\">&#x2212;</mo>\n  <mi data-latex=\"p\">p</mi>\n  <msup data-latex=\")^{n-k}\">\n    <mo data-latex=\")\" stretchy=\"false\">)</mo>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{n-k}\">\n      <mi data-latex=\"n\">n</mi>\n      <mo data-latex=\"-\">&#x2212;</mo>\n      <mi data-latex=\"k\">k</mi>\n    </mrow>\n  </msup>\n</math>"
  ));
});

describe('Matrix', () => {
  it('Matrix Error', () => toXmlMatch(tex2mml("\\matrix"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\matrix\" display=\"block\">\n  <merror data-mjx-error=\"Missing argument for \\matrix\">\n    <mtext>Missing argument for \\matrix</mtext>\n  </merror>\n</math>"
  ));
  it('Matrix Arg', () => toXmlMatch(tex2mml("\\matrix a"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\matrix a\" display=\"block\">\n  <mtable rowspacing=\"4pt\" columnspacing=\"1em\" data-frame-styles=\"\" framespacing=\".2em .125em\" data-latex=\"a}\">\n    <mtr>\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Matrix Braces', () => toXmlMatch(tex2mml("\\matrix{a}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\matrix{a}\" display=\"block\">\n  <mtable rowspacing=\"4pt\" columnspacing=\"1em\" data-frame-styles=\"\" framespacing=\".2em .125em\" data-latex=\"\\matrix{a}\">\n    <mtr data-latex-item=\"{\" data-latex=\"{\">\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Matrix Columns', () => toXmlMatch(tex2mml("\\array{a&b}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\array{a&amp;b}\" display=\"block\">\n  <mtable rowspacing=\"4pt\" columnspacing=\"1em\" data-frame-styles=\"\" framespacing=\".2em .125em\" data-latex=\"\\array{a&amp;b}\">\n    <mtr data-latex-item=\"{\" data-latex=\"{\">\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"b\">b</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Matrix Rows', () => toXmlMatch(tex2mml("\\array{a&b\\\\ c&d}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\array{a&amp;b\\\\ c&amp;d}\" display=\"block\">\n  <mtable rowspacing=\"4pt\" columnspacing=\"1em\" data-frame-styles=\"\" framespacing=\".2em .125em\" data-latex=\"\\array{a&amp;b\\\\ c&amp;d}\">\n    <mtr data-latex-item=\"{\" data-latex=\"{\">\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"b\">b</mi>\n      </mtd>\n    </mtr>\n    <mtr data-latex-item=\"{\" data-latex=\"{\">\n      <mtd>\n        <mi data-latex=\"c\">c</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"d\">d</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Matrix Subscript', () => toXmlMatch(tex2mml("X_{\\matrix{a&b}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{\\matrix{a&amp;b}}\" display=\"block\">\n  <msub data-latex=\"X_{\\matrix{a&amp;b}}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{{}}\">\n      <mtable rowspacing=\"4pt\" columnspacing=\"1em\" data-frame-styles=\"\" framespacing=\".2em .125em\" data-latex=\"{}\">\n        <mtr data-latex-item=\"{\" data-latex=\"{\">\n          <mtd>\n            <mi data-latex=\"a\">a</mi>\n          </mtd>\n          <mtd>\n            <mi data-latex=\"b\">b</mi>\n          </mtd>\n        </mtr>\n      </mtable>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Matrix Parens', () => toXmlMatch(tex2mml("\\pmatrix{a&b}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\pmatrix{a&amp;b}\" display=\"block\">\n  <mrow data-mjx-texclass=\"INNER\" data-latex=\"\\pmatrix{a&amp;b}\">\n    <mo data-mjx-texclass=\"OPEN\">(</mo>\n    <mtable rowspacing=\"4pt\" columnspacing=\"1em\" data-frame-styles=\"\" framespacing=\".2em .125em\">\n      <mtr data-latex-item=\"{\" data-latex=\"{\">\n        <mtd>\n          <mi data-latex=\"a\">a</mi>\n        </mtd>\n        <mtd>\n          <mi data-latex=\"b\">b</mi>\n        </mtd>\n      </mtr>\n    </mtable>\n    <mo data-mjx-texclass=\"CLOSE\">)</mo>\n  </mrow>\n</math>"
  ));
  it('Matrix Parens Subscript', () => toXmlMatch(tex2mml("X_{\\pmatrix{a&b}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"X_{\\pmatrix{a&amp;b}}\" display=\"block\">\n  <msub data-latex=\"X_{\\pmatrix{a&amp;b}}\">\n    <mi data-latex=\"X\">X</mi>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{{}}\">\n      <mrow data-mjx-texclass=\"INNER\" data-latex=\"{}\">\n        <mo data-mjx-texclass=\"OPEN\">(</mo>\n        <mtable rowspacing=\"4pt\" columnspacing=\"1em\" data-frame-styles=\"\" framespacing=\".2em .125em\">\n          <mtr data-latex-item=\"{\" data-latex=\"{\">\n            <mtd>\n              <mi data-latex=\"a\">a</mi>\n            </mtd>\n            <mtd>\n              <mi data-latex=\"b\">b</mi>\n            </mtd>\n          </mtr>\n        </mtable>\n        <mo data-mjx-texclass=\"CLOSE\">)</mo>\n      </mrow>\n    </mrow>\n  </msub>\n</math>"
  ));
  it('Matrix Cases', () => toXmlMatch(tex2mml("\\cases{a}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\cases{a}\" display=\"block\">\n  <mrow data-mjx-texclass=\"INNER\" data-latex=\"\\cases{a}\">\n    <mo data-mjx-texclass=\"OPEN\">{</mo>\n    <mtable rowspacing=\".2em\" columnspacing=\"1em\" columnalign=\"left left\" data-frame-styles=\"\" framespacing=\".2em .125em\">\n      <mtr data-latex-item=\"{\" data-latex=\"{\">\n        <mtd>\n          <mi data-latex=\"a\">a</mi>\n        </mtd>\n      </mtr>\n    </mtable>\n    <mo data-mjx-texclass=\"CLOSE\" fence=\"true\" stretchy=\"true\" symmetric=\"true\"></mo>\n  </mrow>\n</math>"
  ));
  it('Matrix Numbered', () => toXmlMatch(tex2mml("\\eqalignno{a&b&c}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\eqalignno{a&amp;b&amp;c}\" display=\"block\">\n  <mtable rowspacing=\".5em\" columnspacing=\"0.278em\" displaystyle=\"true\" columnalign=\"right left\" data-latex=\"\\eqalignno{a&amp;b&amp;c}\">\n    <mlabeledtr data-latex-item=\"{\" data-latex=\"{\">\n      <mtd>\n        <mi data-latex=\"c\">c</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"b\">b</mi>\n      </mtd>\n    </mlabeledtr>\n  </mtable>\n</math>"
  ));
});

describe('InternalMath', () => {
  it('Interspersed Text', () => toXmlMatch(tex2mml("a\\text{c$d$e}b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\text{c$d$e}b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mrow data-latex=\"\\text{c$d$e}\">\n    <mtext>c</mtext>\n    <mrow data-mjx-texclass=\"ORD\">\n      <mi data-latex=\"d\">d</mi>\n    </mrow>\n    <mtext>e</mtext>\n  </mrow>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Mbox Mbox', () => toXmlMatch(tex2mml("a\\mbox{ b $a\\mbox{ b c } c$ c } c"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\mbox{ b $a\\mbox{ b c } c$ c } c\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mstyle displaystyle=\"false\" scriptlevel=\"0\" data-latex=\"\\mbox{ b $a\\mbox{ b c } c$ c }\">\n    <mtext>&#xA0;b&#xA0;</mtext>\n    <mrow data-mjx-texclass=\"ORD\">\n      <mi data-latex=\"a\">a</mi>\n      <mstyle displaystyle=\"false\" scriptlevel=\"0\" data-latex=\"\\mbox{ b c }\">\n        <mtext>&#xA0;b c&#xA0;</mtext>\n      </mstyle>\n      <mi data-latex=\"c\">c</mi>\n    </mrow>\n    <mtext>&#xA0;c&#xA0;</mtext>\n  </mstyle>\n  <mi data-latex=\"c\">c</mi>\n</math>"
  ));
  it('Mbox Math', () => toXmlMatch(tex2mml("a\\mbox{ ${ab}$ } c"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\mbox{ ${ab}$ } c\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mstyle displaystyle=\"false\" scriptlevel=\"0\" data-latex=\"\\mbox{ ${ab}$ }\">\n    <mtext>&#xA0;</mtext>\n    <mrow data-mjx-texclass=\"ORD\">\n      <mrow data-mjx-texclass=\"ORD\" data-latex=\"{ab}\">\n        <mi data-latex=\"a\">a</mi>\n        <mi data-latex=\"b\">b</mi>\n      </mrow>\n    </mrow>\n    <mtext>&#xA0;</mtext>\n  </mstyle>\n  <mi data-latex=\"c\">c</mi>\n</math>"
  ));
  it('Mbox CR', () => toXmlMatch(tex2mml("a\\mbox{aa \\\\ bb} c"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\mbox{aa \\\\ bb} c\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mstyle displaystyle=\"false\" scriptlevel=\"0\" data-latex=\"\\mbox{aa \\\\ bb}\">\n    <mtext>aa \\ bb</mtext>\n  </mstyle>\n  <mi data-latex=\"c\">c</mi>\n</math>"
  ));
  it('Internal Math Error', () => toXmlMatch(tex2mml("a\\mbox{$}} c"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\mbox{$}} c\" display=\"block\">\n  <merror data-mjx-error=\"Math not terminated in text box\">\n    <mtext>Math not terminated in text box</mtext>\n  </merror>\n</math>"
  ));
  it('Mbox Internal Display', () => toXmlMatch(tex2mml("a\\mbox{aa \\(\\frac{a}{b}\\) bb} c"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\mbox{aa \\(\\frac{a}{b}\\) bb} c\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mstyle displaystyle=\"false\" scriptlevel=\"0\" data-latex=\"\\mbox{aa \\(\\frac{a}{b}\\) bb}\">\n    <mtext>aa&#xA0;</mtext>\n    <mrow data-mjx-texclass=\"ORD\">\n      <mfrac data-latex=\"\\frac{a}{b}\">\n        <mi data-latex=\"a\">a</mi>\n        <mi data-latex=\"b\">b</mi>\n      </mfrac>\n    </mrow>\n    <mtext>&#xA0;bb</mtext>\n  </mstyle>\n  <mi data-latex=\"c\">c</mi>\n</math>"
  ));
})

describe('Array', () => {
  it('Array Single', () => toXmlMatch(tex2mml("\\begin{array}{c}a\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{c}a\\end{array}\" display=\"block\">\n  <mtable columnspacing=\"1em\" rowspacing=\"4pt\" data-frame-styles=\"\" framespacing=\".5em .125em\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{c}a\\end{array}\">\n    <mtr data-latex-item=\"{c}\" data-latex=\"{c}\">\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Enclosed left right', () => toXmlMatch(tex2mml("\\begin{array}{|c|}a\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{|c|}a\\end{array}\" display=\"block\">\n  <menclose notation=\"left right\" data-padding=\"0\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{|c|}a\\end{array}\">\n    <mtable columnspacing=\"1em\" rowspacing=\"4pt\" data-frame-styles=\"\" framespacing=\".5em .125em\">\n      <mtr data-latex-item=\"{|c|}\" data-latex=\"{|c|}\">\n        <mtd>\n          <mi data-latex=\"a\">a</mi>\n        </mtd>\n      </mtr>\n    </mtable>\n  </menclose>\n</math>"
  ));
  it('Enclosed left', () => toXmlMatch(tex2mml("\\begin{array}{|c}a\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{|c}a\\end{array}\" display=\"block\">\n  <menclose notation=\"left\" data-padding=\"0\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{|c}a\\end{array}\">\n    <mtable columnspacing=\"1em\" rowspacing=\"4pt\" data-frame-styles=\"\" framespacing=\".5em .125em\">\n      <mtr data-latex-item=\"{|c}\" data-latex=\"{|c}\">\n        <mtd>\n          <mi data-latex=\"a\">a</mi>\n        </mtd>\n      </mtr>\n    </mtable>\n  </menclose>\n</math>"
  ));
  it('Enclosed right', () => toXmlMatch(tex2mml("\\begin{array}{c|}a\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{c|}a\\end{array}\" display=\"block\">\n  <menclose notation=\"right\" data-padding=\"0\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{c|}a\\end{array}\">\n    <mtable columnspacing=\"1em\" rowspacing=\"4pt\" data-frame-styles=\"\" framespacing=\".5em .125em\">\n      <mtr data-latex-item=\"{c|}\" data-latex=\"{c|}\">\n        <mtd>\n          <mi data-latex=\"a\">a</mi>\n        </mtd>\n      </mtr>\n    </mtable>\n  </menclose>\n</math>"
  ));
  it('Enclosed top', () => toXmlMatch(tex2mml("\\begin{array}{c}\\hline a\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{c}\\hline a\\end{array}\" display=\"block\">\n  <menclose notation=\"top\" data-padding=\"0\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{c}\\hline a\\end{array}\">\n    <mtable columnspacing=\"1em\" rowspacing=\"4pt\" data-frame-styles=\"\" framespacing=\".5em .125em\">\n      <mtr data-latex-item=\"{c}\" data-latex=\"{c}\">\n        <mtd>\n          <mi data-latex=\"a\">a</mi>\n        </mtd>\n      </mtr>\n    </mtable>\n  </menclose>\n</math>"
  ));
  it('Enclosed bottom', () => toXmlMatch(tex2mml("\\begin{array}{c} a\\\\\\hline\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{c} a\\\\\\hline\\end{array}\" display=\"block\">\n  <menclose notation=\"bottom\" data-padding=\"0\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{c} a\\\\\\hline\\end{array}\">\n    <mtable columnspacing=\"1em\" rowspacing=\"4pt\" data-frame-styles=\"\" framespacing=\".5em .125em\">\n      <mtr data-latex-item=\"{c}\" data-latex=\"{c}\">\n        <mtd>\n          <mi data-latex=\"a\">a</mi>\n        </mtd>\n      </mtr>\n    </mtable>\n  </menclose>\n</math>"
  ));
  it('Enclosed top bottom', () => toXmlMatch(tex2mml("\\begin{array}{c}\\hline a\\\\\\hline\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{c}\\hline a\\\\\\hline\\end{array}\" display=\"block\">\n  <menclose notation=\"top bottom\" data-padding=\"0\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{c}\\hline a\\\\\\hline\\end{array}\">\n    <mtable columnspacing=\"1em\" rowspacing=\"4pt\" data-frame-styles=\"\" framespacing=\".5em .125em\">\n      <mtr data-latex-item=\"{c}\" data-latex=\"{c}\">\n        <mtd>\n          <mi data-latex=\"a\">a</mi>\n        </mtd>\n      </mtr>\n    </mtable>\n  </menclose>\n</math>"
  ));
  it('Enclosed frame solid', () => toXmlMatch(tex2mml("\\begin{array}{|c|}\\hline a\\\\\\hline\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{|c|}\\hline a\\\\\\hline\\end{array}\" display=\"block\">\n  <mtable columnspacing=\"1em\" rowspacing=\"4pt\" framespacing=\".5em .125em\" frame=\"solid\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{|c|}\\hline a\\\\\\hline\\end{array}\">\n    <mtr data-latex-item=\"{|c|}\" data-latex=\"{|c|}\">\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Enclosed frame dashed', () => toXmlMatch(tex2mml("\\begin{array}{:c:}\\hline a\\\\\\hline\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{:c:}\\hline a\\\\\\hline\\end{array}\" display=\"block\">\n  <mtable columnspacing=\"1em\" rowspacing=\"4pt\" data-frame-styles=\"solid dashed solid dashed\" framespacing=\".5em .125em\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{:c:}\\hline a\\\\\\hline\\end{array}\">\n    <mtr data-latex-item=\"{:c:}\" data-latex=\"{:c:}\">\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Array dashed column', () => toXmlMatch(tex2mml("\\begin{array}{c:c}a&c\\\\b&d\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{c:c}a&amp;c\\\\b&amp;d\\end{array}\" display=\"block\">\n  <mtable columnspacing=\"1em\" rowspacing=\"4pt\" columnalign=\"center center\" columnlines=\"dashed\" data-frame-styles=\"\" framespacing=\".5em .125em\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{c:c}a&amp;c\\\\b&amp;d\\end{array}\">\n    <mtr data-latex-item=\"{c:c}\" data-latex=\"{c:c}\">\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"c\">c</mi>\n      </mtd>\n    </mtr>\n    <mtr data-latex-item=\"{c:c}\" data-latex=\"{c:c}\">\n      <mtd>\n        <mi data-latex=\"b\">b</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"d\">d</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Array solid column', () => toXmlMatch(tex2mml("\\begin{array}{c|c}a&c\\\\b&d\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{c|c}a&amp;c\\\\b&amp;d\\end{array}\" display=\"block\">\n  <mtable columnspacing=\"1em\" rowspacing=\"4pt\" columnalign=\"center center\" columnlines=\"solid\" data-frame-styles=\"\" framespacing=\".5em .125em\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{c|c}a&amp;c\\\\b&amp;d\\end{array}\">\n    <mtr data-latex-item=\"{c|c}\" data-latex=\"{c|c}\">\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"c\">c</mi>\n      </mtd>\n    </mtr>\n    <mtr data-latex-item=\"{c|c}\" data-latex=\"{c|c}\">\n      <mtd>\n        <mi data-latex=\"b\">b</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"d\">d</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Array dashed row', () => toXmlMatch(tex2mml("\\begin{array}{c}a\\\\\\hdashline b\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{c}a\\\\\\hdashline b\\end{array}\" display=\"block\">\n  <mtable columnspacing=\"1em\" rowspacing=\"4pt\" rowlines=\"dashed\" data-frame-styles=\"\" framespacing=\".5em .125em\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{c}a\\\\\\hdashline b\\end{array}\">\n    <mtr data-latex-item=\"{c}\" data-latex=\"{c}\">\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n    </mtr>\n    <mtr data-latex-item=\"{c}\" data-latex=\"{c}\">\n      <mtd>\n        <mi data-latex=\"b\">b</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Array solid row', () => toXmlMatch(tex2mml("\\begin{array}{c}a\\\\\\hline b\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{c}a\\\\\\hline b\\end{array}\" display=\"block\">\n  <mtable columnspacing=\"1em\" rowspacing=\"4pt\" rowlines=\"solid\" data-frame-styles=\"\" framespacing=\".5em .125em\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{c}a\\\\\\hline b\\end{array}\">\n    <mtr data-latex-item=\"{c}\" data-latex=\"{c}\">\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n    </mtr>\n    <mtr data-latex-item=\"{c}\" data-latex=\"{c}\">\n      <mtd>\n        <mi data-latex=\"b\">b</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Enclosed dashed row', () => toXmlMatch(tex2mml("\\begin{array}{|c|}a\\\\\\hdashline b\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{|c|}a\\\\\\hdashline b\\end{array}\" display=\"block\">\n  <menclose notation=\"left right\" data-padding=\"0\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{|c|}a\\\\\\hdashline b\\end{array}\">\n    <mtable columnspacing=\"1em\" rowspacing=\"4pt\" rowlines=\"dashed\" data-frame-styles=\"\" framespacing=\".5em .125em\">\n      <mtr data-latex-item=\"{|c|}\" data-latex=\"{|c|}\">\n        <mtd>\n          <mi data-latex=\"a\">a</mi>\n        </mtd>\n      </mtr>\n      <mtr data-latex-item=\"{|c|}\" data-latex=\"{|c|}\">\n        <mtd>\n          <mi data-latex=\"b\">b</mi>\n        </mtd>\n      </mtr>\n    </mtable>\n  </menclose>\n</math>"
  ));
  it('Enclosed solid row', () => toXmlMatch(tex2mml("\\begin{array}{|c|}a\\\\\\hline b\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{|c|}a\\\\\\hline b\\end{array}\" display=\"block\">\n  <menclose notation=\"left right\" data-padding=\"0\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{|c|}a\\\\\\hline b\\end{array}\">\n    <mtable columnspacing=\"1em\" rowspacing=\"4pt\" rowlines=\"solid\" data-frame-styles=\"\" framespacing=\".5em .125em\">\n      <mtr data-latex-item=\"{|c|}\" data-latex=\"{|c|}\">\n        <mtd>\n          <mi data-latex=\"a\">a</mi>\n        </mtd>\n      </mtr>\n      <mtr data-latex-item=\"{|c|}\" data-latex=\"{|c|}\">\n        <mtd>\n          <mi data-latex=\"b\">b</mi>\n        </mtd>\n      </mtr>\n    </mtable>\n  </menclose>\n</math>"
  ));
  it('Enclosed dashed column', () => toXmlMatch(tex2mml("\\begin{array}{|c:c|}a&c\\\\b&d\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{|c:c|}a&amp;c\\\\b&amp;d\\end{array}\" display=\"block\">\n  <menclose notation=\"left right\" data-padding=\"0\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{|c:c|}a&amp;c\\\\b&amp;d\\end{array}\">\n    <mtable columnspacing=\"1em\" rowspacing=\"4pt\" columnalign=\"center center\" columnlines=\"dashed\" data-frame-styles=\"\" framespacing=\".5em .125em\">\n      <mtr data-latex-item=\"{|c:c|}\" data-latex=\"{|c:c|}\">\n        <mtd>\n          <mi data-latex=\"a\">a</mi>\n        </mtd>\n        <mtd>\n          <mi data-latex=\"c\">c</mi>\n        </mtd>\n      </mtr>\n      <mtr data-latex-item=\"{|c:c|}\" data-latex=\"{|c:c|}\">\n        <mtd>\n          <mi data-latex=\"b\">b</mi>\n        </mtd>\n        <mtd>\n          <mi data-latex=\"d\">d</mi>\n        </mtd>\n      </mtr>\n    </mtable>\n  </menclose>\n</math>"
  ));
  it('Enclosed solid column', () => toXmlMatch(tex2mml("\\begin{array}{|c|c|}a&c\\\\b&d\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{|c|c|}a&amp;c\\\\b&amp;d\\end{array}\" display=\"block\">\n  <menclose notation=\"left right\" data-padding=\"0\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{|c|c|}a&amp;c\\\\b&amp;d\\end{array}\">\n    <mtable columnspacing=\"1em\" rowspacing=\"4pt\" columnalign=\"center center\" columnlines=\"solid\" data-frame-styles=\"\" framespacing=\".5em .125em\">\n      <mtr data-latex-item=\"{|c|c|}\" data-latex=\"{|c|c|}\">\n        <mtd>\n          <mi data-latex=\"a\">a</mi>\n        </mtd>\n        <mtd>\n          <mi data-latex=\"c\">c</mi>\n        </mtd>\n      </mtr>\n      <mtr data-latex-item=\"{|c|c|}\" data-latex=\"{|c|c|}\">\n        <mtd>\n          <mi data-latex=\"b\">b</mi>\n        </mtd>\n        <mtd>\n          <mi data-latex=\"d\">d</mi>\n        </mtd>\n      </mtr>\n    </mtable>\n  </menclose>\n</math>"
  ));
  it('Label', () => toXmlMatch(tex2mml("\\eqalignno{a &  & {\\hbox{(3)}}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\eqalignno{a &amp;  &amp; {\\hbox{(3)}}}\" display=\"block\">\n  <mtable rowspacing=\".5em\" columnspacing=\"0.278em\" displaystyle=\"true\" columnalign=\"right left\" data-latex=\"\\eqalignno{a &amp;  &amp; {\\hbox{(3)}}}\">\n    <mlabeledtr data-latex-item=\"{\" data-latex=\"{\">\n      <mtd>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{\\hbox{(3)}}\">\n          <mstyle displaystyle=\"false\" scriptlevel=\"0\" data-latex=\"\\hbox{(3)}\">\n            <mtext>(3)</mtext>\n          </mstyle>\n        </mrow>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n      <mtd></mtd>\n    </mlabeledtr>\n  </mtable>\n</math>"
  ));
  it('Columnlines Solid None', () => toXmlMatch(tex2mml("\\begin{array}{c|cc}a&b&c\\\\d&e&f\\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{c|cc}a&amp;b&amp;c\\\\d&amp;e&amp;f\\end{array}\" display=\"block\">\n  <mtable columnspacing=\"1em\" rowspacing=\"4pt\" columnalign=\"center center center\" columnlines=\"solid none\" data-frame-styles=\"\" framespacing=\".5em .125em\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{c|cc}a&amp;b&amp;c\\\\d&amp;e&amp;f\\end{array}\">\n    <mtr data-latex-item=\"{c|cc}\" data-latex=\"{c|cc}\">\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"b\">b</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"c\">c</mi>\n      </mtd>\n    </mtr>\n    <mtr data-latex-item=\"{c|cc}\" data-latex=\"{c|cc}\">\n      <mtd>\n        <mi data-latex=\"d\">d</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"e\">e</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"f\">f</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Rowlines Solid None', () => toXmlMatch(tex2mml("\\begin{array}{ccc}a&b&c\\\\\\hline d&e&f\\\\ g&h&i \\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{ccc}a&amp;b&amp;c\\\\\\hline d&amp;e&amp;f\\\\ g&amp;h&amp;i \\end{array}\" display=\"block\">\n  <mtable columnspacing=\"1em\" rowspacing=\"4pt\" columnalign=\"center center center\" rowlines=\"solid none\" data-frame-styles=\"\" framespacing=\".5em .125em\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{ccc}a&amp;b&amp;c\\\\\\hline d&amp;e&amp;f\\\\ g&amp;h&amp;i \\end{array}\">\n    <mtr data-latex-item=\"{ccc}\" data-latex=\"{ccc}\">\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"b\">b</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"c\">c</mi>\n      </mtd>\n    </mtr>\n    <mtr data-latex-item=\"{ccc}\" data-latex=\"{ccc}\">\n      <mtd>\n        <mi data-latex=\"d\">d</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"e\">e</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"f\">f</mi>\n      </mtd>\n    </mtr>\n    <mtr data-latex-item=\"{ccc}\" data-latex=\"{ccc}\">\n      <mtd>\n        <mi data-latex=\"g\">g</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"h\">h</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"i\">i</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Column+Rowlines Solid None', () => toXmlMatch(tex2mml("\\begin{array}{c|cc}a&b&c\\\\\\hline d&e&f\\\\ g&h&i \\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{c|cc}a&amp;b&amp;c\\\\\\hline d&amp;e&amp;f\\\\ g&amp;h&amp;i \\end{array}\" display=\"block\">\n  <mtable columnspacing=\"1em\" rowspacing=\"4pt\" columnalign=\"center center center\" columnlines=\"solid none\" rowlines=\"solid none\" data-frame-styles=\"\" framespacing=\".5em .125em\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{c|cc}a&amp;b&amp;c\\\\\\hline d&amp;e&amp;f\\\\ g&amp;h&amp;i \\end{array}\">\n    <mtr data-latex-item=\"{c|cc}\" data-latex=\"{c|cc}\">\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"b\">b</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"c\">c</mi>\n      </mtd>\n    </mtr>\n    <mtr data-latex-item=\"{c|cc}\" data-latex=\"{c|cc}\">\n      <mtd>\n        <mi data-latex=\"d\">d</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"e\">e</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"f\">f</mi>\n      </mtd>\n    </mtr>\n    <mtr data-latex-item=\"{c|cc}\" data-latex=\"{c|cc}\">\n      <mtd>\n        <mi data-latex=\"g\">g</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"h\">h</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"i\">i</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Column+Rowlines Solid Dashed None', () => toXmlMatch(tex2mml("\\begin{array}{c|c:cc}0&a&b&c\\\\\\hline 1&d&e&f\\\\\\hdashline 2&g&h&i\\\\ 3&j&k&l \\end{array}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\begin{array}{c|c:cc}0&amp;a&amp;b&amp;c\\\\\\hline 1&amp;d&amp;e&amp;f\\\\\\hdashline 2&amp;g&amp;h&amp;i\\\\ 3&amp;j&amp;k&amp;l \\end{array}\" display=\"block\">\n  <mtable columnspacing=\"1em\" rowspacing=\"4pt\" columnalign=\"center center center center\" columnlines=\"solid dashed none\" rowlines=\"solid dashed none\" data-frame-styles=\"\" framespacing=\".5em .125em\" data-latex-item=\"{array}\" data-latex=\"\\begin{array}{c|c:cc}0&amp;a&amp;b&amp;c\\\\\\hline 1&amp;d&amp;e&amp;f\\\\\\hdashline 2&amp;g&amp;h&amp;i\\\\ 3&amp;j&amp;k&amp;l \\end{array}\">\n    <mtr data-latex-item=\"{c|c:cc}\" data-latex=\"{c|c:cc}\">\n      <mtd>\n        <mn data-latex=\"0\">0</mn>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"a\">a</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"b\">b</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"c\">c</mi>\n      </mtd>\n    </mtr>\n    <mtr data-latex-item=\"{c|c:cc}\" data-latex=\"{c|c:cc}\">\n      <mtd>\n        <mn data-latex=\"1\">1</mn>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"d\">d</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"e\">e</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"f\">f</mi>\n      </mtd>\n    </mtr>\n    <mtr data-latex-item=\"{c|c:cc}\" data-latex=\"{c|c:cc}\">\n      <mtd>\n        <mn data-latex=\"2\">2</mn>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"g\">g</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"h\">h</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"i\">i</mi>\n      </mtd>\n    </mtr>\n    <mtr data-latex-item=\"{c|c:cc}\" data-latex=\"{c|c:cc}\">\n      <mtd>\n        <mn data-latex=\"3\">3</mn>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"j\">j</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"k\">k</mi>\n      </mtd>\n      <mtd>\n        <mi data-latex=\"l\">l</mi>\n      </mtd>\n    </mtr>\n  </mtable>\n</math>"
  ));
  it('Matrix Test', () => toXmlMatch(tex2mml("\\left( \\begin{array}{ccc}a & b & c \\\\d & e & f \\\\g & h & i \\end{array} \\right)"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\left( \\begin{array}{ccc}a &amp; b &amp; c \\\\d &amp; e &amp; f \\\\g &amp; h &amp; i \\end{array} \\right)\" display=\"block\">\n  <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left( \\begin{array}{ccc}a &amp; b &amp; c \\\\d &amp; e &amp; f \\\\g &amp; h &amp; i \\end{array} \\right)\" data-latex=\"\\left( \\begin{array}{ccc}a &amp; b &amp; c \\\\d &amp; e &amp; f \\\\g &amp; h &amp; i \\end{array} \\right)\">\n    <mo data-mjx-texclass=\"OPEN\" data-latex-item=\"\\left(\" data-latex=\"\\left(\">(</mo>\n    <mtable columnspacing=\"1em\" rowspacing=\"4pt\" columnalign=\"center center center\" data-frame-styles=\"\" framespacing=\".5em .125em\" data-latex-item=\"{array}\" data-latex=\"{array}\">\n      <mtr data-latex-item=\"{ccc}\" data-latex=\"{ccc}\">\n        <mtd>\n          <mi data-latex=\"a\">a</mi>\n        </mtd>\n        <mtd>\n          <mi data-latex=\"b\">b</mi>\n        </mtd>\n        <mtd>\n          <mi data-latex=\"c\">c</mi>\n        </mtd>\n      </mtr>\n      <mtr data-latex-item=\"{ccc}\" data-latex=\"{ccc}\">\n        <mtd>\n          <mi data-latex=\"d\">d</mi>\n        </mtd>\n        <mtd>\n          <mi data-latex=\"e\">e</mi>\n        </mtd>\n        <mtd>\n          <mi data-latex=\"f\">f</mi>\n        </mtd>\n      </mtr>\n      <mtr data-latex-item=\"{ccc}\" data-latex=\"{ccc}\">\n        <mtd>\n          <mi data-latex=\"g\">g</mi>\n        </mtd>\n        <mtd>\n          <mi data-latex=\"h\">h</mi>\n        </mtd>\n        <mtd>\n          <mi data-latex=\"i\">i</mi>\n        </mtd>\n      </mtr>\n    </mtable>\n    <mo data-mjx-texclass=\"CLOSE\" data-latex-item=\"\\right)\" data-latex=\"\\right)\">)</mo>\n  </mrow>\n</math>"
  ));
})

describe('Moving limits', () => {
  it('Limits SubSup', () => toXmlMatch(tex2mml("\\int^2\\limits_3"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\int^2\\limits_3\" display=\"block\">\n  <munderover data-latex=\"\\int^2 \\limits_3 \">\n    <mo data-latex=\"\\int\">&#x222B;</mo>\n    <mn data-latex=\"3\">3</mn>\n    <mn data-latex=\"2\">2</mn>\n  </munderover>\n</math>"
  ));
  it('Limits UnderOver', () => toXmlMatch(tex2mml("\\lim_3\\nolimits^2"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\lim_3\\nolimits^2\" display=\"block\">\n  <msubsup data-latex=\"\\lim_3 \\nolimits^2 \">\n    <mo data-mjx-texclass=\"OP\" data-latex=\"\\lim\">lim</mo>\n    <mn data-latex=\"3\">3</mn>\n    <mn data-latex=\"2\">2</mn>\n  </msubsup>\n</math>"
  ));
  it('Limits', () => toXmlMatch(tex2mml("\\sum\\limits^2_3"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sum\\limits^2_3\" display=\"block\">\n  <munderover data-latex=\"\\sum\\limits^2 _3 \">\n    <mo data-latex=\"\\limits\" movablelimits=\"false\">&#x2211;</mo>\n    <mn data-latex=\"3\">3</mn>\n    <mn data-latex=\"2\">2</mn>\n  </munderover>\n</math>"
  ));
  it('Vector Op', () => toXmlMatch(tex2mml("\\vec{+}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\vec{+}\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\vec{+}\">\n    <mover>\n      <mo data-latex=\"+\">+</mo>\n      <mo stretchy=\"false\">&#x2192;</mo>\n    </mover>\n  </mrow>\n</math>"
  ));
  it('Overline', () => toXmlMatch(tex2mml("\\overline{a}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\overline{a}\" display=\"block\">\n  <mover data-latex=\"\\overline{a}\">\n    <mi data-latex=\"a\">a</mi>\n    <mo accent=\"true\">&#x2015;</mo>\n  </mover>\n</math>"
  ));
  it('Overline Limits', () => toXmlMatch(tex2mml("\\overline{\\int\\limits^2}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\overline{\\int\\limits^2}\" display=\"block\">\n  <mover data-latex=\"\\overline{\\int\\limits^2}\">\n    <mrow>\n      <mo rspace=\"0\"></mo>\n      <mover data-latex=\"\\int\\limits^2 \">\n        <mo data-latex=\"\\limits\" lspace=\"0\" rspace=\"0\">&#x222B;</mo>\n        <mn data-latex=\"2\">2</mn>\n      </mover>\n    </mrow>\n    <mo accent=\"true\">&#x2015;</mo>\n  </mover>\n</math>"
  ));
  it('Overline Sum', () => toXmlMatch(tex2mml("\\overline{\\sum}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\overline{\\sum}\" display=\"block\">\n  <mover data-latex=\"\\overline{\\sum}\">\n    <mo data-latex=\"\\sum\" movablelimits=\"false\">&#x2211;</mo>\n    <mo accent=\"true\">&#x2015;</mo>\n  </mover>\n</math>"
  ));
  it('Overline 1', () => toXmlMatch(tex2mml("\\overline{\\sum}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\overline{\\sum}\" display=\"block\">\n  <mover data-latex=\"\\overline{\\sum}\">\n    <mo data-latex=\"\\sum\" movablelimits=\"false\">&#x2211;</mo>\n    <mo accent=\"true\">&#x2015;</mo>\n  </mover>\n</math>"
  ));
  it('Overline 2', () => toXmlMatch(tex2mml("\\overline{\\mathop{a}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\overline{\\mathop{a}}\" display=\"block\">\n  <mover data-latex=\"\\overline{\\mathop{a}}\">\n    <mrow data-mjx-texclass=\"OP\" data-latex=\"\\mathop{a}\">\n      <mi data-latex=\"a\">a</mi>\n    </mrow>\n    <mo accent=\"true\">&#x2015;</mo>\n  </mover>\n</math>"
  ));
  it('Overline 3', () => toXmlMatch(tex2mml("\\overline{\\mathop{a}}^2"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\overline{\\mathop{a}}^2\" display=\"block\">\n  <msup data-latex=\"\\overline{\\mathop{a}}^2 \">\n    <mover data-latex=\"\\overline{\\mathop{a}}\">\n      <mrow data-mjx-texclass=\"OP\" data-latex=\"\\mathop{a}\">\n        <mi data-latex=\"a\">a</mi>\n      </mrow>\n      <mo accent=\"true\">&#x2015;</mo>\n    </mover>\n    <mn data-latex=\"2\">2</mn>\n  </msup>\n</math>"
  ));
  it('Overline 4', () => toXmlMatch(tex2mml("\\overline{\\sum^2_3}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\overline{\\sum^2_3}\" display=\"block\">\n  <mover data-latex=\"\\overline{\\sum^2_3}\">\n    <mrow>\n      <mo rspace=\"0\"></mo>\n      <munderover data-latex=\"\\sum^2 _3 \">\n        <mo data-latex=\"\\sum\" lspace=\"0\" rspace=\"0\">&#x2211;</mo>\n        <mn data-latex=\"3\">3</mn>\n        <mn data-latex=\"2\">2</mn>\n      </munderover>\n    </mrow>\n    <mo accent=\"true\">&#x2015;</mo>\n  </mover>\n</math>"
  ));
  it('Overline 5', () => toXmlMatch(tex2mml("\\overline{\\sum}^2_3"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\overline{\\sum}^2_3\" display=\"block\">\n  <msubsup data-latex=\"\\overline{\\sum}^2 _3 \">\n    <mover data-latex=\"\\overline{\\sum}\">\n      <mo data-latex=\"\\sum\" movablelimits=\"false\">&#x2211;</mo>\n      <mo accent=\"true\">&#x2015;</mo>\n    </mover>\n    <mn data-latex=\"3\">3</mn>\n    <mn data-latex=\"2\">2</mn>\n  </msubsup>\n</math>"
  ));
  it('Overline 6', () => toXmlMatch(tex2mml("\\overline{\\underline{\\sum}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\overline{\\underline{\\sum}}\" display=\"block\">\n  <mover data-latex=\"\\overline{\\underline{\\sum}}\">\n    <mrow>\n      <mo rspace=\"0\"></mo>\n      <munder data-latex=\"\\underline{\\sum}\">\n        <mo data-latex=\"\\sum\" movablelimits=\"false\" lspace=\"0\" rspace=\"0\">&#x2211;</mo>\n        <mo accent=\"true\">&#x2015;</mo>\n      </munder>\n    </mrow>\n    <mo accent=\"true\">&#x2015;</mo>\n  </mover>\n</math>"
  ));
  it('Overbrace 1', () => toXmlMatch(tex2mml("\\overbrace{abc}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\overbrace{abc}\" display=\"block\">\n  <mrow data-mjx-texclass=\"OP\" data-latex=\"\\overbrace{abc}\">\n    <mover>\n      <mrow data-latex=\"abc\">\n        <mi data-latex=\"a\">a</mi>\n        <mi data-latex=\"b\">b</mi>\n        <mi data-latex=\"c\">c</mi>\n      </mrow>\n      <mo>&#x23DE;</mo>\n    </mover>\n  </mrow>\n</math>"
  ));
  it('Underbrace', () => toXmlMatch(tex2mml("\\underbrace{abc}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\underbrace{abc}\" display=\"block\">\n  <mrow data-mjx-texclass=\"OP\" data-latex=\"\\underbrace{abc}\">\n    <munder>\n      <mrow data-latex=\"abc\">\n        <mi data-latex=\"a\">a</mi>\n        <mi data-latex=\"b\">b</mi>\n        <mi data-latex=\"c\">c</mi>\n      </mrow>\n      <mo>&#x23DF;</mo>\n    </munder>\n  </mrow>\n</math>"
  ));
  it('Overbrace Op 1', () => toXmlMatch(tex2mml("\\overbrace{\\mathop{a}}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\overbrace{\\mathop{a}}\" display=\"block\">\n  <mrow data-mjx-texclass=\"OP\" data-latex=\"\\overbrace{\\mathop{a}}\">\n    <mover>\n      <mrow data-mjx-texclass=\"OP\" data-latex=\"\\mathop{a}\">\n        <mi data-latex=\"a\">a</mi>\n      </mrow>\n      <mo>&#x23DE;</mo>\n    </mover>\n  </mrow>\n</math>"
  ));
  it('Overbrace Op 2', () => toXmlMatch(tex2mml("\\overbrace{\\mathop{a}}^2"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\overbrace{\\mathop{a}}^2\" display=\"block\">\n  <mover data-latex=\"\\overbrace{\\mathop{a}}^2 \">\n    <mrow data-mjx-texclass=\"OP\" data-latex=\"\\overbrace{\\mathop{a}}\">\n      <mover>\n        <mrow data-mjx-texclass=\"OP\" data-latex=\"\\mathop{a}\">\n          <mi data-latex=\"a\">a</mi>\n        </mrow>\n        <mo>&#x23DE;</mo>\n      </mover>\n    </mrow>\n    <mn data-latex=\"2\">2</mn>\n  </mover>\n</math>"
  ));
  it('Overbrace 2', () => toXmlMatch(tex2mml("\\overbrace{\\sum}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\overbrace{\\sum}\" display=\"block\">\n  <mrow data-mjx-texclass=\"OP\" data-latex=\"\\overbrace{\\sum}\">\n    <mover>\n      <mo data-latex=\"\\sum\" movablelimits=\"false\">&#x2211;</mo>\n      <mo>&#x23DE;</mo>\n    </mover>\n  </mrow>\n</math>"
  ));
  it('Overbrace 3', () => toXmlMatch(tex2mml("\\overbrace{\\sum}^2"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\overbrace{\\sum}^2\" display=\"block\">\n  <mover data-latex=\"\\overbrace{\\sum}^2 \">\n    <mrow data-mjx-texclass=\"OP\" data-latex=\"\\overbrace{\\sum}\">\n      <mover>\n        <mo data-latex=\"\\sum\" movablelimits=\"false\">&#x2211;</mo>\n        <mo>&#x23DE;</mo>\n      </mover>\n    </mrow>\n    <mn data-latex=\"2\">2</mn>\n  </mover>\n</math>"
  ));
})

describe('Multirel', () => {
  it('Shift Left', () => toXmlMatch(tex2mml("a<<b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a&lt;&lt;b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"&lt;\">&lt;&lt;</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Less Equal', () => toXmlMatch(tex2mml("a<=b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a&lt;=b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"&lt;\" rspace=\"0pt\">&lt;</mo>\n  <mo data-latex=\"=\" lspace=\"0pt\">=</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Infix Op Op', () => toXmlMatch(tex2mml("a++b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a++b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"+\">+</mo>\n  <mo data-latex=\"+\">+</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Infix Op Rel', () => toXmlMatch(tex2mml("a+=b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a+=b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"+\">+</mo>\n  <mo data-latex=\"=\">=</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Postfix Op Op', () => toXmlMatch(tex2mml("a++"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a++\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"+\">+</mo>\n  <mo data-latex=\"+\">+</mo>\n</math>"
  ));
  it('Postfix Rel Rel', () => toXmlMatch(tex2mml("a=="),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a==\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"=\">==</mo>\n</math>"
  ));
  it('Infix Bars', () => toXmlMatch(tex2mml("a||b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a||b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-mjx-texclass=\"ORD\" stretchy=\"false\" data-latex=\"|\">|</mo>\n  <mo data-mjx-texclass=\"ORD\" stretchy=\"false\" data-latex=\"|\">|</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Infix Fences', () => toXmlMatch(tex2mml("a))b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a))b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\")\" stretchy=\"false\">)</mo>\n  <mo data-latex=\")\" stretchy=\"false\">)</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Infix Rel Rel', () => toXmlMatch(tex2mml("a\\rightarrow=b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a\\rightarrow=b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo stretchy=\"false\" data-latex=\"\\rightarrow\" rspace=\"0pt\">&#x2192;</mo>\n  <mo data-latex=\"=\" lspace=\"0pt\">=</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Infix 4Rel', () => toXmlMatch(tex2mml("a=<>=b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a=&lt;&gt;=b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"=\" rspace=\"0pt\">=</mo>\n  <mo data-latex=\"&lt;\" lspace=\"0pt\" rspace=\"0pt\">&lt;</mo>\n  <mo data-latex=\"&gt;\" lspace=\"0pt\" rspace=\"0pt\">&gt;</mo>\n  <mo data-latex=\"=\" lspace=\"0pt\">=</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Prefix Rel Rel', () => toXmlMatch(tex2mml("==a"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"==a\" display=\"block\">\n  <mo data-latex=\"=\">==</mo>\n  <mi data-latex=\"a\">a</mi>\n</math>"
  ));
  it('Prefix Op Op', () => toXmlMatch(tex2mml("++a"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"++a\" display=\"block\">\n  <mo data-latex=\"+\">+</mo>\n  <mo data-latex=\"+\">+</mo>\n  <mi data-latex=\"a\">a</mi>\n</math>"
  ));
  it('Multirel Font 1', () => toXmlMatch(tex2mml("a <=\\mathrm{>} b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a &lt;=\\mathrm{&gt;} b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"&lt;\" rspace=\"0pt\">&lt;</mo>\n  <mo data-latex=\"=\" lspace=\"0pt\">=</mo>\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\mathrm{&gt;}\">\n    <mo data-latex=\"&gt;\">&gt;</mo>\n  </mrow>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Multirel Font 2', () => toXmlMatch(tex2mml("a <=\\mathrm{=>} b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a &lt;=\\mathrm{=&gt;} b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"&lt;\" rspace=\"0pt\">&lt;</mo>\n  <mo data-latex=\"=\" lspace=\"0pt\">=</mo>\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\mathrm{=&gt;}\">\n    <mo data-latex=\"=\" rspace=\"0pt\">=</mo>\n    <mo data-latex=\"&gt;\" lspace=\"0pt\">&gt;</mo>\n  </mrow>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Multirel Font 3', () => toXmlMatch(tex2mml("a <=\\mathrm{=}\\mathrm{>} b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a &lt;=\\mathrm{=}\\mathrm{&gt;} b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"&lt;\" rspace=\"0pt\">&lt;</mo>\n  <mo data-latex=\"=\" lspace=\"0pt\">=</mo>\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\mathrm{=}\">\n    <mo data-latex=\"=\">=</mo>\n  </mrow>\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\mathrm{&gt;}\">\n    <mo data-latex=\"&gt;\">&gt;</mo>\n  </mrow>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Simple Shadow Rel', () => toXmlMatch(tex2mml("a \\sim b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a \\sim b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"\\sim\">&#x223C;</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Extra Attribute Rel 1', () => toXmlMatch(tex2mml("a =\\sim b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a =\\sim b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"=\" rspace=\"0pt\">=</mo>\n  <mo data-latex=\"\\sim\" lspace=\"0pt\">&#x223C;</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Extra Attribute Rel 2', () => toXmlMatch(tex2mml("a \\sim\\simeq b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a \\sim\\simeq b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"\\sim\" rspace=\"0pt\">&#x223C;</mo>\n  <mo data-latex=\"\\simeq\" lspace=\"0pt\">&#x2243;</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Extra Attribute Rel 3', () => toXmlMatch(tex2mml("a \\sim\\asymp b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a \\sim\\asymp b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"\\sim\" rspace=\"0pt\">&#x223C;</mo>\n  <mo data-latex=\"\\asymp\" lspace=\"0pt\">&#x224D;</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Extra Attribute Rel 4', () => toXmlMatch(tex2mml("a \\sim\\simeq\\asymp b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a \\sim\\simeq\\asymp b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"\\sim\" rspace=\"0pt\">&#x223C;</mo>\n  <mo data-latex=\"\\simeq\" lspace=\"0pt\" rspace=\"0pt\">&#x2243;</mo>\n  <mo data-latex=\"\\asymp\" lspace=\"0pt\">&#x224D;</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Extra Attribute Rel 5', () => toXmlMatch(tex2mml("a \\sim\\asymp\\simeq b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a \\sim\\asymp\\simeq b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"\\sim\" rspace=\"0pt\">&#x223C;</mo>\n  <mo data-latex=\"\\asymp\" lspace=\"0pt\" rspace=\"0pt\">&#x224D;</mo>\n  <mo data-latex=\"\\simeq\" lspace=\"0pt\">&#x2243;</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Extra Attribute Rel 6', () => toXmlMatch(tex2mml("a \\sim\\cong b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a \\sim\\cong b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"\\sim\" rspace=\"0pt\">&#x223C;</mo>\n  <mo data-latex=\"\\cong\" lspace=\"0pt\">&#x2245;</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Infix Stretchy Right', () => toXmlMatch(tex2mml("a=\\rightarrow b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a=\\rightarrow b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"=\" rspace=\"0pt\">=</mo>\n  <mo stretchy=\"false\" data-latex=\"\\rightarrow\" lspace=\"0pt\">&#x2192;</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
})

describe('Other', () => {
  it('Other', () => toXmlMatch(tex2mml("+"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"+\" display=\"block\">\n  <mo data-latex=\"+\">+</mo>\n</math>"
  ));
  it('Other Remap', () => toXmlMatch(tex2mml("-"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"-\" display=\"block\">\n  <mo data-latex=\"-\">&#x2212;</mo>\n</math>"
  ));
  it('Other Font', () => toXmlMatch(tex2mml("\\mathbf{+}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\mathbf{+}\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"\\mathbf{+}\">\n    <mo mathvariant=\"bold\" data-latex=\"+\">+</mo>\n  </mrow>\n</math>"
  ));
  it('Other Delimiter', () => toXmlMatch(tex2mml("("),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"(\" display=\"block\">\n  <mo data-latex=\"(\" stretchy=\"false\">(</mo>\n</math>"
  ));
  it('Other Dollar', () => toXmlMatch(tex2mml("$"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"$\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\">\n    <mo data-latex=\"$\">$</mo>\n  </mrow>\n</math>"
  ));
  it('Other Unicode', () => toXmlMatch(tex2mml("˦"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"&#x2E6;\" display=\"block\">\n  <mrow data-mjx-texclass=\"ORD\">\n    <mo data-latex=\"&#x2E6;\">&#x2E6;</mo>\n  </mrow>\n</math>"
  ));
  it('Other Surrogate', () => toXmlMatch(tex2mml("𝐀"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"&#x1D400;\" display=\"block\">\n  <mi data-latex=\"&#x1D400;\">&#x1D400;</mi>\n</math>"
  ));
  it('Other Arrow Range', () => toXmlMatch(tex2mml("⤡"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"&#x2921;\" display=\"block\">\n  <mo data-latex=\"&#x2921;\" stretchy=\"false\">&#x2921;</mo>\n</math>"
  ));
  it('Other Arrow Infix', () => toXmlMatch(tex2mml("a⤡b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a&#x2921;b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\"&#x2921;\" stretchy=\"false\">&#x2921;</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Other Arrow Prefix', () => toXmlMatch(tex2mml("⤡b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"&#x2921;b\" display=\"block\">\n  <mo data-latex=\"&#x2921;\" stretchy=\"false\">&#x2921;</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Other Arrow Postfix', () => toXmlMatch(tex2mml("b⤡"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"b&#x2921;\" display=\"block\">\n  <mi data-latex=\"b\">b</mi>\n  <mo data-latex=\"&#x2921;\" stretchy=\"false\">&#x2921;</mo>\n</math>"
  ));
  it('Vertical Bar Alone', () => toXmlMatch(tex2mml("|"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"|\" display=\"block\">\n  <mo data-mjx-texclass=\"ORD\" stretchy=\"false\" data-latex=\"|\">|</mo>\n</math>"
  ));
  it('Vertical Bar Infix', () => toXmlMatch(tex2mml("a|b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a|b\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-mjx-texclass=\"ORD\" stretchy=\"false\" data-latex=\"|\">|</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
  it('Vertical Bar Postfix', () => toXmlMatch(tex2mml("a|"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"a|\" display=\"block\">\n  <mi data-latex=\"a\">a</mi>\n  <mo data-mjx-texclass=\"ORD\" stretchy=\"false\" data-latex=\"|\">|</mo>\n</math>"
  ));
  it('Vertical Bar Prefix', () => toXmlMatch(tex2mml("|b"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"|b\" display=\"block\">\n  <mo data-mjx-texclass=\"ORD\" stretchy=\"false\" data-latex=\"|\">|</mo>\n  <mi data-latex=\"b\">b</mi>\n</math>"
  ));
})

describe('Base Complex', () => {
  it('Square Root Complex', () => toXmlMatch(tex2mml("\\sqrt{3x-1}+(1+x)^2"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sqrt{3x-1}+(1+x)^2\" display=\"block\">\n  <msqrt data-latex=\"\\sqrt{3x-1}\">\n    <mn data-latex=\"3\">3</mn>\n    <mi data-latex=\"x\">x</mi>\n    <mo data-latex=\"-\">&#x2212;</mo>\n    <mn data-latex=\"1\">1</mn>\n  </msqrt>\n  <mo data-latex=\"+\">+</mo>\n  <mo data-latex=\"(\" stretchy=\"false\">(</mo>\n  <mn data-latex=\"1\">1</mn>\n  <mo data-latex=\"+\">+</mo>\n  <mi data-latex=\"x\">x</mi>\n  <msup data-latex=\")^2\">\n    <mo data-latex=\")\" stretchy=\"false\">)</mo>\n    <mn data-latex=\"2\">2</mn>\n  </msup>\n</math>"
  ));
  it('General Root', () => toXmlMatch(tex2mml("\\sqrt[4]{3x-1}+(1+x)^2"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sqrt[4]{3x-1}+(1+x)^2\" display=\"block\">\n  <mroot data-latex=\"\\sqrt[4]{3x-1}\">\n    <mrow data-latex=\"3x-1\">\n      <mn data-latex=\"3\">3</mn>\n      <mi data-latex=\"x\">x</mi>\n      <mo data-latex=\"-\">&#x2212;</mo>\n      <mn data-latex=\"1\">1</mn>\n    </mrow>\n    <mn data-latex=\"4\">4</mn>\n  </mroot>\n  <mo data-latex=\"+\">+</mo>\n  <mo data-latex=\"(\" stretchy=\"false\">(</mo>\n  <mn data-latex=\"1\">1</mn>\n  <mo data-latex=\"+\">+</mo>\n  <mi data-latex=\"x\">x</mi>\n  <msup data-latex=\")^2\">\n    <mo data-latex=\")\" stretchy=\"false\">)</mo>\n    <mn data-latex=\"2\">2</mn>\n  </msup>\n</math>"
  ));
  it('Quadratic Formula', () => toXmlMatch(tex2mml("x = \\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"x = \\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\" display=\"block\">\n  <mi data-latex=\"x\">x</mi>\n  <mo data-latex=\"=\">=</mo>\n  <mfrac data-latex=\"\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\">\n    <mrow data-latex=\"-b\\pm\\sqrt{b^2-4ac}\">\n      <mo data-latex=\"-\">&#x2212;</mo>\n      <mi data-latex=\"b\">b</mi>\n      <mo data-latex=\"\\pm\">&#xB1;</mo>\n      <msqrt data-latex=\"\\sqrt{b^2-4ac}\">\n        <msup data-latex=\"b^2\">\n          <mi data-latex=\"b\">b</mi>\n          <mn data-latex=\"2\">2</mn>\n        </msup>\n        <mo data-latex=\"-\">&#x2212;</mo>\n        <mn data-latex=\"4\">4</mn>\n        <mi data-latex=\"a\">a</mi>\n        <mi data-latex=\"c\">c</mi>\n      </msqrt>\n    </mrow>\n    <mrow data-latex=\"2a\">\n      <mn data-latex=\"2\">2</mn>\n      <mi data-latex=\"a\">a</mi>\n    </mrow>\n  </mfrac>\n</math>"
  ));
  it('Cauchy-Schwarz Inequality', () => toXmlMatch(tex2mml("\\left( \\sum_{k=1}^n a_k b_k \\right)^{\\!\\!2} \\leq  \\left( \\sum_{k=1}^n a_k^2 \\right)  \\left( \\sum_{k=1}^n b_k^2 \\right)"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\left( \\sum_{k=1}^n a_k b_k \\right)^{\\!\\!2} \\leq  \\left( \\sum_{k=1}^n a_k^2 \\right)  \\left( \\sum_{k=1}^n b_k^2 \\right)\" display=\"block\">\n  <msup data-latex=\"\\left( \\sum_{k=1}^n a_k b_k \\right)^{\\!\\!2}\">\n    <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left( \\sum_{k=1}^n a_k b_k \\right)\" data-latex=\"\\left( \\sum_{k=1}^n a_k b_k \\right)\">\n      <mo data-mjx-texclass=\"OPEN\" data-latex-item=\"\\left(\" data-latex=\"\\left(\">(</mo>\n      <munderover data-latex=\"\\sum_{k=1}^n\">\n        <mo data-latex=\"\\sum\">&#x2211;</mo>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{k=1}\">\n          <mi data-latex=\"k\">k</mi>\n          <mo data-latex=\"=\">=</mo>\n          <mn data-latex=\"1\">1</mn>\n        </mrow>\n        <mi data-latex=\"n\">n</mi>\n      </munderover>\n      <msub data-latex=\"a_k\">\n        <mi data-latex=\"a\">a</mi>\n        <mi data-latex=\"k\">k</mi>\n      </msub>\n      <msub data-latex=\"b_k\">\n        <mi data-latex=\"b\">b</mi>\n        <mi data-latex=\"k\">k</mi>\n      </msub>\n      <mo data-mjx-texclass=\"CLOSE\" data-latex-item=\"\\right)\" data-latex=\"\\right)\">)</mo>\n    </mrow>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{\\!\\!2}\">\n      <mstyle scriptlevel=\"0\" data-latex=\"\\!\">\n        <mspace width=\"-0.167em\"></mspace>\n      </mstyle>\n      <mstyle scriptlevel=\"0\" data-latex=\"\\!\">\n        <mspace width=\"-0.167em\"></mspace>\n      </mstyle>\n      <mn data-latex=\"2\">2</mn>\n    </mrow>\n  </msup>\n  <mo data-latex=\"\\leq\">&#x2264;</mo>\n  <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left( \\sum_{k=1}^n a_k^2  \\right)\" data-latex=\"\\left( \\sum_{k=1}^n a_k^2  \\right)\">\n    <mo data-mjx-texclass=\"OPEN\" data-latex-item=\"\\left(\" data-latex=\"\\left(\">(</mo>\n    <munderover data-latex=\"\\sum_{k=1}^n\">\n      <mo data-latex=\"\\sum\">&#x2211;</mo>\n      <mrow data-mjx-texclass=\"ORD\" data-latex=\"{k=1}\">\n        <mi data-latex=\"k\">k</mi>\n        <mo data-latex=\"=\">=</mo>\n        <mn data-latex=\"1\">1</mn>\n      </mrow>\n      <mi data-latex=\"n\">n</mi>\n    </munderover>\n    <msubsup data-latex=\"a_k^2\">\n      <mi data-latex=\"a\">a</mi>\n      <mi data-latex=\"k\">k</mi>\n      <mn data-latex=\"2\">2</mn>\n    </msubsup>\n    <mo data-mjx-texclass=\"CLOSE\" data-latex-item=\"\\right)\" data-latex=\"\\right)\">)</mo>\n  </mrow>\n  <mrow data-mjx-texclass=\"INNER\" data-latex-item=\"\\left( \\sum_{k=1}^n b_k^2  \\right)\" data-latex=\"\\left( \\sum_{k=1}^n b_k^2  \\right)\">\n    <mo data-mjx-texclass=\"OPEN\" data-latex-item=\"\\left(\" data-latex=\"\\left(\">(</mo>\n    <munderover data-latex=\"\\sum_{k=1}^n\">\n      <mo data-latex=\"\\sum\">&#x2211;</mo>\n      <mrow data-mjx-texclass=\"ORD\" data-latex=\"{k=1}\">\n        <mi data-latex=\"k\">k</mi>\n        <mo data-latex=\"=\">=</mo>\n        <mn data-latex=\"1\">1</mn>\n      </mrow>\n      <mi data-latex=\"n\">n</mi>\n    </munderover>\n    <msubsup data-latex=\"b_k^2\">\n      <mi data-latex=\"b\">b</mi>\n      <mi data-latex=\"k\">k</mi>\n      <mn data-latex=\"2\">2</mn>\n    </msubsup>\n    <mo data-mjx-texclass=\"CLOSE\" data-latex-item=\"\\right)\" data-latex=\"\\right)\">)</mo>\n  </mrow>\n</math>"
  ));
  it('An Identity of Ramanujan', () => toXmlMatch(tex2mml("\\frac{1}{\\Bigl(\\sqrt{\\phi\\sqrt{5}}-\\phi\\Bigr)  e^{\\frac25\\pi}} =    1+\\frac{e^{-2\\pi}}      {1+\\frac{e^{-4\\pi}}        {1+\\frac{e^{-6\\pi}}          {1+\\frac{e^{-8\\pi}}            {1+\\ldots} } } }"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\frac{1}{\\Bigl(\\sqrt{\\phi\\sqrt{5}}-\\phi\\Bigr)  e^{\\frac25\\pi}} =    1+\\frac{e^{-2\\pi}}      {1+\\frac{e^{-4\\pi}}        {1+\\frac{e^{-6\\pi}}          {1+\\frac{e^{-8\\pi}}            {1+\\ldots} } } }\" display=\"block\">\n  <mfrac data-latex=\"\\frac{1}{\\Bigl(\\sqrt{\\phi\\sqrt{5}}-\\phi\\Bigr)  e^{\\frac25\\pi}}\">\n    <mn data-latex=\"1\">1</mn>\n    <mrow data-latex=\"\\Bigl(\\sqrt{\\phi\\sqrt{5}}-\\phi\\Bigr)  e^{\\frac25\\pi}\">\n      <mrow data-mjx-texclass=\"OPEN\" data-latex=\"\\Bigl(\">\n        <mo minsize=\"1.623em\" maxsize=\"1.623em\">(</mo>\n      </mrow>\n      <msqrt data-latex=\"\\sqrt{\\phi\\sqrt{5}}\">\n        <mi data-latex=\"\\phi\">&#x3D5;</mi>\n        <msqrt data-latex=\"\\sqrt{5}\">\n          <mn data-latex=\"5\">5</mn>\n        </msqrt>\n      </msqrt>\n      <mo data-latex=\"-\">&#x2212;</mo>\n      <mi data-latex=\"\\phi\">&#x3D5;</mi>\n      <mrow data-mjx-texclass=\"CLOSE\" data-latex=\"\\Bigr)\">\n        <mo minsize=\"1.623em\" maxsize=\"1.623em\">)</mo>\n      </mrow>\n      <msup data-latex=\"e^{\\frac25\\pi}\">\n        <mi data-latex=\"e\">e</mi>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{\\frac25\\pi}\">\n          <mfrac data-latex=\"\\frac25\">\n            <mn data-latex=\"2\">2</mn>\n            <mn data-latex=\"5\">5</mn>\n          </mfrac>\n          <mi data-latex=\"\\pi\">&#x3C0;</mi>\n        </mrow>\n      </msup>\n    </mrow>\n  </mfrac>\n  <mo data-latex=\"=\">=</mo>\n  <mn data-latex=\"1\">1</mn>\n  <mo data-latex=\"+\">+</mo>\n  <mfrac data-latex=\"\\frac{e^{-2\\pi}}      {1+\\frac{e^{-4\\pi}}        {1+\\frac{e^{-6\\pi}}          {1+\\frac{e^{-8\\pi}}            {1+\\ldots} } } }\">\n    <msup data-latex=\"e^{-2\\pi}\">\n      <mi data-latex=\"e\">e</mi>\n      <mrow data-mjx-texclass=\"ORD\" data-latex=\"{-2\\pi}\">\n        <mo data-latex=\"-\">&#x2212;</mo>\n        <mn data-latex=\"2\">2</mn>\n        <mi data-latex=\"\\pi\">&#x3C0;</mi>\n      </mrow>\n    </msup>\n    <mrow data-latex=\"1+\\frac{e^{-4\\pi}}        {1+\\frac{e^{-6\\pi}}          {1+\\frac{e^{-8\\pi}}            {1+\\ldots} } } \">\n      <mn data-latex=\"1\">1</mn>\n      <mo data-latex=\"+\">+</mo>\n      <mfrac data-latex=\"\\frac{e^{-4\\pi}}        {1+\\frac{e^{-6\\pi}}          {1+\\frac{e^{-8\\pi}}            {1+\\ldots} } }\">\n        <msup data-latex=\"e^{-4\\pi}\">\n          <mi data-latex=\"e\">e</mi>\n          <mrow data-mjx-texclass=\"ORD\" data-latex=\"{-4\\pi}\">\n            <mo data-latex=\"-\">&#x2212;</mo>\n            <mn data-latex=\"4\">4</mn>\n            <mi data-latex=\"\\pi\">&#x3C0;</mi>\n          </mrow>\n        </msup>\n        <mrow data-latex=\"1+\\frac{e^{-6\\pi}}          {1+\\frac{e^{-8\\pi}}            {1+\\ldots} } \">\n          <mn data-latex=\"1\">1</mn>\n          <mo data-latex=\"+\">+</mo>\n          <mfrac data-latex=\"\\frac{e^{-6\\pi}}          {1+\\frac{e^{-8\\pi}}            {1+\\ldots} }\">\n            <msup data-latex=\"e^{-6\\pi}\">\n              <mi data-latex=\"e\">e</mi>\n              <mrow data-mjx-texclass=\"ORD\" data-latex=\"{-6\\pi}\">\n                <mo data-latex=\"-\">&#x2212;</mo>\n                <mn data-latex=\"6\">6</mn>\n                <mi data-latex=\"\\pi\">&#x3C0;</mi>\n              </mrow>\n            </msup>\n            <mrow data-latex=\"1+\\frac{e^{-8\\pi}}            {1+\\ldots} \">\n              <mn data-latex=\"1\">1</mn>\n              <mo data-latex=\"+\">+</mo>\n              <mfrac data-latex=\"\\frac{e^{-8\\pi}}            {1+\\ldots}\">\n                <msup data-latex=\"e^{-8\\pi}\">\n                  <mi data-latex=\"e\">e</mi>\n                  <mrow data-mjx-texclass=\"ORD\" data-latex=\"{-8\\pi}\">\n                    <mo data-latex=\"-\">&#x2212;</mo>\n                    <mn data-latex=\"8\">8</mn>\n                    <mi data-latex=\"\\pi\">&#x3C0;</mi>\n                  </mrow>\n                </msup>\n                <mrow data-latex=\"1+\\ldots\">\n                  <mn data-latex=\"1\">1</mn>\n                  <mo data-latex=\"+\">+</mo>\n                  <mo data-latex=\"\\ldots\">&#x2026;</mo>\n                </mrow>\n              </mfrac>\n            </mrow>\n          </mfrac>\n        </mrow>\n      </mfrac>\n    </mrow>\n  </mfrac>\n</math>"
  ));
  it('A Rogers-Ramanujan Identity', () => toXmlMatch(tex2mml("1 + \\frac{q^2}{(1-q)}  + \\frac{q^6}{(1-q)(1-q^2)} + \\cdots =\\prod_{j=0}^{\\infty}  \\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},     \\quad\\quad \\text{for $|q|<1$}."),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"1 + \\frac{q^2}{(1-q)}  + \\frac{q^6}{(1-q)(1-q^2)} + \\cdots =\\prod_{j=0}^{\\infty}  \\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},     \\quad\\quad \\text{for $|q|&lt;1$}.\" display=\"block\">\n  <mn data-latex=\"1\">1</mn>\n  <mo data-latex=\"+\">+</mo>\n  <mfrac data-latex=\"\\frac{q^2}{(1-q)}\">\n    <msup data-latex=\"q^2 \">\n      <mi data-latex=\"q\">q</mi>\n      <mn data-latex=\"2\">2</mn>\n    </msup>\n    <mrow data-latex=\"(1-q)\">\n      <mo data-latex=\"(\" stretchy=\"false\">(</mo>\n      <mn data-latex=\"1\">1</mn>\n      <mo data-latex=\"-\">&#x2212;</mo>\n      <mi data-latex=\"q\">q</mi>\n      <mo data-latex=\")\" stretchy=\"false\">)</mo>\n    </mrow>\n  </mfrac>\n  <mo data-latex=\"+\">+</mo>\n  <mfrac data-latex=\"\\frac{q^6}{(1-q)(1-q^2)}\">\n    <msup data-latex=\"q^6 \">\n      <mi data-latex=\"q\">q</mi>\n      <mn data-latex=\"6\">6</mn>\n    </msup>\n    <mrow data-latex=\"(1-q)(1-q^2 )\">\n      <mo data-latex=\"(\" stretchy=\"false\">(</mo>\n      <mn data-latex=\"1\">1</mn>\n      <mo data-latex=\"-\">&#x2212;</mo>\n      <mi data-latex=\"q\">q</mi>\n      <mo data-latex=\")\" stretchy=\"false\">)</mo>\n      <mo data-latex=\"(\" stretchy=\"false\">(</mo>\n      <mn data-latex=\"1\">1</mn>\n      <mo data-latex=\"-\">&#x2212;</mo>\n      <msup data-latex=\"q^2\">\n        <mi data-latex=\"q\">q</mi>\n        <mn data-latex=\"2\">2</mn>\n      </msup>\n      <mo data-latex=\")\" stretchy=\"false\">)</mo>\n    </mrow>\n  </mfrac>\n  <mo data-latex=\"+\">+</mo>\n  <mo data-latex=\"\\cdots\">&#x22EF;</mo>\n  <mo data-latex=\"=\">=</mo>\n  <munderover data-latex=\"\\prod_{j=0}^{\\infty}\">\n    <mo data-latex=\"\\prod\">&#x220F;</mo>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{j=0}\">\n      <mi data-latex=\"j\">j</mi>\n      <mo data-latex=\"=\">=</mo>\n      <mn data-latex=\"0\">0</mn>\n    </mrow>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{\\infty}\">\n      <mi mathvariant=\"normal\" data-latex=\"\\infty\">&#x221E;</mi>\n    </mrow>\n  </munderover>\n  <mfrac data-latex=\"\\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}\">\n    <mn data-latex=\"1\">1</mn>\n    <mrow data-latex=\"(1-q^{5j+2})(1-q^{5j+3})\">\n      <mo data-latex=\"(\" stretchy=\"false\">(</mo>\n      <mn data-latex=\"1\">1</mn>\n      <mo data-latex=\"-\">&#x2212;</mo>\n      <msup data-latex=\"q^{5j+2}\">\n        <mi data-latex=\"q\">q</mi>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{5j+2}\">\n          <mn data-latex=\"5\">5</mn>\n          <mi data-latex=\"j\">j</mi>\n          <mo data-latex=\"+\">+</mo>\n          <mn data-latex=\"2\">2</mn>\n        </mrow>\n      </msup>\n      <mo data-latex=\")\" stretchy=\"false\">)</mo>\n      <mo data-latex=\"(\" stretchy=\"false\">(</mo>\n      <mn data-latex=\"1\">1</mn>\n      <mo data-latex=\"-\">&#x2212;</mo>\n      <msup data-latex=\"q^{5j+3}\">\n        <mi data-latex=\"q\">q</mi>\n        <mrow data-mjx-texclass=\"ORD\" data-latex=\"{5j+3}\">\n          <mn data-latex=\"5\">5</mn>\n          <mi data-latex=\"j\">j</mi>\n          <mo data-latex=\"+\">+</mo>\n          <mn data-latex=\"3\">3</mn>\n        </mrow>\n      </msup>\n      <mo data-latex=\")\" stretchy=\"false\">)</mo>\n    </mrow>\n  </mfrac>\n  <mo data-latex=\",\">,</mo>\n  <mstyle scriptlevel=\"0\" data-latex=\"\\quad\">\n    <mspace width=\"1em\"></mspace>\n  </mstyle>\n  <mstyle scriptlevel=\"0\" data-latex=\"\\quad\">\n    <mspace width=\"1em\"></mspace>\n  </mstyle>\n  <mrow data-latex=\"\\text{for $|q|&lt;1$}\">\n    <mtext>for&#xA0;</mtext>\n    <mrow data-mjx-texclass=\"ORD\">\n      <mo data-mjx-texclass=\"ORD\" stretchy=\"false\" data-latex=\"|\">|</mo>\n      <mi data-latex=\"q\">q</mi>\n      <mo data-mjx-texclass=\"ORD\" stretchy=\"false\" data-latex=\"|\">|</mo>\n      <mo data-latex=\"&lt;\">&lt;</mo>\n      <mn data-latex=\"1\">1</mn>\n    </mrow>\n  </mrow>\n  <mo data-latex=\".\">.</mo>\n</math>"
  ));
  it('A Summation Formula', () => toXmlMatch(tex2mml("\\sum_{n=1}^\\infty {1\\over n^2} = {\\pi^2\\over 6}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sum_{n=1}^\\infty {1\\over n^2} = {\\pi^2\\over 6}\" display=\"block\">\n  <munderover data-latex=\"\\infty\">\n    <mo data-latex=\"\\sum\">&#x2211;</mo>\n    <mrow data-mjx-texclass=\"ORD\" data-latex=\"{n=1}\">\n      <mi data-latex=\"n\">n</mi>\n      <mo data-latex=\"=\">=</mo>\n      <mn data-latex=\"1\">1</mn>\n    </mrow>\n    <mi mathvariant=\"normal\" data-latex=\"infty\">&#x221E;</mi>\n  </munderover>\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n    <mfrac data-latex-item=\"\\over\">\n      <mn data-latex=\"1\">1</mn>\n      <msup data-latex=\"n^2\">\n        <mi data-latex=\"n\">n</mi>\n        <mn data-latex=\"2\">2</mn>\n      </msup>\n    </mfrac>\n  </mrow>\n  <mo data-latex=\"=\">=</mo>\n  <mrow data-mjx-texclass=\"ORD\" data-latex=\"{}\">\n    <mfrac data-latex-item=\"\\over\">\n      <msup data-latex=\"\\pi^2\">\n        <mi data-latex=\"\\pi\">&#x3C0;</mi>\n        <mn data-latex=\"2\">2</mn>\n      </msup>\n      <mn data-latex=\"6\">6</mn>\n    </mfrac>\n  </mrow>\n</math>"
  ));
  it('Cauchy Integral Formula', () => toXmlMatch(tex2mml("f(a) = \\oint_\\gamma \\frac{f(z)}{z-a}dz"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"f(a) = \\oint_\\gamma \\frac{f(z)}{z-a}dz\" display=\"block\">\n  <mi data-latex=\"f\">f</mi>\n  <mo data-latex=\"(\" stretchy=\"false\">(</mo>\n  <mi data-latex=\"a\">a</mi>\n  <mo data-latex=\")\" stretchy=\"false\">)</mo>\n  <mo data-latex=\"=\">=</mo>\n  <msub data-latex=\"\\gamma\">\n    <mo data-latex=\"\\oint\">&#x222E;</mo>\n    <mi data-latex=\"gamma\">&#x3B3;</mi>\n  </msub>\n  <mfrac data-latex=\"\\frac{f(z)}{z-a}\">\n    <mrow data-latex=\"f(z)\">\n      <mi data-latex=\"f\">f</mi>\n      <mo data-latex=\"(\" stretchy=\"false\">(</mo>\n      <mi data-latex=\"z\">z</mi>\n      <mo data-latex=\")\" stretchy=\"false\">)</mo>\n    </mrow>\n    <mrow data-latex=\"z-a\">\n      <mi data-latex=\"z\">z</mi>\n      <mo data-latex=\"-\">&#x2212;</mo>\n      <mi data-latex=\"a\">a</mi>\n    </mrow>\n  </mfrac>\n  <mi data-latex=\"d\">d</mi>\n  <mi data-latex=\"z\">z</mi>\n</math>"
  ));
  it('Standard Deviation', () => toXmlMatch(tex2mml("\\sigma = \\sqrt{\\frac{1}{N}\\sum_{i=1}^N {(x_i-\\mu)}^2}"),
    "<math xmlns=\"http://www.w3.org/1998/Math/MathML\" data-latex=\"\\sigma = \\sqrt{\\frac{1}{N}\\sum_{i=1}^N {(x_i-\\mu)}^2}\" display=\"block\">\n  <mi data-latex=\"\\sigma\">&#x3C3;</mi>\n  <mo data-latex=\"=\">=</mo>\n  <msqrt data-latex=\"\\sqrt{\\frac{1}{N}\\sum_{i=1}^N {(x_i-\\mu)}^2}\">\n    <mfrac data-latex=\"\\frac{1}{N}\">\n      <mn data-latex=\"1\">1</mn>\n      <mi data-latex=\"N\">N</mi>\n    </mfrac>\n    <munderover data-latex=\"\\sum_{i=1}^N\">\n      <mo data-latex=\"\\sum\">&#x2211;</mo>\n      <mrow data-mjx-texclass=\"ORD\" data-latex=\"{i=1}\">\n        <mi data-latex=\"i\">i</mi>\n        <mo data-latex=\"=\">=</mo>\n        <mn data-latex=\"1\">1</mn>\n      </mrow>\n      <mi data-latex=\"N\">N</mi>\n    </munderover>\n    <msup data-latex=\"{(x_i-\\mu)}^2\">\n      <mrow data-mjx-texclass=\"ORD\" data-latex=\"{(x_i-\\mu)}\">\n        <mo data-latex=\"(\" stretchy=\"false\">(</mo>\n        <msub data-latex=\"x_i\">\n          <mi data-latex=\"x\">x</mi>\n          <mi data-latex=\"i\">i</mi>\n        </msub>\n        <mo data-latex=\"-\">&#x2212;</mo>\n        <mi data-latex=\"\\mu\">&#x3BC;</mi>\n        <mo data-latex=\")\" stretchy=\"false\">)</mo>\n      </mrow>\n      <mn data-latex=\"2\">2</mn>\n    </msup>\n  </msqrt>\n</math>"
  ));

});
