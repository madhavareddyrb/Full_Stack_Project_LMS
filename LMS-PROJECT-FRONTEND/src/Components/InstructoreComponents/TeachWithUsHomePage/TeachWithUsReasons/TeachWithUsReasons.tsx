import { GlowCard } from "@/Components/ui/glowcard";
import "./TeachWithUsReasons.css";

export default function TeachWithUsReasons() {
  const teachCardsData = [
    {
      id: 1,
      image: "https://s.udemycdn.com/teaching/value-prop-teach-2x-v3.jpg",
      title: "Teach Your Way",
      description:
        "Publish the course you want, in the way you want. You have full control over your content, structure, and teaching style.",
      glowColor: "blue",
    },
    {
      id: 2,
      image: "https://s.udemycdn.com/teaching/value-prop-inspire-2x-v3.jpg",

      title: "Inspire Learners",
      description:
        "Share what you know and help learners explore their interests, gain valuable skills, and grow in their careers.",
      glowColor: "purple",
    },
    {
      id: 3,
      image:
        "https://s.udemycdn.com/teaching/value-prop-get-rewarded-2x-v3.jpg",

      title: "Get Rewarded",
      description:
        "Grow your professional network, strengthen your expertise, and earn money with every enrollment.",
      glowColor: "green",
    },
  ];

  return (
    <>
      <h1 className="reasons-heading">So Many Reasons To Start</h1>
      <div className="flex gap-30 flex-wrap justify-center reasonscard">
        {teachCardsData.map((card) => (
          <GlowCard key={card.id} glowColor={card.glowColor}>
            <div className="flex flex-col gap-2">
              <img
                src={card.image}
                alt={card.image}
                className="w-[100px] reasons-img-class"
              />
              <h2 className="reasons_heading_class">{card.title}</h2>
              <p className="text-m text-gray-700">{card.description}</p>
            </div>
          </GlowCard>
        ))}
      </div>
    </>
  );
}
