import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { machineCodingProblems, type Problem } from "@/data/leetcode-problems";
import { MachineCodingSolver } from "./MachineCodingSolver";

export function MachineCodingSection() {
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'Hard':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  if (selectedProblem) {
    return (
      <MachineCodingSolver 
        problem={selectedProblem} 
        onBack={() => setSelectedProblem(null)} 
      />
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Machine Coding Problems</h2>
        <p className="text-muted-foreground">Build interactive React components and applications</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {machineCodingProblems.map((problem) => (
          <Card key={problem.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedProblem(problem)}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold">{problem.title}</CardTitle>
                <Badge className={getDifficultyColor(problem.difficulty)}>
                  {problem.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {problem.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}