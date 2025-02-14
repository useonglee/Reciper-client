import React, { CSSProperties, MouseEventHandler, useCallback, useState } from 'react';
import dummyData from './dummyData';

import {
	CarouselContents,
	CarouselItem,
	CarouselItemWrapper,
	CarouselWrapper,
	ArrowBack,
	ArrowForward,
	ItemName,
	ItemContent,
	ViewMoreButton,
	ViewMoreButtonIcon,
	ViewMoreContainer,
	ViewMoreName,
	ViewMoreContent,
	ModalCloseButton,
} from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from '../Modal';

const NextArrow = (props: {
	className?: string;
	style?: CSSProperties;
	onClick?: MouseEventHandler<HTMLDivElement>;
}): JSX.Element => {
	const { className, style, onClick } = props;

	return (
		<div
			className={className}
			style={{
				...style,
				zIndex: 1,
				width: '3vw',
			}}
			onClick={onClick}
		>
			<ArrowForward />
		</div>
	);
};

const PrevArrow = (props: {
	className?: string;
	style?: CSSProperties;
	onClick?: MouseEventHandler<HTMLDivElement>;
}): JSX.Element => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				zIndex: 1,
				width: '2vw',
			}}
			onClick={onClick}
		>
			<ArrowBack />
		</div>
	);
};

const Carousel = (): JSX.Element => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [modalUserName, setModalUserName] = useState<string>('');
	const [modalContent, setModalContent] = useState<string>('');
	const [centerCard, setCenterCard] = useState<number>(0);

	const Settings = {
		className: 'center',
		centerMode: true,
		arrows: true,
		focusOnSelect: true,
		infinite: true,
		draggable: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 500,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current: number, next: number) => setCenterCard(next),
	};

	const onShowModal = useCallback((index): void => {
		setShowModal(true);
		setModalUserName(dummyData[index].name);
		setModalContent(dummyData[index].content);
	}, []);

	return (
		<CarouselWrapper>
			<CarouselContents {...Settings}>
				{dummyData.map((dummy, index: number) => (
					<CarouselItemWrapper key={index}>
						<CarouselItem
							style={{
								transform: `${index === centerCard ? 'scale(1)' : 'scale(0.8)'}`,
								opacity: `${index === centerCard ? '1' : '0.5'}`,
								transition: '0.3s',
								boxShadow: 'rgb(24 70 23 / 15%) 0px 5px 1vw',
							}}
						>
							<ItemName>
								{dummy.name} <span>레시퍼님</span>
							</ItemName>
							<ItemContent>{dummy.content}</ItemContent>
							{dummy.content.length > 169 ? (
								<ViewMoreButton onClick={(): void => onShowModal(index)}>
									더 보기
									<ViewMoreButtonIcon />
								</ViewMoreButton>
							) : null}
						</CarouselItem>
					</CarouselItemWrapper>
				))}
			</CarouselContents>
			{showModal && (
				<Modal setShowModal={setShowModal}>
					<ViewMoreContainer>
						<ViewMoreName>
							{modalUserName}
							<span>레시퍼님</span>
						</ViewMoreName>
						<ModalCloseButton onClick={() => setShowModal(false)} />
						<ViewMoreContent>{modalContent}</ViewMoreContent>
					</ViewMoreContainer>
				</Modal>
			)}
		</CarouselWrapper>
	);
};

export default Carousel;
