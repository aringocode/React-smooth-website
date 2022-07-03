import React from 'react';
import { FaBars } from "react-icons/fa"
import {
	Nav, NavbarContainer, NavLogo,
	MobileIcon, NavMenu, NavItem,
	NavLinks, NavBtn, NavBtnLink
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">smooth</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars/>
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="about">About</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="discover">Discover</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="services">Services</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="signup">Sign Up</NavLinks>
						</NavItem>
						<NavBtn>
							<NavBtnLink to="/signin">Sing In</NavBtnLink>
						</NavBtn>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;