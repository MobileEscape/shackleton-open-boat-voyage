interface Asset {
  label: string;
  icon?: string;
  text?: string;
  link?: string;
  parts?: Asset[];
}

const contents: Asset[] = [
  {
    label: "Paint Brush",
    link: "/our-apologies?index=0",
  },
  {
    label: "Painter's Palette",
    link: "/our-apologies?index=1",
  },
  {
    label: "Sky Linocut",
    link: "/our-apologies?index=2",
  },
  {
    label: "Haakon Bay Map",
    link: "/our-apologies?index=3",
  },
  {
    label: "Charts",
    link: "/our-apologies?index=4",
  },
  {
    label: "Sexant Tool",
    link: "/our-apologies?index=5",
  },
  {
    label: "Newspaper ",
    link: "/our-apologies?index=6",
  },
  {
    label: "Rime of the Mariner",
    link: "/our-apologies?index=7",
  },
  {
    label: "Journal Pages x 6",
    link: "/our-apologies?index=8",
  },
  {
    label: "Flow Card",
    link: "/our-apologies?index=9",
  },
];

export { contents, type Asset };
