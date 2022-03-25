import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// PACKAGES
import styled from 'styled-components';
import {
    camelCase,
    capitalCase,
    constantCase,
    dotCase,
    headerCase,
    noCase,
    paramCase,
    pascalCase,
    pathCase,
    sentenceCase,
    snakeCase,
} from "change-case";


const CardWrapper = styled.div`
    position: relative;
    width: 400px;
    height: 600px;
    overflow: hidden;
    cursor: pointer;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    /* background: var(--background4); */
        @media (max-width: 1150px) {
            width: 400px;
            margin: 10px 0 10px;
        }
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
`;

const CardContainerLink = styled(Link)`
    width: 400px;
    height: 600px;
    text-decoration: none;
`;

const TitleWrapper = styled.div`
    width: 400px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: var(--text5);
        >h1{
            font-size: 5rem;
        }
`;

const color = [
    'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
    'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)',
    'linear-gradient(to top, #c471f5 0%, #fa71cd 100%)'
];


const CategoryCard = ({ post, index }) => {
    const [param, setParam] = useState()

    useEffect(() => {
        // const ceva = 'AmsCaaCCCooV?-v32.1 MVV!.md'
        // console.log ('HATA', ceva.replace(/([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g, '$1$4 $2$3$5'))

        const p = post.replace('.md', '');
        const o = p.replace(/([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g, '$1$4 $2$3$5');
        const s = o.split(' ').join('-').toLowerCase();
        const t = s.replace(/[&\\#,+()$~%'":*?!<>{}]/g, '');
        setParam(t);
        // console.log(t);
    }, [post])

    return (
        <CardWrapper>
            <CardContainerLink
                to={{
                    pathname: `/blog/${param}`,
                    state: { post }
                }}
            >
                <TitleWrapper>
                    <h1> Blog {index + 1}</h1>
                </TitleWrapper>

            </CardContainerLink>

        </CardWrapper>
    );
}

export default CategoryCard;