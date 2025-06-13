import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent, f as renderScript } from '../chunks/astro/server_B0cD9c7h.mjs';
import 'kleur/colors';
import { $ as $$HeroCapabilityConsulting } from '../chunks/HeroCapabilityConsulting_BGQwxdAb.mjs';
import { J as JOBSEARCH, U as USERROLES, o as ROCKET, I as INFRA, B as BOARD, p as STEP3_CARD1, q as STEP3_CARD2, r as STEP3_CARD3, $ as $$Layout, s as HERO_CAPABILITY_CONSULTING, t as STEP1_CARD1, u as STEP1_CARD2, v as STEP1_CARD3, G as GRADUATIONCAP, w as LEARNING, x as GAME, y as STEP2_IMG, g as CHATBUBBLE, h as ADSCLICK, i as AUTOMATION, j as LOGOMARK } from '../chunks/Layout_3xoq29x_.mjs';
import 'clsx';
import { $ as $$ContactUsMiniCards } from '../chunks/ContactUsMiniCards_BSwJc-Cw.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_9oR7zwhu.mjs';
/* empty css                                                        */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Step3Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Step3Card;
  const { number, title, content, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-5 bg-[#f6f9ff] border border-[#e0eaff] p-10 w-full h-full rounded-2xl md:h-[35rem] lg:h-[30rem]"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-full max-w-[16rem] md:max-w-[30rem] h-[50%]"> <div class="max-w-[16rem] md:max-w-[25rem] flex flex-col gap-2 h-[50%]"> <div class="flex gap-2"> <span class="text-[#1533ff] lg:text-4xl text-6xl font-bold">${number}</span> <p class="text-[#1533ff] text-2xl font-medium max-w-md">${title}</p> </div> <span class="text-md text-[#4C5967]">${content}</span> </div> </div>`;
}, "C:/Users/GokulDS/Desktop/ssr/src/components/Step3Card.astro", void 0);

const $$ValueCreation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="px-4 sm:px-4 md:px-16 lg:px-32 xl:px-44 bg-[#fffaed] py-8 md:py-32" data-astro-cid-3juhkqjy> <div class="flex flex-col gap-2 items-center justify-center" data-astro-cid-3juhkqjy> <span class="text-[#633a00] font-medium text-xl" data-astro-cid-3juhkqjy>Value Creation</span> <div class="flex flex-col items-center gap-2" data-astro-cid-3juhkqjy> <span class="text-[#633a00] text-2xl md:text-5xl font-semibold max-w-2xl text-center mb-6 md:m-0" data-astro-cid-3juhkqjy>
Driving Impact for
</span> <!-- Desktop Tab Navigation --> <div class="hidden md:block text-[#633a00] text-5xl font-semibold text-center tracking-wider" data-astro-cid-3juhkqjy> <button class="tab-button transition-colors duration-300 hover:opacity-80 cursor-pointer" data-tab="recruiters" data-astro-cid-3juhkqjy>
Recruiters
</button>,
<button class="tab-button transition-colors duration-300 hover:opacity-80 cursor-pointer" data-tab="students" data-astro-cid-3juhkqjy>
Students
</button> &
<button class="tab-button transition-colors duration-300 hover:opacity-80 cursor-pointer" data-tab="trainers" data-astro-cid-3juhkqjy>
Trainers
</button> </div> </div> </div> <!-- Desktop Cards Layout --> <div class="hidden md:flex items-center justify-center gap-10 p-10" data-astro-cid-3juhkqjy> <!-- Card 1 --> <div class="flex flex-col gap-4 max-w-[30rem] bg-[#ffeab4] p-7 rounded-2xl h-[22rem]" data-astro-cid-3juhkqjy> <div class="flex flex-col gap-4" data-astro-cid-3juhkqjy> ${renderComponent($$result, "Image", $$Image, { "id": "card1-icon", "src": JOBSEARCH, "alt": "Icon", "class": "w-10 h-10", "data-astro-cid-3juhkqjy": true })} <h3 id="card1-title" class="text-[#633a00] font-semibold text-2xl mb-2" data-astro-cid-3juhkqjy>
Consistent, Trend-Aligned Talent Supply Chain
</h3> </div> <div data-astro-cid-3juhkqjy> <p id="card1-description" class="text-md leading-relaxed text-[#79551c]" data-astro-cid-3juhkqjy>
We deliver skilled talent updated to industry trends, ensuring
          companies get reliable, job-ready professionals.
