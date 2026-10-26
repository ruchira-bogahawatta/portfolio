import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SlideShow = ({ imgUrl, title }) => {
  return (
    <Carousel opts={{ loop: true }} className="w-full bg-paper-soft">
      <CarouselContent className="ml-0">
        {imgUrl.map((url, index) => (
          <CarouselItem key={url} className="pl-0">
            {url.endsWith(".mp4") ? (
              <video controls loop playsInline poster={imgUrl[0]} className="aspect-video w-full bg-ink">
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={url} alt={`${title} preview ${index + 1}`} className="aspect-video w-full object-cover" />
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      {imgUrl.length > 1 && (
        <>
          <CarouselPrevious className="left-3 size-10 bg-paper/90 hover:bg-paper" />
          <CarouselNext className="right-3 size-10 bg-paper/90 hover:bg-paper" />
        </>
      )}
    </Carousel>
  );
};

export default SlideShow;
