/*************************************************************
 *
 *  Copyright (c) 2018-2022 The MathJax Consortium
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
import {SvgCharMap, AddPaths} from '../../FontData.js';
import {sansSerifBold as font} from '../../../common/fonts/tex/sans-serif-bold.js';

export const sansSerifBold: SvgCharMap = AddPaths(font, {
    0x21: '111 669Q111 680 111 682T113 689T121 693T137 694H184H249Q255 686 256 681Q244 220 239 213Q236 208 229 208T183 207T137 207T127 213T118 431T111 669ZM110 71V95Q110 137 136 144Q140 146 183 146H200Q246 146 254 121Q256 115 256 73V51Q256 9 230 2Q225 0 181 0L138 1Q121 7 113 21L111 28L110 71',
    0x22: '38 687Q42 693 45 693Q46 694 111 694H176Q179 690 183 687V556L144 501Q139 494 134 486T126 474T120 465T114 457T110 451T106 447T102 445T98 443T94 443T89 442H73H62Q37 442 37 453Q37 458 55 501T74 546Q74 548 59 548L44 549L38 555V687ZM275 687Q279 693 282 693Q283 694 348 694H413Q416 690 420 687V556L381 501Q376 494 371 486T363 474T357 465T351 457T347 451T343 447T339 445T335 443T331 443T326 442H310H299Q274 442 274 453Q274 458 292 501T311 546Q311 548 296 548L281 549L275 555V687',
    0x23: '61 365Q61 370 62 375T65 383T69 390T74 395T80 399T85 403T90 406L94 407H344L381 536Q418 668 426 680Q431 687 445 692Q451 694 457 694Q477 694 488 682T500 651Q500 645 466 528T431 409Q431 407 504 407H577L609 521Q651 668 656 675Q669 693 691 693Q710 693 721 680T733 651Q733 645 699 528T664 409Q664 407 743 407H823L827 405Q831 403 834 402T841 397T848 389T853 379T855 365Q855 337 823 324L731 323H639L619 253Q599 181 598 180V177H823L827 175Q831 173 834 172T841 167T848 159T853 149T855 135Q855 107 823 94L698 93H573L540 -21Q498 -168 493 -175Q480 -193 458 -193Q439 -193 428 -180T416 -151Q416 -144 450 -27T485 91Q485 93 412 93H340L307 -21Q265 -168 260 -175Q247 -193 225 -193Q206 -193 195 -180T183 -151Q183 -144 217 -27T252 91Q252 93 173 93L94 94Q61 105 61 135Q61 140 62 145T65 153T69 160T74 165T80 169T85 173T90 176L94 177H185L277 178L297 248L318 320V323H206L94 324Q61 335 61 365ZM551 320V323H479Q406 323 405 322Q404 319 385 249T365 178T438 177L510 178L530 248L551 320',
    0x24: '231 712L232 716Q232 719 232 722T234 729T239 736T246 743T256 748T271 750Q318 750 318 711V703Q393 692 451 656Q469 645 470 640Q470 635 461 587L453 537Q445 529 442 529Q438 529 424 540T384 565T330 585Q328 585 325 585T320 586L318 587V434Q322 433 333 429T350 424T365 418T382 409T399 397T419 380Q488 313 488 213Q488 24 334 -5L318 -8V-17Q318 -56 279 -56H272Q253 -56 243 -46T232 -30T231 -18V-8H224Q170 2 127 20T68 50T49 67Q49 71 58 122T68 176Q71 182 79 182Q83 182 98 169T145 138T216 110Q228 108 229 108H231V288Q167 299 114 356T61 496Q61 537 70 570T94 624T126 661T162 684T195 696T219 701L228 702H231V712ZM231 521Q231 583 230 583Q226 582 220 579T204 561T193 521Q193 491 212 472Q226 458 230 458Q231 458 231 521ZM318 112Q356 131 356 187Q356 237 318 263V112',
    0x25: '61 549Q61 733 218 749Q220 749 228 749T241 750Q286 750 321 735T369 708T389 683Q422 634 422 548V538Q422 519 420 501T408 453T381 401T328 364T243 347Q61 347 61 549ZM292 549Q292 663 242 663Q221 663 211 648T198 615T196 566V548Q196 471 206 454Q218 434 242 434Q292 434 292 549ZM243 -55Q223 -55 212 -42T201 -13Q201 -2 207 7Q209 11 480 371T758 738Q770 750 788 750Q805 750 817 738T830 709Q830 694 820 681L544 315Q273 -43 269 -47Q258 -55 243 -55ZM606 146Q606 330 763 346Q764 346 773 346T786 347Q831 347 866 332T914 305T934 280Q966 233 966 146V135Q966 115 964 97T952 49T925 -2T872 -40T788 -56Q606 -56 606 146ZM742 146V132Q742 107 743 93T748 62T762 39T787 31Q819 31 832 79Q837 97 837 146Q837 260 787 260Q767 260 757 246T744 214T742 169V146',
    0x26: '757 117Q762 117 769 110V3Q759 -7 718 -14T641 -22T571 -15T518 1T477 19T453 31L437 23Q350 -19 257 -22Q158 -22 103 30T47 155Q47 188 57 216T87 263T119 292T151 313L182 333L187 336L181 349Q150 431 150 506Q150 605 211 660T347 716Q417 716 471 668T526 543Q526 517 518 495T471 432T360 343L342 330Q342 327 358 306T402 250T458 189L467 181Q518 225 556 289T607 395L620 437Q622 443 630 443Q631 443 679 430Q718 420 725 418T733 409Q733 402 722 365T670 255T573 123Q562 111 563 111Q589 94 644 94Q678 94 703 100T740 111T757 117ZM397 544Q397 573 384 601T346 629Q320 629 299 607T277 538Q277 484 295 429Q301 413 301 412Q302 409 309 415Q397 476 397 544ZM227 258Q197 228 197 177Q197 150 207 126T234 95Q242 93 251 93Q288 93 337 107L349 110L328 131Q266 196 234 248L227 258',
    0x27: '81 687Q85 693 88 693Q89 694 154 694H219Q222 690 226 687V556L187 501Q182 494 177 486T169 474T163 465T157 457T153 451T149 447T145 445T141 443T137 443T132 442H116H105Q80 442 80 453Q80 458 98 501T117 546Q117 548 102 548L87 549L81 555V687',
    0x28: '79 250Q79 352 100 441T152 585T213 678T266 733L287 749Q288 750 324 750H359Q366 741 366 738Q366 734 356 721T329 682T296 623T262 531T238 407Q230 346 230 250Q230 142 244 55T278 -82T318 -165T352 -215T366 -238Q366 -242 359 -249H286L277 -242Q79 -74 79 250',
    0x29: '61 737Q61 750 85 750H106H141L150 742Q348 574 348 250T150 -242L141 -249L106 -250H87Q61 -250 61 -238Q61 -233 74 -216Q157 -113 183 51Q197 130 197 250T183 449Q174 505 158 554T126 634T95 687T71 722T61 737',
    0x2A: '241 579Q241 582 228 639T215 702Q215 722 233 736T271 750Q296 750 315 736T334 702V697Q334 693 328 664T314 607L308 579L352 620Q389 654 397 660T417 668Q447 668 464 647T482 602Q482 591 479 583T472 569T459 559T443 552T421 546T397 538L342 521L397 504Q405 501 420 497T442 490T458 483T472 473T479 460T482 440Q482 416 465 395T417 374Q406 375 398 381T352 422L308 463L314 435Q321 407 327 378T334 345Q336 333 327 319T296 295Q288 293 275 293Q241 293 227 311T215 345Q215 349 221 378T234 435L241 463L197 422Q160 388 152 382T132 374Q102 374 85 395T67 440Q67 451 70 459T77 473T90 483T106 490T128 496T152 504L207 521L152 538Q144 541 129 545T107 552T91 559T77 569T70 582T67 602Q67 626 84 647T132 668Q143 667 151 661T197 620L241 579',
    0x2B: '61 250Q61 276 94 292H386V436V535Q386 577 388 589T401 607Q411 617 427 617Q458 617 468 587Q470 581 470 436V292H762L766 290Q770 288 773 287T780 282T787 274T792 264T794 250Q794 222 762 209L616 208H470V64Q470 -81 468 -87Q458 -116 428 -116T388 -87Q386 -81 386 64V208H240L94 209Q61 220 61 250',
    0x2C: '81 139Q85 145 88 145Q89 146 154 146H219Q222 142 226 139V8L187 -47Q182 -54 177 -62T169 -74T163 -83T157 -91T153 -97T149 -101T145 -103T141 -105T137 -105T132 -106H116H105Q80 -106 80 -95Q80 -90 98 -47T117 -2Q117 0 102 0L87 1L81 7V139',
    0x2D: '12 230Q12 257 26 265T80 274Q88 274 114 274T158 273T201 273T235 274Q276 274 290 266T305 230T291 194T235 185Q226 185 201 185T159 186Q143 186 119 186T85 185Q43 185 28 193T12 230',
    0x2E: '219 146Q222 142 226 139V7L222 4L219 1L154 0Q102 0 94 0T82 6Q80 9 80 74L81 139Q85 145 88 145Q89 146 154 146H219',
    0x2F: '103 -249Q81 -249 71 -235T61 -207Q61 -201 62 -198Q64 -192 235 265T409 727Q418 750 445 750Q464 750 476 737T488 707Q488 701 313 234Q143 -225 137 -232Q126 -249 103 -249',
    0x3A: '226 319L219 313H87L81 319L80 384Q80 437 80 445T86 456Q89 458 154 458H219Q222 454 226 451V319ZM219 146Q222 142 226 139V7L222 4L219 1L154 0Q102 0 94 0T82 6Q80 9 80 74L81 139Q85 145 88 145Q89 146 154 146H219',
    0x3B: '226 319L219 313H87L81 319L80 384Q80 437 80 445T86 456Q89 458 154 458H219Q222 454 226 451V319ZM81 139Q85 145 88 145Q89 146 154 146H219Q222 142 226 139V8L187 -47Q182 -54 177 -62T169 -74T163 -83T157 -91T153 -97T149 -101T145 -103T141 -105T137 -105T132 -106H116H105Q80 -106 80 -95Q80 -90 98 -47T117 -2Q117 0 102 0L87 1L81 7V139',
    0x3D: '94 324Q61 335 61 366Q61 396 91 405Q96 407 429 407H762Q763 406 767 404T774 400T781 395T787 387T792 378T794 365Q794 338 762 324H94ZM94 94Q61 105 61 135Q61 149 69 160T92 175Q97 177 430 177H762L766 175Q770 173 773 172T780 167T787 159T792 149T794 135Q794 107 762 94H94',
    0x3F: '61 644Q61 652 87 666T157 693T244 705Q344 705 400 671T457 551Q457 516 446 490T422 451T387 421T356 391Q330 361 318 332T305 292T303 252Q303 218 300 213T290 208T244 207H220Q194 207 188 213Q187 214 186 215V255Q187 282 188 296T198 345T229 417T288 496Q306 515 306 559Q306 596 296 607T253 618Q214 618 185 607T143 583T120 558T103 547Q99 547 95 551Q93 553 77 597T61 644ZM171 71V95Q171 137 197 144Q201 146 244 146H261Q307 146 315 121Q317 115 317 73V51Q317 9 291 2Q286 0 242 0L199 1Q182 7 174 21L172 28L171 71',
    0x40: '61 264T61 347T82 494T136 596T217 660T311 694T410 704Q460 704 471 703Q534 694 577 666Q633 623 651 552T670 370V342Q670 249 633 195Q583 116 454 116Q238 116 238 347Q238 443 276 499Q328 578 456 578Q488 578 494 577L504 575Q475 617 430 617H421Q196 617 196 347Q196 215 253 143Q310 76 427 76Q499 76 561 102L575 107H664Q671 97 671 94V89L663 81Q566 -11 422 -11Q365 -11 316 -2T219 33T137 97T82 200ZM469 490Q459 492 453 492Q429 492 405 472Q374 439 374 347Q374 233 423 210Q436 202 454 202L486 210Q536 228 536 347Q536 461 486 484Q476 490 469 490',
    0x5B: '318 -206Q318 -235 305 -243T255 -251Q248 -251 229 -251T198 -250H143Q112 -250 99 -246T81 -225Q79 -219 79 250T81 725Q85 741 98 745T143 750H198Q210 750 229 750T255 751Q291 751 304 743T318 707Q318 680 301 668Q293 663 255 663H224V-163H255Q293 -163 301 -168Q318 -180 318 -206',
    0x5D: '24 706Q24 734 39 742T90 751Q97 751 114 751T143 750H198Q230 750 243 746T261 725Q263 719 263 250T261 -225Q257 -241 244 -245T198 -250H143Q131 -250 112 -250T86 -251Q50 -251 37 -243T24 -207Q24 -180 41 -168Q49 -163 87 -163H118V663H87H71Q24 663 24 706',
    0x5E: '108 550Q108 554 135 589T190 658T219 692Q221 694 275 694Q328 694 330 693Q331 692 381 629T438 557Q441 553 441 549T434 538L399 537Q363 537 362 538Q361 538 318 575L275 611Q274 611 231 575Q188 538 187 538Q186 537 150 537L115 538Q108 545 108 550',
    0x5F: '0 -66Q0 -32 26 -25Q30 -23 274 -23Q469 -23 497 -23T532 -28Q549 -40 549 -67Q549 -93 532 -105Q525 -109 498 -109T275 -110Q31 -110 26 -108Q0 -101 0 -66',
    0x7E: '92 215Q92 259 122 301T204 344Q238 344 264 329T310 300T343 285Q356 285 361 295T369 322T377 344H450Q457 334 457 330Q457 281 427 240T344 198Q312 198 285 213T239 242T206 257Q188 257 182 230T172 199L137 198H120Q102 198 97 200T92 215',
    0x131: '54 431Q63 458 102 458H127H149Q192 458 199 433Q201 427 201 229T199 25Q190 0 149 0H125L81 1Q61 7 54 28V431',
    0x237: '-38 -84Q-36 -84 -14 -95T33 -106H38Q70 -103 78 -86Q83 -78 83 -49T84 180Q84 427 86 433Q93 458 136 458H158H180Q201 458 209 456T225 443Q230 436 231 418Q232 397 232 313V183V124V40Q232 -55 228 -87T203 -147Q166 -205 78 -205Q31 -205 -20 -189T-71 -159Q-71 -156 -59 -123Q-50 -96 -47 -91T-38 -84',
    0x300: '-458 682Q-458 690 -452 692T-426 694H-381H-314L-312 691Q-311 691 -305 682T-287 655T-263 622L-218 555V549Q-218 544 -224 538L-259 537Q-295 537 -296 538Q-298 539 -376 606T-456 676Q-458 680 -458 682',
    0x301: '-290 537H-310Q-334 537 -334 549Q-334 553 -311 588T-264 656L-241 690Q-240 690 -239 691T-236 693Q-235 694 -167 694H-100Q-93 684 -93 681T-94 677Q-95 675 -173 607T-255 538Q-256 537 -290 537',
    0x302: '-442 550Q-442 554 -415 589T-360 658T-331 692Q-329 694 -275 694Q-222 694 -220 693Q-219 692 -169 629T-112 557Q-109 552 -109 549Q-109 545 -116 538L-151 537Q-187 537 -188 538Q-189 538 -232 575L-275 611Q-276 611 -319 575Q-362 538 -363 538Q-364 537 -400 537L-435 538Q-442 545 -442 550',
    0x303: '-458 565Q-458 609 -428 651T-346 694Q-312 694 -286 679T-240 650T-207 635Q-194 635 -189 645T-181 672T-173 694H-100Q-93 684 -93 680Q-93 631 -123 590T-206 548Q-238 548 -265 563T-311 592T-344 607Q-362 607 -368 580T-378 549L-413 548H-430Q-448 548 -453 550T-458 565',
    0x304: '-84 660Q-81 656 -77 653V567L-81 564L-84 561L-274 560H-383Q-469 560 -471 565L-472 566Q-474 569 -474 611L-473 653Q-469 659 -466 659Q-465 660 -274 660H-84',
    0x306: '-123 694Q-80 694 -80 657Q-80 626 -99 601T-161 563Q-199 552 -275 552Q-352 552 -389 563Q-470 586 -470 655Q-470 667 -468 673Q-457 694 -435 694H-431Q-408 694 -396 685Q-387 676 -387 671Q-384 661 -275 661Q-167 661 -164 671Q-164 674 -163 677T-151 687T-123 694',
    0x307: '-329 596Q-346 602 -351 611T-356 638V646Q-356 653 -356 654T-356 661T-355 668T-353 673T-351 679T-347 684T-341 689T-332 693T-274 695H-221Q-202 683 -198 676T-194 645Q-194 632 -195 625T-202 610T-221 596H-329',
    0x308: '-331 695Q-312 683 -308 676T-304 645Q-304 632 -304 626T-311 610T-331 596L-380 595H-408Q-448 595 -457 617Q-459 621 -459 645T-457 673Q-448 696 -409 696Q-405 696 -396 696T-380 695H-331ZM-247 644Q-247 658 -246 665T-239 680T-221 694Q-217 695 -169 695H-143Q-102 695 -93 672Q-91 664 -91 645V635Q-91 613 -106 602Q-113 597 -121 596T-171 595L-219 596Q-232 600 -238 608T-246 622T-247 644',
    0x30A: '-365 616Q-365 658 -331 676T-256 694Q-253 694 -247 694T-236 693Q-166 693 -139 666Q-119 644 -119 616T-139 565Q-166 538 -237 538H-242Q-365 538 -365 616ZM-181 616Q-181 641 -195 647T-242 654Q-258 654 -266 654T-284 650T-298 638T-303 616Q-303 592 -289 585T-242 577Q-209 577 -195 584T-181 616',
    0x30B: '-426 686Q-424 694 -394 694H-350H-283Q-277 686 -277 682Q-277 673 -317 608T-361 538L-396 537H-420Q-432 537 -436 539T-440 548Q-440 560 -434 616Q-432 633 -430 650T-427 677L-426 686ZM-243 686Q-241 694 -211 694H-167H-100Q-94 686 -94 682Q-94 673 -134 608T-178 538L-213 537H-237Q-249 537 -253 539T-257 548Q-257 560 -251 616Q-249 633 -247 650T-244 677L-243 686',
    0x30C: '-442 645Q-442 657 -418 657H-398Q-393 657 -388 657T-379 657T-371 656T-365 656H-363L-319 620L-276 583Q-275 583 -232 619Q-189 656 -188 656Q-187 657 -151 657H-116Q-109 649 -109 645Q-109 642 -112 637Q-118 629 -168 566T-220 501Q-222 500 -275 500Q-329 500 -331 501Q-442 634 -442 645',
    0x2013: '0 284Q0 318 26 325Q30 327 274 327Q469 327 497 327T532 322Q549 310 549 283Q549 257 532 245Q525 241 498 241T275 240Q31 240 26 242Q0 249 0 284',
    0x2014: '0 284Q0 318 26 325Q30 327 549 327T1073 325Q1099 318 1099 284Q1099 249 1073 242Q1068 240 549 240Q31 240 26 242Q0 249 0 284',
    0x2015: '0 284Q0 318 26 325Q30 327 549 327T1073 325Q1099 318 1099 284Q1099 249 1073 242Q1068 240 549 240Q31 240 26 242Q0 249 0 284',
    0x2017: '0 -66Q0 -32 26 -25Q30 -23 274 -23Q469 -23 497 -23T532 -28Q549 -40 549 -67Q549 -93 532 -105Q525 -109 498 -109T275 -110Q31 -110 26 -108Q0 -101 0 -66',
    0x2018: '87 443L81 449V581L119 636Q125 644 131 653T141 667T148 677T154 685T158 689T163 692T167 693T173 694H190H201Q226 694 226 683Q226 678 208 635T189 590Q189 588 204 588H219Q222 584 226 581V449L219 443H87',
    0x2019: '81 687Q85 693 88 693Q89 694 154 694H219Q222 690 226 687V556L187 501Q182 494 177 486T169 474T163 465T157 457T153 451T149 447T145 445T141 443T137 443T132 442H116H105Q80 442 80 453Q80 458 98 501T117 546Q117 548 102 548L87 549L81 555V687',
    0x201C: '144 443L138 449V581L176 636Q182 644 188 653T198 667T205 677T211 685T215 689T220 692T224 693T230 694H247H258Q283 694 283 683Q283 678 265 635T246 590Q246 588 261 588H276Q279 584 283 581V449L276 443H144ZM381 443L375 449V581L413 636Q419 644 425 653T435 667T442 677T448 685T452 689T457 692T461 693T467 694H484H495Q520 694 520 683Q520 678 502 635T483 590Q483 588 498 588H513Q516 584 520 581V449L513 443H381',
    0x201D: '38 687Q42 693 45 693Q46 694 111 694H176Q179 690 183 687V556L144 501Q139 494 134 486T126 474T120 465T114 457T110 451T106 447T102 445T98 443T94 443T89 442H73H62Q37 442 37 453Q37 458 55 501T74 546Q74 548 59 548L44 549L38 555V687ZM275 687Q279 693 282 693Q283 694 348 694H413Q416 690 420 687V556L381 501Q376 494 371 486T363 474T357 465T351 457T347 451T343 447T339 445T335 443T331 443T326 442H310H299Q274 442 274 453Q274 458 292 501T311 546Q311 548 296 548L281 549L275 555V687',
    0x2044: '103 -249Q81 -249 71 -235T61 -207Q61 -201 62 -198Q64 -192 235 265T409 727Q418 750 445 750Q464 750 476 737T488 707Q488 701 313 234Q143 -225 137 -232Q126 -249 103 -249',
    0x2206: '381 692Q386 694 458 694Q516 694 527 693T549 687Q564 680 575 663Q576 658 715 349T856 27Q856 6 838 1H826Q815 1 795 1T747 1T686 1T616 0T539 0T458 0T378 0T300 0T230 0T169 1T122 1T90 1H78Q60 6 60 27Q62 38 201 349T341 663Q356 687 381 692ZM627 148Q626 149 581 250T492 453L447 554Q447 553 446 552Q444 546 326 278L268 148Q268 147 448 147Q627 147 627 148',
},{
});
