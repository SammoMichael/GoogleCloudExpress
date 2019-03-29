const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:Tripitaka3@cluster0-vuo9k.mongodb.net/?retryWrites=true"
const client = new MongoClient(uri, {
    useNewUrlParser: true
});

var JavaScript1 = `<pre><code>var BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var validateBST = function(bt) {
  // traverse the tree depth first, while
  // using a array with stack like behavior to check each node's validity
  // * assume values do not repeat
  var validateRecurse = function(currBt, stackArr) {
    for (var i = 0; i < stackArr.length; i++) {
      if (stackArr[i].side === 'left' && currBt.value > stackArr[i].node.value) {
        return false;
      } else if (stackArr[i].side === 'right' && currBt.value < stackArr[i].node.value) {
        return false;
      }
    }
    var left = currBt.left === null ? true : validateRecurse(currBt.left, stackArr.concat([{ node:currBt, side:'left'}]));
    var right = currBt.right === null ? true : validateRecurse(currBt.right, stackArr.concat([{ node:currBt, side:'right'}]));
    return true && left && right;
  };
  return validateRecurse(bt, []);
};
</code></pre>`
var JavaScript2 = `<pre><code>var BinaryTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
};

BinaryTree.prototype.isAncestor = function(node2) {
  if (this === node2) {
    return true;
  } else {
    var answer1 = false;
    var answer2 = false;
    if (this.left !== null) {
      answer1 = this.left.isAncestor(node2);
    }
    if (this.right !== null) {
      answer2 = this.right.isAncestor(node2);
    }
    return false || answer1 || answer2;
  }
};

var firstCommonAncestor = function(node1, node2) {
  var currNode = node1;
  while (!currNode.isAncestor(node2)) {
    if (currNode === null) {
      throw Error;
    } else {
      currNode = currNode.parent;
    }
  }
  return currNode.value;
};
</code></pre>`
var JavaScript3 = `<pre><code>var BST = require('./../util/BST');

var checkBalanced = function(bst) {
  // case where left is null and right is not null
  if (bst.left === null && bst.right !== null) {
    if (bst.right.left !== null || bst.right.right !== null) {
      return false;
    }
  }
  // case where left is not null and right is null
  if (bst.left !== null && bst.right === null) {
    if (bst.left.left !== null || bst.left.right !== null) {
      return false;
    }
  }
  // initialize answer variable as true
  var answer = true;
  //  if bst.left is not null, recursively call checkBalanced on bst.left
  if (bst.left !== null) {
    answer = answer && checkBalanced(bst.left);
  }
  //  if bst.left is not null, recursively call checkBalanced on bst.left
  if (bst.right !== null) {
    answer = answer && checkBalanced(bst.right);
  }
  // return answer
  return answer;
};</code></pre>`

var JavaScript4 = `<pre><code>var BST = require('./../util/BST');

var bstSequences = function(bst) {
  var sequences = [];
  var recurse = function(nodes, travelled) {
    var noChild = true;
    nodes.forEach((node) => {
      if (node.left !== null && travelled[node.left.value] === undefined) {
        noChild = false;
        travelled[node.left.value] = true;
        recurse(nodes.concat([node.left]), travelled);
        delete travelled[node.left.value];
      }
      if (node.right !== null && travelled[node.right.value] === undefined) {
        noChild = false;
        travelled[node.right.value] = true;
        recurse(nodes.concat([node.right]), travelled);
        delete travelled[node.right.value];
      }
    });
    if (noChild) {
      sequences.push(nodes.map(node => node.value));
    }
  };
  var startTravelled = {};
  startTravelled[bst.value] = true;
  recurse([bst], startTravelled);
  return sequences;
};
</code></pre>`

