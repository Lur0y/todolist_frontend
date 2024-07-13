import './../styles/SideMenu.scss';
import AccountButtons from './AccountButtons.jsx';
import IconButton from './IconButton.jsx';

export default function SideMenu(){

    return(
        <aside className="side-menu">
            <div className='side-menu-buttons'>
                <div className='side-menu-left-buttons'>
                    <AccountButtons />
                </div>
                <div className='side-menu-right-buttons'>
                    <IconButton icon="fa-regular fa-bell" />
                    <IconButton icon="fa-solid fa-mattress-pillow" />
                </div>
            </div>
        </aside>
    );

}