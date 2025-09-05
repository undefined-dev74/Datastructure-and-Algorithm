import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { leetcodeProblems, type Problem } from "@/data/leetcode-problems";
import { ProblemSolver } from "./ProblemSolver";

export function LeetCodeSection() {
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

  const filterProblemsByDifficulty = (difficulty: string) => {
    return leetcodeProblems.filter(problem => problem.difficulty === difficulty);
  };

  const ProblemsList = ({ problems }: { problems: Problem[] }) => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {problems.map((problem) => (
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
  );

  if (selectedProblem) {
    return (
      <ProblemSolver 
        problem={selectedProblem} 
        onBack={() => setSelectedProblem(null)} 
      />
    );
  }

  return (
    <div>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="all">All Problems</TabsTrigger>
          <TabsTrigger value="easy">Easy</TabsTrigger>
          <TabsTrigger value="medium">Medium</TabsTrigger>
          <TabsTrigger value="hard">Hard</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <ProblemsList problems={leetcodeProblems} />
        </TabsContent>

        <TabsContent value="easy">
          <ProblemsList problems={filterProblemsByDifficulty('Easy')} />
        </TabsContent>

        <TabsContent value="medium">
          <ProblemsList problems={filterProblemsByDifficulty('Medium')} />
        </TabsContent>

        <TabsContent value="hard">
          <ProblemsList problems={filterProblemsByDifficulty('Hard')} />
        </TabsContent>
      </Tabs>
    </div>
  );
}