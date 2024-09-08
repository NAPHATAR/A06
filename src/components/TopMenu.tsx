import Image from 'next/image';
import TopMenuItem from './TopMenuItem';

export default function TopMenu() {
  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-end items-center h-16 py-4 sm:py-6 lg:py-8 mr-4 sm:mr-8 md:mr-12 lg:mr-16 xl:mr-20">
        <nav className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6">
          <TopMenuItem href="/booking">Booking</TopMenuItem>
          <TopMenuItem href="/">
            <Image 
              src="/img/logo.png" 
              alt="Logo" 
              width={256}
              height={256}
              priority
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9"
            />
          </TopMenuItem>
        </nav>
      </div>
    </div>
  );
}
