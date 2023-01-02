import { ListItem, ListIcon } from '@chakra-ui/react';
import { FC } from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { ACCENT_COLOR } from '../../styles/consts';

interface SkillListItemProps {
    skill: string;
}

const SkillListItem: FC<SkillListItemProps> = ({ skill }) => {
    return (
        <ListItem>
            <ListIcon as={AiFillCaretRight} color={ACCENT_COLOR} />
            {skill}
        </ListItem>
    );
};

export default SkillListItem;
