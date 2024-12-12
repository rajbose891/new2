import { SButton, SFlex, SImage, SPageSection } from 'react-simple-ui-lib';
import { FaRegHandPointRight } from 'react-icons/fa';
import styles from './App.module.scss';
import { IoBagOutline, IoNotificationsOutline } from 'react-icons/io5';
import { Header } from '../header.tsx';
import { Middle } from '../Middle.tsx';
import { SlArrowDown } from 'react-icons/sl';
import { CgArrowLongRightL } from 'react-icons/cg';
import { HiArrowSmallRight } from 'react-icons/hi2';

const my_images = ['/88.jpg', '/99.jpeg', '/404.jpeg', '/303.jpeg'];

export default function App() {
    return (
        <SFlex
            style={{
                border: '10px lightblue',
                borderRadius: '15px',
            }}
        >
            <SPageSection backgroundUrl={'2848.jpg'} height={'auto'} width={'100%'}>
                <SFlex
                    width={'100%'}
                    align={'center'}
                    justify={'center'}
                    paddingTop={10}
                    paddingBottom={10}
                    padding={10}
                    style={{
                        border: '10px solid white',
                        borderRadius: '15px',
                        background: 'transparent',
                    }}
                >
                    <SPageSection
                        height={'auto'}
                        direction={'column'}
                        justify={'space-between'}
                        width={'100%'}
                        paddingTop={10}
                        paddingBottom={10}
                        padding={10}
                        style={{ background: 'transparent' }}
                    >
                        <SFlex>
                            <Header></Header>

                            <SFlex
                                paddingTop={15}
                                padding={5}
                                direction={'column'}
                                width={'60%'}
                                style={{
                                    background: 'darkslategrey',
                                    opacity: '0.8',
                                    borderRadius: '5px',
                                }}
                            >
                                <SImage
                                    src={'/333333.jpg'}
                                    backgroundSize={'cover'}
                                    height={80}
                                    width={'100%'}
                                    align={'center'}
                                    justify={'center'}
                                    style={{ borderRadius: '15px' }}
                                >
                                    <SFlex direction={'column'} align={'center'}>
                                        <h5 style={{ color: 'black' }}>WELCOME TO</h5>
                                        <h2 style={{ color: 'black', fontStyle: '-moz-initial' }}>THE WALKERS ADVENTURES</h2>
                                    </SFlex>
                                </SImage>

                                <br />

                                <Middle></Middle>
                            </SFlex>

                            <SFlex justify={'space-between'} width={'100%'} direction={'column'} paddingTop={20} padding={10}>
                                <SFlex justify={'space-between'} width={'80%'} padding={20}>
                                    <SFlex>
                                        <SFlex
                                            className={styles.Box}
                                            style={{ borderRadius: '100px' }}
                                            width={25}
                                            height={25}
                                            align={'center'}
                                            justify={'center'}
                                        >
                                            <IoBagOutline style={{ color: 'white' }}></IoBagOutline>
                                        </SFlex>
                                        <br />
                                        <SFlex
                                            className={styles.Box}
                                            style={{ borderRadius: '100px' }}
                                            width={25}
                                            height={25}
                                            align={'center'}
                                            justify={'center'}
                                        >
                                            <IoNotificationsOutline style={{ color: 'white' }}></IoNotificationsOutline>
                                        </SFlex>
                                    </SFlex>
                                    <SFlex>
                                        <SFlex align={'end'} direction={'column'}>
                                            <h2>USER</h2>
                                            <SButton>
                                                <h4 style={{ color: 'goldenrod' }}>SIGN IN / SIGN OUT</h4>
                                            </SButton>
                                        </SFlex>
                                        <SImage
                                            src={'/11.jpg'}
                                            backgroundSize={'contain'}
                                            style={{ borderRadius: '100px', border: '1px solid black' }}
                                            width={60}
                                            height={60}
                                        />
                                    </SFlex>
                                </SFlex>
                                <SFlex
                                    direction={'column'}
                                    className={styles.Box}
                                    style={{
                                        borderRadius: '20px',
                                        opacity: '0.5',
                                    }}
                                    width={'100%'}
                                    height={400}
                                    align={'start'}
                                    padding={20}
                                >
                                    <SFlex justify={'space-between'} paddingTop={15} height={'100%'} width={'100%'}>
                                        <SFlex direction={'column'}>
                                            <h2 color={'white'}>Why Choose Us?</h2>
                                            <SButton style={{ background: 'transparent' }}>
                                                <SlArrowDown></SlArrowDown>
                                            </SButton>
                                            <SFlex>
                                                <FaRegHandPointRight></FaRegHandPointRight>

                                                <h4>Escape Manali</h4>
                                                <CgArrowLongRightL></CgArrowLongRightL>
                                                <h6>From hustle bustle to complete peace/Experience mountains the way it is!</h6>
                                            </SFlex>
                                            <SFlex>
                                                <FaRegHandPointRight></FaRegHandPointRight>

                                                <h4>Camping</h4>
                                                <CgArrowLongRightL></CgArrowLongRightL>

                                                <h6>Your portable house</h6>
                                            </SFlex>

                                            <SFlex>
                                                <FaRegHandPointRight></FaRegHandPointRight>

                                                <h4>Divine place</h4>
                                                <CgArrowLongRightL></CgArrowLongRightL>

                                                <h6>The ancient and divines of kullu</h6>
                                            </SFlex>
                                            <SFlex>
                                                <FaRegHandPointRight></FaRegHandPointRight>

                                                <h4>Group</h4>
                                                <CgArrowLongRightL></CgArrowLongRightL>

                                                <h6>The strangers family of walkers</h6>
                                            </SFlex>
                                            <SFlex>
                                                <FaRegHandPointRight></FaRegHandPointRight>

                                                <h4>Hosting</h4>
                                                <CgArrowLongRightL></CgArrowLongRightL>

                                                <h6>The summit</h6>
                                            </SFlex>
                                            <br />
                                            <SFlex>
                                                <FaRegHandPointRight></FaRegHandPointRight>
                                                <h4>Sleeping bag</h4>
                                                <CgArrowLongRightL></CgArrowLongRightL>

                                                <h6>The comfort and warmth</h6>
                                            </SFlex>
                                            <br />
                                            <HiArrowSmallRight></HiArrowSmallRight>
                                        </SFlex>
                                    </SFlex>
                                </SFlex>
                                <SFlex
                                    direction={'column'}
                                    className={styles.Box}
                                    style={{ borderRadius: '20px', opacity: '0.5' }}
                                    width={'100%'}
                                    height={350}
                                    align={'center'}
                                    paddingTop={10}
                                >
                                    <SFlex direction={'column'}>
                                        <h2 color={'white'}>our facilities</h2>
                                        <SButton style={{ background: 'transparent' }}>
                                            <SlArrowDown></SlArrowDown>
                                        </SButton>
                                        <SFlex>
                                            <CgArrowLongRightL></CgArrowLongRightL>

                                            <h4>VEHICLES</h4>
                                        </SFlex>
                                        <SFlex>
                                            <CgArrowLongRightL></CgArrowLongRightL>

                                            <h4>ECO FRIENDLY</h4>
                                        </SFlex>
                                        <SFlex>
                                            <CgArrowLongRightL></CgArrowLongRightL>

                                            <h4>OFF BEAT PLACES</h4>
                                        </SFlex>
                                    </SFlex>
                                </SFlex>
                            </SFlex>
                        </SFlex>
                        <br />
                        <SFlex
                            height={180}
                            width={'100%'}
                            style={{
                                border: '2px solid black',
                                background: 'slategrey',
                                borderRadius: '10px',
                                opacity: '0.6',
                            }}
                            justify={'space-between'}
                            padding={10}
                            paddingTop={10}
                        >
                            <SFlex
                                height={160}
                                width={'55%'}
                                style={{ border: '2px solid black', background: 'whitesmoke', borderRadius: '10px' }}
                                justify={'center'}
                                align={'start'}
                            >
                                <h2 style={{ color: 'brown' }}>LATEST POST</h2>
                            </SFlex>
                            <SFlex
                                height={160}
                                width={'30%'}
                                style={{ border: '2px solid black', background: 'whitesmoke', borderRadius: '10px' }}
                                justify={'center'}
                                align={'start'}
                            >
                                <h2 style={{ color: 'brown' }}>REVIEWS</h2>
                            </SFlex>
                        </SFlex>
                        <br />
                        <SFlex
                            height={50}
                            width={'30%'}
                            style={{
                                background: 'whitesmoke',
                                border: '2px solid blue',
                                borderRadius: '15px',
                                opacity: '0.5',
                            }}
                            align={'center'}
                            justify={'center'}
                            direction={'column'}
                        >
                            <SButton>
                                <h2>Join The Newsletter Today</h2>
                            </SButton>
                            <SButton>
                                <h4>for latest Udates</h4>

                                <CgArrowLongRightL></CgArrowLongRightL>
                            </SButton>
                        </SFlex>
                        <br />
                        <SFlex width={'100%'} justify={'space-between'}>
                            <SFlex
                                height={100}
                                width={'47%'}
                                justify={'space-between'}
                                style={{
                                    background: 'whitesmoke',
                                    border: '2px solid blue',
                                    borderRadius: '15px',
                                    opacity: '0.5',
                                }}
                            >
                                <h2 style={{ color: 'black' }}>company details :</h2>
                            </SFlex>
                            <SFlex
                                height={100}
                                width={'27%'}
                                justify={'space-between'}
                                style={{
                                    background: 'whitesmoke',
                                    border: '2px solid blue',
                                    borderRadius: '15px',
                                    opacity: '0.5',
                                }}
                            >
                                <h2 style={{ color: 'black' }}>contact details :</h2>
                            </SFlex>
                        </SFlex>
                    </SPageSection>
                </SFlex>
            </SPageSection>
        </SFlex>
    );
}
