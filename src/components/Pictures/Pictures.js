import {useEffect, useState} from 'react';

import css from './Pictures.module.css';

import {pictureService} from '../../services';

const Pictures = () => {
    const [url, setUrl] = useState(null);
    const [endpoint, setEndpoint] = useState(null);
    const [isUpdate, setIsUpdate] = useState(null);

    useEffect(() => {
        if (endpoint) {
            pictureService.getPicture(endpoint).then(value => setUrl(value.request.responseURL))
        }
    }, [endpoint, isUpdate]);

    const getPicture = (e) => setEndpoint(e.target.value);

    const onUpdate = (e) => setIsUpdate(e.timeStamp);

    return (
        <div className={`${css.dFlex} ${css.mainDiv}`}>
            <div className={css.dBlock}>

                <div>
                    <button value={'/cat'} onClick={getPicture}>Cat</button>
                </div>

                <div>
                    <button value={'/dog'} onClick={getPicture}>Dog</button>
                </div>

                <div>
                    <button value={'/rain'} onClick={getPicture}>Rain</button>
                </div>

                <div>
                    <button value={'/car'} onClick={getPicture}>Car</button>
                </div>

                <div>
                    <button value={'/girl'} onClick={getPicture}>Girl</button>
                </div>

                <div>
                    <button value={'/notebook'} onClick={getPicture}>Notebook</button>
                </div>

                <div>
                    <button value={'/paris'} onClick={getPicture}>Paris</button>
                </div>

                <div>
                    <button value={'/rio'} onClick={getPicture}>Rio</button>
                </div>

            </div>

            <div className={`${css.dBlock} ${css.imageDiv}`}>

                <div className={css.img}>
                    {url && <img src={url} alt="picture"/>}
                </div>

                <button onClick={onUpdate}>Update</button>

            </div>
        </div>
    );
};

export {Pictures};
