import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
    return (
        <nav>
            <div>
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={55} height={55} />
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
