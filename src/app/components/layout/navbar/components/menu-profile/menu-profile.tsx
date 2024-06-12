import Image from 'next/image'
import { MdOutlineArrowDropDown } from 'react-icons/md'

export const ProfileTrigger = ({ name }: { name: string }) => (
  <span className="menu-profile-trigger">
    <Image
      alt="Foto do usuário"
      src="https://avatars.githubusercontent.com/u/46795065?v=4"
      width={35}
      height={35}
    />
    {name}
    <MdOutlineArrowDropDown size={15} />
  </span>
)
