import { SButton, SFlex, SPageSection } from 'react-simple-ui-lib';

export function Listing() {
    return (
        <SPageSection height={'auto'}>
            {/*Movie Carousel*/}
            <SFlex align={'center'} justify={'space-between'} width={'100%'}>
                <SFlex direction={'column'}>
                    <p style={{ color: 'gray' }}>Movies</p>
                    <h5>Harry</h5>
                    <h5>Spider</h5>
                    <h5>Mac</h5>
                    <h5>Tom</h5>
                </SFlex>
                <SFlex direction={'column'}>
                    <p style={{ color: 'gray' }}>TV Shows</p>
                    <h5>cartoon</h5>
                    <h5>Serial</h5>
                    <h5>Drama</h5>
                    <h5>Story</h5>
                </SFlex>
                <SFlex direction={'column'}>
                    <p style={{ color: 'gray' }}>About</p>
                    <h5>FAQ</h5>
                    <h5>BLOG</h5>
                    <h5>DESCRIPTION</h5>
                    <h5>ADD.</h5>
                </SFlex>
            </SFlex>
        </SPageSection>
    );
}
