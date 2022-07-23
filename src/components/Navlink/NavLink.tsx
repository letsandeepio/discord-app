import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface NavLinkProps {
  href: string;
  children?: React.ReactNode;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, active }) => {
  const router = useRouter();
  const isActive = active || router.asPath === href;

  return (
    <Link href={href}>
      <a className='group relative block'>
        <div className='absolute -left-3 flex h-full items-center'>
          <div
            className={`${
              isActive
                ? 'h-10'
                : 'h-5 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'
            } w-1 origin-left  rounded-r bg-white  transition-all duration-200  `}
          ></div>
        </div>
        <div className='group-active:translate-y-px'>
          <div
            className={`${
              isActive
                ? 'rounded-2xl bg-brand'
                : 'rounded-3xl bg-gray-700 text-gray-100 hover:rounded-2xl hover:bg-brand hover:text-white'
            } flex h-12 w-12 items-center justify-center  overflow-hidden transition-all duration-200 `}
          >
            {children}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default NavLink;