</p> </div> </div> <!-- Card 2 --> <div class="flex flex-col gap-4 max-w-[30rem] bg-[#ffeab4] p-7 rounded-2xl h-[22rem]" data-astro-cid-3juhkqjy> <div class="flex flex-col gap-4" data-astro-cid-3juhkqjy> ${renderComponent($$result, "Image", $$Image, { "id": "card2-icon", "src": USERROLES, "alt": "Icon", "class": "w-10 h-10", "data-astro-cid-3juhkqjy": true })} <h3 id="card2-title" class="text-[#633a00] font-semibold text-2xl mb-2" data-astro-cid-3juhkqjy>
Centralized Campus Recruitment for Diverse Roles
</h3> </div> <div data-astro-cid-3juhkqjy> <p id="card2-description" class="text-md leading-relaxed text-[#79551c]" data-astro-cid-3juhkqjy>
Our platform centralizes campus recruitment for diverse roles,
          streamlining hiring and helping companies find talent faster.
</p> </div> </div> </div> <!-- Mobile Accordion Layout --> <div class="md:hidden flex flex-col gap-4" data-astro-cid-3juhkqjy> <!-- Recruiters Accordion --> <div class="accordion-item rounded-2xl overflow-hidden" data-astro-cid-3juhkqjy> <button class="accordion-header w-full flex items-center justify-between text-left cursor-pointer" data-accordion="recruiters" data-astro-cid-3juhkqjy> <span class="text-[#633a00] text-2xl font-semibold" data-astro-cid-3juhkqjy>Recruiters</span> <div class="accordion-icon text-[#633a00] text-2xl transition-transform duration-300" data-astro-cid-3juhkqjy>
+
</div> </button> <div class="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out" data-astro-cid-3juhkqjy> <div class="space-y-6 pt-2" data-astro-cid-3juhkqjy> <!-- Card 1 Content --> <div class="flex flex-col gap-4 bg-[#ffeab4] p-4 rounded-2xl" data-astro-cid-3juhkqjy> <div class="flex flex-col gap-4" data-astro-cid-3juhkqjy> ${renderComponent($$result, "Image", $$Image, { "src": JOBSEARCH, "alt": "Icon", "class": "w-8 h-8", "data-astro-cid-3juhkqjy": true })} <h4 class="text-[#633a00] font-semibold text-lg" data-astro-cid-3juhkqjy>
Consistent, Trend-Aligned Talent Supply Chain
</h4> </div> <p class="text-sm leading-relaxed text-[#79551c]" data-astro-cid-3juhkqjy>
We deliver skilled talent updated to industry trends, ensuring
              companies get reliable, job-ready professionals.
</p> </div> <!-- Card 2 Content --> <div class="flex flex-col gap-4 bg-[#ffeab4] p-4 rounded-2xl" data-astro-cid-3juhkqjy> <div class="flex flex-col gap-4" data-astro-cid-3juhkqjy> ${renderComponent($$result, "Image", $$Image, { "src": USERROLES, "alt": "Icon", "class": "w-8 h-8", "data-astro-cid-3juhkqjy": true })} <h4 class="text-[#633a00] font-semibold text-lg" data-astro-cid-3juhkqjy>
Centralized Campus Recruitment for Diverse Roles
</h4> </div> <p class="text-sm leading-relaxed text-[#79551c]" data-astro-cid-3juhkqjy>
Our platform centralizes campus recruitment for diverse roles,
              streamlining hiring and helping companies find talent faster.