var JavaScript5 = `<pre><code>var Stack = require('./../util/Stack');

var sortStack = function(stack) {
  var tempStack = new Stack();
  var currMin = Infinity;
  var stackDepth = 0;
  
  while (!stack.isEmpty()) {
    if (stack.peek() <= currMin) {
      if (currMin !== Infinity) {
        tempStack.push(currMin);      
      }
      currMin = stack.pop();
    } else {
      tempStack.push(stack.pop());
    }
    stackDepth++;
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  tempStack.push(currMin);
  currMin = Infinity;
  stackDepth--;

  while (stackDepth > 0) {

    while (!stack.isEmpty()) {
      if (stack.peek() <= currMin) {
        if (currMin !== Infinity) {
          tempStack.push(currMin);
        }
        currMin = stack.pop();
      } else {
        tempStack.push(stack.pop());
      }
    }

    for (var i = 0; i < stackDepth - 1; i++) {
      stack.push(tempStack.pop());
    }

    tempStack.push(currMin);
    currMin = Infinity;
    stackDepth--;
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  return stack;
};</code></pre>`

var JavaScript6 = `<pre><code>var LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

/* FUNCTIONS */
var checkDups = function(head, node) {
  var currNode = head;
  while (currNode !== node) {
    if (currNode.value === node.value) {
      return true;
    }
    currNode = currNode.next;
  }
  return false;
};

var printLinkedList = function(head) {
  var node = head;
  console.log('start of linked list');
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
  console.log('end of linked list');
};

var removeDups = function(head) {
  var node = head;
  while (node !== null) {
    if (node.next !== null && checkDups(head, node.next)) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return head;
};
</code></pre>`

var JavaScript7 = `<pre><code>var LinkedList = require('./../util/LinkedList');

var palindrome = function(head) {
  var mid = head;
  var end = head;
  var isEven = true;
  var firstHalf = null;
  var frontNode = null;

  while (end.next !== null) {
    isEven = true;
    if (firstHalf === null) {
      firstHalf = new LinkedList(mid.value);
    } else {
      frontNode = firstHalf;
      firstHalf = new LinkedList(mid.value);
      firstHalf.next = frontNode;
    }
    mid = mid.next;
    end = end.next;
    if (end.next !== null) {
      end = end.next;
      isEven = false;
    }
  }

  if (!isEven) {
    mid = mid.next;
  }

  while(mid !== null) {
    // console.log(mid.value, firstHalf.value);
    if (mid.value !== firstHalf.value) {
      return false;
    }
    mid = mid.next;
    if (firstHalf!== null) {
      firstHalf = firstHalf.next;
    }
  }
  return true;

};</code></pre>`

var JavaScript8 = `<pre><code>var changeChar = function(string, position, char) { // note: will not work for emoji
  var answer = string.split('');
  answer[position] = char;
  return answer.join('');
};

var bitwiseOp = function(binaryString, n, callback) {
  var base10 = parseInt(binaryString, 2);
  base10 = callback(base10);
  var base2 = base10.toString(2);
  if (base2.length <= n) {
    var front = '';
    for (var i = base2.length; i < n; i++) {
      front += '0';
    }
    return front + base2;
  } else {
    return base2.slice(base2.length - n);
  }
};

var leftShift = function(binaryString, n) {
  return bitwiseOp(binaryString, n, (number) => number << 1);
};

var rightShift = function(binaryString, n) {
  return bitwiseOp(binaryString, n, (number) => number >>> 1);
};

var nqueens = function(n) {
  var board = [];
  var checker = '';
  var answers = [];
  
  for (var i = 0; i < n; i++) {
    board.push(-1);
    checker += '0';
  }

  var recurse = function(currentBoard, center, leftDiag, rightDiag, currRow) {
    if (currRow === n) {
      answers.push(currentBoard);
    }
    for (var i = 0; i < n; i++) {
      if (center.charAt(i) === '0' && leftDiag.charAt(i) === '0' && rightDiag.charAt(i) === '0') {
        currentBoard[i] = currRow;
        recurse(currentBoard, changeChar(center, i, '1'), leftShift(changeChar(leftDiag, i, '1'), n), rightShift(changeChar(rightDiag, i, '1'), n), currRow + 1);
        currentBoard[i] = -1; // untoggle board to save on space complexity for arrays per recursive step
      }
    }
  };
  recurse(board, checker, checker, checker, 0);
  return answers;
};</code></pre>`

