


type ButtonProp = {
    name: string,
    action?: () => void,
    type: "button" | "submit" | "reset"

}


const Button = ({ name, type, action }: ButtonProp) => {
    return (
        <button className="bg-[#76DE37] w-full rounded-xl h-10 border border-black shadow-2xl hover:cursor-pointer hover:bg-green-600" type={type} onClick={action}>{name}</button>
    )
}
export default Button