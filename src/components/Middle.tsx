import { SFlex, SImage } from 'react-simple-ui-lib';
import { FaRegHeart } from 'react-icons/fa';
import styles from './App.tsx/App.module.scss';

export function Middle() {
    return (
        <SFlex direction={'column'}>
            <SFlex justify={'space-between'} width={'100%'}>
                <SFlex width={380} height={170} paddingTop={10} padding={10} className={styles.Box}>
                    <SFlex direction={'column'} padding={10}>
                        <SFlex width={100} height={20} align={'center'} justify={'center'} style={{ background: 'goldenrod', borderRadius: '15px' }}>
                            <h5 style={{ color: 'white' }}>Time </h5>
                        </SFlex>
                        <h6 style={{ color: 'whitesmoke' }}>Golden king Armor</h6>
                        <h8 style={{ color: 'whitesmoke' }}>A golden armor of a sky angel that contains the shine</h8>
                        <s style={{ color: 'whitesmoke' }}>Current bid</s>
                        <h6 style={{ color: 'whitesmoke' }}>1.23 ETH</h6>
                    </SFlex>
                    <SImage src={'/22.jpeg'} backgroundSize={'contain'} height={150} width={150} />
                </SFlex>

                <SFlex direction={'column'} align={'end'}>
                    <SFlex width={380} height={170} paddingTop={10} padding={10} className={styles.Box}>
                        <SFlex direction={'column'} padding={10}>
                            <SFlex width={100} height={20} align={'center'} justify={'center'} style={{ background: 'goldenrod', borderRadius: '15px' }}>
                                <h5 style={{ color: 'white' }}>Time </h5>
                            </SFlex>
                            <h6 style={{ color: 'whitesmoke' }}>ROYAL MAGIC BOOK</h6>
                            <h8 style={{ color: 'whitesmoke' }}>The book's owner have the power of controlling p....</h8>
                            <s style={{ color: 'whitesmoke' }}>Current bid</s>
                            <h6 style={{ color: 'whitesmoke' }}>1.09 ETH</h6>
                        </SFlex>
                        <SImage src={'/303.jpeg'} backgroundSize={'contain'} height={150} width={150} />
                    </SFlex>
                </SFlex>
            </SFlex>
            <SFlex paddingTop={15} justify={'space-between'} width={'100%'}>
                <h5>Recommended NFTs</h5>
                <h5>⬅️04/12➡️</h5>
            </SFlex>
            <SFlex paddingBottom={10}>
                <SFlex width={188} height={140} paddingTop={10} className={styles.Box} align={'center'} justify={'center'}>
                    <SFlex direction={'column'} padding={10}>
                        <SFlex>
                            <p style={{ color: 'white' }}>Hextech's key</p>
                            <br />
                            <FaRegHeart style={{ color: 'white' }}></FaRegHeart>
                        </SFlex>
                        <SImage src={'/55.jpeg'} backgroundSize={'contain'} height={70} width={'100%'} />
                        <SFlex justify={'space-between'} width={'100%'}>
                            <h6 style={{ color: 'white' }}> 0.93 ETH </h6>
                            <br />
                            <h6 style={{ color: 'white' }}> $ 3,100</h6>
                        </SFlex>
                    </SFlex>
                </SFlex>

                <SFlex width={188} height={140} paddingTop={10} className={styles.Box} align={'center'} justify={'center'}>
                    <SFlex direction={'column'} padding={10} width={'100%'}>
                        <SFlex>
                            <p style={{ color: 'white' }}>Knight silver Axe</p>
                            💛
                        </SFlex>
                        <SImage src={'/66.jpg'} backgroundSize={'contain'} height={70} width={'100%'} />
                        <SFlex justify={'space-between'} width={'100%'}>
                            <h6 style={{ color: 'white' }}> 0.52 ETH </h6>
                            <br />
                            <h6 style={{ color: 'white' }}> $ 1,732</h6>
                        </SFlex>
                    </SFlex>
                </SFlex>
                <SFlex width={188} height={140} paddingTop={10} className={styles.Box} align={'center'} justify={'center'}>
                    <SFlex direction={'column'} padding={10}>
                        <SFlex>
                            <p style={{ color: 'white' }}>Wizard's Poition</p>
                            <br />
                            <FaRegHeart style={{ color: 'white' }}></FaRegHeart>
                        </SFlex>
                        <SImage src={'/77.jpg'} backgroundSize={'contain'} height={70} width={'100%'} />
                        <SFlex justify={'space-between'} width={'100%'}>
                            <h6 style={{ color: 'white' }}> 0.78 ETH </h6>
                            <br />
                            <h6 style={{ color: 'white' }}> $ 2,600</h6>
                        </SFlex>
                    </SFlex>
                </SFlex>
                <SFlex width={188} height={140} paddingTop={10} className={styles.Box} align={'center'} justify={'center'}>
                    <SFlex direction={'column'} padding={10}>
                        <SFlex>
                            <p style={{ color: 'white' }}>Eagle's Archary</p>
                            <br />
                            <FaRegHeart style={{ color: 'white' }}></FaRegHeart>
                        </SFlex>
                        <SImage src={'/88.jpg'} backgroundSize={'contain'} height={70} width={'100%'} />
                        <SFlex justify={'space-between'} width={'100%'}>
                            <h6 style={{ color: 'white' }}> 0.39 ETH </h6>
                            <br />
                            <h6 style={{ color: 'white' }}> $ 1,326</h6>
                        </SFlex>
                    </SFlex>
                </SFlex>
            </SFlex>
        </SFlex>
    );
}
