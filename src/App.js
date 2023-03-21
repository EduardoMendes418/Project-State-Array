import './App.css';
import React from 'react';

//Hard coding
class App extends React.Component {
    state = {
      posts: [
        {
          id: 1,
          title: 'teste 01',
          body: 'o corpo 2'
        },
        {
          id: 2,
          title: 'teste 02',
          body: 'o corpo 3'
        },
        {
          id: 3,
          title: 'teste 03',
          body: 'o corpo 3'
        },
      ]
  };


  render() {

    const { posts } = this.state;

    return (
          <div className="App">
            {posts.map(post => (
              <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              </div>
            ))}
          </div>
        );
  }
}


export default App;
