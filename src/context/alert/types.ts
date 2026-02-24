

// Define context shape
export interface State {
   msg: string;
   type: string;
}

export type Action =
  | { type: "SET_ALERT", payload:{msg:string, type:string} }
  | { type: "REMOVE_ALERT"; }
  
