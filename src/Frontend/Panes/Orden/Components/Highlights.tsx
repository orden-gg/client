import React, { useState } from 'react';
import styled from 'styled-components';

import { Padded } from '../../../Components/CoreUI';
import { StatIcon } from '../../../Components/Icons';

import dfstyles from '../../../Styles/dfstyles';

const Wrapper = styled(Padded)`
    display: flex;
    align-items: center;
    position: absolute;
    right: 200px;
    bottom: 0;
    z-index: 999999;
    backgroud-color: #333333
    color: ${dfstyles.colors.text};
`;

const styles = {
    margin: '0 5px'
}

const ids = [0, 1, 2, 3, 4];

export function Highlighs() {
    const [ states, setStates ] = useState(ids.map( (id) => true));

    const changeShow = (id: number) => {
        const duplicate = [...states];
        duplicate[id] = !states[id]

        setStates(duplicate);
    }

    return (
        <Wrapper>
            {
                ids.map( id => {

                    return (
                        <div onClick={() => changeShow(id)} style={styles}>
                            <StatIcon stat={id} />
                        </div>
                    )
                })
            }
        </Wrapper>
    );
}
