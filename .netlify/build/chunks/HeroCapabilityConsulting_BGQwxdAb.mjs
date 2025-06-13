import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_B0cD9c7h.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_9oR7zwhu.mjs';

const $$Astro = createAstro();
const $$HeroCapabilityConsulting = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroCapabilityConsulting;
  const { customStyles, content, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`relative h-max md:min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center md:justify-between gap-8 lg:gap-8 px-4 md:px-0 sm:pl-8 md:pl-16 lg:pl-32 xl:pl-44 2xl:pl-20 py-8 lg:py-12 pt-28`, "class")}> <!-- Text Content --> <div class="w-full lg:w-1/2 max-w-2xl flex flex-col gap-4 lg:gap-4 justify-center items-start text-left order-2 lg:order-1"> <h1 class="text-[#002166] text-4xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold leading-tight"> ${content} </h1> <div class="mt-2 lg:mt-4"> <a href="/contact-us"> <button class="bg-blue-600 cursor-pointer px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-full text-white text-sm sm:text-base lg:text-lg font-medium hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
Talk To An Expert
</button> </a> </div> </div> <div class="w-full lg:w-1/2 h-full md:p-0 order-1 lg:order-2"> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "Hero Image", "class": "w-full h-full object-cover rounded-2xl lg:rounded-l-2xl lg:rounded-r-none" })} </div> </section>`;
}, "C:/Users/GokulDS/Desktop/ssr/src/components/HeroCapabilityConsulting.astro", void 0);

export { $$HeroCapabilityConsulting as $ };
