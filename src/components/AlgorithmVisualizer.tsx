import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SortingVisualizer from "@/views/SortingVisualizer";
import Practice from "@/practice";
import AkshaySainiPlaylist from "@/askhay-saini/akshay-saini";

export function AlgorithmVisualizer() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Algorithm Visualizers & Practice</h2>
        <p className="text-muted-foreground">Interactive visualizations and practice sessions</p>
      </div>

      <div className="grid gap-6">
        {/* Sorting Visualizer */}
        <Card>
          <CardHeader>
            <CardTitle>Sorting Algorithm Visualizer</CardTitle>
          </CardHeader>
          <CardContent>
            <SortingVisualizer />
          </CardContent>
        </Card>

        {/* Practice Problems */}
        <Card>
          <CardHeader>
            <CardTitle>Practice Session</CardTitle>
          </CardHeader>
          <CardContent>
            <Practice />
          </CardContent>
        </Card>

        {/* Akshay Saini Playlist */}
        <Card>
          <CardHeader>
            <CardTitle>Akshay Saini JavaScript Interview Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <AkshaySainiPlaylist />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}