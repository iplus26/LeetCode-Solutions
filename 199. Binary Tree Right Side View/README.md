# 199. Binary Tree Right Side View 解题小记

WTF...这道题我连测试用例都没写...就直接一遍过了...

二叉树分为深度优先遍历和广度优先遍历，深度优先中又分为先序、中序、后序三中遍历方式 ([树的遍历](https://en.wikipedia.org/wiki/Tree_traversal))。在这道题中我选择了中序遍历，先访问左子树，再访问根节点，最后访问右子树，这样保证最后加入 view 数组的一定是“右侧可见”的那一个。

然后就过了...就过了...
