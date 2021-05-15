import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
    return (
        <nav>
            <div>
                <Link href="/">
                    <Image src="/vercel.svg" alt="logo" width={77} height={55} />
                </Link>

                <Link href="/">
                    <a> Home</a>
                </Link>

                <Link href="/about">
                    <a> About</a>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;
