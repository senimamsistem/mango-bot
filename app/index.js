(function(_0x2f5955,_0x1511aa){const _0x1d7284=_0x13b5,_0x57295f=_0x2f5955();while(!![]){try{const _0x5c5f68=-parseInt(_0x1d7284(0x166))/0x1+-parseInt(_0x1d7284(0x140))/0x2+-parseInt(_0x1d7284(0x15a))/0x3+parseInt(_0x1d7284(0x153))/0x4+parseInt(_0x1d7284(0x165))/0x5+-parseInt(_0x1d7284(0x169))/0x6*(-parseInt(_0x1d7284(0x15e))/0x7)+-parseInt(_0x1d7284(0x148))/0x8*(parseInt(_0x1d7284(0x15b))/0x9);if(_0x5c5f68===_0x1511aa)break;else _0x57295f['push'](_0x57295f['shift']());}catch(_0x2c2557){_0x57295f['push'](_0x57295f['shift']());}}}(_0x3b80,0x5994e));import{accountList}from'./accounts/accounts.js';import{COINS}from'./src/coin/coins.js';function _0x3b80(){const _0x11d4af=['connectMango','8JLJzBY','find','title','address','user','MGO','error','exchange','Application\x20Started','status','getSwapTask','1675804kAWgrH','\x20Task\x20is\x20now\x20Syncronizing','Premium','MAI','stringify','msToTime','clear','1055946WSneya','1763163mLWFsg','info','addStep','14tATVzg','...','delay','Author\x20:\x20Nofan\x20Rambe','Please\x20input\x20your\x20account\x20first\x20on\x20accounts.ts\x20file','Accounts\x20Processing\x20Complete,\x20Delaying\x20For\x20','log','3222875bHEiVY','620193nOBVRT','message','MANGO\x20WALLET\x20BOT','1833726ntpkHl','all','swap','USDT','279520wefsdg','getMangoUser','swapTask','step','getExchangeTask','exchangeTask','detail'];_0x3b80=function(){return _0x11d4af;};return _0x3b80();}function _0x13b5(_0xa393,_0x2b30c9){const _0x3b80c0=_0x3b80();return _0x13b5=function(_0x13b5ab,_0x2089b1){_0x13b5ab=_0x13b5ab-0x140;let _0x300b24=_0x3b80c0[_0x13b5ab];return _0x300b24;},_0x13b5(_0xa393,_0x2b30c9);}import{CoreService}from'./src/service/core-service.js';import{Helper}from'./src/utils/helper.js';import _0x30689e from'./src/utils/logger.js';async function operation(_0x2ca10a){const _0x55a816=_0x13b5,_0x2c4245=new CoreService(_0x2ca10a);try{await _0x2c4245['getAccountInfo'](),await _0x2c4245['getBalance'](!![]),await _0x2c4245[_0x55a816(0x147)](),await _0x2c4245['getMangoUser'](!![]),await Helper['refCheck'](_0x2c4245[_0x55a816(0x14b)],_0x2c4245[_0x55a816(0x14c)][_0x55a816(0x155)]),await _0x2c4245['checkIn'](),await _0x2c4245[_0x55a816(0x152)]();if(_0x2c4245[_0x55a816(0x142)]['step'][_0x55a816(0x149)](_0x3562f4=>_0x3562f4[_0x55a816(0x151)]=='0')!=undefined){await _0x2c4245[_0x55a816(0x16b)](COINS['MGO'],COINS['USDT']),await _0x2c4245[_0x55a816(0x16b)](COINS[_0x55a816(0x16c)],COINS[_0x55a816(0x156)]),await _0x2c4245['swap'](COINS[_0x55a816(0x156)],COINS['USDT']);for(const _0x5cb9b4 of _0x2c4245['swapTask'][_0x55a816(0x143)]){_0x5cb9b4['status']=='0'&&await _0x2c4245[_0x55a816(0x15d)](_0x2c4245[_0x55a816(0x142)][_0x55a816(0x146)]['ID'],_0x5cb9b4);}await Helper[_0x55a816(0x160)](0x7d0,_0x2ca10a,_0x2c4245[_0x55a816(0x142)]['detail']['title']+_0x55a816(0x154),_0x2c4245),await _0x2c4245[_0x55a816(0x141)](!![]);}await _0x2c4245[_0x55a816(0x144)]();if(_0x2c4245[_0x55a816(0x145)][_0x55a816(0x143)][_0x55a816(0x149)](_0x1f4346=>_0x1f4346[_0x55a816(0x151)]=='0')!=undefined){await _0x2c4245[_0x55a816(0x16b)](COINS[_0x55a816(0x14d)],COINS[_0x55a816(0x16c)]),await _0x2c4245[_0x55a816(0x14f)](COINS[_0x55a816(0x16c)],COINS['AI']),await _0x2c4245[_0x55a816(0x14f)](COINS['AI'],COINS[_0x55a816(0x16c)]);for(const _0x312fa6 of _0x2c4245['exchangeTask']['step']){_0x312fa6[_0x55a816(0x151)]=='0'&&await _0x2c4245[_0x55a816(0x15d)](_0x2c4245[_0x55a816(0x145)][_0x55a816(0x146)]['ID'],_0x312fa6);}await Helper[_0x55a816(0x160)](0x7d0,_0x2ca10a,_0x2c4245['exchangeTask'][_0x55a816(0x146)][_0x55a816(0x14a)]+_0x55a816(0x154),_0x2c4245),await _0x2c4245[_0x55a816(0x141)](!![]),await _0x2c4245[_0x55a816(0x16b)](COINS[_0x55a816(0x16c)],COINS[_0x55a816(0x14d)]);}await Helper['delay'](0x5265c00,_0x2ca10a,_0x55a816(0x163)+Helper[_0x55a816(0x158)](0x5265c00)+_0x55a816(0x15f),_0x2c4245);}catch(_0x470770){_0x30689e['info'](_0x470770[_0x55a816(0x167)]),await Helper[_0x55a816(0x160)](0x1388,_0x2ca10a,_0x470770['message'],_0x2c4245),operation(_0x2ca10a);}}async function startBot(){const _0x5dba1a=_0x13b5;try{_0x30689e[_0x5dba1a(0x15c)]('BOT\x20STARTED');if(accountList['length']==0x0)throw Error(_0x5dba1a(0x162));const _0x77378=[];for(const _0x12103e of accountList){_0x77378['push'](operation(_0x12103e));}await Promise[_0x5dba1a(0x16a)](_0x77378);}catch(_0x58029a){_0x30689e['info']('BOT\x20STOPPED'),_0x30689e[_0x5dba1a(0x14e)](JSON[_0x5dba1a(0x157)](_0x58029a));throw _0x58029a;}}((async()=>{const _0x41857b=_0x13b5;try{_0x30689e[_0x41857b(0x159)](),_0x30689e[_0x41857b(0x15c)](''),_0x30689e[_0x41857b(0x15c)](_0x41857b(0x150)),console['log'](_0x41857b(0x168)),console[_0x41857b(0x164)](_0x41857b(0x161)),console['log']('Welcome\x20&\x20Enjoy\x20Sir!'),await startBot();}catch(_0x2a80bd){console[_0x41857b(0x164)]('Error\x20During\x20Executing\x20Bot',_0x2a80bd),await startBot();}})());