import Address from './address/Address';
import Company from './company/Company';
import './UserDetails.css'

export default function UserDetails({
                                        user: {id, name, username, email, address, phone, website, company},
                                        getPostsOfUser
                                    }) {
    const getPosts = () => getPostsOfUser(id);

    return (
        <div className={'userDetails'}>
            <div><b>{id}. {name} {username}</b></div>
            <div>email: {email}</div>
            <div>address: <Address address={address}/></div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>company: <Company company={company}/></div>
            <button onClick={getPosts}>Get posts</button>
        </div>
    );
}
