import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SlideShow = ({ imgUrl, title }) => {
  return (
    <Carousel opts={{ loop: true }} className="w-full">
      <CarouselContent>
        {imgUrl.map((url, index) => (
          <CarouselItem key={url}>
            {url.endsWith(".mp4") ? (
              <video controls loop playsInline className="aspect-video w-full rounded-xl bg-black">
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={url}
                alt={`${title} preview ${index + 1}`}
                className="aspect-video w-full rounded-xl object-cover"
              />
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      {imgUrl.length > 1 && (
        <>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </>
      )}
    </Carousel>
  );
};

export default SlideShow;
