import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';


// PACKAGES
import styled from 'styled-components';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// import { Remarkable } from 'remarkable';
// import RemarkableReactRenderer from 'remarkable-react';
// import hljs from 'highlight.js';

import ReactMarkdown from 'react-markdown';
// import Prism from 'prismjs';
// import 'prismjs/themes/prism.css';
// import 'prismjs/themes/prism-okaidia.css';
import SyntaxHighlighter from "react-syntax-highlighter";
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { getPostContent } from '../../Store/Actions/postsActions';


const GeneralWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const ContenWrapper = styled.div`
    padding: 20px;
    width: 80%;
    max-width: 1200px;
`;

const Title = styled.div`
    font-size: 3.5rem;
    font-weight: bold;
`;

const Auth = styled.div`
    font-style: italic;
    padding-bottom: 2rem;
    color: var(--text3);
`;


const PostContent = ({ flag }) => {
    const dispatch = useDispatch();
    const content = useSelector(({ posts }) => posts.content);

    // console.log('contet',content.content)

    useEffect(() => {
        dispatch(getPostContent(flag.post))
    }, [flag, dispatch]);

    // let md = new Remarkable();
    // let md = new Remarkable({
    //     highlight: function (code, options) {
    //         // console.log(code)
    //         if (options && hljs.getLanguage(options)) {
    //             try {
    //                 return hljs.highlight(options, code).value;
    //             } catch (err) { }
    //         }

    //         try {
    //             return hljs.highlightAuto(code).value;
    //         } catch (err) { }

    //         return ''; // use external default escaping
    //     }
    // });

    // function CodeBlock(props) {
    //     let cls;
    //     let html = props.value;

    //     console.log('props', props.language)
    //     try {
    //         cls = "language-" + props.language;
    //         html = Prism.highlight(props.value, Prism.languages[props.language]);
    //     } catch (err) {
    //         // If we weren't able to use Prism to parse the string, then return the original value so
    //         // that something is rendered.
    //     } finally {
    //         return (
    //             <pre className={cls}>
    //                 <code dangerouslySetInnerHTML={{ __html: html }} className={cls} />
    //             </pre>
    //         );
    //     }
    // }

    return (
        <GeneralWrapper>
            <ContenWrapper>
                <Title>{content !== undefined && content.data.title}</Title>
                <Auth>{content !== undefined && content.data.author}</Auth>
                <ReactMarkdown
                    children={content !== undefined ? content.content : ''}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '')
                            return !inline && match ? (
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, '')}
                                    style={irBlack}
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            )
                        },

                    }}
                />

                {/* <ReactMarkdown children={content.content} components={{ code: CodeBlock }} /> */}
                {/* <div dangerouslySetInnerHTML={{ __html: md.render(content.content) }}></div> */}
            </ContenWrapper>
        </GeneralWrapper>
    );
}

export default PostContent;