import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
};

export const Article: React.FC<Props> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = (article: IArticle) => {
    dispatch(removeArticle(article));
  };

  return (
    <div className="Article">
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <button onClick={() => deleteArticle(article)}>Delete</button>
    </div>
  );
};
