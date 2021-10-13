import * as React from 'react';

export interface DeskContextInterface {
  refetchData: () => Promise<void>;
}

const DeskCtx = React.createContext<DeskContextInterface | null>(null);

export { DeskCtx };
