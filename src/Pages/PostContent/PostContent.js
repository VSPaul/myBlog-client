import React, { useEffect} from 'react';
// import { Link } from 'react-router-dom';


// PACKAGES
import styled from 'styled-components';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Remarkable } from 'remarkable';
// import RemarkableReactRenderer from 'remarkable-react';
import hljs from 'highlight.js';


// STYLE
// import {
//     Image,
//     CardContainerLink,
//     TitleWrapper,
//     EditCard,
//     ActionsWrapper,
// } from './CategoryStyle';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { getPostContent } from '../../Store/Actions/postsActions';

// COMPONENTS
// import DeleteModal from '../GeneralComponentsForDeposit/Modals/DeleteModal';

const GeneralWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const ContenWrapper = styled.div`
    padding: 20px;
    max-width: 80%;
`;


const PostContent = ({ flag }) => {
    const dispatch = useDispatch();
    const content = useSelector(({ posts }) => posts.content);

    // console.log('contet', content.content)

    useEffect(() => {
        dispatch(getPostContent(flag.post))
    }, [flag, dispatch]);

    // let md = new Remarkable();
    let md = new Remarkable({
        highlight: function (code, options) {
            // console.log(code)
            if (options && hljs.getLanguage(options)) {
                try {
                    return hljs.highlight(options, code).value;
                } catch (err) { }
            }

            try {
                return hljs.highlightAuto(code).value;
            } catch (err) { }

            return ''; // use external default escaping
        }
    });

    return (
        <GeneralWrapper>
            <ContenWrapper>
                <div dangerouslySetInnerHTML={{ __html: md.render(content.content) }}></div>
            </ContenWrapper>
        </GeneralWrapper>
    );
}

export default PostContent;