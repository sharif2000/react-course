function Todo(props) {
  function deleteHandler() {
    console.log("the delete button of "+props.my_custom_attribute_text+" was clicked");
  }

  return (
    <div className="card">
      <h2>{props.my_custom_attribute_text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          {props.del_text}
        </button>
      </div>
    </div>
  );
}

export default Todo;
