"use client";
import React, { useState, useMemo } from "react";

const resources = [
  {
    title: "Open source sans",
    category: "Fonts",
    type: " Sans Serif",
    image: "https://opengraph.githubassets.com/a3e0cc31816e63434e87118147b0b2e4db5c321464b7823cd94bf1e3f21b17e5/marcologous/Open-Sauce-Fonts",
    link: "https://fonts.adobe.com/fonts/source-sans"
  },
  {
    title: "Haurora",
    category: "Fonts",
    type: "Sans Serif",
    image: "https://uncut.wtf/assets/images/og_image.jpg",
    link: "https://fontsource.org/fonts/hauora-sans"
  },
  {
    title: "Google Fonts",
    category: "Fonts",
    type: "Font Library",
    image:"https://miro.medium.com/v2/resize:fit:1080/1*VBdvLLTy1CVJ3x-rhhkTCw.jpeg",
    link: "https://fonts.google.com/"
  },
  {
    title: "Guton",
    category: "Fonts",
    type: "Sans Serif",
    image: "https://i0.wp.com/freedesignresources.net/wp-content/uploads/2024/07/Guton-font_Yukita-Creative_240724_thumb.png?fit=600%2C402&ssl=1",
    link: "https://elements.envato.com/guton-sans-serif-DWNKWYX"
  },
  {
    title: "Geist Sans",
    category: "Fonts",
    type: "Font Library",
    image: "https://assets.vercel.com/image/upload/v1698089616/front/geist-font-page/og/Vercel_Geist_Typeface_OG.png",
    link: "https://vercel.com/font"
  },
  {
    title: "Dribbble",
    category: "Websites",
    type: "Design Community",
    image:
      "https://www.gobienan.com/_vercel/image?url=%2Fresources%2Fdribbble.png&w=1536&q=95",
      link: "https://dribbble.com/"
  },
  {
    title: "Behance",
    category: "Websites",
    type: "Creative Portfolio",
    image:
      "https://cdn.mos.cms.futurecdn.net/azUHp3WBrAGumLLiVu5KXf.jpg",
      link: "https://behance.com/"
  },
  {
    title: "Figma Community",
    category: "Websites",
    type: "Creative Web Designs  ",
    image: "https://cdn.prod.website-files.com/64760069e93084646c9ee428/64760069e93084646c9ef17e_6240bc67588ded22b348c052_Open-Graph-int%25C3%25A9grer-communaut%25C3%25A9-figma.png",
    link: "https://figma.com/community"
  },
  {
    title: "Site Inspire",
    category: "Websites",
    type: "Website Showcase",
    image: "https://miro.medium.com/v2/resize:fit:1200/1*K16E0qvbkeekeQMsJjOCVg.png",
    link:"https://www.siteinspire.com/"
  },
  {
    title: "Coolors",
    category: "Color Palettes",
    type: "Color Generator",
    image: "/coolor.png",
    link: "https://coolors.co/"
  },
  {
    title: "Color Hunt",
    category: "Color Palettes",
    type: "Color Gallery",
    image: "/hunt.png",
    link: "https://colorhunt.co/"
  },
  {
    title: "Adobe Color",
    category: "Color Palettes",
    type: "Color Tool",
    image: "/adobe.png",
    link: "https://color.adobe.com/"
  },
  {
    title: "ColorSpace",
    category: "Color Palettes",
    type: "Color Tool",
    image: "/colorspace.png",
    link: "https://mycolor.space/"
  },
  {
    title: "Flat UI Colors",
    category: "Color Palettes",
    type: "Color Resource",
    image: "/flatui.png",
    link:"https://flatuicolors.com/"
  },
  {
    title: "Material Design Color Tool",
    category: "Color Palettes",
    type: "Color Resource",
    image: "/mui.png",
    link: "https://materialui.co/colors"
  },
  {
    title: "FontAwesome",
    category: "Icons",
    type: "Icon Library",
    image: "https://www.figma.com/community/thumbnail?resource_id=1144676442624326325&resource_type=plugin",
    link: "https://fontawesome.com/"
  },
  {
    title: "Boxicons",
    category: "Icons",
    type: "Icon Set",
    image: "https://www.figma.com/community/thumbnail?resource_id=1149932444698301284&resource_type=plugin",
    link: "https://boxicons.com/"
  },
  {
    title: "Lucide React",
    category: "Icons",
    type: "Icon Set",
    image:
      "https://tutorend.com/_next/image?url=https%3A%2F%2Fwpbackendapi.tutorend.com%2Fwp-content%2Fuploads%2F2024%2F05%2Fimage-1024x522.png&w=3840&q=75",
      link: "https://lucide.dev/guide/packages/lucide-react"
  },
  {
    title: "Heroicons",
    category: "Icons",
    type: "Icon Set",
    image: "https://www.figma.com/community/thumbnail?resource_id=1146185727520661419&resource_type=plugin",
    link: "https://heroicons.com/"
  },
  {
    title: "Ionicons",
    category: "Icons",
    type: "Icon Set",
    image: "https://s3-alpha.figma.com/hub/file/1262676779/9512f5f8-fa26-463e-9277-4202ecbc77b0-cover.png",
    link: "https://ionic.io/ionicons"
  },
  {
    title: "Undraw",
    category: "Illustrations",
    type: "Illustration Library",
    image: "/ill3.png",
    link: "https://undraw.co/"
  },
  {
    title: "Humaaans",
    category: "Illustrations",
    type: "Illustration Library",
    image: "/ill4.png",
    link: "https://www.humaaans.com/"
  },
  {
    title: "Open Peeps",
    category: "Illustrations",
    type: "Illustration Library",
    image: "/ill.png",
    link: "https://www.openpeeps.com/"
  },
  {
    title: "Stubborn",
    category: "Illustrations",
    type: "Illustration Library",
    image: "/ill2.png",
    link: "https://stubborn.fun/"
  },
  {
    title: "Tailwind UI",
    category: "UI Kits",
    type: "Component Library",
    image: "/tailwind.png",
    link: "https://tailwindui.com/",
  },
  {
    title: "Ant Design",
    category: "UI Kits",
    type: "Component Library",
    image: "/ant.png",
    link: "https://ant.design/"
  },
  {
    title: "Next UI",
    category: "UI Kits",
    type: "Component Library",
    image: "/nextui.png",
    link: "https://nextui.org/"
  },
  {
    title: "Magic UI",
    category: "UI Kits",
    type: "Component Library",
    image: "/magic.png",
    link: "https://magicui.design/"
  },
  {
    title: "Acertenity UI",
    category: "UI Kits",
    type: "Component Library",
    image: "/acertenity.png",
    link: "https://ui.aceternity.com/"
  },
  {
    title: "Chakra UI",
    category: "UI Kits",
    type: "Component Library",
    image: "/chakra.png",
    link: "https://chakra-ui.com/"
  },
  {
    title: "Shadcn UI",
    category: "UI Kits",
    type: "Component Library",
    image: "/shadcn.png",
    link: "https://ui.shadcn.com/",

  },
  {
    title: "Radix",
    category: "UI Kits",
    type: "Component Library",
    image: "/radix.png",
        link: "https://www.radix-ui.com/"
  },
  {
    title: "GSAP (GreenSock Animation Platform)",
    category: "Animation Libraries",
    type: "Animation Library",
    image: "/gsap.png",
    link: "https://gsap.com/"
  },
  {
    title: "Anime.js",
    category: "Animation Libraries",
    type: "Animation Library",
    image: "/anime.png",
    link :"https://animejs.com/"
  },
  {
    title: "Framer Motion",
    category: "Animation Libraries",
    type: "Animation Library",
    image: "/framer.png",
    link: "https://www.framer.com/motion/"
  },
  {
    title: "AOS (Animate on Scroll)",
    category: "Animation Libraries",
    type: "Animation Library",
    image: "/aos.png",
    link: "https://michalsnik.github.io/aos/"
  },
  
  
  
];