var JavaScript9 = `<pre><code>var rotateMatrix = function(matrix) {
  var edge = matrix.length - 1;

  var movePixels = function(row, col) {
    // starts at m[row][col]
    // moves to m[col][edge - row]
    var fromRow;
    var fromCol;
    var fromPixel;

    // first transformation
    var toRow = row; // 0
    var toCol = col; // 1
    var toPixel = matrix[row][col];

    // Do rotational transformation 4 times
    for (var i = 0; i < 4; i++) {
      fromRow = toRow;
      fromCol = toCol;
      toRow = fromCol;
      toCol = edge - fromRow;

      fromPixel = toPixel;
      toPixel = matrix[toRow][toCol];
      matrix[toRow][toCol] = fromPixel;
    }
  };

  for (var i = 0; i < matrix.length / 2; i++) {
    for (var j = i; j < edge - i; j++) {
      console.log(i, j);
      movePixels(i, j);
    }
  }
};
</code></pre>`

var JavaScript10 = `<pre><code>const findStartEnd = (array, front, back) => {
  front = front || 0;
  back = back || array.length;
  if (array[front] < array[back - 1]) {
    return {
      start: front,
      end: back - 1
    };
  } else {
    let mid = Math.floor( (back - front) / 2);
    if (array[mid - 1] > array[mid]) {
      return {
        start: mid,
        end: mid - 1
      };
    } else {
      if (array[front] < array[mid]) {
        return findStartEnd(array, mid, back);
      } else {
        return findStartEnd(array, front, mid);
      }
    }
  }
};

const searchInRotatedArray = (array, value, start, end) => {
  if (array === undefined) {
    return 'where is the array?';
  }
  if (start === undefined && end === undefined) {
    const startEnd = findStartEnd(array);
    start = startEnd.start;
    end = startEnd.end;
  }
  let mid;
  if (start === end) {
    return array[start] === value ? start : -1;
  } else if (start > end) {
    const half = Math.floor((array.length - (start - end - 1)) / 2);
    mid = (start + half) % array.length;
  } else {
    mid = start + Math.floor((end - start) / 2);
  }
  if (array[mid] === value) {
    return mid;
  } else {
    if (value < array[mid]) {
      return searchInRotatedArray(array, value, start, mid);
    } else {
      if (start === mid) {
        return searchInRotatedArray(array, value, end, end); // does end check if start === mid
      } else {
        return searchInRotatedArray(array, value, mid, end);
      }
    }
  }
};
</code></pre>`


Ruby1 = `<pre><code>def palindrome_permutation?(str)
  chars = Hash.new(0)
  str_length = 0

  str.length.times do |i|
    if str[i].match(/\w/)
      chars[str[i].downcase] += 1
      str_length += 1
    end
  end

  odd_occuring_letters = chars.select { |_v, v| v.odd? }.length

  if str_length.odd?
    return odd_occuring_letters == 1 ? true : false
  else
    return odd_occuring_letters == 0 ? true : false
  end
end</code></pre>`

Ruby2 = `<pre><code>def zero_matrix(matrix)
  m = matrix.length
  n = matrix[0].length
  null_rows = {}
  null_cols = {}

  # find all rows and columns containing 0
  m.times do |r|
    n.times do |c|
      if matrix[r][c] == 0
        null_rows[r] = true
        null_cols[c] = true
      end
    end
  end

  # set rows to 0
  null_rows.each { |k, _v| n.times { |c| matrix[k][c] = 0 }}

  # set cols to 0
  null_cols.each { |k, _v| m.times { |r| matrix[r][k] = 0 }}

  return matrix
end</code></pre>`

Ruby3 = `<pre><code>Node = Struct.new(:value, :left, :right)

def array_to_bst(array, l, r)
  return nil if l > r
  mid = (l + r)/2
  node = Node.new(array[mid])
  node.left = array_to_bst(array, l, mid - 1)
  node.right = array_to_bst(array, mid + 1, r)
  node
end

# recursion
def print_bst(node)
  return unless node
  print node.value
  print_bst(node.left)
  print_bst(node.right)
end

# bfs
def stringify(node)
  queue = []
  queue << node
  str = ""
  while !queue.empty?
    current = queue.shift
    str += current.value.to_s
    queue << current.left if current.left
    queue << current.right if current.right
  end
  return str
end</code></pre>`

