interface Asset {
  label: string;
  icon?: string;
  text?: string;
  link?: string;
  parts?: Asset[];
}

const contents: Asset[] = [
  {
    label: "Haakon Bay Map",
    link: "/our-apologies?index=0",
  },
  {
    label: "Paint Brush",
    link: "/our-apologies?index=1",
  },
  {
    label: "Painter's Palette",
    link: "/our-apologies?index=2",
  },
  {
    label: "Sighting Table",
    link: "/our-apologies?index=3",
  },
  {
    label: "Incremens Chart",
    link: "/our-apologies?index=4",
  },
  {
    label: "Journal Pages x 5",
    link: "/our-apologies?index=5",
  },
  {
    label: "Sexant Tool",
    link: "/our-apologies?index=6",
  },
  {
    label: "Wuzzle Puzzle",
    link: "/our-apologies?index=7",
  },
  {
    label: "Sky Linocut",
    link: "/our-apologies?index=8",
  },
  {
    label: "Newspaper Clipping",
    link: "/our-apologies?index=9",
  },
  {
    label: "Rime of the Ancient Mariner",
    link: "/our-apologies?index=10",
  },
  {
    label: "Flow Card",
    link: "/our-apologies?index=11",
  },
];

export { contents, type Asset };
