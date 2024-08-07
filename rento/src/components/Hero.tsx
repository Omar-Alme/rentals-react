import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import HeroCarousel from './HeroCarousel';


const Hero = () => {
  return (
    <section className=' grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl '>
          We’re changing the way people shop.
        </h1>

        <p className='mt-8 max-w-xl text-lg leading-8'>
        Discover the epitome of elegance and sophistication with our curated collection of luxury furniture. Each piece is meticulously crafted to transform your living spaces into a sanctuary of style and comfort. Elevate your home with timeless designs, exquisite materials, and unparalleled craftsmanship that define true luxury. Experience the art of fine living with us today.
        </p>

        <Button asChild size='lg' className='mt-10'>
          <Link to='/products'>Our Products</Link>
        </Button>
      </div>
      {/* hero carousel */}
      <HeroCarousel />
    </section>
  );
};
export default Hero;