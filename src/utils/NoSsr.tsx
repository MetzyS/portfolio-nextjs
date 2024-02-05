import { useEffect, useState } from "react";

const NoSsr = ({ children }: any): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return <>{isMounted ? children : null}</>;
};

export default NoSsr;
