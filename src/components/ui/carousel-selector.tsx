import { useEffect, useState } from "react";
import { AspectRatio } from "./aspect-ratio";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";

type CarouselItem = {
  id: number;
  title: string;
  image: string;
};

type CarouselSelectorProps = React.HTMLAttributes<HTMLDivElement> & {
  items: CarouselItem[];
  staticTitle?: string;
  onSelectedChange?: (selected:number) => void;
};

const CarouselSelector = ({
  items,
  staticTitle = "",
  onSelectedChange = () => {},
  ...props
}: CarouselSelectorProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api]);

  useEffect(() => {
    setCurrent(0);
    api?.scrollTo(0, true);
  }, [items, api]);

  useEffect(() => {
    onSelectedChange(current);
  }, [current, onSelectedChange]);

  return (
    <div className="w-full max-w-xs" {...props}>
      <p className="text-center text-sm font-semibold text-sky-100 overflow-ellipsis whitespace-nowrap overflow-hidden px-2 py-4">
        <span className="text-sky-500">{staticTitle} </span>
        {items.length > 0 && items[current].title}
      </p>
      <Carousel className="w-full" opts={{loop: true}} setApi={setApi}>
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-0.5 border-white/40 border rounded">
                <AspectRatio ratio={16 / 7} className="border-white/50 rounded" >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded" />
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex flex-row items-center justify-between px-2 py-2">
          <CarouselPrevious />
          <span className="text-xs text-sky-100">{current + 1} of {count}</span>
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export {
  CarouselSelector
};