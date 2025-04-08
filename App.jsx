
// export default function ToDoList() {
  //   const [task, setTask] = useState("");
  //   const [tasks, setTasks] = useState([
  //     { taskName: "Гүл суару", completed: true },
  //     { taskName: "Күнделікті үй тапсырмасын орындау", completed: false },
  //   ]);
  //   const [editingIndex, setEditingIndex] = useState(null);
  //   const [editedTask, setEditedTask] = useState("");
  
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     if (task.trim() === "") return;
  //     setTasks([...tasks, { taskName: task, completed: false }]);
  //     setTask("");
  //   }
  
  //   function toggleTask(index) {
  //     const updatedTasks = [...tasks];
  //     updatedTasks[index].completed = !updatedTasks[index].completed;
  //     setTasks(updatedTasks);
  //   }
  
  //   function deleteTask(index) {
  //     const filteredTasks = tasks.filter((_, i) => i !== index);
  //     setTasks(filteredTasks);
  //   }
  
  //   function startEditing(index) {
  //     setEditingIndex(index);
  //     setEditedTask(tasks[index].taskName);
  //   }
  
  //   function saveEdit(index) {
  //     const updatedTasks = [...tasks];
  //     updatedTasks[index].taskName = editedTask;
  //     setTasks(updatedTasks);
  //     setEditingIndex(null);
  //   }
  
  //   return (
  //     <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-lg rounded-xl">
  //       <h2 className="text-xl font-bold mb-4">Тапсырмалар</h2>
  //       <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
  //         <input
  //           value={task}
  //           type="text"
  //           onChange={(e) => setTask(e.target.value)}
  //           className="border p-2 flex-grow rounded"
  //           placeholder="Жаңа тапсырма..."
  //         />
  //         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Қосу</button>
  //       </form>
  
  //       <ul>
  //         {tasks.map((tapsyrma, index) => (
  //           <li key={index} className="flex justify-between items-center p-2 border-b">
  //             {editingIndex === index ? (
  //               <input
  //                 type="text"
  //                 value={editedTask}
  //                 onChange={(e) => setEditedTask(e.target.value)}
  //                 className="border p-1 rounded flex-grow"
  //               />
  //             ) : (
  //               <div>{tapsyrma.taskName}</div>
  //             )}
  //             <div className="flex gap-2">
  //               <button
  //                 style={{ color: tapsyrma.completed ? "green" : "red" }}
  //                 onClick={() => toggleTask(index)}
  //               >
  //                 {tapsyrma.completed ? "✔️" : "❌"}
  //               </button>
  //               {editingIndex === index ? (
  //                 <button
  //                   onClick={() => saveEdit(index)}
  //                   className="bg-green-500 text-white p-1 rounded"
  //                 >
  //                   Сақтау
  //                 </button>
  //               ) : (
  //                 <button
  //                   onClick={() => startEditing(index)}
  //                   className="bg-yellow-500 text-white p-1 rounded"
  //                 >
  //                   Өңдеу
  //                 </button>
  //               )}
  //               <button
  //                 onClick={() => deleteTask(index)}
  //                 className="bg-red-500 text-white p-1 rounded"
  //               >
  //                 Өшіру
  //               </button>
  //             </div>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
  //   const stopTimer = () => {
  //     clearInterval(timerRef.current);
  //     setIsRunning(false);
  //   };
  
  //   const resetTimer = () => {
  //     stopTimer();
  //     setTimeLeft(seconds);
  //   };
  
  //   return (
  //     <div style={{ textAlign: "center", padding: "20px" }}>
  //       <h2>Кері таймер</h2>
  //       <input
  //         type="number"
  //         value={seconds}
  //         onChange={(e) => setSeconds(Number(e.target.value))}
  //         disabled={isRunning}
  //         placeholder="Секунд енгізіңіз"
  //       />
  //       <button onClick={() => { setTimeLeft(seconds); startTimer(); }} disabled={isRunning || seconds <= 0}>
  //         Старт
  //       </button>
  //       <button onClick={stopTimer} disabled={!isRunning}>
  //         Тоқтату
  //       </button>
  //       <button onClick={resetTimer}>Қайта бастау</button>
  //       <h1>{timeLeft > 0 ? timeLeft : "Уақыт бітті!"}</h1>
  //     </div>
  //   );
  // }
  
  // //task 1
  // import UserCard from "./UserCard";
  
  // function App() {
  //   return(
  //     <><div>
  //     <UserCard name = "Aigul" age = '26'/>
  //     <UserCard name = "Aizhan" age = '22'/>
  //     </div>
  //     </>
  //   )
  // }
  
  // export default App;
  
  // //task 2
  // import TaskItem from "./UserCard";
  
  // function App() {
  //   const tasks = [
  //     { id: 1, title: "React үйрену", completed: true },
  //     { id: 2, title: "Тапсырманы орындау", completed: false },
  //     { id: 3, title: "Кітап оқу", completed: false },
  //   ];
  
  //   return (
  //     <div className="task-list">
  //       <h2>Тапсырмалар тізімі</h2>
  //       <ul>
  //         {tasks.map((task) => (
  //           <TaskItem key={task.id} title={task.title} completed={task.completed} />
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
  
  // export default App;
  
  // //task 3
  // import ProductCard from "./UserCard";
  
  // function App() {
  //   const products = [
  //     { id: 1, name: "Ноутбук", price: 300000, category: "Электроника" },
  //     { id: 2, name: "Кітап", price: 5000, category: "Әдебиет" },
  //     { id: 3, name: "Кроссовки", price: 25000, category: "Спорт" },
  //     { id: 4, name: "Телефон", price: 150000, category: "Электроника" }
  //   ];
  
  //   return (
  //     <div className="product-list">
  //       <h2>Өнімдер Каталогы</h2>
  //       <div className="grid">
  //         {products.map((product) => (
  //           <ProductCard
  //             key={product.id}
  //             name={product.name}
  //             price={product.price}
  //             category={product.category}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
  
  // export default App;
  
  ///05-03-25
  // import { useState } from "react";
  // export default function App(){
  //     const [count, setCount] = useState(0);
  //     function add() {
  //         setCount(count + 1);
  //     }
  
  //     function minus() {
  //         setCount(count - 1);
  //     }
  
  //     function bolu() {
  //         setCount(count / 2);
  //     }
  
  //     return(
  //         <div>
  //             <h1>{count}</h1>
  //             <button onClick={add}  > add</button>
  //             <button onClick={minus}>minus</button>
  //             <button onClick={bolu}>bolu</button>
  //         </div>
  //     )
  // }
  
  // import { useState } from "react";
  // export default function App(){
  //     const [count, setCount] = useState();
  //     function add() {
  //         setCount('background-color: red');
  //     }
  
  //     return(
  //         <div>
  //             <h1>{count}</h1>
  //             <button onClick={add}  > add</button>
  
  //         </div>
  //     )
  // }l;
  
  // import Header from "./03-03-25/Header";
  
  // function App() {
  //     return(
  //         <>
  //         <Header
  //         name = 'Менің Блогым'
  //         about = 'Бәрі қарапайм әрі жеңіл'
  //         contact = 'Байланыс'
  //         tol = 'Толығырақ'
  //         profile = 'src/03-03-25/profile-round-1342-svgrepo-com (3).svg'
  //         />
  //         </>
  //     )
  // }
  
  // export default App;
  
  // import { useState } from "react";
  // export default function App(){
  //     const [count, setCount] = useState(0);
  //     function add() {
  //         setCount(count + 1);
  //     }
  
  //     function minus() {
  //         setCount(count - 1);
  //     }
  
  //         if (count == 10) {
  //             alert('10 болды');
  //         } else if (count < 0 ){
  //             alert('0-ден төмен болмауы керек!')
  //         }
  
  //     return(
  //         <div>
  //             <h1>{count}</h1>
  //             <button onClick={add}> add</button>
  //             <button onClick={minus}>minus</button>
  
  //         </div>
  //     )
  // }
  
  //10-03-25
  
  // import { useState } from "react";
  // export default function App(){
  //     // const [Style, setStyle] = useState(0);
  //     function add() {
  
  //     }
  
  //     function minus() {
  //         setCount(count - 1);
  //     }
  
  //         if (count == 10) {
  //             alert('10 болды');
  //         } else if (count < 0 ){
  //             alert('0-ден төмен болмауы керек!')
  //         }
  
  //     return(
  //         <div>
  //             <h1>{count}</h1>
  //             <button onClick={add}> add</button>
  //             <button onClick={minus}>minus</button>
  
  //         </div>
  //     )
  // }
  
  // import { useState } from "react";
  
  // export default function App() {
  //   const [bgColor, setBgColor] = useState("#ffffff");
  //   const [history, setHistory] = useState([]);
  
  //   const getRandomColor = () => {
  //     const letters = "0123456789ABCDEF";
  //     let color = "#";
  //     for (let i = 0; i < 6; i++) {
  //       color += letters[Math.floor(Math.random() * 16)];
  //     }
  //     return color;
  //   };
  
  //   const changeColor = () => {
  //     const newColor = getRandomColor();
  //     setBgColor(newColor);
  //     setHistory((his) => [newColor, ...his.slice(0, 4)]);
  //   };
  
  //   return (
  //     <div style={{ backgroundColor: bgColor }}>
  //       <button onClick={changeColor}>Change</button>
  //       <ul>
  //         {history.map((color, index) => (
  //           <li key={index} style={{ color }}>
  //             {color}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
  
  // import { useState } from "react";
  
  // export default function TextInput() {
  //   const [text, setText] = useState("");
  
  //   return (
  //     <div>
  //       <input
  //         type="text"
  //         value={text}
  //         onChange={(e) => setText(e.target.value)}
  //       />
  //       <p> {text}</p>
  //     </div>
  //   );
  // }
  
  // import { useState } from "react";
  
  // export default function TodoList() {
  //   const [tasks, setTasks] = useState([]);
  //   const [input, setInput] = useState("");
  
  //   const addTask = () => {
  //     if (input.trim()) {
  //       setTasks([...tasks, input]);
  //       setInput("");
  //     }
  //   };
  
  //   return (
  //     <div>
  //       <div>
  //         <input
  //           type="text"
  //           value={input}
  //           onChange={(e) => setInput(e.target.value)}
  //         />
  //         <button onClick={addTask}>Қосу</button>
  //       </div>
  //       <ul>
  //         {tasks.map((task, index) => (
  //           <li key={index}>{task}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
  
  
  
  //11-03-25
  
  // function App() {
  //   let isAdmin = false;
  
  //   return (
  //     <div>
  //       {isAdmin ? <div>You are an admin</div> : <p>you are not admimn</p>}
  //     </div>
  //   )
  // }
  
  // export default App;
  
  
  
  
  // function App() {
  //   let isSubscribe = true;
  
  //   return (
  //     <div>
  //       {isSubscribe ? <div>You are premium</div> : <p>you are not premium</p>}
  //     </div>
  //   )
  // }
  
  // export default App;
  
  
  
  
  // function App() {
  //   let isOnline = true;
  
  //   return (
  //     <div>
  //       {isOnline ? "🟢 Қолданушы онлайн" : "🔴 Қолданушы офлайн"}
  //     </div>
  //   )
  // }
  
  // export default App;
  
  
  
  
  // function App() {
  //   let tempeture =   20
  
    
  //   return (    
  //     <div>
  //       {tempeture>35 ? <p>hot</p> : tempeture>20 ? <p>zhylu</p> : <p>cold</p>}
  //     </div>
  //   )
  // }
  // export default App;
  
  
  
  
  
  // import { useState } from "react";
  
  // export default function ThemeToggle() {
  //   const [isDark, setIsDark] = useState(false);
  
  //   return (
  //     <div
  //       style={{
  //         backgroundColor: isDark ? "black" : "white",
  //         color: isDark ? "white" : "black",
  //         height: "100vh",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         flexDirection: "column",
  //       }}
  //     >
  //       <p>{isDark ? "🌙 Қараңғы режим" : "☀️ Жарық режим"}</p>
        
  //       <button onClick={() => setIsDark(!isDark)}>
  //         {isDark ? "🌞 Жарық режимге ауысу" : "🌚 Қараңғы режимге ауысу"}
  //       </button>
  //     </div>
  //   );
  // }
  
  
  
  
  
  //12-03-25
  
  
  // import { useState } from "react";
  // export default function Filter() {
  //   const [tasks, setTasks] = useState([
  //     { text: "React үйрену", completed: false }, // 0
  //     { text: "Жаттығу жасау", completed: true }, // 1
  //     { text: "Кітап оқу", completed: false }, // 2
  //   ]);
  
  //   function handleRemove(index) {// 2
  //     // tasks = tasks.filter((task, i) => i !== index)
  //     setTasks(tasks.filter((task, i) => i !== index));
  //   };
  
  //   const [filter, setFilter] = useState("all");
  
  //   const filteredTasks = tasks.filter((task) =>
  //     filter === "all"
  //       ? true
  //       : filter === "complete"
  //       ? task.completed
  //       : !task.completed
  //   );
  //   // filter = incomplete
  //   return (
  //     <div>
  //       <h2>Тапсырмалар:</h2>
  //       <div>
  //         <button onClick={() => setFilter("all")}>Барлығы</button>
  //         <button onClick={() => setFilter("complete")}>Аяқталғандар</button>
  //         <button onClick={() => setFilter("incomplete")}>Аяқталмағандар</button>
  //       </div>
  //       <ul>
  //         {filteredTasks.map((task, index) => (
  //           <li key={index}>
  //             {task.text} {task.completed ? "✅" : "❌"} <button onClick={() => handleRemove(index)}>🗑</button>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //13-03-25
  // import { useState, useEffect } from "react";
  
  // export default function ColorPicker() {
  //   const [color, setColor] = useState("red");
  
  //   useEffect(() => {
  //     localStorage.setItem("selectedColor", color);
  //   }, [color]);
  
  
  //   useEffect(() => {
  //     const savedColor = localStorage.getItem("selectedColor");
  //     if (savedColor) {
  //       setColor(savedColor);
  //     }
  //   }, []);
  
  
  
  //   return (
  //     <div style={{ backgroundColor: color, height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
  //       <div>
  //         <h1>Түсті таңдаңыз:</h1>
  //         <button onClick={() => setColor("red")} style={{ backgroundColor: "red", color: "white", margin: "5px", padding: "10px" }}>Қызыл</button>
  //         <button onClick={() => setColor("blue")} style={{ backgroundColor: "blue", color: "white", margin: "5px", padding: "10px" }}>Көк</button>
  //         <button onClick={() => setColor("yellow")} style={{ backgroundColor: "yellow", color: "black", margin: "5px", padding: "10px" }}>Сары</button>
  //         <button onClick={() => setColor("pink")} style={{ backgroundColor: "pink", color: "white", margin: "5px", padding: "10px" }}>Күлгін</button>
  //         <button onClick={() => setColor("black")} style={{ backgroundColor: "black", color: "white", margin: "5px", padding: "10px" }}>Қара</button>
  //         <button onClick={() => setColor("white")} style={{ backgroundColor: "white", color: "black", margin: "5px", padding: "10px" }}>Ақ</button>
  //         <button onClick={() => setColor("gray")} style={{ backgroundColor: "gray", color: "white", margin: "5px", padding: "10px" }}>Сұры</button>
  //         <button onClick={() => setColor("green")} style={{ backgroundColor: "green", color: "white", margin: "5px", padding: "10px" }}>Жасыл</button>
  //         <button onClick={() => setColor("cyan")} style={{ backgroundColor: "cyan", color: "black", margin: "5px", padding: "10px" }}>Көкшіл</button>
  //         <button onClick={() => setColor("purple")} style={{ backgroundColor: "purple", color: "white", margin: "5px", padding: "10px" }}>Күлгін көк</button>
  //         <button onClick={() => setColor("brown")} style={{ backgroundColor: "brown", color: "white", margin: "5px", padding: "10px" }}>Қоңыр</button>
  //         <button onClick={() => setColor("gold")} style={{ backgroundColor: "gold", color: "black", margin: "5px", padding: "10px" }}>Алтын</button>
  //         <button onClick={() => setColor("orange")} style={{ backgroundColor: "orange", color: "black", margin: "5px", padding: "10px" }}>Қызғылт сары</button>
  //       </div>
  //     </div>
  //   );
  // }
  
  
  
  
  // import { useState, useEffect } from "react";
  
  // export default function App() {
  
  
  //   useEffect(() => {
  //     const savedUsername = localStorage.getItem("username");
  //     if (savedUsername) {
  //       setUsername(savedUsername);
  //     }
  //   })
  //   const [username, setUsername] = useState();
  
  //   useEffect(() => {
      
  //      }, []);
  
  //   useEffect(() => {
      
  //   }, [username]);
  
  //   return (
  //     <div>
  //       <h2>{username ? `Сәлем, ${username}!` : "Жүйеге кіріңіз"}</h2>
  //       <input
  //         type="text"
  //         value={username}
  //         onChange={(e) => } 
  //         placeholder="Атыңызды енгізіңіз"
  //       />
  //       <button onClick={() => setUsername("")}>🚪 Шығу</button>
  //     </div>
  //   );
  // }
  
  //19-03-25_test
  
  // import { useState, useEffect } from "react";
  
  // function App() {
  //   const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  
  //   useEffect(() => {
  //     const storedUser = localStorage.getItem("user");
  //     if (storedUser) {
  //       setIsLoggedIn(true);
  //       setUsername(JSON.parse(storedUser).username);
  //     }
  //   }, []);
  
  //   const handleRegister = () => {
  //     if (username && email && password) {
  //       localStorage.setItem("user", JSON.stringify({ username, email, password }));
  //       setIsLoggedIn(true);
  //     } else {
  //       alert("Барлық өрістерді толтырыңыз");
  //     }
  //   };
  
  //   const handleLogin = () => {
  //     const storedUser = JSON.parse(localStorage.getItem("user"));
  //     if (storedUser && storedUser.email === email && storedUser.password === password) {
  //       setIsLoggedIn(true);
  //       setUsername(storedUser.username);
  //     } else {
  //       alert("Қате email немесе құпия сөз");
  //     }
  //   };
  
  //   const handleLogout = () => {
  //     setIsLoggedIn(false);
  //     setUsername("");
  //     setEmail("");
  //     setPassword("");
  //   };
  
  //   const handleGuestLogin = () => {
  //     setIsLoggedIn(true);
  //     setUsername("Қонақ");
  //   };
  
  //   if (isLoggedIn) {
  //     return (
  //       <div>
  //         <h1>Қош келдіңіз, {username}!</h1>
  //         <button onClick={handleLogout}>Шығу</button>
  //         {username === "Қонақ" && <p>Сіз қонақ режимінде кірдіңіз.</p>}
  //       </div>
  //     );
  //   }
  
  //   return (
  //     <>
  //       <h1>Тіркелу</h1>
  //       <input
  //         type="text"
  //         placeholder="Атыңызды енгізіңіз"
  //         value={username}
  //         onChange={(e) => setUsername(e.target.value)}
  //       />
  //       <input
  //         type="email"
  //         placeholder="Email енгізіңіз"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //       <input
  //         type="password"
  //         placeholder="Құпия сөзді енгізіңіз"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //       <button onClick={handleRegister}>Тіркелу</button>
  
  //       <h1>Кіру</h1>
  //       <input
  //         type="email"
  //         placeholder="Email енгізіңіз"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //       <input
  //         type="password"
  //         placeholder="Құпия сөзді енгізіңіз"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //       <button onClick={handleLogin}>Кіру</button>
  //       <button onClick={handleGuestLogin}>Қонақ ретінде кіру</button>
  //     </>
  //   );
  // }
  
  // export default App;
  
  
  
  //18-03-25
  // import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
  // import App from './App'
  // export default function AppRoute() {
  //   return (
  //     <BrowserRouter>
  //       <Navbar />
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/contact" element={<Contact />} />
  //         <Route path="/video" element={<About />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // }
  
  // function Navbar() {
  //   return (
  //     <nav>
  //       <Link to="https://www.ted.com/" >Ted</Link> {"  |  "}
  //       <Link to="/about">About</Link> {"  |  "}
  //       <Link to="/contact">Contact</Link> {"  |  "}
  //     </nav>
  //   );
  // }
  
  
  // function NotFound() {
  //   return <h1>NotFound</h1>;
  // }
  
  // function Home() {
  //   const navigate = useNavigate()
  
  //   return (
  //     <div>
  //       <button onClick={() => navigate("/video")}>NextVideo</button>
  //       <button onClick={() => navigate(-2)}>back</button>
  //       <button onClick={() => navigate(1)}>Next</button>
  //     </div>
  //   );
  // }
  
  // function About() {
  //   return <h1>About</h1>;
  // }
  
  // function Contact() {
  //   const navigate = useNavigate();
  //   return <button onClick={() => navigate(1)}>Next</button>
  // }
  
  
  // import { useState, useEffect } from "react";
  
  // function Navbar() {
  //   const [theme, setTheme] = useState("white");
  
  //   useEffect(() => {
  //     const savedTheme = localStorage.getItem("theme");
  //     if (savedTheme) {
  //       setTheme(savedTheme);
  //     }
  //   }, []);
  
  //   const toggleTheme = () => {
  //     const newTheme = theme === "white" ? "black" : "white";
  //     setTheme(newTheme);
  //     localStorage.setItem("theme", newTheme);
  //   };
  
  //   return (
  //     <nav style={{ backgroundColor: theme, padding: "10px" }}>
  //       <button onClick={toggleTheme}>Өзгерту</button>
  //     </nav>
  //   );
  // }
  
  // export default Navbar;
  
  
  
  
  
  // import { useEffect } from "react";
  // import { useNavigate } from "react-router-dom";
  
  // function App() {
  //   const navigate = useNavigate();
  
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       navigate("/Error");
  //     }, 5000);
  
  //     return () => clearTimeout(timer);
  //   }, [navigate]);
  
  //   return <h1>❌ 404 Not Found (5 сек. ішінде қайтамыз)</h1>;
  // }
  
  // export default App;
  
  
  
  //19-03-25
  // import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
  
  // function App() {
  //   return (
  //     <Router>
  //       <Routes>
  //         <Route path="/profile/:username" element={<UserProfile />} />
  //       </Routes>
  //     </Router>
  //   );
  // }
  
  // function UserProfile() {
  //   const { username } = useParams();
  //   return <h1>Welcome, {username}!</h1>;
  // }
  
  // export default App;
  
  
  
  
  
  // import { useEffect, useState } from "react";
  // import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
  
  // function App() {
  //   return (
  //     <Router>
  //       <Routes>
  //         <Route path="/product/:id" element={<ProductDetail />} />
  //       </Routes>
  //     </Router>
  //   );
  // }
  
  // function ProductDetail() {
  //   const { id } = useParams();
  //   const [product, setProduct] = useState(null);
  
  //   useEffect(() => {
  //     fetch(`https://fakestoreapi.com/products/${id}`)
  //       .then(response => response.json())
  //       .then(data => setProduct(data))
  //       .catch(error => console.error('Error fetching product:', error));
  //   }, [id]);
  
  //   if (!product) return <h2>Loading...</h2>;
  
  //   return (
  //     <div>
  //       <h1>{product.title}</h1>
  //       <img src={product.image} alt={product.title} style={{maxWidth: '200px'}} />
  //       <p>{product.description}</p>
  //       <p>Price: ${product.price}</p>
  //     </div>
  //   );
  // }
  
  // export default App;
  
  // import { useEffect, useState } from "react";
  // import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
  
  // function App() {
  //   return (
  //     <Router>
  //       <Routes>
  //         <Route path="/posts" element={<PostList />} />
  //         <Route path="/posts/:id" element={<PostDetail />} />
  //       </Routes>
  //     </Router>
  //   );
  // }
  
  // function PostList() {
  //   const [posts, setPosts] = useState([]);
  
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  //       .then((res) => res.json())
  //       .then((data) => setPosts(data));
  //   }, []);
  
  //   return (
  //     <div>
  //       <h1>📢 Blog Posts</h1>
  //       {posts.map((post) => (
  //         <div key={post.id}>
  //           <h2>{post.title}</h2>
  //           <p>{post.body.substring(0, 50)}...</p>
  //           <Link to={`/posts/${post.id}`}>Read More</Link>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
  
  // function PostDetail() {
  //   const { id } = useParams();
  //   const [post, setPost] = useState(null);
  
  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => setPost(data))
  //       .catch((error) => console.error("Error fetching post:", error));
  //   }, [id]);
  
  //   if (!post) return <h2>Loading...</h2>;
  
  //   return (
  //     <div>
  //       <h1>{post.title}</h1>
  //       <p>{post.body}</p>
  //     </div>
  //   );
  // }
  
  // export default App;
  
  
  // import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
  
  // export default function App() {
  //   return (
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/profile" element={<Profile />} />
  //         <Route path="/posts" element={<Posts />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/surprise" element={<Surprise />} />
  //       </Routes>
  //     </Router>
  //   );
  // }
  
  // function Home() { return <h1>🏠 Home Page</h1>; }
  // function Profile() { return <h1>👤 Profile Page</h1>; }
  // function Posts() { return <h1>📝 Posts Page</h1>; }
  // function About() { return <h1>ℹ️ About Page</h1>; }
  
  // function Surprise() {
  //   const navigate = useNavigate();
  //   const pages = ["/", "/profile", "/posts", "/about"];
  
  //   const goToRandomPage = () => {
  //     const randomPage = pages[Math.floor(Math.random() * pages.length)];
  //     navigate(randomPage);
  //   };
  
  //   return (
  //     <div>
  //       <h1>🎉 Surprise Page!</h1>
  //       <button onClick={goToRandomPage}>Surprise Me!</button>
  //     </div>
  //   );
  // }
  
  
  
  
  
  
  
  // import { useEffect, useState } from "react";
  // import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
  
  // function App() {
  //   return (
  //     <Router>
  //       <Routes>
  //         <Route path="/posts" element={<PostList />} />
  //         <Route path="/posts/:id" element={<PostDetail />} />
  //       </Routes>
  //     </Router>
  //   );
  // }
  
  // function PostList() {
  //   const [posts, setPosts] = useState([]);
  
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
  //       .then((res) => res.json())
  //       .then((data) => setPosts(data));
  //   }, []);
  
  //   return (
  //     <div>
  //       <h1>📢 Blog Posts</h1>
  //       {posts.map((post) => (
  //         <div key={post.id}>
  //           <h2>{post.title}</h2>
  //           <p>{post.body.substring(0, 50)}...</p>
  //           <Link to={`/posts/${post.id}`}>Read More</Link>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
  
  // function PostDetail() {
  //   const { id } = useParams();
  //   const [post, setPost] = useState(null);
  
  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => setPost(data))
  //       .catch((error) => console.error("Error fetching post:", error));
  //   }, [id]);
  
  //   if (!post) return <h2>Loading...</h2>;
  
  //   return (
  //     <div>
  //       <h1>{post.title}</h1>
  //       <p>{post.body}</p>
  //     </div>
  //   );
  // }
  
  // export default App;
  
  
  
  //20-03-25
  
  // import { BrowserRouter, Routes, Route } from "react-router-dom";
  // import { useState } from "react";
  // import Login from "./Login";
  // import Profile from "./Profile";
  // import ProtectedRoute from "./ProtectedRoute";
  
  // function App() {
  //   const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
  //         <Route 
  //           path="/profile/:username" 
  //           element={
  //             <ProtectedRoute isAuthenticated={isAuthenticated}>
  //               <Profile />
  //             </ProtectedRoute>
  //           } 
  //         />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // }
  
  // export default App;
  
  
  // import { BrowserRouter, Routes, Route } from "react-router-dom";
  // import { useState } from "react";
  // import Login from "./Login";
  // import Dashboard from "./Dashboard";
  // import ProtectedRoute from "./ProtectedRoute";
  
  // function App() {
  //   const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
  //         <Route 
  //           path="/dashboard/:userId" // userId параметрін қостық
  //           element={
  //             <ProtectedRoute isAuthenticated={isAuthenticated}>
  //               <Dashboard setIsAuthenticated={setIsAuthenticated} />
  //             </ProtectedRoute>
  //           } 
  //         />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // }
  
  // export default App;
  
  
  
  //01-04-25
  // import axios from "axios";
  // import { useEffect, useState } from "react";
  
  // export default function App() {
  //     const [games, setGames] = useState([]);
  
  //     useEffect(() => {
  //         axios.get("https://jsonplaceholder.typicode.com/posts")
  //             .then((res) => {
  //                 setGames(res.data.slice(0, 5));
  //             })
  //             .catch((error) => {
  //                 console.error("Error fetching data:", error);
  //             });
  //     }, []);
      
  //     return (
  //         <>
  //         {games.map((game, index) => (
  //             <div key={index}>
  //                 <h2>{game.title}</h2>
  //             </div>
  //         ))}
  //         </>
  //     )
  // }
  
  // import axios from "axios";
  // import { useEffect, useState } from "react";
  
  // export default function App() {
  //     const [games, setGames] = useState([]);
  
  // function click() {
  //     axios.get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //         setGames(res.data.slice(0, 5));
  //     })
  //     .catch((error) => {
  //         console.error("Error fetching data:", error);
  //     });
  // }
  
  //     // useEffect(() => {
        
  //     // }, []);
      
  //     return (
  //         <>
  //         <button onClick={click} >bas</button>
  //         {games.map((game, index) => (
  //             <div key={index}>
  //                 <h2>{game.title}</h2>
  //             </div>
  //         ))}
  //         </>
  //     )
  // }
  
  
  
  
  
  //02-04-2025
  
  // import React, { useState } from "react";
  // import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
  // import Search from './Search';
  // import MovieList from './MovieList';
  // import MovieDetails from './MovieDetails';
  
  
  // export default function Appp() {
  //     const [movies, setMovies] = useState([])
  
  //     return(
  //         <Router>
  //             <div>
  //                 <h1>Movie Search App</h1>
  //                 <Search onSearch={setMovies}/>
  
  //                 <Routes>
  //                      <Route path="/" element={<MovieList movies={movies}/>}></Route>
  //                      <Route path="/movie/:id" element={<MovieDetails/>}/>
  //                 </Routes>
  //             </div>
  //         </Router>
  //     )
  // }
  





import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import BookGallery from './pages/BookGallery';
import BookDetail from './pages/BookDetail';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
      <Route path="/gallery" element={<ProtectedRoute><BookGallery /></ProtectedRoute>} />
      <Route path="/book/:id" element={<ProtectedRoute><BookDetail /></ProtectedRoute>} />
    </Routes>
  </Router>
);

export default App;
