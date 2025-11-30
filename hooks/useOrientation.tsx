import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";
import { ORIENTATION_NUMBER } from "../constants/orientation/index";

const useOrientation = () => {
  const [screenOrientation, setScreenOrientation] = useState(
    ScreenOrientation.Orientation.PORTRAIT_UP
  );

  // Obtener orientación inicial
  const initScreenOrientation = async () => {
    const currentOrientation = await ScreenOrientation.getOrientationAsync();
    setScreenOrientation(currentOrientation);
  };

  useEffect(() => {
    // 1) Inicializar orientación
    initScreenOrientation();

    // 2) Detectar cambios de orientación
    const onOrientationChange = (
      currentOrientation: ScreenOrientation.OrientationChangeEvent
    ) => {
      const orientation = currentOrientation.orientationInfo.orientation;
      setScreenOrientation(orientation);
    };

    const screenOrientationListener =
      ScreenOrientation.addOrientationChangeListener(onOrientationChange);

    return () => {
      ScreenOrientation.removeOrientationChangeListener(
        screenOrientationListener
      );
    };
  }, []);
  const orientationString = ORIENTATION_NUMBER[screenOrientation];
  return orientationString;
};

export default useOrientation;
