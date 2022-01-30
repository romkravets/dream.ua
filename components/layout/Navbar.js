import Link from "next/link"
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    console.log(router.asPath);
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/login">
                <a>login</a>
            </Link>
        </div>
    )
}

export default Navbar