import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard";
const EstateContainer = () => {
    const estates = useLoaderData();
    return (

        <div>
            <div className="container mx-auto md-[50] md:mb-[70] lg:mb-[100px]">
                <div className="lg:mb-9 text-center">
                    <h2 className="text-[40px] font-bold text-[#131313]">Estates</h2>
                </div>
                {/* books card */}
                <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8">
                    {
                        estates.map((estate) => <EstateCard key={estate.id} estate={estate}></EstateCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default EstateContainer;