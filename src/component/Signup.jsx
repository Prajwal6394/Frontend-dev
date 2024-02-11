function Signup() {
  return (
    <div>
      <center>
        <div
          style={{
            border: "2px solid black",
            width: 400,
            marginTop: 120
          }}
        >
          <h4>Sign up and explore this course selling app</h4> <br />
          User name - <input type={"text"}></input>
          <br />
          Password - <input type={"password"}></input>
          <br />
          <button>Sign up </button>
        </div>
      </center>
    </div>
  );
}

export default Signup;
