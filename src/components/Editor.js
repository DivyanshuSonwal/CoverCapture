import React from "react";
import CoverImage from "./CoverImage";
import ComponentToImg from "./ComponentToImg";
import Select from 'react-select';
import RandomTheme from './RandomTheme';
// import resetIcon from '../assets/icons/reset.svg'

const defaultSettings = {
	title: "How I built my first project with react",
	bgColor: "#dcd6f7",
	pattern: "",
	download: "PNG",
	author: 'Divyanshu Sonwal',
	icon: { 'label': 'react', 'value': 'react' },
	devIconOptions: {},
	font: 'font-sans',
	theme: 'modern',
	customIcon: ''

};

const devIconsUrl = "https://raw.githubusercontent.com/devicons/devicon/master/devicon.json"
// const devIconOptions = [
// 	{ value: 'None', label: 'None' },
// 	{ value: 'javascript', label: 'Javascript' },
// 	{ value: 'python', label: 'Python' },

class Editor extends React.Component {

	state = defaultSettings;
	componentDidMount() {
		console.log("Mount")
		fetch(devIconsUrl).then(r => r.json()).then(data => {
			data.push({ name: 'custom' })
			this.setState({ devIconOptions: data.map(item => ({ 'value': item.name, 'label': item.name })) })
		})
	}
	handleReset = () => {
		this.setState(defaultSettings);
	};

	getRandomTheme = (theme, Pattern) => {
		this.setState({ bgColor: theme.bgColor, borderColor: theme.bdColor, pattern: Pattern });
	}

	formatOptionLabel = ({ value, label }) => (
		<div className="flex">
			<span className="mr-2">{label}</span>
			<div className="ml-auto mr-2">
				<i className={`devicon-${value}-plain dev-icon text-2xl`}></i>
			</div>
		</div>
	);


	// customOption = props => {
	// 	const { data, innerRef, innerProps } = props;

	// 	return data.name === 'custom' ? (
	// 		<div ref={innerRef} {...innerProps}>
	// 			<input type="file"
	// 				className="text-xl cursor-pointer mb-2 bg-white rounded border"
	// 				onChange={(e) => this.setState({ 'customIcon': URL.createObjectURL(e.target.files[0]) })}
	// 			/>
	// 		</div>
	// 	) : (
	// 		<components.Option {...props} />
	// 	);


	// };


