import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// PACKAGES
import styled from 'styled-components';


const CardWrapper = styled.div`
    position: relative;
    width: 400px;
    height: 600px;
    overflow: hidden;
    cursor: pointer;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    background: var(--background4);
        @media (max-width: 1150px) {
            width: 400px;
            margin: 10px 0 10px;
        }
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
    color: var(--text1);
        >h1{
            font-size: 5rem;
        }
`;



const CategoryCard = ({ post, index }) => {
    const [param, setParam] = useState()

    useEffect(() => {
        // const ceva = 'AmsCaaCCCooV'
        // let aa = []
        // for (let i = 0; i < ceva.length; i++) {
        //     if (ceva[i] === ceva[i].toUpperCase()) {
        //         if (ceva[i - 1] !== ceva[i].toUpperCase() && ceva[i - 1] !== undefined) {
        //             console.log(`${i + 1}.`, ceva.substring(0, i))
        //             // console.log(`${i + 1}.`, ceva.splice(i, 0, ' ').join(''))
        //             aa.push(ceva.substring(0, i))
        //             console.log(aa)
        //         }
        //     }
        // }

        const p = post.replace('.md', '');
        const o = p.split(' ').join('-').toLowerCase();
        const s = o.replace(/[&\\#,+()$~%'":*?!<>{}]/g, '');
        setParam(s);
        // console.log(s);
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