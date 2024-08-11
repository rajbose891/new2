import { SButton, SFlex, SImage } from 'react-simple-ui-lib';
import { LuHome } from 'react-icons/lu';
import { FaBoxTissue } from 'react-icons/fa6';
import { IoAccessibilitySharp, IoSettings } from 'react-icons/io5';
import { VscGraph } from 'react-icons/vsc';
import { RxExit } from 'react-icons/rx';

export function Header() {
    return (
        <SFlex paddingTop={15} padding={15} paddingBottom={10}>
                    <SFlex
                        direction={'column'}
                        width={55}
                        height={'100%'}
                        align={'center'}
                        paddingTop={15}
                        paddingBottom={15}
                        style={{
                            background: 'rgb(27,12,131)',
                            background: 'linear-gradient(90deg, rgba(27,12,131,0.2685111667798913) 0%, rgba(68,68,75,0.9757575767627661) 0%)',
                            borderRadius: '25px',
                            border: '2px solid grey',
                        }}
                    >
                        <SButton style={{background: 'transparent'}}>
                            <SImage
                                src={'/606.jpeg'}
                                backgroundSize={'cover'}
                                height={20}
                                width={20}
                                style={{ border: '1px solid black', borderRadius: '100px' }}
                            />
                        </SButton>
                        <br />
                        <SButton style={{background: 'transparent'}}>
                            <LuHome></LuHome>
                        </SButton>
                        <br />
                        <SButton style={{background: 'transparent'}}>
                            <FaBoxTissue></FaBoxTissue>
                        </SButton>
                        <br />
                        <SButton style={{background: 'transparent'}}>
                            <FaBoxTissue></FaBoxTissue>
                        </SButton>
                        <br />
                        <SButton style={{background: 'transparent'}}>
                            <IoAccessibilitySharp></IoAccessibilitySharp>
                        </SButton>
                        <br />
                        <SButton style={{background: 'transparent'}}>
                            <IoSettings></IoSettings>
                        </SButton>
                        <br />
                        <SButton style={{background: 'transparent'}}>
                            <VscGraph></VscGraph>
                        </SButton>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <SButton style={{background: 'transparent'}}>
                            <RxExit></RxExit>
                        </SButton>
                    </SFlex>
                </SFlex>
    );
}
