export interface TestCase {
  input: any[];
  expected: any;
  description?: string;
}

export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  functionName: string;
  functionSignature: string;
  testCases: TestCase[];
  hints?: string[];
  solutions?: {
    basic?: string;
    optimal?: string;
  };
}

export const leetcodeProblems: Problem[] = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    functionName: 'twoSum',
    functionSignature: 'function twoSum(nums: number[], target: number): number[]',
    testCases: [
      {
        input: [[2, 7, 11, 15], 9],
        expected: [0, 1],
        description: 'nums = [2,7,11,15], target = 9'
      },
      {
        input: [[3, 2, 4], 6],
        expected: [1, 2],
        description: 'nums = [3,2,4], target = 6'
      },
      {
        input: [[3, 3], 6],
        expected: [0, 1],
        description: 'nums = [3,3], target = 6'
      }
    ],
    hints: [
      'Think about using a hash map to store numbers you\'ve seen',
      'For each number, check if target - number exists in the map'
    ]
  },
  {
    id: 'missing-number',
    title: 'Missing Number',
    difficulty: 'Easy',
    description: 'Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.',
    functionName: 'findMissingNumber',
    functionSignature: 'function findMissingNumber(nums: number[]): number',
    testCases: [
      {
        input: [[3, 0, 1]],
        expected: 2,
        description: 'nums = [3,0,1]'
      },
      {
        input: [[0, 1]],
        expected: 2,
        description: 'nums = [0,1]'
      },
      {
        input: [[9, 6, 4, 2, 3, 5, 7, 0, 1]],
        expected: 8,
        description: 'nums = [9,6,4,2,3,5,7,0,1]'
      }
    ],
    hints: [
      'Use the mathematical formula: sum of 0 to n = n(n+1)/2',
      'Subtract the sum of array elements from expected sum'
    ]
  },
  {
    id: 'move-zeroes',
    title: 'Move Zeroes',
    difficulty: 'Easy',
    description: 'Given an integer array nums, move all 0\'s to the end of it while maintaining the relative order of the non-zero elements.',
    functionName: 'moveZeroes',
    functionSignature: 'function moveZeroes(nums: number[]): void',
    testCases: [
      {
        input: [[0, 1, 0, 3, 12]],
        expected: [1, 3, 12, 0, 0],
        description: 'nums = [0,1,0,3,12]'
      },
      {
        input: [[0]],
        expected: [0],
        description: 'nums = [0]'
      },
      {
        input: [[1, 0, 0, 3, 0, 4]],
        expected: [1, 3, 4, 0, 0, 0],
        description: 'nums = [1,0,0,3,0,4]'
      }
    ],
    hints: [
      'Use two pointers approach',
      'Keep track of the position where next non-zero element should be placed'
    ]
  },
  {
    id: 'maximum-subarray',
    title: 'Maximum Subarray',
    difficulty: 'Medium',
    description: 'Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.',
    functionName: 'maxSubArray',
    functionSignature: 'function maxSubArray(nums: number[]): number',
    testCases: [
      {
        input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
        expected: 6,
        description: 'nums = [-2,1,-3,4,-1,2,1,-5,4], subarray [4,-1,2,1] has sum = 6'
      },
      {
        input: [[1]],
        expected: 1,
        description: 'nums = [1]'
      },
      {
        input: [[5, 4, -1, 7, 8]],
        expected: 23,
        description: 'nums = [5,4,-1,7,8]'
      }
    ],
    hints: [
      'This is Kadane\'s algorithm',
      'Keep track of current sum and maximum sum found so far'
    ]
  },
  {
    id: 'longest-consecutive',
    title: 'Longest Consecutive Sequence',
    difficulty: 'Hard',
    description: 'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.',
    functionName: 'longestConsecutive',
    functionSignature: 'function longestConsecutive(nums: number[]): number',
    testCases: [
      {
        input: [[100, 4, 200, 1, 3, 2]],
        expected: 4,
        description: 'nums = [100,4,200,1,3,2], sequence [1,2,3,4] has length 4'
      },
      {
        input: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]],
        expected: 9,
        description: 'nums = [0,3,7,2,5,8,4,6,0,1]'
      }
    ],
    hints: [
      'Use a Set for O(1) lookup',
      'For each number, check if it\'s the start of a sequence (num-1 not in set)'
    ]
  }
];

export const machineCodingProblems: Problem[] = [
  {
    id: 'chips-input',
    title: 'Chips Input Component',
    difficulty: 'Easy',
    description: 'Create a chips input component where users can type text and press Enter to create chips. Each chip should have a close button.',
    functionName: 'ChipsInput',
    functionSignature: 'React Component',
    testCases: [
      {
        input: ['Type "React" and press Enter'],
        expected: 'Chip with "React" should appear',
        description: 'Basic chip creation'
      },
      {
        input: ['Click X on a chip'],
        expected: 'Chip should be removed',
        description: 'Chip removal'
      }
    ],
    hints: [
      'Use useState to manage chips array',
      'Handle keyDown event for Enter key',
      'Use filter to remove chips'
    ]
  },
  {
    id: 'todo-list',
    title: 'Todo List',
    difficulty: 'Medium',
    description: 'Create a todo list with add, edit, delete, and toggle completion functionality.',
    functionName: 'TodoList',
    functionSignature: 'React Component',
    testCases: [
      {
        input: ['Add new todo'],
        expected: 'Todo appears in list',
        description: 'Add functionality'
      },
      {
        input: ['Toggle todo completion'],
        expected: 'Todo status changes',
        description: 'Toggle functionality'
      }
    ],
    hints: [
      'Use useState for todos array',
      'Each todo should have id, text, and completed properties',
      'Use map to render todos'
    ]
  }
];