/* eslint-disable no-unused-vars */
import SideNav, {Toggle,NavItem ,NavIcon,NavText} from '@trendmicro/react-sidenav';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from 'react-router-dom';

export default function SideNavigation(){
    const nav = useNavigate();
    return (
        <SideNav
          onSelect={selected => 
            {
                nav("/"+selected);
            }}
          onToggle={
                collapsed => console.log(!collapsed)
            }
          className='sideNav'
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon><i className='fa fa-fw fa-home' style={{fontSize : "1.5em"}}/></NavIcon>
                    <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="Library">
                    <NavIcon><i className="fa fa-bookmark" style={{fontSize : "1.5em"}}/></NavIcon>
                    <NavText>Library</NavText>
                </NavItem>
                <NavItem eventKey="Notification">
                    <NavIcon><i className="fa fa-bell" style={{fontSize : "1.5em"}}/></NavIcon>
                    <NavText>Notification</NavText>
                </NavItem>
            </SideNav.Nav>

        </SideNav>
    )
}