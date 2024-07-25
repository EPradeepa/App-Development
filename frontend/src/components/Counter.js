import { decrement, increment } from "../redux/Action";
import { useDispatch , useSelector } from "react-redux";
export const Counter = () =>
{
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);
    return (
        <div style={ { margin: "20px" }}>
            <h1>
                Count:{count}</h1>

            <hr width="25%" align="left" />
            <button onClick={ dispatch (increment())}>
INCREMENT
            </button>
            <button onClick={dispatch (decrement())}>
                DECREMENT
            </button>
        </div>
    );
};