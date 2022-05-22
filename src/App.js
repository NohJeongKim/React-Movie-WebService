import Button from "./Button";
import styles from "./App.module.css";
import style from "./Button.module.css";
import { useState, useEffect } from "react"; // usestate 사용하고 싶으면 불러오기.

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time.");
  // useEffect
  /*
  const iRunOnlyOnce = () => {
    console.log("I run only once.");
  };
  */
  useEffect(() => {
    console.log("I run only once!");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      // 조건도 넣어줄 수 있다.
      console.log("I run when 'keyword' changes.", keyword);
    }
  }, [keyword]);

  useEffect(() => {
    console.log("I run whe 'keyword' and 'counter' changes.");
  }, [keyword, counter]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  return (
    <div>
      <h1 className={styles.title}>Welcome back to REACT!</h1>
      <Button text="Continue" />
      <h1>{counter}</h1>
      <button onClick={onClick} className={style.btn}>
        Click Me!
      </button>
      <br></br>
      <input
        type="text"
        placeholder="Search Here..."
        onChange={onChange}
        value={keyword} // keyword를 가져와서 value로 이용하기.
      />
    </div>
  );
}

export default App;
