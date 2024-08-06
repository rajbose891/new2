import { SButton, SFlex } from 'react-simple-ui-lib';

export function Description() {
    return (
        <SFlex direction={'column'} paddingTop={30} align={'center'} justify={'center'}>
            <h1 style={{ color: 'powderblue' }}>
                Kordless is a new streaming service that offers a wide variety of award-winning <br />
                TV shows, movies and more. Based on a smart solution and <br />
                well-thought-out artificial intelligence, <br />
                the service allows to personalize content as efficiently as possible.
            </h1>
            <br />
            <br />
            <h2 style={{ color: 'powderblue' }}>
                📨 Have a project idea? Please contact us:
                <SButton>
                    <h2 style={{ color: 'blue' }}>PAR.digital@gmail.com</h2>
                </SButton>
            </h2>
        </SFlex>
    );
}
