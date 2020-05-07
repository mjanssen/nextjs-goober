import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <div>
      About page{' '}
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
