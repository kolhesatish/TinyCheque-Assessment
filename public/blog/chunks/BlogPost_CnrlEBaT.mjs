import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as renderSlot } from './astro/server_B02zqu31.mjs';
import { $ as $$Layout, B as BlogChakraProvider, a as BlogNavigation } from './BlogNavigation_DV8t-OxR.mjs';
import { $ as $$FormattedDate } from './FormattedDate_BNQSlGC1.mjs';
/* empty css                         */

const $$Astro = createAstro("https://example.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogChakraProvider", BlogChakraProvider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/SATISH KOLHE/OneDrive/Desktop/chakra/blog/src/components/ChakraProvider", "client:component-export": "BlogChakraProvider", "data-astro-cid-bvzihdzo": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BlogNavigation", BlogNavigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/SATISH KOLHE/OneDrive/Desktop/chakra/blog/src/components/BlogNavigation", "client:component-export": "BlogNavigation", "data-astro-cid-bvzihdzo": true })} ${maybeRenderHead()}<main class="blog-main" data-astro-cid-bvzihdzo> <article class="blog-article" data-astro-cid-bvzihdzo> <header class="blog-header" data-astro-cid-bvzihdzo> <h1 class="blog-title" data-astro-cid-bvzihdzo>${title}</h1> <div class="blog-date" data-astro-cid-bvzihdzo> ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<span class="blog-updated" data-astro-cid-bvzihdzo>
Last updated: ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </span>`} </div> </header> <div class="prose" data-astro-cid-bvzihdzo> ${renderSlot($$result3, $$slots["default"])} </div> </article> </main> ` })} ` })} `;
}, "C:/Users/SATISH KOLHE/OneDrive/Desktop/chakra/blog/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
