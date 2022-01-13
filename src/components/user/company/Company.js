export default function Company({company: {name, catchPhrase, bs}}) {
    return (
        <div className={'company'}>
            <div>name: {name}</div>
            <div>catch phrase: {catchPhrase}</div>
            <div>bs: {bs}</div>
        </div>
    );
}
