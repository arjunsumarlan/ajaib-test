// To run this code, please visit https://www.jdoodle.com/online-java-compiler
// Copy and paste this code
// And click "Execute" button in buttom of code then the result will show in console

/* A binary tree node has data, pointer to a left, right, and center.
It depend on the requirement of the max data in one node
*/
class Node 
{ 
	char data; 
	Node left, right, center; 

	Node(char item) 
	{ 
		data = item; 
		left = right = center = null; 
	} 
} 

public class BinaryTree 
{ 
	Node root; 
	
	/* Given a binary tree, print out all of its root-to-leaf 
	paths, one per line. Uses a recursive helper to do the work.*/
	void printPaths(Node node) 
	{ 
		char path[] = new char[1000]; 
		printPathsRecur(node, path, 0); 
	} 

	/* Recursive helper function -- given a node, and an array containing 
	the path from the root node up to but not including this node, 
	print out all the root-leaf paths. */
	void printPathsRecur(Node node, char path[], int pathLen) 
	{ 
		if (node == null) 
			return; 

		/* append this node to the path array */
		path[pathLen] = node.data; 
		pathLen++; 

		/* it's a leaf, so print the path that led to here */
		if (node.left == null && node.right == null) 
			printArray(path, pathLen); 
		else
			{ 
			/* otherwise try both subtrees */
			printPathsRecur(node.left, path, pathLen); 
			printPathsRecur(node.right, path, pathLen); 
			printPathsRecur(node.center, path, pathLen); 
		} 
	} 

	/* Utility that prints out an array on a line */
	void printArray(char ints[], int len) 
	{ 
		int i; 
		for (i = 0; i < len; i++) 
			System.out.print(ints[i] + " "); 
		System.out.println(""); 
	} 

	/* Driver program to test all above functions */
	public static void main(String[] args) 
	{ 
		BinaryTree tree = new BinaryTree(); 

		tree.root = new Node('A'); 
		tree.root.left = new Node('B'); 
		tree.root.center = new Node('E');
		tree.root.right = new Node('C'); 
		tree.root.right.left = new Node('D'); 

		/* Print all root-to-leaf paths of the input tree */
		tree.printPaths(tree.root); 

	} 
} 
