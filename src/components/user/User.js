import Address from './address/Address';
import Company from './company/Company';
import './User.css'

export default function User({user: {id, name, username, email, address, phone, website, company}}) {
    return (
        <div className={'user'}>
            <div><b>{id}. {name} {username}</b></div>
            <div>email: {email}</div>
            <div>address: <Address address={address}/></div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>company: <Company company={company}/></div>
        </div>
    );
}
