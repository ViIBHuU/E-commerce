

import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';

//components
import CustomButtons from './Custombuttons';
import Search from './search';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;


const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})
 const CustomButtonWrapper=styled(Box)`
     margin: 0 5% 0 auto;
 `

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    return (
        <StyledHeader position="fixed">
            <Toolbar style={{ minHeight: 55 }}>
                    <img src={logoURL} style={{ width: 75,marginLeft:110 }} />
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;