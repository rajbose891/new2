import { SButton, SFlex, SImage, SPageSection } from 'react-simple-ui-lib';

export function LetsGetStarted() {
    return (
        <SPageSection align={'start'} justify={'center'} height={'auto'}>
            <SFlex justify={'space-between'} align={'center'} width={'100%'}>
                <h3>KNOW YOU WANT?LET'S GET STARTED</h3>
                <SButton style={{ background: 'blue' }}>See all</SButton>
            </SFlex>
            <br />
            <SFlex wrap width={'100%'}>
                <SImage src={'/1.jpg'} backgroundSize={'contain'} width={100} height={50} />
                <SImage src={'/2.png'} backgroundSize={'contain'} width={100} height={60} />
                <SImage src={'/3.webp'} backgroundSize={'contain'} width={100} height={60} />
                <SImage src={'/4.jfif'} backgroundSize={'contain'} width={100} height={60} />
                <SImage src={'/5.png'} backgroundSize={'contain'} width={100} height={60} />
                <SImage src={'/6.png'} backgroundSize={'contain'} width={100} height={60} />
                <SImage src={'/7.png'} backgroundSize={'contain'} width={100} height={60} />
                <SImage src={'/8.jpg'} backgroundSize={'contain'} width={100} height={60} />
                <SImage src={'/9.png'} backgroundSize={'contain'} width={100} height={60} />
                <SImage src={'/10.png'} backgroundSize={'contain'} width={100} height={60} />
            </SFlex>
        </SPageSection>
    );
}
