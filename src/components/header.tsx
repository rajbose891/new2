import { SButton, SFlex } from 'react-simple-ui-lib';

export function Header() {
    return (
        <SFlex width={'100%'} style={{ background: 'black' }} justify={'space-between'} align={'center'}>
            <SButton style={{ background: 'blue' }}>Kordless</SButton>
            <SFlex justify={'center'} gap={50}>
                <SButton style={{ background: 'blue' }}>Home</SButton>
                <SButton style={{ background: 'blue' }}>Movies</SButton>
                <SButton style={{ background: 'blue' }}>TV</SButton>
                <SButton style={{ background: 'blue' }}>Shows</SButton>
                <SButton style={{ background: 'blue' }}>Explore</SButton>
            </SFlex>
            <SFlex>
                <SButton style={{ background: 'blue' }}>🔎Search</SButton>
                <SButton style={{ background: 'blue' }}>Login / Sign UP</SButton>
            </SFlex>
        </SFlex>
    );
}
