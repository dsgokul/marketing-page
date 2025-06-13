import 'kleur/colors';
import { q as NOOP_MIDDLEWARE_HEADER, v as decodeKey } from './chunks/astro/server_B0cD9c7h.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/GokulDS/Desktop/ssr/","cacheDir":"file:///C:/Users/GokulDS/Desktop/ssr/node_modules/.astro/","outDir":"file:///C:/Users/GokulDS/Desktop/ssr/dist/","srcDir":"file:///C:/Users/GokulDS/Desktop/ssr/src/","publicDir":"file:///C:/Users/GokulDS/Desktop/ssr/public/","buildClientDir":"file:///C:/Users/GokulDS/Desktop/ssr/dist/","buildServerDir":"file:///C:/Users/GokulDS/Desktop/ssr/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BQxhHEOQ.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BQxhHEOQ.css"}],"routeData":{"route":"/capability-consulting","isIndex":false,"type":"page","pattern":"^\\/capability-consulting\\/?$","segments":[[{"content":"capability-consulting","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/capability-consulting.astro","pathname":"/capability-consulting","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BQxhHEOQ.css"}],"routeData":{"route":"/contact-us","isIndex":false,"type":"page","pattern":"^\\/contact-us\\/?$","segments":[[{"content":"contact-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact-us.astro","pathname":"/contact-us","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BQxhHEOQ.css"},{"type":"inline","content":".tab-button[data-astro-cid-3juhkqjy]{cursor:pointer;background:none;border:none;padding:0;font:inherit}.accordion-header[data-astro-cid-3juhkqjy]{cursor:pointer;background:none;border:none;font:inherit}.accordion-content[data-astro-cid-3juhkqjy]{transition:max-height .3s ease-in-out}#horizontal-wrapper[data-astro-cid-jvmmcmcs]{will-change:transform}.overflow-hidden[data-astro-cid-jvmmcmcs]{scrollbar-width:none;-ms-overflow-style:none}.overflow-hidden[data-astro-cid-jvmmcmcs]::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/learning-experience-platform","isIndex":false,"type":"page","pattern":"^\\/learning-experience-platform\\/?$","segments":[[{"content":"learning-experience-platform","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/learning-experience-platform.astro","pathname":"/learning-experience-platform","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BQxhHEOQ.css"},{"type":"external","src":"/_astro/index.BhgBMfBR.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/GokulDS/Desktop/ssr/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/GokulDS/Desktop/ssr/src/pages/capability-consulting.astro",{"propagation":"none","containsHead":true}],["C:/Users/GokulDS/Desktop/ssr/src/pages/contact-us.astro",{"propagation":"none","containsHead":true}],["C:/Users/GokulDS/Desktop/ssr/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/GokulDS/Desktop/ssr/src/pages/learning-experience-platform.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/capability-consulting@_@astro":"pages/capability-consulting.astro.mjs","\u0000@astro-page:src/pages/contact-us@_@astro":"pages/contact-us.astro.mjs","\u0000@astro-page:src/pages/learning-experience-platform@_@astro":"pages/learning-experience-platform.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D62MI2KI.mjs","C:/Users/GokulDS/Desktop/ssr/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/GokulDS/Desktop/ssr/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B4y-DABe.mjs","C:/Users/GokulDS/Desktop/ssr/src/components/ContactForm":"_astro/ContactForm.ClYxGtnX.js","@astrojs/react/client.js":"_astro/client.BxCTEn3I.js","C:/Users/GokulDS/Desktop/ssr/src/pages/learning-experience-platform.astro?astro&type=script&index=0&lang.ts":"_astro/learning-experience-platform.astro_astro_type_script_index_0_lang.BLirNKhn.js","C:/Users/GokulDS/Desktop/ssr/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.kx0QUJzu.js","C:/Users/GokulDS/Desktop/ssr/src/components/ValueCreation.astro?astro&type=script&index=0&lang.ts":"_astro/ValueCreation.astro_astro_type_script_index_0_lang.DLvrrCe8.js","C:/Users/GokulDS/Desktop/ssr/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.C7EosKkY.js","C:/Users/GokulDS/Desktop/ssr/src/components/HeroHome.astro?astro&type=script&index=0&lang.ts":"_astro/HeroHome.astro_astro_type_script_index_0_lang.D60_qBZ7.js","C:/Users/GokulDS/Desktop/ssr/src/components/TransformationMeans.astro?astro&type=script&index=0&lang.ts":"_astro/TransformationMeans.astro_astro_type_script_index_0_lang.CSKRKamt.js","C:/Users/GokulDS/Desktop/ssr/src/components/DropdownHeaderLink.astro?astro&type=script&index=0&lang.ts":"_astro/DropdownHeaderLink.astro_astro_type_script_index_0_lang.DCrP7qku.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/GokulDS/Desktop/ssr/src/pages/learning-experience-platform.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const t=document.getElementById(\"horizontal-scroll-section\"),e=document.getElementById(\"horizontal-wrapper\"),n=document.getElementById(\"progress-bar\"),c=document.getElementById(\"cards-container\");let r=null;function g(){if(!t||!e||!n||!c)return;const s=c.querySelectorAll(\".min-w-\\\\[350px\\\\]\");if(s.length===0)return;const h=window.innerWidth,f=e.querySelector(\".flex.items-start.justify-start\"),m=f?f.offsetWidth:h*.5,p=h-m,y=505,S=24,v=48,E=s.length*y+(s.length-1)*S,u=Math.max(0,E+v-p);if(t){const o=u+window.innerHeight;t.style.height=`${o}px`}function w(){if(!t||!e||!n)return;const o=t.getBoundingClientRect(),z=t.offsetHeight,a=window.innerHeight;let i=0;o.top<=0&&o.bottom>=a?(i=Math.abs(o.top)/(z-a),i=Math.max(0,Math.min(1,i))):o.bottom<a&&(i=1),n&&(n.style.width=`${i*100}%`);const L=i*u;e&&(e.style.transform=`translateX(-${L}px)`)}function H(){requestAnimationFrame(w)}r=H,window.addEventListener(\"scroll\",r),w()}function d(){r&&(window.removeEventListener(\"scroll\",r),r=null),e&&(e.style.transform=\"translateX(0px)\"),n&&(n.style.width=\"0%\"),t&&(t.style.height=\"auto\")}function l(){window.innerWidth>=1024?g():d()}l(),window.addEventListener(\"resize\",l),window.addEventListener(\"beforeunload\",()=>{d(),window.removeEventListener(\"resize\",l)})});"],["C:/Users/GokulDS/Desktop/ssr/src/components/Header.astro?astro&type=script&index=0&lang.ts","const d=document.getElementById(\"menu-toggle\"),t=document.getElementById(\"mobile-menu\"),e=document.getElementById(\"hamburger-icon\"),n=document.getElementById(\"close-icon\");let i=!1;function s(){t&&(t.style.maxHeight=\"0px\"),i=!1,e&&e.classList.remove(\"hidden\"),n&&n.classList.add(\"hidden\")}d&&t&&(d.addEventListener(\"click\",()=>{i=!i,t.style.maxHeight=i?\"100vh\":\"0px\",i?(e&&e.classList.add(\"hidden\"),n&&n.classList.remove(\"hidden\")):(e&&e.classList.remove(\"hidden\"),n&&n.classList.add(\"hidden\"))}),window.addEventListener(\"resize\",()=>{window.innerWidth>=768&&s()}),t.querySelectorAll(\"a\").forEach(c=>{c.addEventListener(\"click\",s)}));"],["C:/Users/GokulDS/Desktop/ssr/src/components/HeroHome.astro?astro&type=script&index=0&lang.ts","function n(){const r=window.devicePixelRatio||1,e=document.querySelector(\".wrapper\");e&&(e.style.transform=`scale(${1/r})`)}window.addEventListener(\"resize\",n);n();"],["C:/Users/GokulDS/Desktop/ssr/src/components/TransformationMeans.astro?astro&type=script&index=0&lang.ts","let o=1,u=!1;async function x(t){if(o===t||u)return;u=!0;const c=document.getElementById(`content-${o}`),e=document.getElementById(`icon-${o}`),n=document.querySelector(`[data-accordion-id=\"${o}\"]`),a=n?.querySelector(\".accordion-number\"),r=n?.querySelector(\".accordion-title\");c&&(c.classList.remove(\"max-h-[1000px]\",\"opacity-100\"),c.classList.add(\"max-h-0\",\"opacity-0\")),e&&(e.textContent=\"+\",e.classList.remove(\"text-[#002166]\"),e.classList.add(\"text-gray-400\")),a&&(a.classList.remove(\"text-[#002166]\"),a.classList.add(\"text-gray-400\")),r&&(r.classList.remove(\"text-[#002166]\"),r.classList.add(\"text-gray-400\")),await new Promise(m=>setTimeout(m,300));const i=document.getElementById(`content-${t}`),s=document.getElementById(`icon-${t}`),y=document.querySelector(`[data-accordion-id=\"${t}\"]`),d=y?.querySelector(\".accordion-number\"),l=y?.querySelector(\".accordion-title\");i&&(i.classList.remove(\"max-h-0\",\"opacity-0\"),i.classList.add(\"max-h-[1000px]\",\"opacity-100\")),s&&(s.textContent=\"-\",s.classList.add(\"text-[#002166]\"),s.classList.remove(\"text-gray-400\")),d&&(d.classList.add(\"text-[#002166]\"),d.classList.remove(\"text-gray-400\")),l&&(l.classList.add(\"text-[#002166]\"),l.classList.remove(\"text-gray-400\")),o=t,await new Promise(m=>setTimeout(m,300)),u=!1}document.querySelectorAll(\"[data-accordion-id]\").forEach(t=>{t.addEventListener(\"click\",c=>{const e=c.currentTarget;if(!e)return;const n=Number(e.dataset.accordionId);x(n)})});"],["C:/Users/GokulDS/Desktop/ssr/src/components/DropdownHeaderLink.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.querySelectorAll(\"[data-dropdown]\");e.forEach(t=>{t.querySelector(\"button\")?.addEventListener(\"click\",n=>{n.stopPropagation();const o=t.getAttribute(\"data-open\")===\"true\";e.forEach(a=>a.setAttribute(\"data-open\",\"false\")),t.setAttribute(\"data-open\",(!o).toString())})}),document.addEventListener(\"click\",()=>{e.forEach(t=>{t.setAttribute(\"data-open\",\"false\")})})});"]],"assets":["/_astro/logo-mark.CP5sDqrP.svg","/_astro/step1-card1.COFrVCAk.jpg","/_astro/man_standing_in_coat.lFmqlDAb.png","/_astro/step1-card2.QA_RS4Gk.svg","/_astro/consulting-hero-v2.BIgEvcCK.jpg","/_astro/step2-img.C1k0lwH7.jpg","/_astro/step3-card3.CtbpibMd.jpg","/_astro/step1-card3.BCRo-g08.svg","/_astro/learning-img2-v2.DzT1Rj49.jpg","/_astro/step3-card2.C_zZtxbp.svg","/_astro/Step3-Card1.BKsYzSKv.svg","/_astro/learning-img-3-v2.D1Ln-iSu.jpg","/_astro/learning-img1-v2.CF0B_Pz9.jpg","/_astro/colloboration-v2.CuJYC0Be.png","/_astro/realisation-v2.9ldI4oFy.png","/_astro/students-brainstorming.Ho6VTx_Y.png","/_astro/hero_about-v2.yJXghCvY.png","/_astro/hero-2-v2.3CWRr420.png","/_astro/our-aim-v2.D98iHDf6.jpg","/_astro/logo.PFRkQ0EO.svg","/_astro/green-up-arrow.ldBpNA13.svg","/_astro/ads-click.7YY1EIjA.svg","/_astro/automation.2NcZ3BmA.svg","/_astro/downarrow.DeQ8vx3q.svg","/_astro/chat-bubble.CCkmpDGz.svg","/_astro/linkedin.WRNVf_BM.svg","/_astro/twitter.Drr7Mkrg.svg","/_astro/graduation-cap.CPKSGaSb.svg","/_astro/learning.Dvj2NN0n.svg","/_astro/user-roles.D85oxe8t.svg","/_astro/job-search.D41DP9dj.svg","/_astro/game.BGuVB66i.svg","/_astro/rocket.Cj2d6ZTz.svg","/_astro/manrope-cyrillic-400-normal.BMzJvInZ.woff2","/_astro/manrope-vietnamese-400-normal.DHb3EETF.woff2","/_astro/manrope-greek-400-normal.CM4qok81.woff2","/_astro/manrope-latin-ext-400-normal.CMDvPJRp.woff2","/_astro/manrope-latin-400-normal.PaqtzbVb.woff2","/_astro/infra.6UTNgPd8.svg","/_astro/board.DAd6IYBs.svg","/_astro/forum.opx7zc2Y.svg","/_astro/star.BqPqYx2C.svg","/_astro/ads_click2.CvOD6swn.svg","/_astro/HEROV2.DDquIlDW.png","/_astro/manrope-cyrillic-400-normal.Dvx59UGC.woff","/_astro/manrope-vietnamese-400-normal.D7E_mLGF.woff","/_astro/manrope-greek-400-normal.DuX9RsAR.woff","/_astro/manrope-latin-ext-400-normal.C-X6QNXX.woff","/_astro/manrope-latin-400-normal.8tf8FM3T.woff","/_astro/search_insights.Dvxe_O-_.svg","/_astro/menu.BtHAOGC4.svg","/_astro/mail.C38PowK8.svg","/_astro/tactic.De1RHqkj.svg","/_astro/close.B0cVAivf.svg","/_astro/check.aasTo8q5.svg","/_astro/call.B2dqhqyb.svg","/_astro/map.CPbj7ti4.svg","/_astro/chevron_right.CurORfNX.svg","/_astro/about.BQxhHEOQ.css","/_astro/index.BhgBMfBR.css","/favicon.svg","/_astro/client.BxCTEn3I.js","/_astro/consts.Dt-xfvea.js","/_astro/ContactForm.ClYxGtnX.js","/_astro/index.BJfUAbRs.js","/_astro/Layout.astro_astro_type_script_index_0_lang.kx0QUJzu.js","/_astro/ValueCreation.astro_astro_type_script_index_0_lang.DLvrrCe8.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"UanWMQW5oXPji0Qmr7O0coQhEygKu4ssAd0iRDaoZKQ=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\GokulDS\\Desktop\\ssr\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
