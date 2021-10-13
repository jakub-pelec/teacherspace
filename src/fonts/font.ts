import { createGlobalStyle } from 'styled-components';

import NunitoBlack from './Nunito/Nunito-Black.ttf';
import NunitoBold from './Nunito/Nunito-Bold.ttf';
import NunitoRegular from './Nunito/Nunito-Regular.ttf';
import NunitoLight from './Nunito/Nunito-Light.ttf';


export default createGlobalStyle`
    @font-face {
        font-family: 'Nunito';
        src: local('Nunito'), local('Nunito'),
        url(${NunitoBlack}) format('ttf'),
        url(${NunitoRegular}) format('ttf'),
        url(${NunitoLight}) format('ttf'),
        url(${NunitoBold}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }

    * {
        font-family: Nunito, sans-serif;
    }
`;