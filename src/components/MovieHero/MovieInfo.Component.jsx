import React, {useState} from "react";
import PaymentModal from "../PaymentModal/Payment.Component";

const MovieInfo = ({movie}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const genres = movie.genres?.map(({name})=>name).join(", ");

    const rentMovie = () => {
        setIsOpen(true);
        setPrice(149);
    }

    const buyMovie = () => {
        setIsOpen(true);
        setPrice(599);
    }

    return (
        <>

        <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price}/> {/*not necessary but always advised to place your modal on top, we can place it anywhere,it did not show up untill we click on buttons */}

            <div className="flex flex-col gap-8">
                <h1 className="text-white text-5xl font-bold">
                    {movie.original_title}
                </h1>
                <div className="flex flex-col text-white gap-5">
                    <h4>4K ratings</h4>
                    <h4>English, Hindi, Kannada, Tamil, Telugu</h4>
                    <h4>
                        {movie.runtime} min • {genres}{" "}
                    </h4>
                </div>
                <div className="flex items-center gap-3 w-full">
                    <button onClick={rentMovie} className="bg-red-500 w-full py-3 rounded-lg text-white">
                        Rent ₹149
                    </button>
                    <button onClick={buyMovie} className="bg-red-500 w-full py-3 rounded-lg text-white">
                        Buy ₹599
                    </button>
                </div>
            </div>
        </>
    );
};

export default MovieInfo;