import { useApiContext } from "../context/AppContext";

export const MoonIcon = () => {
  const { isLight } = useApiContext();
  return (
    <svg
      className={`transition duration-150 fill-white object-cover absolute top-0 left-0 ${
        isLight ? "hidden" : "block"
      } dark:fill-blackColor`}
      width="40px"
      height="40px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 210.53 203.59"
    >
      <g data-name="Calque 2">
        <path
          d="M49.87 15.33a107.51 107.51 0 0 0-4.23 35.07C48.08 106.48 94 151.53 150.12 153h2.78a106.56 106.56 0 0 0 42.41-8.71 98 98 0 0 1-82.1 44.31c-53.38 0-97.43-43.4-98.2-96.74a97.89 97.89 0 0 1 34.86-76.53M50 0a14.45 14.45 0 0 0-9.35 3.5A113 113 0 0 0 0 92.06c.9 61.6 51.59 111.53 113.2 111.53a113.13 113.13 0 0 0 94.8-51.33c6.85-10.47-1.32-23.24-12.21-23.24a14.92 14.92 0 0 0-6 1.29A92 92 0 0 1 152.9 138h-2.4c-48.24-1.23-87.78-40-89.88-88.22a92.51 92.51 0 0 1 3.73-30.48C67.46 8.81 59.1 0 50 0z"
          data-name="Calque 1"
        />
      </g>
    </svg>
  );
};
