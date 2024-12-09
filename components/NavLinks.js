'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const NavLinks = () => {
  const path = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link
            href="/news"
            className={path.startsWith('/news') ? 'active' : undefined}
          >
            News
          </Link>
        </li>
        <li>
          <Link
            href="/archive"
            className={path.startsWith('/archive') ? 'active' : undefined}
          >
            Archive
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
