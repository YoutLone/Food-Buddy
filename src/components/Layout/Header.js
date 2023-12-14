import Link from "next/link";
export default function Header() {
    return(
        <>
        <header className="flex items-center justify-between">
            <nav className="flex gap-8 items-center text-gray-600 font-semibold">
            <Link className="text-primary font-semibold text-2xl" href="">
            FDB
            </Link>
            <Link href={''}>Home</Link>
            <Link href={''}>Menu</Link>
            <Link href={''}>About</Link>
            <Link href={''}>Contact</Link>
           
            </nav>
            <nav className="flex gap-4 items-center text-gray-600 font-semibold">
                <Link href={'/login'}>Login</Link>
                <Link href={'/register'} className="text-white bg-primary rounded-full px-8 py-2">Register</Link>
            </nav>
        </header>
   </>
    )
}