import styled from 'styled-components'

export const ProdWrapper = styled.div ``;

export const ProdBox = styled.div `
    padding-bottom: 25px;
    margin-bottom: 30px;
    margin-top: 20px;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    transition: all .3s;
`;