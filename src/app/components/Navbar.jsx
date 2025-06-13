import Link from "next/link"

const Navbar = () => {
    return (
        <div className="bg-white text-black h-[10vh] sticky top-0 z-50 flex flex-col justify-center items-center">
            <ul className='flex justify-center gap-18 items-center text-blue-400 text-xl'>
                <li className="hover:text-blue-800">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:text-blue-800">
                    <Link href="/about">About</Link>
                </li>
                <li className="hover:text-blue-800">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar