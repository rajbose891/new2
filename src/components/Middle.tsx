import { SButton, SFlex, SImage } from 'react-simple-ui-lib';
import { FaRegHeart, FaSearch } from 'react-icons/fa';
import styles from './App.tsx/App.module.scss';
import { CiDiscount1 } from 'react-icons/ci';
import { GiMeal } from 'react-icons/gi';
import { LuHotel } from 'react-icons/lu';
import { FaMapMarkedAlt } from 'react-icons/fa';

export function Middle() {
    return (
        <SFlex width={'100%'} height={'auto'}>
            <SFlex direction={'column'} width={'100%'}>
                <SFlex justify={'space-between'} width={'100%'} paddingTop={10}>
                    <h5>MOST POPULAR TREK</h5>
                    <SButton>
                        <h5>View all</h5>
                    </SButton>
                </SFlex>
                <SFlex direction={'column'} width={'100%'}>
                    <SFlex justify={'space-between'} width={'100%'}>
                        <SFlex width={180} height={150} className={styles.Box} direction={'column'} align={'end'}>
                            <SImage
                                src={'/6549.webp'}
                                backgroundSize={'cover'}
                                width={'100%'}
                                height={'100%'}
                                align={'center'}
                                justify={'center'}
                                style={{ borderRadius: '15px' }}
                            >
                                <SButton
                                    width={100}
                                    height={20}
                                    align={'start'}
                                    justify={'center'}
                                    style={{
                                        borderRadius: '15px',
                                    }}
                                >
                                    <a href="https://www.holidify.com/places/manali/map-view.html">MANALI</a>
                                </SButton>
                            </SImage>
                            <SButton
                                width={100}
                                height={20}
                                align={'start'}
                                justify={'center'}
                                style={{
                                    borderRadius: '15px',
                                }}
                            >
                                <p>Rs. 00000</p>
                            </SButton>
                        </SFlex>
                        <SFlex width={180} height={150} className={styles.Box} direction={'column'} align={'end'}>
                            <SImage
                                src={'/3214.jpg'}
                                backgroundSize={'cover'}
                                width={'100%'}
                                height={'100%'}
                                align={'center'}
                                justify={'center'}
                                style={{ borderRadius: '15px' }}
                            >
                                <SButton
                                    width={100}
                                    height={20}
                                    align={'start'}
                                    justify={'center'}
                                    style={{
                                        borderRadius: '15px',
                                    }}
                                >
                                    <a href="https://www.holidify.com/places/kedarnath/map-view.html">KEDARNATH</a>
                                </SButton>
                            </SImage>
                            <SButton
                                width={100}
                                height={20}
                                align={'start'}
                                justify={'center'}
                                style={{
                                    borderRadius: '15px',
                                }}
                            >
                                <p>Rs. 00000</p>
                            </SButton>
                        </SFlex>
                        <SFlex width={180} height={150} className={styles.Box} direction={'column'} align={'end'}>
                            <SImage
                                src={'/7456.jpg'}
                                backgroundSize={'cover'}
                                width={'100%'}
                                height={'100%'}
                                align={'center'}
                                justify={'center'}
                                style={{ borderRadius: '15px' }}
                            >
                                <SButton
                                    width={100}
                                    height={20}
                                    align={'start'}
                                    justify={'center'}
                                    style={{
                                        borderRadius: '15px',
                                    }}
                                >
                                    <a href="https://www.holidify.com/places/ladakh/map-view.html">Ladakh</a>
                                </SButton>
                            </SImage>
                            <SButton
                                width={100}
                                height={20}
                                align={'start'}
                                justify={'center'}
                                style={{
                                    borderRadius: '15px',
                                }}
                            >
                                <p>Rs. 00000</p>
                            </SButton>
                        </SFlex>
                        <SFlex width={180} height={150} className={styles.Box} direction={'column'} align={'end'}>
                            <SImage
                                src={'/2587.webp'}
                                backgroundSize={'cover'}
                                width={'100%'}
                                height={'100%'}
                                align={'center'}
                                justify={'center'}
                                style={{ borderRadius: '15px' }}
                            >
                                <SButton
                                    width={100}
                                    height={20}
                                    align={'start'}
                                    justify={'center'}
                                    style={{
                                        borderRadius: '15px',
                                    }}
                                >
                                    <a href="https://www.holidify.com/places/auli/map-view.html">AULI</a>
                                </SButton>
                            </SImage>
                            <SButton
                                width={100}
                                height={20}
                                align={'start'}
                                justify={'center'}
                                style={{
                                    borderRadius: '15px',
                                }}
                            >
                                <p>Rs. 00000</p>
                            </SButton>
                        </SFlex>
                    </SFlex>

                    <br />
                    <SFlex
                        width={'70%'}
                        height={'100%'}
                        style={{
                            background: 'rgb(96,147,161)',
                            background: 'linear-gradient(90deg, rgba(96,147,161,1) 0%, rgba(76,195,230,1) 42%)',
                            borderRadius: '10px',
                        }}
                        align={'end'}
                        justify={'space-between'}
                    >
                        <SButton>
                            <FaSearch style={{ color: 'lightgrey' }}></FaSearch>
                        </SButton>

                        <h4> Search your dream destination........</h4>
                    </SFlex>
                </SFlex>
                <SFlex paddingTop={15} justify={'space-between'} width={'100%'}>
                    <h5>MOST POPULAR TOUR</h5>
                    <SButton>
                        <h5>Choose Your's</h5>
                    </SButton>
                </SFlex>
                <SFlex justify={'space-between'} width={'100%'}>
                    <SFlex width={180} height={150} className={styles.Box} direction={'column'} align={'end'}>
                        <SImage
                            src={'/4444.jpg'}
                            backgroundSize={'cover'}
                            width={'100%'}
                            height={'100%'}
                            align={'center'}
                            justify={'center'}
                            style={{ borderRadius: '15px' }}
                        >
                            <SButton
                                width={100}
                                height={20}
                                align={'start'}
                                justify={'center'}
                                style={{
                                    borderRadius: '15px',
                                }}
                            >
                                <a href="https://www.holidify.com/places/darjeeling/map-view.html">DARJEELING</a>
                            </SButton>
                        </SImage>
                        <SButton
                            width={100}
                            height={20}
                            align={'start'}
                            justify={'center'}
                            style={{
                                borderRadius: '15px',
                            }}
                        >
                            <p>Rs. 00000</p>
                        </SButton>
                    </SFlex>{' '}
                    <SFlex width={180} height={150} className={styles.Box} direction={'column'} align={'end'}>
                        <SImage
                            src={'/4444.jpg'}
                            backgroundSize={'cover'}
                            width={'100%'}
                            height={'100%'}
                            align={'center'}
                            justify={'center'}
                            style={{ borderRadius: '15px' }}
                        >
                            <SButton
                                width={100}
                                height={20}
                                align={'start'}
                                justify={'center'}
                                style={{
                                    borderRadius: '15px',
                                }}
                            >
                                <a href="https://www.holidify.com/places/darjeeling/map-view.html">DARJEELING</a>
                            </SButton>
                        </SImage>
                        <SButton
                            width={100}
                            height={20}
                            align={'start'}
                            justify={'center'}
                            style={{
                                borderRadius: '15px',
                            }}
                        >
                            <p>Rs. 00000</p>
                        </SButton>
                    </SFlex>
                    <SFlex width={180} height={150} className={styles.Box} direction={'column'} align={'end'}>
                        <SImage
                            src={'/4444.jpg'}
                            backgroundSize={'cover'}
                            width={'100%'}
                            height={'100%'}
                            align={'center'}
                            justify={'center'}
                            style={{ borderRadius: '15px' }}
                        >
                            <SButton
                                width={100}
                                height={20}
                                align={'start'}
                                justify={'center'}
                                style={{
                                    borderRadius: '15px',
                                }}
                            >
                                <a href="https://www.holidify.com/places/darjeeling/map-view.html">DARJEELING</a>
                            </SButton>
                        </SImage>
                        <SButton
                            width={100}
                            height={20}
                            align={'start'}
                            justify={'center'}
                            style={{
                                borderRadius: '15px',
                            }}
                        >
                            <p>Rs. 00000</p>
                        </SButton>
                    </SFlex>
                    <SFlex width={180} height={150} className={styles.Box} direction={'column'} align={'end'}>
                        <SImage
                            src={'/4444.jpg'}
                            backgroundSize={'cover'}
                            width={'100%'}
                            height={'100%'}
                            align={'center'}
                            justify={'center'}
                            style={{ borderRadius: '15px' }}
                        >
                            <SButton
                                width={100}
                                height={20}
                                align={'start'}
                                justify={'center'}
                                style={{
                                    borderRadius: '15px',
                                }}
                            >
                                <a href="https://www.holidify.com/places/darjeeling/map-view.html">DARJEELING</a>
                            </SButton>
                        </SImage>
                        <SButton
                            width={100}
                            height={20}
                            align={'start'}
                            justify={'center'}
                            style={{
                                borderRadius: '15px',
                            }}
                        >
                            <p>Rs. 00000</p>
                        </SButton>
                    </SFlex>
                    <SFlex width={180} height={150} className={styles.Box} direction={'column'} align={'end'}>
                        <SImage
                            src={'/4444.jpg'}
                            backgroundSize={'cover'}
                            width={'100%'}
                            height={'100%'}
                            align={'center'}
                            justify={'center'}
                            style={{ borderRadius: '15px' }}
                        >
                            <SButton
                                width={100}
                                height={20}
                                align={'start'}
                                justify={'center'}
                                style={{
                                    borderRadius: '15px',
                                }}
                            >
                                <a href="https://www.holidify.com/places/darjeeling/map-view.html">DARJEELING</a>
                            </SButton>
                        </SImage>
                        <SButton
                            width={100}
                            height={20}
                            align={'start'}
                            justify={'center'}
                            style={{
                                borderRadius: '15px',
                            }}
                        >
                            <p>Rs. 00000</p>
                        </SButton>
                    </SFlex>
                </SFlex>
                <br />
                <SFlex align={'center'} justify={'space-between'} width={'100%'} paddingTop={20} paddingBottom={10} padding={10}>
                    <SFlex direction={'column'} align={'center'} width={'50%'}>
                        <h5>Find a tour by Destintion</h5>
                        <SFlex>
                            <SFlex width={180} height={150} className={styles.Box} direction={'column'} align={'end'}>
                                <SImage
                                    src={'/4444.jpg'}
                                    backgroundSize={'cover'}
                                    width={'100%'}
                                    height={'100%'}
                                    align={'center'}
                                    justify={'center'}
                                    style={{ borderRadius: '15px' }}
                                >
                                    <SButton
                                        width={100}
                                        height={20}
                                        align={'start'}
                                        justify={'center'}
                                        style={{
                                            borderRadius: '15px',
                                        }}
                                    >
                                        <h5 style={{ color: 'white' }}>PURI</h5>
                                    </SButton>
                                </SImage>
                                <SButton
                                    width={100}
                                    height={20}
                                    align={'start'}
                                    justify={'center'}
                                    style={{
                                        borderRadius: '15px',
                                    }}
                                >
                                    <p>Rs. 00000</p>
                                </SButton>
                            </SFlex>
                            <SFlex width={180} height={150} className={styles.Box} direction={'column'} align={'end'}>
                                <SImage
                                    src={'/4444.jpg'}
                                    backgroundSize={'cover'}
                                    width={'100%'}
                                    height={'100%'}
                                    align={'center'}
                                    justify={'center'}
                                    style={{ borderRadius: '15px' }}
                                >
                                    <SButton
                                        width={100}
                                        height={20}
                                        align={'start'}
                                        justify={'center'}
                                        style={{
                                            borderRadius: '15px',
                                        }}
                                    >
                                        <a href="https://www.holidify.com/places/darjeeling/map-view.html">DARJEELING</a>
                                    </SButton>
                                </SImage>
                                <SButton
                                    width={100}
                                    height={20}
                                    align={'start'}
                                    justify={'center'}
                                    style={{
                                        borderRadius: '15px',
                                    }}
                                >
                                    <p>Rs. 00000</p>
                                </SButton>
                            </SFlex>
                        </SFlex>
                    </SFlex>
                    <SFlex direction={'column'} align={'center'} width={'50%'}>
                        <h5 style={{ color: 'whitesmoke' }}>Find a tour by Type</h5>
                        <SFlex
                            direction={'column'}
                            align={'start'}
                            style={{ border: '2px solid blue', borderRadius: '10px', background: 'darkslategrey' }}
                            width={'90%'}
                            height={150}
                            justify={'space-between'}
                            padding={5}
                            paddingTop={5}
                        >
                            <SFlex>
                                <CiDiscount1 style={{color: 'whitesmoke'}}></CiDiscount1>
                                <h6 style={{ color: 'whitesmoke' }}>Deals & Discount</h6>
                            </SFlex>
                            <SFlex>
                                <GiMeal style={{color: 'whitesmoke'}}></GiMeal>
                                <h6 style={{ color: 'whitesmoke' }}>Meals Included</h6>
                            </SFlex>
                            <SFlex>
                                <LuHotel style={{color: 'whitesmoke'}}></LuHotel>
                                <h6 style={{ color: 'whitesmoke' }}>Accomodations</h6>
                            </SFlex>
                            <SFlex>
                                <FaMapMarkedAlt style={{color: 'whitesmoke'}}></FaMapMarkedAlt>
                                <h6 style={{ color: 'whitesmoke' }}>Teaveling</h6>
                            </SFlex>
                        </SFlex>
                    </SFlex>
                </SFlex>
            </SFlex>
        </SFlex>
    );
}
