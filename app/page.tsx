import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 text-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">Welcome to MathSolve AI</h1>
      <p className="text-xl mb-8 max-w-2xl">Solve math problems instantly with AI assistance. Type, upload images, or use voice to input your problems.</p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/solve">Start Solving</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}