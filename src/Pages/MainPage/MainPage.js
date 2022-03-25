import React from 'react';
// import { Link } from 'react-router-dom';

// ASSETS
// import loading from '../../../Assets/tableLoading.gif';

// PACKAGES
import styled from 'styled-components';

// COMPONENTS
import PostCard from '../Components/PostCard';

// REDUX
import { useSelector } from 'react-redux';

const Title = styled.h1`
    text-align: center;
    font-weight: bold;
    font-size: 3rem;
    padding-top: 100px;
`;

const PostssWrapper = styled.div`
    width:100%;
    height: calc(100vh - 260px);
    margin: 30px 0 0;
    padding: 20px 0;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-column: 50px;
    grid-row-gap: 50px;
    justify-content: space-evenly;
        &::-webkit-scrollbar {
            display: none;
        };
        /* @media (max-width: 1850px) {
            grid-template-columns: repeat(3,auto);
        } */
        @media (max-width: 1450px) {
            grid-template-columns: repeat(2,auto);
        }
        @media (max-width: 1000px) {
            grid-template-columns: repeat(1,auto);
        }
`;


const MainPage = () => {
    const posts = useSelector(({ posts }) => posts.allPosts);

    // console.log('posts', posts);

    return (
        <>
            <Title>Paul's Blog</Title>

            <PostssWrapper>
                {posts.map((post, i) =>
                    <PostCard
                        key={i}
                        post={post}
                        index={i}
                    />
                )}
            </PostssWrapper>
        </>
    );
}

export default MainPage;