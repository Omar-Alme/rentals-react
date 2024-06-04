import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

import hero1 from '../assets/hero1.jpeg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpeg';
import hero4 from '../assets/hero4.jpeg';

const carouselImages = [hero1, hero2, hero3, hero4];

function HeroCarousel() {
  return (
    <div className='hidden lg:block'>
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className='p-2'>
                  <img
                    src={image}
                    alt='hero'
                    className='w-full h-[24rem]  rounded-md object-cover'
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default HeroCarousel
