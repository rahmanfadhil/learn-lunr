const lunr = require("lunr");

const posts = [
  {
    id: "1",
    title: "What is JavaScript?",
    description:
      "JavaScript is a high-level, object-oriented programming language based on the ECMAScript specification."
  },
  {
    id: "2",
    title: "What is Java?",
    description:
      "Java is a cross-platform object-oriented programming language which at first developed by the Sun Microsystems."
  },
  {
    id: "3",
    title: "What is React?",
    description:
      "React is a popular JavaScript library which heavily used to build single-page applications."
  }
]

const idx = lunr(function() {
  this.field("title");
  this.field("description");

  for (let i = 0; i < posts.length; i++) {
    this.add(posts[i])
  }
});

// const result = idx.search('java')
// console.log(result)

// const result = idx.search('object oriented language')
// console.log(result)

function searchPosts(query) {
  const result = idx.search(query)

  return result.map(item => {
    return posts.find(post => item.ref === post.id)
  })
}

const result = searchPosts('object oriented language')
console.log(result);