</p> </div> </div> </div> </div> <!-- Students Accordion --> <div class="accordion-item rounded-2xl overflow-hidden" data-astro-cid-3juhkqjy> <button class="accordion-header cursor-pointer w-full flex items-center justify-between text-left" data-accordion="students" data-astro-cid-3juhkqjy> <span class="text-[#633a00] text-2xl font-semibold" data-astro-cid-3juhkqjy>Students</span> <div class="accordion-icon text-[#633a00] text-2xl transition-transform duration-300" data-astro-cid-3juhkqjy>
+
</div> </button> <div class="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out" data-astro-cid-3juhkqjy> <div class="space-y-6 pt-2" data-astro-cid-3juhkqjy> <!-- Card 1 Content --> <div class="flex flex-col gap-4 bg-[#ffeab4] p-4 rounded-2xl" data-astro-cid-3juhkqjy> <div class="flex flex-col gap-4" data-astro-cid-3juhkqjy> ${renderComponent($$result, "Image", $$Image, { "src": ROCKET, "alt": "Icon", "class": "w-8 h-8", "data-astro-cid-3juhkqjy": true })} <h4 class="text-[#633a00] font-semibold text-lg" data-astro-cid-3juhkqjy>
Skill Development & Career Readiness
</h4> </div> <p class="text-sm leading-relaxed text-[#79551c]" data-astro-cid-3juhkqjy>
Comprehensive training programs that bridge the gap between
              academic learning and industry requirements, preparing students
              for successful careers.
</p> </div> <!-- Card 2 Content --> <div class="flex flex-col gap-4 bg-[#ffeab4] p-4 rounded-2xl" data-astro-cid-3juhkqjy> <div class="flex flex-col gap-4" data-astro-cid-3juhkqjy> ${renderComponent($$result, "Image", $$Image, { "src": INFRA, "alt": "Icon", "class": "w-8 h-8", "data-astro-cid-3juhkqjy": true })} <h4 class="text-[#633a00] font-semibold text-lg" data-astro-cid-3juhkqjy>
Direct Industry Connections
</h4> </div> <p class="text-sm leading-relaxed text-[#79551c]" data-astro-cid-3juhkqjy>
Connect directly with top employers and get access to exclusive
              job opportunities tailored to your skills and career aspirations.
</p> </div> </div> </div> </div> <!-- Trainers Accordion --> <div class="accordion-item rounded-2xl overflow-hidden" data-astro-cid-3juhkqjy> <button class="accordion-header cursor-pointer w-full flex items-center justify-between text-left" data-accordion="trainers" data-astro-cid-3juhkqjy> <span class="text-[#633a00] text-2xl font-semibold" data-astro-cid-3juhkqjy>Trainers</span> <div class="accordion-icon text-[#633a00] text-2xl transition-transform duration-300" data-astro-cid-3juhkqjy>
+
</div> </button> <div class="accordion-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out" data-astro-cid-3juhkqjy> <div class="space-y-6 pt-2" data-astro-cid-3juhkqjy> <!-- Card 1 Content --> <div class="flex flex-col gap-4 bg-[#ffeab4] p-4 rounded-2xl" data-astro-cid-3juhkqjy> <div class="flex flex-col gap-4" data-astro-cid-3juhkqjy> ${renderComponent($$result, "Image", $$Image, { "src": BOARD, "alt": "Icon", "class": "w-8 h-8", "data-astro-cid-3juhkqjy": true })} <h4 class="text-[#633a00] font-semibold text-lg" data-astro-cid-3juhkqjy>
Advanced Training Resources & Tools
</h4> </div> <p class="text-sm leading-relaxed text-[#79551c]" data-astro-cid-3juhkqjy>
Access cutting-edge training materials, assessment tools, and
              curriculum designed to deliver industry-relevant education.
</p> </div> <!-- Card 2 Content --> <div class="flex flex-col gap-4 bg-[#ffeab4] p-4 rounded-2xl h-max" data-astro-cid-3juhkqjy> <div class="flex flex-col gap-4" data-astro-cid-3juhkqjy> ${renderComponent($$result, "Image", $$Image, { "src": INFRA, "alt": "Icon", "class": "w-8 h-8", "data-astro-cid-3juhkqjy": true })} <h4 class="text-[#633a00] font-semibold text-lg" data-astro-cid-3juhkqjy>
Performance Analytics & Insights
</h4> </div> <p class="text-sm leading-relaxed text-[#79551c]" data-astro-cid-3juhkqjy>
Track student progress with detailed analytics and insights to
              optimize training effectiveness and outcomes.
