import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_B0cD9c7h.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_9oR7zwhu.mjs';

const $$Astro = createAstro();
const $$ContactUsMiniCards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactUsMiniCards;
  const { icon, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#f6f9ff] rounded-2xl w-full flex flex-col justify-end gap-6 p-6 h-56"> ${renderComponent($$result, "Image", $$Image, { "src": icon, "alt": "Automation", "class": "w-10 h-10" })} <p class="text-xl sm:text-xl lg:text-3xl max-w-48 font-semibold text-[#002166]"> ${content} </p> </div>`;
}, "C:/Users/GokulDS/Desktop/ssr/src/components/ContactUsMiniCards.astro", void 0);

export { $$ContactUsMiniCards as $ };
