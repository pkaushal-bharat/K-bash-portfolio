import styled from 'styled-components';

const TitleBar = styled.div`
    height: 22px;
    padding: 3px 5px 1px 5px;
    border-radius: 5px 5px 0 0;
    background-color: #dddddd;
    background-image: -webkit-linear-gradient(top, #dddddd 0%, #c8c8c8 100%);
`;

const Content = styled.div`
    height: 100%;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .05);
    box-shadow: 0px 0px 6px rgba(1, 1, 1, .2);
`

const ActionButtons = styled.button`
    border-radius: 50%;
    width: 18px;
    height: 18px;
    border: none;
    margin: 0 2px;
`;

const MinimizeButton = styled(ActionButtons)`
    background-color: #0F0;
`;

const CrossButton = styled(ActionButtons)`
    background-color: #F00;
`;

const MaximizeButton = styled(ActionButtons)`
    background-color: #fdbc40;
`;

const ButtonContainer = styled.div`
    flex-direction: row;
    display: flex;
    background: transparent;
`;

export {
    TitleBar,
    Content,
    CrossButton,
    MinimizeButton,
    MaximizeButton,
    ButtonContainer,
}
