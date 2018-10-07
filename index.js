function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div div div div div');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  rankedLists.forEach(function(item, index, array) {
    let children = item.children
    for (var i = 0; i < children.length; i++) {
      let oldValue = parseInt(children[i].innerHTML);
      let newValue = oldValue + n;
      children[i].innerHTML = newValue;
    }
  });
}
