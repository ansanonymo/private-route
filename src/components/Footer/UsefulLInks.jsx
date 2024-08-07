export default function UsefulLinks() {
    return <div className="w-full lg:w-4/12 px-4 ml-auto">
        <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 text-orange-600">Links</span>
        <ul className="list-unstyled">
            <LinkItem>Home</LinkItem>
            <LinkItem>Profile</LinkItem>
            <LinkItem>Github</LinkItem>
            <LinkItem>Twitter</LinkItem>
        </ul>
    </div>
}


function LinkItem({ children }) {
    return (<li>
        <a className="text-gray-600 hover:text-orange-800 font-semibold block pb-2 text-sm" href="#">{children}</a>
    </li>)
}