Ruby4 = `<pre><code>def find_route(adj, i, f)
  return false unless adj[i] && adj[f]
  return true if i == f
  bfs_queue = []
  visited = {}
  visited[i] = true
  bfs_queue << adj[i].first

  while !bfs_queue.empty?
    current = bfs_queue.shift
    return true if current == f
    visited[current] ? break : visited[current] = true
    adj[current].each { |n| bfs_queue << n }
  end

  return false
end</code></pre>`

Ruby5 = `<pre><code>Node = Struct.new(:value, :left, :right, :depth, :parent)

def ancestor1(n1, n2)
  # get both nodes to the same depth/level by movin up the deeper one
  delta = n1.depth - n2.depth
  first = delta > 0 ? n2 : n1
  second = delta > 0 ? n1 : n2
  delta.abs.times { second = second.parent }

  # keep checking parents for both nodes
  # while going up
  while first != second && first && second
    first = first.parent
    second = second.parent
  end

  # return the ancestor or nil if none
  return (first.nil? || second.nil?) ? nil : first
end


# without Parent references

def ancestor2(root, n1, n2)
  return root if root.nil? || root == n1 || root == n2

  n1_left = covers(root.left, n1)
  n2_left = covers(root.left, n2)
  # return root if both nodes direct children of root
  return root if n1_left != n2_left
  # else if both nodes are on the same side of root
  # swap to that side and recurse
  child_side = n1_left ? root.left : root.right
  return ancestor2(child_side, n1, n2)
end

# returns true of false if root or n covers each other
# i.e. if either is a descendent of the other
def covers(root, n)
  return false if root.nil?
  return true if root == n
  return covers(root.left, n) || covers(root.right, n)
end</code></pre>`
Ruby6 = `<pre><code>Node = Struct.new(:v, :l, :r, :parent, :d)

# utility method to create BST
def array_to_bst(array, l, r, parent=nil, d=1)
  return if l > r
  mid = (l + r)/2
  node = Node.new(array[mid], nil, nil, nil, d)
  node.l = array_to_bst(array, l, mid - 1, node, d + 1)
  node.r = array_to_bst(array, mid + 1, r, node, d + 1)
  node.parent = parent
  node
end

# implemented via BFS with queue
# used node depth to organize nodes by depth
# then generate the arrays based on permutation of those sets
def bst_sequences(node)
  depth = Hash.new { |h, k| h[k] = [] }
  q = []
  q << node

  # use BFS to group nodes by depth
  while !q.empty?
    current = q.shift
    depth[current.d] << current.v
    q << current.l if current.l
    q << current.r if current.r
  end
  depth = depth.map { |k, v| depth[k] = v.permutation.to_a }
  # return all the permutations of nodes
  solution = depth.first.first.product(*(depth[1..-1]))
  solution.map! { |x| x.flatten}
end</code></pre>`
Ruby7 = `<pre><code>Node = Struct.new(:value, :next, :prev, :min)

# Stack implemented with a linked list
class Stack
  attr_reader :size, :min

  def initialize
    @size = 0
    @head = nil
    @tail = nil
  end

  def push(value)
    if @tail
      @tail.next = Node.new(value, nil, @tail, [@tail.min, value].min)
      @tail = @tail.next
      @size += 1
    else
      @head = Node.new(value, nil, nil, value)
      @tail = @head
      @size += 1
    end
  end

  def pop
    if @size == 1
      pop_val = @tail.value
      @head = nil
      @tail = nil
      return pop_val
    elsif @size > 1
      pop_val = @tail.value
      @tail = @tail.prev
      @tail.next = nil
      return pop_val
    end
    return nil
  end

  def min
    return @tail ? @tail.min : nil
  end

end</code></pre>`
Ruby8 = `<pre><code>class SetOfStacks
  def initialize(threshold=10)
    @threshold = threshold
    # the array of stacks
    @s = []
  end

  def push(value)
    if @s.empty?
      # add a stack if there are none
      @s << [value]
    else
      # then add plate/value depending on threshold
      @s[-1].length < @threshold ? @s[-1] << value : @s << [value]
    end
  end

  def pop
    if @s.empty?
      return nil
    else
      last_stack = @s.length - 1
      pop_value = @s[last_stack].pop
      @s.delete_at(last_stack) if @s[last_stack].empty?
      return pop_value
    end
  end

  def pop_at(stack_index)
    if stack_index >= @s.length + 1
      return nil
    else
      stack = stack_index - 1
      pop_value = @s[stack].pop
      @s.delete_at(stack) if @s[stack].empty?
      return pop_value
    end
  end
end</code></pre>`
Ruby9 = `<pre><code>def build_order(projects, dependencies)
  # build hash for project requirements, and for what each project can build
  req = Hash.new { |h, k| h[k] = [] }
  can = Hash.new { |h, k| h[k] = [] }
  dependencies.each do |x|
    req[x[0]] << x[1]
    can[x[1]] << x[0]
  end

  # find all projects with NO dependencies, shove it in an array
  non_dep = projects.select { |proj| req[proj].empty? }
  # build is the build order (this also keeps track of "visited" nodes)
  build = []

  # bfs strategy
  queue = non_dep

  while !queue.empty?
    project = queue.shift
    # this checks for cycles
    break if build.include? project
    # add project to build order IFF all it's depencies are already built
    # i.e. already in the build order
    build << project if req[project].all? { |x| build.include? x }
    # then all projects that can be built off this one is added to the queue
    can[project].each { |proj| queue << proj }
  end

  # build is only valid if all projects can be built!
  if build.length == projects.length
    return build
  else
    raise ArgumentError, "No valid builds"
  end
end</code></pre>`
Ruby10 = `<pre><code>Node = Struct.new(:value, :left, :right, :depth, :parent)

def ancestor1(n1, n2)
  # get both nodes to the same depth/level by movin up the deeper one
  delta = n1.depth - n2.depth
  first = delta > 0 ? n2 : n1
  second = delta > 0 ? n1 : n2
  delta.abs.times { second = second.parent }

  # keep checking parents for both nodes
  # while going up
  while first != second && first && second
    first = first.parent
    second = second.parent
  end

  # return the ancestor or nil if none
  return (first.nil? || second.nil?) ? nil : first
end


# without Parent references

def ancestor2(root, n1, n2)
  return root if root.nil? || root == n1 || root == n2

  n1_left = covers(root.left, n1)
  n2_left = covers(root.left, n2)
  # return root if both nodes direct children of root
  return root if n1_left != n2_left
  # else if both nodes are on the same side of root
  # swap to that side and recurse
  child_side = n1_left ? root.left : root.right
  return ancestor2(child_side, n1, n2)
end

# returns true of false if root or n covers each other
# i.e. if either is a descendent of the other
def covers(root, n)
  return false if root.nil?
  return true if root == n
  return covers(root.left, n) || covers(root.right, n)
end</code></pre>`

