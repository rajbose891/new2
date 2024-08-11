import { SButton, SFlex, SImage } from 'react-simple-ui-lib';
import { FaChessKing, FaSearch } from 'react-icons/fa';
import styles from './App.module.scss';
import { IoBagOutline, IoNotificationsOutline } from 'react-icons/io5';
import { GiJeweledChalice, GiMagicBroom } from 'react-icons/gi';
import { Header } from '../header.tsx';
import { Middle } from '../Middle.tsx';

export default function App() {
    return (
        <SFlex width={'100%'} style={{ background: 'goldenrod' }} align={'center'} justify={'center'} paddingTop={30} paddingBottom={30}>
            <SFlex
                justify={'space-between'}
                width={'90%'}
                style={{
                    background: 'rgb(61,40,40)',
                    background: 'linear-gradient(90deg, rgba(61,40,40,1) 27%, rgba(60,54,54,1) 100%, rgba(0,212,255,1) 100%)',
                    borderRadius: '20px',
                }}
            >
                <Header></Header>
                <SFlex paddingTop={15} direction={'column'}>
                    <SFlex
                        width={500}
                        height={35}
                        style={{
                            background: 'rgb(27,12,131)',
                            background: 'linear-gradient(90deg, rgba(27,12,131,0.2685111667798913) 0%, rgba(99,99,113,0.9757575767627661) 0%)',
                            borderRadius: '25px',
                        }}
                        align={'center'}
                    >
                        <br /> <FaSearch style={{ color: 'goldenrod' }}></FaSearch>
                        <h6> Search everything</h6>
                    </SFlex>
                    <br />
                    <SFlex
                        width={'100%'}
                        height={170}
                        style={{
                            background: 'rgb(2,0,36)',
                            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(91,93,62,1) 39%, rgba(152,160,46,0.8513833971991055) 72%)',
                            borderRadius: '20px',
                        }}
                        align={'start'}
                        padding={10}
                        justify={'space-between'}
                    >
                        <SFlex direction={'column'} paddingTop={15}>
                            <h5 style={{ color: 'goldenrod' }}>NFT marketplace</h5>
                            <h2 style={{ color: 'whitesmoke', fontStyle: '-moz-initial' }}>Play game, collect item and earn money with Viego</h2>
                            <SFlex width={200} height={30} align={'center'} justify={'center'} style={{ background: 'goldenrod', borderRadius: '15px' }}>
                                <h5 style={{ color: 'white' }}>Place a bit </h5>
                            </SFlex>
                        </SFlex>
                        <br />
                        <SImage src={'/101.jpeg'} backgroundSize={'contain'} height={170} width={400} />
                    </SFlex>
                    <SFlex justify={'space-between'} width={'100%'} paddingTop={10}>
                        <h5>Trading aunctions</h5>
                        <h5>View all</h5>
                    </SFlex>
                    <Middle></Middle>
                </SFlex>
                <SFlex justify={'space-between'} width={'100%'} direction={'column'} paddingTop={20} padding={10}>
                    <SFlex justify={'space-between'} width={'100%'} padding={20}>
                        <SFlex>
                            <SFlex className={styles.Box} style={{ borderRadius: '100px' }} width={25} height={25} align={'center'} justify={'center'}>
                                <IoBagOutline style={{ color: 'white' }}></IoBagOutline>
                            </SFlex>
                            <br />
                            <SFlex className={styles.Box} style={{ borderRadius: '100px' }} width={25} height={25} align={'center'} justify={'center'}>
                                <IoNotificationsOutline style={{ color: 'white' }}></IoNotificationsOutline>
                            </SFlex>
                        </SFlex>
                        <SFlex>
                            <SFlex align={'end'} direction={'column'}>
                                <h2>Drake</h2>
                                <h6 style={{ color: 'goldenrod' }}>Premium user</h6>
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
                        style={{ borderRadius: '20px' }}
                        width={'100%'}
                        height={575}
                        align={'start'}
                        padding={20}
                    >
                        <SFlex justify={'space-between'} paddingTop={15}>
                            <SImage
                                src={'/505.jpeg'}
                                backgroundSize={'cover'}
                                height={90}
                                width={60}
                                style={{ border: '1px solid black', borderRadius: '20px' }}
                            />
                            <SFlex paddingTop={30} direction={'column'}>
                                <h2 color={'white'}>8.99 ETH</h2>
                                <h4>$28,768</h4>
                            </SFlex>
                        </SFlex>
                        <SFlex width={'100%'} height={70} align={'center'} justify={'center'} style={{ background: 'goldenrod', borderRadius: '10px' }}>
                            <h5 style={{ color: 'white' }}>Deposit </h5>
                        </SFlex>
                        <SFlex paddingTop={5} justify={'space-between'} width={'100%'}>
                            <h3>Statistic</h3>
                            <h6>Details</h6>
                        </SFlex>
                        <SImage src={'/99.jpeg'} backgroundSize={'cover'} height={500} width={'100%'} />
                        <SFlex justify={'space-between'} width={'100%'}>
                            <h3>Transactions</h3>
                            <h6>View all</h6>
                        </SFlex>
                        <SFlex direction={'column'} justify={'space-between'} height={'100%'} width={'100%'} marginBottom={10}>
                            <SFlex justify={'space-between'} width={'100%'}>
                                <SButton style={{ background: 'transparent' }}>
                                    <FaChessKing style={{ background: 'transparent' }}></FaChessKing>
                                </SButton>
                                <SFlex justify={'space-between'} width={'100%'}>
                                    <h6>
                                        Bid on RED RUBY RING <br />
                                        Jul 15, 2024, 11.04 pm
                                    </h6>
                                    <h5> 0.73 ETH</h5>
                                </SFlex>
                            </SFlex>
                            <SFlex justify={'space-between'} width={'100%'}>
                                <SButton style={{ background: 'transparent' }}>
                                    <GiJeweledChalice></GiJeweledChalice>
                                </SButton>
                                <SFlex justify={'space-between'} width={'100%'}>
                                    <h6>
                                        Bid on king'S TRASURE <br />
                                        Jul 15, 2024, 11.04 pm
                                    </h6>
                                    <h5> 0.38 ETH</h5>
                                </SFlex>
                            </SFlex>
                            <SFlex justify={'space-between'} width={'100%'}>
                                <SButton style={{ background: 'transparent' }}>
                                    <GiMagicBroom></GiMagicBroom>
                                </SButton>
                                <SFlex justify={'space-between'} width={'100%'}>
                                    <h6>
                                        Bid on MAGICIAN SLOTS <br />
                                        Jul 15, 2024, 11.04 pm
                                    </h6>
                                    <h5> 0.54 ETH</h5>
                                </SFlex>
                            </SFlex>
                        </SFlex>
                    </SFlex>
                </SFlex>
            </SFlex>
        </SFlex>
    );
}
