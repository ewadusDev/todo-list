import GridIcon from "../svg/GridIcon"
import HouseIcon from "../svg/HouseIcon"
import ListIcon from "../svg/ListIcon"
import SortDownIcon from "../svg/SortDownIcon"
import SortUpIcon from "../svg/SortUpIcon"


const TopMenu = ({ handleIsSorted, isSorted }: { handleIsSorted: () => void, isSorted: boolean }) => {
    return (
        <div className="flex justify-between w-full h-[55px] borde">
            <div className="flex gap-6">
                <div className="flex flex-row text-2xl gap-1 items-center text-[#1C78C3]">
                    <HouseIcon width={33} height={33} stroke={"#1C78C3"} />
                    Task
                </div>
                <div className="flex flex-row text-md gap-1 items-center text-[#1C78C3]">
                    <GridIcon width={25} height={25} />
                    Grid
                </div>
                <div className="flex flex-row text-md gap-1 items-center text-[#1C78C3]">
                    <ListIcon width={25} height={25} stroke={"#1C78C3"} />
                    List
                </div>
            </div>
            <div className="flex text-md gap-1 items-center text-[#1C78C3] select-none" onClick={handleIsSorted}>
                {isSorted ? (<SortDownIcon width={25} height={25} stroke="#1C78C3" />) : (<SortUpIcon width={24} height={24} stroke="#1C78C3" />)}
                Sort
            </div>
        </div>
    )
}
export default TopMenu