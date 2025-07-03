import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

export default function PortfolioGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-blueish/50 via-muted/20 to-background ">
        <AppleCardsCarousel/>
    </section>
  )
}


export function AppleCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full text-center">
      <h2 className="max-w-7xl mx-auto text-4xl sm:text-5xl md:text-7xl  font-bold text-neutral-800 text-center font-anton">
        OUR WORK
      </h2>
      <p className="mt-4 text-lg text-muted-foreground text-center">
            A showcase of our minimalist designs and creative solutions.
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height={300}
              width={300}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};



const data = [
  {
    category: "Branding",
    title: "McDonald’s Brand Ambassador Community",
    src: "/work/mcd.webp",
    content: (
      <>
        <p>
          Scaled brand ambassador programs for McDonald’s across major metros, with creator-led community content boosting reach and engagement for national drops.
        </p>
      </>
    ),
  },
  {
    category: "Digital Strategy",
    title: "KFC Digital Funnel & Storytelling",
    src: "/work/kfc.webp",
    content: (
      <>
        <p>
          Revamped KFC’s digital messaging for targeted food delivery platforms, boosting CTR and conversions via creator storytelling.
        </p>
      </>
    ),
  },
  {
    category: "Activation",
    title: "Carmate Auto Expo Launch",
    src: "/work/carmate.webp",
    content: (
      <>
        <p>
          Developed creator-led buzz and content series for Carmate’s booth at the National Auto Expo, improving test-drive bookings by 3x.
        </p>
      </>
    ),
  },
  {
    category: "UGC Campaign",
    title: "Bombay Shaving Company Creator Push",
    src: "/work/bombay_shaving_company.webp",
    content: <DummyContent/>
  },
  {
    category: "Influencer Marketing",
    title: "SWATI Cosmetics Expo Activation",
    src: "/work/lenses.webp",
    content: (
      <>
        <p>
          Activated influencers during major beauty expos to increase product trials and in-store footfall for SWATI’s Nordic line.
        </p>
      </>
    ),
  },
  {
    category: "Nightlife & Hospitality",
    title: "Romeo Lane Life Style Content",
    src: "/work/bar.webp",
    content: (
      <>
        <p>
          Collaborated with nightlife influencers and music creators to position Romeo Lane as the go-to premium bar lounge for Gen Z weekends.
        </p>
      </>
    ),
  },
];