const categories = [
  { name: "All", count: resources.length },
  {
    name: "Icons",
    count: resources.filter((r) => r.category === "Icons").length,
  },
  {
    name: "Websites",
    count: resources.filter((r) => r.category === "Websites").length,
  },
  {
    name: "Fonts",
    count: resources.filter((r) => r.category === "Fonts").length,
  },
  {
    name: "Animation Libraries",
    count: resources.filter((r) => r.category === "Animation Libraries").length,
  },
  {
    name: "UI Kits",
    count: resources.filter((r) => r.category === "UI Kits").length,
  },
  {
    name: "Color Palettes",
    count: resources.filter((r) => r.category === "Color Palettes").length,
  },
  {
    name: "Illustrations",
    count: resources.filter((r) => r.category === "Illustrations").length,
  },
];

export default function ResourceList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = useMemo(() => {
    return activeCategory === "All"
      ? resources
      : resources.filter((resource) => resource.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#F0EFEF] p-4 sm:p-6 md:p-8">
      <header className="mb-8 md:mb-12 text-center">
        <h1 className="mb-3 md:mb-4 text-4xl md:text-5xl font-bold text-gray-900">
          My <span className="text-blue-500
           text-sm">(not)</span> secret
          resource list
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Explore icon libraries, websites, and fonts I use to build my
          products!
        </p>
      </header>

      <nav className="mb-8 md:mb-12">
        <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((category) => (
            <li key={category.name}>
              <button
                className={`rounded-full px-6 py-3 text-md font-medium transition-all duration-300 ease-in-out ${
                  activeCategory === category.name
                    ? "border border-blue-500 text-black "
                    : "text-gray-700 hover:bg-black hover:text-white "
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}{" "}
                <span className="ml-1 text-xs">{category.count}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sm:w-full md:w-[900px] mx-auto hover:cursor-pointer">
        <div
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
            filteredResources.length < 3 ? "justify-center" : ""
          }`}
        >
          {filteredResources.map((resource) => (
            <div
              key={resource.title}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 ease-in-out hover:shadow-md w-full "
            >
              <div className="relative overflow-hidden h-64 flex-grow ">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="h-full w-full object-cover   "
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 ease-in-out "></div>
              </div>
              <div
                className="p-4 flex flex-col justify-between flex-shrink-0"
                style={{ height: "140px" }}
              >
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 line-clamp-1">
                    {resource.title}
                  </h3>
                  <p className="mb-2 text-sm text-gray-600">{resource.type}</p>
                </div>
                <button onClick={() => window.open(resource.link, "_blank")}
                 className="self-start rounded-full border border-[#4F46E5] px-4 py-2 text-lg text-[#4F46E5] font-medium  transition-all duration-300 ease-in-out hover:bg-[#4F46E5] hover:text-white hover:shadow-sm">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