</p> </div> </div> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/GokulDS/Desktop/ssr/src/components/ValueCreation.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/GokulDS/Desktop/ssr/src/components/ValueCreation.astro", void 0);

const $$LearningExperiencePlatform = createComponent(($$result, $$props, $$slots) => {
  const step3CardContents = [
    {
      title: "Connecting Students with SDV Internships",
      content: "We connect skilled students with real-world SDV internships, giving them early industry experience. This helps companies find fresh talent that meets their evolving internship needs in software-defined vehicle engineering.",
      image: STEP3_CARD1.src
    },
    {
      title: "Comprehensive Profiles Showcasing Verified Skills",
      content: "We connect skilled students with real-world SDV internships, giving them early industry experience. This helps companies find fresh talent that meets their evolving internship needs in software-defined vehicle engineering.",
      image: STEP3_CARD2.src
    },
    {
      title: "Helping Recruiters Find the Perfect Student Match",
      content: "We connect skilled students with real-world SDV internships, giving them early industry experience. This helps companies find fresh talent that meets their evolving internship needs in software-defined vehicle engineering.",
      image: STEP3_CARD3.src
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-jvmmcmcs": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroCapabilityConsulting", $$HeroCapabilityConsulting, { "content": "Building SDV-Ready Talent from Academia for a Secure Future", "image": HERO_CAPABILITY_CONSULTING, "data-astro-cid-jvmmcmcs": true })} ${maybeRenderHead()}<section class="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 bg-white mb-24 lg:mb-36" data-astro-cid-jvmmcmcs> <div class="flex flex-col gap-4" data-astro-cid-jvmmcmcs> <span class="text-blue-600 text-base sm:text-lg md:text-xl font-medium" data-astro-cid-jvmmcmcs>
What We Offer
</span> <span class="text-[#002166] text-5xl sm:text-5xl md:text-2xl lg:text-4xl xl:text-6xl font-semibold max-w-6xl text-left" data-astro-cid-jvmmcmcs>
An Integrated platform that transforms academic talent into an
        industry-ready workforce in just
<span class="text-blue-600" data-astro-cid-jvmmcmcs>3 simple steps.</span> </span> </div> </section> <section class="h-full px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[14rem] bg-white mb-16" data-astro-cid-jvmmcmcs> <!-- Sticky Title Block --> <div class="relative" data-astro-cid-jvmmcmcs> <div class="sticky top-[5rem] bg-white z-20 py-0 pt-2 md:py-4 px-1 mb-8" data-astro-cid-jvmmcmcs> <span class="text-blue-600 text-xl" data-astro-cid-jvmmcmcs>Step 1</span> <h2 class="text-[#002166] text-2xl sm:text-xl md:text-5xl font-semibold max-w-5xl" data-astro-cid-jvmmcmcs>
Pre-Learning Experience for Industry Readiness
</h2> </div> <div class="sticky top-[10rem] space-y-[2rem]" data-astro-cid-jvmmcmcs> <!-- CARD 1 --> <div class="bg-[#1A49AD] w-full rounded-2xl p-6 md:p-8 md:flex justify-between gap-8 sticky min-h-[30rem] md:min-h-max top-[13rem] md:top-[15rem] z-[1] overflow-hidden" data-astro-cid-jvmmcmcs> <!-- Left Text Block --> <div class="max-w-2xl z-10 flex flex-col justify-start p-0 md:p-8" data-astro-cid-jvmmcmcs> <h3 class="text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-semibold text-white max-w-[23rem] mb-4" data-astro-cid-jvmmcmcs>
Pre learning workflow to set the context
</h3> <p class="mt-2 text-white text-md sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-lg max-w-[27rem] leading-relaxed" data-astro-cid-jvmmcmcs>
Our pre-learning workflow introduces students to the Software
              Defined Vehicle (SDV) industry, highlighting key skills and
              expectations. This early insight boosts engagement and helps
              bridge the gap between academics and real-world industry needs.
</p> </div> <!-- Right Image Section --> <div class="relative w-full md:w-[50%] flex justify-end items-center mt-6 md:mt-0" data-astro-cid-jvmmcmcs> <div class="w-full max-w-[45rem] aspect-video" data-astro-cid-jvmmcmcs> ${renderComponent($$result2, "Image", $$Image, { "src": STEP1_CARD1, "alt": "Workflow UI Preview", "class": "w-full h-full object-cover", "data-astro-cid-jvmmcmcs": true })} </div> </div> </div> <!-- CARD 2 --> <div class="bg-[#1563FF] w-full rounded-2xl p-6 md:p-8 md:flex justify-between gap-8 sticky min-h-[30rem] md:min-h-max top-[15rem] md:top-[17rem] z-[2] overflow-hidden" data-astro-cid-jvmmcmcs> <div class="max-w-2xl z-10 flex flex-col justify-start p-0 md:p-8" data-astro-cid-jvmmcmcs> <h3 class="text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-semibold text-white max-w-[23rem] mb-4" data-astro-cid-jvmmcmcs>
Data-Driven Insights on SDV Roles & Skills
</h3> <p class="mt-2 text-white text-md sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-lg max-w-[27rem] leading-relaxed" data-astro-cid-jvmmcmcs>
We provide clear, data-backed insights into in-demand roles and
              skills in Software Defined Vehicle (SDV) product engineering. This
              helps students focus on the most valuable technical and soft
              skills for future-ready careers.
</p> </div> <div class="relative w-full md:w-[50%] flex justify-end items-center mt-6 md:mt-0" data-astro-cid-jvmmcmcs> <div class="w-full max-w-[45rem] aspect-video" data-astro-cid-jvmmcmcs> ${renderComponent($$result2, "Image", $$Image, { "src": STEP1_CARD2, "alt": "Card 2 Image", "class": "w-full h-full object-cover", "data-astro-cid-jvmmcmcs": true })} </div> </div> </div> <!-- CARD 3 --> <div class="bg-[#013399] w-full rounded-2xl p-6 md:p-8 md:flex justify-between gap-8 sticky min-h-[30rem] md:min-h-max top-[17rem] md:top-[19rem] z-[3] overflow-hidden" data-astro-cid-jvmmcmcs> <div class="max-w-2xl z-10 flex flex-col justify-start p-0 md:p-8" data-astro-cid-jvmmcmcs> <h3 class="text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-semibold text-white max-w-[23rem] mb-4" data-astro-cid-jvmmcmcs>
Empowering Smart SDV Career Choices
</h3> <p class="mt-2 text-white text-md sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-lg max-w-[27rem] leading-relaxed" data-astro-cid-jvmmcmcs>
We use data-driven insights to help students choose the right
              Software Defined Vehicle (SDV) career paths with confidence.
</p> </div> <div class="relative w-full md:w-[50%] flex justify-end items-center mt-6 md:mt-0" data-astro-cid-jvmmcmcs> <div class="w-full max-w-[45rem] aspect-video" data-astro-cid-jvmmcmcs> ${renderComponent($$result2, "Image", $$Image, { "src": STEP1_CARD3, "alt": "Card 3 Image", "class": "w-full h-full object-cover", "data-astro-cid-jvmmcmcs": true })} </div> </div> </div> <div class="w-full sticky min-h-[5rem] top-[19rem] z-[1] overflow-hidden" data-astro-cid-jvmmcmcs></div> </div> </div> </section> <section class="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 bg-[#f6f9ff] py-12 h-full mb-24" data-astro-cid-jvmmcmcs> <div class="flex flex-col gap-2 mb-6" data-astro-cid-jvmmcmcs> <span class="text-blue-600 text-xl" data-astro-cid-jvmmcmcs>Step 2</span> <h2 class="text-[#002166] text-2xl sm:text-xl md:text-5xl font-semibold max-w-5xl mb-6" data-astro-cid-jvmmcmcs>
Blended Co-Curricular Learning
</h2> </div> <!-- Begin Sticky Scroll Section --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 relative" data-astro-cid-jvmmcmcs> <!-- Left Content --> <div class="flex flex-col gap-12 text-[#1563FF] max-w-md" data-astro-cid-jvmmcmcs> <!-- Card 1 --> <div class="flex flex-col gap-4" data-astro-cid-jvmmcmcs> <div class="flex flex-col" data-astro-cid-jvmmcmcs> ${renderComponent($$result2, "Image", $$Image, { "src": GRADUATIONCAP, "alt": "Graduation Cap", "class": "w-8 h-8", "data-astro-cid-jvmmcmcs": true })} <h3 class="text-[#1563FF] font-semibold text-2xl mb-2" data-astro-cid-jvmmcmcs>
Role-Based Co-Curricular Learning Journeys
</h3> </div> <div data-astro-cid-jvmmcmcs> <p class="text-md leading-relaxed text-[#4c5967]" data-astro-cid-jvmmcmcs>
Our role-based learning journeys offer targeted co-curricular
              content and projects designed to build the exact skills needed for
              high-demand SDV product engineering roles. This helps students
              smoothly transition into and succeed in industry careers.
</p> </div> </div> <!-- Card 2 --> <div class="flex flex-col gap-4" data-astro-cid-jvmmcmcs> <div class="flex flex-col" data-astro-cid-jvmmcmcs> ${renderComponent($$result2, "Image", $$Image, { "src": LEARNING, "alt": "Graduation Cap", "class": "w-8 h-8", "data-astro-cid-jvmmcmcs": true })} <h3 class="text-[#1563FF] font-semibold text-2xl mb-2" data-astro-cid-jvmmcmcs>
Flexible Learning Aligned with Academics
</h3> </div> <div data-astro-cid-jvmmcmcs> <p class="text-md leading-relaxed text-[#4c5967]" data-astro-cid-jvmmcmcs>
Our flexible co-curricular learning fits alongside your academic
              schedule, letting you build industry skills at your own pace
              without stress. This helps you gain practical experience while
              keeping up with your studies.
</p> </div> </div> <!-- Card 3 --> <div class="flex flex-col gap-4" data-astro-cid-jvmmcmcs> <div class="flex flex-col" data-astro-cid-jvmmcmcs> ${renderComponent($$result2, "Image", $$Image, { "src": GAME, "alt": "Graduation Cap", "class": "w-8 h-8", "data-astro-cid-jvmmcmcs": true })} <h3 class="text-[#1563FF] font-semibold text-2xl mb-2" data-astro-cid-jvmmcmcs>
Personalized & Gamified Learning with Integrated Virtual Labs
</h3> </div> <div data-astro-cid-jvmmcmcs> <p class="text-md leading-relaxed text-[#4c5967]" data-astro-cid-jvmmcmcs>
Our personalized, gamified learning keeps students motivated while
              they master advanced tools through virtual labs. This hands-on
              approach builds confidence and skills for real-world SDV industry
              challenges.
</p> </div> </div> </div> <!-- Right Sticky Image --> <div class="relative h-full" data-astro-cid-jvmmcmcs> <div class="sticky top-[9rem]" data-astro-cid-jvmmcmcs> <!-- Adjust top as needed to sit under header --> ${renderComponent($$result2, "Image", $$Image, { "src": STEP2_IMG, "alt": "Blended Learning Preview", "class": "w-full max-w-xl", "data-astro-cid-jvmmcmcs": true })} </div> </div> </div> </section> <section id="horizontal-scroll-section" class="relative bg-white mb-16" style="height: 100vh;" data-astro-cid-jvmmcmcs> <!-- Sticky container --> <div class="sticky top-[7rem] xl:top-[15rem] overflow-hidden" data-astro-cid-jvmmcmcs> <!-- Horizontal scrolling wrapper --> <div id="horizontal-wrapper" class="flex flex-col lg:flex-row h-full transition-transform duration-75 ease-out" style="width: 100vw; transform: translateX(0px);" data-astro-cid-jvmmcmcs> <!-- Header --> <div class="flex items-start justify-start px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 flex-shrink-0 mb-8" data-astro-cid-jvmmcmcs> <div class="max-w-2xl" data-astro-cid-jvmmcmcs> <span class="text-blue-600 text-lg font-medium" data-astro-cid-jvmmcmcs>Step 3</span> <h2 class="text-[#002166] text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 leading-tight" data-astro-cid-jvmmcmcs>
Connecting SDV ready talent with Internship demands
</h2> </div> </div> <!-- Cards --> <div id="cards-container" class="flex flex-col lg:flex-row items-center gap-6 pl-6 pr-6 flex-shrink-0" style="width: auto;" data-astro-cid-jvmmcmcs> ${step3CardContents.map((card, index) => renderTemplate`<div class="min-w-[350px] flex-shrink-0" data-astro-cid-jvmmcmcs> ${renderComponent($$result2, "Step3Card", $$Step3Card, { "key": index, "number": index + 1, "title": card.title, "content": card.content, "image": card.image, "data-astro-cid-jvmmcmcs": true })} </div>`)} </div> </div> <!-- Progress bar for large screens --> <div class="hidden lg:block relative bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-2 mt-32 bg-gray-200 rounded-full" data-astro-cid-jvmmcmcs> <div id="progress-bar" class="h-full bg-blue-600 rounded-full transition-all duration-75 ease-out" style="width: 0%;" data-astro-cid-jvmmcmcs></div> </div> </div> </section> ${renderComponent($$result2, "ValueCreation", $$ValueCreation, { "data-astro-cid-jvmmcmcs": true })} <section class="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 py-16 md:py-24 space-y-16" data-astro-cid-jvmmcmcs> <!-- Title --> <div class="text-center mb-8" data-astro-cid-jvmmcmcs> <span class="text-blue-600 font-medium block text-base sm:text-lg" data-astro-cid-jvmmcmcs>
How to Contact Us
</span> <h2 class="text-[#002166] text-3xl sm:text-4xl md:text-5xl font-bold mt-2" data-astro-cid-jvmmcmcs>
Your Path to Success is Set
</h2> </div> <!-- Mini Cards --> <div class="flex flex-col sm:flex-row justify-between gap-6 mb-6" data-astro-cid-jvmmcmcs> ${renderComponent($$result2, "ContactUsMiniCards", $$ContactUsMiniCards, { "icon": CHATBUBBLE, "content": "Contact us via contact form", "data-astro-cid-jvmmcmcs": true })} ${renderComponent($$result2, "ContactUsMiniCards", $$ContactUsMiniCards, { "icon": ADSCLICK, "content": "Define your needs", "data-astro-cid-jvmmcmcs": true })} ${renderComponent($$result2, "ContactUsMiniCards", $$ContactUsMiniCards, { "icon": AUTOMATION, "content": "Implement the solution", "data-astro-cid-jvmmcmcs": true })} </div> <!-- CTA Box --> <div class="relative bg-blue-600 rounded-2xl text-white px-6 sm:px-12 md:px-14 py-12 sm:py-20 overflow-hidden" data-astro-cid-jvmmcmcs> <div class="flex flex-col gap-4 relative z-10 max-w-xl" data-astro-cid-jvmmcmcs> <span class="text-2xl sm:text-3xl md:text-4xl font-semibold" data-astro-cid-jvmmcmcs>
Get in touch with our experts
</span> <span class="text-sm sm:text-base md:text-lg font-light text-[#dce7ff]" data-astro-cid-jvmmcmcs>
We can guide you to find the right solution for your needs
</span> <a href="/contact-us" data-astro-cid-jvmmcmcs> <button class="bg-white text-blue-600 w-fit px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition cursor-pointer" data-astro-cid-jvmmcmcs>
Talk To An Expert
</button> </a> </div> <!-- Background Logo --> ${renderComponent($$result2, "Image", $$Image, { "src": LOGOMARK, "alt": "Logo Mark", "class": "absolute top-0 right-0 w-1/2 h-full opacity-90 mix-blend-overlay pointer-events-none object-cover", "data-astro-cid-jvmmcmcs": true })} </div> </section> ${renderScript($$result2, "C:/Users/GokulDS/Desktop/ssr/src/pages/learning-experience-platform.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "C:/Users/GokulDS/Desktop/ssr/src/pages/learning-experience-platform.astro", void 0);

const $$file = "C:/Users/GokulDS/Desktop/ssr/src/pages/learning-experience-platform.astro";
const $$url = "/learning-experience-platform";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LearningExperiencePlatform,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
