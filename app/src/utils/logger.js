function _0xd42c(){const _0x167636=['698909uHFfjo',']:\x20','2azZFXH','106056dBWADw','10994652HgTdPK','warn','22HHIUcG','3497448UauMNP','logger','level','File','info','error','3559820ZruaCM','clear','log/app.log','debug','405AAADzq','12nITDma','7187130ZncxTt','7vKbaXF','YYYY-MM-DD\x20HH:mm:ss','698853vpUeGG','setLevel'];_0xd42c=function(){return _0x167636;};return _0xd42c();}const _0x6306df=_0x288f;(function(_0x2414f1,_0x2cbd8e){const _0x471e4d=_0x288f,_0x59a6d6=_0x2414f1();while(!![]){try{const _0x35823d=-parseInt(_0x471e4d(0xb5))/0x1*(-parseInt(_0x471e4d(0xb7))/0x2)+-parseInt(_0x471e4d(0xb3))/0x3*(parseInt(_0x471e4d(0xaf))/0x4)+-parseInt(_0x471e4d(0xc2))/0x5+parseInt(_0x471e4d(0xbc))/0x6*(parseInt(_0x471e4d(0xb1))/0x7)+parseInt(_0x471e4d(0xb8))/0x8*(-parseInt(_0x471e4d(0xae))/0x9)+-parseInt(_0x471e4d(0xb0))/0xa+parseInt(_0x471e4d(0xbb))/0xb*(parseInt(_0x471e4d(0xb9))/0xc);if(_0x35823d===_0x2cbd8e)break;else _0x59a6d6['push'](_0x59a6d6['shift']());}catch(_0x190f97){_0x59a6d6['push'](_0x59a6d6['shift']());}}}(_0xd42c,0x5ec44));function _0x288f(_0x3288ff,_0x58ac5a){const _0xd42cdc=_0xd42c();return _0x288f=function(_0x288f18,_0x209276){_0x288f18=_0x288f18-0xad;let _0x4748be=_0xd42cdc[_0x288f18];return _0x4748be;},_0x288f(_0x3288ff,_0x58ac5a);}import{createLogger,format,transports}from'winston';import _0x16112c from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x5a4784,message:_0x1f6696,timestamp:_0x3e82ed})=>{const _0x25ec25=_0x288f;return _0x3e82ed+'\x20['+_0x5a4784+_0x25ec25(0xb6)+_0x1f6696;});class Logger{constructor(){const _0x39234b=_0x288f;this[_0x39234b(0xbd)]=createLogger({'level':_0x39234b(0xad),'format':combine(timestamp({'format':_0x39234b(0xb2)}),colorize(),customFormat),'transports':[new transports[(_0x39234b(0xbf))]({'filename':_0x39234b(0xc4)})],'exceptionHandlers':[new transports[(_0x39234b(0xbf))]({'filename':_0x39234b(0xc4)})],'rejectionHandlers':[new transports[(_0x39234b(0xbf))]({'filename':'log/app.log'})]});}[_0x6306df(0xc0)](_0x4cda61){const _0x5225aa=_0x6306df;this['logger'][_0x5225aa(0xc0)](_0x4cda61);}[_0x6306df(0xba)](_0x3937e8){const _0x3038f5=_0x6306df;this[_0x3038f5(0xbd)][_0x3038f5(0xba)](_0x3937e8);}[_0x6306df(0xc1)](_0xc492){const _0x403bda=_0x6306df;this[_0x403bda(0xbd)][_0x403bda(0xc1)](_0xc492);}[_0x6306df(0xad)](_0x33eb8b){const _0x176cda=_0x6306df;this[_0x176cda(0xbd)]['debug'](_0x33eb8b);}[_0x6306df(0xb4)](_0x3763ac){const _0xd63fba=_0x6306df;this[_0xd63fba(0xbd)][_0xd63fba(0xbe)]=_0x3763ac;}[_0x6306df(0xc3)](){const _0x50619d=_0x6306df;_0x16112c['truncate'](_0x50619d(0xc4),0x0,_0x2a9087=>{const _0x2ae911=_0x50619d;_0x2a9087?this[_0x2ae911(0xbd)]['error']('Failed\x20to\x20clear\x20the\x20log\x20file:\x20'+_0x2a9087['message']):this[_0x2ae911(0xbd)]['info']('Log\x20file\x20cleared');});}}const logger=new Logger();export default logger;
