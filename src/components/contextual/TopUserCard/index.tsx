import React from 'react'
import { useQuery } from 'react-query'
import api from '../../../services/api'
import AsideCard from '../../shared/AsideCard'
import {
    UserItem,
    Container
} from './TopUserCard.styles'

function TopUserCard() {
    const {data} = useQuery('topUsers', () => api.get("/topUsers").then(resp => resp.data))
    return (
        <AsideCard title="Top Users" >
            <Container>
                {data?.map((item: string, index: number) => <UserItem key={item}>{index + 1}. {item}</UserItem>)}
            </Container>     
        </AsideCard>
    )
}

export default TopUserCard
