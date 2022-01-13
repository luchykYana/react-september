import './Spaceship.css'

export default function Spaceship({spaceship: {mission_name, launch_year, links: {mission_patch_small}}}) {
    return (
        <div className={'spaceship'}>
            <div className={'spaceship_up'}>
                <div>{mission_name}</div>
                <div>{launch_year}</div>
            </div>
            <div className={'spaceship_img'}>
                <img src={mission_patch_small} alt="logo"/>
            </div>
        </div>
    );
}
