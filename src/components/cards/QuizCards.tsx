import Card from "./Card";
import CardStack from "./CardStack";

export default function QuizCards() {
  return (
    <article className="default-scheme bg-red w-full mb-12 p-8 rounded-2xl min-w-[328px] min-h-[400px] grid grid-rows-[auto_1fr]">
      <header className="text-base text-center font-serif">
        <h4 className="text-xl">Card Swipe</h4>
        <p className="text-xs font-serif text-center mt-2 opacity-70">
          Draggable cards with a springy feel
        </p>
      </header>
      <figure className="relative py-8 grid mx-auto">
        <CardStack>
          <Card key="child-1" />
          <Card key="child-2" />
          <Card key="child-3" />
        </CardStack>
      </figure>
    </article>
  );
}
