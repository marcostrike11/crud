import Link from 'next/link';

function Home(){
    return (
        <div>
            <h1>Home Marco Pereira</h1>    
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>     
        </div>
    )
}

export default Home