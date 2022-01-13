export default function Geo({geo: {lat, lng}}) {
    return (
        <div className={'geo'}>
            <div>lat: {lat}</div>
            <div>lng: {lng}</div>
        </div>
    );
}
