/*************************************************************
 *
 *  Copyright (c) 2018-2023 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */


/**
 * @fileoverview Mappings for IEEE macros package.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */

import {CommandMap, EnvironmentMap} from '../../TokenMap.js';
import BaseMethods from '../../base/BaseMethods.js';
import {ParseMethod} from '../../Types.js';
import {TexConstant} from '../../TexConstants.js';
import TexParser from '../../TexParser.js';
import NodeUtil from '../../NodeUtil.js';
import {MmlNode} from '../../../../core/MmlTree/MmlNode.js';
import ParseMethods from '../../ParseMethods.js';
import { ParseUtil } from '../../ParseUtil.js';


let IeeeMacrosMethods: Record<string, ParseMethod> = {};

IeeeMacrosMethods.Macro = BaseMethods.Macro;
IeeeMacrosMethods.Spacer = BaseMethods.Spacer;
IeeeMacrosMethods.Accent = BaseMethods.Accent;
IeeeMacrosMethods.UnderOver = BaseMethods.UnderOver;

IeeeMacrosMethods.SetFont = BaseMethods.SetFont;
IeeeMacrosMethods.Matrix = BaseMethods.Matrix;
IeeeMacrosMethods.Array = BaseMethods.Array;

IeeeMacrosMethods.Hskip = function(parser: TexParser, name: string) {
  ParseUtil.UNIT_CASES.set('pi', 1 / 10); // Same as points
  return BaseMethods.Hskip(parser, name);
}

IeeeMacrosMethods.IeeeMathFont = function(parser: TexParser, name: string, variant: string, style: string) {
  // const text = parser.GetArgument(name);
  // let mml = new TexParser(text, {
  //   multiLetterIdentifiers: parser.options.identifierPattern,
  //   ...parser.stack.env,
  //   font: variant,
  //   noAutoOP: true,
  // }, parser.configuration).mml();
  // parser.Push(parser.create('node', 'TeXAtom', [mml]));
  BaseMethods.MathFont(parser, name, variant);
  const top = parser.stack.Top().First as MmlNode;
  let oldStyle = NodeUtil.getAttribute(top, 'style');
  if (oldStyle) {
    if (style.charAt(style.length - 1) !== ';') {
      style += ';';
    }
    style = oldStyle + ' ' + style;
  }
  NodeUtil.setAttribute(top, 'style', style);
}

/**
 * Macros for IEEE macros package.
 */
