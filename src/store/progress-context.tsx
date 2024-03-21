import { createContext, useCallback, useState } from 'react';
import { Progress } from '../utils/types';

type InitialValues = {
  progress: Progress;
  setProgress: (progress: Progress) => void;
};

// Context
export const ProgressContext = createContext<InitialValues>({
  progress: undefined,
  setProgress: () => {},
});

// Provider
type Props = {
  children: React.ReactNode;
};

const ProgressProvider: React.FC<Props> = ({ children }) => {
  const [progress, setProgress] = useState<Progress>();

  const setProgressHandler = useCallback((progress: Progress) => {
    setProgress(progress);
  }, []);

  const ctxProgress = {
    progress,
    setProgress: setProgressHandler,
  };

  return (
    <ProgressContext.Provider value={ctxProgress}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressProvider;
