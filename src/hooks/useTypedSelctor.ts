import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/reducers";
import { useSelector } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;