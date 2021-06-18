import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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

const server = setupServer(
    rest.get('http://localhost:5000/posts', (req, res, ctx) => {
        return res(ctx.json(data))
    }),
)


describe('Feed component', () => { 

    beforeAll(() => {
        server.listen();
    })

    afterEach(() => {
        server.resetHandlers()
    })

    afterAll(() => server.close())


    test('should render a feed', async () => {

        render(
            <WrapperReactQuery>
                <Feed />
            </WrapperReactQuery>
        );

        await waitFor(() => expect(screen.getByTestId('seeMore')).toBeVisible())
        
    });

    test('should submit a new post', async () => {
        render(
            <WrapperReactQuery>
                <Feed />
            </WrapperReactQuery>
        );
        
        const textArea = screen.getByTestId('feedForm.textarea');
        const button = screen.getByTestId('feedForm.button');

        fireEvent.change(textArea, { value: 'teste' });
        fireEvent.click(button);
    })

    test('should be call the next Page', async () => {
        server.use(
            rest.post('/posts', (req, res, ctx) => {
                return res(
                    ctx.status(201),
                    ctx.json({...data })
                )
            })
        )
        
        render(
            <WrapperReactQuery>
                <Feed />
            </WrapperReactQuery>
        );

        const seeMore = await screen.findByTestId("seeMore");
        fireEvent.click(seeMore)
        
    })
})