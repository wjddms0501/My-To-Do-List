import React, { useState } from "react";
import "./App.css";
import CustomButton from "./components/Custombutton";
import User from "./components/User";

//버튼 Component
//이렇게 Component를 분리해주면 추가하기는 초록, 삭제는 빨강처럼
//간단히 props에 색을 넘겨주는 것만으로도 버튼의 색설정을 할 수 있다.
/*function CustomButton(props){
  const {color,onClick,children} = props //구조 분해 할당
  if(color){
    return <button
    style = {{backgroundColor:color, color:"white"}} 
    onClick = {onClick}>{children}</button>
  }
  return <button onClick = {onClick}>{children}</button>
}*/
//만약에 props에 color로 받아온 값이 있으면 color를 적용한 버튼을 만들어주고
//그게 아니면 그냥 버튼을 줄 거다.
//무조건 color가 있는 버튼을 만들어주고 싶다면 if문을 지우면된다.

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, title: "리액트 공부하기", todo: "공부하자" },
    { id: 2, title: "리액트 쌈싸먹기", todo: "쌈싸먹자" },
    { id: 3, title: "리액트 예습하기", todo: "예습하자" },
    { id: 4, title: "리액트 복습하기", todo: "복습하자" },
  ]);
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      title: title,
      todo: todo,
    };
    setUsers([...users, newUser]);
  };

  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };

  return (
    /*<div className="app-style">
    {users.map((user) => {
      return <User user={user} key={user.id}></User>;
    })}*/
    <div className="all">
      <div className="top">
        <p>My To Do List</p>
        <p>React</p>
      </div>
      <div className="middle">
        <div className="txtline">
          <p>
            제목
            <input
              className="txt"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </p>
          <p>
            내용
            <input
              className="txt"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </p>
        </div>
        <CustomButton
          width="140px"
          height="40px"
          border="0px"
          color="white"
          backgroundColor="#008080"
          onClick={addUserHandler}
        >
          추가하기
        </CustomButton>
      </div>
      <div className="contents">
        <div>
          <h2>Working</h2>
          <div className="app-style">
            {users.map((user) => {
              if (
                (user.todo === "공부하자", "쌈싸먹자", "예습하자", "복습하자")
              ) {
                return (
                  <User
                    handleDelete={deleteUserHandler}
                    user={user}
                    key={user.id}
                  ></User>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div>
          <h2>Done</h2>
          <div className="app-style">
            {users.map((user) => {
              if (
                (user.todo === "공부하자", "쌈싸먹자", "예습하자", "복습하자")
              ) {
                return (
                  <User
                    handleDelete={deleteUserHandler}
                    user={user}
                    key={user.id}
                  ></User>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
