import { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import { CategoryList } from "../components/CategoryList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

function Home(){
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);
    

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(
                (item) => item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        )
    }


    useEffect(() => {getAllCategories().then((data) => {
        setCatalog(data.categories);
        setFilteredCatalog(data.categories);
        });
    }, []);

    return (
        <>
            <Search cb={handleSearch}/>
            {!catalog.length ?( <Preloader/> ): <CategoryList catalog={filteredCatalog}/>}
        </>
    );
}



export default Home;