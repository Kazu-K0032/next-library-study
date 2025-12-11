'use client';

import Button from '@/components/Button/Button';

export default function Home() {
  const handleClick = () => {
    console.log('クリック');
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <Button variant="primary" size="medium" onClick={handleClick}>Click me</Button>
      <Button variant="secondary" size="medium" onClick={handleClick}>Click me</Button>
      <Button variant="outline" size="medium" onClick={handleClick}>Click me</Button>
      <Button variant="ghost" size="medium" onClick={handleClick}>Click me</Button>
    </div>
  );
}
