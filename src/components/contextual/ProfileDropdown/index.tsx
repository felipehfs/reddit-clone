import React from 'react'
import {
    Profile,
} from './ProfileDropdown.styles'
import { Avatar } from '../../shared/Avatar';

export default function ProfileDropdown() {

    return (
        <Profile>
        <Avatar size={32} src="https://ui-avatars.com/api/?name=felipe+henrique" alt="Felipe Henrique" />
        <section>
            <p>Felipe Henrique</p>
            <small>Felipehfs</small>
        </section>
    </Profile>
    )
}
