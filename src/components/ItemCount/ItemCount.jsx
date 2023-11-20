import { useCount } from "../../hooks/useCount";
import { Button } from "../Button/Button";

export const ItemCount = ({stock, initial = 1}) => {

    const { count, increment, decrement} = useCount(initial, stock);

    return (
        <>
        <div className="flex items-center gap-3">
            <Button content="-" functionClick={decrement} />
            <h2 className="text-center px-4 pt-3 text-xl w-20">{count}</h2>
            <Button content="+" functionClick={increment} />
        </div>
        </>
    )
}
