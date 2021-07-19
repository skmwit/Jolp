(window.visTypeTimeseries_bundle_jsonpfunction=window.visTypeTimeseries_bundle_jsonpfunction||[]).push([[6],{102:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return basicAggs}));const basicAggs=["count","avg","max","min","sum","std_deviation","variance","sum_of_squares","value_count","cardinality"]},372:function(module,exports,__webpack_require__){"use strict";var punycode=__webpack_require__(373),util=__webpack_require__(374);function Url(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}exports.parse=urlParse,exports.resolve=function(source,relative){return urlParse(source,!1,!0).resolve(relative)},exports.resolveObject=function(source,relative){return source?urlParse(source,!1,!0).resolveObject(relative):relative},exports.format=function(obj){util.isString(obj)&&(obj=urlParse(obj));return obj instanceof Url?obj.format():Url.prototype.format.call(obj)},exports.Url=Url;var protocolPattern=/^([a-z0-9.+-]+:)/i,portPattern=/:[0-9]*$/,simplePathPattern=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,unwise=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),autoEscape=["'"].concat(unwise),nonHostChars=["%","/","?",";","#"].concat(autoEscape),hostEndingChars=["/","?","#"],hostnamePartPattern=/^[+a-z0-9A-Z_-]{0,63}$/,hostnamePartStart=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,unsafeProtocol={javascript:!0,"javascript:":!0},hostlessProtocol={javascript:!0,"javascript:":!0},slashedProtocol={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},querystring=__webpack_require__(375);function urlParse(url,parseQueryString,slashesDenoteHost){if(url&&util.isObject(url)&&url instanceof Url)return url;var u=new Url;return u.parse(url,parseQueryString,slashesDenoteHost),u}Url.prototype.parse=function(url,parseQueryString,slashesDenoteHost){if(!util.isString(url))throw new TypeError("Parameter 'url' must be a string, not "+typeof url);var queryIndex=url.indexOf("?"),splitter=-1!==queryIndex&&queryIndex<url.indexOf("#")?"?":"#",uSplit=url.split(splitter);uSplit[0]=uSplit[0].replace(/\\/g,"/");var rest=url=uSplit.join(splitter);if(rest=rest.trim(),!slashesDenoteHost&&1===url.split("#").length){var simplePath=simplePathPattern.exec(rest);if(simplePath)return this.path=rest,this.href=rest,this.pathname=simplePath[1],simplePath[2]?(this.search=simplePath[2],this.query=parseQueryString?querystring.parse(this.search.substr(1)):this.search.substr(1)):parseQueryString&&(this.search="",this.query={}),this}var proto=protocolPattern.exec(rest);if(proto){var lowerProto=(proto=proto[0]).toLowerCase();this.protocol=lowerProto,rest=rest.substr(proto.length)}if(slashesDenoteHost||proto||rest.match(/^\/\/[^@\/]+@[^@\/]+/)){var slashes="//"===rest.substr(0,2);!slashes||proto&&hostlessProtocol[proto]||(rest=rest.substr(2),this.slashes=!0)}if(!hostlessProtocol[proto]&&(slashes||proto&&!slashedProtocol[proto])){for(var auth,atSign,hostEnd=-1,i=0;i<hostEndingChars.length;i++){-1!==(hec=rest.indexOf(hostEndingChars[i]))&&(-1===hostEnd||hec<hostEnd)&&(hostEnd=hec)}-1!==(atSign=-1===hostEnd?rest.lastIndexOf("@"):rest.lastIndexOf("@",hostEnd))&&(auth=rest.slice(0,atSign),rest=rest.slice(atSign+1),this.auth=decodeURIComponent(auth)),hostEnd=-1;for(i=0;i<nonHostChars.length;i++){var hec;-1!==(hec=rest.indexOf(nonHostChars[i]))&&(-1===hostEnd||hec<hostEnd)&&(hostEnd=hec)}-1===hostEnd&&(hostEnd=rest.length),this.host=rest.slice(0,hostEnd),rest=rest.slice(hostEnd),this.parseHost(),this.hostname=this.hostname||"";var ipv6Hostname="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!ipv6Hostname)for(var hostparts=this.hostname.split(/\./),l=(i=0,hostparts.length);i<l;i++){var part=hostparts[i];if(part&&!part.match(hostnamePartPattern)){for(var newpart="",j=0,k=part.length;j<k;j++)part.charCodeAt(j)>127?newpart+="x":newpart+=part[j];if(!newpart.match(hostnamePartPattern)){var validParts=hostparts.slice(0,i),notHost=hostparts.slice(i+1),bit=part.match(hostnamePartStart);bit&&(validParts.push(bit[1]),notHost.unshift(bit[2])),notHost.length&&(rest="/"+notHost.join(".")+rest),this.hostname=validParts.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),ipv6Hostname||(this.hostname=punycode.toASCII(this.hostname));var p=this.port?":"+this.port:"",h=this.hostname||"";this.host=h+p,this.href+=this.host,ipv6Hostname&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==rest[0]&&(rest="/"+rest))}if(!unsafeProtocol[lowerProto])for(i=0,l=autoEscape.length;i<l;i++){var ae=autoEscape[i];if(-1!==rest.indexOf(ae)){var esc=encodeURIComponent(ae);esc===ae&&(esc=escape(ae)),rest=rest.split(ae).join(esc)}}var hash=rest.indexOf("#");-1!==hash&&(this.hash=rest.substr(hash),rest=rest.slice(0,hash));var qm=rest.indexOf("?");if(-1!==qm?(this.search=rest.substr(qm),this.query=rest.substr(qm+1),parseQueryString&&(this.query=querystring.parse(this.query)),rest=rest.slice(0,qm)):parseQueryString&&(this.search="",this.query={}),rest&&(this.pathname=rest),slashedProtocol[lowerProto]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){p=this.pathname||"";var s=this.search||"";this.path=p+s}return this.href=this.format(),this},Url.prototype.format=function(){var auth=this.auth||"";auth&&(auth=(auth=encodeURIComponent(auth)).replace(/%3A/i,":"),auth+="@");var protocol=this.protocol||"",pathname=this.pathname||"",hash=this.hash||"",host=!1,query="";this.host?host=auth+this.host:this.hostname&&(host=auth+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(host+=":"+this.port)),this.query&&util.isObject(this.query)&&Object.keys(this.query).length&&(query=querystring.stringify(this.query));var search=this.search||query&&"?"+query||"";return protocol&&":"!==protocol.substr(-1)&&(protocol+=":"),this.slashes||(!protocol||slashedProtocol[protocol])&&!1!==host?(host="//"+(host||""),pathname&&"/"!==pathname.charAt(0)&&(pathname="/"+pathname)):host||(host=""),hash&&"#"!==hash.charAt(0)&&(hash="#"+hash),search&&"?"!==search.charAt(0)&&(search="?"+search),protocol+host+(pathname=pathname.replace(/[?#]/g,(function(match){return encodeURIComponent(match)})))+(search=search.replace("#","%23"))+hash},Url.prototype.resolve=function(relative){return this.resolveObject(urlParse(relative,!1,!0)).format()},Url.prototype.resolveObject=function(relative){if(util.isString(relative)){var rel=new Url;rel.parse(relative,!1,!0),relative=rel}for(var result=new Url,tkeys=Object.keys(this),tk=0;tk<tkeys.length;tk++){var tkey=tkeys[tk];result[tkey]=this[tkey]}if(result.hash=relative.hash,""===relative.href)return result.href=result.format(),result;if(relative.slashes&&!relative.protocol){for(var rkeys=Object.keys(relative),rk=0;rk<rkeys.length;rk++){var rkey=rkeys[rk];"protocol"!==rkey&&(result[rkey]=relative[rkey])}return slashedProtocol[result.protocol]&&result.hostname&&!result.pathname&&(result.path=result.pathname="/"),result.href=result.format(),result}if(relative.protocol&&relative.protocol!==result.protocol){if(!slashedProtocol[relative.protocol]){for(var keys=Object.keys(relative),v=0;v<keys.length;v++){var k=keys[v];result[k]=relative[k]}return result.href=result.format(),result}if(result.protocol=relative.protocol,relative.host||hostlessProtocol[relative.protocol])result.pathname=relative.pathname;else{for(var relPath=(relative.pathname||"").split("/");relPath.length&&!(relative.host=relPath.shift()););relative.host||(relative.host=""),relative.hostname||(relative.hostname=""),""!==relPath[0]&&relPath.unshift(""),relPath.length<2&&relPath.unshift(""),result.pathname=relPath.join("/")}if(result.search=relative.search,result.query=relative.query,result.host=relative.host||"",result.auth=relative.auth,result.hostname=relative.hostname||relative.host,result.port=relative.port,result.pathname||result.search){var p=result.pathname||"",s=result.search||"";result.path=p+s}return result.slashes=result.slashes||relative.slashes,result.href=result.format(),result}var isSourceAbs=result.pathname&&"/"===result.pathname.charAt(0),isRelAbs=relative.host||relative.pathname&&"/"===relative.pathname.charAt(0),mustEndAbs=isRelAbs||isSourceAbs||result.host&&relative.pathname,removeAllDots=mustEndAbs,srcPath=result.pathname&&result.pathname.split("/")||[],psychotic=(relPath=relative.pathname&&relative.pathname.split("/")||[],result.protocol&&!slashedProtocol[result.protocol]);if(psychotic&&(result.hostname="",result.port=null,result.host&&(""===srcPath[0]?srcPath[0]=result.host:srcPath.unshift(result.host)),result.host="",relative.protocol&&(relative.hostname=null,relative.port=null,relative.host&&(""===relPath[0]?relPath[0]=relative.host:relPath.unshift(relative.host)),relative.host=null),mustEndAbs=mustEndAbs&&(""===relPath[0]||""===srcPath[0])),isRelAbs)result.host=relative.host||""===relative.host?relative.host:result.host,result.hostname=relative.hostname||""===relative.hostname?relative.hostname:result.hostname,result.search=relative.search,result.query=relative.query,srcPath=relPath;else if(relPath.length)srcPath||(srcPath=[]),srcPath.pop(),srcPath=srcPath.concat(relPath),result.search=relative.search,result.query=relative.query;else if(!util.isNullOrUndefined(relative.search)){if(psychotic)result.hostname=result.host=srcPath.shift(),(authInHost=!!(result.host&&result.host.indexOf("@")>0)&&result.host.split("@"))&&(result.auth=authInHost.shift(),result.host=result.hostname=authInHost.shift());return result.search=relative.search,result.query=relative.query,util.isNull(result.pathname)&&util.isNull(result.search)||(result.path=(result.pathname?result.pathname:"")+(result.search?result.search:"")),result.href=result.format(),result}if(!srcPath.length)return result.pathname=null,result.search?result.path="/"+result.search:result.path=null,result.href=result.format(),result;for(var last=srcPath.slice(-1)[0],hasTrailingSlash=(result.host||relative.host||srcPath.length>1)&&("."===last||".."===last)||""===last,up=0,i=srcPath.length;i>=0;i--)"."===(last=srcPath[i])?srcPath.splice(i,1):".."===last?(srcPath.splice(i,1),up++):up&&(srcPath.splice(i,1),up--);if(!mustEndAbs&&!removeAllDots)for(;up--;up)srcPath.unshift("..");!mustEndAbs||""===srcPath[0]||srcPath[0]&&"/"===srcPath[0].charAt(0)||srcPath.unshift(""),hasTrailingSlash&&"/"!==srcPath.join("/").substr(-1)&&srcPath.push("");var authInHost,isAbsolute=""===srcPath[0]||srcPath[0]&&"/"===srcPath[0].charAt(0);psychotic&&(result.hostname=result.host=isAbsolute?"":srcPath.length?srcPath.shift():"",(authInHost=!!(result.host&&result.host.indexOf("@")>0)&&result.host.split("@"))&&(result.auth=authInHost.shift(),result.host=result.hostname=authInHost.shift()));return(mustEndAbs=mustEndAbs||result.host&&srcPath.length)&&!isAbsolute&&srcPath.unshift(""),srcPath.length?result.pathname=srcPath.join("/"):(result.pathname=null,result.path=null),util.isNull(result.pathname)&&util.isNull(result.search)||(result.path=(result.pathname?result.pathname:"")+(result.search?result.search:"")),result.auth=relative.auth||result.auth,result.slashes=result.slashes||relative.slashes,result.href=result.format(),result},Url.prototype.parseHost=function(){var host=this.host,port=portPattern.exec(host);port&&(":"!==(port=port[0])&&(this.port=port.substr(1)),host=host.substr(0,host.length-port.length)),host&&(this.hostname=host)}},373:function(module,exports,__webpack_require__){(function(module,global){var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */!function(root){exports&&exports.nodeType,module&&module.nodeType;var freeGlobal="object"==typeof global&&global;freeGlobal.global!==freeGlobal&&freeGlobal.window!==freeGlobal&&freeGlobal.self;var punycode,maxInt=2147483647,regexPunycode=/^xn--/,regexNonASCII=/[^\x20-\x7E]/,regexSeparators=/[\x2E\u3002\uFF0E\uFF61]/g,errors={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},floor=Math.floor,stringFromCharCode=String.fromCharCode;function error(type){throw new RangeError(errors[type])}function map(array,fn){for(var length=array.length,result=[];length--;)result[length]=fn(array[length]);return result}function mapDomain(string,fn){var parts=string.split("@"),result="";return parts.length>1&&(result=parts[0]+"@",string=parts[1]),result+map((string=string.replace(regexSeparators,".")).split("."),fn).join(".")}function ucs2decode(string){for(var value,extra,output=[],counter=0,length=string.length;counter<length;)(value=string.charCodeAt(counter++))>=55296&&value<=56319&&counter<length?56320==(64512&(extra=string.charCodeAt(counter++)))?output.push(((1023&value)<<10)+(1023&extra)+65536):(output.push(value),counter--):output.push(value);return output}function ucs2encode(array){return map(array,(function(value){var output="";return value>65535&&(output+=stringFromCharCode((value-=65536)>>>10&1023|55296),value=56320|1023&value),output+=stringFromCharCode(value)})).join("")}function digitToBasic(digit,flag){return digit+22+75*(digit<26)-((0!=flag)<<5)}function adapt(delta,numPoints,firstTime){var k=0;for(delta=firstTime?floor(delta/700):delta>>1,delta+=floor(delta/numPoints);delta>455;k+=36)delta=floor(delta/35);return floor(k+36*delta/(delta+38))}function decode(input){var out,basic,j,index,oldi,w,k,digit,t,baseMinusT,codePoint,output=[],inputLength=input.length,i=0,n=128,bias=72;for((basic=input.lastIndexOf("-"))<0&&(basic=0),j=0;j<basic;++j)input.charCodeAt(j)>=128&&error("not-basic"),output.push(input.charCodeAt(j));for(index=basic>0?basic+1:0;index<inputLength;){for(oldi=i,w=1,k=36;index>=inputLength&&error("invalid-input"),((digit=(codePoint=input.charCodeAt(index++))-48<10?codePoint-22:codePoint-65<26?codePoint-65:codePoint-97<26?codePoint-97:36)>=36||digit>floor((maxInt-i)/w))&&error("overflow"),i+=digit*w,!(digit<(t=k<=bias?1:k>=bias+26?26:k-bias));k+=36)w>floor(maxInt/(baseMinusT=36-t))&&error("overflow"),w*=baseMinusT;bias=adapt(i-oldi,out=output.length+1,0==oldi),floor(i/out)>maxInt-n&&error("overflow"),n+=floor(i/out),i%=out,output.splice(i++,0,n)}return ucs2encode(output)}function encode(input){var n,delta,handledCPCount,basicLength,bias,j,m,q,k,t,currentValue,inputLength,handledCPCountPlusOne,baseMinusT,qMinusT,output=[];for(inputLength=(input=ucs2decode(input)).length,n=128,delta=0,bias=72,j=0;j<inputLength;++j)(currentValue=input[j])<128&&output.push(stringFromCharCode(currentValue));for(handledCPCount=basicLength=output.length,basicLength&&output.push("-");handledCPCount<inputLength;){for(m=maxInt,j=0;j<inputLength;++j)(currentValue=input[j])>=n&&currentValue<m&&(m=currentValue);for(m-n>floor((maxInt-delta)/(handledCPCountPlusOne=handledCPCount+1))&&error("overflow"),delta+=(m-n)*handledCPCountPlusOne,n=m,j=0;j<inputLength;++j)if((currentValue=input[j])<n&&++delta>maxInt&&error("overflow"),currentValue==n){for(q=delta,k=36;!(q<(t=k<=bias?1:k>=bias+26?26:k-bias));k+=36)qMinusT=q-t,baseMinusT=36-t,output.push(stringFromCharCode(digitToBasic(t+qMinusT%baseMinusT,0))),q=floor(qMinusT/baseMinusT);output.push(stringFromCharCode(digitToBasic(q,0))),bias=adapt(delta,handledCPCountPlusOne,handledCPCount==basicLength),delta=0,++handledCPCount}++delta,++n}return output.join("")}punycode={version:"1.4.1",ucs2:{decode:ucs2decode,encode:ucs2encode},decode:decode,encode:encode,toASCII:function(input){return mapDomain(input,(function(string){return regexNonASCII.test(string)?"xn--"+encode(string):string}))},toUnicode:function(input){return mapDomain(input,(function(string){return regexPunycode.test(string)?decode(string.slice(4).toLowerCase()):string}))}},void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return punycode}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}).call(this,__webpack_require__(83)(module),__webpack_require__(77))},374:function(module,exports,__webpack_require__){"use strict";module.exports={isString:function(arg){return"string"==typeof arg},isObject:function(arg){return"object"==typeof arg&&null!==arg},isNull:function(arg){return null===arg},isNullOrUndefined:function(arg){return null==arg}}},375:function(module,exports,__webpack_require__){"use strict";exports.decode=exports.parse=__webpack_require__(376),exports.encode=exports.stringify=__webpack_require__(377)},376:function(module,exports,__webpack_require__){"use strict";function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj};var isArray=Array.isArray||function(xs){return"[object Array]"===Object.prototype.toString.call(xs)}},377:function(module,exports,__webpack_require__){"use strict";var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj?map(objectKeys(obj),(function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return isArray(obj[k])?map(obj[k],(function(v){return ks+encodeURIComponent(stringifyPrimitive(v))})).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))})).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""};var isArray=Array.isArray||function(xs){return"[object Array]"===Object.prototype.toString.call(xs)};function map(xs,f){if(xs.map)return xs.map(f);for(var res=[],i=0;i<xs.length;i++)res.push(f(xs[i],i));return res}var objectKeys=Object.keys||function(obj){var res=[];for(var key in obj)Object.prototype.hasOwnProperty.call(obj,key)&&res.push(key);return res}},385:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",(function(){return vis_TableVis}));var external_kbnSharedDeps_Lodash_=__webpack_require__(7),external_kbnSharedDeps_Lodash_default=__webpack_require__.n(external_kbnSharedDeps_Lodash_),external_kbnSharedDeps_React_=__webpack_require__(1),external_kbnSharedDeps_React_default=__webpack_require__.n(external_kbnSharedDeps_React_),url_url=__webpack_require__(372),public_=__webpack_require__(36),tick_formatter=__webpack_require__(54),basic_aggs=__webpack_require__(102);function isSortable(metric){return basic_aggs.a.includes(metric.type)}var external_kbnSharedDeps_ElasticEui_=__webpack_require__(14),replace_vars=__webpack_require__(61),data_public_=__webpack_require__(16),external_kbnSharedDeps_KbnI18nReact_=__webpack_require__(15),services=__webpack_require__(0),empty_label=__webpack_require__(43);function getColor(rules,colorKey,value){let color;return rules&&rules.forEach(rule=>{rule.operator&&null!=rule.value&&external_kbnSharedDeps_Lodash_default.a[rule.operator](value,rule.value)&&(color=rule[colorKey])}),color}function sanitizeUrl(url){return"javascript:"===Object(url_url.parse)(url).protocol?"":url}class vis_TableVis extends external_kbnSharedDeps_React_.Component{constructor(props){var obj,key,value;super(props),value=row=>{const{model:model}=this.props;let rowDisplay="date"===model.pivot_type?this.dateFormatter.convert(row.key):row.key;if(model.drilldown_url){const url=Object(replace_vars.a)(model.drilldown_url,{},{key:row.key});rowDisplay=external_kbnSharedDeps_React_default.a.createElement("a",{href:sanitizeUrl(url)},rowDisplay)}const columns=row.series.filter(item=>item).map(item=>{const column=this.visibleSeries.find(c=>c.id===item.id);if(!column)return null;const value=Object(tick_formatter.a)(column.formatter,column.value_template,this.props.getConfig)(item.last);let trend;if(column.trend_arrows){const trendIcon=item.slope>0?"sortUp":"sortDown";trend=external_kbnSharedDeps_React_default.a.createElement("span",null,"  ",external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiIcon,{type:trendIcon,color:"subdued"}))}const style={color:getColor(column.color_rules,"text",item.last)};return external_kbnSharedDeps_React_default.a.createElement("td",{key:`${row.key}-${item.id}`,"data-test-subj":"tvbTableVis__value",className:"eui-textRight",style:style},external_kbnSharedDeps_React_default.a.createElement("span",null,value),trend)});return external_kbnSharedDeps_React_default.a.createElement("tr",{key:row.key},external_kbnSharedDeps_React_default.a.createElement("td",null,Object(empty_label.b)(rowDisplay)),columns)},(key="renderRow")in(obj=this)?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value;const DateFormat=Object(services.d)().getType(data_public_.fieldFormats.FIELD_FORMAT_IDS.DATE);this.dateFormatter=new DateFormat({},this.props.getConfig)}get visibleSeries(){return Object(external_kbnSharedDeps_Lodash_.get)(this.props,"model.series",[]).filter(series=>!series.hidden)}renderHeader(){const{model:model,uiState:uiState,onUiState:onUiState,visData:visData}=this.props,stateKey=model.type+".sort",sort=uiState.get(stateKey,{column:"_default_",order:"asc"}),columns=this.visibleSeries.map(item=>{const metric=Object(external_kbnSharedDeps_Lodash_.last)(item.metrics),label=((metric,item)=>{var _visData$series$,_visData$series$$seri,_visData$series$$seri2;return item.label||(null===(_visData$series$=visData.series[0])||void 0===_visData$series$||null===(_visData$series$$seri=_visData$series$.series)||void 0===_visData$series$$seri||null===(_visData$series$$seri2=_visData$series$$seri.find(s=>item.id===s.id))||void 0===_visData$series$$seri2?void 0:_visData$series$$seri2.label)})(0,item);let sortComponent;if(isSortable(metric)){let sortIcon;sortIcon=sort.column===item.id?"asc"===sort.order?"sortUp":"sortDown":"empty",sortComponent=external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiIcon,{type:sortIcon})}let headerContent=external_kbnSharedDeps_React_default.a.createElement("span",null,label," ",sortComponent);return isSortable(metric)||(headerContent=external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiToolTip,{content:external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"visTypeTimeseries.table.columnNotSortableTooltip",defaultMessage:"This column is not sortable"})},headerContent)),external_kbnSharedDeps_React_default.a.createElement("th",{onClick:()=>{if(!isSortable(metric))return;let order;order=sort.column===item.id&&"asc"===sort.order?"desc":"asc",onUiState(stateKey,{column:item.id,order:order})},key:item.id,scope:"col"},headerContent)}),label=visData.pivot_label||model.pivot_label||model.pivot_id;let sortIcon;sortIcon="_default_"===sort.column?"asc"===sort.order?"sortUp":"sortDown":"empty";const sortComponent=external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_ElasticEui_.EuiIcon,{type:sortIcon});return external_kbnSharedDeps_React_default.a.createElement("tr",null,external_kbnSharedDeps_React_default.a.createElement("th",{className:"eui-textLeft",scope:"col",onClick:()=>{let order;order="_default_"===sort.column&&"asc"===sort.order?"desc":"asc",onUiState(stateKey,{column:"_default_",order:order})}},label," ",sortComponent),columns)}render(){const{visData:visData,model:model}=this.props,header=this.renderHeader();let rows;if(Object(external_kbnSharedDeps_Lodash_.isArray)(visData.series)&&visData.series.length)rows=visData.series.map(this.renderRow);else{const message=model.pivot_id?external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"visTypeTimeseries.table.noResultsAvailableMessage",defaultMessage:"No results available."}):external_kbnSharedDeps_React_default.a.createElement(external_kbnSharedDeps_KbnI18nReact_.FormattedMessage,{id:"visTypeTimeseries.table.noResultsAvailableWithDescriptionMessage",defaultMessage:"No results available. You must choose a group by field for this visualization."});rows=external_kbnSharedDeps_React_default.a.createElement("tr",null,external_kbnSharedDeps_React_default.a.createElement("td",{colSpan:this.visibleSeries.length+1},message))}return external_kbnSharedDeps_React_default.a.createElement(public_.RedirectAppLinks,{application:Object(services.b)().application,className:"tvbVis","data-test-subj":"tableView"},external_kbnSharedDeps_React_default.a.createElement("table",{className:"table"},external_kbnSharedDeps_React_default.a.createElement("thead",null,header),external_kbnSharedDeps_React_default.a.createElement("tbody",null,rows)))}}vis_TableVis.defaultProps={sort:{}}},61:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return replaceVars}));var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),lodash__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__),handlebars_dist_handlebars__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(78),handlebars_dist_handlebars__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(handlebars_dist_handlebars__WEBPACK_IMPORTED_MODULE_1__),_common_empty_label__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(43),_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3);function replaceVars(str,args={},vars={}){try{const template=handlebars_dist_handlebars__WEBPACK_IMPORTED_MODULE_1___default.a.compile(str.replace(_common_empty_label__WEBPACK_IMPORTED_MODULE_2__.a,`[${_common_empty_label__WEBPACK_IMPORTED_MODULE_2__.a}]`),{strict:!0,knownHelpersOnly:!0});return template(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign({},vars,{args:args}))}catch(e){if(-1!==e.toString().indexOf("Parse error"))return str;if(-1!==e.message.indexOf("not defined in")){const badVar=e.message.split(/"/)[1];e.error={caused_by:{reason:_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.translate("visTypeTimeseries.replaceVars.errors.unknownVarDescription",{defaultMessage:"{badVar} is an unknown variable",values:{badVar:"{{"+badVar+"}}"}}),title:_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.translate("visTypeTimeseries.replaceVars.errors.unknownVarTitle",{defaultMessage:"Error processing your markdown"})}}}else e.error={caused_by:{reason:_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.translate("visTypeTimeseries.replaceVars.errors.markdownErrorDescription",{defaultMessage:"Please verify you are only using markdown, known variables, and built-in Handlebars expressions"}),title:_kbn_i18n__WEBPACK_IMPORTED_MODULE_3__.i18n.translate("visTypeTimeseries.replaceVars.errors.markdownErrorTitle",{defaultMessage:"Error processing your markdown"})}};return e}}},77:function(module,exports){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(e){"object"==typeof window&&(g=window)}module.exports=g},83:function(module,exports){module.exports=function(module){return module.webpackPolyfill||(module.deprecate=function(){},module.paths=[],module.children||(module.children=[]),Object.defineProperty(module,"loaded",{enumerable:!0,get:function(){return module.l}}),Object.defineProperty(module,"id",{enumerable:!0,get:function(){return module.i}}),module.webpackPolyfill=1),module}}}]);