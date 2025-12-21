'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX, FiBell } from 'react-icons/fi';
import Button from '../ui/Button';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function TopNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left */}
          <div className="flex items-center">
            <Image
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Logo"
              width={32}
              height={32}
            />
            <div className="hidden sm:flex sm:ml-6 space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-4">
            <Button>
              <FiBell size={20} />
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="sm:hidden text-gray-400 hover:text-white"
            >
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden px-4 pb-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
