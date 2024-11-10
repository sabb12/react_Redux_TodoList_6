## Project Introduction(프로젝트 소개)
##### ▪ react와 redux로 만든 To Do List
<br/>

## What I've learned(배운 점)
##### 1. react만으로 충분히 useState나 useReducer로 충분히 상태를 관리할 수 있지만, 프로젝트가 커지면서 props를 통해 하위 컴포넌트에 전달하여 상태 공유하게되면, 중첩이 있을때 prop drilling이 발생해 복잡해지지만, Redux를 사용하여 중앙 store에 모든 상태를 저장하고 관리하면 prop drilling 없이 상태 공유 및 유지가 편리해짐.
##### - [Prop Drilling란]: 상위 상태를 하위 컴포넌트로 전달하기 위해 중간 컴포넌트를 거쳐 props를 계속 전달하는 과정으로, 코드가 복잡해질 수 있음.
<br/>

## Key Feature(주요 기능)
### 1. Redux를 통한 상태 관리 기능:
##### ▪ 여러 컴포넌트에서 상태를 공유하기 위해 추가(Create), 수정(update), 체크 여부(isChecked), 삭제(remove) 상태를 중앙파일인 store에 관리함
<br/>

### 2. 할 일 추가 기능
##### ▪ 사용자가 입력창(.input)에 텍스트를 입력하고 Enter 키를 누르거나, addBtn 버튼을 클릭하면 새로운 할 일(todo) 항목이 추가됨.
<br/>

### 3. 할 일 삭제 기능
##### ▪ 각 할 일에는 삭제 버튼이 포함되어 있으며, 사용자가 이 버튼을 클릭하면 해당 항목이 삭제됨.
<br/>

### 4. 완료 체크박스 기능
##### ▪ 사용자가 체크박스를 클릭하면 할 일의 checked 상태가 업데이트되며, 해당 항목이 "To Do" 목록에서 "Done" 목록으로 이동합니다(또는 반대로 이동).
<br/>

### 5. 할 일 수정 기능
##### ▪ 새로운 ToDo 항목 추가 시 input은 disabled=false로 시작합니다.
##### ▪ 수정 버튼 클릭 시 버튼이 "저장"으로 바뀌고, input은 disabled=true로 변경됩니다.
##### ▪ 저장 후 버튼이 "수정"으로 돌아가고, input은 다시 disabled=false로 돌아갑니다.
<br/>

## Installation(설치)
```
$ npx create-react-app react_Redux_TodoList_5
$ npm init -y
$ npm install
$ npm install redux react-redux @reduxjs/toolkit
$ npm install sass
$ npm run start
```

## Stacks(사용 스택)
### - Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
<br/>

### - Development
- Library

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white)
<br/>
  
- Languages

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
<br/>

## Project View(화면 구성)
![image](https://github.com/user-attachments/assets/9e029fc2-c461-4c7d-a5f9-83238a925576)


## Project Structure(프로젝트 구조)
```markdown
react_Redux_TodoList_5
├── public
├── src
│   └── components
│       ├── CreateTodo.jsx
│       ├── DoneList.jsx
│       ├── ListContainer.jsx
│       └── TodoList.jsx
├── src
│   ├── store
│   │   │└── module
│   │   └── index.js
│   └── styles
├── App.js
├── index.js
├── README.md
```
