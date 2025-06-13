import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_B0cD9c7h.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_9oR7zwhu.mjs';
import { H as HERO_ABOUT, $ as $$Layout, R as REALISATION, O as OUR_AIM, a as OUROFFERINGS1, b as OUROFFERINGS2 } from '../chunks/Layout_3xoq29x_.mjs';
export { renderers } from '../renderers.mjs';

const $$HeroAbout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[35rem] pt-20 mb-14 md:mb-24"> ${renderComponent($$result, "Image", $$Image, { "src": HERO_ABOUT, "alt": "Hero Image", "class": "w-full h-full object-cover [object-position:10%_38%]" })} <div class="absolute inset-0 bg-[#002166] opacity-60"></div> <div class="absolute inset-0 z-10 flex flex-col justify-center items-center text-center pt-16"> <div class="md:wrapper"> <span class="text-5xl text-white font-semibold">About Us</span> </div> </div> </section>`;
}, "C:/Users/GokulDS/Desktop/ssr/src/components/HeroAbout.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroAbout", $$HeroAbout, {})} ${maybeRenderHead()}<section class="px-4 sm:px-8 md:px-16 lg:px-44 xl:px-56 bg-white mb-14 lg:mb-24"> <p class="text-[#002166] text-5xl md:text-6xl font-semibold">
Our goal is to <span class="text-[#1563ff]">prepare</span> your organization
      for the <span class="text-[#1563ff]">future of mobility</span>
with the right technology, talent, and strategies for <span class="text-[#1563ff]">lasting success</span> </p> </section> <section class="px-4 sm:px-8 md:px-16 lg:px-44 xl:px-56 bg-white mb-14 lg:mb-24"> <div class="flex flex-col md:flex-row gap-12 items-center"> <div class="w-full md:w-1/2"> ${renderComponent($$result2, "Image", $$Image, { "src": REALISATION, "alt": "Realisation Image", "class": "w-full h-full object-cover rounded-2xl" })} </div> <div class="w-full md:w-1/2 flex flex-col gap-4"> <span class="text-[#002166] text-2xl md:text-4xl font-semibold">
Our Realisation
</span> <div class="space-y-4 text-[#4C5967] font-thin text-xl"> <p>
At CreamCollar, we understand that the path toward becoming a
            data-driven, cloud-powered, and AI-integrated automotive company
            involves overcoming several challenges.
</p> <p>
Companies must adopt agile practices, reskill their workforce, and
            align new talent with the changing landscape. It’s not just about
            technology, it’s about people, processes, and culture.
</p> </div> </div> </div> </section> <section class="px-4 sm:px-8 md:px-16 lg:px-44 xl:px-56 bg-white md:bg-white mb-14 py-10 md:py-0 lg:mb-24"> <div class="flex flex-col items-center justify-center md:items-start md:justify-baseline gap-2 mb-6"> <span class="text-blue-600 text-xl">Our Aim</span> <h2 class="text-[#002166] text-3xl sm:text-3xl md:text-5xl font-semibold max-w-2xl mb-6 text-center md:text-left">
Innovating for a smarter tomorrow.
</h2> </div> <!-- Begin Sticky Scroll Section --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 relative"> <!-- Right Sticky Image (first on mobile) --> <div class="relative h-full order-1 lg:order-2"> <div class="sticky top-[9rem]"> ${renderComponent($$result2, "Image", $$Image, { "src": OUR_AIM, "alt": "Blended Learning Preview", "class": "w-full max-w-xl rounded-2xl" })} </div> </div> <!-- Left Content (second on mobile) --> <div class="flex flex-col gap-12 max-w-md order-2 lg:order-1"> <!-- Card 1 --> <div class="flex flex-col gap-4 max-w-sm"> <div class="flex flex-col"> <h3 class="text-[#002166] font-semibold text-2xl mb-2">
Empowering Organisations to Evolve
</h3> </div> <div> <p class="text-md leading-relaxed text-[#4c5967]">
With decades of consulting experience, we understand the
              complexities of your SDV transformation. We craft tailored
              strategies to help you overcome these challenges with precision,
              ensuring you stay on track every step of the way.
</p> </div> </div> <!-- Card 2 --> <div class="flex flex-col gap-4"> <div class="flex flex-col"> <h3 class="text-[#002166] font-semibold text-2xl mb-2">
Building the Workforce of Tomorrow
</h3> </div> <div> <p class="text-md leading-relaxed text-[#4c5967]">
To give companies access to a pipeline of industry-ready,
              role-specific talent. We ensure your teams are equipped to handle
              the challenges and opportunities SDVs and AI present.
</p> </div> </div> <!-- Card 3 --> <div class="flex flex-col gap-4"> <div class="flex flex-col"> <h3 class="text-[#002166] font-semibold text-2xl mb-2">
Simplifying Talent Access
</h3> </div> <div> <p class="text-md leading-relaxed text-[#4c5967]">
To provide you with pre-vetted, SDV-ready talent so you can
              quickly find the right people for your projects, whether it’s for
              internships or full-time roles.
</p> </div> </div> </div> </div> </section> <section class="px-4 sm:px-8 md:px-16 lg:px-44 xl:px-56 bg-[#f6f9ff] py-10"> <div class="text-center mb-8"> <span class="text-blue-600 font-medium block text-xl md:text-2xl sm:text-">Our Offerings</span> <h2 class="text-[#002166] text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
A holistic solution for your SDV needs
</h2> </div> <div class="flex flex-col md:flex-row gap-10"> <!-- Card 1 --> <div class="flex flex-col bg-white w-full md:w-3xl rounded-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": OUROFFERINGS1, "alt": "Blended Learning Preview", "class": "w-full h-[30rem] object-cover rounded-t-2xl [object-position:10%_30%]" })} <div class="flex flex-col justify-between flex-grow p-10 gap-6 min-h-[25rem]"> <div class="flex flex-col gap-6"> <span class="text-[#002166] text-lg md:text-3xl font-medium">
Capability Consulting
</span> <span class="text-md md:text-xl max-w-md text-[#4C5967]">
We help you build the right teams, restructure for success, and
              accelerate your journey forward. With our expertise, we'll guide
              you through product and security compliance, as well as supplier
              engagement and partnerships, ensuring a smooth and efficient
              transition.
</span> </div> <a href="/capability-consulting" class="mt-auto"> <button class="bg-blue-600 text-white px-4 py-2 rounded-full w-32 cursor-pointer">
Learn More
</button> </a> </div> </div> <!-- Card 2 --> <div class="flex flex-col bg-white w-full md:w-3xl rounded-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": OUROFFERINGS2, "alt": "Blended Learning Preview", "class": "w-full h-[30rem] object-cover rounded-t-2xl [object-position:10%_30%]" })} <div class="flex flex-col justify-between flex-grow p-10 gap-6 min-h-[25rem]"> <div class="flex flex-col gap-6"> <span class="text-[#002166] text-lg md:text-3xl font-medium">
Learning Experience Platform
</span> <span class="text-md md:text-xl max-w-md text-[#4C5967]">
Cultivating your next generation of SDV professionals, directly
              from Academia. through collaboration with a diverse ecosystem of
              expert trainers and industry experts.
</span> </div> <a href="/learning-experience-platform" class="mt-auto"> <button class="bg-blue-600 text-white px-4 py-2 rounded-full w-32 cursor-pointer">
Learn More
</button> </a> </div> </div> </div> </section> ` })}`;
}, "C:/Users/GokulDS/Desktop/ssr/src/pages/about.astro", void 0);

const $$file = "C:/Users/GokulDS/Desktop/ssr/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
