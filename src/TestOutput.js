import React, { useEffect, useState, Fragment } from "react";

function TestOutput() {

    const [hackerContent, setHackerContent] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("http://hn.algolia.com/api/v1/search?query=Linux&tags=story")
            .then((response) => {
                if (!response.ok)
                    // Failed HTTP status
                    throw new Error(
                        `An error has occured during the request. HTTP status code: ${response.status}`
                    );
                return response.json();
            },
                (error) => {
                    console.log("Rejection error callback");
                    setIsLoading(false);
                    setIsError(true);
                    console.log(error);
                }
            )
            .then((data) => {
                setHackerContent(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("Catch block");
                setIsLoading(false);
                setIsError(true);
                console.log(error);
            });
    }, []);

    if (isError) {
        return (0); //  present Error to user - TODO
    }
            
    return (
        <div>
            {
                /* if (isLoading) .. present loading-status  // TODO */
                
                hackerContent && hackerContent.hits.map((content) => {
                    return (
                        {/* <Fragment key={content.objectID}>
                            <p>Object-ID: {content.objectID}</p>
                            <p>Title: {content.title}</p>
                            <p>Date: {content.created_at}</p>
                            <p>Author: {content.author}</p>
                            <p>Link: {content.url}</p>
                        </Fragment> */}
                    )
                })
            } 
        </div>
    )
}

export default TestOutput;