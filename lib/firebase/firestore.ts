import { collection, query, where, getDocs, addDoc, Timestamp } from 'firebase/firestore';
import { db } from './config';

export const getUserProblems = async (userId: string) => {
  const q = query(collection(db, 'problems'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const addProblem = async (userId: string, problem: string, solution: string) => {
  await addDoc(collection(db, 'problems'), {
    userId,
    problem,
    solution,
    timestamp: Timestamp.now()
  });
};