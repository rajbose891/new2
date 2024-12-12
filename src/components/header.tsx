import { SButton, SFlex, SImage } from 'react-simple-ui-lib';

import { RxExit } from 'react-icons/rx';

export function Header() {
    return (
        <SFlex paddingTop={15} padding={15} paddingBottom={10}>
            <SFlex
                direction={'column'}
                width={100}
                height={850}
                align={'center'}
                justify={'space-between'}
                paddingTop={15}
                paddingBottom={15}
                style={{
                    background: 'darkslateblue', opacity: '0.7',borderRadius: '10px'}}
            >
                <SFlex style={{ background: 'transparent' }} direction={'column'} align={'center'}>
                    <SImage src={'/7777.png'} backgroundSize={'cover'} height={75} width={75}
                            style={{ border: '1px solid black', borderRadius: '100px' }} />
                    <a href="https://www.holidify.com/country/india/map-view.html">MAP</a>
                </SFlex>
                <br />
                <SButton style={{ background: 'transparent' }}>
                    <h4 style={{ color: 'white' }}>HOME</h4>
                </SButton>
                <SButton style={{ background: 'transparent' }}>
                    <h4 style={{ color: 'white' }}>GALLERY</h4>
                </SButton>
                <br />
                <br />
                <br />
                <SButton style={{ background: 'transparent' }}>
                    <h4 style={{ color: 'white' }}>TREK</h4>
                </SButton>

                <SButton style={{ background: 'transparent' }}>
                    <h4 style={{ color: 'white' }}>TOUR</h4>
                </SButton>
                <br />
                <br />
                <SButton style={{ background: 'transparent' }}>
                    <h4 style={{ color: 'white' }}>FAQs</h4>
                </SButton>
                <br />
                <br />
                <SButton style={{ background: 'transparent' }}>
                    <h4 style={{ color: 'white' }}>ABOUT US</h4>
                </SButton>
                <br />
                <br />
                <br />
                <br />
                <br />
                <SButton style={{ background: 'transparent' }}>
                    <RxExit></RxExit>
                </SButton>
            </SFlex>
        </SFlex>
    );
}
