import { render, screen, waitFor } from '@testing-library/react';
import Feed from '.';
import WrapperReactQuery from '../../shared/WrapperReactQuery';
import { setupServer } from 'msw/node'
import { rest } from 'msw'

const data = [
    {
        "id": 1,
        "rating": 33,
        "avatarUrl": "https://robohash.org/utcupiditateodit.png?size=50x50&set=set1",
        "time": "29/05/2021",
        "channel": "even-keeled",
        "title": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        "totalComments": 18
    },
]

const worker = setupServer(
    rest.get('http://localhost:5000/posts', (req, res, ctx) => {
        return res(ctx.json(data))
    }),
)


describe('Feed component', () => { 

    beforeAll(() => {
        worker.listen();
    })

    afterEach(() => {
        worker.resetHandlers()
    })

    afterAll(() => worker.close())


    test('should render a feed', async () => {

        render(
            <WrapperReactQuery>
                <Feed />
            </WrapperReactQuery>
        );

        await waitFor(() => expect(screen.getByTestId('seeMore')).toBeVisible())
        
    })
})