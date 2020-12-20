import { useEffect, useState } from 'react';

const useLatestData = () => {
    const [hotSlices, setHotSlices] = useState();
    const [sliceMasters, setSliceMasters] = useState();

    useEffect(() => {
        fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
                query {
                    StoreSettings(id:"downtown") {
                      name
                      hotSlices {
                        name
                      }
                      slicemaster {
                          name
                      }
                    }
                  }                
                `
            })
        }).then(response => response.json()).then(res => {
            setHotSlices(res.data.StoreSettings.hotSlices);
            setSliceMasters(res.data.StoreSettings.slicemaster);
        })
    }, []);
    return { hotSlices, sliceMasters };
}

export default useLatestData;
