import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

function Bento() {
  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto mc-10">
      <h2 className='text-center mt-20 md:mt-0 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-900'>My Projects Here</h2>
      <BentoGrid >
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

function ItemImage({ src, href }: { src: string; href: string }) {
  return (
    <Link
      target="_blank"
      href={href ?? ""}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden"
    >
      <Image
      className="h-full w-full object-cover"
      width={500}
      height = {500}
      src={src ?? ""}
      alt="project-img"
      />
    </Link>
  );

}

const items = [
  {
    title: "The Future of Technology",
    description: "Dive into emerging technologies shaping the future, from AI",
    header: <ItemImage src="/ai.webp" href = ""/>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: " The Human Connection",
    description: "Explore the power of collaboration in the digital era.",
    header: <ItemImage src="/colab.jpg" href = ""/>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Sustainability in Design",
    description: "Learn eco-friendly and sustainable approaches in modern development .",
    header: <ItemImage src="/modern.webp" href = ""/>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: " Immersive Experiences",
    description:
      "Experience the magic of AR, VR, and interactive media transforming user engagement.",
      header: <ItemImage src="/arvr.jpg" href = ""/>,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: " The Art of Minimalism",
    description: "Understand how simplicity in design can create powerful and intuitive user experiences.",
    header: <ItemImage src="/ux.jpg" href = ""/>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Empowering Innovations",
    description: "Discover projects and ideas that inspire change and elevate everyday life.",
    header: <ItemImage src="/innovativ.png" href = ""/>,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Creativity Unleashed",
    description: "Discover how innovation and design fuel creative solutions for real-world challenges.",
    header: <ItemImage src="/crevti.jpeg" href = ""/>,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export default Bento