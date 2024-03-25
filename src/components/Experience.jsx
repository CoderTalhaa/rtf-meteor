import { useThree } from "@react-three/fiber";
import Scene from "./Scene";
import { useEffect } from "react";
import Meteor from "./Meteor";
import Beams from "./Beam";

export const Experience = () => {
  const state = useThree();

  // useEffect(()=> {
  //   state.gl.toneMappingExposure = 5;
  // }, [state.gl])
  return (
    <>
      <Scene />
      <Meteor />
      <Beams />
    </>
  );
};