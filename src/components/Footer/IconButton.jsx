export default function IconButton({ children }) {
    return <button className="bg-white text-orange-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none hover:bg-orange-600 hover:text-white text-xl" type="button">
        {children}</button>
}