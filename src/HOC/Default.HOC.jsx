import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/Default.Layout";

const DefaultHOC = ({component, ...rest}) => {
    return (
        <>
            <Route {...rest} component={(props) => (
                <DefaultLayout>
                    <component props/>
                </DefaultLayout>
            )}/>
        </>
    );
};

export default DefaultHOC;