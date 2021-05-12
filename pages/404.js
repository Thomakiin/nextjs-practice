// Custom error 404 page
import Link from 'next/link'
import Navbar from '/components/NavBar'

export default function () {
    return (
        <div>
            <Navbar />
            <h2 style={{color: "red"}}> Ooops! That page could not be found!</h2>
            <Link href="/">
                <a> return to home </a>
            </Link>
        </div>
    )
}