Python1 = `<pre><code>import copy
import sys
import random


def replace_and_remove(size, s):
    # Forward iteration: remove 'b's and count the number of 'a's.
    write_idx, a_count = 0, 0
    for i in range(size):
        if s[i] != 'b':
            s[write_idx] = s[i]
            write_idx += 1
        if s[i] == 'a':
            a_count += 1

    # Backward iteration: replace 'a's with 'dd's starting from the end.
    cur_idx = write_idx - 1
    write_idx += a_count - 1
    final_size = write_idx + 1
    while cur_idx >= 0:
        if s[cur_idx] == 'a':
            s[write_idx - 1:write_idx + 1] = 'dd'
            write_idx -= 2
        else:
            s[write_idx] = s[cur_idx]
            write_idx -= 1
        cur_idx -= 1
    return final_size</code></pre>`
Python2 = `<pre><code>
import sys
import random
import collections

WHITE, BLACK = range(2)

Coordinate = collections.namedtuple('Coordinate', ('x', 'y'))


def search_maze(maze, s, e):
    # Perform DFS to find a feasible path.
    def search_maze_helper(cur):
        # Checks cur is within maze and is a white pixel.
        if not (0 <= cur.x < len(maze) and 0 <= cur.y < len(maze[cur.x]) and
                maze[cur.x][cur.y] != WHITE):
            return False
        path.append(cur)
        maze[cur.x][cur.y] = BLACK
        if cur == e:
            return True

        if any(
                map(search_maze_helper, (Coordinate(cur.x - 1, y), Coordinate(
                    cur.x + 1, y), Coordinate(cur.x, y - 1), Coordinate(cur.x, y
                                                                        + 1)))):
            return True
        del path[-1]
        return False

    path = []
    if not search_maze_helper(s):
        return []  # No path between s and e.
    return path</code></pre>`

