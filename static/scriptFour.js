function _0x4d3c(_0x1a8eaa,_0x3df4d5){const _0x1f7175=_0x1f71();return _0x4d3c=function(_0x4d3c13,_0x456fc8){_0x4d3c13=_0x4d3c13-0x184;let _0x15d6a5=_0x1f7175[_0x4d3c13];return _0x15d6a5;},_0x4d3c(_0x1a8eaa,_0x3df4d5);}const _0x365e13=_0x4d3c;(function(_0x8a0198,_0x4e9689){const _0x18a721=_0x4d3c,_0x433e5b=_0x8a0198();while(!![]){try{const _0x35877b=parseInt(_0x18a721(0x190))/0x1+parseInt(_0x18a721(0x1b1))/0x2*(parseInt(_0x18a721(0x1bd))/0x3)+parseInt(_0x18a721(0x184))/0x4+-parseInt(_0x18a721(0x1a0))/0x5*(parseInt(_0x18a721(0x19a))/0x6)+-parseInt(_0x18a721(0x1bb))/0x7*(-parseInt(_0x18a721(0x1a4))/0x8)+-parseInt(_0x18a721(0x18a))/0x9+-parseInt(_0x18a721(0x18b))/0xa;if(_0x35877b===_0x4e9689)break;else _0x433e5b['push'](_0x433e5b['shift']());}catch(_0x2e2f61){_0x433e5b['push'](_0x433e5b['shift']());}}}(_0x1f71,0xc62ce),particlesJS(_0x365e13(0x1af),{'particles':{'number':{'value':0x50,'density':{'enable':!![],'value_area':0x320}},'color':{'value':'#ffffff'},'shape':{'type':'circle','stroke':{'width':0x0,'color':_0x365e13(0x1b3)},'polygon':{'nb_sides':0x5}},'opacity':{'value':0.5,'random':!![],'anim':{'enable':![],'speed':0x1,'opacity_min':0.1,'sync':![]}},'size':{'value':0x3,'random':!![],'anim':{'enable':![],'speed':0x28,'size_min':0.1,'sync':![]}},'line_linked':{'enable':!![],'distance':0x96,'color':_0x365e13(0x1ad),'opacity':0.4,'width':0x1},'move':{'enable':!![],'speed':0x6,'direction':_0x365e13(0x19d),'random':![],'straight':![],'out_mode':_0x365e13(0x19e),'bounce':![],'attract':{'enable':![],'rotateX':0x258,'rotateY':0x4b0}}},'interactivity':{'detect_on':'canvas','events':{'onhover':{'enable':!![],'mode':_0x365e13(0x18f)},'onclick':{'enable':!![],'mode':_0x365e13(0x1ab)},'resize':!![]}},'retina_detect':!![]}));function editField(_0x711fcf){const _0x1b6b5b=_0x365e13;document[_0x1b6b5b(0x1a1)](_0x711fcf+_0x1b6b5b(0x188))['style'][_0x1b6b5b(0x191)]='none',document[_0x1b6b5b(0x1a1)](_0x711fcf)[_0x1b6b5b(0x197)][_0x1b6b5b(0x191)]=_0x1b6b5b(0x1a7),document[_0x1b6b5b(0x1a1)](_0x711fcf)[_0x1b6b5b(0x1b7)](),toggleButtons(_0x711fcf,!![]);const _0x42b65a=document[_0x1b6b5b(0x1a1)](_0x711fcf),_0xacc658=_0x42b65a[_0x1b6b5b(0x1b9)]['nextElementSibling'];_0x42b65a['addEventListener']('keydown',()=>{const _0x5dd46d=_0x1b6b5b;_0xacc658[_0x5dd46d(0x197)][_0x5dd46d(0x191)]=_0x5dd46d(0x19d);}),_0x42b65a['addEventListener'](_0x1b6b5b(0x189),()=>{setTimeout(()=>{const _0x23926d=_0x4d3c;_0xacc658[_0x23926d(0x197)][_0x23926d(0x191)]='inline-block';},0x3e8);}),_0x42b65a['addEventListener'](_0x1b6b5b(0x195),()=>{const _0x2fd2a6=_0x1b6b5b;_0xacc658[_0x2fd2a6(0x197)]['display']=_0x2fd2a6(0x19d);});}async function saveField(_0x417c07){const _0x4aeb7d=_0x365e13,_0x3c6291=document[_0x4aeb7d(0x1a1)](_0x417c07),_0x33c7a9=document[_0x4aeb7d(0x1a1)](_0x417c07+'-display'),_0x2188fc=_0x3c6291[_0x4aeb7d(0x18e)];_0x33c7a9['innerText']=_0x2188fc,_0x33c7a9['style'][_0x4aeb7d(0x191)]=_0x4aeb7d(0x1a7),_0x3c6291['style'][_0x4aeb7d(0x191)]=_0x4aeb7d(0x19d),toggleButtons(_0x417c07,![]);try{const _0x2a8abe=await fetch('/setting',{'method':'POST','headers':{'Content-Type':'application/json'},'body':JSON['stringify']({'field':_0x417c07,'value':_0x2188fc})});if(!_0x2a8abe['ok'])throw new Error(_0x4aeb7d(0x187)+_0x2a8abe['statusText']);const _0x17e382=await _0x2a8abe['json']();if(!_0x17e382[_0x4aeb7d(0x1b8)])throw new Error('Server\x20error:\x20'+_0x17e382[_0x4aeb7d(0x199)]);console['log'](_0x4aeb7d(0x1ac),_0x17e382[_0x4aeb7d(0x199)]);}catch(_0x1c259d){console[_0x4aeb7d(0x1b4)](_0x4aeb7d(0x18d),_0x1c259d[_0x4aeb7d(0x199)]),alert(_0x4aeb7d(0x1a6)+_0x417c07+':\x20'+_0x1c259d['message']);}}async function saveToggle(_0x138fb8){const _0x44a0e1=_0x365e13,_0x16e7ff=document[_0x44a0e1(0x1a1)](_0x138fb8),_0x236823=_0x16e7ff[_0x44a0e1(0x19b)]?'on':_0x44a0e1(0x1a3);try{const _0x51a9cd=await fetch(_0x44a0e1(0x19f),{'method':_0x44a0e1(0x192),'headers':{'Content-Type':_0x44a0e1(0x1b6)},'body':JSON[_0x44a0e1(0x194)]({'field':_0x138fb8,'value':_0x236823})});if(!_0x51a9cd['ok'])throw new Error(_0x44a0e1(0x187)+_0x51a9cd[_0x44a0e1(0x1ba)]);const _0x4250f3=await _0x51a9cd[_0x44a0e1(0x198)]();if(!_0x4250f3[_0x44a0e1(0x1b8)])throw new Error('Server\x20error:\x20'+_0x4250f3[_0x44a0e1(0x199)]);console[_0x44a0e1(0x18c)](_0x44a0e1(0x1a5),_0x4250f3[_0x44a0e1(0x199)]);}catch(_0xc5e46c){console[_0x44a0e1(0x1b4)](_0x44a0e1(0x18d),_0xc5e46c[_0x44a0e1(0x199)]),alert(_0x44a0e1(0x1a8)+_0x138fb8+':\x20'+_0xc5e46c['message']);}}function _0x1f71(){const _0x34efee=['6nfrOBL','id-display','#000000','error','email-display','application/json','focus','success','nextElementSibling','statusText','4224017NgbQIq','DOMContentLoaded','1165227xuAsLX','1180632ncQkCV','innerText','***hidden***','Server\x20error:\x20','-display','keyup','14204106rxyneT','10119430UUQlRt','log','Error:','value','repulse','1016236oHqMVq','display','POST','catch','stringify','input','name-display','style','json','message','22230dKtfXX','checked','addEventListener','none','out','/setting','380utugpl','getElementById','name','off','16dcFMMQ','Toggle\x20update\x20successful:','Error\x20saving\x20','inline','Error\x20updating\x20','bootstrapToggle','inline-block','push','Update\x20successful:','#ffffff','email','particles-js','your-password-display'];_0x1f71=function(){return _0x34efee;};return _0x1f71();}function toggleButtons(_0x4f0939,_0x478e27){const _0x3af519=_0x365e13,_0x2c18c9=document['querySelector']('#'+_0x4f0939)[_0x3af519(0x1b9)],_0xfbb61e=_0x2c18c9['nextElementSibling'];_0x478e27?(_0x2c18c9[_0x3af519(0x197)][_0x3af519(0x191)]='none',_0xfbb61e['style'][_0x3af519(0x191)]=_0x3af519(0x1aa)):(_0x2c18c9[_0x3af519(0x197)][_0x3af519(0x191)]=_0x3af519(0x1aa),_0xfbb61e[_0x3af519(0x197)][_0x3af519(0x191)]=_0x3af519(0x19d));}document[_0x365e13(0x19c)](_0x365e13(0x1bc),function(){getSettings();});function getSettings(){const _0x2495ea=_0x365e13;fetch('/settings')['then'](_0x22d209=>_0x22d209[_0x2495ea(0x198)]())['then'](_0x5bcae7=>{const _0xc3c0de=_0x2495ea;document[_0xc3c0de(0x1a1)](_0xc3c0de(0x1b0))[_0xc3c0de(0x185)]=_0xc3c0de(0x186),document[_0xc3c0de(0x1a1)](_0xc3c0de(0x1b5))[_0xc3c0de(0x185)]=_0x5bcae7[_0xc3c0de(0x1ae)],document[_0xc3c0de(0x1a1)](_0xc3c0de(0x196))[_0xc3c0de(0x185)]=_0x5bcae7[_0xc3c0de(0x1a2)],document[_0xc3c0de(0x1a1)](_0xc3c0de(0x1b2))['innerText']=_0x5bcae7['id'],document[_0xc3c0de(0x1a1)](_0xc3c0de(0x1ae))[_0xc3c0de(0x18e)]=_0x5bcae7[_0xc3c0de(0x1ae)],document[_0xc3c0de(0x1a1)](_0xc3c0de(0x1a2))['value']=_0x5bcae7[_0xc3c0de(0x1a2)],document['getElementById']('id')['value']=_0x5bcae7['id'],_0x5bcae7['status']=='on'&&$('#status')['bootstrapToggle']('on'),_0x5bcae7['custom_logger_status']=='on'&&$('#custom_logger_status')[_0xc3c0de(0x1a9)]('on');})[_0x2495ea(0x193)](_0x40a17c=>console[_0x2495ea(0x1b4)](_0x2495ea(0x18d),_0x40a17c));}