new CommandMap('ieee-macros', {
  eqno: ['Macro', '\\tag*{$#1$}', 1],
  AA: ['Macro', '\\unicode[serif]{x212B}'],
  BBA: ['Macro', '{\\Bbb A}'],
  BBB: ['Macro', '{\\Bbb B}'],
  BBC: ['Macro', '{\\Bbb C}'],
  BBD: ['Macro', '{\\Bbb D}'],
  BBE: ['Macro', '{\\Bbb E}'],
  BBF: ['Macro', '{\\Bbb F}'],
  BBG: ['Macro', '{\\Bbb G}'],
  BBH: ['Macro', '{\\Bbb H}'],
  BBI: ['Macro', '{\\Bbb I}'],
  BBJ: ['Macro', '{\\Bbb J}'],
  BBK: ['Macro', '{\\Bbb K}'],
  BBL: ['Macro', '{\\Bbb L}'],
  BBM: ['Macro', '{\\Bbb M}'],
  BBN: ['Macro', '{\\Bbb N}'],
  BBO: ['Macro', '{\\Bbb O}'],
  BBP: ['Macro', '{\\Bbb P}'],
  BBQ: ['Macro', '{\\Bbb Q}'],
  BBR: ['Macro', '{\\Bbb R}'],
  BBS: ['Macro', '{\\Bbb S}'],
  BBT: ['Macro', '{\\Bbb T}'],
  BBU: ['Macro', '{\\Bbb U}'],
  BBV: ['Macro', '{\\Bbb V}'],
  BBW: ['Macro', '{\\Bbb W}'],
  BBX: ['Macro', '{\\Bbb X}'],
  BBY: ['Macro', '{\\Bbb Y}'],
  BBZ: ['Macro', '{\\Bbb Z}'],
  bb: ['Macro', '\\mathbb'],
  BB: ['Macro', '\\mathbb'],
  
  circone: ['Macro', '\\unicode{x2460}'],
  circtwo: ['Macro', '\\unicode{x2461}'],
  circthree: ['Macro', '\\unicode{x2462}'],
  circfour: ['Macro', '\\unicode{x2463}'],
  circfive: ['Macro', '\\unicode{x2464}'],
  circsix: ['Macro', '\\unicode{x2465}'],
  circseven: ['Macro', '\\unicode{x2466}'],
  circeight: ['Macro', '\\unicode{x2467}'],
  circnine: ['Macro', '\\unicode{x2468}'],
  circa: ['Macro', '\\unicode{x24D0}'],
  circb: ['Macro', '\\unicode{x24D1}'],
  circc: ['Macro', '\\unicode{x24D2}'],
  circd: ['Macro', '\\unicode{x24D3}'],
  circled: ['Macro', '\\unicode{x24D3}'],
  circe: ['Macro', '\\unicode{x24D4}'],
  circf: ['Macro', '{\\unicode{x24D5}}'],
  circg: ['Macro', '{\\unicode{x24D6}}'],
  circh: ['Macro', '{\\unicode{x24D7}}'],
  circi: ['Macro', '\\unicode{x24D8}'],
  circk: ['Macro', '{\\unicode{x24DA}}'],
  circl: ['Macro', '{\\unicode{x24DB}}'],
  circm: ['Macro', '{\\unicode{x24DC}}'],
  circlem: ['Macro', '\\unicode{x24DC}'],
  circn: ['Macro', '{\\unicode{x24DD}}'],
  circo: ['Macro', '\\unicode{x24DE}'],
  circp: ['Macro', '\\unicode{x24DF}'],  
  circq: ['Macro', '{\\unicode{x24E0}}'],
  circr: ['Macro', '{\\unicode{x24E1}}'],
  circs: ['Macro', '\\unicode{x24E2}'],
  circv: ['Macro', '\\unicode{x24E5}'],
  circw: ['Macro', '\\unicode{x24E6}'],
  circy: ['Macro', '{\\unicode{x24E8}}'],
  circz: ['Macro', '{\\unicode{x24E9}}'],
  circA: ['Macro', '\\unicode{x24B6}'],
  circB: ['Macro', '\\unicode{x24B7}'],
  circC: ['Macro', '\\unicode{x24B8}'],
  circD: ['Macro', '\\unicode{x24B9}'],
  circE: ['Macro', '{\\unicode{x24BA}}'],
  circF: ['Macro', '{\\unicode{x24BB}}'],
  circG: ['Macro', '{\\unicode{x24BC}}'],
  circleH: ['Macro', '\\unicode{x24BD}'],
  circI: ['Macro', '{\\unicode{x24BE}}'],
  circJ: ['Macro', '{\\unicode{x24BF}}'],
  circL: ['Macro', '{\\unicode{x24C1}}'],
  circM: ['Macro', '\\unicode{x24C2}'],
  circO: ['Macro', '{\\unicode{x24C4}}'],
  circP: ['Macro', '{\\unicode{x24C5}}'],
  circR: ['Macro', '\\unicode{x24C7}'],
  circS: ['Macro', '\\unicode{x24C8}'],
  circT: ['Macro', '{\\unicode{x24C9}}'],
  circU: ['Macro', '\\unicode{x24CA}'],
  circV: ['Macro', '{\\unicode{x24CB}}'],
  circX: ['Macro', '\\unicode{x24CD}'],
  circY: ['Macro', '{\\unicode{x24CE}}'],
  circZ: ['Macro', '{\\unicode{x24CF}}'],
  circast: ['Macro', '\\unicode{x229B}'],
  circit: ['Macro', '\\bigcirc \\kern-17mu{\\scriptstyle{#1}}\\hskip4pt', 1],
  textcircled: ['Macro', '\\bigcirc \\kern-17mu{\\scriptstyle{#1}}\\hskip4pt', 1],

  Alpha: ['Macro', '{\\rm A}'],
  Beta: ['Macro', '{\\rm B}'],
  Deltab: ['Macro', '\\boldsymbol{\\Delta}'],
  Epsilon: ['Macro', '{\\rm E}'],
  Gammab: ['Macro', '\\boldsymbol{\\Gamma}'],
  Kappa: ['Macro', '{\\rm K}'],
  Lambdab: ['Macro', '\\boldsymbol{\\Lambda}'],
  Lambdabmit: ['Macro', '\\boldsymbol{\\Lambda}'],
  Omegab: ['Macro', '\\boldsymbol{\\Omega}'],
  Psib: ['Macro', '\\boldsymbol{\\Psi}'],
  Psibmit: ['Macro', '\\boldsymbol{\\Psi}'],
  Sha: ['Macro', '\\unicode{x0428}'],
  Sigmab: ['Macro', '\\boldsymbol{\\Sigma}'],
  Sigmabmit: ['Macro', '\\boldsymbol{\\Sigma}'],
  Thetab: ['Macro', '\\boldsymbol{\\Theta}'],
  Thetabmit: ['Macro', '\\boldsymbol{\\Theta}'],
  Upsilonb: ['Macro', '\\boldsymbol{\\Upsilon}'],       
  Xibmit: ['Macro', '\\boldsymbol{\\Xi}'],
  Zhe: ['Macro', '\\unicode{x0416}'],
  alphab: ['Macro', '\\boldsymbol{\\alpha}'],
  betab: ['Macro', '\\boldsymbol{\\beta}'],
  bigsqcap: ['Macro', '\\Large\\unicode{x2293}'],
  boldGamma: ['Macro', '\\boldsymbol{\\Gamma}'],
  boxast: ['Macro', '\\unicode{x29C6}'],
  chib: ['Macro', '\\boldsymbol{\\chi}'],
  coloneqq: ['Macro', '\\unicode{x2254}'],
  cox: ['Macro', '\\raise1.5pt{\\scriptsize\\unicode{x25EF}\\kern -0.80em\\unicode{x25C7}}\\normalsize'],
  deltab: ['Macro', '\\boldsymbol{\\delta}'],
  epsilonb: ['Macro', '\\boldsymbol{\\epsilon}'],
  etab: ['Macro', '\\boldsymbol{\\eta}'],
  female: ['Macro', '{\\unicode{x2640}}'],
  gammab: ['Macro', '\\boldsymbol{\\gamma}'],
  hexagon: ['Macro', '\\unicode{x02394}'],
  i: ['Macro', '\\unicode{x131}'],
  iotab: ['Macro', '\\boldsymbol{\\iota}'],
  lambdab: ['Macro', '\\boldsymbol{\\lambda}'],
  lambdabar: ['Macro', '\\unicode{x207B}\\kern -.30em \\lambda'],
  leftsquigarrow: ['Macro', '\\unicode{x2B33}'],
  llcorner: ['Macro', '\\unicode{x231E}'],
  lrcorner: ['Macro', '\\unicode{x231F}'],
  mapsfrom: ['Macro', '\\unicode{x021A4}'],
  mub: ['Macro', '\\boldsymbol{\\mu}'],
  nsubset: ['Macro', '\\not\\subset'],
  nsubseteq: ['Macro', '\\not\\subseteq'],
  nub: ['Macro', '\\boldsymbol{\\nu}'],
  omegab: ['Macro', '\\boldsymbol{\\omega}'],
  ovalbox: ['Macro', '\\enclose{roundedbox}{#1}',1],
  owedge: ['Macro', '\\bigcirc \\kern-1.05em \\wedge'],
  permil: ['Macro', '\\unicode{x2030}'],
  phase: ['Macro', '\\enclose{phasorangle}{#1}',1],
  phib: ['Macro', '\\boldsymbol{\\phi}'],
  pib: ['Macro', '\\boldsymbol{\\pi}'],
  psib: ['Macro', '\\boldsymbol{\\psi}'],
  rhob: ['Macro', '\\boldsymbol{\\rho}'],
  sha: ['Macro', '\\unicode{x0448}'],
  sharpb: ['Macro', '\\boldsymbol{\\sharp}'],
  sigmab: ['Macro', '\\boldsymbol{\\sigma}'],
  taub: ['Macro', '\\boldsymbol{\\tau}'],
  thetab: ['Macro', '\\boldsymbol{\\theta}'],
  thetahatb: ['Macro', '\\boldsymbol{\\hat{\\theta}}'],
  upsilonb: ['Macro', '\\boldsymbol{\\upsilon}'],
  varepsilonb: ['Macro', '\\boldsymbol{\\varepsilon}'],
  varphib: ['Macro', '\\boldsymbol{\\varphi}'],
  varpib: ['Macro', '\\boldsymbol{\\varpi}'],
  varrhob: ['Macro', '\\boldsymbol{\\varrho}'],
  varsigmab: ['Macro', '\\boldsymbol{\\varsigma}'],
  varthetab: ['Macro', '\\boldsymbol{\\vartheta}'],
  xib: ['Macro', '\\boldsymbol{\\xi}'],
  zetab: ['Macro', '\\boldsymbol{\\zeta}'],

  bold: ['Macro', '{\\bf{#1}}', 1],
  mathbi: ['Macro', '\\boldsymbol'],
  mbi: ['Macro', '\\boldsymbol'],
  schmi: ['Macro', '\\boldsymbol'],
  mmb: ['Macro', '{\\boldsymbol #1}', 1],
  bm: ['Macro', '\\pmb{#1}', 1],
  bmit: ['Macro', '\\boldsymbol'],
  ssr: ['Macro', '\\sf'],
  widecheck: ['Accent', '030C', 1],
  
  mathacute: ['Macro', '\\acute'],
  mathbreve: ['Macro', '\\breve'],
  mathcheck: ['Macro', '\\check'],
  mathdot: ['Macro', '\\dot'],
  mathddot: ['Macro', '\\ddot'],
  mathhat: ['Macro', '\\hat'],
  mathtilde: ['Macro', '\\tilde'],
  mathL: ['Macro', '\\unicode{x141}'],
  mathl: ['Macro', '\\unicode{x142}'],
  
  REALE: ['Macro', '{\\rm I\\kern-.20em E}'],
  REALK: ['Macro', '{\\rm I\\kern-.20em K}'],
  REALN: ['Macro', '{\\rm I\\kern-.20em N}'],
  REALP: ['Macro', '{\\rm I\\kern-.20em P}'],
  REALR: ['Macro', '{\\rm I\\kern-.20em R}'],
  REALT: ['Macro', '{\\rm I\\kern-.40em T}'],
  REALONE: ['Macro', '\\unicode[serif]{x1D7D9}'],
  realone: ['Macro', '\\unicode{x1D7D9}'],
  bbalpha: ['Macro', '\\shortmid\\kern -.57em\\unicode{x3B1}'],
  bbbeta: ['Macro', '|\\kern -.30em\\unicode{x3B2}'],
  bblambda: ['Macro', '\\unicode{x3BB}\\kern -.20em\\unicode{x005C}'],
  // UP TO HERE: ieee-macros.html

  // These are the same as in textcomp. They should be taken from there.
  textbackslash: ['Macro', '\\unicode{x005C}'],
  textcent: ['Macro', '\\unicode{x00A2}'],
  textcurrency: ['Macro', '\\unicode{x00A4}'],
  textdegree: ['Macro', '\\unicode{x00B0}'],
  textdollar: ['Macro', '\\unicode{x0024}'],
  textexclamdown: ['Macro', '\\unicode{x00A1}'],
  textless: ['Macro', '\\unicode{x003C}'],
  textgreater: ['Macro', '\\unicode{x003E}'],
  textlbrackdbl: ['Macro', '\\unicode{x27E6}'],
  textnumero: ['Macro', '\\unicode{x2116}'],
  textperthousand: ['Macro', '\\unicode{x2030}'],
  textquestiondown: ['Macro', '\\unicode{x00BF}'],
  textquotedbl: ['Macro', '\\unicode{x0022}'],
  textquotedblleft: ['Macro', '\\unicode{x201C}'],
  textquotedblright: ['Macro', '\\unicode{x201D}'],
  textrbrackdbl: ['Macro', '\\unicode{x27E7}'],
  textregistered: ['Macro', '\\unicode{x00AE}'],
  textyen: ['Macro', '\\unicode{x00A5}'],
  textbullet: ['Macro', '\\unicode{x00A5}'],

  Mapsto: ['Macro', '\\unicode{x2907}'],
  
  boxaround: ['Macro', '{\\boxed{#1}}', 1],
  boxwrap: ['Macro', '{\\boxed{#1}}', 1],
  boxed: ['Macro', '{\\fbox{$#1$}}', 1],
  pounds: ['Macro', '\\unicode[serif]{x00A3}'],
  euro: ['Macro', '\\unicode[serif]{x20AC}'],
  pound: ['Macro', '\\unicode[serif]{x00A3}'],
  cent: ['Macro', '\\unicode{x00A2}'],

  
  arrowoncirc: ['Macro', '{\\unicode{x21F4}}'],
  arrowonoplus: ['Macro', '\\unicode{x27F4}'],

  binary: ['Macro', '{\\rm I\\kern -0.17em B}'],
  blackbox: ['Macro', '\\blacksquare'],
  blacksquarebox: ['Macro', '\\blacksquare'],
  blackdiamond: ['Macro', '\\unicode{x2666}'],
  blackslug: ['Macro', '\\unicode{x25AE}'],
  blacktriangleup: ['Macro', '\\blacktriangle'],
  boxbox: ['Macro', '\\unicode{x29C8}'],
  boxslash: ['Macro', '\\unicode{x29C4}'],
  complex: ['Macro', '\\unicode{x2102}'],
  complexs: ['Macro', '\\unicode{x2102}'],
  copyright: ['Macro', '\\unicode{x00A9}'],
  csi: ['Macro', '{\\iint\\kern-8pt\\raise1pt\\scriptscriptstyle{\\bigcirc}}'],
  cupdot: ['Macro', '\\unicode{x228D}'],
  dag: ['Macro', '\\dagger'],
  ddag: ['Macro', '\\ddagger'],
  de: ['Macro', '\\buildrel \\Delta \\over = '],
  frbox: ['Macro', '\\unicode{x2610}'],
  harpr: ['Macro', '{\\raise1pt\\hbox{$^{\\scriptscriptstyle\\rightharpoonup}$}\\kern-5.5pt r\\hskip1pt}'],
  harpm: ['Macro', '{\\raise1pt\\hbox{$^{\\scriptscriptstyle\\rightharpoonup}$}\\kern-5.5pt m\\hskip1pt}'],
  harpk: ['Macro', '{\\raise1pt\\hbox{$^{\\scriptscriptstyle\\rightharpoonup}$}\\kern-5.5pt k\\hskip1pt}'],
  harpn: ['Macro', '{\\raise1pt\\hbox{$^{\\scriptscriptstyle\\rightharpoonup}$}\\kern-5.5pt n\\hskip1pt}'],
  hellip: ['Macro', '\\unicode{x2026}'],
  hilbert: ['Macro', '{\\rm I\\kern -0.15em H}'],
  lddots: ['Macro', '\\unicode{x22F0}'],
  ldquo: ['Macro', '\\unicode{x201C}'],
  leftarrowtriangle: ['Macro', '\\unicode{x21FD}'],
  leftmoon: ['Macro', '\\unicode{x263E}'],
  lhook: ['Macro', '\\hookrightarrow'],
  rhook: ['Macro', '\\hookleftarrow'],
  lq: ['Macro', '\\unicode{x2018}'],
  L: ['Macro', '\\unicode{x141}'],
  l: ['Macro', '\\unicode{x142}'],
  male: ['Macro', '\\unicode{x2642}'],
  mathoslash: ['Macro', '\\unicode{x00F8}'],
  mathOslash: ['Macro', '\\unicode{x00D8}'],
  minus: ['Macro', '\\unicode{x2212}'],
  ndash: ['Macro', '\\unicode{x2212}'],
  posinteger: ['Macro', '{\\rm I\\kern -0.13em N}'],
  precstar: ['Macro', '{\\prec\\hskip-4pt{\\raise1.3pt{\\scriptscriptstyle{+}}}}'],
  reallongarrow: ['Macro', '\\longrightarrow'],
  rightarrowtriangle: ['Macro', '\\unicode{x21FE}'],
  rightharpoon: ['Macro', '\\unicode{x21C0}'],
  rms: ['Macro', '\\unicode{x24C7}'],
  semaphorel: ['Macro', '\\unicode{x25E9}'],
  semaphorer: ['Macro', '\\unicode{x25EA}'],

  slash: ['Macro', '\\unicode{x2215}'],
  squaredot: ['Macro', '\\unicode{x22A1}'],
  Squaredot: ['Macro', '\\unicode{x2B1D}'],
  Squarepipe: ['Macro', '\\unicode{x25A1}'],
  subsquare: ['Macro', '{\\scriptscriptstyle\\square}'],
  squarebox: ['Macro', '{\\square}'],
  sun: ['Macro', '\\unicode{x263C}'],
  thorn: ['Macro', '\\unicode{x00FE}'],
  th: ['Macro', '\\unicode{x00FE}'],
  tr: ['Macro', '\\mathop{\\rm tr}'],
  wedgie: ['Macro', '{\\raise2pt\\scriptstyle\\wedge}'],
  ZED: ['Macro', '\\sf{Z}\\hskip-4pt\\sf{Z}'],
  baracc: ['Macro', '\\unicode{x207B}'],
  ss: ['Macro', '\\unicode{x00DF}'],
  O: ['Macro', '\\unicode{x00D8}'],
  upalpha: ['Macro', '\\unicode{x03B1}'],
  upbeta: ['Macro', '\\unicode{x03B2}'],
  upchi: ['Macro', '\\unicode{x03C7}'],
  updelta: ['Macro', '\\unicode{x03B4}'],
  upepsilon: ['Macro', '\\unicode{x03F5}'],
  upeta: ['Macro', '\\unicode{x03B7}'],
  upgamma: ['Macro', '\\unicode{x03B3}'],
  upiota: ['Macro', '\\unicode{x03B9}'],
  upkappa: ['Macro', '\\unicode{x03BA}'],
  uplambda: ['Macro', '\\unicode{x03BB}'],
  upmu: ['Macro', '\\unicode{x03BC}'],
  upnu: ['Macro', '\\unicode{x03BD}'],
  upomega: ['Macro', '\\unicode{x03C9}'],
  upphi: ['Macro', '\\unicode{x03C6}'],
  uppi: ['Macro', '\\unicode{x03C0}'],
  uppsi: ['Macro', '\\unicode{x03C8}'],
  uprho: ['Macro', '\\unicode{x03C1}'],
  upsigma: ['Macro', '\\unicode{x03C3}'],
  uptau: ['Macro', '\\unicode{x03C4}'],
  uptheta: ['Macro', '\\unicode{x03B8}'],
  upupsilon: ['Macro', '\\unicode{x028A}'],
  upvarepsilon: ['Macro', '\\unicode{x03F5}'],
  upvarphi: ['Macro', '\\unicode{x03C6}'],
  upvarpi: ['Macro', '\\unicode{x03D6}'],
  upvarrho: ['Macro', '\\unicode{x03F1}'],
  upvarsigma: ['Macro', '\\unicode{x03C2}'],
  upvartheta: ['Macro', '\\unicode{x03D1}'],
  upxi: ['Macro', '\\unicode{x03BE}'],
  upzeta: ['Macro', '\\unicode{x03B6}'],
  llbracket: ['Macro', '\\unicode{x27E6}'],
  rrbracket: ['Macro', '\\unicode{x27E7}'],
  icy: ['Macro', '\\unicode{x00438}'],
  oiint: ['Macro', '{\\LARGE{\\unicode{x222F}}}'],
  oiiint: ['Macro', '{\\LARGE{\\unicode{x2230}}}'],
  ocircle: ['Macro', '\\unicode{x29BE}'],
  indent: ['Macro', '\\qquad'],
  overparen: ['UnderOver','23DC'],
  underparen: ['UnderOver','23DD'],
  wideparen: ['Macro', '\\overparen'],
  
  'break': ['Macro', ''],
  'null': ['Macro', ''],
  relax: ['Macro', ''],
  thickspace: ['Macro', '{\\;}'],
  operatornamewithlimits: ['Macro', '\\mathop{#1}', 1],
  sc: ['Macro', '\\scriptsize{#1}\\normalsize', 1],
  textsc: ['Macro', '\\scriptsize{#1}\\normalsize', 1],
  EuScript: ['Macro', '\\matheus{#1}',1],
  textsl: ['Macro', '{\\tt\\textit{#1}}', 1],
  texttt: ['Macro', '{\\tt\\text{#1}}', 1],

  
  /* Don't use dsmath macros, use correct syntax \mathds{x} */
  mathds: ['Macro', '\\mathbb{#1}', 1],
  dsmathA: ['Macro', '\\unicode[serif]{x1D538}'],
  dsmathB: ['Macro', '\\unicode[serif]{x1D539}'],
  dsmathC: ['Macro', '\\unicode[serif]{x02102}'],
  dsmathD: ['Macro', '\\unicode[serif]{x1D53B}'],
  dsmathE: ['Macro', '\\unicode[serif]{x1D53C}'],
  dsmathF: ['Macro', '\\unicode[serif]{x1D53D}'],
  dsmathG: ['Macro', '\\unicode[serif]{x1D53E}'],
  dsmathH: ['Macro', '\\unicode[serif]{x0210D}'],
  dsmathI: ['Macro', '\\unicode[serif]{x1D540}'],
  dsmathJ: ['Macro', '\\unicode[serif]{x1D541}'],
  dsmathK: ['Macro', '\\unicode[serif]{x1D542}'],
  dsmathL: ['Macro', '\\unicode[serif]{x1D543}'],
  dsmathM: ['Macro', '\\unicode[serif]{x1D544}'],
  dsmathN: ['Macro', '\\unicode[serif]{x02115}'],
  dsmathO: ['Macro', '\\unicode[serif]{x1D546}'],
  dsmathP: ['Macro', '\\unicode[serif]{x02119}'],
  dsmathQ: ['Macro', '\\unicode[serif]{x0211A}'],
  dsmathR: ['Macro', '\\unicode[serif]{x0211D}'],
  dsmathS: ['Macro', '\\unicode[serif]{x1D54A}'],
  dsmathT: ['Macro', '\\unicode[serif]{x1D54B}'],
  dsmathU: ['Macro', '\\unicode[serif]{x1D54C}'],
  dsmathV: ['Macro', '\\unicode[serif]{x1D54D}'],
  dsmathW: ['Macro', '\\unicode[serif]{x1D54E}'],
  dsmathX: ['Macro', '\\unicode[serif]{x1D54F}'],
  dsmathY: ['Macro', '\\unicode[serif]{x1D550}'],
  dsmathZ: ['Macro', '\\unicode[serif]{x02124}'],
  dsmatha: ['Macro', '\\unicode[serif]{x1D552}'],
  dsmathb: ['Macro', '\\unicode[serif]{x1D553}'],
  dsmathc: ['Macro', '\\unicode[serif]{x1D554}'],
  dsmathd: ['Macro', '\\unicode[serif]{x1D555}'],
  dsmathe: ['Macro', '\\unicode[serif]{x1D556}'],
  dsmathf: ['Macro', '\\unicode[serif]{x1D557}'],
  dsmathg: ['Macro', '\\unicode[serif]{x1D558}'],
  dsmathh: ['Macro', '\\unicode[serif]{x1D559}'],
  dsmathi: ['Macro', '\\unicode[serif]{x1D55A}'],
  dsmathj: ['Macro', '\\unicode[serif]{x1D55B}'],
  dsmathk: ['Macro', '\\unicode[serif]{x1D55C}'],
  dsmathl: ['Macro', '\\unicode[serif]{x1D55D}'],
  dsmathm: ['Macro', '\\unicode[serif]{x1D55E}'],
  dsmathn: ['Macro', '\\unicode[serif]{x1D55F}'],
  dsmatho: ['Macro', '\\unicode[serif]{x1D560}'],
  dsmathp: ['Macro', '\\unicode[serif]{x1D561}'],
  dsmathq: ['Macro', '\\unicode[serif]{x1D562}'],
  dsmathr: ['Macro', '\\unicode[serif]{x1D563}'],
  dsmaths: ['Macro', '\\unicode[serif]{x1D564}'],
  dsmatht: ['Macro', '\\unicode[serif]{x1D565}'],
  dsmathu: ['Macro', '\\unicode[serif]{x1D566}'],
  dsmathv: ['Macro', '\\unicode[serif]{x1D567}'],
  dsmathw: ['Macro', '\\unicode[serif]{x1D568}'],
  dsmathx: ['Macro', '\\unicode[serif]{x1D569}'],
  dsmathy: ['Macro', '\\unicode[serif]{x1D56A}'],
  dsmathz: ['Macro', '\\unicode[serif]{x1D56B}'],
  dsmath1: ['Macro', '\\unicode[serif]{x1D7D9}'],
  dsmathtwo: ['Macro', '\\unicode[serif]{x1D7DA}'],
  dsmaththree: ['Macro', '\\unicode[serif]{x1D7DB}'],
  dsmathfour: ['Macro', '\\unicode[serif]{x1D7DC}'],
  dsmathfive: ['Macro', '\\unicode[serif]{x1D7DD}'],
  dsmathsix: ['Macro', '\\unicode[serif]{x1D7DE}'],
  dsmathseven: ['Macro', '\\unicode[serif]{x1D7DF}'],
  dsmatheight: ['Macro', '\\unicode[serif]{x1D7E0}'],
  dsmathnine: ['Macro', '\\unicode[serif]{x1D7E1}'],
  dsmathzero: ['Macro', '\\unicode[serif]{x1D7D8}'],

  /* Don't use bbmssmath, use correct syntax \mathbbmss{x} */
  mathbbmss: ['Macro', '\\mathbb{#1}', 1],
  bbmssmathA: ['Macro', '\\unicode[sans-serif]{x1D538}'],
  bbmssmathB: ['Macro', '\\unicode{x1D539}'],
  bbmssmathC: ['Macro', '\\unicode{x02102}'],
  bbmssmathD: ['Macro', '\\unicode{x1D53B}'],
  bbmssmathE: ['Macro', '\\unicode{x1D53C}'],
  bbmssmathF: ['Macro', '\\unicode{x1D53D}'],
  bbmssmathG: ['Macro', '\\unicode{x1D53E}'],
  bbmssmathH: ['Macro', '\\unicode{x0210D}'],
  bbmssmathI: ['Macro', '\\unicode{x1D540}'],
  bbmssmathJ: ['Macro', '\\unicode{x1D541}'],
  bbmssmathK: ['Macro', '\\unicode{x1D542}'],
  bbmssmathL: ['Macro', '\\unicode{x1D543}'],
  bbmssmathM: ['Macro', '\\unicode{x1D544}'],
  bbmssmathN: ['Macro', '\\unicode{x02115}'],
  bbmssmathO: ['Macro', '\\unicode{x1D546}'],
  bbmssmathP: ['Macro', '\\unicode{x02119}'],
  bbmssmathQ: ['Macro', '\\unicode{x0211A}'],
  bbmssmathR: ['Macro', '\\unicode{x0211D}'],
  bbmssmathS: ['Macro', '\\unicode{x1D54A}'],
  bbmssmathT: ['Macro', '\\unicode{x1D54B}'],
  bbmssmathU: ['Macro', '\\unicode{x1D54C}'],
  bbmssmathV: ['Macro', '\\unicode{x1D54D}'],
  bbmssmathW: ['Macro', '\\unicode{x1D54E}'],
  bbmssmathX: ['Macro', '\\unicode{x1D54F}'],
  bbmssmathY: ['Macro', '\\unicode{x1D550}'],
  bbmssmathZ: ['Macro', '\\unicode{x02124}'],
  bbmssmatha: ['Macro', '\\unicode{x1D552}'],
  bbmssmathb: ['Macro', '\\unicode{x1D553}'],
  bbmssmathc: ['Macro', '\\unicode{x1D554}'],
  bbmssmathd: ['Macro', '\\unicode{x1D555}'],
  bbmssmathe: ['Macro', '\\unicode{x1D556}'],
  bbmssmathf: ['Macro', '\\unicode{x1D557}'],
  bbmssmathg: ['Macro', '\\unicode{x1D558}'],
  bbmssmathh: ['Macro', '\\unicode{x1D559}'],
  bbmssmathi: ['Macro', '\\unicode{x1D55A}'],
  bbmssmathj: ['Macro', '\\unicode{x1D55B}'],
  bbmssmathk: ['Macro', '\\unicode{x1D55C}'],
  bbmssmathl: ['Macro', '\\unicode{x1D55D}'],
  bbmssmathm: ['Macro', '\\unicode{x1D55E}'],
  bbmssmathn: ['Macro', '\\unicode{x1D55F}'],
  bbmssmatho: ['Macro', '\\unicode{x1D560}'],
  bbmssmathp: ['Macro', '\\unicode{x1D561}'],
  bbmssmathq: ['Macro', '\\unicode{x1D562}'],
  bbmssmathr: ['Macro', '\\unicode{x1D563}'],
  bbmssmaths: ['Macro', '\\unicode{x1D564}'],
  bbmssmatht: ['Macro', '\\unicode{x1D565}'],
  bbmssmathu: ['Macro', '\\unicode{x1D566}'],
  bbmssmathv: ['Macro', '\\unicode{x1D567}'],
  bbmssmathw: ['Macro', '\\unicode{x1D568}'],
  bbmssmathx: ['Macro', '\\unicode{x1D569}'],
  bbmssmathy: ['Macro', '\\unicode{x1D56A}'],
  bbmssmathz: ['Macro', '\\unicode{x1D56B}'],
  bbmssmathzero: ['Macro', '\\unicode{x1D7D8}'],
  bbmssmathone: ['Macro', '\\unicode{x1D7D9}'],
  bbmssmathtwo: ['Macro', '\\unicode{x1D7DA}'],
  bbmssmaththree: ['Macro', '\\unicode{x1D7DB}'],
  bbmssmathfour: ['Macro', '\\unicode{x1D7DC}'],
  bbmssmathfive: ['Macro', '\\unicode{x1D7DD}'],
  bbmssmathsix: ['Macro', '\\unicode{x1D7DE}'],
  bbmssmathseven: ['Macro', '\\unicode{x1D7DF}'],
  bbmssmatheight: ['Macro', '\\unicode{x1D7E0}'],
  bbmssmathnine: ['Macro', '\\unicode{x1D7E1}'],
  lambdaslash: ['Macro', '\\uplambda \\kern -0.45em \\raise2.5pt{\\style{transform:rotate(-45deg); transform-origin:left baseline; display:inline-block}{\\hbox{-}}}\\kern 0.1em'],
  backcong: ['Macro', '\\unicode{x224C}'],
  textschwa: ['Macro', '\\unicode{x0259}'],

  bla: ['Macro', '\\buildrel \\longrightarrow \\over {#1}', 1],
  bra: ['Macro', '\\buildrel \\longleftarrow \\over {#1}', 1],
  dddots: ['Macro', '\\mathop{#1}\\limits^{\\scriptstyle\\ldots}', 1],
  doubleint:  ['Macro', '\\iint_{#1}', 1],
  enskip: ['Macro', '\\enspace #1\\enspace', 1],
  Fraktur: ['Macro', '{\\frak #1}', 1],
  fraktur: ['Macro', '{\\frak #1}', 1],
  joinrel: ['Macro', '{\\mathrel{\\mkern-3.5pt} #1}', 1],
  relbar: ['Macro', '{\\mathrel{-}}'],
  harp: ['Macro', '\\buildrel \\scriptstyle\\rightharpoonup \\over #1', 1],
  lilrvec: ['Macro', '\\mathop{#1}\\limits^{\\scriptstyle\\leftrightarrow}', 1],
  lrvec: ['Macro', '\\mathop{#1}\\limits^{\\leftrightarrow}', 1],
  overcat: ['Macro', '\\mathop{#1}\\limits^{#2}', 2],
  quaddot: ['Macro', '{\\ddot{\\hskip-2.8pt\\ddot{#1}}}', 1],
  stackvec: ['Macro', '\\lilrvec{\\lilrvec{#1}}', 1],
  ula: ['Macro', '\\buildrel{#1}\\over{\\leftarrow}', 1],
  underdog: ['Macro', '\\mathop{#1}\\limits_{#2}', 2],
  undertilde: ['Macro', '{\\mathop{#1}\\limits_{\\unicode{x007E}}}', 1],
  underdot: ['Macro', '{{#1}{\\unicode{x0323}}}', 1],
  doublegrave: ['Macro', '{{#1}{\\unicode{x030F}}}', 1],
  ura: ['Macro', '\\buildrel{#1}\\over{\\rightarrow}', 1],

  src: ['MathFont', TexConstant.Variant.SCRIPT],
  // dsmath:    ['IeeeMathFont', TexConstant.Variant.DOUBLESTRUCK, 'serif'],
  // mathbbmss: ['IeeeMathFont', TexConstant.Variant.DOUBLESTRUCK, 'sans-serif'],
}, IeeeMacrosMethods);


