import { expect, renderComponent } from './testHelper';
import CardDetail from '../components/dashboard/card_detail';
import CardList from '../components/dashboard/card_list';
import UpdateButton from '../components/dashboard/update_button';
import App from '../App';
import ReactDOM from 'react-dom';
import React from 'react';
import { fetchData } from '../actions/index';
import TestUtils from 'react-addons-test-utils';

// test('returns true', () => {
//     expect(true).equal(true);
// });

// test('sums numbers', () => {
//     expect(1 + 2).equal(3);
//     expect(2 + 2).equal(4);
// });

test('rendering CardDetail', () => {
    var cardDetailProps = {
        title: 'test title',
        value: 'test_value',
        units: 'test_units'
    };
    var component = renderComponent(CardDetail, cardDetailProps);
    const tree = component.instance;
    console.log(tree.props.children.props);
    let cardDetail = TestUtils.findRenderedComponentWithType(tree, CardDetail);



    console.log(cardDetail.props);

    // console.log($el.htmlFor);
});

test('cardList renders multiple cardDetail', () => {
    const cardDetailProps = {
        iotData: [{
            title: 'test title',
            value: 'test_value',
            units: 'test_units'
        }, {
            title: 'test title',
            value: 'test_value',
            units: 'test_units'
        }, {
            title: 'test title',
            value: 'test_value',
            units: 'test_units'
        }]
    };

    const { instance, $el } = renderComponent(CardList, cardDetailProps);

    const cardListInstance = TestUtils.findRenderedComponentWithType(instance, CardList);
    console.log($el.find(['[data-test-component="cardDetail"]']))
    // expect(cardListInstance).to.have.length(cardDetailProps.length);
    // console.log('cardListInstance: ', cardListInstance);
})

// test('rendering UpdateButton', () => {
//     renderComponent(UpdateButton, {fetchData}, undefined);
// });

