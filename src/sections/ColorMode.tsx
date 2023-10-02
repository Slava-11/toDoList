import { useApiContext } from "../context/AppContext";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";

export const ColorMode = () => {
  const { isLight, setIsLight } = useApiContext();
  const handleClick = () => {
    setIsLight(!isLight);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <>
      <button className="relative dark:text-white" onClick={handleClick}>
        <SunIcon />
        <MoonIcon />
      </button>
    </>
  );
};
