import React, { useState } from "react";
import "./App.css";
import CustomButton from "./components/Custombutton";
import User from "./components/User";

//찾아본 문서, 구글링 단어 검색법 알려달라하기
const App = () => {
  const [users, setUsers] = useState([
    { id: 1, title: "리액트 공부하기", todo: "공부하자", isDone: true },
    { id: 2, title: "리액트 쌈싸먹기", todo: "쌈싸먹자", isDone: true },
    { id: 3, title: "리액트 예습하기", todo: "예습하자", isDone: true },
    { id: 4, title: "리액트 복습하기", todo: "복습하자", isDone: true },
  ]);
  const [title, setTitle] = useState(""); // 제목과 내용을 추가해주는 데 사용됨
  const [todo, setTodo] = useState("");

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      title: title,
      todo: todo,
      isDone: true,
    };
    setUsers([...users, newUser]); //serUsers: users의 상태를 추가해서 변경해줌 // [...A] : 전개연산자
  };

  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id); //users를 가져와서 filter를 돌릴건데 users를 user라는 이름으로 옆으로 넘겨준다.
    //user.id는 users의 내용, id는 내가 선택한 id값
    //for문처럼 id값이 같은 값이 나올 때까지 계속 돈다.
    setUsers(newUserList);
  };

  const onChangeHandler = (id) => {
    setUsers(
      //usestate의 함수형 업데이트 ★찾아보기
      users.map((user) => {
        return user.id === id ? (user.isDone = true) : user;
      })
    );
  };

  return (
    <div className="all">
      <div className="top">
        <p>🎉My To Do List🎉</p>
        <p>React</p>
      </div>
      <div className="middle">
        <div className="txtline">
          <p>
            제목
            <input //1. input칸에
              className="txt"
              value={title} //3. 맨 위체 선언한 title값이 바뀌면서 value에 title값도 자동으로 바뀐다.
              onChange={(e) => setTitle(e.target.value)} //2. setTitle이 새로 입력된 value 값을 targeting해서 3번의 값을 바꿔준다.
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
          <h2>Working..🎂</h2>
          <div className="app-style">
            {users.map((user) =>
              user.isDone === true ? (
                <User
                  handleDelete={deleteUserHandler}
                  user={user}
                  key={user.id}
                  handleChange={onChangeHandler}
                ></User>
              ) : null
            )}
          </div>
        </div>
        <div>
          <h2>Done..🎁</h2>
          <div className="app-style">
            {users.map((user) =>
              user.isDone === false ? (
                <User
                  handleDelete={deleteUserHandler}
                  user={user}
                  key={user.id}
                  handleChange={onChangeHandler}
                ></User>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
