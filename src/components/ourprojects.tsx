import { SButton, SFlex, SImage, SSwiper } from 'react-simple-ui-lib';

const my_images = ['/22.webp', '/33.webp', '/44.webp', '/55.webp', '/66.webp'];

export function OurProjects() {
    return (
        <SFlex width={1200} paddingTop={30}>
            <SSwiper
                autoPlay={true}
                items={my_images}
                renderItem={(item, idx) => (
                    <SFlex align={'center'} direction={'column'} justify={'start'} height={300} width={'100%'} style={{ border: '1px solid red' }}>
                        <SImage src={item} backgroundSize={'contain'} width={'100%'} height={150} />
                        <SFlex justify={'space-between'} paddingTop={20}>
                            {idx}
                        </SFlex>
                        <SFlex justify={'space-between'} paddingTop={20}>
                            <SButton>rate</SButton>
                        </SFlex>
                    </SFlex>
                )}
            />
        </SFlex>
    );
}
