import { SButton, SFlex, SPageSection } from 'react-simple-ui-lib';

export function Chatting() {
    return (
        <SPageSection backgroundUrl={'/202.jpg'} backgroundSize={'cover'} height={500} align={'center'} justify={'center'}>
            <SFlex style={{ background: 'whitesmoke' }} justify={'center'} align={'center'} direction={'column'}>
                <h1 style={{ color: 'blue', fontSize: 'xxx-large' }}>
                    WANT TO <br />
                    JOIN US?
                </h1>
                <br />
                <br />
                <h3 style={{ fontStyle: 'italic' }}>
                    <SButton>Let's Talk</SButton>
                </h3>
            </SFlex>
        </SPageSection>
    );
}