new CommandMap('ieee-macros-structures', {
  // eqalignno: 'ieeeEqalignno',
  // displaylines: 'ieeeMatrix',
  // matrix: 'ieeeMatrix',
  // vcenter: 'ieeeVCenter',
  // vrule: 'ieeeVRule',
  // halign: 'ieeeHAlign',
  // hfill: 'ieeeHFill',
  // noalign: 'ieeeNoAlign',
  // mathchar: 'ieeeMathChar',
  // mathaccent: 'ieeeMathAccent',
  scases: ['Matrix', '', '', 'left left', null, '.1em', null, true],
  ssi: ['SetFont', TexConstant.Variant.SANSSERIFITALIC],
  ssb: ['SetFont', TexConstant.Variant.BOLDSANSSERIF],
  sl:  ['SetFont', TexConstant.Variant.ITALIC]              // not sure what you want this to be
}, IeeeMacrosMethods);

new CommandMap('ieee-macros-others', {
  // eqalignno: 'ieeeEqalignno',
  // displaylines: 'ieeeMatrix',
  // matrix: 'ieeeMatrix',
  // vcenter: 'ieeeVCenter',
  // vrule: 'ieeeVRule',
  // halign: 'ieeeHAlign',
  // hfill: 'ieeeHFill',
  // noalign: 'ieeeNoAlign',
  // mathchar: 'ieeeMathChar',
  // mathaccent: 'ieeeMathAccent',
  hskip: 'Hskip',
  noindent: ['Spacer', 0]
}, IeeeMacrosMethods);


new EnvironmentMap('ieee-macros-environments',  ParseMethods.environment, {
  scases: ['Array', null, '', '.', 'll', null, '.2em', 'T']
}, IeeeMacrosMethods);
