// In React, higher-order components (HOCs) are functions that take a component and return a new component with additional functionality.
import React from 'react';
import { useEffect, useState } from 'react';


function withLoadingIndicator(WrappedComponent) {
    return function WithLoadingIndicator(props) {
        const [isLoading, setLoading] = useState(false);

        useEffect(() => {
            setLoading(true);
            // Simulate loading for 2 seconds
            const timer = setTimeout(() => {
                setLoading(false);
            }, 2000);
            return () => clearTimeout(timer);
        }, []);

        return (
            <>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <WrappedComponent {...props} />
                )}
            </>
        );
    };
}

function MyComponent(props) {
    return <div>Hello, {props.name}!</div>;
}


const HOC = () => {
    const MyComponentWithLoading = withLoadingIndicator(MyComponent);
    return (
        <MyComponentWithLoading name="Kashyap" />
    )
}

export default HOC






