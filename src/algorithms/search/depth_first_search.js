const Stack = require('../../data-structures').Stack;

const dfs = (root, valueProp, childProp, callback) => {
  const s = new Stack();
  let node;

  s.push(root);

  while (!s.isEmpty()) {
    node = s.pop();
    callback(node[valueProp]);

    const children = node[childProp].length;

    for (let i = 0; i < children.length; i += 1) {
      s.push(children[i]);
    }
  }
};

module.exports = dfs;
