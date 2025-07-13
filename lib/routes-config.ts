// for page navigation & to sort on leftbar
export const ROUTES = [
  {
    title: "Docs",
    href: "",
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Installation", href: "/installation" },
      { title: "Commands", href: "/commands" },
      { title: "Flags", href: "/flags" },
      { title: "mjau.yaml File Structure", href: "/mjau-yaml-file-structure" },
      { title: "Commands in mjau.yaml", href: "/commands-in-mjau-yaml" },
      { title: "Standard Variables", href: "/standard-variables" },
      { title: "Assertions", href: "/assertions" },
      { title: "Built-in Functions", href: "/built-in-functions" },
      { title: "Example mjau.yaml", href: "/example-mjau-yaml" },
    ],
  },
];

export const page_routes = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