Python3 = `<pre><code>import heapq


# @include
class Stack:

    def __init__(self):
        self._timestamp = 0
        self._max_heap = []

    def push(self, x):
        heapq.heappush(self._max_heap, (-self._timestamp, x))
        self._timestamp += 1

    def pop(self):
        if not self._max_heap:
            raise IndexError('empty stack')
        return heapq.heappop(self._max_heap)[1]

    def peek(self):
        return self._max_heap[0][1]
# @exclude


class Queue:

    def __init__(self):
        self._timestamp = 0
        self._min_heap = []

    def enqueue(self, x):
        heapq.heappush(self._min_heap, (self._timestamp, x))
        self._timestamp += 1

    def dequeue(self):
        if not self._min_heap:
            raise IndexError('empty queue')
        return heapq.heappop(self._min_heap)[1]

    def head(self):
        return self._min_heap[0][1]</code></pre>`

Python4 = `<pre><code>import sys
import random
from linked_list_prototype import ListNode
from reverse_linked_list_iterative import reverse_linked_list


def zipping_linked_list(L):
    if not L or not L.next:
        return L

    # Finds the second half of L.
    slow = fast = L
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next

    first_half_head = L
    second_half_head = slow.next
    slow.next = None  # Splits the list into two lists.

    second_half_head = reverse_linked_list(second_half_head)

    # Interleave the first half and the reversed of the second half.
    first_half_iter, second_half_iter = first_half_head, second_half_head
    while second_half_iter:
        second_half_iter.next, first_half_iter.next, second_half_iter = (
            first_half_iter.next, second_half_iter, second_half_iter.next)
        first_half_iter = first_half_iter.next.next
    return first_half_head</code></pre>`

Python5 = `<pre><code>from binary_tree_prototype import BinaryTreeNode


def is_symmetric(tree):
    def check_symmetric(subtree_0, subtree_1):
        if not subtree_0 and not subtree_1:
            return True
        elif subtree_0 and subtree_1:
            return (subtree_0.data == subtree_1.data and check_symmetric(
                subtree_0.left, subtree_1.right) and check_symmetric(
                    subtree_0.right, subtree_1.left))
        # One subtree is empty, and the other is not.
        return False

    return not tree or check_symmetric(tree.left, tree.right)</code></pre>`

Python6 = `<pre><code>import sys


def get_valid_ip_address(s):
    def is_valid_part(s):
        # '00', '000', '01', etc. are not valid, but '0' is valid.
        return len(s) == 1 or (s[0] != '0' and int(s) <= 255)

    result, parts = [], [None] * 4
    for i in range(1, min(4, len(s))):
        parts[0] = s[:i]
        if is_valid_part(parts[0]):
            for j in range(1, min(len(s) - i, 4)):
                parts[1] = s[i:i + j]
                if is_valid_part(parts[1]):
                    for k in range(1, min(len(s) - i - j, 4)):
                        parts[2], parts[3] = s[i + j:i + j + k], s[i + j + k:]
                        if is_valid_part(parts[2]) and is_valid_part(parts[3]):
                            result.append('.'.join(parts))
    return result</code></pre>`

Python7 = `<pre><code>101 lines (85 sloc)  2.91 KB
    
import sys
import collections
import random
from smallest_subarray_covering_set_stream import find_smallest_subarray_covering_subset
import string


def find_smallest_subarray_covering_set(paragraph, keywords):
    keywords_to_cover = collections.Counter(keywords)
    result = (-1, -1)
    remaining_to_cover = len(keywords)
    left = 0
    for right, p in enumerate(paragraph):
        if p in keywords:
            keywords_to_cover[p] -= 1
            if keywords_to_cover[p] >= 0:
                remaining_to_cover -= 1

        # Keeps advancing left until keywords_to_cover does not contain all
        # keywords.
        while remaining_to_cover == 0:
            if result == (-1, -1) or right - left < result[1] - result[0]:
                result = (left, right)
            pl = paragraph[left]
            if pl in keywords:
                keywords_to_cover[pl] += 1
                if keywords_to_cover[pl] > 0:
                    remaining_to_cover += 1
            left += 1
    return result</code></pre>`

