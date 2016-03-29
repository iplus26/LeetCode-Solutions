# 114. Flatten Binary Tree to Linked List

Check out [https://leetcode.com/problems/flatten-binary-tree-to-linked-list/][1]

## Solution

看了 **Hints** (If you notice carefully in the flattened tree, each node's right child points to the next node of a pre-order traversal) 之后就很简单了，就是一个先序遍历，然后把节点连一下。

使用 JavaScript 实现这道题需要熟悉的是引用类型的使用。

然后把我困了好几个小时的竟然是原来 `!root || !root.val` 这句废话把 `root.val === 0` 这种情况干掉了，我的天呐...

[1]:	https://leetcode.com/problems/flatten-binary-tree-to-linked-list/