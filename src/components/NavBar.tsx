import { HStack, Image } from '@chakra-ui/react'
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

      <span>Game Hub - Nathan Moondi</span>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar