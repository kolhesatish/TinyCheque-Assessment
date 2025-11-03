import { b as createAstro, c as createComponent, d as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate } from './astro/server_B02zqu31.mjs';
import 'clsx';
/* empty css                         */
import { jsx, jsxs } from 'react/jsx-runtime';
import { ChakraProvider, defaultSystem, Box, Container, Flex, Link, Heading } from '@chakra-ui/react';

const $$Astro = createAstro("https://example.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description || "SEO Engine Blog", "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div id="chakra-blog-root" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/Users/SATISH KOLHE/OneDrive/Desktop/chakra/blog/src/layouts/Layout.astro", void 0);

function BlogChakraProvider({ children }) {
  return /* @__PURE__ */ jsx(ChakraProvider, { value: defaultSystem, children });
}

function BlogNavigation() {
  return /* @__PURE__ */ jsx(Box, { bg: "white", borderBottom: "1px", borderColor: "gray.200", py: 4, children: /* @__PURE__ */ jsx(Container, { maxW: "container.xl", children: /* @__PURE__ */ jsxs(Flex, { justify: "space-between", align: "center", children: [
    /* @__PURE__ */ jsx(Link, { href: "/", textDecoration: "none", _hover: { textDecoration: "none" }, children: /* @__PURE__ */ jsx(Heading, { size: "lg", color: "blue.600", children: "SEO Engine" }) }),
    /* @__PURE__ */ jsxs(Flex, { gap: 6, align: "center", children: [
      /* @__PURE__ */ jsx(Link, { href: "/blog", fontWeight: "medium", color: "gray.700", _hover: { color: "blue.600" }, children: "All Posts" }),
      /* @__PURE__ */ jsx(Link, { href: "/blog/categories", fontWeight: "medium", color: "gray.700", _hover: { color: "blue.600" }, children: "Categories" }),
      /* @__PURE__ */ jsx(Link, { href: "/", fontWeight: "medium", color: "gray.700", _hover: { color: "blue.600" }, children: "Back to Main Site" })
    ] })
  ] }) }) });
}

export { $$Layout as $, BlogChakraProvider as B, BlogNavigation as a };
