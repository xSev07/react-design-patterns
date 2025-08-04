import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({name}) => {
  return (
    <h1 style={{backgroundColor: "blue", color: "white"}}>{name}</h1>
  )
}

const RightHandComponent = ({message}) => {
  return (
    <p style={{backgroundColor: "yellow", color: "black"}}>{message}</p>
  )
}

export const SplitScreenBase = () => {
  return (  
    <SplitScreen
      leftWeight={1}
      rightWeight={3}
    >
      <LeftHandComponent name="Artem" />
      <RightHandComponent message="Hello" />
    </SplitScreen>
  );
}
