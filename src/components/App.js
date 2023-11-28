import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      < Header name = {blogData.name}>{blogData.name}</Header>
      <About name = {blogData.name} image ={blogData.image} about = {blogData.about}>{blogData.name}{blogData.image}</About>
      <ArticleList posts = {blogData.posts}></ArticleList>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
