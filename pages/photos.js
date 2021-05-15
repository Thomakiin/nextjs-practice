import Link from 'next/link'
import NavBar from '../components/NavBar'
import Image from 'next/image'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();

    return {
        props: { photosData: data } // initializes new variable = "data"
    }
}

const Photos = ({ photosData }) => {
    return (
        <>
            <NavBar />
            <div className="blog">
                {photosData.map(photo => (
                    <a>
                        <div key={photo.id}>
                            <Link href={photo.url}>
                                <h3>{photo.title}</h3>
                            </Link>
                            <img src={photo.url} alt="thumbnail" width={50} height={50} />
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}

export default Photos;