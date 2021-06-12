import React from 'react'
import {
    Profile,
} from './ProfileDropdown.styles'
import { Avatar } from '../../shared/Avatar';
import { useAtom } from 'jotai';
import { SessionAtom } from '../../../atoms/SessionAtom';

export default function ProfileDropdown() {
    const [session] = useAtom(SessionAtom)

    return (
        <Profile>
        <Avatar size={32} src={session.avatarUrl} alt={session.username} />
        <section>
            <p>{session.name}</p>
            <small>{session.username}</small>
        </section>
    </Profile>
    )
}
