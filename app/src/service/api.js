const _0x59c519=_0x460e;(function(_0x5b5d2a,_0x449372){const _0x3ce871=_0x460e,_0x2ed851=_0x5b5d2a();while(!![]){try{const _0x37f793=-parseInt(_0x3ce871(0x119))/0x1+-parseInt(_0x3ce871(0x11e))/0x2+parseInt(_0x3ce871(0x128))/0x3*(-parseInt(_0x3ce871(0x123))/0x4)+parseInt(_0x3ce871(0x13a))/0x5*(parseInt(_0x3ce871(0x122))/0x6)+-parseInt(_0x3ce871(0x124))/0x7+-parseInt(_0x3ce871(0x12f))/0x8*(parseInt(_0x3ce871(0x139))/0x9)+parseInt(_0x3ce871(0x137))/0xa;if(_0x37f793===_0x449372)break;else _0x2ed851['push'](_0x2ed851['shift']());}catch(_0x3924ce){_0x2ed851['push'](_0x2ed851['shift']());}}}(_0x529a,0xcd6e8));import _0x27d322,{Response}from'node-fetch';import{Helper}from'../utils/helper.js';function _0x460e(_0x5a4a86,_0x18e221){const _0x529a08=_0x529a();return _0x460e=function(_0x460eef,_0x2a5040){_0x460eef=_0x460eef-0x119;let _0x7e6713=_0x529a08[_0x460eef];return _0x7e6713;},_0x460e(_0x5a4a86,_0x18e221);}import _0x34e538 from'../utils/logger.js';function _0x529a(){const _0x3336ff=['4resdzB','8157205auhQcA','fetch','Request\x20Header\x20:\x20','text','413862JNupcF','generateHeaders','exit','application/json,\x20text/plain,\x20*/*','Request\x20Body\x20:\x20','application/json','message','13247056JdDCcm','info','proxy','GET','\x20-\x20','status','includes','en-US,en;q=0.9,id;q=0.8','65058010PSCpuE','stringify','9fbXxWD','480aaktLw','assign','Response\x20Data\x20:\x20','statusText','mgo-token','cors','1505190GfCZfX','Content-Type','same-site','headers','...','2418072oQoJVA','Unexpected\x20error:\x20','randomUserAgent','get','564mOTIsQ'];_0x529a=function(){return _0x3336ff;};return _0x529a();}import{HttpsProxyAgent}from'https-proxy-agent';export class API{constructor(_0x261e68){const _0x36dc4c=_0x460e;this['proxy']=_0x261e68,this['ua']=Helper[_0x36dc4c(0x120)]();}[_0x59c519(0x129)](_0x1a7aab,_0x2e754d){const _0x5e3a01=_0x59c519,_0x1881bd={'Accept':_0x5e3a01(0x12b),'Accept-Language':_0x5e3a01(0x136),'Content-Type':_0x5e3a01(0x12d),'Sec-Fetch-Dest':'empty','Sec-Fetch-Site':_0x5e3a01(0x11b),'Sec-Fetch-Mode':_0x5e3a01(0x13f),'User-Agent':this['ua']};return _0x1a7aab&&(_0x1881bd[_0x5e3a01(0x13e)]=''+_0x1a7aab),_0x2e754d&&Object[_0x5e3a01(0x13b)](_0x1881bd,_0x2e754d),_0x1881bd;}async[_0x59c519(0x125)](_0x4cfad7,_0x45c7af=_0x59c519(0x132),_0x5d5e42,_0x233415,_0x4a4cdf){const _0x12a98e=_0x59c519,_0x5247c3={'method':_0x45c7af,'headers':this[_0x12a98e(0x129)](_0x233415,_0x4a4cdf),'body':_0x5d5e42?JSON[_0x12a98e(0x138)](_0x5d5e42):undefined,'agent':this[_0x12a98e(0x131)]?new HttpsProxyAgent(this['proxy']):undefined};try{_0x34e538[_0x12a98e(0x130)](_0x45c7af+'\x20:\x20'+_0x4cfad7+'\x20'+(this[_0x12a98e(0x131)]?this['proxy']:'')),_0x34e538[_0x12a98e(0x130)](_0x12a98e(0x126)+JSON[_0x12a98e(0x138)](_0x5247c3['headers'])),_0x34e538[_0x12a98e(0x130)](_0x12a98e(0x12c)+JSON[_0x12a98e(0x138)](_0x5247c3['body']));const _0x124cdb=await _0x27d322(_0x4cfad7,_0x5247c3);if(!_0x124cdb['ok'])throw _0x124cdb;const _0x18997b=_0x124cdb[_0x12a98e(0x134)],_0x390c9a=_0x124cdb[_0x12a98e(0x11c)][_0x12a98e(0x121)](_0x12a98e(0x11a));let _0x1d6331;return _0x390c9a&&_0x390c9a[_0x12a98e(0x135)](_0x12a98e(0x12d))?_0x1d6331=await _0x124cdb['json']():_0x1d6331={'message':await _0x124cdb['text']()},_0x34e538[_0x12a98e(0x130)]('Response\x20:\x20'+_0x124cdb[_0x12a98e(0x134)]+'\x20'+_0x124cdb[_0x12a98e(0x13d)]),_0x34e538['info'](_0x12a98e(0x13c)+JSON[_0x12a98e(0x138)](_0x1d6331)+_0x12a98e(0x11d)),{'status':_0x18997b,'data':_0x1d6331};}catch(_0x248517){if(_0x248517 instanceof Response){const _0x36a54f=_0x248517[_0x12a98e(0x134)],_0x1dddd4=_0x248517[_0x12a98e(0x11c)][_0x12a98e(0x121)](_0x12a98e(0x11a));let _0x3dcc28;_0x1dddd4&&_0x1dddd4['includes'](_0x12a98e(0x12d))?_0x3dcc28=await _0x248517['json']():_0x3dcc28={'message':await _0x248517[_0x12a98e(0x127)]()};_0x34e538['info']('Response\x20:\x20'+_0x248517[_0x12a98e(0x134)]+'\x20'+_0x248517['statusText']),_0x34e538[_0x12a98e(0x130)](_0x12a98e(0x13c)+JSON[_0x12a98e(0x138)](_0x3dcc28)+_0x12a98e(0x11d));if(_0x36a54f===0x193)return{'status':_0x36a54f,'data':_0x3dcc28};else{if(_0x36a54f===0x1f8||_0x36a54f===0x194)console['error']('DETECT\x20API\x20CHANGE..\x20EXIT'),process[_0x12a98e(0x12a)](0x1);else throw new Error(_0x36a54f+_0x12a98e(0x133)+_0x248517['statusText']);}}else throw new Error(_0x12a98e(0x11f)+(_0x248517[_0x12a98e(0x12e)]||_0x248517));}}}
