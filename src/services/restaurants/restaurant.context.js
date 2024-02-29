import React, {useState,  createContext, useEffect, useMemo } from "react";
import { restaurantsRequest, restaurantTransform } from "./restaurants-service";
import { Children } from "react/cjs/react.production.min";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {

    const [ restaurants, setRestaurants ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


     const retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest().then(restaurantTransform).then((restaurants) => {
                setIsLoading(false);
                setRestaurants(restaurants);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            })
        }, 20000)
     };

    useEffect(() => {
retrieveRestaurants();
    }, []);

    return (
        <RestaurantsContext.Provider
        value={{
            restaurants: restaurants,
            isLoading, 
            error,
        }}>
            {children}
        </RestaurantsContext.Provider>
    )
}