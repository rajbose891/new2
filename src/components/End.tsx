import { SButton, SFlex, SImage } from 'react-simple-ui-lib';
import { LuHome } from 'react-icons/lu';
import { FaBoxTissue } from 'react-icons/fa6';
import { IoAccessibilitySharp, IoBagOutline, IoNotificationsOutline, IoSettings } from 'react-icons/io5';
import { VscGraph } from 'react-icons/vsc';
import { RxExit } from 'react-icons/rx';
import styles from './App.tsx/App.module.scss';
import { FaChessKing } from 'react-icons/fa';
import { GiJeweledChalice, GiMagicBroom } from 'react-icons/gi';

export function End () {
    return (
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
                                <SButton style={{background: 'transparent'}}>
                                    <FaChessKing style={{background: 'transparent'}}></FaChessKing>
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
                                <SButton style={{background: 'transparent'}}>
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
                                <SButton style={{background: 'transparent'}}>
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
    );
}
