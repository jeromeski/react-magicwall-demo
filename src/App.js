/* eslint-disable jsx-a11y/anchor-has-content */
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/works" element={<Works />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

/*
ProjectSET
						<li data-thumb="../wp-content/uploads/2019/11/ttelo.png">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2019/11/Employers-ProjectSet-e1574678139657-scaled.jpg"
								title=""
								className="colorbox"
								rel="magicwall14"
							/>
							<a
								href="../wp-content/uploads/2019/11/Student-Sign-Up-ProjectSet-scaled.jpg"
								title=""
								className="colorbox"
								rel="magicwall14"
							/>
							<a
								href="../wp-content/uploads/2019/11/Online-Internships-For-Everyone-ProjectSet-e1574677249594-scaled.jpg"
								title=""
								className="colorbox"
								rel="magicwall14"
							/>
						</li>
						Fluxposure
						<li data-thumb="../wp-content/uploads/2017/10/3.jpg">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2017/10/2-scaled.jpg"
								title='<a href="https://www.adrianflux.co.uk/blog/" target="_blank">https://www.adrianflux.co.uk/blog/</a>'
								className="colorbox"
								rel="magicwall15"
							/>
							<a
								href="../wp-content/uploads/2017/10/1-e1507916198561-scaled.jpg"
								title='<a href="https://www.adrianflux.co.uk/blog/" target="_blank">https://www.adrianflux.co.uk/blog/</a>'
								className="colorbox"
								rel="magicwall15"
							/>
						</li>
						MOTORSPORT
						<li data-thumb="../wp-content/uploads/2019/01/Adrian-Flux-Motorsport-e1546707189414.jpg">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2019/01/Race-Vehicle-Insurance-Adrian-Flux-Motorsport.jpg"
								title='<a href="http://moto.jeznacki13.usermd.net/" target="_blank">http://moto.jeznacki13.usermd.net/</a>'
								className="colorbox"
								rel="magicwall16"
							/>
							<a
								href="../wp-content/uploads/2019/01/Adrian-Flux-Motorsport-1.jpg"
								title='<a href="http://moto.jeznacki13.usermd.net/" target="_blank">http://moto.jeznacki13.usermd.net/</a>'
								className="colorbox"
								rel="magicwall16"
							/>
						</li>
						TTE
						<li data-thumb="../wp-content/uploads/2017/10/ttelo.png">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2017/10/What-are-the-main-challenges-for-Women-in-Tech-To-The-End-scaled.jpg"
								title='<a href="https://bit.ly/323dVip" target="_blank" rel="noopener">https://totheend.co.uk/</a>'
								className="colorbox"
								rel="magicwall17"
							/>
							<a
								href="../wp-content/uploads/2017/10/Contact-To-The-End-1.jpg"
								title='<a href="http://tte.jeznacki13.usermd.net/" target="_blank" rel="noopener">https://totheend.co.uk/</a>'
								className="colorbox"
								rel="magicwall17"
							/>
							<a
								href="../wp-content/uploads/2017/10/To-The-End-Award-winning-Content-Marketing-Agency.jpg"
								title='<a href="http://tte.jeznacki13.usermd.net/" target="_blank" rel="noopener">https://totheend.co.uk/</a>'
								className="colorbox"
								rel="magicwall17"
							/>
							<a
								href="../wp-content/uploads/2017/10/Bez-nazwy-2.jpg"
								title='<a href="http://tte.jeznacki13.usermd.net/" target="_blank" rel="noopener">https://totheend.co.uk/</a>'
								className="colorbox"
								rel="magicwall17"
							/>
						</li>
						KIller Creative
						<li data-thumb="../wp-content/uploads/2019/06/Bez-nazwy-3.jpg">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2019/06/Gary-Milton-Killer-Creative-1.jpg"
								title='<a target="_blank" href="https://www.killercreative.co.uk/">https://www.killercreative.co.uk</a>'
								className="colorbox"
								rel="magicwall18"
							/>
							<a
								href="../wp-content/uploads/2019/06/DECHOX-Killer-Creative-e1574676621251-scaled.jpg"
								title='<a target="_blank" href="https://www.killercreative.co.uk/">https://www.killercreative.co.uk</a>'
								className="colorbox"
								rel="magicwall18"
							/>
						</li>
						Aspect Property
						<li data-thumb="../wp-content/uploads/2019/08/London-Block-Management-Services-Aspect-Property-Management-1-e1567256441746.jpg">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2019/08/Property-Locations-Aspect-Property-Management.jpg"
								title='<a href="https://www.aspectpropertymanagement.co.uk/" target="_blank">https://www.aspectpropertymanagement.co.uk/</a>'
								className="colorbox"
								rel="magicwall19"
							/>
							<a
								href="../wp-content/uploads/2019/08/London-Block-Management-Services-Aspect-Property-Management-scaled.jpg"
								title='<a href="https://www.aspectpropertymanagement.co.uk/" target="_blank">https://www.aspectpropertymanagement.co.uk/</a>'
								className="colorbox"
								rel="magicwall19"
							/>
						</li>
						Channelislands
						<li data-thumb="../wp-content/uploads/2019/01/unnamed.jpg">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2019/01/Am-I-Responsive-1-5-e1546708591671.jpg"
								title='<a href="http://afcl.jeznacki13.usermd.net/" target="_blank">http://afcl.jeznacki13.usermd.net/</a>'
								className="colorbox"
								rel="magicwall110"
							/>
						</li>
						BESPOKE
						<li data-thumb="../wp-content/uploads/2019/01/Bez-nazwy-2.png">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2019/01/Am-I-Responsive-1-1-e1546707655795.jpg"
								title='<a href="http://lucas.jeznacki13.usermd.net/" target="_blank" rel="noopener">http://lucas.jeznacki13.usermd.net</a>'
								className="colorbox"
								rel="magicwall111"
							/>
						</li>
						Quality Solicitors
						<li data-thumb="../wp-content/uploads/2019/08/ttelo.png">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2019/08/1-scaled.jpg"
								title='<a href="https://www.qualitysolicitors.com/" target="_blank">https://www.qualitysolicitors.com/</a>'
								className="colorbox"
								rel="magicwall112"
							/>
							<a
								href="../wp-content/uploads/2019/08/2-scaled.jpg"
								title='<a href="https://www.qualitysolicitors.com/" target="_blank">https://www.qualitysolicitors.com/</a>'
								className="colorbox"
								rel="magicwall112"
							/>
						</li>
						Forever Cars
						<li data-thumb="../wp-content/uploads/2017/10/Home-Forever-Cars-Adrian-Flux-1.jpg">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2017/10/1-Adrian-Flux-e1507915455673-scaled.jpg"
								title='<a href="https://www.adrianflux.co.uk/forever-cars/" target="_blank">https://www.adrianflux.co.uk/forever-cars/</a>'
								className="colorbox"
								rel="magicwall113"
							/>
							<a
								href="../wp-content/uploads/2017/10/Love-at-first-sight-that-s-never-faded-for-Simon-s-forever-Mini-%e2%80%93-Forever-Cars-Adrian-Flux-e1507914569643-scaled.jpg"
								title='<a href="https://www.adrianflux.co.uk/forever-cars/" target="_blank">https://www.adrianflux.co.uk/forever-cars/</a>'
								className="colorbox"
								rel="magicwall113"
							/>
							<a
								href="../wp-content/uploads/2017/10/Dashboard.jpg"
								title='<a href="https://www.adrianflux.co.uk/forever-cars/" target="_blank">https://www.adrianflux.co.uk/forever-cars/</a>'
								className="colorbox"
								rel="magicwall113"
							/>
						</li>
						Greta
						<li data-thumb="../wp-content/uploads/2016/09/Greta-Offical-Online-Store-Greta-e1478003527992.jpg">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2016/09/2.jpg"
								title='<a href="http://gretaonline.com/" target="_blank">https://gretaonline.com/</a>'
								className="colorbox"
								rel="magicwall114"
							/>
							<a
								href="../wp-content/uploads/2016/09/3.jpg"
								title='<a href="http://gretaonline.com/" target="_blank">https://gretaonline.com/</a>'
								className="colorbox"
								rel="magicwall114"
							/>
							<a
								href="../wp-content/uploads/2016/09/4.jpg"
								title='<a href="http://gretaonline.com/" target="_blank">https://gretaonline.com/</a>'
								className="colorbox"
								rel="magicwall114"
							/>
							<a
								href="../wp-content/uploads/2016/09/Am-I-Responsive-.jpg"
								title='<a href="http://gretaonline.com/" target="_blank">https://gretaonline.com/</a>'
								className="colorbox"
								rel="magicwall114"
							/>
						</li>
						villas away
						<li data-thumb="../wp-content/uploads/2015/05/Bez-nazwy-1.jpg">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2015/05/destination-Almeria-Villas-Away-e1434019273652.jpg"
								title='<a href="http://www.villasaway.co.uk/" target="blank">http://www.villasaway.co.uk</a>'
								className="colorbox"
								rel="magicwall115"
							/>
							<a
								href="../wp-content/uploads/2015/05/Bez-nazwy-16-e1434019290401.jpg"
								title='<a href="http://www.villasaway.co.uk/" target="blank">http://www.villasaway.co.uk</a>'
								className="colorbox"
								rel="magicwall115"
							/>
						</li>
						Rocky
						<li data-thumb="../wp-content/uploads/2019/01/Rockys-Mountain-Gear-Waterproof-Socks-Hats-and-Gloves-Rockys.jpg">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2019/01/Rockys-Mountain-Gear-Waterproof-Socks-Hats-and-Gloves-Rockys-1.jpg"
								title=""
								className="colorbox"
								rel="magicwall116"
							/>
						</li>
						Learner Driver
						<li data-thumb="../wp-content/uploads/2017/11/ttelo.png">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2017/11/Learner-Driver-Hints-and-Tips-from-Adrian-Flux-4-scaled.jpg"
								title='<a href="https://www.adrianflux.co.uk/learner-drivers" target="_blank">https://www.adrianflux.co.uk/learner-drivers/</a>'
								className="colorbox"
								rel="magicwall117"
							/>
							<a
								href="../wp-content/uploads/2017/11/Insurance-and-Tips-Blog-for-Learner-Drivers-from-Adrian-Flux-scaled.jpg"
								title='<a href="https://www.adrianflux.co.uk/learner-drivers" target="_blank">https://www.adrianflux.co.uk/learner-drivers/</a>'
								className="colorbox"
								rel="magicwall117"
							/>
						</li>
						PO
						<li data-thumb="../wp-content/uploads/2015/05/Bez-nazwy-8.jpg">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2015/05/Wybory-do-Parlamentu-Europejskiego-2014-kandydaci-PO-1.jpg"
								title='<a href="https://jacekjeznach.com/projekty/platforma1/index.html" target="blank">PO EU Elections</a>'
								className="colorbox"
								rel="magicwall118"
							/>
							<a
								href="../wp-content/uploads/2015/05/12.png"
								title='<a href="https://jacekjeznach.com/projekty/platforma1/index.html" target="blank">PO EU Elections</a>'
								className="colorbox"
								rel="magicwall118"
							/>
							<a
								href="../wp-content/uploads/2015/05/22.png"
								title='<a href="https://jacekjeznach.com/projekty/platforma1/index.html" target="blank">PO EU Elections</a>'
								className="colorbox"
								rel="magicwall118"
							/>
						</li>
						Titan Marine
						<li data-thumb="../wp-content/uploads/2019/08/1-1.jpg">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2019/08/2-1-scaled.jpg"
								title='<a href="https://www.titan-marine.com/" target="_blank">https://www.titan-marine.com</a>'
								className="colorbox"
								rel="magicwall119"
							/>
							<a
								href="../wp-content/uploads/2019/08/3-1-scaled.jpg"
								title='<a href="https://www.titan-marine.com/" target="_blank">https://www.titan-marine.com</a>'
								className="colorbox"
								rel="magicwall119"
							/>
							<a
								href="../wp-content/uploads/2019/08/Am-I-Responsive-1-2.jpg"
								title='<a href="https://www.titan-marine.com/" target="_blank">https://www.titan-marine.com</a>'
								className="colorbox"
								rel="magicwall119"
							/>
						</li>
						Synergy
						<li data-thumb="../wp-content/uploads/2019/08/1-2.jpg">
							<div className="hover-content vcenter" />
							<a
								href="../wp-content/uploads/2019/08/2-2-scaled.jpg"
								title='<a href="https://synergylifestyle.com/" target="_blank">https://synergylifestyle.com</a>'
								className="colorbox"
								rel="magicwall120"
							/>
							<a
								href="../wp-content/uploads/2019/08/3-2-scaled.jpg"
								title='<a href="https://synergylifestyle.com/" target="_blank">https://synergylifestyle.com</a>'
								className="colorbox"
								rel="magicwall120"
							/>
							<a
								href="../wp-content/uploads/2019/08/Am-I-Responsive-1-3.jpg"
								title='<a href="https://synergylifestyle.com/" target="_blank">https://synergylifestyle.com</a>'
								className="colorbox"
								rel="magicwall120"
							/>
						</li>
*/
