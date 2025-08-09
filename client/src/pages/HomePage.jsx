import Header from "../components/header/Header"
import Card from "../components/blogCard/Card"; // ✅ Add this line


const HomePage = () => {
    return (
        <>
            <Header />
            <div style={{ padding: 40 }}>
                <Card />
            </div>
        </>
    )
}

export default HomePage
