"use client";

import React, { useEffect } from "react";
import { themeChange } from "theme-change";
import Logo from "../Logo";

const NavigationBar = () => {
	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<a>Parent</a>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div>
				<Logo />
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a>Item 1</a>
					</li>
					<li tabIndex={0}>
						<details>
							<summary>Parent</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<a>Item 3</a>
					</li>
				</ul>
			</div>
			<select
				className="select w-full max-w-xs"
				data-choose-theme
				data-key="theme"
			>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
				<option value="dark">Dark</option>
				<option value="cupcake">Cupcake</option>
				<option value="bumblebee">Bumblebee</option>
				<option value="emerald">Emerald</option>
				<option value="corporate">Corporate</option>
				<option value="synthwave">Synthwave</option>
				<option value="retro">Retro</option>
				<option value="cyberpunk">Cyberpunk</option>
				<option value="valentine">Valentine</option>
				<option value="halloween">Halloween</option>
				<option value="garden">Garden</option>
				<option value="forest">Forest</option>
				<option value="aqua">Aqua</option>
				<option value="lofi">Lofi</option>
				<option value="pastel">Pastel</option>
				<option value="fantasy">Fantasy</option>
				<option value="wireframe">Wireframe</option>
				<option value="black">Black</option>
				<option value="luxury">Luxury</option>
				<option value="dracula">Dracula</option>
				<option value="cmyk">CMYK</option>
				<option value="autumn">Autumn</option>
				<option value="business">Business</option>
				<option value="acid">Acid</option>
				<option value="lemonade">Lemonade</option>
				<option value="night">Night</option>
				<option value="coffee">Coffee</option>
				<option value="winter">Winter</option>
			</select>
			<div className="navbar-end">
				<a className="btn">Button</a>
			</div>
		</div>
	);
};

export default NavigationBar;
