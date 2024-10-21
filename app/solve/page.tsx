"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast"
import { motion } from 'framer-motion';
import { Mic, Image, Send } from 'lucide-react';

export default function SolvePage() {
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const { toast } = useToast()

  const handleSolve = async () => {
    if (!problem) {
      toast({
        title: "Error",
        description: "Please enter a math problem.",
        variant: "destructive",
      })
      return;
    }

    // TODO: Implement actual problem-solving logic
    setSolution('Solution will be displayed here.');
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Solve Math Problems</h1>
      <div className="space-y-4">
        <Textarea
          placeholder="Enter your math problem here..."
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <div className="flex justify-between">
          <Button variant="outline" className="flex items-center">
            <Mic className="mr-2" size={18} />
            Voice Input
          </Button>
          <Button variant="outline" className="flex items-center">
            <Image className="mr-2" size={18} />
            Image Upload
          </Button>
          <Button onClick={handleSolve} className="flex items-center">
            <Send className="mr-2" size={18} />
            Solve
          </Button>
        </div>
        {solution && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow"
          >
            <h2 className="text-xl font-semibold mb-2">Solution:</h2>
            <p>{solution}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}