	render() {
		return (
			<div className="flex md:flex-row flex-col bg-gray-50 ">
				<div className="bg-white shadow-sm p-4 flex flex-col md:w-1/4">
					{/* <p className="tagline"><span role="img" aria-label="tool"> 🛠 </span> Creating cover images for your blogs is now super easy</p> */}

					<div className="flex items-center mb-4 ">
						<h1 className=" text-gray-800 text-2xl font-bold ">CoverCapture</h1>
						<a href="https://github.com/DivyanshuSonwal/CoverCapture"
							target="_blank" rel="noopener  noreferrer"
							className="ml-auto mr-2 cursor-pointer">
							<i className=" devicon-github-plain dev-icon text-xl"></i>

						</a>

					</div>
					<div className="m-2 flex flex-col">
						<span className="font-medium">Blog Title</span>
						<textarea
							type="text"
							value={this.state.title}
							placeholder="Enter title here"
							className="border text-gray-700 text-xl rounded  p-2 h-24"
							onChange={(e) => this.setState({ title: e.target.value })}
						/>
					</div>

					<div className="flex flex-col m-2 ">
						<span className="font-medium">Author</span>
						<input
							type="text"
							value={this.state.author}
							placeholder="Author"
							className="border text-gray-700 text-xl rounded bg-white p-2"
							onChange={(e) => this.setState({ author: e.target.value })}
						></input>
					</div>



					<div className="flex items-center">

						<div className="flex flex-col m-2 w-1/2">
							<span className="font-medium">Font</span>

							<select
								value={this.state.font}

								onChange={(e) => this.setState({ font: e.target.value })}

								className=" text-gray-700 text-xl p-2 rounded border">
								<option>font-serif</option>
								<option>font-sans</option>
								<option>font-mono</option>
							</select>
						</div>
						<div className="flex flex-col m-2 ">
							<span className="font-medium">Color</span>
							<div className="border rounded flex items-center p-2">

								<span className="text-sm text-gray-700 font-semibold mx-2">{this.state.bgColor}</span>
								<input type="color" value={this.state.bgColor}
									onChange={(e) => this.setState({ bgColor: e.target.value })}
									className="h-8 w-8  rounded"
								/>
							</div>
						</div>

					</div>






					<div className="flex flex-col m-2 ">
						<span className="font-medium">Icon</span>
						<Select value={this.state.icon}
							onChange={(selectedOption) => this.setState({ icon: selectedOption })}
							options={this.state.devIconOptions}
							formatOptionLabel={this.formatOptionLabel}
							className="text-xl text-gray-700"
						/>
					</div>

					{this.state.icon.label === 'custom' ?
						<div className="flex items-center justify-center m-2">
							<input type="file"
								className="text-lg cursor-pointer bg-white rounded border"
								onChange={(e) => this.setState({ 'customIcon': URL.createObjectURL(e.target.files[0]) })}
							/>
						</div>
						:
						<div></div>
					}

					<div className="flex">


						<div className="flex flex-col m-2 w-1/2">
							<span className="font-medium">Pattern</span>
							<select
								onChange={(e) => this.setState({ pattern: e.target.value })}
								className="border text-xl p-2 rounded"
								value={this.state.pattern}>

								<option>None</option>
								<option>graph-paper</option>
								<option>jigsaw</option>
								<option>hideout</option>
								<option>dots</option>
								<option>falling-triangles</option>
								<option>circuit-board</option>
								<option>temple</option>
								<option>anchors</option>
								<option>brickwall</option>
								<option>overlapping-circles</option>
								<option>wiggle</option>
								<option>tic-tac-toe</option>
								<option>leaf</option>
								<option>bubbles</option>
								<option>squares</option>
								<option>explorer</option>
								<option>jupiter</option>
								<option>sun</option>
							</select>
						</div>

						<div className="flex flex-col m-2 w-1/2">
							<span className="font-medium">Theme</span>

							<select
								onChange={(e) => this.setState({ theme: e.target.value })}
								value={this.state.theme}

								className="text-gray-700 text-xl p-2 rounded border">
								<option>basic</option>
								<option>modern</option>
								<option>outline</option>
								<option>preview</option>

							</select>
						</div>

					</div>




					{/* <div className="mx-4 my-1">
						<h6>Download As</h6>
						<select onChange={(e) => this.setState({ download: e.target.value })}
							className="form-control input"
							value={this.state.download}>
							<option>PNG</option>
							<option>JPEG</option>
						</select>
					</div> */}



				</div>

				<div className="m-2 items-center justify-center flex flex-col">
					<RandomTheme onThemeChange={this.getRandomTheme} />
					{/* <button
						className="flex items-center mx-auto border"
						onClick={this.handleReset}>
						<img src={resetIcon} className="shuffle-btn border bg-white p-2 rounded cursor-pointer"/>
					</button> */}
				</div>

				<div className="flex flex-col items-center justify-center ">
					{/* <div className="flex mb-4 items-center bg-white p-2 mt-2 rounded justify-center w-full">
						<span className="mx-4 text-md font-semibold">Coverview is live on Product Hunt Today.</span>
						<a href="https://www.producthunt.com/posts/coverview-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-coverview&#0045;2" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=343671&theme=light" alt="Coverview - Creating&#0032;cover&#0032;images&#0032;for&#0032;your&#0032;blog&#0032;is&#0032;now&#0032;super&#0032;easy | Product Hunt" className="w-2/3" /></a>

					</div> */}
					<ComponentToImg downloadAs={this.state.download}>
						<CoverImage {...this.state} />
					</ComponentToImg>
				</div>

			</div>
		);
	}
}

export default Editor;
