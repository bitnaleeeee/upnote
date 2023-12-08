


<br>

## STACK

<img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img alt="SASS" src ="https://img.shields.io/badge/SASS-CC6699.svg?&style=for-the-badge&logo=Sass&logoColor=white"/>


<br>

## 목차

- [구현 사항](#구현사항)
- [주요 기능](#주요기능)

<br>



## 구현사항

- [x] 최소 가로 길이는 '1400px' 이고, 최대 가로 길이는 '1920px' 
- [x] 최초의 화면에서 NOTEBOOKS는 하나도 없는 상태
- [x] 데이터는 LocalStorage에 저장하여 구현
- [x] NOTEBOOKS의 목록을 확인할 수 있음
- [x] NOTEBOOKS를 추가하거나 삭제할 수 있음
- [x] NOTEBOOKS 안에 NOTEBOOKS를 추가할 수 없음
- [x] 텍스트 편집기는 'lexical text editor'를 이용하여 구현
- [x] 텍스트 입력 후 즉시 혹은 일정 시간 후에 입력 사항이 저장
- [x] 메모의 제목이 메모 목록의 가로 길이를 넘어가는 경우 말줌임표(...)로 처리



</br>

</br>

# 주요기능
## lexical text editor 편집기에 입력한 텍스트 즉시 입력 사항 저장 



```javascript
//Main.js

import React from "react";
import { useState, useEffect } from "react";

import App from "../Lexical/App";
import Notebooks from "../Compotnets/Notebooks";
import Memos from "../Compotnets/Memos";
import "./Main.scss";

const Main = () => {
  const [memo, setMemo] = useState([]);

  useEffect(() => {
    const storedMemo = JSON.parse(localStorage.getItem("memo"));
    if (storedMemo) {
      setMemo(storedMemo);
    }
  }, []);

  function addNewMemo() {
    let inputText = JSON.parse(localStorage.getItem("inputText"));
    const newMemo = [...memo, inputText];
    setMemo(newMemo);

    localStorage.setItem("memo", JSON.stringify(newMemo));
  }

  return (
    <div className="upnoteWrap">
      <div className="upnoteIneer">
        <div className="notebookWrap">
          <div className="notebookNav">모든노트</div>
          <p className="basicLabel">- 미분류</p>
          <Notebooks />
        </div>
        <Memos memo={memo} />
        <div className="editorWrap">
          <div className="title">
            에디터
            <button className="memoAdd" type="submit" onClick={addNewMemo}>
              새 노트
            </button>
          </div>

          <App />
        </div>
      </div>
    </div>
  );
};

export default Main;

```
* 새 노트 버튼을 클릭할때마다 `addNewMemo` 함수를 실행시켜 `localStorage`에 저장된 텍스트 입력 값을 `inputText` 변수에 담습니다.
* `newMemo`변수에 배열형태로 입력된 텍스트 값을 담아 `locaslStorage`에 다시 담아줍니다.
* 화면이 렌더링 될때마다 `useEffect`로 새로 담아준 `localStorage` 값을 받아와 입력한 텍스트 값이 저장되어 UI에 보이도록 작성했습니다.

<br>

## 노트북 삭제, 추가 버튼 구현 및 새로고침 시 데이터 유지되도록 작성 
```javascript 
//Notebook.js

import React, { useState, useEffect } from "react";

const Notebooks = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("notebooks"));
    if (storedItems) {
      setItems(storedItems);
    }
  }, []);

  function addNoteBook() {
    const newItems = [...items, `노트북 ${items.length + 1}`];
    setItems(newItems);
    localStorage.setItem("notebooks", JSON.stringify(newItems));
  }

  function removeNoteBook() {
    const updatedList = items.slice(0, -1);
    setItems(updatedList);
    localStorage.setItem("notebooks", JSON.stringify(updatedList));
  }

  return (
    <>
      <div className="notebookLabel">
        <p>여러 노트북</p>
        <button className="notebookAdd" type="submit" onClick={addNoteBook}>
          Add+
        </button>
        <button className="notebookAdd" type="submit" onClick={removeNoteBook}>
          Delete-
        </button>
      </div>
      <ul className="basicLabel">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Notebooks;


```

* 노트북 추가 버튼을 클릭할때마다 `addNoteBook` 함수가 실행되어 새로운 아이템을 전개연산자로 기존 데이터와 함께 넣어 `localStorage`에 저장하여 새로고침시 `useState`가 빈값으로 렌더링 되지 않도록 작성하였습니다.
* 삭제 버튼을 클릭할때마다 `removeNoteBook` 함수가 호출되어 마지막 인덱스 값을 삭제하여 `useState`에 담아 데이터를 재정렬해줍니다. 마찬가지로 `localStorage`에 담아 새로고침시 데이터가 유지되도록 작성했습니다.
* `state`에 저장되어 있는 데이터를 `map`함수를 사용하여 각 `index`만큼 li 태그에 넣어주었습니다.

<br>

## 메모 작성시 자동저장 및 새로고침시 텍스트 유지 

<br>

```javascript
// Memos.js

import React from "react";

const Memos = (props) => {
  const { memo } = props;

  return (
    <div className="memoWrap">
      <div className="title">메모</div>
      <ul>
        {memo.map((item, idx) =>
          item.length ? <li key={idx}>{item} </li> : null
        )}
      </ul>
    </div>
  );
};

export default Memos;

```

<br>

* `props`로 상위 컴포넌트에서 `data`를 받아와 `map`함수로 메모가 정렬되도록 작성하였습니다.
*  만약 입력된 텍스트값이 없을때 빈값은 추가되지 않도록 작성하였습니다


<br>

# 프로젝트의실행


```
$ npm install
```

```
$ npm start
```

