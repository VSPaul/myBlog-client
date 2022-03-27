import React, { useState, useRef, useEffect } from 'react';

// PACKAGES
import styled from 'styled-components';

// REDUX
import { useDispatch } from 'react-redux';
import { uploadFile } from '../../Store/Actions/postsActions';


const DialogBoxWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    transition: var(--transition) ease;
    cursor: pointer;
        &:hover{
            >h4{
                transition: var(--transition) ease-in-out;
                color: var(--text3);      
            }    
        }
`;

const DialogBox = styled.div`
    position: absolute;
    bottom: 60px;
    right: 10px;
    width: 300px;
    padding: 20px;
    z-index: 88;
    text-align: left;
    color: var(--text3);
    border-radius: var(--radius);
    background: var(--background4);
    box-shadow: 0 8px 16px 0 rgb(0 0 0 / 20%);
    opacity: ${props => !props.open ? '0' : '1'};
    visibility: ${props => !props.open ? 'hidden' : 'visible'};
    backface-visibility: ${props => !props.open ? 'hidden' : 'visible'};;
    transform: ${props => !props.open ? 'rotate3d(1, 0, 0, -90deg)' : 'rotate3d(0, 0, 0, 0)'};
        >h4{
            font-weight:bold;
            color: var(--text2);
        }
`;

const Hr = styled.hr`
    border: none;
    border-bottom: 1px solid var(--background3);
    width: 100%;
    margin: 10px auto;
`;

const ActionBtn = styled.div`
    width: 50px;
    height: 50px;
    margin: 5px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: var(--background1);
        >i{
            color:  var(--text5);
            font-size: 20px;
        }
        &:hover{
                >i{
                    color: ${props => props.color};
                    transition:color var(--transition) ease-in-out;
                }
           }
`;


const AddPost = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const openDialogRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            // console.log('haaai', e.target)
            if (openDialogRef.current && !openDialogRef.current.contains(e.target)) {

                if (openDialogRef.current.contains(e.target) === false) {
                    setOpen(false);
                    // console.log('i am false')
                } else {
                    setOpen(true);
                    // console.log('i am true')
                }

            }
        };
        document.addEventListener("mousedown", handler, true);
        return () => {
            document.removeEventListener("mousedown", handler, true);
        }
    }, [open]);

    const handleFile = (e) => {
        const file = e.target.files[0];

        // console.log('file', file);
        if (file !== undefined) {
            dispatch(uploadFile(file));
            setOpen(!open);
        }
    };

    return (
        <>
            <div ref={openDialogRef}>
                <DialogBoxWrapper >
                    <ActionBtn onClick={() => setOpen(!open)} color='var(--success)'>
                        <i className="fa-solid fa-plus"></i>
                    </ActionBtn>

                </DialogBoxWrapper>

                <DialogBox open={open}>
                    <h4>Add new post</h4>

                    <Hr></Hr>
                    <input type='file' onChange={handleFile}></input>

                </DialogBox>
            </div>
        </ >
    );
};

export default AddPost;
