import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="text-white py-2 px-4">
      <div className="container flex justify-between items-center">
        {/* Left side: Logo and Text */}
        <div>
          <Image src="/Logo1.svg" alt="Stay Predictor Logo" width={280} height={100} />
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex space-x-6">
          <Link href="/" className="hover:text-blue-400">
            HOME
          </Link>
          <Link href="/about" className="hover:text-blue-400">
            ABOUT US
          </Link>
          <Link href="/team" className="hover:text-blue-400">
            TEAM
          </Link>
          <Link href="/contact" className="hover:text-blue-400">
            CONTACT US
          </Link>
        </nav>

        {/* Right side: Additional logo */}
        <div className='px-2'>
          <Image src="/btlogo.svg" alt="BT Logo" width={60} height={60} />
        </div>
      </div>
    </header>
  );
}