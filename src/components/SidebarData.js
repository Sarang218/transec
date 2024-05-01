// Filename - components/SidebarData.js

import React from "react";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
	{
		title: "Stage1",
		path: "/Stage1",
		icon: <IoIcons.IoIosFolder  />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "1.1 Stage",
				path: "/Stage2/1.1 Stage",
				icon: <IoIcons.IoIosFolder />,
			},
			{
				title: "1.2 Stage",
				path: "/Stage2/1.2 Stage",
				icon: <IoIcons.IoIosFolder />,
			},
		],
	},
	{
		title: "Stage2",
		path: "/Stage2",
		icon: <IoIcons.IoIosFolder />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "2.1 Stage2",
				path: "/Stage2/2.1 Stage",
				icon: <IoIcons.IoIosFolder />,
				cName: "sub-nav",
			},
			{
				title: "2.2 Stage2",
				path: "/Stage2/2.2 Stage",
				icon: <IoIcons.IoIosFolder />,
				cName: "sub-nav",
			},
			{
				title: "2.3 Stage2",
				path: "/Stage2/2.3 Stage",
				icon: <IoIcons.IoIosFolder />,
			},
		],
	},
	{
		title: "Stage3",
		path: "/Stage3",
		icon: <IoIcons.IoIosFolder />,
	},
	{
		title: "Stage4",
		path: "/Stage4",
		icon: <IoIcons.IoIosFolder/>,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "4.1 Stage4",
				path: "/Stage4/4.1 Stage",
				icon: <IoIcons.IoIosFolder />,
			},
			{
				title: "4.2 Stage4",
				path: "/Stage4/4.2 Stage",
				icon: <IoIcons.IoIosFolder />,
			},
		],
	},
	{
		title: "Stage5",
		path: "/Stage5",
		icon: <IoIcons.IoIosFolder />,
	},
];
