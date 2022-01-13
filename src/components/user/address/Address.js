import Geo from './geo/Geo';

export default function Address({address: {street, suite, city, zipcode, geo}}) {
    return (
        <div className={'address'}>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
            <div>zipcode: {zipcode}</div>
            <div>geo: <Geo geo={geo}/></div>
        </div>
    );
}
