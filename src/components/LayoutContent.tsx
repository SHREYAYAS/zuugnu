'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith('/auth');
  const isDashboardPage = pathname?.startsWith('/dashboard');
  const isProfilePage = pathname === '/profile';

  return (
    <>
      {!isAuthPage && !isDashboardPage && !isProfilePage && <Header />}
      {children}
      {!isAuthPage && !isDashboardPage && !isProfilePage && <Footer />}
    </>
  );
}
