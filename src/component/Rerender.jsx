import { createContext, useContext, useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
const CountContext = createContext();

const RerenderComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <>
        <Card
          style={{
            width: "30rem",
            height: "20rem",
            textAlign: "center",
            margin: "auto",
          }}
        >
          <Typography variant="h6">
            {" "}
            <b>Hello count world</b>
          </Typography>
          <br />
          <br />

          <Buttons />
          <br />
          <br />
          <CountComponent  />
        </Card>
    </>
  );
};

const Buttons = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Increase  />
        <Decrease  />
      </div>
    </>
  );
};

const Increase = () => {
    const setCount = useSetRecoilState(countState);
  return (
    <>
      <Button
         onClick={() => {
            setCount((existingCount) => existingCount + 1);
          }}
        variant="contained"
      >
        Increase Counter
      </Button>
    </>
  );
};

const Decrease = () => {
    const setCount = useSetRecoilState(countState);
  return (
    <>
      <Button
        onClick={() => {
          setCount((existingCount) => existingCount - 1);
        }}
        variant="contained"
      >
        Decrease counter
      </Button>
    </>
  );
};

const CountComponent = () => {
const count = useRecoilValue(countState)
  return <>{count}</>;
};
export default RerenderComponent;


const countState = atom({
    key: 'countState',
    default: 0, 
  });