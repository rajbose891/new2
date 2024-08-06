import { SButton, SFlex, SImage, SPageSection } from 'react-simple-ui-lib';

export function End() {
    return (
        <SPageSection align={'center'} height={'auto'}>
                <SFlex direction={'column'} justify={'start'} align={'center'} width={'100%'}>
                    <h1 style={{ fontSize: 'x-large' }}>LIKE & SUPPORT-This is incredible support for us...........</h1>
                    <br />
                    <h2>
                        PLEASE PRESS
                        <SButton>
                            <h1> ❤️</h1>
                        </SButton>
                    </h2>
                </SFlex>
                <br />
                <br />
                <br />
                <br />
                <br />
                <SFlex gap={200} paddingBottom={10} paddingTop={10} style={{ background: 'white' }}>
                    <SButton>
                        <h1>For Designers</h1>
                    </SButton>
                    <SButton>
                        <h1>Hire Talent</h1>
                    </SButton>
                    <SButton>
                        <h1>Inspiration</h1>
                    </SButton>
                    <SButton>
                        <h1>Support</h1>
                    </SButton>
                </SFlex>
                height={'auto'} backgroundUrl={'/303.jpg'}>
                <SFlex gap={450} paddingTop={50}>
                    <SFlex paddingTop={10} style={{ background: 'gray' }}>
                        <h1 style={{ fontSize: 'x-large' }}>CONTACT US:</h1>
                        <SButton>
                            <h1>💌 / 📞</h1>
                        </SButton>
                    </SFlex>
                    <SFlex justify={'center'} align={'center'} style={{ background: 'white' }} paddingTop={10}>
                        <SButton>
                            <h1 style={{ color: 'deepskyblue', fontStyle: 'italic', fontSize: 'xxx-large' }}>P.A.R.
                                Website</h1>
                        </SButton>
                    </SFlex>
                </SFlex>
                <SPageSection height={'auto'} align={'center'} justify={'start'}>
                    <SImage src={'/1022.jpg'} backgroundSize={'contain'} width={'100%'} height={200} />
                </SPageSection>
            </SPageSection>
    );
}
