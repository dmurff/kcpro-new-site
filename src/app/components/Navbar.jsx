import Link from "next/link"

const Navbar = () => {
    return (
        <div className="bg-blue-100 text-black h-[10vh] sticky top-0 z-50 flex flex-col justify-center items-center">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar