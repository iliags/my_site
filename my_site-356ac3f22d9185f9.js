let Z=4,Y=16,Q=1,T=`number`,O=0,L=`undefined`,$=486,R=`function`,V=`string`,W=`Object`,U=`boolean`,K=null,M=`utf-8`,I=Array,N=Error,X=FinalizationRegistry,S=Int32Array,_=Reflect,P=Uint8Array,J=undefined;var F=((b,c)=>{a=b.exports;H.__wbindgen_wasm_module=c;s=K;q=K;h=K;a.__wbindgen_start();return a});var A=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h08a0b952d0e48415(b,c,k(d))});var r=(()=>{if(q===K||q.byteLength===O){q=new S(a.memory.buffer)};return q});var t=(()=>{if(s===K||s.byteLength===O){s=new Float64Array(a.memory.buffer)};return s});var c=(a=>b[a]);function B(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(k(b))}}var p=(a=>a===J||a===K);var y=((b,c)=>{try{const g=a.__wbindgen_add_to_stack_pointer(-Y);a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6657e214352ae157(g,b,c);var d=r()[g/Z+ O];var e=r()[g/Z+ Q];if(e){throw f(d)}}finally{a.__wbindgen_add_to_stack_pointer(Y)}});var z=((b,c)=>{a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf9070c463c664591(b,c)});var G=(b=>{if(a!==J)return a;const c=D();E(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return F(d,b)});var E=((a,b)=>{});var C=(async(a,b)=>{if(typeof Response===R&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===R){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var k=(a=>{if(d===b.length)b.push(b.length+ Q);const c=d;d=b[c];b[c]=a;return c});var e=(a=>{if(a<132)return;b[a]=d;d=a});var o=((a,b,c)=>{if(c===J){const c=m.encode(a);const d=b(c.length,Q)>>>O;i().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,Q)>>>O;const f=i();let g=O;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==O){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,Q)>>>O;const b=i().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written;e=c(e,d,g,Q)>>>O};l=g;return e});var w=((b,c,d,e)=>{const f={a:b,b:c,cnt:Q,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=O;try{return e(c,f.b,...b)}finally{if(--f.cnt===O){a.__wbindgen_export_2.get(f.dtor)(c,f.b);v.unregister(f)}else{f.a=c}}};g.original=f;v.register(g,f,f);return g});var x=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfdde03c420c64ec1(b,c,k(d))});var u=(a=>{const b=typeof a;if(b==T||b==U||a==K){return `${a}`};if(b==V){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==K){return `Symbol`}else{return `Symbol(${b})`}};if(b==R){const b=a.name;if(typeof b==V&&b.length>O){return `Function(${b})`}else{return `Function`}};if(I.isArray(a)){const b=a.length;let c=`[`;if(b>O){c+=u(a[O])};for(let d=Q;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>Q){d=c[Q]}else{return toString.call(a)};if(d==W){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return W}};if(a instanceof N){return `${a.name}: ${a.message}\n${a.stack}`};return d});var j=((a,b)=>{a=a>>>O;return g.decode(i().subarray(a,a+ b))});var f=(a=>{const b=c(a);e(a);return b});var H=(async(b)=>{if(a!==J)return a;if(typeof b===L){b=new URL(`my_site_bg.wasm`,import.meta.url)};const c=D();if(typeof b===V||typeof Request===R&&b instanceof Request||typeof URL===R&&b instanceof URL){b=fetch(b)};E(c);const {instance:d,module:e}=await C(await b,c);return F(d,e)});var D=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=j(a,b);return k(c)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==Q){b.a=O;return !0};const c=!1;return c});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===V?e:J;var g=p(f)?O:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/Z+ Q]=h;r()[b/Z+ O]=g});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return k(b)});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===T?d:J;t()[a/8+ Q]=p(e)?O:e;r()[a/Z+ O]=!p(e)});b.wbg.__wbg_warn_be721915eccafb9e=((a,b)=>{console.warn(j(a,b))});b.wbg.__wbg_info_659c1db6a2a0775b=((a,b)=>{console.info(j(a,b))});b.wbg.__wbg_debug_13f940d958698fce=((a,b)=>{console.debug(j(a,b))});b.wbg.__wbg_trace_7c8c8260eeeeab7b=((a,b)=>{console.trace(j(a,b))});b.wbg.__wbg_error_0bedcd258a3fa8ab=((b,c)=>{let d;let e;try{d=b;e=c;console.error(j(b,c))}finally{a.__wbindgen_free(d,e,Q)}});b.wbg.__wbg_new_7b45694436783021=(()=>{const a=new N();return k(a)});b.wbg.__wbg_stack_593e956638f4c1a9=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f});b.wbg.__wbg_queueMicrotask_481971b0d87f3dd4=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_3cbae2ec6b6cd3d6=(a=>{const b=c(a).queueMicrotask;return k(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===R;return b});b.wbg.__wbg_performance_eeefc685c9bc38b4=(a=>{const b=c(a).performance;return k(b)});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===J;return b});b.wbg.__wbg_now_e0d8ec93dd25766a=(a=>{const b=c(a).now();return b});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===U?(b?Q:O):2;return d});b.wbg.__wbg_instanceof_WebGl2RenderingContext_6b8f92d566ced9e1=(a=>{let b;try{b=c(a) instanceof WebGL2RenderingContext}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_bindVertexArray_239574d42dbbd203=((a,b)=>{c(a).bindVertexArray(c(b))});b.wbg.__wbg_bufferData_c787516945ba48c2=((a,b,d,e)=>{c(a).bufferData(b>>>O,c(d),e>>>O)});b.wbg.__wbg_createVertexArray_4f450ed4d4a69acf=(a=>{const b=c(a).createVertexArray();return p(b)?O:k(b)});b.wbg.__wbg_texImage2D_2558a70047650d54=function(){return B(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texImage2D(b>>>O,d,e,f,g,h,i>>>O,j>>>O,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_b4ac5eac47418cc5=function(){return B(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>O,d,e,f,g,h,i>>>O,j>>>O,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_b962ba533b866161=function(){return B(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>O,d,e,f,g,h,i>>>O,j>>>O,k)}),arguments)};b.wbg.__wbg_activeTexture_d42cec3a26e47a5b=((a,b)=>{c(a).activeTexture(b>>>O)});b.wbg.__wbg_attachShader_2112634b3ffa9e9f=((a,b,d)=>{c(a).attachShader(c(b),c(d))});b.wbg.__wbg_bindBuffer_90d4fb91538001d5=((a,b,d)=>{c(a).bindBuffer(b>>>O,c(d))});b.wbg.__wbg_bindTexture_75a698c47a923814=((a,b,d)=>{c(a).bindTexture(b>>>O,c(d))});b.wbg.__wbg_blendEquationSeparate_34aa4cecd02882ab=((a,b,d)=>{c(a).blendEquationSeparate(b>>>O,d>>>O)});b.wbg.__wbg_blendFuncSeparate_3c342f57887c2900=((a,b,d,e,f)=>{c(a).blendFuncSeparate(b>>>O,d>>>O,e>>>O,f>>>O)});b.wbg.__wbg_clear_8e2508724944df18=((a,b)=>{c(a).clear(b>>>O)});b.wbg.__wbg_clearColor_480962bfac4e1cbd=((a,b,d,e,f)=>{c(a).clearColor(b,d,e,f)});b.wbg.__wbg_colorMask_21a93d0180bcbffa=((a,b,d,e,f)=>{c(a).colorMask(b!==O,d!==O,e!==O,f!==O)});b.wbg.__wbg_compileShader_f40e0c51a7a836fd=((a,b)=>{c(a).compileShader(c(b))});b.wbg.__wbg_createBuffer_7f57647465d111f0=(a=>{const b=c(a).createBuffer();return p(b)?O:k(b)});b.wbg.__wbg_createProgram_7759fb2effb5d9b3=(a=>{const b=c(a).createProgram();return p(b)?O:k(b)});b.wbg.__wbg_createShader_b474ef421ec0f80b=((a,b)=>{const d=c(a).createShader(b>>>O);return p(d)?O:k(d)});b.wbg.__wbg_createTexture_18b4a88c14cb086e=(a=>{const b=c(a).createTexture();return p(b)?O:k(b)});b.wbg.__wbg_deleteBuffer_fca5d765302c9a4e=((a,b)=>{c(a).deleteBuffer(c(b))});b.wbg.__wbg_deleteProgram_a06d69620332cc70=((a,b)=>{c(a).deleteProgram(c(b))});b.wbg.__wbg_deleteShader_138a810cc0ca9986=((a,b)=>{c(a).deleteShader(c(b))});b.wbg.__wbg_deleteTexture_eae7abcfa3015f09=((a,b)=>{c(a).deleteTexture(c(b))});b.wbg.__wbg_detachShader_6cdc9c293ddee02e=((a,b,d)=>{c(a).detachShader(c(b),c(d))});b.wbg.__wbg_disable_f0ef6e9a7ac6ddd7=((a,b)=>{c(a).disable(b>>>O)});b.wbg.__wbg_disableVertexAttribArray_e4f458e34e54fe78=((a,b)=>{c(a).disableVertexAttribArray(b>>>O)});b.wbg.__wbg_drawElements_565a93d1efa4da07=((a,b,d,e,f)=>{c(a).drawElements(b>>>O,d,e>>>O,f)});b.wbg.__wbg_enable_8b3019da8846ce76=((a,b)=>{c(a).enable(b>>>O)});b.wbg.__wbg_enableVertexAttribArray_9d7b7e199f86e09b=((a,b)=>{c(a).enableVertexAttribArray(b>>>O)});b.wbg.__wbg_getAttribLocation_4e2b9fe88dcc9802=((a,b,d,e)=>{const f=c(a).getAttribLocation(c(b),j(d,e));return f});b.wbg.__wbg_getError_d02c89917f45dd5e=(a=>{const b=c(a).getError();return b});b.wbg.__wbg_getExtension_bef4112494c87f34=function(){return B(((a,b,d)=>{const e=c(a).getExtension(j(b,d));return p(e)?O:k(e)}),arguments)};b.wbg.__wbg_getParameter_aa9af66884d2b210=function(){return B(((a,b)=>{const d=c(a).getParameter(b>>>O);return k(d)}),arguments)};b.wbg.__wbg_getProgramInfoLog_4d189135f8d5a2de=((b,d,e)=>{const f=c(d).getProgramInfoLog(c(e));var g=p(f)?O:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/Z+ Q]=h;r()[b/Z+ O]=g});b.wbg.__wbg_getProgramParameter_7b04ca71a79d9047=((a,b,d)=>{const e=c(a).getProgramParameter(c(b),d>>>O);return k(e)});b.wbg.__wbg_getShaderInfoLog_d5de3e4eab06fc46=((b,d,e)=>{const f=c(d).getShaderInfoLog(c(e));var g=p(f)?O:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/Z+ Q]=h;r()[b/Z+ O]=g});b.wbg.__wbg_getShaderParameter_4ddb51279bb1500b=((a,b,d)=>{const e=c(a).getShaderParameter(c(b),d>>>O);return k(e)});b.wbg.__wbg_getSupportedExtensions_7a174085f9e1983a=(a=>{const b=c(a).getSupportedExtensions();return p(b)?O:k(b)});b.wbg.__wbg_getUniformLocation_51ec30e3755e574d=((a,b,d,e)=>{const f=c(a).getUniformLocation(c(b),j(d,e));return p(f)?O:k(f)});b.wbg.__wbg_linkProgram_eabc664217816e72=((a,b)=>{c(a).linkProgram(c(b))});b.wbg.__wbg_pixelStorei_162a23ba7872b886=((a,b,d)=>{c(a).pixelStorei(b>>>O,d)});b.wbg.__wbg_scissor_726eea865bbd6809=((a,b,d,e,f)=>{c(a).scissor(b,d,e,f)});b.wbg.__wbg_shaderSource_7943d06f24862a3b=((a,b,d,e)=>{c(a).shaderSource(c(b),j(d,e))});b.wbg.__wbg_texParameteri_8f70dffce11d7da1=((a,b,d,e)=>{c(a).texParameteri(b>>>O,d>>>O,e)});b.wbg.__wbg_uniform1i_bdcd75be097285e6=((a,b,d)=>{c(a).uniform1i(c(b),d)});b.wbg.__wbg_uniform2f_e8287b8c104117ac=((a,b,d,e)=>{c(a).uniform2f(c(b),d,e)});b.wbg.__wbg_useProgram_757fab437af29c20=((a,b)=>{c(a).useProgram(c(b))});b.wbg.__wbg_vertexAttribPointer_4416f0325c02aa13=((a,b,d,e,f,g,h)=>{c(a).vertexAttribPointer(b>>>O,d,e>>>O,f!==O,g,h)});b.wbg.__wbg_viewport_7414e7e2a83afc72=((a,b,d,e,f)=>{c(a).viewport(b,d,e,f)});b.wbg.__wbg_instanceof_Window_f401953a2cf86220=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_5100775d18896c16=(a=>{const b=c(a).document;return p(b)?O:k(b)});b.wbg.__wbg_location_2951b5ee34f19221=(a=>{const b=c(a).location;return k(b)});b.wbg.__wbg_navigator_6c8fa55c5cc8796e=(a=>{const b=c(a).navigator;return k(b)});b.wbg.__wbg_innerHeight_c1ef73925c3d3e9c=function(){return B((a=>{const b=c(a).innerHeight;return k(b)}),arguments)};b.wbg.__wbg_devicePixelRatio_efc553b59506f64c=(a=>{const b=c(a).devicePixelRatio;return b});b.wbg.__wbg_localStorage_e381d34d0c40c761=function(){return B((a=>{const b=c(a).localStorage;return p(b)?O:k(b)}),arguments)};b.wbg.__wbg_performance_3298a9628a5c8aa4=(a=>{const b=c(a).performance;return p(b)?O:k(b)});b.wbg.__wbg_matchMedia_66bb21e3ef19270c=function(){return B(((a,b,d)=>{const e=c(a).matchMedia(j(b,d));return p(e)?O:k(e)}),arguments)};b.wbg.__wbg_open_cc82b8aaf0c296c1=function(){return B(((a,b,d,e,f)=>{const g=c(a).open(j(b,d),j(e,f));return p(g)?O:k(g)}),arguments)};b.wbg.__wbg_cancelAnimationFrame_111532f326e480af=function(){return B(((a,b)=>{c(a).cancelAnimationFrame(b)}),arguments)};b.wbg.__wbg_requestAnimationFrame_549258cfa66011f0=function(){return B(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_clearInterval_4368213fd2b325b0=((a,b)=>{c(a).clearInterval(b)});b.wbg.__wbg_fetch_c4b6afebdb1f918e=((a,b)=>{const d=c(a).fetch(c(b));return k(d)});b.wbg.__wbg_setTimeout_c172d5704ef82276=function(){return B(((a,b,d)=>{const e=c(a).setTimeout(c(b),d);return e}),arguments)};b.wbg.__wbg_body_edb1908d3ceff3a1=(a=>{const b=c(a).body;return p(b)?O:k(b)});b.wbg.__wbg_createElement_8bae7856a4bb7411=function(){return B(((a,b,d)=>{const e=c(a).createElement(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_getElementById_c369ff43f0db99cf=((a,b,d)=>{const e=c(a).getElementById(j(b,d));return p(e)?O:k(e)});b.wbg.__wbg_setid_37bacc3f09f555aa=((a,b,d)=>{c(a).id=j(b,d)});b.wbg.__wbg_scrollLeft_d34126a225a7a3dd=(a=>{const b=c(a).scrollLeft;return b});b.wbg.__wbg_clientWidth_7ea3915573b64350=(a=>{const b=c(a).clientWidth;return b});b.wbg.__wbg_clientHeight_d24efa25aa66e844=(a=>{const b=c(a).clientHeight;return b});b.wbg.__wbg_getBoundingClientRect_91e6d57c4e65f745=(a=>{const b=c(a).getBoundingClientRect();return k(b)});b.wbg.__wbg_scrollTop_323466d6f60b94d8=(a=>{const b=c(a).scrollTop;return b});b.wbg.__wbg_hidden_2da07df17092ca44=(a=>{const b=c(a).hidden;return b});b.wbg.__wbg_sethidden_1da7d3202cfe66f3=((a,b)=>{c(a).hidden=b!==O});b.wbg.__wbg_style_c3fc3dd146182a2d=(a=>{const b=c(a).style;return k(b)});b.wbg.__wbg_offsetTop_d164bbc281f71e80=(a=>{const b=c(a).offsetTop;return b});b.wbg.__wbg_offsetLeft_f8785f97dde57216=(a=>{const b=c(a).offsetLeft;return b});b.wbg.__wbg_offsetWidth_f7da5da36bd7ebc2=(a=>{const b=c(a).offsetWidth;return b});b.wbg.__wbg_blur_51f7b635f18a0eec=function(){return B((a=>{c(a).blur()}),arguments)};b.wbg.__wbg_focus_39d4b8ba8ff9df14=function(){return B((a=>{c(a).focus()}),arguments)};b.wbg.__wbg_instanceof_WebGlRenderingContext_d48361eb1e636d9a=(a=>{let b;try{b=c(a) instanceof WebGLRenderingContext}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_bufferData_5d1e6b8eaa7d23c8=((a,b,d,e)=>{c(a).bufferData(b>>>O,c(d),e>>>O)});b.wbg.__wbg_texImage2D_a14a3c7863e25c89=function(){return B(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texImage2D(b>>>O,d,e,f,g,h,i>>>O,j>>>O,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_55a407e48f3a5cb4=function(){return B(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>O,d,e,f,g,h,i>>>O,j>>>O,c(k))}),arguments)};b.wbg.__wbg_activeTexture_5f084e1b3f14853e=((a,b)=>{c(a).activeTexture(b>>>O)});b.wbg.__wbg_attachShader_6397dc4fd87343d3=((a,b,d)=>{c(a).attachShader(c(b),c(d))});b.wbg.__wbg_bindBuffer_1e5043751efddd4f=((a,b,d)=>{c(a).bindBuffer(b>>>O,c(d))});b.wbg.__wbg_bindTexture_772f5eb022019d87=((a,b,d)=>{c(a).bindTexture(b>>>O,c(d))});b.wbg.__wbg_blendEquationSeparate_721f30ba584a5233=((a,b,d)=>{c(a).blendEquationSeparate(b>>>O,d>>>O)});b.wbg.__wbg_blendFuncSeparate_abe2ad4272c8365e=((a,b,d,e,f)=>{c(a).blendFuncSeparate(b>>>O,d>>>O,e>>>O,f>>>O)});b.wbg.__wbg_clear_f9731a47df2e70d8=((a,b)=>{c(a).clear(b>>>O)});b.wbg.__wbg_clearColor_42707553c40e0e0f=((a,b,d,e,f)=>{c(a).clearColor(b,d,e,f)});b.wbg.__wbg_colorMask_03aa359acc86fd70=((a,b,d,e,f)=>{c(a).colorMask(b!==O,d!==O,e!==O,f!==O)});b.wbg.__wbg_compileShader_3af4719dfdb508e3=((a,b)=>{c(a).compileShader(c(b))});b.wbg.__wbg_createBuffer_34e01f5c10929b41=(a=>{const b=c(a).createBuffer();return p(b)?O:k(b)});b.wbg.__wbg_createProgram_9affbfa62b7b2608=(a=>{const b=c(a).createProgram();return p(b)?O:k(b)});b.wbg.__wbg_createShader_55ca04b44164bd41=((a,b)=>{const d=c(a).createShader(b>>>O);return p(d)?O:k(d)});b.wbg.__wbg_createTexture_c13c31b2b132c17f=(a=>{const b=c(a).createTexture();return p(b)?O:k(b)});b.wbg.__wbg_deleteBuffer_96df38349e3487d2=((a,b)=>{c(a).deleteBuffer(c(b))});b.wbg.__wbg_deleteProgram_641402f7551587d8=((a,b)=>{c(a).deleteProgram(c(b))});b.wbg.__wbg_deleteShader_e5c778f25b722e68=((a,b)=>{c(a).deleteShader(c(b))});b.wbg.__wbg_deleteTexture_f89d8e417b156960=((a,b)=>{c(a).deleteTexture(c(b))});b.wbg.__wbg_detachShader_2be0011a543a788a=((a,b,d)=>{c(a).detachShader(c(b),c(d))});b.wbg.__wbg_disable_5dd8c3842de93e92=((a,b)=>{c(a).disable(b>>>O)});b.wbg.__wbg_disableVertexAttribArray_12bc9adefa738796=((a,b)=>{c(a).disableVertexAttribArray(b>>>O)});b.wbg.__wbg_drawElements_0861624300587fcd=((a,b,d,e,f)=>{c(a).drawElements(b>>>O,d,e>>>O,f)});b.wbg.__wbg_enable_7abe812a71c76206=((a,b)=>{c(a).enable(b>>>O)});b.wbg.__wbg_enableVertexAttribArray_6d44444aa994f42a=((a,b)=>{c(a).enableVertexAttribArray(b>>>O)});b.wbg.__wbg_getAttribLocation_0a3d71a11394d043=((a,b,d,e)=>{const f=c(a).getAttribLocation(c(b),j(d,e));return f});b.wbg.__wbg_getError_fd1f7b2b2ba5a860=(a=>{const b=c(a).getError();return b});b.wbg.__wbg_getExtension_cb7fb87e4bca59c7=function(){return B(((a,b,d)=>{const e=c(a).getExtension(j(b,d));return p(e)?O:k(e)}),arguments)};b.wbg.__wbg_getParameter_a77768abe8a51f24=function(){return B(((a,b)=>{const d=c(a).getParameter(b>>>O);return k(d)}),arguments)};b.wbg.__wbg_getProgramInfoLog_bf1fba8fa90667c7=((b,d,e)=>{const f=c(d).getProgramInfoLog(c(e));var g=p(f)?O:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/Z+ Q]=h;r()[b/Z+ O]=g});b.wbg.__wbg_getProgramParameter_10c8a43809fb8c2e=((a,b,d)=>{const e=c(a).getProgramParameter(c(b),d>>>O);return k(e)});b.wbg.__wbg_getShaderInfoLog_0262cb299092ce92=((b,d,e)=>{const f=c(d).getShaderInfoLog(c(e));var g=p(f)?O:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/Z+ Q]=h;r()[b/Z+ O]=g});b.wbg.__wbg_getShaderParameter_60b69083e8d662ce=((a,b,d)=>{const e=c(a).getShaderParameter(c(b),d>>>O);return k(e)});b.wbg.__wbg_getSupportedExtensions_d0eef4c0b5a783b8=(a=>{const b=c(a).getSupportedExtensions();return p(b)?O:k(b)});b.wbg.__wbg_getUniformLocation_6eedfb513ccce732=((a,b,d,e)=>{const f=c(a).getUniformLocation(c(b),j(d,e));return p(f)?O:k(f)});b.wbg.__wbg_linkProgram_af5fed9dc3f1cdf9=((a,b)=>{c(a).linkProgram(c(b))});b.wbg.__wbg_pixelStorei_054e50b5fdc17824=((a,b,d)=>{c(a).pixelStorei(b>>>O,d)});b.wbg.__wbg_scissor_75ba2245d4db0eaf=((a,b,d,e,f)=>{c(a).scissor(b,d,e,f)});b.wbg.__wbg_shaderSource_7891a1fcb69a0023=((a,b,d,e)=>{c(a).shaderSource(c(b),j(d,e))});b.wbg.__wbg_texParameteri_d1035ed45d6c5655=((a,b,d,e)=>{c(a).texParameteri(b>>>O,d>>>O,e)});b.wbg.__wbg_uniform1i_badd5ff70c0d30bf=((a,b,d)=>{c(a).uniform1i(c(b),d)});b.wbg.__wbg_uniform2f_dbf02e46dd8c211d=((a,b,d,e)=>{c(a).uniform2f(c(b),d,e)});b.wbg.__wbg_useProgram_c637e43f9cd4c07a=((a,b)=>{c(a).useProgram(c(b))});b.wbg.__wbg_vertexAttribPointer_c25e4c5ed17f8a1d=((a,b,d,e,f,g,h)=>{c(a).vertexAttribPointer(b>>>O,d,e>>>O,f!==O,g,h)});b.wbg.__wbg_viewport_221ade2aef6032c8=((a,b,d,e,f)=>{c(a).viewport(b,d,e,f)});b.wbg.__wbg_instanceof_HtmlInputElement_307512fe1252c849=(a=>{let b;try{b=c(a) instanceof HTMLInputElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_setautofocus_5ef4f6fab60cacbf=((a,b)=>{c(a).autofocus=b!==O});b.wbg.__wbg_setsize_1e19966d9fce167e=((a,b)=>{c(a).size=b>>>O});b.wbg.__wbg_value_47fe6384562f52ab=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f});b.wbg.__wbg_setvalue_78cb4f1fef58ae98=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_preventDefault_b1a4aafc79409429=(a=>{c(a).preventDefault()});b.wbg.__wbg_stopPropagation_fa5b666049c9fd02=(a=>{c(a).stopPropagation()});b.wbg.__wbg_headers_abb199c3be8d817c=(a=>{const b=c(a).headers;return k(b)});b.wbg.__wbg_newwithstrandinit_3fd6fba4083ff2d0=function(){return B(((a,b,d)=>{const e=new Request(j(a,b),c(d));return k(e)}),arguments)};b.wbg.__wbg_instanceof_Response_849eb93e75734b6e=(a=>{let b;try{b=c(a) instanceof Response}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_url_5f6dc4009ac5f99d=((b,d)=>{const e=c(d).url;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f});b.wbg.__wbg_status_61a01141acd3cf74=(a=>{const b=c(a).status;return b});b.wbg.__wbg_ok_38d7c30bbc66719e=(a=>{const b=c(a).ok;return b});b.wbg.__wbg_statusText_1e41a5e3986992cd=((b,d)=>{const e=c(d).statusText;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f});b.wbg.__wbg_headers_9620bfada380764a=(a=>{const b=c(a).headers;return k(b)});b.wbg.__wbg_arrayBuffer_29931d52c7206b02=function(){return B((a=>{const b=c(a).arrayBuffer();return k(b)}),arguments)};b.wbg.__wbg_size_9c7e57fbd4f0f4b5=(a=>{const b=c(a).size;return b});b.wbg.__wbg_type_020d4abf13839639=((b,d)=>{const e=c(d).type;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f});b.wbg.__wbg_arrayBuffer_307ddd1bd1d04e23=(a=>{const b=c(a).arrayBuffer();return k(b)});b.wbg.__wbg_writeText_4f1bf9bc5850bc26=((a,b,d)=>{const e=c(a).writeText(j(b,d));return k(e)});b.wbg.__wbg_length_a23c520109d9ba0a=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_0fa6ec8bd6a5c256=((a,b)=>{const d=c(a)[b>>>O];return p(d)?O:k(d)});b.wbg.__wbg_keyCode_2af7775f99bf8e33=(a=>{const b=c(a).keyCode;return b});b.wbg.__wbg_altKey_2e6c34c37088d8b1=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_ctrlKey_bb5b6fef87339703=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_5911baf439ab232b=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_6bf4ae4e83a11278=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_isComposing_a0b97b7ba6491ed6=(a=>{const b=c(a).isComposing;return b});b.wbg.__wbg_key_dccf9e8aa1315a8e=((b,d)=>{const e=c(d).key;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f});b.wbg.__wbg_type_e55aae30eb601b13=((b,d)=>{const e=c(d).type;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f});b.wbg.__wbg_addEventListener_53b787075bd5e003=function(){return B(((a,b,d,e)=>{c(a).addEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_removeEventListener_92cb9b3943463338=function(){return B(((a,b,d,e)=>{c(a).removeEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_length_4db38705d5c8ba2f=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_58f6d5f6aee3f846=((a,b)=>{const d=c(a)[b>>>O];return p(d)?O:k(d)});b.wbg.__wbg_instanceof_HtmlCanvasElement_46bdbf323b0b18d1=(a=>{let b;try{b=c(a) instanceof HTMLCanvasElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_width_aee8b8809b033b05=(a=>{const b=c(a).width;return b});b.wbg.__wbg_setwidth_080107476e633963=((a,b)=>{c(a).width=b>>>O});b.wbg.__wbg_height_80053d3c71b338e0=(a=>{const b=c(a).height;return b});b.wbg.__wbg_setheight_dc240617639f1f51=((a,b)=>{c(a).height=b>>>O});b.wbg.__wbg_getContext_df50fa48a8876636=function(){return B(((a,b,d)=>{const e=c(a).getContext(j(b,d));return p(e)?O:k(e)}),arguments)};b.wbg.__wbg_href_706b235ecfe6848c=function(){return B(((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f}),arguments)};b.wbg.__wbg_origin_ee93e29ace71f568=function(){return B(((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f}),arguments)};b.wbg.__wbg_protocol_b7292c581cfe1e5c=function(){return B(((b,d)=>{const e=c(d).protocol;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f}),arguments)};b.wbg.__wbg_host_8f1b8ead257c8135=function(){return B(((b,d)=>{const e=c(d).host;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f}),arguments)};b.wbg.__wbg_hostname_3d9f22c60dc5bec6=function(){return B(((b,d)=>{const e=c(d).hostname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f}),arguments)};b.wbg.__wbg_port_b8d9a9c4e2b26efa=function(){return B(((b,d)=>{const e=c(d).port;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f}),arguments)};b.wbg.__wbg_search_489f12953342ec1f=function(){return B(((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f}),arguments)};b.wbg.__wbg_hash_553098e838e06c1d=function(){return B(((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f}),arguments)};b.wbg.__wbg_clipboardData_0427b2003659865a=(a=>{const b=c(a).clipboardData;return p(b)?O:k(b)});b.wbg.__wbg_top_c4e2234a035a3d25=(a=>{const b=c(a).top;return b});b.wbg.__wbg_left_fe0a839abdd508f4=(a=>{const b=c(a).left;return b});b.wbg.__wbg_clipboard_45ef2514e9ece120=(a=>{const b=c(a).clipboard;return p(b)?O:k(b)});b.wbg.__wbg_userAgent_e94c7cbcdac01fea=function(){return B(((b,d)=>{const e=c(d).userAgent;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f}),arguments)};b.wbg.__wbg_deltaX_206576827ededbe5=(a=>{const b=c(a).deltaX;return b});b.wbg.__wbg_deltaY_032e327e216f2b2b=(a=>{const b=c(a).deltaY;return b});b.wbg.__wbg_deltaMode_294b2eaf54047265=(a=>{const b=c(a).deltaMode;return b});b.wbg.__wbg_data_1d8005e6d66d881b=((b,d)=>{const e=c(d).data;var f=p(e)?O:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f});b.wbg.__wbg_items_5070ce38a6d53ed2=(a=>{const b=c(a).items;return k(b)});b.wbg.__wbg_files_a2848a7a7424820f=(a=>{const b=c(a).files;return p(b)?O:k(b)});b.wbg.__wbg_getData_35c5974f5cd7e02c=function(){return B(((b,d,e,f)=>{const g=c(d).getData(j(e,f));const h=o(g,a.__wbindgen_malloc,a.__wbindgen_realloc);const i=l;r()[b/Z+ Q]=i;r()[b/Z+ O]=h}),arguments)};b.wbg.__wbg_width_b455dec2a8f76e45=(a=>{const b=c(a).width;return b});b.wbg.__wbg_height_424ebb12c15f2691=(a=>{const b=c(a).height;return b});b.wbg.__wbg_parentElement_347524db59fc2976=(a=>{const b=c(a).parentElement;return p(b)?O:k(b)});b.wbg.__wbg_appendChild_580ccb11a660db68=function(){return B(((a,b)=>{const d=c(a).appendChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_matches_e14ed9ff8291cf24=(a=>{const b=c(a).matches;return b});b.wbg.__wbg_now_4e659b3d15f470d9=(a=>{const b=c(a).now();return b});b.wbg.__wbg_getItem_164e8e5265095b87=function(){return B(((b,d,e,f)=>{const g=c(d).getItem(j(e,f));var h=p(g)?O:o(g,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=l;r()[b/Z+ Q]=i;r()[b/Z+ O]=h}),arguments)};b.wbg.__wbg_setItem_ba2bb41d73dac079=function(){return B(((a,b,d,e,f)=>{c(a).setItem(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_dataTransfer_cef7816623bd8478=(a=>{const b=c(a).dataTransfer;return p(b)?O:k(b)});b.wbg.__wbg_length_679e0f1f9f0744bd=(a=>{const b=c(a).length;return b});b.wbg.__wbg_item_2b1028b3d39463e9=((a,b)=>{const d=c(a).item(b>>>O);return p(d)?O:k(d)});b.wbg.__wbg_get_cbca0027ab731230=((a,b)=>{const d=c(a)[b>>>O];return p(d)?O:k(d)});b.wbg.__wbg_error_8e3928cfb8a43e2b=(a=>{console.error(c(a))});b.wbg.__wbg_setProperty_ea7d15a2b591aa97=function(){return B(((a,b,d,e,f)=>{c(a).setProperty(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_name_f35eb93a73d94973=((b,d)=>{const e=c(d).name;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f});b.wbg.__wbg_lastModified_e774a1d2d0384c3b=(a=>{const b=c(a).lastModified;return b});b.wbg.__wbg_clientX_fef6bf7a6bcf41b8=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_clientY_df42f8fceab3cef2=(a=>{const b=c(a).clientY;return b});b.wbg.__wbg_ctrlKey_008695ce60a588f5=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_1e76dbfcdd36a4b4=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_altKey_07da841b54bd3ed6=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_metaKey_86bfd3b0d3a8083f=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_button_367cdc7303e3cf9b=(a=>{const b=c(a).button;return b});b.wbg.__wbg_bindVertexArrayOES_abe2fd389c6a2f56=((a,b)=>{c(a).bindVertexArrayOES(c(b))});b.wbg.__wbg_createVertexArrayOES_886be8a08db32ce6=(a=>{const b=c(a).createVertexArrayOES();return p(b)?O:k(b)});b.wbg.__wbg_identifier_02d52b63cc6ddc4d=(a=>{const b=c(a).identifier;return b});b.wbg.__wbg_pageX_fa02f6046f16d09a=(a=>{const b=c(a).pageX;return b});b.wbg.__wbg_pageY_d1a7e78ba5b4cc5c=(a=>{const b=c(a).pageY;return b});b.wbg.__wbg_force_139077aa422a42a5=(a=>{const b=c(a).force;return b});b.wbg.__wbg_set_cb0e7a5c2dd66afd=function(){return B(((a,b,d,e,f)=>{c(a).set(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_matches_dd4fdea75008ad05=(a=>{const b=c(a).matches;return b});b.wbg.__wbg_touches_c0f077e3c2429577=(a=>{const b=c(a).touches;return k(b)});b.wbg.__wbg_changedTouches_d044c818dbcb83b1=(a=>{const b=c(a).changedTouches;return k(b)});b.wbg.__wbg_get_bd8e338fbd5f5cc8=((a,b)=>{const d=c(a)[b>>>O];return k(d)});b.wbg.__wbg_length_cd7af8117672b8b8=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_e258087cd0daa0ea=((a,b)=>{const c=new Function(j(a,b));return k(c)});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==K;return d});b.wbg.__wbg_next_40fc327bfc8770e6=(a=>{const b=c(a).next;return k(b)});b.wbg.__wbg_next_196c84450b364254=function(){return B((a=>{const b=c(a).next();return k(b)}),arguments)};b.wbg.__wbg_done_298b57d23c0fc80c=(a=>{const b=c(a).done;return b});b.wbg.__wbg_value_d93c65011f51a456=(a=>{const b=c(a).value;return k(b)});b.wbg.__wbg_iterator_2cee6dadfd956dfa=(()=>{const a=Symbol.iterator;return k(a)});b.wbg.__wbg_get_e3c254076557e348=function(){return B(((a,b)=>{const d=_.get(c(a),c(b));return k(d)}),arguments)};b.wbg.__wbg_call_27c0f87801dedf93=function(){return B(((a,b)=>{const d=c(a).call(c(b));return k(d)}),arguments)};b.wbg.__wbg_new_72fb9a18b5ae2624=(()=>{const a=new Object();return k(a)});b.wbg.__wbg_self_ce0dbfc45cf2f5be=function(){return B((()=>{const a=self.self;return k(a)}),arguments)};b.wbg.__wbg_window_c6fb939a7f436783=function(){return B((()=>{const a=window.window;return k(a)}),arguments)};b.wbg.__wbg_globalThis_d1e6af4856ba331b=function(){return B((()=>{const a=globalThis.globalThis;return k(a)}),arguments)};b.wbg.__wbg_global_207b558942527489=function(){return B((()=>{const a=global.global;return k(a)}),arguments)};b.wbg.__wbg_instanceof_TypeError_6134172734e39ae0=(a=>{let b;try{b=c(a) instanceof TypeError}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_resolve_b0083a7967828ec8=(a=>{const b=Promise.resolve(c(a));return k(b)});b.wbg.__wbg_then_0c86a60e8fcfe9f6=((a,b)=>{const d=c(a).then(c(b));return k(d)});b.wbg.__wbg_then_a73caa9a87991566=((a,b,d)=>{const e=c(a).then(c(b),c(d));return k(e)});b.wbg.__wbg_buffer_12d079cc21e14bdb=(a=>{const b=c(a).buffer;return k(b)});b.wbg.__wbg_newwithbyteoffsetandlength_41559f654c4e743c=((a,b,d)=>{const e=new Int8Array(c(a),b>>>O,d>>>O);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_4bea9f904a7e0aef=((a,b,d)=>{const e=new Int16Array(c(a),b>>>O,d>>>O);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_425360430a1c8206=((a,b,d)=>{const e=new S(c(a),b>>>O,d>>>O);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb=((a,b,d)=>{const e=new P(c(a),b>>>O,d>>>O);return k(e)});b.wbg.__wbg_new_63b92bc8671ed464=(a=>{const b=new P(c(a));return k(b)});b.wbg.__wbg_set_a47bac70306a19a7=((a,b,d)=>{c(a).set(c(b),d>>>O)});b.wbg.__wbg_length_c20a40f15020d68a=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newwithbyteoffsetandlength_9fd64654bc0b0817=((a,b,d)=>{const e=new Uint16Array(c(a),b>>>O,d>>>O);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_3125852e5a7fbcff=((a,b,d)=>{const e=new Uint32Array(c(a),b>>>O,d>>>O);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_4a659d079a1650e0=((a,b,d)=>{const e=new Float32Array(c(a),b>>>O,d>>>O);return k(e)});b.wbg.__wbg_set_1f9b04f170055d33=function(){return B(((a,b,d)=>{const e=_.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/Z+ Q]=g;r()[b/Z+ O]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new N(j(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return k(b)});b.wbg.__wbindgen_closure_wrapper1944=((a,b,c)=>{const d=w(a,b,$,x);return k(d)});b.wbg.__wbindgen_closure_wrapper1946=((a,b,c)=>{const d=w(a,b,$,y);return k(d)});b.wbg.__wbindgen_closure_wrapper1948=((a,b,c)=>{const d=w(a,b,$,z);return k(d)});b.wbg.__wbindgen_closure_wrapper2079=((a,b,c)=>{const d=w(a,b,540,A);return k(d)});return b});var i=(()=>{if(h===K||h.byteLength===O){h=new P(a.memory.buffer)};return h});let a;const b=new I(128).fill(J);b.push(J,K,!0,!1);let d=b.length;const g=typeof TextDecoder!==L?new TextDecoder(M,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw N(`TextDecoder not available`)}};if(typeof TextDecoder!==L){g.decode()};let h=K;let l=O;const m=typeof TextEncoder!==L?new TextEncoder(M):{encode:()=>{throw N(`TextEncoder not available`)}};const n=typeof m.encodeInto===R?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=K;let s=K;const v=typeof X===L?{register:()=>{},unregister:()=>{}}:new X(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});export default H;export{G as initSync}