import "./List.css"; // Path to your CSS file
import a from "../assets/data"

function List(props) {
  const handleOptionChange = (event) => {
    props.setCurrSel(event.target.value);
  };

  const arr = Array.from({ length: props.count }, (_, i) => i + 1);

  const pid = props.pid;

  const lister = (k) => (
      <label key={`${k}`} className={props.currsel === `${k}` ? "selected" : ""}>
        <input
          type="radio"
          name="option"
          value={`${k}`}
          checked={props.currsel === `${k}`}
          onChange={handleOptionChange}
        />
         <div className="dataer"><span>{`Assembly ${k}`}</span>   |<span className="err">{`Error : ${a[pid.toLowerCase()][k-1]}`}</span></div>
      </label>
  );

  return <div className="lister">
    {arr.map((num) => lister(num))}
  </div>;
}

export default List;
