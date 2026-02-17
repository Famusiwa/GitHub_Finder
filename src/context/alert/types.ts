

// Define context shape
export type State = {
   msg: string;
   type: string;
}| null;

export type Action =
  | { type: "SET_ALERT", payload:{msg:string, type:string} }
  | { type: "REMOVE_ALERT"; }
  
