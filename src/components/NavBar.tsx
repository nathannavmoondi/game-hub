import { HStack, Image, Button } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding='10px'>      
      {/* <Image src='https://static.vecteezy.com/system/resources/previews/017/744/677/non_2x/video-game-icon-png.png' boxSize={'60px' as string} /> */}

      <span><b>Game Hub - Nathan Nav Moondi</b></span>
      <SearchInput onSearch={onSearch} />
      <Button 
        colorScheme='blue' 
        onClick={() => window.open('https://github.com/nathannavmoondi/game-hub', '_blank')}
      >
        Github
      </Button>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar