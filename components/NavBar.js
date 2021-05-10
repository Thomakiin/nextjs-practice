import Link from 'next/link'

export default function(){
    return (
        <nav>
            <div>
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

/*
const NavBar = () => {
    return (
        <nav>
            <div>
                <Link href="/">
                    <a> Home</a>
                </Link>
                <Link href="/about">
                    <a> About</a>
                </Link>
            </div>
        </nav>
    );
}


export default NavBar;
*/

/*
export default function (){
    return(
        <div> hi i am navbar </div>
    );
}
*/