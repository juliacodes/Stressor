import { useState } from "react";

const useCurrentPageState = () => {
  const [pageState, setPageState] = useState(false);

  const onClickSetPageState = () => {
    setPageState(true);
  };
  return { pageState, onClickSetPageState };
};

export default useCurrentPageState;