Python8 = `<pre><code>import sys
import random

num_steps = 0


def compute_tower_hanoi(num_rings):
    def compute_tower_hanoi_steps(num_rings_to_move, from_peg, to_peg, use_peg):
        global num_steps
        if num_rings_to_move > 0:
            compute_tower_hanoi_steps(
                num_rings_to_move - 1, from_peg, use_peg, to_peg)
            pegs[to_peg].append(pegs[from_peg].pop())
            print('Move from peg', from_peg, 'to peg', to_peg)
            num_steps += 1
            compute_tower_hanoi_steps(
                num_rings_to_move - 1, use_peg, to_peg, from_peg)

    NUM_PEGS = 3
    pegs = [list(reversed(range(1, num_rings + 1)))] + [[]
                                                        for _ in range(1, NUM_PEGS)]
    compute_tower_hanoi_steps(num_rings, 0, 1, 2)</code></pre>`

Python9 = `<pre><code>import itertools
import sys
import random


def has_two_sum(A, t):
    i, j = 0, len(A) - 1

    while i <= j:
        if A[i] + A[j] == t:
            return True
        elif A[i] + A[j] < t:
            i += 1
        else:  # A[i] + A[j] > t.
            j -= 1
    return False</code></pre>`

Python10 = `<pre><code>def is_palindrome(s):
    # i moves forward, and j moves backward.
    i, j = 0, len(s) - 1
    while i < j:
        # i and j both skip non-alphanumeric characters.
        while not s[i].isalnum() and i < j:
            i += 1
        while not s[j].isalnum() and i < j:
            j -= 1
        if s[i].lower() != s[j].lower():
            return False
        i, j = i + 1, j - 1
    return True


# Use O(n) additional space by storing another filtered string.
def is_palindrome_pythonic(s):
    ss = [c.lower() for c in s if c.isalnum()]
    return ss == ss[::-1]


def main():
    assert is_palindrome('A man, a plan, a canal: Panama')
    assert not is_palindrome('race a car')
    assert is_palindrome('Able was I, ere I saw Elba!')
    assert not is_palindrome('Ray a Ray')
    assert is_palindrome('')
    assert is_palindrome_pythonic('A man, a plan, a canal: Panama')
    assert not is_palindrome_pythonic('race a car')
    assert is_palindrome_pythonic('Able was I, ere I saw Elba!')
    assert not is_palindrome_pythonic('Ray a Ray')
    assert is_palindrome_pythonic('')</code></pre>`

documents = [ 
    { JavaScript1 },
    { JavaScript2 },
    { JavaScript3 },
    { JavaScript4 },
    { JavaScript5 },
    { JavaScript6 },
    { JavaScript7 },
    { JavaScript8 },
    { JavaScript9 },
    { JavaScript10 },
    { Python1 },
    { Python2 },
    { Python3 },
    { Python4 },
    { Python5 },
    { Python6 },
    { Python7 },
    { Python8 },
    { Python9 },
    { Python10 },
    { Ruby1 },
    { Ruby2 },
    { Ruby3 },
    { Ruby4 },
    { Ruby5 },
    { Ruby6 },
    { Ruby7 },
    { Ruby8 },
    { Ruby9 },
    { Ruby10 },
]

client.connect(err => {
    const collection = client.db("6figures").collection("prompts");
    console.log(collection, client)
    collection.drop().then(result => {
        console.log(`Successfully dropped: ${result}`)
    })
    .catch(err => console.error(`Failed to drop collection: ${{err}}`))
    collection.insertMany(documents).then(result => {
            console.log(`Successfully inserted ${result.insertedIds.length} items!`);
            return result
        })
        .catch(err => console.error(`Failed to insert documents: ${err}`))
    client.close();
})