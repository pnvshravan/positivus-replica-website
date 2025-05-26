import './team.css';
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";


const Team = ()=>{

    const team_list = [
        {
            classid: 'john-s',
            name: 'John Smith',
            role: 'CEO and Founder',
            desc: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.'
        },
        {
            classid: 'jane-d',
            name: 'Jane Doe',
            role: 'Director of Operations',
            desc: '7+ years of experience in project management and team leadership. Strong organizational and communication skills.'
        },
        {
            classid: 'mich-b',
            name: 'Micheal Brown',
            role: 'Senior SEO Specialist',
            desc: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.'
        },
        {
            classid: 'emily-j',
            name: 'Emily Johnson',
            role: 'PPC Manager',
            desc: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.'
        },
        {
            classid: 'brian-w',
            name: 'Brian Williams',
            role: 'Social Media Specialist',
            desc: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.'
        },
        {
            classid: 'sarah-k',
            name: 'Sarah Kim',
            role: 'Content Creator',
            desc: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.'
        }
    ]

    const [toggle, setToggle] = useState(false);
    
    function openmenu(){
        setToggle(true);
    }

    function closemenu(){
        setToggle(false);
    }

    return(
        <>
            <section className='team-section'>
                <div className='team-container container'>
                    <div className='team-heading'>
                        <h2 className='font-h2'><mark>Team</mark></h2>
                        <p>
                            Meet the skilled and experienced team behind our successful digital marketing strategies
                        </p>
                    </div>
                    <div className='team-list'>
                        {team_list.slice(0,3).map((item, index)=>(
                            <div className='team-member' key={index}>
                                <div className='tm-pi'>
                                    <div className='tm-pi-left'>
                                        <div className={`${item.classid}`}></div>
                                        <div className='tm-name'>
                                            <h4 className='font-p'>{item.name}</h4>
                                            <p>{item.role}</p>
                                        </div>
                                    </div>
                                    <a href=""><span><FaLinkedin size={24}/></span></a>
                                </div>
                                <hr/>
                                <p className='tm-desc'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                        {
                            <div className={`team-list-expanded ${toggle ? 'open' : 'hidden'}`}>
                                {
                                    team_list.slice(3,6).map((item, index)=>(
                                        <div className='team-member' key={index}>
                                            <div className='tm-pi'>
                                                <div className={`${item.classid}`}></div>
                                                <div className='tm-name'>
                                                    <h4 className='font-p'>{item.name}</h4>
                                                    <p>{item.role}</p>
                                                </div>
                                                <a href=""><span><FaLinkedin size={24}/></span></a>
                                            </div>
                                            <hr/>
                                            <p className='tm-desc'>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                        }
                        <button className='seeAll-btn' onClick={() => toggle ? closemenu() : openmenu()}>
                            {toggle ? 'Show less' : 'See all team'}
                    </button>
                </div>
            </section>
        </>
    );
}

export default Team;