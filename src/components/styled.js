import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        max-width: 900px;
        margin: auto;
        padding: 50px;
        @media (width < 900px) {
            padding: 15px;
        }

        .heading {
            /* border: 1px solid #f00; */
            font-size: 32px;
        }
        .desc {
            padding: 15px;
        }
        .listsWrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 50px;

            .listMain {
                flex: 1 1 300px;

                h2 {
                    font-size: 20px;
                }

                ul {
                    margin-left: 50px;
                }
            }
        }
    `,

    ControlsWrapper: styled.div`
        /* border: 1px solid #f00; */
        display: flex;
        gap: 30px;
        margin-top: 30px;
        height: 40px;
    `,

    Select: styled.select`
        font-size: 1rem;
        /* padding: 8px 12px; */
        border-radius: 6px;
        width: 100%;
    `,

    Button: styled.button`
        border: none;
        border: 1px solid #aaa;
        background-color: #111;
        color: white;
        width: 150px;
        height: 40px;
        font-size: 1rem;
        border-radius: 6px;
        cursor: pointer;
        overflow: hidden;

        &:hover {
            background-color: #222;
        }
    `,

    ErrorText: styled.p`
        color: red;
        margin-top: 20px;
    `,

    Loader: styled.p`
        font-style: italic;
        margin-top: 20px;
    `,

    JokeText: styled.p`
        font-size: 1.2rem;
        margin-top: 20px;
        background: #f9f9f9;
        padding: 20px;
        border-radius: 10px;
    `,
};
