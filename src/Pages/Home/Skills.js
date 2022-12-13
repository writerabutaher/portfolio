import React from 'react'

function Skills() {

    const skills = [
        {
            skill: 'HTML',
            img: 'https://img.icons8.com/ios/512/html-5.png'
        },
        {
            skill: 'CSS',
            img: 'https://img.icons8.com/ios/512/css3.png'
        },
        {
            skill: 'Bootstrap',
            img: 'https://img.icons8.com/windows/512/bootstrap.png'
        },
        {
            skill: 'Tailwind',
            img: 'https://img.icons8.com/ios/512/sass.png'
        },
        {
            skill: 'JavaScript',
            img: 'https://img.icons8.com/ios/512/javascript.png'
        },
        {
            skill: 'React',
            img: 'https://img.icons8.com/wired/512/react.png'
        },
        {
            skill: 'Firebase',
            img: 'https://img.icons8.com/material-outlined/512/firebase.png'
        },
        {
            skill: 'MongoDB',
            img: 'https://img.icons8.com/external-tal-revivo-regular-tal-revivo/512/external-mongodb-a-cross-platform-document-oriented-database-program-logo-regular-tal-revivo.png'
        },
    ]

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">My Skills</h2>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-12 xl:gap-16">
                    {
                        skills.map((e, i) => {
                            const { img, skill } = e;
                            return (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-20 flex justify-center items-center bg-pink-500 text-white rounded-lg md:rounded-xl shadow-lg mb-6 p-4">
                                        <img className='' src={img} alt="" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold text-center mb-2">{skill}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills