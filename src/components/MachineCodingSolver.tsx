import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Play, RotateCcw } from "lucide-react";
import { type Problem } from "@/data/leetcode-problems";
import ChipsInput from "@/machine-coding/chips";

interface MachineCodingSolverProps {
  problem: Problem;
  onBack: () => void;
}

export function MachineCodingSolver({ problem, onBack }: MachineCodingSolverProps) {
  const [code, setCode] = useState(getDefaultCode(problem.id));
  const [showPreview, setShowPreview] = useState(true);

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

  const resetCode = () => {
    setCode(getDefaultCode(problem.id));
  };

  const renderPreview = () => {
    switch (problem.id) {
      case 'chips-input':
        return <ChipsInput />;
      case 'todo-list':
        return <div className="p-4 border rounded">Todo List Component will be rendered here</div>;
      default:
        return <div className="p-4 border rounded">Component preview will appear here</div>;
    }
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
          <Button onClick={() => setShowPreview(!showPreview)}>
            <Play className="h-4 w-4 mr-2" />
            {showPreview ? 'Hide' : 'Show'} Preview
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Problem Description and Requirements */}
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

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {problem.testCases.map((testCase, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="text-sm">
                    <div className="font-semibold">Requirement {index + 1}:</div>
                    <div className="text-muted-foreground mt-1">{testCase.description}</div>
                    <div className="mt-2">
                      <span className="font-medium">Test:</span> {JSON.stringify(testCase.input)}
                    </div>
                    <div>
                      <span className="font-medium">Expected:</span> {testCase.expected}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Code Editor and Preview */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Code Implementation</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="font-mono text-sm min-h-[300px]"
                placeholder="Write your component code here..."
              />
            </CardContent>
          </Card>

          {showPreview && (
            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-4 bg-gray-50">
                  {renderPreview()}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

function getDefaultCode(problemId: string): string {
  switch (problemId) {
    case 'chips-input':
      return `import { useState } from "react";

function ChipsInput() {
  const [chips, setChips] = useState([]);
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && value.trim()) {
      setChips(prev => [...prev, value.trim()]);
      setValue("");
    }
  };

  const removeChip = (index) => {
    setChips(chips => chips.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Chips Input</h3>
      
      <div className="flex flex-wrap gap-2">
        {chips.map((chip, index) => (
          <div
            key={index}
            className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            <span>{chip}</span>
            <button
              onClick={() => removeChip(index)}
              className="ml-2 text-blue-600 hover:text-blue-800"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type and press Enter to add chip"
        className="w-full px-3 py-2 border rounded-md"
      />
    </div>
  );
}

export default ChipsInput;`;

    case 'todo-list':
      return `import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: input.trim(),
        completed: false
      }]);
      setInput("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4">Todo List</h3>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo..."
          className="flex-1 px-3 py-2 border rounded-md"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      
      <ul className="space-y-2">
        {todos.map(todo => (
          <li key={todo.id} className="flex items-center gap-3 p-2 border rounded">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={todo.completed ? "line-through text-gray-500" : ""}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="ml-auto text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;`;

    default:
      return `// Your component implementation goes here
import React from 'react';

function YourComponent() {
  return (
    <div>
      <h3>Your Component</h3>
      <p>Implement your solution here</p>
    </div>
  );
}

export default YourComponent;`;
  }
}