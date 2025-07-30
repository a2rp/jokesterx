import React from "react";
import { Styled } from "./styled";
import { CircularProgress } from "@mui/material";

const JokesGenerator = () => {
    const [joke, setJoke] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const [category, setCategory] = React.useState("Programming");

    const fetchJoke = () => {
        setLoading(true);
        setError("");
        setJoke("");

        fetch(`https://sv443.net/jokeapi/v2/joke/${category}?type=single`)
            .then((res) => res.json())
            .then((data) => {
                if (data.joke) {
                    setJoke(data.joke);
                } else {
                    setError("No joke found 😢");
                }
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to fetch joke. Try again.");
                setLoading(false);
            });
    };

    return (
        <>
            <Styled.Wrapper>
                <h1 className="heading">JokesterX:  Fetch laughs at lightning speed.</h1>
                <p className="desc">JokesterX is a sleek, modern React-based joke generator app powered by JokeAPI. It lets users pick joke categories and fetch hilarious one-liners instantly. Built with React, styled-components, and deployed to GitHub Pages, it's the perfect micro-app to learn React hooks, API calls, and UI state handling.</p>

                <div className="listsWrapper">
                    <div className="listMain">
                        <h2>🚀 Features:</h2>
                        <ul>
                            <li>🎯 Category filter (Programming, Misc, Pun, Dark, etc.)</li>
                            <li>⚡ Instant joke fetching with loading indicator</li>
                            <li>💥 Error handling with retry option</li>
                            <li>🎨 Clean responsive UI with styled-components</li>
                            <li>🔥 One-click deployment to GitHub Pages</li>
                        </ul>
                    </div>

                    <div className="listMain">
                        <h2>🛠️ Tech Stack:</h2>
                        <ul>
                            <li>Frontend: React (Hooks: useState)</li>
                            <li>Styling: styled-components</li>
                            <li>API: JokeAPI</li>
                            <li>Deployment: GitHub Pages</li>
                        </ul>
                    </div>


                    <div className="listMain">
                        <h2>📦 Future Enhancement:</h2>
                        <ul>
                            <li>✅ Dark Mode toggle</li>
                            <li>🔊 Text-to-speech (reads the joke aloud)</li>
                            <li>📋 Copy-to-clipboard feature</li>
                            <li>🗃️ Save favorite jokes (localStorage or Firebase)</li>
                            <li>🌍 Multilingual joke support (via translation API)</li>
                        </ul>
                    </div>
                    <div className="listMain">
                        <h2>🔗 API Used: JokeAPI v2</h2>
                        <h2>🔗 GitHub Link: </h2>
                        <h2>🔗 Live Link: </h2>
                    </div>
                </div>

                <Styled.ControlsWrapper>
                    <Styled.Select
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        <option value="Programming">Programming</option>
                        <option value="Misc">Misc</option>
                        <option value="Dark">Dark</option>
                        <option value="Pun">Pun</option>
                        <option value="Spooky">Spooky</option>
                        <option value="Christmas">Christmas</option>
                    </Styled.Select>
                    <Styled.Button
                        onClick={fetchJoke}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress /> : "Get a Joke"}
                    </Styled.Button>
                </Styled.ControlsWrapper>

                {loading && <Styled.Loader><CircularProgress /></Styled.Loader>}
                {error && <Styled.ErrorText>{error}</Styled.ErrorText>}
                {joke && <Styled.JokeText>{joke}</Styled.JokeText>}
            </Styled.Wrapper>
        </>
    );
};

export default JokesGenerator;
