import React, { Dispatch } from 'react';
import logo from './logo.svg';
import './App.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addArticle, removeArticle } from './store/actionCreators';
import { AddArticle } from './components/AddArticle';
import { Article } from './components/Article';

function App() {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )
  
  return (
    <div className="App">
       <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
    </div>
  );
}

export default App;
