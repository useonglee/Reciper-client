import React from 'react';
import { Link } from 'react-router-dom';
import ReciperLogo from '../../../images/Logo.png';

import {
	AboutUs,
	Adress,
	Contact,
	ContentsWrapper,
	Copyright,
	FooterContainer,
	LinkArrow,
	LogoWrapper,
} from './styles';

const Footer = (): JSX.Element => {
	return (
		<FooterContainer>
			<ContentsWrapper>
				<div>
					<LogoWrapper>
						<img src={ReciperLogo} />
						Reciper
					</LogoWrapper>
					<Adress>서울특별시 서초구 서초동 서초대로 396</Adress>
				</div>
				<AboutUs>
					<p>서비스 소개</p>
					<Link to="https://github.com/codestates/Reciper-client/wiki">Wiki</Link>
					<Link to="https://github.com/codestates/Reciper-client">Client</Link>
					<Link to="https://github.com/codestates/Reciper-server">Server</Link>
				</AboutUs>
				<Contact>
					<p>컨택트</p>
					<Link to="https://github.com/lovelysi0113">Jung Songyi</Link>
					<Link to="https://github.com/Woogie-94">Kwak Eunwook</Link>
					<Link to="https://github.com/gatsukichi">Shin Seunggil</Link>
					<Link to="https://github.com/useonglee">Lee Useong</Link>
				</Contact>
			</ContentsWrapper>
			<Copyright>© Copyright 2021 Reciper Inc. All rights reserved.</Copyright>
		</FooterContainer>
	);
};

export default Footer;
