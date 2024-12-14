import { Monaco } from "@monaco-editor/react";
import { Theme } from "@/types";

type LanguageConfig = Record<
  string,
  {
    id: string;
    label: string;
    logoPath: string;
    pistonRuntime: { language: string; version: string };
    monacoLanguage: string;
    defaultCode: string;
  }
>;

export const LANGUAGE_CONFIG: LanguageConfig = {
  javascript: {
    id: "javascript",
    label: "JavaScript",
    logoPath: "/javascript.png",
    pistonRuntime: { language: "javascript", version: "18.15.0" }, // api that we're gonna be using
    monacoLanguage: "javascript",
    defaultCode: `// JavaScript Playground
const numbers = [1, 2, 3, 4, 5];

// Map numbers to their squares
const squares = numbers.map(n => n * n);
console.log('Original numbers:', numbers);
console.log('Squared numbers:', squares);

// Filter for even numbers
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Calculate sum using reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('Sum of numbers:', sum);`,
  },
  typescript: {
    id: "typescript",
    label: "TypeScript",
    logoPath: "/typescript.png",
    pistonRuntime: { language: "typescript", version: "5.0.3" },
    monacoLanguage: "typescript",
    defaultCode: `// TypeScript Playground
interface NumberArray {
  numbers: number[];
  sum(): number;
  squares(): number[];
  evenNumbers(): number[];
}

class MathOperations implements NumberArray {
  constructor(public numbers: number[]) {}

  sum(): number {
    return this.numbers.reduce((acc, curr) => acc + curr, 0);
  }

  squares(): number[] {
    return this.numbers.map(n => n * n);
  }

  evenNumbers(): number[] {
    return this.numbers.filter(n => n % 2 === 0);
  }
}

const math = new MathOperations([1, 2, 3, 4, 5]);

console.log('Original numbers:', math.numbers);
console.log('Squared numbers:', math.squares());
console.log('Even numbers:', math.evenNumbers());
console.log('Sum of numbers:', math.sum());`,
  },
  python: {
    id: "python",
    label: "Python",
    logoPath: "/python.png",
    pistonRuntime: { language: "python", version: "3.10.0" },
    monacoLanguage: "python",
    defaultCode: `# Python Playground
numbers = [1, 2, 3, 4, 5]

# Map numbers to their squares
squares = [n ** 2 for n in numbers]
print(f"Original numbers: {numbers}")
print(f"Squared numbers: {squares}")

# Filter for even numbers
even_numbers = [n for n in numbers if n % 2 == 0]
print(f"Even numbers: {even_numbers}")

# Calculate sum
numbers_sum = sum(numbers)
print(f"Sum of numbers: {numbers_sum}")`,
  },
  java: {
    id: "java",
    label: "Java",
    logoPath: "/java.png",
    pistonRuntime: { language: "java", version: "15.0.2" },
    monacoLanguage: "java",
    defaultCode: `public class Main {
  public static void main(String[] args) {
      // Create array
      int[] numbers = {1, 2, 3, 4, 5};
      
      // Print original numbers
      System.out.print("Original numbers: ");
      printArray(numbers);
      
      // Calculate and print squares
      int[] squares = new int[numbers.length];
      for (int i = 0; i < numbers.length; i++) {
          squares[i] = numbers[i] * numbers[i];
      }
      System.out.print("Squared numbers: ");
      printArray(squares);
      
      // Print even numbers
      System.out.print("Even numbers: ");
      for (int n : numbers) {
          if (n % 2 == 0) System.out.print(n + " ");
      }
      System.out.println();
      
      // Calculate and print sum
      int sum = 0;
      for (int n : numbers) sum += n;
      System.out.println("Sum of numbers: " + sum);
  }
  
  private static void printArray(int[] arr) {
      for (int n : arr) System.out.print(n + " ");
      System.out.println();
  }
}`,
  },
  go: {
    id: "go",
    label: "Go",
    logoPath: "/go.png",
    pistonRuntime: { language: "go", version: "1.16.2" },
    monacoLanguage: "go",
    defaultCode: `package main

import "fmt"

func main() {
  // Create slice
  numbers := []int{1, 2, 3, 4, 5}
  
  // Print original numbers
  fmt.Println("Original numbers:", numbers)
  
  // Calculate squares
  squares := make([]int, len(numbers))
  for i, n := range numbers {
      squares[i] = n * n
  }
  fmt.Println("Squared numbers:", squares)
  
  // Filter even numbers
  var evenNumbers []int
  for _, n := range numbers {
      if n%2 == 0 {
          evenNumbers = append(evenNumbers, n)
      }
  }
  fmt.Println("Even numbers:", evenNumbers)
  
  // Calculate sum
  sum := 0
  for _, n := range numbers {
      sum += n
  }
  fmt.Println("Sum of numbers:", sum)
}`,
  },
  rust: {
    id: "rust",
    label: "Rust",
    logoPath: "/rust.png",
    pistonRuntime: { language: "rust", version: "1.68.2" },
    monacoLanguage: "rust",
    defaultCode: `fn main() {
    // Create vector
    let numbers = vec![1, 2, 3, 4, 5];
    
    // Print original numbers
    println!("Original numbers: {:?}", numbers);
    
    // Calculate squares
    let squares: Vec<i32> = numbers
        .iter()
        .map(|&n| n * n)
        .collect();
    println!("Squared numbers: {:?}", squares);
    
    // Filter even numbers
    let even_numbers: Vec<i32> = numbers
        .iter()
        .filter(|&&n| n % 2 == 0)
        .cloned()
        .collect();
    println!("Even numbers: {:?}", even_numbers);
    
    // Calculate sum
    let sum: i32 = numbers.iter().sum();
    println!("Sum of numbers: {}", sum);
}`,
  },
  cpp: {
    id: "cpp",
    label: "C++",
    logoPath: "/cpp.png",
    pistonRuntime: { language: "cpp", version: "10.2.0" },
    monacoLanguage: "cpp",
    defaultCode: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>

int main() {
    // Create vector
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    // Print original numbers
    std::cout << "Original numbers: ";
    for (int n : numbers) std::cout << n << " ";
    std::cout << std::endl;
    
    // Calculate squares
    std::vector<int> squares;
    std::transform(numbers.begin(), numbers.end(), 
                  std::back_inserter(squares),
                  [](int n) { return n * n; });
    
    std::cout << "Squared numbers: ";
    for (int n : squares) std::cout << n << " ";
    std::cout << std::endl;
    
    // Filter even numbers
    std::cout << "Even numbers: ";
    for (int n : numbers) {
        if (n % 2 == 0) std::cout << n << " ";
    }
    std::cout << std::endl;
    
    // Calculate sum
    int sum = std::accumulate(numbers.begin(), numbers.end(), 0);
    std::cout << "Sum of numbers: " << sum << std::endl;
    
    return 0;
}`,
  },
  csharp: {
    id: "csharp",
    label: "C#",
    logoPath: "/csharp.png",
    pistonRuntime: { language: "csharp", version: "6.12.0" },
    monacoLanguage: "csharp",
    defaultCode: `using System;
using System.Linq;

class Program {
    static void Main() {
        // Create array
        int[] numbers = { 1, 2, 3, 4, 5 };
        
        // Print original numbers
        Console.WriteLine($"Original numbers: {string.Join(" ", numbers)}");
        
        // Calculate squares
        var squares = numbers.Select(n => n * n);
        Console.WriteLine($"Squared numbers: {string.Join(" ", squares)}");
        
        // Filter even numbers
        var evenNumbers = numbers.Where(n => n % 2 == 0);
        Console.WriteLine($"Even numbers: {string.Join(" ", evenNumbers)}");
        
        // Calculate sum
        var sum = numbers.Sum();
        Console.WriteLine($"Sum of numbers: {sum}");
    }
}`,
  },
  ruby: {
    id: "ruby",
    label: "Ruby",
    logoPath: "/ruby.png",
    pistonRuntime: { language: "ruby", version: "3.0.1" },
    monacoLanguage: "ruby",
    defaultCode: `# Create array
numbers = [1, 2, 3, 4, 5]

# Print original numbers
puts "Original numbers: #{numbers.join(' ')}"

# Calculate squares
squares = numbers.map { |n| n * n }
puts "Squared numbers: #{squares.join(' ')}"

# Filter even numbers
even_numbers = numbers.select { |n| n.even? }
puts "Even numbers: #{even_numbers.join(' ')}"

# Calculate sum
sum = numbers.sum
puts "Sum of numbers: #{sum}"`,
  },
  swift: {
    id: "swift",
    label: "Swift",
    logoPath: "/swift.png",
    pistonRuntime: { language: "swift", version: "5.3.3" },
    monacoLanguage: "swift",
    defaultCode: `// Create array
let numbers = [1, 2, 3, 4, 5]

// Print original numbers
print("Original numbers: \\(numbers)")

// Calculate squares
let squares = numbers.map { $0 * $0 }
print("Squared numbers: \\(squares)")

// Filter even numbers
let evenNumbers = numbers.filter { $0 % 2 == 0 }
print("Even numbers: \\(evenNumbers)")

// Calculate sum
let sum = numbers.reduce(0, +)
print("Sum of numbers: \\(sum)")`,
  },
};

export const THEMES: Theme[] = [
  { id: "vs-dark", label: "VS Dark", color: "#1e1e1e" },
  { id: "vs-light", label: "VS Light", color: "#ffffff" },
  { id: "github-dark", label: "GitHub Dark", color: "#0d1117" },
  { id: "monokai", label: "Monokai", color: "#272822" },
  { id: "solarized-dark", label: "Solarized Dark", color: "#002b36" },
  { id: "red-dracula", label: "Red Dracula", color: "#ff5555" },
  { id: "violet-dracula", label: "Violet Dracula", color: "#bd93f9" },
  { id: "pink-spring", label: "Pink Spring", color: "#ff79c6" },
  { id: "autumn-yellow", label: "Autumn Yellow", color: "#f1fa8c" },
  { id: "bluish-dark", label: "Bluish Dark", color: "#1a2a40" },
  { id: "oceanic-breeze", label: "Oceanic Breeze", color: "#1b2b34" },
  { id: "sunset-glow", label: "Sunset Glow", color: "#2d132c" },
  { id: "forest-bloom", label: "Forest Bloom", color: "#1e272e" },
  { id: "candy-pop", label: "Candy Pop", color: "#282a36" },
  { id: "aurora-borealis", label: "Aurora Borealis", color: "#0c2233" }
];


export const THEME_DEFINITONS = {
  "github-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6e7681" },
      { token: "string", foreground: "a5d6ff" },
      { token: "keyword", foreground: "ff7b72" },
      { token: "number", foreground: "79c0ff" },
      { token: "type", foreground: "ffa657" },
      { token: "class", foreground: "ffa657" },
      { token: "function", foreground: "d2a8ff" },
      { token: "variable", foreground: "ffa657" },
      { token: "operator", foreground: "ff7b72" },
    ],
    colors: {
      "editor.background": "#0d1117",
      "editor.foreground": "#c9d1d9",
      "editor.lineHighlightBackground": "#161b22",
      "editorLineNumber.foreground": "#6e7681",
      "editorIndentGuide.background": "#21262d",
      "editor.selectionBackground": "#264f78",
      "editor.inactiveSelectionBackground": "#264f7855",
    },
  },
  monokai: {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "75715E" },
      { token: "string", foreground: "E6DB74" },
      { token: "keyword", foreground: "F92672" },
      { token: "number", foreground: "AE81FF" },
      { token: "type", foreground: "66D9EF" },
      { token: "class", foreground: "A6E22E" },
      { token: "function", foreground: "A6E22E" },
      { token: "variable", foreground: "F8F8F2" },
      { token: "operator", foreground: "F92672" },
    ],
    colors: {
      "editor.background": "#272822",
      "editor.foreground": "#F8F8F2",
      "editorLineNumber.foreground": "#75715E",
      "editor.selectionBackground": "#49483E",
      "editor.lineHighlightBackground": "#3E3D32",
      "editorCursor.foreground": "#F8F8F2",
      "editor.selectionHighlightBackground": "#49483E",
    },
  },
  "solarized-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "586e75" },
      { token: "string", foreground: "2aa198" },
      { token: "keyword", foreground: "859900" },
      { token: "number", foreground: "d33682" },
      { token: "type", foreground: "b58900" },
      { token: "class", foreground: "b58900" },
      { token: "function", foreground: "268bd2" },
      { token: "variable", foreground: "b58900" },
      { token: "operator", foreground: "859900" },
    ],
    colors: {
      "editor.background": "#002b36",
      "editor.foreground": "#839496",
      "editorLineNumber.foreground": "#586e75",
      "editor.selectionBackground": "#073642",
      "editor.lineHighlightBackground": "#073642",
      "editorCursor.foreground": "#839496",
      "editor.selectionHighlightBackground": "#073642",
    },
  },
  "red-dracula": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "ff5555", fontStyle: "italic" },
      { token: "string", foreground: "ffb86c" },
      { token: "keyword", foreground: "ff79c6", fontStyle: "bold" },
      { token: "number", foreground: "bd93f9" },
      { token: "type", foreground: "50fa7b" },
      { token: "class", foreground: "8be9fd" },
      { token: "function", foreground: "ff79c6" },
      { token: "variable", foreground: "f8f8f2" },
      { token: "operator", foreground: "ff5555" },
    ],
    colors: {
      "editor.background": "#282a36",
      "editor.foreground": "#f8f8f2",
      "editorCursor.foreground": "#ff5555",
      "editor.selectionBackground": "#44475a",
      "editor.lineHighlightBackground": "#383a59",
      "editorLineNumber.foreground": "#6272a4",
    },
  },
  "violet-dracula": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "bd93f9", fontStyle: "italic" },
      { token: "string", foreground: "ff79c6" },
      { token: "keyword", foreground: "8be9fd", fontStyle: "bold" },
      { token: "type", foreground: "50fa7b" },
      { token: "function", foreground: "d6acff" },
    ],
    colors: {
      "editor.background": "#282a36",
      "editor.foreground": "#f8f8f2",
      "editor.selectionBackground": "#44475a",
      "editorCursor.foreground": "#bd93f9",
      "editor.lineHighlightBackground": "#383a59",
      "editorLineNumber.foreground": "#6272a4",
    },
  },
  "pink-spring": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "ff79c6", fontStyle: "italic" },
      { token: "string", foreground: "f1fa8c" },
      { token: "keyword", foreground: "ff79c6", fontStyle: "bold" },
      { token: "type", foreground: "bd93f9" },
      { token: "class", foreground: "50fa7b" },
      { token: "function", foreground: "d6acff" },
    ],
    colors: {
      "editor.background": "#ffeff1",
      "editor.foreground": "#ff79c6",
      "editor.selectionBackground": "#ffd6e3",
      "editorCursor.foreground": "#ff79c6",
      "editor.lineHighlightBackground": "#ffe0e9",
      "editorLineNumber.foreground": "#ffbad2",
    },
  },
  "autumn-yellow": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "f1fa8c", fontStyle: "italic" },
      { token: "string", foreground: "ffb86c" },
      { token: "keyword", foreground: "ff5555", fontStyle: "bold" },
      { token: "type", foreground: "8be9fd" },
      { token: "class", foreground: "ff79c6" },
      { token: "function", foreground: "50fa7b" },
    ],
    colors: {
      "editor.background": "#2b2b28",
      "editor.foreground": "#f1fa8c",
      "editor.selectionBackground": "#44475a",
      "editorCursor.foreground": "#f1fa8c",
      "editor.lineHighlightBackground": "#3b3b3a",
      "editorLineNumber.foreground": "#918c7c",
    },
  },
  "bluish-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6272a4", fontStyle: "italic" },
      { token: "string", foreground: "8be9fd" },
      { token: "keyword", foreground: "50fa7b", fontStyle: "bold" },
      { token: "number", foreground: "bd93f9" },
      { token: "type", foreground: "ff79c6" },
      { token: "class", foreground: "ffb86c" },
    ],
    colors: {
      "editor.background": "#1a2a40",
      "editor.foreground": "#f8f8f2",
      "editor.selectionBackground": "#264f78",
      "editorCursor.foreground": "#8be9fd",
      "editor.lineHighlightBackground": "#222b41",
      "editorLineNumber.foreground": "#5a7a9a",
    },
  },
  "sunset-glow": {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "comment", foreground: "ffd580" },
    { token: "string", foreground: "e6ac00" },
    { token: "keyword", foreground: "ff7eb6" },
    { token: "number", foreground: "ffcb6b" },
    { token: "type", foreground: "ffa657" },
    { token: "class", foreground: "ffcc00" },
    { token: "function", foreground: "ff6f91" },
    { token: "variable", foreground: "ffa726" },
    { token: "operator", foreground: "ff4081" }
  ],
  colors: {
    "editor.background": "#2d132c",
    "editor.foreground": "#f8e1f4",
    "editor.lineHighlightBackground": "#33132f",
    "editorLineNumber.foreground": "#f5c2e1",
    "editorIndentGuide.background": "#4d2747",
    "editor.selectionBackground": "#6f244f",
    "editor.inactiveSelectionBackground": "#6f244f55"
  }
},
"forest-bloom": {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "comment", foreground: "6a9955" },
    { token: "string", foreground: "b5cea8" },
    { token: "keyword", foreground: "c586c0" },
    { token: "number", foreground: "dcdcaa" },
    { token: "type", foreground: "569cd6" },
    { token: "class", foreground: "4ec9b0" },
    { token: "function", foreground: "dcd6ff" },
    { token: "variable", foreground: "9cdcfe" },
    { token: "operator", foreground: "ce9178" }
  ],
  colors: {
    "editor.background": "#1e272e",
    "editor.foreground": "#dcdcdc",
    "editor.lineHighlightBackground": "#2e3b41",
    "editorLineNumber.foreground": "#4f5b66",
    "editorIndentGuide.background": "#3e4c54",
    "editor.selectionBackground": "#405868",
    "editor.inactiveSelectionBackground": "#40586866"
  }
},
"candy-pop": {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "comment", foreground: "ff79c6" },
    { token: "string", foreground: "50fa7b" },
    { token: "keyword", foreground: "bd93f9" },
    { token: "number", foreground: "ff5555" },
    { token: "type", foreground: "ffb86c" },
    { token: "class", foreground: "8be9fd" },
    { token: "function", foreground: "ff79c6" },
    { token: "variable", foreground: "f1fa8c" },
    { token: "operator", foreground: "ff79c6" }
  ],
  colors: {
    "editor.background": "#282a36",
    "editor.foreground": "#f8f8f2",
    "editor.lineHighlightBackground": "#44475a",
    "editorLineNumber.foreground": "#6272a4",
    "editorIndentGuide.background": "#3b3c4d",
    "editor.selectionBackground": "#44475a",
    "editor.inactiveSelectionBackground": "#44475a66"
  }
},
"aurora-borealis": {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "comment", foreground: "7f848e" },
    { token: "string", foreground: "a8e5a0" },
    { token: "keyword", foreground: "8abcfb" },
    { token: "number", foreground: "ffcc99" },
    { token: "type", foreground: "c0a6f6" },
    { token: "class", foreground: "f5c6ff" },
    { token: "function", foreground: "99d9f6" },
    { token: "variable", foreground: "89b4f8" },
    { token: "operator", foreground: "ff9ac1" }
  ],
  colors: {
    "editor.background": "#0c2233",
    "editor.foreground": "#d3d7e0",
    "editor.lineHighlightBackground": "#12263b",
    "editorLineNumber.foreground": "#4e6173",
    "editorIndentGuide.background": "#1b2f44",
    "editor.selectionBackground": "#294870",
    "editor.inactiveSelectionBackground": "#29487066"
  }
},




};

// Helper function to define themes in Monaco
export const defineMonacoThemes = (monaco: Monaco) => {
  Object.entries(THEME_DEFINITONS).forEach(([themeName, themeData]) => {
    monaco.editor.defineTheme(themeName, {
      base: themeData.base,
      inherit: themeData.inherit,
      rules: themeData.rules.map((rule) => ({
        ...rule,
        foreground: rule.foreground,
      })),
      colors: themeData.colors,
    });
  });
};
