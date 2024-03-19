import { createContext, useReducer } from 'react';

type Progress = undefined | 'cart' | 'complete';

type InitialValues = {
  progress: Progress;
  setProgress: (progress: Progress) => void;
};

// Context
export const ProgressContext = createContext<InitialValues>({
  progress: undefined,
  setProgress: () => {},
});

// Reducer
type State = {
  progress: Progress;
};

type SetAction = {
  type: 'SET';
  payload: Progress;
};

type Action = SetAction;

const cartReducer = (state: State, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET': {
      return {
        progress: payload,
      };
    }
    default:
      return state;
  }
};

// Provider
type Props = {
  children: React.ReactNode;
};

const ProgressProvider: React.FC<Props> = ({ children }) => {
  const [progress, dispatch] = useReducer(cartReducer, {
    progress: undefined,
  });

  const setProgressHandler = (progress: Progress) => {
    dispatch({ type: 'SET', payload: progress });
  };

  const ctxProgress = {
    progress: progress.progress,
    setProgress: setProgressHandler,
  };

  return (
    <ProgressContext.Provider value={ctxProgress}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressProvider;
