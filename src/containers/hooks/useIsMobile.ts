import useWidth from "./useWidth";

const useIsMobile = (): boolean => {
  const width = useWidth();

  return width === "xs";
};

export default useIsMobile;
