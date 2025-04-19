import CheckedIcon from "../svg/CheckedIcon"
import FavoriteIcon from "../svg/FavoriteIcon"
import GridIcon from "../svg/GridIcon"
import HouseIcon from "../svg/HouseIcon"
import ListIcon from "../svg/ListIcon"
import SortDownIcon from "../svg/SortDownIcon"
import SortUpIcon from "../svg/SortUpIcon"
import TrashIcon from "../svg/TrashIcon"



const icons = [{ name: "houseIcon", icon: HouseIcon }, { name: "favoriteIcon", icon: FavoriteIcon }, { name: "trashIcon", icon: TrashIcon }, { name: "doneIcon", icon: CheckedIcon }]

const TopMenu = ({ handleIsSorted, isSorted, title, icon, setIsGrid }: { handleIsSorted: () => void, isSorted: boolean, title: string, icon: "houseIcon" | "favoriteIcon" | "trashIcon" | "doneIcon", setIsGrid: (state: boolean) => void }) => {

    const iconTitle = icons.find((item) => item.name === icon)
    const IconTitle = iconTitle!.icon

    return (
        <div className="flex justify-between w-full h-[55px] borde">
            <div className="flex gap-6">
                <div className="flex flex-row text-2xl gap-1 items-center text-[#1C78C3] hover:cursor-pointer">
                    <IconTitle width={33} height={33} stroke={"#1C78C3"} />
                    {title}
                </div>
                <div className="flex flex-row text-md gap-1 items-center text-[#1C78C3] hover:cursor-pointer" onClick={() => setIsGrid(true)}>
                    <GridIcon width={25} height={25} />
                    Grid
                </div>
                <div className="flex flex-row text-md gap-1 items-center text-[#1C78C3] hover:cursor-pointer" onClick={() => setIsGrid(false)}>
                    <ListIcon width={25} height={25} stroke={"#1C78C3"} />
                    List
                </div>
            </div>
            <div className="flex text-md gap-1 items-center text-[#1C78C3] select-none hover:cursor-pointer" onClick={handleIsSorted}>
                {isSorted ? (<SortDownIcon width={25} height={25} stroke="#1C78C3" />) : (<SortUpIcon width={24} height={24} stroke="#1C78C3" />)}
                Sort
            </div>
        </div>
    )
}
export default TopMenu