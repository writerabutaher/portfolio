import React from 'react'
import orbitZone from '../../assets/projects/orbit-zone.png';
import eyeCare from '../../assets/projects/eye-care.png';
import goodFood from '../../assets/projects/good-food.png';

function Projects() {

    const projects = [
        {
            name: 'Orbit Zone',
            img: orbitZone,
            details: 'The Website is like buy and sell old car. Home Page you will see some categories of car. The categories have there some cars users or sellers post that. You can book your own car. There are a dashboard section. You can see your order.and you can post a product. Also you can adverse you post.',
            tech: [
                'HTML',
                'Tailwind CSS',
                'JavaScript',
                'Firebase',
                'React',
                'MongoDB',
                'Node JS',
                'Express JS',
            ]
        },
        {
            name: 'Eye Care',
            img: { eyeCare },
            details: 'There are some services of Eye Care. A review slider in home Page. Service details page show details of that service. Some review of user. you can add your review. also you can add your service. there are authentication for user.',
            tech: [
                'HTML',
                'Tailwind CSS',
                'JavaScript',
                'Firebase',
                'React',
                'MongoDB',
                'Node JS',
                'Express JS',
            ]
        },
        {
            name: 'Good Food',
            img: { goodFood },
            details: 'This is a Website for Good Foods and Some Categories Like Chicken, Veggie, Cream, Fish, Burger, Juice . It is build with React JS and Authenticate with Firebase.',
            tech: [
                'HTML',
                'Tailwind CSS',
                'JavaScript',
                'Firebase',
                'React',
            ]
        }
    ]

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            {
                projects.map((e, i) => {
                    const { name, img, details, tech } = e;
                    return (
                        <div key={i} className="grid gap-5 my-6 row-gap-10 lg:grid-cols-2">
                            <div className="flex flex-col justify-center">
                                <div className="max-w-xl mb-6">
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                        {name}
                                    </h2>
                                    <p className="text-base text-gray-700 md:text-lg">
                                        {details}
                                    </p>
                                </div>
                                <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                                    Technology
                                </p>
                                <div className=" grid sm:grid-cols-2">
                                    {
                                        tech.map((e, i) => {
                                            return (
                                                <li key={i} className="flex">
                                                    <span className="mr-1">
                                                        <svg
                                                            className="w-6 h-6 mt-px text-deep-purple-accent-400"
                                                            stroke=""
                                                            viewBox="0 0 52 52"
                                                        >
                                                            <polygon
                                                                strokeWidth="4"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                fill="#fd6c8c"
                                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                            />
                                                        </svg>
                                                    </span>
                                                    {e}
                                                </li>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div>
                                <img
                                    className="w-full h-56 rounded shadow-lg sm:h-96"
                                    src={img}
                                    alt=""
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Projects