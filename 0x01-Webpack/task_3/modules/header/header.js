import $ from 'jquery';
import _ from 'lodash';
import './header.css';

$('body').append('<header></header>');
$('header').append('<div id="logo"></div>');
$('header').append('<h1>Holberton Dashboard</h1>');

console.log('Init header');