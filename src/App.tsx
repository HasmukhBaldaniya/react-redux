import React, { Dispatch, useCallback, useContext } from "react";
import { TodosContext } from "./TodosContext";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addArticle, removeArticle } from "./store/actionCreators";
import { AddArticle } from "./components/AddArticle";
import { Article } from "./components/Article";
import WithoutCallBack from "./components/WithoutCallBackFuc";
import WithCallBack from "./components/WithCallBackFuc";

const App = () => {
  const { todos, addTodo } = useContext(TodosContext);
  const dispatch: Dispatch<any> = useDispatch();

  const articles = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const saveArticle = useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <div className="App">
      <h1>To do list</h1>
      <div>
        {todos.map((todo, i) => (
          <div key={i}>{todo}</div>
        ))}
      </div>
      <button onClick={() => addTodo("new todo")}>Add Todo</button>

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

        {/* <WithoutCallBack />
        <hr />
        <WithCallBack /> */}
      </main>
    </div>
  );
};

export default App;
