import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LeetCodeSection } from "./LeetCodeSection";
import { MachineCodingSection } from "./MachineCodingSection";
import { AlgorithmVisualizer } from "./AlgorithmVisualizer";

export function Playground() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">DSA Interview Playground</h1>
          <p className="text-muted-foreground">Interactive platform for Data Structures, Algorithms, and Machine Coding</p>
        </div>

        <Tabs defaultValue="leetcode" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="leetcode" className="text-lg py-3">
              LeetCode Problems
            </TabsTrigger>
            <TabsTrigger value="machine-coding" className="text-lg py-3">
              Machine Coding
            </TabsTrigger>
            <TabsTrigger value="algorithms" className="text-lg py-3">
              Algorithm Visualizer
            </TabsTrigger>
          </TabsList>

          <TabsContent value="leetcode">
            <LeetCodeSection />
          </TabsContent>

          <TabsContent value="machine-coding">
            <MachineCodingSection />
          </TabsContent>

          <TabsContent value="algorithms">
            <AlgorithmVisualizer />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}