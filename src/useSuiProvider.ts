import {JsonRpcProvider} from '@mysten/sui.js';
import {useMemo} from 'react';

export interface SuiProvider extends JsonRpcProvider {
}

export function useSuiProvider(endpoint: string): SuiProvider {
  return useMemo<JsonRpcProvider>(() => new JsonRpcProvider(endpoint), [endpoint]);
}
