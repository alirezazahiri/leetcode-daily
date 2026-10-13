type Fn = (...params: any) => any;

class TrieNode {
  hasResult?: boolean;
  result?: any;
  children: Map<any, TrieNode>;

  constructor() {
    this.children = new Map<any, TrieNode>();
  }

  next(arg: any): TrieNode {
    if (!this.children.has(arg)) {
      this.children.set(arg, new TrieNode());
    }
    return this.children.get(arg)!;
  }
}

function memoize(fn: Fn): Fn {
  const root = new TrieNode();

  return function (...args: any[]): any {
    let currentNode = root;
    const n = args.length;

    if (n === 0) {
      if (currentNode.hasResult) {
        return currentNode.result;
      }
      const result = fn();
      currentNode.result = result;
      currentNode.hasResult = true;
      return result;
    }

    for (let i = 0; i < n - 1; i++) {
      currentNode = currentNode.next(args[i]);
    }

    const lastArg = args[n - 1];

    if (currentNode.children.has(lastArg)) {
      const lastNode = currentNode.children.get(lastArg)!;
      if (lastNode.hasResult) {
        return lastNode.result;
      }
    }

    const result = fn(...args);
    const lastNode = currentNode.next(lastArg);
    lastNode.result = result;
    lastNode.hasResult = true;
    return result;
  };
}
