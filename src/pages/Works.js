import initMagicWall from "../assets/vendor/magicwall";
import initColorBox from "../assets/vendor/jquery.colorbox";
import React, { useEffect, useRef, useState } from "react";
import jQuery from "jquery";
import MagicWall from "../components/MagicWall";

function Works() {
	const [init, setInit] = useState(false);
	const magicwallRef = useRef();
	useEffect(() => {
		initMagicWall();
		initColorBox();
		setInit(true);
	}, []);

	useEffect(() => {
		if (init) {
			jQuery(magicwallRef.current).magicWall({
				maxItemHeight: 350,
				maxItemWidth: 350,
				delay: 400,
				preloadBeforeSwitch: true,
				loadingMode: "chain",
				pauseOnHover: "item",
				animations:
					"flipY,rollOutX,-rollOutX,rollOutY,-rollOutY,slideColumn,-slideColumn,slideRow,-slideRow,fade",
				duration: 800
			});
			// jQuery(".magicwall").magicWall("start");
			jQuery(".colorbox").colorbox({
				maxWidth: "70%",
				maxHeight: "250%",
				scrolling: true,
				onOpen: function () {
					jQuery(magicwallRef.current).magicWall("stop");
				},

				onClosed: function () {
					jQuery(magicwallRef.current).magicWall("start");
				}
			});
		}
	}, [init]);
	return (
		<div className="page-outer">
			<div className="page-inner">
				<div
					ref={magicwallRef}
					className="section-full section-full--nopadding  gallery magicwall js-page-work">
					<MagicWall />
				</div>
			</div>
		</div>
	);
}

export default Works;
