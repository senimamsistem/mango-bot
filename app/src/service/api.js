const _0x140643=_0x50d5;(function(_0x46829b,_0x46f441){const _0xdc2d08=_0x50d5,_0x508426=_0x46829b();while(!![]){try{const _0x96e367=-parseInt(_0xdc2d08(0x128))/0x1*(parseInt(_0xdc2d08(0x12c))/0x2)+parseInt(_0xdc2d08(0x121))/0x3*(parseInt(_0xdc2d08(0x134))/0x4)+-parseInt(_0xdc2d08(0x117))/0x5*(parseInt(_0xdc2d08(0x112))/0x6)+parseInt(_0xdc2d08(0x120))/0x7+parseInt(_0xdc2d08(0x132))/0x8*(-parseInt(_0xdc2d08(0x12e))/0x9)+-parseInt(_0xdc2d08(0x133))/0xa+-parseInt(_0xdc2d08(0x11c))/0xb*(-parseInt(_0xdc2d08(0x123))/0xc);if(_0x96e367===_0x46f441)break;else _0x508426['push'](_0x508426['shift']());}catch(_0x27c011){_0x508426['push'](_0x508426['shift']());}}}(_0x240c,0x76be2));import _0x5a57eb,{Response}from'node-fetch';function _0x240c(){const _0x5c60e5=['6OUakFa','includes','generateHeaders','GET','Content-Type','714550PpDfPo','Request\x20Body\x20:\x20','...','stringify','info','13907135VVqodi','json','error','fetch','2189943kNaHZA','318evlpeg','proxy','12VVxqyi','message','Response\x20:\x20','randomUserAgent','application/json','206896jVNMFH','Unexpected\x20error:\x20','empty','statusText','2mNUFvE','get','9FQRjCo','same-site','headers','assign','7563048oNhiYb','994790IpUFFa','11468lEygdP','Response\x20Data\x20:\x20','DETECT\x20API\x20CHANGE..\x20EXIT','\x20-\x20','Request\x20Header\x20:\x20','status','text'];_0x240c=function(){return _0x5c60e5;};return _0x240c();}import{Helper}from'../utils/helper.js';import _0xead60b from'../utils/logger.js';function _0x50d5(_0x1cfd4a,_0x46b223){const _0x240c15=_0x240c();return _0x50d5=function(_0x50d5a6,_0x55b2cf){_0x50d5a6=_0x50d5a6-0x10d;let _0x18b75a=_0x240c15[_0x50d5a6];return _0x18b75a;},_0x50d5(_0x1cfd4a,_0x46b223);}import{HttpsProxyAgent}from'https-proxy-agent';export class API{constructor(_0x52e56c){const _0x24b4d7=_0x50d5;this[_0x24b4d7(0x122)]=_0x52e56c,this['ua']=Helper[_0x24b4d7(0x126)]();}[_0x140643(0x114)](_0x1ac121,_0x4342fd){const _0x420108=_0x140643,_0x3d2ac8={'Accept':'application/json,\x20text/plain,\x20*/*','Accept-Language':'en-US,en;q=0.9,id;q=0.8','Content-Type':_0x420108(0x127),'Sec-Fetch-Dest':_0x420108(0x12a),'Sec-Fetch-Site':_0x420108(0x12f),'Sec-Fetch-Mode':'cors','User-Agent':this['ua']};return _0x1ac121&&(_0x3d2ac8['mgo-token']=''+_0x1ac121),_0x4342fd&&Object[_0x420108(0x131)](_0x3d2ac8,_0x4342fd),_0x3d2ac8;}async[_0x140643(0x11f)](_0x1d30fa,_0x13a6a6=_0x140643(0x115),_0x470621,_0x162739,_0x2ebedf){const _0x347dd5=_0x140643,_0x5d59a2={'method':_0x13a6a6,'headers':this[_0x347dd5(0x114)](_0x162739,_0x2ebedf),'body':_0x470621?JSON[_0x347dd5(0x11a)](_0x470621):undefined,'agent':this['proxy']?new HttpsProxyAgent(this['proxy']):undefined};try{_0xead60b[_0x347dd5(0x11b)](_0x13a6a6+'\x20:\x20'+_0x1d30fa+'\x20'+(this['proxy']?this[_0x347dd5(0x122)]:'')),_0xead60b[_0x347dd5(0x11b)](_0x347dd5(0x10f)+JSON[_0x347dd5(0x11a)](_0x5d59a2[_0x347dd5(0x130)])),_0xead60b[_0x347dd5(0x11b)](_0x347dd5(0x118)+JSON[_0x347dd5(0x11a)](_0x5d59a2['body']));const _0x1f3388=await _0x5a57eb(_0x1d30fa,_0x5d59a2);if(!_0x1f3388['ok'])throw _0x1f3388;const _0x426056=_0x1f3388['status'],_0x2cdef1=_0x1f3388[_0x347dd5(0x130)][_0x347dd5(0x12d)]('Content-Type');let _0x3173ce;return _0x2cdef1&&_0x2cdef1[_0x347dd5(0x113)](_0x347dd5(0x127))?_0x3173ce=await _0x1f3388[_0x347dd5(0x11d)]():_0x3173ce={'message':await _0x1f3388[_0x347dd5(0x111)]()},_0xead60b['info'](_0x347dd5(0x125)+_0x1f3388['status']+'\x20'+_0x1f3388[_0x347dd5(0x12b)]),_0xead60b[_0x347dd5(0x11b)](_0x347dd5(0x135)+JSON[_0x347dd5(0x11a)](_0x3173ce)+'...'),{'status':_0x426056,'data':_0x3173ce};}catch(_0x371510){if(_0x371510 instanceof Response){const _0x4e83f1=_0x371510['status'],_0x340f8e=_0x371510[_0x347dd5(0x130)][_0x347dd5(0x12d)](_0x347dd5(0x116));let _0x4802bb;_0x340f8e&&_0x340f8e[_0x347dd5(0x113)](_0x347dd5(0x127))?_0x4802bb=await _0x371510[_0x347dd5(0x11d)]():_0x4802bb={'message':await _0x371510['text']()};_0xead60b[_0x347dd5(0x11b)](_0x347dd5(0x125)+_0x371510[_0x347dd5(0x110)]+'\x20'+_0x371510[_0x347dd5(0x12b)]),_0xead60b[_0x347dd5(0x11b)](_0x347dd5(0x135)+JSON[_0x347dd5(0x11a)](_0x4802bb)+_0x347dd5(0x119));if(_0x4e83f1===0x193)return{'status':_0x4e83f1,'data':_0x4802bb};else{if(_0x4e83f1===0x1f8||_0x4e83f1===0x194)console[_0x347dd5(0x11e)](_0x347dd5(0x10d)),process['exit'](0x1);else throw new Error(_0x4e83f1+_0x347dd5(0x10e)+_0x371510['statusText']);}}else throw new Error(_0x347dd5(0x129)+(_0x371510[_0x347dd5(0x124)]||_0x371510));}}}