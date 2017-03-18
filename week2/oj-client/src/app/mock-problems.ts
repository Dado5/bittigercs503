import { Problem } from "./models/problem.model";

export const PROBLEMS:Problem[] = [
  {
    id: 1,
    name: "Two Sum",
    desc:`Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target,wh`,
    difficulty: "easy"
  },
  {
    id: 2,
    name: "3Sum",
    desc:`Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.`,
    difficulty: "medium"
  },
  {
    id: 3,
    name: "4Sum",
    desc:`Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.`,
    difficulty: "medium"
  },
  {
    id: 4,
    name: "Triangle Count",
    desc:`Given an array of integers,how many three numbers can be found in the array, so that we`,
    difficulty: "hard"
  },
  {
    id: 5,
    name: "Sliding Window Maximum",
    desc:`Given an array of n integers with duplicate number, and a moving window(size k), move the`,
    difficulty: "super"
  }
];
