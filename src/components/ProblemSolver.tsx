import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Play, RotateCcw } from "lucide-react";
import { type Problem } from "@/data/leetcode-problems";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProblemSolverProps {
  problem: Problem;
  onBack: () => void;
}

export function ProblemSolver({ problem, onBack }: ProblemSolverProps) {
  const [code, setCode] = useState(`${problem.functionSignature} {
    // Your solution here
    
}`);
  const [testResults, setTestResults] = useState<any[]>([]);
  const [customInput, setCustomInput] = useState("");
  const [customOutput, setCustomOutput] = useState("");

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const runTests = () => {
    try {
      // This is a simplified test runner - in a real app you'd use a proper code execution environment
      const results = problem.testCases.map((testCase, index) => {
        const inputs = testCase.input;
        let result;
        let passed = false;
        let error = null;

        try {
          // Import the actual function from your leetcode folder
          switch (problem.functionName) {
            case 'twoSum':
              import('../leetcode/2sum').then(module => {
                result = module.twoSum(inputs[0], inputs[1]);
                passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
              });
              break;
            case 'findMissingNumber':
              import('../leetcode/missingNumber').then(module => {
                result = module.findMissingNumber(inputs[0]);
                passed = result === testCase.expected;
              });
              break;
            case 'moveZeroes':
              const arr = [...inputs[0]];
              import('../leetcode/moveZero').then(module => {
                module.optimalMoveZero(arr);
                result = arr;
                passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
              });
              break;
            case 'maxSubArray':
              import('../leetcode/maximumSubArraySum').then(module => {
                result = module.maximumSubArraySum(inputs[0]);
                passed = result === testCase.expected;
              });
              break;
            case 'longestConsecutive':
              import('../leetcode/longestConsecutive').then(module => {
                result = module.longestConsecutive(inputs[0]);
                passed = result === testCase.expected;
              });
              break;
            default:
              result = 'Function not implemented yet';
              passed = false;
          }
        } catch (err) {
          error = err instanceof Error ? err.message : 'Unknown error';
        }

        return {
          testCase: index + 1,
          input: inputs,
          expected: testCase.expected,
          output: result,
          passed,
          error,
          description: testCase.description
        };
      });

      setTestResults(results);
    } catch (error) {
      console.error('Error running tests:', error);
    }
  };

  const runCustomTest = () => {
    try {
      const inputs = JSON.parse(customInput);
      let result;

      // Similar switch case for custom input
      switch (problem.functionName) {
        case 'twoSum':
          import('../leetcode/2sum').then(module => {
            result = module.twoSum(inputs[0], inputs[1]);
            setCustomOutput(JSON.stringify(result));
          });
          break;
        case 'findMissingNumber':
          import('../leetcode/missingNumber').then(module => {
            result = module.findMissingNumber(inputs[0]);
            setCustomOutput(result.toString());
          });
          break;
        // Add other cases as needed
        default:
          setCustomOutput('Function not implemented yet');
      }
    } catch (error) {
      setCustomOutput(`Error: ${error instanceof Error ? error.message : 'Invalid input format'}`);
    }
  };

  const resetCode = () => {
    setCode(`${problem.functionSignature} {
    // Your solution here
    
}`);
    setTestResults([]);
    setCustomOutput("");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Problems
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{problem.title}</h1>
            <Badge className={getDifficultyColor(problem.difficulty)}>
              {problem.difficulty}
            </Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={resetCode}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <Button onClick={runTests}>
            <Play className="h-4 w-4 mr-2" />
            Run Tests
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Problem Description */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Problem Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">{problem.description}</p>
              
              {problem.hints && (
                <div className="mt-4">
                  <h4 className="font-semibold text-sm mb-2">Hints:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {problem.hints.map((hint, index) => (
                      <li key={index} className="text-xs text-muted-foreground">{hint}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          <Tabs defaultValue="test-cases" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="test-cases">Test Cases</TabsTrigger>
              <TabsTrigger value="custom">Custom Input</TabsTrigger>
            </TabsList>

            <TabsContent value="test-cases">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Test Cases</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {problem.testCases.map((testCase, index) => (
                    <div key={index} className="border rounded-lg p-3">
                      <div className="text-sm">
                        <div className="font-semibold">Test Case {index + 1}:</div>
                        <div className="text-muted-foreground">{testCase.description}</div>
                        <div className="mt-2">
                          <span className="font-medium">Input:</span> {JSON.stringify(testCase.input)}
                        </div>
                        <div>
                          <span className="font-medium">Expected:</span> {JSON.stringify(testCase.expected)}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="custom">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Custom Test</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Input (JSON format):</label>
                    <Input
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                      placeholder='e.g., [[2, 7, 11, 15], 9]'
                      className="mt-1"
                    />
                  </div>
                  <Button onClick={runCustomTest} size="sm">
                    Run Custom Test
                  </Button>
                  {customOutput && (
                    <div className="mt-2">
                      <label className="text-sm font-medium">Output:</label>
                      <div className="mt-1 p-2 bg-gray-100 rounded text-sm font-mono">
                        {customOutput}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Code Editor and Results */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="font-mono text-sm min-h-[300px]"
                placeholder="Write your solution here..."
              />
            </CardContent>
          </Card>

          {testResults.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {testResults.map((result, index) => (
                    <div key={index} className={`border rounded-lg p-3 ${result.passed ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">Test Case {result.testCase}</span>
                        <Badge variant={result.passed ? 'default' : 'destructive'}>
                          {result.passed ? 'Passed' : 'Failed'}
                        </Badge>
                      </div>
                      <div className="text-sm space-y-1">
                        <div><span className="font-medium">Input:</span> {JSON.stringify(result.input)}</div>
                        <div><span className="font-medium">Expected:</span> {JSON.stringify(result.expected)}</div>
                        <div><span className="font-medium">Output:</span> {JSON.stringify(result.output)}</div>
                        {result.error && (
                          <div className="text-red-600"><span className="font-medium">Error:</span> {result.error}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}