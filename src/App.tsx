import React, { Dispatch, useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addArticle, removeArticle } from "./store/actionCreators";
import { AddArticle } from "./components/AddArticle";
import { Article } from "./components/Article";
// import { useHistory } from 'react-router-dom';
// import WithoutCallBack from "./components/WithoutCallBackFuc";
// import WithCallBack from "./components/WithCallBackFuc";

const App = (props: any) => {
  const articles = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );
  // const history: any = useHistory() 

  console.log(props.location);
  console.log(props.match);
  console.log(props.history);

  const dispatch: Dispatch<any> = useDispatch();

//   useEffect(() => {
//     return history.listen((location: any) => { 
//        console.log(`You changed the page to: ${location.pathname}`) 
//     }) 
//  },[history]) 

  // const saveArticle = (article: any) => {
  //   dispatch(addArticle(article));
  // }

  const saveArticle = useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

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

        {/* <WithoutCallBack />
        <hr />
        <WithCallBack /> */}
      </main>
    </div>
  );
};

export default App;

