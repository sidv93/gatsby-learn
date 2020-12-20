import { useEffect, useState } from 'react';

const deets = `
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`;

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
                        ${deets}
                      }
                      slicemaster {
                          ${deets}
                      }
                    }
                  }                
                `
            })
        }).then(response => response.json()).then(res => {
            setHotSlices(res.data.StoreSettings.hotSlices);
            setSliceMasters(res.data.StoreSettings.slicemaster);
        }).catch(err => console.log(err));
    }, []);
    return { hotSlices, sliceMasters };
}

export default useLatestData;
