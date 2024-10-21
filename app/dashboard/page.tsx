"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"
import { motion } from 'framer-motion';
import { getUserProblems } from '@/lib/firebase/firestore';
import { useAuth } from '@/components/AuthProvider';
import Link from 'next/link';

interface Problem {
  id: string;
  problem: string;
  solution: string;
  timestamp: Date;
}

export default function DashboardPage() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const { toast } = useToast()
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchProblems();
    }
  }, [user]);

  const fetchProblems = async () => {
    try {
      const fetchedProblems = await getUserProblems(user!.uid);
      setProblems(fetchedProblems);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch problems.",
        variant: "destructive",
      })
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Your Math Problem History</h1>
      <div className="mb-4">
        <Button asChild>
          <Link href="/solve">Solve New Problem</Link>
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {problems.map((problem) => (
          <div key={problem.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">{problem.problem}</h2>
            <p className="text-gray-600 dark:text-gray-300">{problem.solution}</p>
            <p className="text-sm text-gray-500 mt-2">
              Solved on: {problem.timestamp.toLocaleString()}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}