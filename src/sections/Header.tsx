import ArrowRight from '@/assets/arrow-right.svg';
import MenuIcon from '@/assets/menu.svg';
import Logo from'@/assets/logosaas.png';
import Image from 'next/image';
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-small  gap-3">
        <p className='text-white/60 hidden md:block'>Streamline your workflow and boost your Productivity</p>
        <div className='inline-flex gap-1 items-center'>
          <p>Get Started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
        </div>
      </div>
      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Image src={Logo} alt='Sass' height={40} width={40}/>
            <MenuIcon className="h-5 w-5 md:hidden"/> 
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href='#'>About us</a>
              <a href='#'>Features</a>
              <a href='#'>Customers</a>
              <a href='#'>Updates</a>
              <a href='#'>Help</a>
              <button className='btn btn-primary'> Get for Free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
