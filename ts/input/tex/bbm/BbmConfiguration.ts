/*************************************************************
 *
 *  Copyright (c) 2017-2023 The MathJax Consortium
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
 * @fileoverview The bbm package.
 *
 * @author v.sorge@mathjax.org (Volker Sorge)
 */

import {Configuration} from '../Configuration.js';
import {CommandMap} from '../TokenMap.js';
import BaseMethods from '../base/BaseMethods.js';
import {ParseMethod} from '../Types.js';
import TexParser from '../TexParser.js';

/**
 * The methods that implement the bbm package.
 */
let BbmMethods: Record<string, ParseMethod> = {};

BbmMethods.MathFont = BaseMethods.MathFont;
BbmMethods.ChooseFont = function(parser: TexParser, name: string,
                                 regular: string, bold: string) {
  BaseMethods.MathFont(parser, name, parser.options.bbm.bold ? bold : regular);
}
BbmMethods.ChangeBold = function(parser: TexParser, name: string) {
  const font = parser.GetArgument(name);
  parser.options.bbm.bold = (font === 'bold' ? true : false);
}


new CommandMap('bbm', {
  mathversion: 'ChangeBold',
  mathbbm: ['ChooseFont', '-bbm-normal', '-bbm-bold'],
  mathbbmss: ['ChooseFont', '-bbm-sans-serif', '-bbm-sans-serif-bold'],
  mathbbmtt: ['MathFont', '-bbm-monospace']
}, BbmMethods);

//
//  Define the package configuration, including switch for sans serif.
//
export const BbmConfiguration = Configuration.create('bbm', {
  handler: {
    macro: ['bbm'],
  },
  options: {
    bbm: {
      bold: false
    }
  }
});

