import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import MirrorLong from './images/MirrorLong.png';
import Fountains from './images/Fountains.png';
import WallDust1 from './images/WallDust1.png';
import WallDust2 from './images/WallDust2.png';
import WallDust3 from './images/WallDust3.png';
import UniClean from './images/UniClean.png';
import VacClose from './images/VacClose.png';
import Fountain from './images/Fountain.png';
import WallDust from './images/WallDust.png';
import Before1 from './images/Before1.png';
import Before2 from './images/Before2.png';
import During1 from './images/During1.png';
import During2 from './images/During2.png';
import Befoore from './images/Befoore.png';
import Duriing from './images/Duriing.png';
import VacBack from './images/VacBack.png';
import VacNice from './images/VacNice.png';
import BackVac from './images/BackVac.png';
import LongVac from './images/LongVac.png';
import After1 from './images/After1.png';
import Afteer from './images/Afteer.png';
import Duster from './images/Duster.png';
import Vacuum from './images/Vacuum.png';
import Mirror from './images/Mirror.png';
import Shiny from './images/Shiny.png';
import Floor from './images/Floor.png';
import Clean from './images/Clean.png';
import Nice1 from './images/Nice1.png';
import Nice2 from './images/Nice2.png';
import Nice3 from './images/Nice3.png';
import Nice4 from './images/Nice4.png';
import Nice5 from './images/Nice5.png';
import Door from './images/Door.png';
import Fan from './images/Fan.png';
import Vac from './images/Vac.png';
import Uni from './images/Uni.png';

function Photos() {
	const [isViewerOpen, setIsViewerOpen] = useState(false);
	const [imageViewer, setImageViewer]   = useState(null);

	const images = [
		Door, UniClean, Duster, Uni, VacBack, VacClose, VacNice, Vacuum,
		Nice1, Nice3, Nice5, Shiny, Floor, Before1, Before2, During1, During2,
		After1, BackVac, LongVac, Mirror, MirrorLong, WallDust, WallDust1,
		WallDust2, WallDust3, Duriing, Fountain
	];

	const shortImages = [
		Fountains, Befoore, Afteer,
		Fan, Vac, Clean, Nice2, Nice4
	];

	const openImageViewer = useCallback(index => {
		images.push.apply(images, shortImages);

		setImageViewer(
			<ImageViewer
				src={images}
				currentIndex={index}
				onClose={closeImageViewer}
				backgroundStyle={{backgroundColor: "rgba(0,0,0,0.9)"}}
			/>
		);

		setIsViewerOpen(true);
	}, [images, shortImages]);

	const closeImageViewer = () => {
		setIsViewerOpen(false);
	};

	return (
		<div align='center' style={{margin: -15}}>
			{images.map((src, index) => (
				<img
					src={src}
					onClick={() => openImageViewer(index)}
					width="300"
					key={index}
					style={{margin: "2px"}}
					alt=""
				/>
			))}
			<br/>
			{shortImages.map((src, index) => (
				<img
					src={src}
					onClick={() => openImageViewer(index + images.length)}
					width="300"
					key={index}
					style={{margin: "2px"}}
					alt=""
				/>
			))}
			{
				isViewerOpen && imageViewer
			}
		</div>
	);
}

export default Photos;
