
export type TodoProps = {
    id: string
    is_done: boolean
    is_favorite: boolean
    task: string
    time: string
    image: string
}

export type MainIcon = {
    icon: "houseIcon" | "favoriteIcon" | "trashIcon" | "doneIcon"
}