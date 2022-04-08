function Todo(props) {
  return (
    <div className="card">
      <h2>{props.my_custom_attribute_text}</h2>
      <div className="actions">
        <button className="btn">{props.del_text}</button>
      </div>
    </div>
  );
}

export default Todo;
