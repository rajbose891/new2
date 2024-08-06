import { SButton, SFlex, SPageSection } from 'react-simple-ui-lib';

export function MovieBanner() {
    return (
        <SPageSection backgroundUrl={'/banner.jpg'} backgroundSize={'cover'} height={1000} paddingTop={50} align={'center'} justify={'start'}>
            <h2 style={{ color: 'white', textAlign: 'center' }}>
                FEEL THE MOVIE:TAKE OUR QUIZ TO DETERMINE <br />
                YOUR MOOD FOR THE PERFECT VIEWING EXPERIENCE
            </h2>
        </SPageSection>
    );
}
