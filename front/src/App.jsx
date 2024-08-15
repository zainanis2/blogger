import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
      <a className='logo' href="">MyBlog</a>

        <nav>
        <a href="">Login</a>
        <a href="">Register</a>
        </nav>
        
      </header>
      <div className="post">
        <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1069786222.jpg" alt="" />
        </div>
        <div className="texts">
        <h2>lorem</h2>
        <p className="info">
          <a href="" className="author">zain anis</a>
          <time datetime="">8/12/2024</time>
        </p>
        <p className='summary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minus, blanditiis nam perspiciatis vel sed vero odit qui dignissimos magni quos quaerat neque! Dolorum explicabo magnam nihil, deleniti repellat omnis?</p>
      
        </div>
        </div>
        

    </main>
  )
}

export default App
