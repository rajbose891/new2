import { SButton, SFlex, SImage, SPageSection } from 'react-simple-ui-lib';

export function TrendingShows() {
    return (
        <SPageSection align={'start'} justify={'center'} height={'auto'}>
            <SFlex paddingTop={30} marginTop={40}>
                <h2>TRENDING SHOWS</h2>
            </SFlex>
            <br />

            <SFlex justify={'space-between'}>
                <SFlex direction={'column'} align={'center'} width={'25%'}>
                    <SImage src={'/103.png'} backgroundSize={'contain'} width={'100%'} height={200} />
                    <SButton>
                        <h2>Click</h2>
                    </SButton>
                </SFlex>
                <SFlex direction={'column'} align={'center'} width={'25%'}>
                    <SImage src={'/104.png'} backgroundSize={'contain'} width={'100%'} height={200} />
                    <SButton>
                        <h2>Click</h2>
                    </SButton>
                </SFlex>
                <SFlex direction={'column'} align={'center'} width={'25%'}>
                    <SImage src={'/105.png'} backgroundSize={'contain'} width={'100%'} height={200} />
                    <SButton>
                        <h2>Click</h2>
                    </SButton>
                </SFlex>
                <SFlex direction={'column'} align={'center'} width={'25%'}>
                    <SImage src={'/102.png'} backgroundSize={'contain'} width={'100%'} height={200} />
                    <SButton>
                        <h2>Click</h2>
                    </SButton>
                </SFlex>
            </SFlex>
        </SPageSection>
    );
}
